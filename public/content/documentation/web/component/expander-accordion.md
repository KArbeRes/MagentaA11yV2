## General Notes

How to test an expander accordion

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a expander accordion

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus visibly moves to the expander
   - Spacebar: Toggles the expander
   - Enter: Toggles the expander

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its state (expanded/collapsed)
   - Doubletap: Toggles the expander

3. Listen to screenreader output on all devices

   - Name: Its purpose is clear
   - Role: It identifies its role of a button or details
   - State: It expresses its state (expanded/collapsed)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/expander-accordion](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/expander-accordion)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a expander accordion

GIVEN THAT I am on a page with a expander accordion

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to an expander I SEE focus is strongly visually indicated
   - THEN when I use the spacebar and/or enter key to activate the expander I SEE the hidden content is revealed

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to an expander
      - I HEAR its purpose is clear
      - I HEAR it identifies its role of a button or details
      - I HEAR it expresses its state (expanded/collapsed)
   - THEN when I use the spacebar and/or enter key to activate the expander I HEAR the hidden content is revealed

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on a button
      - I HEAR its purpose is clear
      - I HEAR it identifies its role of a button or details
      - I HEAR it expresses its state (expanded/collapsed)
   - THEN when I doubletap with the button in focus I HEAR the intended action occurs

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/expander-accordion](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/expander-accordion)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
