# General Notes

Buttons must be implemented as interactive elements for user actions. Avoid using non-interactive elements styled as buttons.

# Criteria

How to test a button

1. Test keyboard actions

   &mdash; **Tab, arrow keys, or Control+Tab**: Focus visibly moves to the button.  
   &mdash; **Spacebar**: Activates on iOS and Android.  
   &mdash; **Enter**: Activates on Android.

2. Test mobile screenreader gestures

   &mdash; **Swipe**: Focus moves to the button and announces its name, role (and state, if applicable).  
   &mdash; **Double-tap**: Activates the button.

3. Listen to screenreader output on all devices

   &mdash; **Name**: Clearly describes the purpose and matches the visible label.  
   &mdash; **Role**: Identifies as a button; on Android, announces "double tap to activate."  
   &mdash; **Group**: Associated with its label in a single swipe.  
   &mdash; **State**: Announces states like disabled or dimmed.

4. Test device settings

   &mdash; **Text resizing**: Text adjusts up to 200% without losing information.

Full information: https://www.magentaa11y.com/checklist-native/button/

# iOS Developer Notes

## Video Example

### iOS Voiceover

<video controls>
  <source src="/assets/media/video/checklist-native/ios/button.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Name

- Programmatic names must describe the button's purpose.
- If there is a visible label, it must match the programmatic name.
- Avoid redundancy:
  - **Incorrect**: "Submit button, Button."
  - **Correct**: "Submit, Button."
- **UIKit**:
  - Set the visible label using `setTitle()`.
  - Hide visible labels from VoiceOver using `isAccessibilityElement = false`.
- **SwiftUI**:
  - Use the `accessibilityLabel()` modifier for invisible labels.
  - Hide icons from VoiceOver with `accessibilityHidden(true)`.

---

## Role

- Native controls automatically assign the role of a button.
- For custom buttons:
  - **UIKit**: Use `UIButton` and set `accessibilityTraits` to `.button`.
  - **SwiftUI**: Use `Button` and the modifier `accessibilityAddTraits(.isButton)`.

---

## State

- Communicate the button's state (enabled, disabled, or selected):
  - **Enabled**: Usable.
  - **Disabled**: Announced as "dimmed."
  - **Selected**: Announced when using `accessibilityAddTraits(.isSelected)` in SwiftUI.

---

## Focus

- Ensure focus lands logically on page load (e.g., first heading or button).
- Return focus to the triggering element when closing modals.
- **UIKit**:
  - Use `accessibilityViewIsModal` to manage modal focus.
  - Move focus programmatically with `UIAccessibility.post(notification:argument:)`.
- **SwiftUI**:
  - Use `@FocusState` to manage focus programmatically.
  - Use `accessibilityElement(children: .combine)` to group child elements.

---

## Announcement Examples

- "Label, button."
- "Label, button, selected."
- "Label, dimmed, button."

---

# Android Developer Notes

## Video Example

### Android Talkback

<video controls>
  <source src="/assets/media/video/checklist-native/android/button.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Name

- Describe the button's purpose programmatically.
- **Android Views**:
  - Use the `android:text` XML attribute.
  - Use `contentDescription` for additional descriptive names.
  - Link visible labels with buttons using the `labelFor` attribute.
- **Jetpack Compose**:
  - Use `contentDescription` semantics to describe buttons.
  - Example: `modifier = Modifier.semantics { contentDescription = "Submit" }`.

---

## Role

- Roles are automatically assigned for native components:
  - **Android Views**: Use `Button` or `ImageButton`.
  - **Jetpack Compose**: Use the `Button` composable.

---

## State

- Communicate the button's state programmatically:
  - **Active**:
    - **Android Views**: Use `android:enabled=true`.
    - **Jetpack Compose**: Use `Button(enabled = true)`.
  - **Disabled**:
    - **Android Views**: Use `android:enabled=false`.
    - **Jetpack Compose**: Use `Button(enabled = false)` or `Modifier.semantics { disabled() }`.

---

## Focus

- Focus management tips:
  - Allow the device to handle default focus.
  - Focus should logically flow through elements on the screen.
- **Android Views**:
  - Use `importantForAccessibility` to make elements focusable.
  - Manage focus order with `nextFocusDown`, `nextFocusUp`, etc.
- **Jetpack Compose**:
  - Use `Modifier.focusOrder()` and `FocusRequester` for focus management.
  - Move focus programmatically with `FocusRequester.requestFocus()`.

---

## Groupings

- Group visible labels with buttons to avoid duplicate announcements:
  - **Android Views**: Use `screenReaderFocusable=true` for containers.
  - **Jetpack Compose**: Use `Modifier.semantics(mergeDescendants = true)`.

---

## Announcement Examples

- "Label, button, double tap to activate."
- "Label, button, disabled."
- "Label, (content in cell), button, double tap to activate."
