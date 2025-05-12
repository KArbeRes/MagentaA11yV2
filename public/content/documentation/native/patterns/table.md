## General Notes

How to test a table

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a table

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the first interactive element in table

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the first element in table 
   - Doubletap: Activates any interactive element

3. Listen to screenreader output on all devices

   - Label: Visible table title that describes table’s purpose is announced
   - Column header: Each column header is announced with each row cell beneath it, along with cell data
   - Row header: If applicable, each row header is announced with each cell in row, along with cell data
   - Name: Purpose of any interactive element is clear and matches visible label
   - Role: Most interactive elements identify as a button in iOS and "double tap to activate" in Android
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/table](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/table)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a table

GIVEN THAT I am on a screen with a table

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the first interactive element in the table

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate
      - THEN the focus should move to the first element in the table 
   - WHEN I double-tap an interactive element 
      - THEN the element should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the table
      - THEN the visible table title that describes the table’s purpose should be announced 
         - AND each column header should be announced with each row cell beneath it, along with cell data 
         - AND if applicable, each row header should be announced with each cell in the row, along with cell data 
         - AND the purpose of any interactive element should be clear and match its visible label 
         - AND most interactive elements should identify as a "BUTTON" in iOS and announce "DOUBLE TAP TO ACTIVATE" in Android 
         - AND the state of interactive elements (DISABLED or DIMMED) should be expressed if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size up to 200% in the device settings 
      - THEN all text should resize without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/table](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/table)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
