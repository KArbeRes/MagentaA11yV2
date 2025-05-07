## General Notes

How to test a progress indicator

## Videos

### iOS VoiceOver 

<video controls>
  <source src="media/video/native/progress-indicator/progress-indicator_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback 

<video controls>
  <source src="media/video/native/progress-indicator/progress-indicator_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a progress indicator

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the part of the control that is interactive
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the control, expresses its name, role, state (if applicable)
   - Doubletap: Activates the control

3. Listen to screenreader output on all devices

   - Name: Purpose is clear (ex: "Step 6 of 7, Account")
   - Role: Identifies itself as a button or dropdown

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/progress-indicator](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/progress-indicator)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a progress indicator

GIVEN THAT I am on a screen with a progress indicator

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the interactive part of the progress indicator 
   - WHEN I press the "SPACEBAR" key 
      - THEN the control should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the control should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the progress indicator 
      - THEN the focus should move to the control 
         - AND the progress indicator's name, role, and state (if applicable) should be expressed 
   - WHEN I double-tap the progress indicator 
      - THEN the control should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the progress indicator 
      - THEN its name should clearly describe its purpose (e.g., "Step 6 of 7, Account") 
         - AND its role should be identified as a button or dropdown 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200% 
      - THEN the text should resize up to 200% without losing information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/progress-indicator](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/progress-indicator)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
