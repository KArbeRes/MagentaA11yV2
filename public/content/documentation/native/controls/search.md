## General Notes

How to test a search

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/search/search_IosVoiceover.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/search/search_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a search

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the search field
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the search field, expresses its name, role, state (if applicable)
   - Doubletap: Activates the search field

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label or icon (search) meaning
   - Role: Input field identifies as a search field or text field in iOS and edit box in Android
   - State: Expresses the search field state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/search](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/search)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a search

GIVEN THAT I am on a screen with a search

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the search field 
   - WHEN I press the "SPACEBAR" key 
      - THEN the search field should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the search field should be activated on Android

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the search field 
      - THEN the focus should move to the search field 
         - AND the search field's name, role, and state (if applicable) should be expressed 
   - WHEN I double-tap the search field 
      - THEN the search field should be activated

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the search field 
      - THEN its name should clearly describe its purpose and match the visible label or icon meaning (e.g., search icon) 
         - AND its role should identify as a search field or text field in iOS and as an edit box in Android 
         - AND its state (DISABLED/DIMMED) should be expressed, if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
      - THEN the text on the button should resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/search](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/search)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
