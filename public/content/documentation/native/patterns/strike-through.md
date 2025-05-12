## General Notes

How to test a strike-through text

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a strike-through text

1. Test keyboard only, then screen reader + keyboard actions

   - Keyboard interaction: N/A

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the strike-through text

3. Listen to screenreader output on all devices

   - Strike though text: Expresses the previous and current data 
   - Group: Group the previous and current data together for context

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/strike-through](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/strike-through)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a strike-through text

GIVEN THAT I am on a screen with a strike-through text

1. Scenario: Test keyboard actions

   - WHEN I am using keyboard navigation 
      - THEN keyboard interaction is N/A 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate
      - THEN the focus should move to the strike-through text 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active 
      - THEN the previous and current data should be expressed 
         - AND the previous and current data should be grouped together for context 

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings 
      - THEN text should resize up to 200% without losing information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/strike-through](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/strike-through)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
