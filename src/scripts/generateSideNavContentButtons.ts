import fs from "fs";
import { RootContent, Heading, Parent, Root, Text } from "mdast";
import { gfmTableToMarkdown } from "mdast-util-gfm-table";
import { toMarkdown } from "mdast-util-to-markdown";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const platformsDir = path.join(__dirname, "../../public/content/platforms");
const outputPath = path.join(__dirname, "../shared/content.json");

// Format names to a label format
const formatLabel = (name: string) =>
  name
    .replace(/-/g, " ")
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Check if a node is a heading
const isHeading = (node: RootContent): node is Heading =>
  node.type === "heading" && (node as Heading).depth !== undefined;

// Check if a node has children
const hasChildren = (node: any): node is Parent =>
  Array.isArray((node as Parent).children);

// Extract sections and omit H1 headers
const extractSections = (content: string) => {
  const tree = remark().use(remarkParse).use(remarkGfm).parse(content) as Root;

  const sections: Record<string, RootContent[]> = {};
  let currentSection:
    | "generalNotes"
    | "gherkin"
    | "condensed"
    | "videos"
    | "other" = "other";
  sections[currentSection] = [];

  if (hasChildren(tree)) {
    const nodes = tree.children;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if (isHeading(node) && node.depth === 1 && hasChildren(node)) {
        const headingText = (node.children[0] as Text).value.toLowerCase();

        if (headingText.includes("general notes")) {
          currentSection = "generalNotes";
        } else if (headingText.includes("gherkin")) {
          currentSection = "gherkin";
        } else if (headingText.includes("condensed")) {
          currentSection = "condensed";
        } else if (headingText.includes("videos")) {
          currentSection = "videos";
        } else {
          currentSection = "other";
        }
        if (!sections[currentSection]) {
          sections[currentSection] = [];
        }

        // Only include the heading in the 'other' section
        if (currentSection === "other") {
          sections[currentSection].push(node);
        }
      } else {
        sections[currentSection].push(node);
      }
    }
  }

  // Serialize each section back to markdown
  return {
    generalNotes: sections["generalNotes"]
      ? toMarkdown(
          { type: "root", children: sections["generalNotes"] },
          { extensions: [gfmTableToMarkdown()] }
        ).trim()
      : null,
    gherkin: sections["gherkin"]
      ? toMarkdown(
          { type: "root", children: sections["gherkin"] },
          { extensions: [gfmTableToMarkdown()] }
        ).trim()
      : null,
    condensed: sections["condensed"]
      ? toMarkdown(
          { type: "root", children: sections["condensed"] },
          { extensions: [gfmTableToMarkdown()] }
        ).trim()
      : null,
    videos: sections["videos"]
      ? toMarkdown(
          { type: "root", children: sections["videos"] },
          { extensions: [gfmTableToMarkdown()] }
        ).trim()
      : null,
    developerNotes: sections["other"]
      ? toMarkdown(
          { type: "root", children: sections["other"] },
          { extensions: [gfmTableToMarkdown()] }
        ).trim()
      : null,
  };
};

// Get directory structure
const getDirectoryStructure = (dirPath: string): any => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items
    .map((item) => {
      const itemPath = path.join(dirPath, item.name);

      if (item.isDirectory()) {
        return {
          label: formatLabel(item.name),
          name: item.name,
          children: getDirectoryStructure(itemPath),
        };
      } else if (item.isFile() && item.name.endsWith(".md")) {
        const content = fs.readFileSync(itemPath, "utf-8");
        const sections = extractSections(content);

        return {
          label: formatLabel(item.name),
          name: item.name.replace(".md", ""),
          type: "file",
          ...sections,
        };
      }
      return null;
    })
    .filter(Boolean);
};

// Generate content data
const generateContentData = () => {
  try {
    const platforms = fs.readdirSync(platformsDir, { withFileTypes: true });

    const contentData = platforms.reduce((acc, platform) => {
      if (platform.isDirectory()) {
        acc[platform.name] = getDirectoryStructure(
          path.join(platformsDir, platform.name)
        );
      }
      return acc;
    }, {} as Record<string, any>);

    fs.writeFileSync(outputPath, JSON.stringify(contentData, null, 2));
    console.log("Content data generated successfully.");
  } catch (error) {
    console.error("Error generating content data:", error);
  }
};

generateContentData();
