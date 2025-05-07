## General Notes

How to test a dropdown

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a dropdown

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the Dropdown
   - Spacebar: Selects and opens the Dropdown on iOS and Android
   - Enter: Selects and opens the Dropdown on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role, value & state (expanded or collapsed)
   - Doubletap: Selects and opens Dropdown

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches any visible label
   - Role: Identifies itself as a button in iOS and "double tap to activate" in Android
   - Group: Visible label is grouped or associated with the Dropdown in a single swipe
   - State: Expresses its state (disabled/dimmed). Expanded/collapsed states are announced on the elements that close or open the dropdown

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/dropdown](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/dropdown)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a dropdown

GIVEN THAT I am on a screen with a dropdown

1. Scenario: Test keyboard actions

   - WHEN I use the tab key to enter the web browser window I SEE focus is strongly visually indicated on interactive components

2. Scenario: Test mobile screen reader gestures

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND

   - I use the tab key to enter the web browser window

   - I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

   - I HEAR It typically contains the name and primary navigation of the website

3. Scenario: Test screen reader output on all devices

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND

   - I swipe to focusable elements in the header

   - I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

   - I HEAR It typically contains the name and primary navigation of the website

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
   
      - THEN the text on the button should resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/dropdown](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/dropdown)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
