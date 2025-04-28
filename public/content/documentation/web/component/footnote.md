## General Notes

How to test a footnote

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a footnote

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus moves to the footnote link
   - Enter: Activates the link, focus/tabindex moves directly to the targeted element 

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the footnote link
   - Doubletap: Activates the link, focus/tabindex moves directly to the targeted footnote

3. Listen to screenreader output on all devices

   - Name: It describes its purpose
   - Role: It identifies itself as a link

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/footnote](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/footnote)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a footnote

GIVEN THAT I am on a page with a footnote

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to a footnote link I SEE focus is strongly visually indicated
   - THEN when I use the enter key to activate the link I SEE my focus moves directly to the targeted footnote

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to a footnote link
      - I HEAR it describes its purpose
      - I HEAR it identifies itself as a link
   - THEN when I use the enter key to activate the link I HEAR my focus moves directly to the targeted footnote

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on a footnote link
      - I HEAR it describes its purpose
      - I HEAR it identifies itself as a link
   - THEN when I doubletap with the link in focus I HEAR my focus moves directly to the targeted footnote

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/footnote](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/footnote)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
