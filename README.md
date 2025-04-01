# MagentaA11y V2

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Key Features](#key-features)
- [Deployment](#deployment)
- [Optimize Video Assets](#optimize-video-assets)

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed. It is recommended to use the latest LTS version.
- **FFmpeg** (Optional): Required for video optimization scripts.

### Installation

To set up the application, clone the repository and install dependencies:

```bash
git clone https://github.com/KArbeRes/MagentaA11yV2.git
cd MagentaA11yV2
npm install
```

---

## Available Scripts

### Development

- **`npm start`**: Starts the app in development mode.

  - Automatically generates navigation buttons and icons.
  - Accessible at [http://localhost:3000](http://localhost:3000).

- **`npm run dev`**: Watches for navigation item changes and starts the app concurrently.

### Building and Deployment

- **`npm run build`**: Builds the app for production, optimizing all assets.
- **`npm run deploy`**: Deploys the app to GitHub Pages.

### Utility Scripts

- **`npm run generate-icons`**: Generates React components for all SVG icons and updates type definitions.
- **`npm run generate-faveicons`**: Creates favicon assets.
- **`npm run generate-side-nav-buttons`**: Updates side navigation buttons dynamically.
- **`npm run convert-videos`**: Converts video files to `.webm` format for web optimization.
- **`npm run print-tree`**: Prints the project tree structure, excluding `node_modules`.

### Markdown Generation Script

- **`npm run create-md`**: Generates structured Markdown files with predefined sections.

#### What the Script Does

1. **Creates Markdown files**:
   Generates files with sections like **General Notes, Criteria, Developer Notes, Gherkin, and more**.
3. **Supports content categorization**: Sections for **Android/iOS Developer Notes and Video embeds**.
4. **Avoids overwriting existing files**: If a file already exists, the script prevents accidental overwrites.

#### Running the Script

```bash
npm run create-md -- <filename> "<relative-path>"
```

#### Example:

```bash
npm run create-md -- textarea "native/inputs"
```

```bash
npm run create-md -- "links-buttons" "how-to-test/components"
```

These commands will create:

```
public/content/native/inputs/textarea.md
```
```
public/content/how-to-test/components/links-buttons.md
```

- If the folder does not exist, it will be created.
- If the file already exists, the script will **exit with an error** to prevent accidental overwrites.

---

## Deployment

The app is deployed via GitHub Pages. Follow these steps to deploy:

1. Ensure GitHub Pages is enabled in your repository settings.
2. Update the `homepage` field in `package.json`:

   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```

3. Run:

   ```bash
   npm run deploy
   ```

Your application will be live at:

```
https://<username>.github.io/<repository-name>
```

---

## Optimize Video Assets

The script `convert-videos-to-webm.sh` optimizes video files for the web.

### What the Script Does

1. Converts video files (`.mp4`, `.mov`, etc.) to `.webm` format using FFmpeg.
2. Updates all references in the project to use the `.webm` files.
3. Deletes the original video files after successful conversion.

### Requirements

- **FFmpeg**: Install via [Homebrew](https://brew.sh/) (macOS):

  ```bash
  brew install ffmpeg
  ```

### Running the Script

Ensure the script has executable permissions:

```bash
chmod +x src/scripts/convert-videos-to-webm.sh
```

Run the script:

```bash
npm run convert-videos
```

Outputs:

- Converted `.webm` files replace references in the project.
- Original video files are deleted after successful conversion.

---

## Support

For issues, suggestions, or contributions, please open a GitHub issue or submit a pull request.

---
