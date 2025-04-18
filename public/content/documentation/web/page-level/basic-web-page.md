## General Notes

Validate your code use HTML validation as the foundation for ensuring your page works for everyone.

## Gherkin

### a11y - Web Accessibility Acceptance Criteria

How to test a basic web page

GIVEN THAT I am on a page with a basic web page

1. Keyboard for mobile & desktop

   &mdash; EN I use the keyboard to open a new web page I SEE the page has a unique logical title in the browser tab

2. Desktop screenreader

   &mdash; EN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND
   &mdash; use the keyboard to open a new web page
   &mdash; HEAR The page has a unique logical title in the browser tab
   &mdash; HEAR Major landmarks are discoverable with screenreader shortcuts: header/banner, navigation, main and footer/content info landmarks

3. Mobile screenreader

   &mdash; EN I use a mobile screenreader (Talkback, VoiceOver) AND
   &mdash; swipe to enter from the web browser tabs
   &mdash; HEAR The page has a unique logical title in the browser tab
   &mdash; HEAR Major landmarks are discoverable with screenreader shortcuts: header/banner, navigation, main and footer/content info landmarks
   &mdash; EN when I change orientations I HEAR content is accessible in landscape or portrait orientation

4. Device OS settings
   &mdash; EN I use zoom/pinch THEN I see text can resize up to 200% without losing information

Full information: https://www.magentaa11y.com/#/web-criteria/page-level/basic-web-page

## Code Examples

### Declare a language

This affects the screenreader pronunciation.

```html
<html lang="en"></html>
```

### Give your page a unique title

Each page must have unique `<title>` in the `<head>`:

- This includes single-page dynamic apps if the URI changes during the user journey.
- Do not use the `|` pipe character as a divider (it is read by screen readers).

```html
<head>
  <title>Page title - Website title</title>
</head>
```

### Ensure users can zoom in

People with low vision need the ability to enlarge the page on mobile and desktop.

```html
<head>
  <meta
    name="viewport"
    content="width=device-width, 
        initial-scale=1"
  />
</head>
```

### Structure your page with landmarks

Landmarks give structure to the page for the screenreader user to be able to navigate the page by major sections.

Each page must include:

- Header
- Nav
- Main
- Footer

```html
<header>
  <!-- Contains the site title -->
</header>
<nav>
  <!-- Primary navigation menu-->
</nav>
<main>
  <!-- Main content -->
</main>
<footer>
  <!-- Site map and legal info -->
</footer>
```

## Developer Notes

### Name

- The page must have a unique, logical title visible in the browser tab.

### Role

- Major landmarks (header/banner, navigation, main, footer) must be discoverable with screenreader shortcuts.

### Group

- Ensure the page includes all necessary structural landmarks.

### Focus

- The page title should be strongly visually indicated when the page is loaded.
- Zoom/pinch/stretch should allow resizing up to 200% without losing information.

## Condensed

### a11y - Web Accessibility Acceptance Criteria

How to test a basic web page

1. Test keyboard only, then screen reader + keyboard actions

   &mdash; Tab: Enters the page and visibly focuses only interactive elements
   &mdash; Zoom: Content zooms up to 200%

2. Test mobile screenreader gestures

   &mdash; Swipe: Focus moves within page
   &mdash; Pinch/stretch: Content zooms up to 200%
   &mdash; Orientation: Content is accessible in landscape or portrait orientation

3. Listen to screenreader output on all devices

   &mdash; Name: The page has a unique logical title in the browser tab
   &mdash; Role: Major landmarks are discoverable with screenreader shortcuts: header/banner, navigation, main and footer/content info landmarks

4. Device OS settings

   &mdash; Zoom/pinch: text can resize up to 200% without losing information

Full information: https://www.magentaa11y.com/#/web-criteria/page-level/basic-web-page
