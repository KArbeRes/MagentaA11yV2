## General Notes

How to test a progress indicator

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a progress indicator

1. Test keyboard only, then screen reader + keyboard actions

   - Arrow keys: Content within the progress indicator is browsed in logical order

2. Test mobile screenreader gestures

   - Swipe: Content within the progress indicator is browsed in logical order

3. Listen to screenreader output on all devices

   - Name: The progress indicator purpose is clear
   - Role: It identifies itself as some kind of progress indicator
   - State: It expresses its current value if it dynamically changes

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/progress-indicator](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/progress-indicator)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a progress indicator

GIVEN THAT I am on a page with a progress indicator

1. Keyboard for mobile & desktop

   - WHEN I use the arrow key to browse to a progress bar I SEE the progress bar comes into view

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use the arrow key to browse to a progress bar
      - I HEAR the progress indicator purpose is clear
      - I HEAR it identifies itself as some kind of progress indicator
      - I HEAR it expresses its current value if it dynamically changes

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to browse to a progress bar
      - I HEAR the progress indicator purpose is clear
      - I HEAR it identifies itself as some kind of progress indicator
      - I HEAR it expresses its current value if it dynamically changes

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/progress-indicator](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/progress-indicator)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
