# MagentaA11y V2

## Table of Contents

- [Getting Started](#getting-started)
- [Creating a PR](#creating-a-pr)
- [Available Scripts](#available-scripts)
- [Key Features](#key-features)
- [Deployment](#deployment)
- [Optimize Video Assets](#optimize-video-assets)

---

## Contributting to MagentaA11y

Welcome! We're thrilled you're considering contributing to **MagentaA11y**, an open-source tool built by T-Mobile's Accessibility Resource Center (ARC), that is committed to improving digital accessibility. Whether you're a designer, developer, tester, or writer — there's a place for you here.

## Getting Started

## Code of Conduct

<!-- > - TODO: Need to see if TMO has an established code of conduct for open source contributions. -->

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed. It is recommended to use the latest LTS version.

### Installation

To set up the application, clone the repository and install dependencies:

```bash
git clone https://github.com/KArbeRes/MagentaA11yV2.git
cd MagentaA11yV2
npm install
```

---

## Creating a Pull Request

- start in the main branch, you can check you are in the correct branch by running `git branch`
- Run a `git fetch` to ensure you have the latest branches
- If there is new code, pull it down: `git pull origin main`
- Start a new branch, I recommend using the issue number, such as `ARC-101--details` or the feat/fix/revert/chore/style convention such as `#190-fix--menu-button`:

TODO: Add details for branching strategy 

  - feat or feature: (new feature for the user, not a new feature for build script)
  - fix: (bug fix for the user, not a fix to a build script)
  - docs: (changes to the documentation)
  - style: (formatting, missing semi colons, etc; no production code change)
  - refactor: (refactoring production code, eg. renaming a variable)
  - test: (adding missing tests, refactoring tests; no production code change)
  - chore: (updating grunt tasks etc; no production code change)
- Create the new branch with `git checkout -b ARC-101--criteria-button`

### Pushing your work

While you are working, make sure you to pull and rebase on main as you go:

- `git fetch`
- `git rebase origin/main`

To push your work:

- `git diff .` // check what has changed in all the files you worked on
- `git add .` // adds all new files
- `git commit -m "fix: x message with updates"` // add commit message that describes what changes or additions were made
- `git push origin ARC101--criteria-button`

## Approval Process for Merging

- TODO: In order for a PR to be merged, two ARC coached need to approve the PR.

## Ways to Contribute
There are many valuable ways to help MagentaA11y grow and improve — whether you're a developer, accessibility expert, designer, writer, or newcomer. Here's how you can get involved:

### Report Bugs
Have you found something broken or unexpected? Please report it!

- Open a bug report issue (TODO: hyperlink to report an issue)

Include:

- Steps to reproduce
- What you expected to happen
- Screenshots or screen recordings (if helpful)
- Browser and OS information

TODO: Review Accessibility Defect Template for other sections

### Fix Bugs or Add Features
Want to contribute code? Great!

Look for issues labeled `good first issue` or `help wanted`

We especially welcome:

- Fixes for accessibility gaps (e.g., missing ARIA attributes, missing captions)
- UI enhancements (focus visibility, keyboard navigation)
- Refactoring or component cleanup
- New features that improve usability or inclusivity

### Improve Documentation
Clear documentation helps others use and contribute to MagentaA11y.
You can help by:

- Improving setup instructions or clarifying parts of the README
- Writing usage guides for components
- Creating diagrams, architecture overviews, or accessibility checklists


### Suggest or Review Accessibility Improvements
Accessibility is at the heart of MagentaA11y — and your expertise matters!

File issues or PRs that improve:

- Keyboard navigation
- Screen reader support
- Color contrast
- Semantic HTML usage
- Suggest additions to our accessibility How to Test pages
- Share real-world feedback from assistive tech users

### Design & UX Contributions


### Spread the Word
Even if you’re not ready to code, you can still help by:

- Sharing MagentaA11y on social media or dev communities
- Writing blog posts or tutorials about using or contributing to it
- Include MagentaA11y as a resource at conferences
- Hosting or joining accessibility hackathons or meetups


## Available Scripts

### Development

- **`npm start`**: Starts the app in development mode.

  - Automatically generates navigation buttons and icons.
  - Accessible at [http://localhost:3000](http://localhost:3000).

### Building and Deployment

- **`npm run build`**: Builds the app for production, optimizing all assets.
- **`npm run deploy`**: Deploys the app to GitHub Pages.

### Utility Scripts

- **`npm run generate-icons`**: Generates React components for all SVG icons and updates type definitions.
- **`npm run generate-faveicons`**: Creates favicon assets.
- **`npm run create-md`**: Updates side navigation buttons dynamically.

### Markdown Generation Script

- **`npm run create-md`**: Generates structured Markdown files using predefined templates.

### Parse Markdown file updates

- **`npm run parse-md-files`**: Generates updates to Markdown files.

#### What the Script Does

1. **Creates Markdown files**:
   Based on the third argument, it inserts either a _"criteria"_ or _"how-to-test"_ accessibility testing template.
2. **Supports content categorization**: Sections for **Android/iOS Developer Notes, Video embeds**, and more.
3. **Avoids overwriting existing files**: If a file already exists, the script exits safely without making changes.

#### Running the Script

```bash
npm run create-md -- <filename> "<relative-path>" <template-type>
```

- `<filename>`: Name of the Markdown file to generate (without `.md`).
- `<relative-path>`: Folder path under `public/content/documentation/`.
- `<template-type>`: Must be either `criteria` or `how-to-test`.

#### Examples

```bash
npm run create-md -- textarea "native/controls" criteria
```

```bash
npm run create-md -- "images" "how-to-test/components" how-to-test
```

> 🗂️ When running the `create-md` script, files are saved to the `public/content/documentation` directory.  
> The relative path you provide is resolved within this base directory.

### Markdown File Structure

All documentation Markdown files should be stored under the following structure:

```
public/content/documentation/<section>/<category>/<filename>.md
```

- `<section>` could be something like `native`, `web`, or `how-to-test`
- `<category>` groups related content such as `components`, `notifications`, or any custom grouping
- `<filename>.md` is the name of the actual Markdown file

📁 This structure helps the app dynamically parse and render content correctly in the UI. The script `create-md` automatically respects and creates this structure based on the path you provide.

These commands will create:

```
public/content/documentation/native/controls/textarea.md
```

```
public/content/documentation/how-to-test/components/images.md
```

- If the category folder, such as "inputs", does not exist, it will be created.
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

   https://karberes.github.io/MagentaA11yV2/#/home

---

## Video Tutorials on Getting Started

1. Installing the repo

2. Making a Pull Request

3. 

## Support

For issues, suggestions, or contributions, please open a GitHub issue or submit a pull request. Or reachout to us at MagentaA11y@t-mobile.com