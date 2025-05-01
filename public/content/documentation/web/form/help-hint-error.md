## General Notes

How to test a hint, help, or error

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a hint, help, or error

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: The input comes into focus

2. Test mobile screenreader gestures

   - Swipe: The input's name is read. Then the hint, help or error text is read

3. Listen to screenreader output on all devices

   - Name: After the input name, role and state is read. Then the hint, help or error is read
   - Role: When it appears dynamically, an error is read automatically

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form/help-hint-error](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form/help-hint-error)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a hint, help, or error

GIVEN THAT I am on a page with a hint, help, or error

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to an input I SEE hint, help or error text meets size and contrast requirements

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the tab key to move focus to an input
      - I HEAR after the input name, role and state is read, THEN the hint, help, or error is read
      - I HEAR when it appears dynamically, an error is read automatically

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on an input
      - I HEAR after the input name, role and state is read, THEN the hint, help, or error is read
      - I HEAR when it appears dynamically, an error is read automatically

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form/help-hint-error](https://www.magentaa11y.com/MagentaA11yV2#/public/content/documentation/web/form/help-hint-error)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
