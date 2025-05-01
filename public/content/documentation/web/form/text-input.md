## General Notes

How to test a text input

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a text input

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus moves visibly to the input unless it's disabled

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the input
   - Keyboard: Keyboard appears

3. Listen to screenreader output on all devices

   - Name: Its purpose is clear
   - Role: It identifies itself as a text input
   - Group: Hints or errors are read after the label, related inputs include a group name (Ex: Enter your personal information)
   - State: If applicable, it expresses its state (required, disabled / dimmed / unavailable)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//text-input](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//text-input)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a text input

GIVEN THAT I am on a page with a text input

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to a text input I SEE focus is strongly visually indicated

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to a text input
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a text input
      - I HEAR hints or errors are read after the label, related inputs include a group name (Ex: Enter your personal information)
      - I HEAR if applicable, it expresses its state (required, disabled / dimmed / unavailable)

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on a text input
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a text input
      - I HEAR hints or errors are read after the label, related inputs include a group name (Ex: Enter your personal information)
      - I HEAR if applicable, it expresses its state (required, disabled / dimmed / unavailable)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//text-input](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form//text-input)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
