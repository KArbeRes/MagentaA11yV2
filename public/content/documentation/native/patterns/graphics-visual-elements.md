## General Notes

How to test a graphic/visual element

## Videos

### iOS VoiceOver 

<video controls>
  <source src="media/video/native/graphics-visual-elements/graphics-visual-elements_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback 

<video controls>
  <source src="media/video/native/graphics-visual-elements/graphics-visual-elements_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a graphic/visual element

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to any interactive controls
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to any interactive control, expresses its name, role, or to graphic and expresses name
   - Doubletap: Activates most controls

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label for controls and announces all text and meaningful images
   - Role: CTA identifies as a button in iOS and button or "double tap to activate" in Android
   - Graphics: Only meaningful, non-decorative images and graphics should be focused and announced
   - State: Expresses the controls state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information. Text in images do not resize

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/graphics-visual-elements](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/graphics-visual-elements)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a graphic/visual element

GIVEN THAT I am on a screen with a graphic/visual element

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB" 
      - THEN the focus should visibly move to any interactive controls 
   - WHEN I press the "SPACEBAR" key 
      - THEN the control should be activated on iOS and Android
   - WHEN I press the "ENTER" key 
      - THEN the control should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate 
      - THEN the focus should move to any interactive control and express its name and role 
         - AND if the focus moves to a graphic, it should express its name 
   - WHEN I double-tap a control 
      - THEN the control should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active 
      - THEN the purpose should be clear and match the visible label for controls 
         - AND all text and meaningful images should be announced 
         - AND call-to-action (CTA) elements should be identified as a button in iOS 
         - AND CTA elements should be identified as a button or "double tap to activate" in Android 
         - AND only meaningful, non-decorative images and graphics should receive focus and be announced
         - AND the control's state (DISABLED/DIMMED) should be expressed

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings
      - THEN text should resize up to 200% without losing information
         - AND text within images should not resize

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/graphics-visual-elements](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/graphics-visual-elements)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
