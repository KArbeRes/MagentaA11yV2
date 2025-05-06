## General Notes

How to test a date time picker

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a date time picker

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the picker
   - Spacebar: Selects and opens the picker on iOS and Android
   - Enter: Selects and opens the picker on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, value
   - Doubletap: Selects and opens picker
   - Swipe up or down: Focus moves to next item in picker (iOS) or next item in column (Android), expresses its name, role 

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches any visible label
   - Role: Identifies itself as a button/adjustable in iOS and button or "double tap to activate" in Android
   - Group: n/a
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/inputs/date-time-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/inputs/date-time-picker)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a date time picker

GIVEN THAT I am on a screen with a date time picker

1. Scenario: Test keyboard actions

   - WHEN the user presses "TAB", Arrow Keys, or "CTRL+TAB" 
      - THEN the focus must visibly move to the picker 
   - WHEN the user presses "SPACEBAR" on iOS or Android 
      - THEN the time/date picker must be selected and opened 
   - WHEN the user presses "ENTER" on Android 
      - THEN the time/date picker must be selected and opened 

2. Scenario: Test mobile screen reader gestures

   - WHEN the user swipes to the picker 
      - THEN the screen reader must announce the picker’s Name, Role, and Value 
   - WHEN the user performs a double-tap gesture 
      - THEN the time/date picker must be selected and opened 
   - WHEN the user swipes up or down on iOS or Android 
      - THEN the focus must move to the next item in the picker (iOS) or next item in the column (Android) 
         - AND the screen reader must announce the Name and Role of the next item 

3. Scenario: Test screen reader output on all devices

   - WHEN the user swipes to the picker 
      - THEN the time/date picker must be announced with the following attributes: 
         - AND the Name must clearly describe the purpose and match any visible label 
         - AND the Role must be identified as "Button/Adjustable" in iOS and "Button" or "Double tap to activate" in Android 
         - AND the Group must be marked as not applicable (N/A) 
         - AND the State must announce the picker’s state (e.g., DISABLED/DIMMED) 

4. Scenario: Test device OS settings for text resize

   - WHEN the user adjusts text resizing settings up to 200% 
      - THEN all text must remain readable without loss of information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/inputs/date-time-picker](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/inputs/date-time-picker)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
