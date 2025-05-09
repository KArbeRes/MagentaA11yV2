## General Notes

How to test a toggle switch

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a toggle switch

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the switch or table row with switch
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, state
   - Doubletap: Element toggles between states

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches any visible label
   - Role: Identifies itself as a switch button in iOS and switch in Android
   - Group: Visible label is grouped or associated with the switch in a single swipe
   - State: Express its state (disabled/dimmed, on/off)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/toggle-switch](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/toggle-switch)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a toggle switch

GIVEN THAT I am on a screen with a toggle switch

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the toggle switch or table row with a toggle switch 
   - WHEN I press the "SPACEBAR" key 
      - THEN the toggle switch or table row with a toggle switch should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the toggle switch or table row with a toggle switch should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the toggle switch or table row with a toggle switch 
      - THEN the focus should move to the toggle switch or table row with a toggle switch 
         - AND its state should be expressed 
   - WHEN I double-tap the toggle switch or table row with a toggle switch 
      - THEN the toggle switch or table row with a toggle switch should toggle between the two states (OFF/ON, DISABLED/DIMMED, ENABLED/DISABLED, CHECKED/NOT CHECKED) 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the toggle switch or table row with a toggle switch 
      - THEN its name should clearly describe its purpose and match the visible label 
         - AND its role should be identified as "switch button" on iOS, it should instruct "double tap to toggle/activate setting" 
         - AND its role should be identified as "switch" on Android, it should instruct "double tap to activate/toggle" 
         - AND the visible label should be grouped or associated with the toggle switch in a single swipe 
         - AND its state (OFF/ON, DISABLED/DIMMED, ENABLED/DISABLED, CHECKED/NOT CHECKED) should be expressed

4. Scenario: Test device OS settings for text resize

   - WHEN the text resize setting is increased up to 200% 
      - THEN the text within the toggle switch or table row with a toggle switch should remain readable without losing information or functionality 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/toggle-switch](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/toggle-switch)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
