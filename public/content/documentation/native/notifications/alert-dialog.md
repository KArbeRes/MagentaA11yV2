## General Notes

How to test a text input

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/alert-dialog/alert-dialog_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/alert-dialog/alert-dialog_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a text input

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves, confined within the alert
   - Escape: The alert closes and returns focus to the element that launched it or to a logical place 
   - Space: Any buttons or links are activated on iOS and Android
   - Enter: Any buttons or links are activated on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves, confined within the alert
   - Doubletap: This typically activates most elements
   - Group: n/a

3. Listen to screenreader output on all devices

   - Name: Interactive elements within the alert should follow button guidance. The name should match the visible text for those buttons 
   - Role: May identify itself as a modal, dialog or alert. Confining the user within the alert communicates the context to the screen reader user that there is a modal present
   - State: n/a

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/notifications/alert-dialog](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/notifications/alert-dialog)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a text input

GIVEN THAT I am on a screen with a text input

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, an arrow key, or "CTRL+TAB" key 
      - THEN the focus should visibly move and remain confined within the alert dialog 
   - WHEN I press the "ESCAPE" key 
      - THEN the alert should close and the focus should return to the element that launched it or to a logical place 
   - WHEN I press the "SPACEBAR" key 
      - THEN any buttons or links within the alert should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN any buttons or links within the alert should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate within the alert 
      - THEN the focus should move and remain confined within the alert 
   - WHEN I double-tap an interactive element within the alert 
      - THEN that element should be activated 
         - AND group-related functionality is not applicable (n/a) 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the alert dialog and its elements 
      - THEN the names of interactive elements (such as buttons) should follow button guidance and match their visible text 
         - AND the alert should identify its role as a "modal," "dialog," or "alert" as applicable 
         - AND confining the user within the alert should communicate its modal context to the screen reader 
         - AND state-related functionality is not applicable (n/a)

4. Scenario: Test device OS settings for text resize

   - WHEN the text resize setting is increased up to 200% 
      - THEN the text within the alert should remain readable without losing information or functionality 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/notifications/alert-dialog](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/notifications/alert-dialog)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
