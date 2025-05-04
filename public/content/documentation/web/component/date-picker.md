## General Notes

How to test a date picker dialog

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a date picker dialog

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus visibly moves to the date grid table and calendar navigation buttons
   - Escape: The dialog closes and focus returns to the launch button
   - Arrow keys: Date selection visibly moves through next/previous days
   - Page up/down: Changes the grid of dates to the previous/next month
   - Shift + page up/down: Changes the grid of dates to the previous/next year
   - Home/end: Moves focus to the first/last day of the current week
   - Spacebar or enter: Activates the date picker buttons and calendar navigation buttons

2. Test mobile screenreader gestures

   - Swipe: Focus moves through elements, expresses its state
   - Doubletap: Activates the element in focus

3. Listen to screenreader output on all devices

   - Name: The purpose of each control is clear
   - Role: Buttons identify as buttons, dialog identifies itself dialog or modal, date grid table may identify itself as table or grid
   - Group: The launch button indicates it has a popup, menu or dialog; days are announced with month and year
   - State: Date options express state (pressed, selected, disabled/dimmed)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/web/date-picker](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/web/date-picker)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a date picker dialog

GIVEN THAT I am on a page with a date picker dialog

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to the date dialog button I SEE focus is strongly visually indicated
- THEN when I use the spacebar and/or enter key I SEE the date picker dialog appears
- THEN when I use the arrow keys I SEE the selection moves through next/previous dates
- THEN when I use the home/end key I SEE the selection moves to the first/last day of the current week
- THEN when I use the page up/down key I SEE the grid of dates moves to the next/previous month
- THEN when I use shift key + page up/down I SEE the grid of dates moves to the next/previous year
- THEN when I use the spacebar and/or enter key I SEE the button or selection is activated
- THEN when I use the escape key I SEE the date picker dialog disappears and focus returns to the date dialog button

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
- I use the tab key to move focus to the date dialog button
  - I HEAR The purpose of each control is clear
  - I HEAR Buttons identify as buttons, dialog identifies itself dialog or modal, date grid table may identify itself as table or grid
  - I HEAR The launch button indicates it has a popup, menu or dialog; days are announced with month and year
  - I HEAR Date options express state (pressed, selected, disabled/dimmed)
- THEN when I use the spacebar and/or enter key I HEAR the date picker dialog appears
- THEN when I use the arrow keys I HEAR the selection moves through next/previous dates
- THEN when I use the home/end key I HEAR the selection moves to the first/last day of the current week
- THEN when I use the page up/down key I HEAR the grid of dates moves to the next/previous month
- THEN when I use shift key + page up/down I HEAR the grid of dates moves to the next/previous year
- THEN when I use the spacebar and/or enter key I HEAR the button or selection is activated
- THEN when I use the escape key I HEAR the date picker dialog disappears and focus returns to the date dialog button

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND

   - I swipe to focusable elements in the header

   - I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

   - I HEAR It typically contains the name and primary navigation of the website


Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/web/date-picker](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/web/date-picker)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
