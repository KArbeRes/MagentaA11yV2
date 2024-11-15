# General Notes

There must only be a singular header/banner element on the page. Contains the site title and typically the primary navigation.

# Condensed

## a11y - Web Accessibility Acceptance Criteria

How to test a header landmark

1\. Test keyboard only, then screen reader + keyboard actions

\- Skip-links: Focus moves directly to the header or navigation

\- Tab: Nothing, headings are not focusable unless they are actionable

\- Arrow-keys: Headings are browsed

2\. Test mobile screenreader gestures

\- Swipe: Focus moves directly to the header or navigation

\- Doubletap: This typically activates most elements

3\. Listen to screenreader output on all devices

\- Role: It is discoverable with screenreader shortcuts as header/banner landmark

\- Group: It typically contains the name and primary navigation of the website

Full information: https://www.magentaa11y.com/checklist-web/header/

# Gherkin

## a11y - Web Accessibility Acceptance Criteria

How to test a header landmark

GIVEN THAT I am on a page with a header landmark

1 - Keyboard for mobile & desktop

\- WHEN I use the tab key to enter the web browser window I SEE focus is strongly visually indicated on interactive components

2 - Desktop screenreader

\- WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND

\- I use the tab key to enter the web browser window

\- I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

\- I HEAR It typically contains the name and primary navigation of the website

3 - Mobile screenreader

\- WHEN I use a mobile screenreader (Talkback, VoiceOver) AND

\- I swipe to focusable elements in the header

\- I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

\- I HEAR It typically contains the name and primary navigation of the website

Full information: https://www.magentaa11y.com/checklist-web/header/

# Code Examples

### Use Semantic HTML

This semantic HTML contains all accessibility features by default.

```html
<header id="example-header">
  <a href="#nav-example">Skip to navigation</a>
  <a href="#">Not the navigation</a>
  <nav tabindex="-1" class="nav-example" id="nav-example">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li><button>Sign in</button></li>
    </ul>
  </nav>
</header>
```

## When You Can’t Use Semantic HTML

This custom header requires extra attributes.

```html
<div role="banner" tabindex="-1" id="example-header">
  <a href="/">Website name</a>
</div>
```

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

### Role

- Identifies itself as a header or banner landmark.
- If a non-semantic element must be used (like a `<div>`), use `role="banner"` to make the element discoverable.

### Group

- Contains the site title and typically the primary navigation.

### Focus

- Can be targeted with a skip link, but the skip link will typically be labeled “skip to navigation.”
- Use `tabindex="-1"` to make the header targetable with a skip link.
- The `<header>` itself isn’t focusable with the tab key.
