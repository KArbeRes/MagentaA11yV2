## General Notes

How to test a toast snackbar

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a toast snackbar

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus visibly moves in logical order to buttons or links inside the toast
   - Space: Any buttons inside are activated
   - Enter: Any links or buttons inside are activated

2. Test mobile screenreader gestures

   - Swipe: Focus moves in logical order to the toast
   - Doubletap: This typically activates most elements in the toast

3. Listen to screenreader output on all devices

   - Name: The toast is read when it appears (BUT focus DOES NOT transfer automatically when the toast appears)
   - Role: It identifies itself as an alert or status when it appears
   - Group: If it is possible to close the toast, focus then returns to a logical place in the page
   - State: It remains open until closed by user

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/toast-snackbar](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/toast-snackbar)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a toast snackbar

GIVEN THAT I am on a page with a toast snackbar

1. Keyboard for mobile & desktop

   - WHEN I use use features that trigger the toast I SEE the toast (BUT focus DOES NOT transfer automatically when the alert appears)

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use use features that trigger the toast
      - I HEAR the toast is read when it appears (BUT focus DOES NOT transfer automatically when the toast appears)
      - I HEAR it identifies itself as an alert or status when it appears
      - I HEAR if it is possible to close the toast, focus then returns to a logical place in the page
      - I HEAR it remains open until closed by user

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I use features that trigger the toast snackbar
      - I HEAR the toast is read when it appears (BUT focus DOES NOT transfer automatically when the toast appears)
      - I HEAR it identifies itself as an alert or status when it appears
      - I HEAR if it is possible to close the toast, focus then returns to a logical place in the page
      - I HEAR it remains open until closed by user

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/toast-snackbar](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/toast-snackbar)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
