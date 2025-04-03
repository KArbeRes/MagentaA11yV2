# 📘 Markdown Guide for MagentaA11y V2

This guide outlines how to structure and write Markdown files consumed by the MagentaA11y V2 app.

---

## 📝 Supported Sections

Each `.md` file can include any of the following **`##`**\*\* (H2)\*\* sections:

- `## General Notes`
- `## Criteria`
- `## Gherkin`
- `## Condensed`
- `## Android Developer Notes`
- `## iOS Developer Notes`
- `## Videos`

> ⚠️ The app looks for these specific section headings to dynamically create tabs—**except for `## General Notes`**. Content under `General Notes` is used to render the introductory text below the criteria title and also appears in the overview page cards, but it does **not** create its own tab.

> All other supported headings will create a dedicated tab, and content beneath each `##` heading—including text, lists, tables, or media—will be grouped and rendered under the corresponding tab in the UI.

Any content that does not fall under one of these headings is automatically grouped under a fallback section called `Developer Notes`.

---

## 📂 File Location

All documentation markdown files should be stored under:

```
public/content/documentation/<section>/<category>/<filename>.md
```

**Examples:**

```
public/content/documentation/native/inputs/textarea.md
public/content/documentation/how-to-test/components/links-buttons.md
```

Folders will be created if they don’t exist. If a file already exists, running the generation script will exit with an error to prevent overwriting.

---

## ⚙️ How Rendering Works

1. Markdown files are parsed by a custom script using [remark](https://github.com/remarkjs/remark) and [mdast](https://github.com/syntax-tree/mdast).
2. The script extracts content based on `##` section headers and saves it into a structured `content.json` file.
3. The app loads `content.json` and renders sections in an interactive tabbed UI.

---

## 🛠 Interactive Markdown Features

You can use custom HTML elements with attributes to enhance interactivity:

### 🔘 Buttons with Icons

> 💡 All available icon names for `data-icon` can be found in `src/shared/Icons.ts`.

```html
<button data-fn="logClick" data-icon="copyFilled" data-label="Copy Text">Copy</button>
```

### 🔗 Functional Links

```html
<a data-fn="navigateHome" href="#">Go Home</a>
```

### 🖼 Images

```md
![Alt Text](my-image.png)
```

### 📹 Embedded Videos

```html
<video poster="video-thumb.png">
  <source src="my-video.webm" type="video/webm" />
</video>
```

Relative paths are resolved based on:

```
/MagentaA11yV2/content/assets
```

---

## 🤖 Why `data-fn` Instead of `onClick`?

Markdown is parsed as static content, and React does not allow inline event handlers like `onClick="..."` inside markdown. To enable interactivity, the app looks for the `data-fn` attribute and binds it to predefined JavaScript functions after rendering.

This pattern allows safe and maintainable behavior within Markdown-rendered content.

All available functions are defined in:

```
src/utils/markdownFunctions.ts
```

All available icons that can be used with `data-icon` are located in:

```
src/shared/Icons.ts
```

Here’s how it works:

- The `data-fn` value maps to a function name in `getMarkdownFunctionMap()`.
- During rendering, that function is attached to the element as an event listener (e.g., `onClick`).
- You can also control the event type using `data-event`, and support icons via `data-icon`.

Example:

```html
<button data-fn="scrollToTopOnly" data-icon="arrowUp">Scroll to Top</button>
```

---

## 🧪 Example Markdown File

````md
## General Notes

This component handles user input and ensures proper accessibility.

## Criteria

- Must have a visible label
- Must support keyboard navigation

## Gherkin

```gherkin
Given a user focuses the input
When they type a value
Then the value should be announced
````


## 🧾 Notes

- Use `##` headings (H2) to define sections. Other levels are not parsed.
- Only one section of each type is supported per file.
- You can safely mix markdown and raw HTML.

