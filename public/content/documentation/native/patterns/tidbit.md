## General Notes

How to test a tidbit

## Condensed

### #a11y - Native App Accessibility Acceptance Criteria

How to test a tidbit

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the tidbit if there is a Call To Action (CTA)
   - Spacebar: Activates CTA on iOS and Android
   - Enter: Activates CTA on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the tidbit or tidbit CTA, expresses its name, role
   - Doubletap: Activates the tidbit CTA

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label for CTA and announces all text and meaningful images
   - Role: CTA identifies as a button in iOS and button or "double tap to activate" in Android
   - Group: n/a
   - State: Expresses the CTA's state (disabled/dimmed)

4. Device OS Settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/radio-button](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/radio-button)

## Gherkin

### #a11y - Native App Accessibility Acceptance Criteria

How to test a tidbit

GIVEN THAT I am on a screen with a tidbit

1. Scenario: Test keyboard actions 

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB"
        - THEN the focus should visibly move to the tidbit if there is a call-to-action (CTA)
   - WHEN I press the "SPACEBAR" key
        - THEN the CTA should be activated on iOS and Android
   - WHEN I press the "ENTER" key 
        - THEN the CTA should be activated on Android 

2. Scenario: Test mobile screen reader gestures 

   - WHEN I swipe to navigate
        - THEN the focus should move to the tidbit or tidbit CTA
            - AND the name and role should be expressed
   - WHEN I double-tap the tidbit CTA
        - THEN the CTA should be activated

3. Scenario: Test screen reader output on all devices 

   - WHEN a screen reader is active
        - THEN the purpose should be clear and match the visible label for the CTA
            - AND all text and meaningful images should be announced
            - AND the CTA should be identified as a button in iOS
            - AND the CTA should be identified as a button or "double tap to activate" in Android
            - AND the CTA’s state (DISABLED/DIMMED) should be expressed

4. Scenario: Test device OS settings for text resize 

   - WHEN I have increased text size up to 200% in the device settings
        - THEN text should resize up to 200% without losing information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/radio-button](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/radio-button)

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/tidbit/tidbit_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback
<video controls>
  <source src="media/video/native/tidbit/tidbit_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## iOS Developer Notes

   - Radio buttons allow a user to select one item from a predefined list of options

## Android Developer Notes

   - Radio buttons allow users to select an item from a predefined list of options
