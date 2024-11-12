import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { remark } from "remark";
import remarkParse from "remark-parse";
import { Node } from "unist";
import { Heading, Parent, Text } from "mdast";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "../../public/content/web");
const outputPath = path.join(__dirname, "../shared/content.json");

// Function to format names to a label format
const formatLabel = (name: string) =>
  name
    .replace(/-/g, " ")
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Type guard to check if a node is a heading
const isHeading = (node: Node): node is Heading =>
  node.type === "heading" && (node as Heading).depth !== undefined;

// Type guard to check if a node has children
const hasChildren = (node: Node): node is Parent =>
  Array.isArray((node as Parent).children);

// Function to extract "General Notes", "Gherkin", "Condensed", and "otherContent" with heading only for otherContent
const extractSections = (content: string) => {
  let generalNotesContent = "";
  let gherkinContent = "";
  let condensedContent = "";
  let otherContent = "";

  const tree = remark().use(remarkParse).parse(content);

  let currentSection: "generalNotes" | "gherkin" | "condensed" | "other" =
    "other";

  const visit = (node: Node) => {
    if (isHeading(node) && hasChildren(node) && node.depth === 1) {
      const headingText = (node.children[0] as Text).value.toLowerCase();

      // Set the current section based on the heading text
      if (headingText.includes("general notes")) {
        currentSection = "generalNotes";
      } else if (headingText.includes("gherkin")) {
        currentSection = "gherkin";
      } else if (headingText.includes("condensed")) {
        currentSection = "condensed";
      } else {
        currentSection = "other";
        otherContent += `# ${headingText}\n\n`; // Include heading in otherContent only
      }
      return; // Skip processing this heading's content
    }

    // Collect content based on the current section
    if (node.type === "paragraph" && hasChildren(node)) {
      const paragraphContent = node.children
        .map((child) => (child.type === "text" ? (child as Text).value : ""))
        .join("");

      if (currentSection === "generalNotes") {
        generalNotesContent += paragraphContent + "\n";
      } else if (currentSection === "gherkin") {
        gherkinContent += paragraphContent + "\n";
      } else if (currentSection === "condensed") {
        condensedContent += paragraphContent + "\n";
      } else {
        otherContent += paragraphContent + "\n";
      }
    }

    // Collect list items
    if (node.type === "listItem" && hasChildren(node)) {
      const listItemContent = node.children
        .map((child) => (child.type === "text" ? (child as Text).value : ""))
        .join("");

      if (currentSection === "generalNotes") {
        generalNotesContent += "- " + listItemContent + "\n";
      } else if (currentSection === "gherkin") {
        gherkinContent += "- " + listItemContent + "\n";
      } else if (currentSection === "condensed") {
        condensedContent += "- " + listItemContent + "\n";
      } else {
        otherContent += "- " + listItemContent + "\n";
      }
    }

    // Capture code blocks
    if (node.type === "code") {
      const codeNode = node as any;
      const codeBlock =
        "```" + (codeNode.lang || "") + "\n" + codeNode.value + "\n```";
      if (currentSection === "generalNotes") {
        generalNotesContent += codeBlock + "\n";
      } else if (currentSection === "gherkin") {
        gherkinContent += codeBlock + "\n";
      } else if (currentSection === "condensed") {
        condensedContent += codeBlock + "\n";
      } else {
        otherContent += codeBlock + "\n";
      }
    }

    // Capture nested headings within otherContent
    if (isHeading(node) && currentSection === "other") {
      const headingContent = `${"#".repeat(node.depth)} ${
        (node.children[0] as Text).value
      }\n\n`;
      otherContent += headingContent;
    }

    // Recursively visit all children nodes
    if (hasChildren(node)) {
      node.children.forEach(visit);
    }
  };

  // Start traversing the AST from the root node
  if (hasChildren(tree)) {
    tree.children.forEach(visit);
  }

  return {
    generalNotes: generalNotesContent.trim() || null,
    gherkin: gherkinContent.trim() || null,
    condensed: condensedContent.trim() || null,
    otherContent: otherContent.trim() || null,
  };
};

// Recursive function to build directory structure, including .md files with extracted sections
const getDirectoryStructure = (dirPath: string, parentPath = ""): any => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items
    .map((item) => {
      const itemPath = path.join(dirPath, item.name);
      const itemName = parentPath ? `${parentPath}/${item.name}` : item.name;

      if (item.isDirectory()) {
        return {
          label: formatLabel(item.name),
          name: itemName,
          children: getDirectoryStructure(itemPath, itemName),
        };
      } else if (item.isFile() && item.name.endsWith(".md")) {
        const content = fs.readFileSync(itemPath, "utf-8");
        const { generalNotes, gherkin, condensed, otherContent } =
          extractSections(content);

        return {
          label: formatLabel(item.name),
          name: itemName.replace(".md", ""),
          type: "file",
          generalNotes,
          gherkin,
          condensed,
          otherContent,
        };
      }
      return null;
    })
    .filter(Boolean);
};

const generateContentData = () => {
  try {
    const contentData = getDirectoryStructure(contentDir);
    fs.writeFileSync(outputPath, JSON.stringify(contentData, null, 2));
    console.log("Content buttons data generated successfully.");
  } catch (error) {
    console.error("Error generating content buttons data:", error);
  }
};

generateContentData();
