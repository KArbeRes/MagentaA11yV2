## General Notes

How to test a stepper

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a stepper

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, ctr+tab or arrow keys: Focus visibly moves to the button
   - Spacebar: Activates the button on iOS and Android
   - Enter: Activates the button on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its state, if applicable
   - Doubletap: Activates the button

3. Listen to screenreader output on all devices

   - Name: Purpose is clear (example: Increment or Increase, Decrement or Decrease)
   - Role: Identifies as a button in iOS and "double tap to activate" in Android
   - Value: Express the stepper value dynamically when it has visibly changed and when value is in focus
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/stepper](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/stepper)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a stepper

GIVEN THAT I am on a screen with a stepper

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "CTRL+TAB" key, or an arrow key 
      - THEN the focus should visibly move to the button 
   - WHEN I press the "SPACEBAR" key 
      - THEN the button should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the button should be activated on Android

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the button 
      - THEN the focus should move to the button 
         - AND the button's state should be expressed if applicable 
   - WHEN I double-tap the button 
      - THEN the button should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the button 
      - THEN its name should clearly describe its purpose (e.g., "Increment," "Increase," "Decrement," or "Decrease") 
         - AND its role should be identified as "button" in iOS 
         - AND on Android, it should instruct "double tap to activate" 
         - AND its value should dynamically be expressed when the stepper value visibly changes and when the value is in focus 
         - AND its state (DISABLED or DIMMED) should be expressed if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN the text resize setting is increased up to 200% 
      - THEN the text within the stepper should remain readable without losing information or functionality 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/stepper](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/stepper)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
