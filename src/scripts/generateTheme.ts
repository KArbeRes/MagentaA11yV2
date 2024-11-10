import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to a usable directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to the Markdown file and output SCSS file
const markdownFilePath = path.join(__dirname, '../colors.md');
const outputFilePath = path.join(__dirname, '../App.scss');

// Regular expression to match both Material and MagentaA11y CSS variable tokens and values in Markdown
const tokenRegex =
  /`(--(?:md-sys-color|magentaa11y-color)-[\w-]+)`: (#(?:[0-9a-fA-F]{3}){1,2}|rgba?\([^)]+\))/g;

// Define a type for the tokens
interface Token {
  name: string;
  value: string;
}

// Function to generate SCSS content from tokens
function generateScssContent(tokens: Token[]): string {
  return `@import '@material/web/menu/_menu.scss';

.MagentaA11y {
  text-align: center;
}

:root {
${tokens.map((token) => `  ${token.name}: ${token.value};`).join('\n')}
}
`;
}

// Function to read the Markdown file and extract tokens
const extractTokens = (data: string): Token[] => {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(data)) !== null) {
    tokens.push({ name: match[1], value: match[2] });
  }

  return tokens;
};

const generateTheme = () => {
  fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the Markdown file:', err);
      return;
    }

    const tokens = extractTokens(data);
    const scssContent = generateScssContent(tokens);

    fs.writeFile(outputFilePath, scssContent, (err) => {
      if (err) {
        console.error('Error writing to App.scss:', err);
      } else {
        console.log('App.scss updated successfully with theme colors!');
      }
    });
  });
};

generateTheme();
