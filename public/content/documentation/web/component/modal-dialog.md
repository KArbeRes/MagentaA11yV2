## General Notes

How to test a modal dialog

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a modal dialog

1. Test keyboard only, then screen reader + keyboard actions

   - Launch button: Focus visibly moves to the open dialog itself
   - Arrow keys: Content within the dialog is browsed in logical order
   - Tab: Focus visibly moves to interactive controls in the dialog, starting with the first interactive control (typically close button)
   - Escape: The dialog closes and returns focus to the button that launched it
   - Space: Any buttons are activated
   - Enter: Any buttons or links are activated

2. Test mobile screenreader gestures

   - Swipe: Focus moves within the dialog and doesn't enter the rest of the page.
   - Doubletap: This typically activates most elements.

3. Listen to screenreader output on all devices

   - Name: The dialog describes its purpose or title on launch
   - Role: It identifies itself as a modal or dialog
   - Group: When closed, focus returns to the launch button
   - State: When open, content behind the modal remains inert

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/modal-dialog](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/modal-dialog)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a modal dialog

GIVEN THAT I am on a page with a modal dialog

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to the launch button and use spacebar and/or enter key to activate the button I SEE the dialog opens and is in focus
   - THEN when I use the arrow keys I SEE content in the dialog is browsed in logical order and does not leave the dialog
   - THEN when I use the tab key I SEE focus moves to interactive controls in the modal dialog
   - THEN when I use the escape key I SEE focus returns to the launch button
   - OR when I use the tab key to move focus to the dismiss/close button AND THEN use the spacebar or enter key to activate the dismiss/close button I SEE focus returns to the launch button

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to the launch button and use spacebar and/or enter key to activate the button
      - I HEAR the dialog describes its purpose or title on launch
      - I HEAR it identifies itself as a modal or dialog
      - I HEAR when closed, focus returns to the launch button
      - I HEAR when open, content behind the modal remains inert
   - THEN when I use the arrow keys I HEAR content in the dialog is browsed in logical order and does not leave the dialog
   - THEN when I use the tab key I HEAR focus moves to interactive controls in the modal dialog
   - THEN when I use the escape key I HEAR focus returns to the launch button
   - OR when I use the tab key to move focus to the dismiss/close button AND THEN use the spacebar or enter key to activate the dismiss/close button I HEAR focus returns to the launch button

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus to the launch button
      - I HEAR the dialog describes its purpose or title on launch
      - I HEAR it identifies itself as a modal or dialog
      - I HEAR when closed, focus returns to the launch button
      - I HEAR when open, content behind the modal remains inert
   - THEN when I doubletap with the button in focus I HEAR the dialog opens
   - THEN when I swipe within the modal dialog I HEAR focus stays trapped in the modal dialog
   - THEN when I swipe to move focus to the dismiss/close button AND THEN double tap on the close button I HEAR focus returns to the launch button


Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/modal-dialog](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/modal-dialog)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
