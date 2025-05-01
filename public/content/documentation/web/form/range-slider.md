## General Notes

How to test a range slider input

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a range slider input

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus moves visibly to the input
   - Arrow-keys: Increase / decrease value one step

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the input
   - Swipe up/down: Increase/decrease slider value one step on iOS
   - Volume: Increase/decrease slider value one step on Android

3. Listen to screenreader output on all devices

   - Name: Its purpose is clear
   - Role: It identifies itself as a range
   - Group: Its label is read with the input
   - State: Its current value

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//range-slider](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//range-slider)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a range slider input

GIVEN THAT I am on a page with a range slider input

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to a range slider I SEE focus is strongly visually indicated
   - THEN when I use the up/down/left/right arrow keys I SEE the value is changed one step

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to a range slider
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a range
      - I HEAR its label is read with the input
      - I HEAR its current value
   - THEN when I use the up/down/left/right arrow keys I HEAR the value is changed one step

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to move focus to a range slider
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a range
      - I HEAR its label is read with the input
      - I HEAR its current value
   - THEN when I swipe up/down in iOS or use the volume buttons in Android I HEAR the value is changed one step

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//range-slider](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//range-slider)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
