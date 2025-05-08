## General Notes

How to test a sheet

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a sheet

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the first interactive element
   - Spacebar: If Grabber is available, spacebar activates on iOS and Android and will either expand or minimize sheet. Spacebar will also activate any other interactive element in the sheet.
   - Enter: If Grabber is available, enter activates on Android and will either expand or minimize sheet.
Enter will also activate any other interactive element in the sheet.

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the first element (hidden or not), expresses its name, role, value & state
   - Doubletap: Activates interactive elements

3. Listen to screenreader output on all devices

   - Name: Purpose is clear
   - Role: Identifies itself as a button in iOS and "double tap to activate" in Android
   - Group: n/a
   - State: n/a

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sheet](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sheet)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a sheet

GIVEN THAT I am on a screen with a sheet

1. Scenario: Test keyboard actions

   - WHEN the user presses "TAB", Arrow Keys, or "CTRL+TAB" 
      - THEN the focus must visibly move to the first interactive element 
   - WHEN the Grabber is available 
      - AND the user presses "SPACEBAR" on iOS or Android 
      - THEN the sheet expands or minimizes 
   - WHEN the user presses "SPACEBAR" on any other interactive element 
      - THEN the element activates
   - WHEN the Grabber is available 
      - AND the user presses "ENTER" on Android 
      - THEN the sheet expands or minimizes 
   - WHEN the user presses "ENTER" on any other interactive element 
      - THEN the element activates 

2. Scenario: Test mobile screen reader gestures

   - WHEN the user swipes through elements 
      - THEN focus must move to the first element (hidden or visible) 
         - AND the screen reader must announce the element’s Name, Role, Value, and State 
   - WHEN the user performs a double-tap gesture 
      - THEN the interactive element must activate 

3. Scenario: Test screen reader output on all devices

   - WHEN the user swipes through elements 
      - THEN each element must be announced with the following attributes: 
         - AND the Name must clearly describe its purpose 
         - AND the Role must be identified as a "Button" in iOS and announce "Double tap to activate" in Android 
         - AND the Group must be marked as not applicable (N/A) 
         - AND the State must be marked as not applicable (N/A) 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
      - THEN the text on the button should resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sheet](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sheet)

## iOS Developer Notes
### General Notes

- ios developer notes go here

## Android Developer Notes
### General Notes

- android developer notes go here
