## General Notes

How to test a time picker 

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/time-picker/time-picker_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/time-picker/time-picker_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a time picker

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the picker
   - Spacebar: Selects and opens the picker on iOS and Android
   - Enter: Selects and opens the picker on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, value
   - Doubletap: Selects and opens picker

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches any visible label
   - Role: Identifies itself as a button/adjustable in iOS and "double tap to activate" in Android
   - Group: n/a
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/time-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/time-picker)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a time picker

GIVEN THAT I am on a screen with a time picker

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, an arrow key, or "CTRL+TAB" key 
      - THEN the focus should visibly move to the time picker 
   - WHEN I press the "SPACEBAR" key 
      - THEN the time picker should be selected and opened on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the time picker should be selected and opened on Android

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the time picker 
      - THEN the focus should move to the time picker 
         - AND its name, role, and current value should be expressed 
   - WHEN I double-tap the time picker 
      - THEN the time picker should be selected and opened

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the time picker 
      - THEN its name should clearly describe its purpose and match any visible label 
         - AND its role should be identified as "button" or "adjustable" in iOS 
         - AND on Android, it should instruct "double tap to activate" 
         - AND its state (DISABLED or DIMMED) should be expressed if applicable 
         - AND group-related functionality is not applicable (N/A)

4. Scenario: Test device OS settings for text resize

   - WHEN the text resize setting is increased up to 200% 
      - THEN the text within the time picker should remain readable without losing information or functionality 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/time-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/time-picker)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
