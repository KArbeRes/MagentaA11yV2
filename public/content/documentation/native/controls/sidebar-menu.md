## General Notes

How to test a sidebar navigation menu

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/sidebar-menu/sidebar-menu_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/sidebar-menu/sidebar-menu_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a sidebar navigation menu

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves to the first interactive element in the menu
   - Spacebar: Activates on iOS and Android
   - Enter: Activates on Android
   - If close button present: Activate the close button and focus should return to the triggering element

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the element, expresses its name, role (state, if applicable)
   - Doubletap: Activates the menu item
   - Two-finger swipe to the left anywhere on the screen closes the menu: Activates close on Android
   - If close button present: Double tap to activate the close button and focus should return to the triggering element

3. Listen to screenreader output on all devices

   - Name: Purpose is clear and matches visible label
   - Role: Usually identifies as a button in iOS and button or "double tap to activate" in Android
   - Group: Visible label is grouped or associated with the button in a single swipe
   - State: Expresses its state (disabled/dimmed)


4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sidebar-menu](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sidebar-menu)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a sidebar navigation menu

GIVEN THAT I am on a screen with a sidebar navigation menu

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move to the first interactive element in the menu 
   - WHEN I press the "SPACEBAR" key 
      - THEN the menu item should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN the menu item should be activated on Android 
   - WHEN a close button is present 
      - THEN I activate the close button 
         - AND the menu should close and the focus should return to the triggering element 

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate through the menu 
      - THEN the focus should move to each menu item 
         - AND the item's name, role, and state (if applicable) should be expressed 
   - WHEN I double-tap a menu item 
      - THEN the menu item should be activated 
   - WHEN I perform a two-finger swipe to the left anywhere on the screen 
      - THEN the menu should close (Android only) 
   - WHEN a close button is present 
      - AND I double-tap the close button 
      - THEN the menu should close and the focus should return to the triggering element 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the menu items 
      - THEN their name should clearly describe their purpose and match the visible label 
         - AND their role should be identified as a button in iOS and as a button or "double tap to activate" in Android 
         - AND their visible label should be grouped or associated with the menu item in a single swipe 
         - AND their state (DISABLED/DIMMED) should be expressed, if applicable 

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
      - THEN the text on the button should resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sidebar-menu](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/sidebar-menu)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
