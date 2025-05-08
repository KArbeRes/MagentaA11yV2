## General Notes

How to test a reorder data row

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a reorder data row

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus can visibly move to the reorder control, but cannot be activated  

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the control, expresses its name, role, state (if applicable)
   - Doubletap and hold: Activates the reorder action

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label 
   - Role: Control identifies as a button and ”draggable”
   - Group: Associate the visible label with the reorder control
   - State: Expresses the state of the control is disabled (dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information (visible label text)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/reorder-data-row](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/reorder-data-row)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a reorder data row

GIVEN THAT I am on a screen with a reorder data row

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the reorder control 
         - AND the reorder control should not be activated via keyboard input 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate to the reorder control 
      - THEN the focus should move to the control 
         - AND the control's name, role, and state (if applicable) should be expressed 
   - WHEN I double-tap and hold the reorder control 
      - THEN the reorder action should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the reorder control 
      - THEN its name should clearly describe its purpose and match the visible label 
         - AND its role should be identified as a button and "draggable" 
         - AND the visible label should be associated with the reorder control 
         - AND its state (e.g., DISABLED/DIMMED) should be expressed, if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200% 
      - THEN the text should resize up to 200% without losing information (visible label text)

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/reorder-data-row](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/reorder-data-row)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
