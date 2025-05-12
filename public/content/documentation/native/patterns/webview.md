## General Notes

How to test a webview

## Videos

### iOS VoiceOver 

<video controls>
  <source src="media/video/native/webview/webview_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback 

<video controls>
  <source src="media/video/native/webview/webview_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a webview

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Moves to all interactive elements in navigation bar and webview
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role (state, if applicable)
   - Doubletap: Activates the interactive element

3. Listen to screenreader output on all devices

   - Focus: Initial focus should go to all elements in the navigation bars
   - Navigation: Native and webview elements are all in the swipe order

4. Test device settings

   - Text resize: N/A only for webview sections and native navigation bar text

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/webview](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/webview)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a webview

GIVEN THAT I am on a screen with a webview

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB" key, "ARROW" keys, or "CTRL+TAB" 
      - THEN the focus should move to all interactive elements in the navigation bar and webview 
   - WHEN I press the "SPACEBAR" key 
      - THEN the interactive element should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the interactive element should be activated on Android 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate 
      - THEN the focus should move to each element 
         - AND express its name and role 
         - AND express its state if applicable 
   - WHEN I double-tap an interactive element 
      - THEN the element should be activated 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active 
      - THEN the initial focus should move to all elements in the navigation bars 
         - AND native and webview elements should be included in the swipe order 

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings
      - THEN text resize is N/A for webview sections and native navigation bar text 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/webview](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/webview)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
