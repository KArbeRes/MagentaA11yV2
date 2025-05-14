## General Notes

How to test a loading icon

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a loading icon

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: N/A

2. Test mobile screenreader gestures

   - Swipe: Focus can move to the loading icon, but it should not be necessary because “loading” is announced dynamically

3. Listen to screenreader output on all devices

   - Name: “Loading” is announced dynamically

4. Test device settings

   - Text resize: N/A

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/loading-icon](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/loading-icon)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a loading icon

GIVEN THAT I am on a screen with a loading icon

1. Scenario: Test keyboard actions

   - WHEN I am using keyboard navigation
      - THEN keyboard interaction is N/A 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate
      - THEN focus moves to the loading icon
         - BUT it should not be necessary because "Loading" is announced dynamically

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active
      - THEN "Loading" should be announced dynamically

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings
      - THEN text resize interaction is N/A 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/loading-icon](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/loading-icon)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
