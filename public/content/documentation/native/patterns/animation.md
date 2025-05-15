## General Notes

How to test an animation

## Videos

<!-- TODO: add in an iOS example! -->

### Android Talkback

<video controls>
  <source src="media/video/native/animation/animation_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test an animation

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: N/A

2. Test mobile screenreader gestures

   - Swipe: Focus moves to and from the animation if in the swipe order

3. Listen to screenreader output on all devices

   - Focus: If meaningful, animation is focused and its meaning announced via alt text

4. Test device settings

   - Text resize: N/A

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/animation](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/animation)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test an animation

GIVEN THAT I am on a screen with an animation

1. Scenario: Test keyboard actions

   - WHEN I am using keyboard navigation
      - THEN keyboard interaction is N/A

2. Scenario: Test mobile screen reader gestures

   - WHEN I swipe to navigate
      - THEN focus should move to and from the animation, if it is in the swipe order 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader is active 
      - THEN if the animation is meaningful, it should receive focus
         - AND its meaning should be announced via alt text 

4. Scenario: Test device OS settings for text resize

   - WHEN I have increased text size in device settings
      - THEN text resize interaction is N/A 
 
Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/animation](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/animation)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
