import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "../public/content/web");
const outputPath = path.join(__dirname, "../shared/content.json");

// Function to format names to a label format
const formatLabel = (name: string) =>
  name
    .replace(/-/g, " ")
    .replace(/\.md$/i, "") // Remove .md extension if present
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Recursive function to build directory structure, including .md files
const getDirectoryStructure = (dirPath: string): any => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items
    .map((item) => {
      const itemPath = path.join(dirPath, item.name);
      if (item.isDirectory()) {
        // Process directory
        return {
          label: formatLabel(item.name),
          name: item.name,
          children: getDirectoryStructure(itemPath), // Recursively get children
        };
      } else if (item.isFile() && item.name.endsWith(".md")) {
        // Process markdown file as a child item
        return {
          label: formatLabel(item.name),
          name: item.name.replace(".md", ""), // Remove .md extension for routing
          type: "file", // Additional property to distinguish file items
        };
      }
      return null;
    })
    .filter(Boolean); // Filter out null values (non-directories/non-.md files)
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
