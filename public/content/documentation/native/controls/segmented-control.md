## General Notes

How to test a segemented control / tabs

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/segmented-control/segmented-control_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/segmented-control/segmented-control_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a segemented control / tabs

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the button
   - Arrow keys: Navigate through group
   - Spacebar: Activates the button on iOS and Android
   - Enter: Activates the button on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its state, if applicable
   - Doubletap: Activates the button

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label
   - Role: Identifies as a button in iOS and "double tap to activate" in Android
   - Group: Visible label (if any) is grouped or associated with the button in a single swipe
   - State: Expresses its state (selected/disabled/dimmed)

4. Test device settings

   - Text resize: This element is exempt from text resizing requirements

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/segmented-control](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/segmented-control)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a segemented control / tabs

GIVEN THAT I am on a screen with a segemented control / tabs

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the button
   - WHEN I press the "ARROW KEYS" 
      - THEN I should navigate through the group
   - WHEN I press the "SPACEBAR" key 
      - THEN the button should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the button should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the button 
      - THEN the focus should move to the button 
         - AND the button's state (if applicable) should be expressed
   - WHEN I double-tap the button 
      - THEN the button should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the button 
      - THEN its name should clearly describe its purpose and match the visible label 
         - AND its role should be identified as a button in iOS and as "double tap to activate" in Android 
         - AND its visible label (if any) should be grouped or associated with the button in a single swipe 
         - AND its state (SELECTED, DISABLED, DIMMED) should be expressed 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting 
      - THEN this element remains exempt from text resizing requirements 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/segmented-control](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/segmented-control)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
