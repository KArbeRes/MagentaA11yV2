## General Notes

How to test a calendar date picker

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a calendar date picker

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the picker
   - Spacebar: Selects and opens the picker on iOS and Android
   - Enter: Selects and opens the picker on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, value & state (if applicable)
   - Doubletap: Selects and opens picker

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches any visible label
   - Role: Identifies itself as a button in iOS and "double tap to activate" in Android
   - Group: Group visible label with control that opens picker
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/calendar-date-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/calendar-date-picker)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a calendar date picker

GIVEN THAT I am on a screen with a calendar date picker

1. Scenario: Test keyboard actions

   - WHEN the user presses "TAB", Arrow Keys, or "CTRL+TAB" 
      - THEN the focus visibly moves to the picker
   - WHEN the user presses "SPACEBAR" on iOS or Android 
      - THEN the picker is selected and opens 
   - WHEN the user presses "ENTER" on Android 
      - THEN the picker is selected and opens 

2. Scenario: Test mobile screen reader gestures

   - WHEN the user swipes to the picker element 
      - THEN focus moves to the element and announces its Name, Role, Value, and State (if applicable) 
   - WHEN the user performs a double-tap gesture 
      - THEN the picker is selected and opens 

3. Scenario: Test screen reader output on all devices

   - WHEN the user swipes to the picker element 
      - THEN the picker must be announced with the following attributes: 
         - AND the Name must clearly describe the purpose and match any visible label 
         - AND the Role must be identified as a "Button" in iOS and "Double tap to activate" in Android 
         - AND the Group must have the visible label grouped with the control that opens the picker 
         - AND the State must express its state (DISABLED/DIMMED) 

4. Scenario: Test device OS settings for text resize

   - WHEN a user adjusts text resizing settings up to 200% 
      - THEN all text must remain readable without loss of information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/calendar-date-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/calendar-date-picker)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
