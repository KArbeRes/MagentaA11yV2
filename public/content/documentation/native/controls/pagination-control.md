## General Notes

How to test a pagination control

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/pagination-control/pagination-control_IosVoiceover.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/pagination-control/pagination-control_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a pagination control

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to interactive elements
   - Arrow and space keys: Brings next page into view when focus is on page control (iOS)
   - Arrow keys and space/enter: Moves focus to next page (Android)

2. Test mobile screenreader gestures

   - Swipe up/down with one finger, double tap, or three finger horizontal swipe: Brings next page into view when focus is on page control (iOS)
   - Two finger swipe: Brings next page into view when focus is not on page control (Android)
   - Swipe and double tap: Brings next page into view when focus is on page control (Android)

3. Listen to screenreader output on all devices

   - Name: The page index (X of X) and heading of slide
   - Role: Identifies as "adjustable" or button in iOS, "In horizontal pager" in Android
   - Group: n/a
   - State: Expresses its state (disabled/dimmed)

4. Test device settings

   - Text resize: n/a

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/pagination-control](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/pagination-control)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a pagination control

GIVEN THAT I am on a screen with a pagination control

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB" 
      - THEN the focus should visibly move to interactive elements 
   - WHEN I press the "ARROW" keys or "SPACEBAR" key while focus is on the page control 
      - THEN the next page should come into view on iOS 
   - WHEN I press the "ARROW" keys and "SPACEBAR" or "ENTER" key 
      - THEN the focus should move to the next page on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe up or down with one finger, double-tap, or perform a three-finger horizontal swipe 
      - THEN the next page should come into view when focus is on the page control on iOS 
   - WHEN I perform a two-finger swipe 
      - THEN the next page should come into view when focus is not on the page control on Android 
   - WHEN I swipe and double-tap 
      - THEN the next page should come into view when focus is on the page control on Android 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active 
      - THEN the page index (X of X) and heading of the slide should be announced 
         - AND the control should identify as "adjustable" or a button in iOS 
         - AND the control should identify as "In horizontal pager" in Android 
         - AND the control’s state (DISABLED/DIMMED) should be expressed

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings 
      - THEN text resize interaction is N/A 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/pagination-control](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/pagination-control)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
