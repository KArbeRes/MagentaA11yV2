## General Notes

How to test a text input

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/text-input/text-input_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/text-input/text-input_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a text input

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to and from the text input 
   - Space bar: Places the user in editing mode inside the input

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, input value and state - if disabled
   - Doubletap: Keyboard appears to edit

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label
   - Role: Identifies itself as text field on iOS, edit box on Android
   - Group: Visible label is grouped or associated with the text input in a single swipe
   - State: The input can be disabled/dimmed

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/text-input](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/text-input)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a text input

GIVEN THAT I am on a screen with a text input

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" 
      - THEN the focus should visibly move to and from the text input 
   - WHEN I press the "SPACEBAR" key 
      - THEN the user should be placed in editing mode inside the text input 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the text input 
      - THEN the focus should move to the text input 
         - AND the text input's name, role, input value, and state (if disabled) should be expressed 
   - WHEN I double-tap the text input 
      - THEN the keyboard should appear to allow editing 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the text input 
      - THEN its name should clearly describe its purpose and match the visible label 
         - AND its role should be identified as a text field on iOS and as an edit box on Android 
         - AND its visible label should be grouped or associated with the text input in a single swipe 
         - AND its state (DISABLED/DIMMED) should be expressed if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
      - THEN the text within the text input should resize up to 200% without losing information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/text-input](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/text-input)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
