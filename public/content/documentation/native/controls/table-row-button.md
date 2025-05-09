## General Notes

How to test a table row button / list item

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a table row button / list item

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus visibly moves to the row/blade, if interactive
   - Spacebar: Activates the row/blade on iOS and Android
   - Enter: Activates the row/blade on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its state, if applicable
   - Doubletap: Activates the row/blade

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches the visible label
   - Role: Identifies as a button in iOS and "double tap to activate" in Android
   - Group: Visible label (if any) is grouped or associated with the button in a single swipe
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/table-row-button](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/table-row-button)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a table row button / list item

GIVEN THAT I am on a screen with a table row button / list item

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key 
      - THEN the focus should visibly move to the row or blade if it is interactive 
   - WHEN I press the "SPACEBAR" key 
      - THEN the row or blade should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the row or blade should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the row or blade 
      - THEN the focus should move to the row or blade 
         - AND its state should be expressed if applicable 
   - WHEN I double-tap the row or blade 
      - THEN the row or blade should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the row or blade 
      - THEN its name should clearly describe its purpose and match the visible label 
         - AND its role should be identified as "button" in iOS 
         - AND on Android, it should instruct "double tap to activate" 
         - AND the visible label (if any) should be grouped or associated with the button in a single swipe 
         - AND its state (DISABLED or DIMMED) should be expressed if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN the text resize setting is increased up to 200% 
      - THEN the text within the row or blade should remain readable without losing information or functionality 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/table-row-button](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/table-row-button)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
