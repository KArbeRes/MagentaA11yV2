import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content/web');
const outputPath = path.join(__dirname, '../shared/content.json');

// Function to format directory names to a label format
const formatLabel = (dir: string) =>
  dir
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Recursive function to build directory structure
const getDirectoryStructure = (dirPath: string): any => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items
    .filter((item) => item.isDirectory())
    .map((item) => {
      const itemPath = path.join(dirPath, item.name);
      return {
        label: formatLabel(item.name),
        name: item.name,
        children: getDirectoryStructure(itemPath), // Recursively get children
      };
    });
};

const generateContentData = () => {
  try {
    const contentData = getDirectoryStructure(contentDir);
    fs.writeFileSync(outputPath, JSON.stringify(contentData, null, 2));
    console.log('Content buttons data generated successfully.');
  } catch (error) {
    console.error('Error generating content buttons data:', error);
  }
};

generateContentData();
