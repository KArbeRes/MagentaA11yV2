# MagentaA11y V2

MagentaA11y V2 is a modern, React-based application designed to simplify the process of accessibility testing for digital experiences. This new version of MagentaA11y incorporates a fresh tech stack and enhances usability, making it easier for product teams to deliver accessible experiences.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Optimize Video Assets](#optimize-video-assets)

---

### Getting Started

Follow the steps below to set up and run MagentaA11y V2 on your local machine.

### Features

MagentaA11y V2 enables product teams to:

- Build accessibility testing criteria for web or native app components.
- Provide easy-to-use testing instructions for keyboard navigation, screen readers, and mobile accessibility.
- Display guidelines and examples for developers to improve accessibility.

Each entry includes:

- Video demos for screen reader interactions.
- Code examples and developer notes.
- References to WCAG and WAI-ARIA documentation.

### Installation

Ensure you have [Node.js](https://nodejs.org/) installed.

To install the dependencies, run:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- **`npm run generate-theme`**: Generates the application theme based on the color settings.
- **`npm run build`**: Builds the app for production in the `build` folder.
- **`npm run deploy`**: Deploys the app to GitHub Pages.
- **`npm run print-tree`**: Prints the project tree, excluding `node_modules`.
- **`npm run convert-videos`**: Converts all video files to `.webm` format, updates file references, and removes original video files.

---

## Deployment

This app is deployed via GitHub Pages. To deploy manually, make sure you have GitHub Pages enabled in the repository settings.

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL:

   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```

2. Run:

   ```bash
   npm run deploy
   ```

The application will be available at your GitHub Pages URL: `https://<username>.github.io/<repository-name>`.

---

## Optimize Video Assets

The script `convert-videos-to-webm.sh` optimizes video files for web by converting them to `.webm` format, updating file references, and removing original files.

### What the Script Does

1. Converts video files (`.mp4`, `.mov`, etc.) to `.webm` format using FFmpeg.
2. Updates all project references to use the new `.webm` files.
3. Replaces `type="video/webm"` with `type="video/webm"` in HTML or similar files.
4. Deletes the original video files after successful conversion.

### Requirements

- **FFmpeg**: A tool for video processing.
  - macOS:
    ```bash
    brew install ffmpeg
    ```

### How to Run the Script

1. Ensure the script has executable permissions:

   ```bash
   chmod +x src/scripts/convert-videos-to-webm.sh
   ```

### Outputs

- Converted `.webm` files will replace references in the project.
- Original video files will be deleted if the conversion is successful.

---
