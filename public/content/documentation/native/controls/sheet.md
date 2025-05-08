## General Notes

How to test a sheet

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

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

- A sheet helps people perform a distinct task that’s related to the parent view without taking them away from their current context
- Use native elements when at all possible vs a custom element, as it will handle expected behavior without additional development effort
- Most sheets appear as a modal that partially covers the underlying content
- The screen reader is usually confined in the sheet/drawer if it covers underlining content. If a sheet does not cover other content, the screen reader can move out of it
- Ensure there is a way to collapse or close the sheet for the screen reader if covering other content.  Initial focus is to an invisible dismiss button in later versions  
- A grabber/card controller is used for sheets that expand/collapse. When implemented, the initial focus can be on the grabber, then the next swipe focus is moved to the invisible dismiss button or close X. 
- A card controller button expands/collapses the sheet to cover half the screen or the whole screen.  After expanding or collapsing, only the name and state gets announced, not the full announcement
- Keyboard users would not be able to expand the sheet without the grabber

### Name
- Programmatic name describes the purpose of the control.
- Ensure that the button that activates the sheet has a programmatic name. The sheet does not have its own programmatic name as it is implied by the button's programmatic name.

- **UIKit**
  - Set the programmatic name of the button that activates the sheet.
  - You can programmatically set the visible label with `setTitle()`.
    - The button’s title will overwrite the button’s `accessibilityLabel`.
  - If a visible label is not applicable in this case, set the triggering button's `accessibilityLabel` to the label of your choice.
    - To do this in Interface Builder, set the label using the Identity Inspector
  - To hide labels from VoiceOver programmatically, set the label's `isAccessibilityElement` property to `false`
  - To hide labels from VoiceOver using Interface Builder, uncheck `Accessibility Enabled` in the Identity Inspector.
- **SwiftUI**
  - Set the programmatic name of the button that activates the sheet.
  - If there is no visible label, use view modifier `accessibilityLabel(_:)`.
  - If button has icon(s), hide the icon(s) from VoiceOver by using view modifier `accessibilityHidden(true)`.

### Role
- Assign a role to the button that activates the sheet
- The role of the sheet is implied when the sheet opens, and the initial focus lands on the invisible dismiss button (or sheet grabber, if it exists).

- **UIKit**
  - Use `UIButton` for the button that activates the sheet.
  - Use `UISheetPresentationController` to implement the sheet.
  - If necessary, set `accessibilityTraits` to `.button` for the button that activates the sheet.
- **SwiftUI**
  - Use native `Button` view for the button that activates the sheet
  - Use native `sheet` view modifier for implementation of the sheet
  - If necessary, use view modifier `accessibilityAddTraits(.isButton)` to assign the role for the button that activates the sheet.
  - If applicable, use view modifier `accessibilityRemoveTraits(:)` to remove unwanted traits.  

### Groupings
- Group elements together logically to better understand the context of the screen

- **UIKit**
  1. Ensure that the child elements of the overarching view you want to group in has their `isAccessibilityElement` properties set to false.
  2. Set `isAccessibilityElement` to `true` for the parent view. Then, adjust `accessibilityLabel` and `accessibilityTraits` accordingly.
  - If frame does not exist due to custom button, use `accessibilityFrameInContainer` to set the custom control’s frame to the parent view’s container or view of your choice.
    - You can also unionize two frames with `frame.union` (i.e. `titleLabel.frame.union(subtitleLabel.frame)`).
  - Use `shouldGroupAccessibilityElement` for a precise order if the native order should be disrupted.
  - Use `shouldGroupAccessibilityChildren` to indicate whether VoiceOver must group its children views. This allows making unique vocalizations or define a particular reading order for a part of the page.
- **SwiftUI**
  - Use view modifier `accessibilityElement(children: .combine)` to merge the child accessibility element’s properties into the new accessibilityElement.

### State
- The state of the sheet is implied when the sheet opens, and the initial focus lands on the invisible dismiss button.
- For a sheet with adjustable height, the action to increase sheet height or decrease sheet height must be announced when the user is interacting with the sheet grabber/card controller.
- The accessibility label or value must be updated with each interaction with the sheet grabber/card controller to adjust the sheet height.

- **UIKit**
  - For enabled state of the button that activates the sheet: Set `isEnabled` to `true`.
  - For disabled state of the button that activates the sheet: Set `isEnabled` to `false`. Announcement for disabled is "Dimmed".
    - If necessary, you may change the accessibility trait of the button to `notEnabled`, but this may overwrite the current accessibility role of the button.
- **SwiftUI**
  - The open and closed state of the sheet is implied when the user's initial focus is on the invisible dismiss button (or sheet grabber, if it exists), and when the user closes the sheet with the invisible dismiss button or developer-implemented close button, if it exists.
  - For disabled state of the button that activates the sheet, use view modifier `disabled()`.

### Focus
- Use the device's default focus functionality.
- When the sheet is closed, the focus should return to the triggering element.
- External keyboard tab order often follows the screen reader focus, but sometimes this functionality requires additional development to manage focus.
- Initial focus should land on the sheet grabber, if it exists. Then, the invisible dismiss button. Then, the developer-implemented close button, if it exists.
- If the sheet grabber does not exist, the initial focus should land on the invisible dismiss button, and then the implemented close button.

- **UIKit**
  - If VoiceOver is not reaching a particular element, set the element's `isAccessibilityElement` to `true`
    - **Note:** You may need to adjust the programmatic name, role, state, and/or value after doing this, as this action may overwrite previously configured accessibility.
  - To move screen reader focus to newly revealed content, use `UIAccessibility.post(notification:argument:)` that takes in `.screenChanged` and the newly revealed content as the parameter arguments.
  - To NOT move focus, but dynamically announce new content: use `UIAccessibility.post(notification:argument:)` that takes in `.announcement` and the announcement text as the parameter arguments.
  - `UIAccessibilityContainer` protocol: Have a table of elements that defines the reading order of the elements.  
- **SwiftUI**
  - For general focus management that impacts both screen readers and non-screen readers, use the property wrapper `@FocusState` to assign an identity of a focus state.
    - Use the property wrapper `@FocusState` in conjunction with the view modifier `focused(_:)` to assign focus on a view with `@FocusState` as the source of truth.
    - Use the property wrapper `@FocusState`in conjunction with the view modifier `focused(_:equals:)` to assign focus on a view, when the view is equal to a specific value.
  - If necessary, use property wrapper `@AccessibilityFocusState` to assign identifiers to specific views to manually shift focus from one view to another as the user interacts with the screen with VoiceOver on.

### Announcement examples
- Announcement order can vary.
- "Double tap to dismiss pop-up window, button"  (Invisible dismiss button- later versions)
- "Close, button" (If Close X is available)
- "Card controller, minimized, button, adjust the size of the card overlaying screen"  (When focus is on the card controller in minimized to go to half screen)
- "Card controller, half screen, button, adjust the size of the card overlaying screen"  (When focus is on the card controller in half screen to go to full screen)
- "Card controller, full screen, button, adjust the size of the card overlaying screen"  (When focus is on the card controller in full screen to minimize)

## Android Developer Notes
### General Notes

- android developer notes go here
