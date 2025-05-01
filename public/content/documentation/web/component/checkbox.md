## General Notes

How to test a checkbox

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a checkbox

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus visibly moves to the checkbox
   - Spacebar: Toggles the checkbox between states

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its state
   - Doubletap: Checkbox toggles between checked and unchecked states

3. Listen to screenreader output on all devices

   - Name: Its label and purpose is clear
   - Role: It identifies its role of checkbox
   - Group: Hints or errors are read after the label and related inputs include a group name (ex: Account settings)
   - State: It expresses its state (checked/unchecked, disabled)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/form/checkbox](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/form/checkbox)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a checkbox

GIVEN THAT I am on a page with a checkbox

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to a checkbox I SEE focus is strongly visually indicated
   - THEN when I use the spacebar to activate the checkbox I SEE the state is changed

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to a checkbox
      - I HEAR its label and purpose is clear
      - I HEAR it identifies its role of checkbox
      - I HEAR hints or errors are read after the label and related inputs include a group name (ex: Account settings)
      - I HEAR it expresses its state (checked/unchecked, disabled)
   - THEN when I use the spacebar to activate the checkbox I HEAR the state is changed

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on a checkbox input
      - I HEAR its label and purpose is clear
      - I HEAR it identifies its role of checkbox
      - I HEAR hints or errors are read after the label and related inputs include a group name (ex: Account settings)
      - I HEAR it expresses its state (checked/unchecked, disabled)
   - THEN when I doubletap with the checkbox in focus I HEAR the state is changed

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/form/checkbox](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/form/checkbox)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
