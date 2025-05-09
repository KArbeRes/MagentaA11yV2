## General Notes

How to test a timer

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a timer

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to a part of the control that is interactive
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the interactive control, expresses its name, role, state (if applicable)
   - Doubletap: Activates the control

3. Listen to screenreader output on all devices

   - Name: Purpose is clear (ex: "Start/Pause")
   - Role: Identifies itself as a button

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/timer](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/timer)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a timer

GIVEN THAT I am on a screen with a timer

1. Scenario: Test keyboard actions

   - WHEN the user presses "TAB", Arrow Keys, or "CTRL+TAB" 
      - THEN the focus must visibly move to a part of the timer control that is interactive 
   - WHEN the user presses "SPACEBAR" on iOS or Android 
      - THEN the timer control must activate 
   - WHEN the user presses "ENTER" on Android 
      - THEN the timer control must activate 

2. Scenario: Test mobile screen reader gestures

   - WHEN the user swipes to the timer 
      - THEN the screen reader must announce the control’s Name, Role, and State (if applicable) 
   - WHEN the user performs a double-tap gesture 
      - THEN the timer control must activate 

3. Scenario: Test screen reader output on all devices

   - WHEN the user navigates to the timer 
      - THEN the timer control must be announced with the following attributes: 
         - AND the Name must clearly describe the purpose (e.g., "Start/Pause") 
         - AND the Role must be identified as a "Button" 

4. Scenario: Test device OS settings for text resize

   - WHEN a user adjusts text resizing settings up to 200% 
      - THEN all text must remain readable without loss of information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/timer](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/timer)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
