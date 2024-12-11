# General Notes

Navigation landmarks are essential for guiding users through a website's structure, especially for screen reader and keyboard users. This document provides a comprehensive guide to testing and implementing navigation landmarks.

# Condensed

## a11y - Web Accessibility Acceptance Criteria

How to test a navigation landmark

1. Test keyboard only, then screen reader + keyboard actions

   &mdash; **Skip-links:** Focus moves directly to the navigation element.

   &mdash; **Tab:** Focus moves to links and buttons within the navigation.

   &mdash; **Arrow-keys:** Navigation elements are browsed correctly.

2. Test mobile screenreader gestures

   &mdash; **Swipe:** Focus moves within the navigation.

   &mdash; **Doubletap:** This typically activates most elements.

3. Listen to screenreader output on all devices

   &mdash; **Role:** It is discoverable with screenreader shortcuts as a navigation landmark.

   &mdash; **Name:** It indicates its role and, if multiple navigations are present (e.g., Main navigation, Site map, Breadcrumbs), their respective names.

Full information: [https://www.magentaa11y.com/checklist-web/nav/](https://www.magentaa11y.com/checklist-web/nav/)

# Gherkin

## a11y - Web Accessibility Acceptance Criteria

How to test a navigation landmark

GIVEN THAT I am on a page with a navigation landmark

1. **Keyboard for mobile & desktop**

   &mdash; WHEN I use the arrow keys to browse the navigation menu

   &mdash; I SEE the screen scrolls through the page.

2. **Desktop screenreader**

   &mdash; WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND

   &mdash; I use the arrow keys to browse the navigation menu

   &mdash; I HEAR It indicates its role and, if multiple navigations are present (e.g., Main navigation, Site map, Breadcrumbs), their names.

   &mdash; I HEAR It is discoverable with screenreader shortcuts as a navigation landmark.

3. **Mobile screenreader**

   &mdash; WHEN I use a mobile screenreader (Talkback, VoiceOver) AND

   &mdash; I swipe to focusable elements in the navigation

   &mdash; I HEAR It indicates its role and, if multiple navigations are present, their names.

   &mdash; I HEAR It is discoverable with screenreader shortcuts as a navigation landmark.

Full information: [https://www.magentaa11y.com/checklist-web/nav/](https://www.magentaa11y.com/checklist-web/nav/)

# Code Examples

## Use Semantic HTML

This semantic HTML contains all accessibility features by default.

```html
<nav tabindex="-1" class="nav-example" id="nav-example">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
    <li><button aria-haspopup="true">Sign in</button></li>
  </ul>
</nav>
```

## When You Can’t Use Semantic HTML

This custom navigation requires extra attributes.

```html
<div role="navigation" tabindex="-1" id="example-navigation">
  <ul>
    <li><a href="/">Website name</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</div>
```

# Developer Notes

## Name

- If there are multiple `<nav>` elements (e.g., site menu, pagination, categories), it may be helpful to name them.
  - Use `aria-label="Menu name"` when there is no visible navigation title.
  - Use `aria-describedby="menu-name-id"` when the navigation title is a visible heading.

## Role

- Identifies itself as a navigation landmark.
- Avoid adding ‘menu’ or ‘option’ roles with arrow key event listeners unless building an actual application like Gmail.

## Focus

- When skip links are used, add `tabindex="-1"` so focus can move to the `nav` element, not just bring it into view.

# Additional Criteria

### Example Navigation

```html
<a href="#nav-example">Skip to example navigation</a>
<a href="#">Not the navigation</a>
<nav tabindex="-1" class="nav-example" id="nav-example">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
    <li><button aria-haspopup="true">Sign in</button></li>
  </ul>
</nav>
```

### Expanding Navigation Example

```html
<nav id="example-expanding-nav" class="menu">
  <ul>
    <li>
      <a class="home" href="/">Home</a>
    </li>
    <li class="expander-group">
      <button
        type="button"
        class="menu expander-toggle"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Menu
      </button>
      <ul class="subnav expander-content" aria-hidden="false">
        <li>
          <a href="/about/">About</a>
          <button
            type="button"
            class="subnav expander-toggle"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="hidden">About</span>
          </button>
          <ul class="expander-content" aria-hidden="true">
            <li><a href="/history/">Our history</a></li>
            <li><a href="/values/">Our values</a></li>
          </ul>
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

## Multiple Navigation Elements

When there is more than one navigation element, they must have a name.

```html
<nav tabindex="-1" id="nav" aria-label="Main">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>

<h2 id="cat-heading">Categories</h2>
<nav id="cat-nav" aria-labelledby="cat-heading">
  <ul>
    <li><a href="/alpha/">Alpha</a></li>
    <li><a href="/bravo/">Bravo</a></li>
    <li><a href="/charlie/">Charlie</a></li>
  </ul>
</nav>

<footer>
  <nav aria-label="Site map">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </nav>
</footer>
```
