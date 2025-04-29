## General Notes

How to test an animation

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test an animation

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Where applicable, focus moves directly to pause/play/hide controls
   - Spacebar: Activates the control
   - Enter: Activates the control
   - Reduced motion settings: Animation is disabled or reduced

2. Test mobile screenreader gestures

   - Swipe: Focus moves to the control
   - Doubletap: Activates the button

3. Listen to screenreader output on all devices

   - Name: The control's purpose (pause/play/hide) is clear
   - Role: It identifies its role of button
   - State: The control expresses its state if applicable (pressed, expanded)

4. Device OS Settings
   - Reduced motion: Large motion, animations or effects are reduced or eliminated

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/animation](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/animation)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test an animation

GIVEN THAT I am on a page with an animation

1. Keyboard for mobile & desktop

   - WHEN I use tab key to move focus to the pause/play/hide controls I SEE the control is strongly visibly focused
   - THEN when I use the spacebar or enter key to activate the control I SEE the intended action occurs
   - THEN when I use the device's reduced motion settings I SEE the animation is disabled or reduced

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use tab key to move focus to the pause/play/hide controls
      - I HEAR the control's purpose (pause/play/hide) is clear
      - I HEAR it identifies its role of button
      - I HEAR the control expresses its state if applicable (pressed, expanded)
   - THEN when I use the spacebar or enter key to activate the control I HEAR the intended action occurs
   - THEN when I use the device's reduced motion settings I HEAR the animation is disabled or reduced

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to move focus to the pause/play/hide controls
      - I HEAR the control's purpose (pause/play/hide) is clear
      - I HEAR it identifies its role of button
      - I HEAR the control expresses its state if applicable (pressed, expanded)
   - THEN when I doubletap to activate control I HEAR the intended action occurs
   - THEN when an animation is focused I HEAR an alternative method of consumption or interaction is available

4. Device OS Settings

   - WHEN I use reduced motion THEN I see large motion, animations or effects are reduced or eliminated


Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/animation](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/animation)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
