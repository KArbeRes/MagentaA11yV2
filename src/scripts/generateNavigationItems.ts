import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const navItemsDir = path.join(__dirname, '../content'); // Adjusted path
const outputFile = path.join(__dirname, '../content.json'); // Adjusted path

const navItems: string[] = fs.readdirSync(navItemsDir).filter((item) => {
  return fs.statSync(path.join(navItemsDir, item)).isDirectory();
});

fs.writeFileSync(outputFile, JSON.stringify(navItems, null, 2));
