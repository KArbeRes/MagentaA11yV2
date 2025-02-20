# General Notes

Tables must be used to structure tabular data. Avoid using tables for layout purposes.

# Condensed

## a11y - Web Accessibility Acceptance Criteria

How to test a table

1. Test keyboard only, then screen reader + keyboard actions

   &mdash; Arrow-keys: The table scrolls into view (and with a screenreader the cells become individually readable)

2. Test mobile screenreader gestures

   &mdash; Swipe: The table is browsed from cell to cell

3. Listen to screenreader output on all devices

   &mdash; Name: The table has a caption or a heading to describe its purpose

   &mdash; Role: It identifies itself as a table

   &mdash; Group: Column headers and row headers are identified with screenreader shortcuts

Full information: https://www.magentaa11y.com/checklist-web/table/

# Gherkin

## a11y - Web Accessibility Acceptance Criteria

How to test a table

GIVEN THAT I am on a page with a table

1. Keyboard for mobile & desktop

   &mdash; WHEN I use the arrow keys  
   &mdash; I SEE the table scrolls into view (but is not focusable)

2. Desktop screenreader

   &mdash; WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND  
   &mdash; I use the arrow keys

   &mdash; I HEAR The table has a caption or a heading to describe its purpose  
   &mdash; I HEAR It identifies itself as a table  
   &mdash; I HEAR Column headers and row headers are identified with screenreader shortcuts

3. Mobile screenreader

   &mdash; WHEN I use a mobile screenreader (Talkback, VoiceOver) AND  
   &mdash; I swipe to focusable elements in the footer

   &mdash; I HEAR The table has a caption or a heading to describe its purpose  
   &mdash; I HEAR It identifies itself as a table  
   &mdash; I HEAR Column headers and row headers are identified with screenreader shortcuts

Full information: https://www.magentaa11y.com/checklist-web/table/

# Code Examples

## Use Semantic HTML

This semantic HTML contains all accessibility features by default.  
Optional: The table is wrapped in a `<figure>` to indicate author and source.

```html
<table id="nato-table">
  <caption class="h-charlie">
    Nato phonetic Alphabet
  </caption>
  <thead>
    <tr>
      <th scope="row">Letter</th>
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">NATO</th>
      <td>Alpha</td>
      <td>Bravo</td>
      <td>Charlie</td>
    </tr>
  </tbody>
</table>
```

<table class="text-center">
  <caption>
    Nato phonetic Alphabet
  </caption>
  <thead>
    <tr>
      <th scope="row">Letter</th>
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">NATO</th>
      <td>Alpha</td>
      <td>Bravo</td>
      <td>Charlie</td>
    </tr>
  </tbody>
</table>

<table class="text-center">
<caption>
    Screen reader and browser pairings
  </caption>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Screenreader</th>
      <th>Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="media/images/icons/logo-apple.svg" alt="Apple"> 
      </td>
      <td>
        <img src="media/images/icons/logo-apple.svg" alt="VoiceOver"> 
      </td>
      <td>
        <img src="media/images/icons/logo-safari.svg" alt="Safari"> 
      </td>
    </tr>
    <tr>
      <td>
        <img src="media/images/icons/logo-android.svg" alt="Android"> 
      </td>
      <td>
        <img src="media/images/icons/logo-talkback.svg" alt="Talkback"> 
      </td>
      <td>
        <img src="media/images/icons/logo-chrome.svg" alt="Chrome">
      </td>
    </tr>
    <tr>
      <td>
        <img src="media/images/icons/logo-windows.svg" alt="Windows"> 
      </td>
      <td>
        <img src="media/images/icons/logo-jaws.svg" alt="JAWS">
      </td>
      <td>
        <img src="media/images/icons/logo-chrome.svg" alt="Chrome"> 
      </td>
    </tr>
    <tr>
      <td>
        <img src="media/images/icons/logo-windows.svg" alt="Windows">
      </td>
      <td>
        <img src="media/images/icons/logo-nvda.svg" alt="NVDA">
      </td>
      <td>
        <img src="media/images/icons/logo-chrome.svg" alt="Chrome"> 
      </td>
    </tr>
    <tr>
      <td>
        <img src="media/images/icons/logo-apple.svg" alt="Apple">
      </td>
      <td>
        <img src="media/images/icons/logo-apple.svg" alt="VoiceOver"> 
      </td>
      <td>
        <img src="media/images/icons/logo-safari.svg" alt="Safari"> 
      </td>
    </tr>
  </tbody>
</table>

## When You Can’t Use Semantic HTML

If tabular data must be displayed without a `<table>` element, additional attributes are required.

```html
<div role="table" aria-describedby="table-desc">
  <div id="table-desc">Nato phonetic alphabet</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader">Letter</span>
      <span role="columnheader">NATO</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">A</span>
      <span role="cell">Alpha</span>
    </div>
    <div role="row">
      <span role="cell">B</span>
      <span role="cell">Bravo</span>
    </div>
    <div role="row">
      <span role="cell">C</span>
      <span role="cell">Charlie</span>
    </div>
  </div>
</div>
```

# Videos

### iOS Voiceover

<video controls>
  <source src="media/video/table_ios.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

# Developer Notes

## Name

- The table can be named by a heading above or a `<caption>`.

## Role

- Semantic `<table>` structures identify headers appropriately and honor screenreader keyboard shortcuts.

## Group

- Wrapping a table in a `<figure>` element can build a relationship to `<figcaption>` and `<cite>`.

## State

- Sortable tables can use `aria-sort` to indicate state.
