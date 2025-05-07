## General Notes

How to test a menu

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a menu

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: Focus visibly moves, confined within the menu
   - Escape: The menu closes and returns focus to the button that launched it
   - Space: Any buttons or links are activated on iOS and Android
   - Enter: Any buttons or links are activated on Android

2. Test mobile screenreader gestures

   - Swipe: Focus moves, confined within the menu. Two finger swipe anywhere often dismisses menu (Android only)
   - Doubletap: Activates interactive elements
   - Group: n/a

3. Listen to screenreader output on all devices

   - Name: Interactive options within the menu should follow button guidance. The name should match the visible text for those buttons
   - Role: May identify itself as a menu, popover or modal. Confining the user within the menu communicates the context to the screen reader user that there is a modal present
   - State: Typically, when open, other content is inert. Expands/collapses, closes/opens states are announced on the elements that close or open the menu

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/menu](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/menu)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a menu

GIVEN THAT I am on a screen with a menu

1. Scenario: Test keyboard actions

   - WHEN I press the "TAB", "ARROW KEYS", or "CTRL+TAB" keys 
      - THEN the focus should visibly move and remain confined within the menu 
   - WHEN I press the "ESCAPE" key 
      - THEN the menu should close and return focus to the button that launched it 
   - WHEN I press the "SPACEBAR" key 
      - THEN any buttons or links within the menu should be activated on iOS and Android 
   - WHEN I press the "ENTER" key 
      - THEN any buttons or links within the menu should be activated on Android

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate within the menu 
      - THEN the focus should move and remain confined within the menu 
         - AND a two-finger swipe anywhere should dismiss the menu (Android only) 
   - WHEN I double-tap interactive elements within the menu 
      - THEN those elements should be activated

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the menu and its contents 
      - THEN interactive options within the menu should follow button guidance 
         - AND the name of interactive elements should match the visible text 
         - AND the menu's role should be identified as a menu, popover, or modal 
         - AND confining the user's focus within the menu should communicate the presence of a modal to the screen reader 
         - AND its state should be expressed (e.g., INERT when open, EXPANDED/COLLAPSED, or CLOSED/OPENED) on the elements that close or open the menu

4. Scenario: Test device OS settings for text resize

   - WHEN I adjust the device text resize setting to 200%
      - THEN the text within the menu should resize up to 200% without losing information 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/menu](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/controls/menu)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
