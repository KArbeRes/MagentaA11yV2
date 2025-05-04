## General Notes

How to test a stepper input

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a stepper input

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus moves to either the select field or buttons.
   - Enter or spacebar: 
    - If select is focused, expands the select and places focus on the currently selected option in the list. 
    - If focus is in the options, collapses the select and keeps the currently selected option.
    - If focus is on one of the buttons, it will either increment or decrement the value.
   - Arrow-keys: If select is focused, moves focus to and selects the next option.
   - Escape: If the select is displayed, collapses the select and moves focus to the button.
   - Home: If the select is displayed, moves focus to and selects the first option.
   - End: If the select is displayed, moves focus to and selects the last option.

2. Test mobile screenreader gestures

   - Swipe: Moves focus to each form control in the pattern.
   - Double-tap: If select is focused, opens select, selects option. Note: If a button is focused, it will either increment or decrement the value.

3. Listen to screenreader output on all devices

   - Name: Button labels are clear and include context. The select field's visual label is announced.
   - Role: For the select field it identifies itself as a select, popup button, menu/submenu or listbox. For the buttons they are identified as button.
   - Group: Its label is read with the input.
   - State: It indicates when the select is expanded/collapsed, indicates which option is selected.

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/stepper-input](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/stepper-input)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a stepper input

GIVEN THAT I am on a page with a stepper input

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to the first interactive item I SEE focus is strongly visually indicated
   - THEN when I use the arrow keys to select an option I SEE the selected option is changed
   - THEN when I use the escape key when the select is open I SEE it collapses and focus moves to the select
   - WHEN when I use the enter key is pressed on buttons I SEE the value is incremented or decremented

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND I use the tab key to move focus to the first interactive item AND 
      - I HEAR button labels are clear and include contextThe select field's visual label is announced
      - I HEAR for the select field it identifies itself as a select, popup button, menu/submenu or listboxFor the buttons they are identified as button
      - I HEAR its label is read with the input
      - I HEAR it indicates when the select is expanded/collapsed, indicates which option is selected
   - THEN when I use the arrow keys to select an option, I HEAR the selected option is changed
   - THEN when I use the escape key when the select is open, I HEAR it collapses and focus moves to the select
   - WHEN when I use the enter key is pressed on buttons I HEAR the value is incremented or decremented

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on the form fields
      - I HEAR button labels are clear and include contextThe select field's visual label is announced
      - I HEAR for the select field it identifies itself as a select, popup button, menu/submenu or listboxFor the buttons they are identified as button
      - I HEAR its label is read with the input
      - I HEAR it indicates when the select is expanded/collapsed, indicates which option is selected
   - THEN when I doubletap with the select in focus I HEAR the picker/spinner opens
   - THEN when I doubletap with the button in focus I HEAR the value is incremented or decremented

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/stepper-input](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/stepper-input)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.
