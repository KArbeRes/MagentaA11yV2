## General Notes

How to test a heading

## Videos

### iOS VoiceOver

<video controls>
  <source src="media/video/native/headings/headings_IosVoiceOver.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Android Talkback

<video controls>
  <source src="media/video/native/headings/headings_AndroidTalkback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Condensed

### #a11y - Native Accessibility Acceptance Criteria

How to test a heading

1. Test keyboard only, then screen reader + keyboard actions

   - Tab, arrow keys or ctl+tab: N/A

2. Test mobile screenreader gestures

   - Swipe: Focus moves to and from the heading

3. Listen to screenreader output on all devices

   - Text heading: “Heading” is announced following the heading text

4. Test device settings

   - Text resize: Text can resize up to 200% without losing information

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/headings](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/headings)

## Gherkin

### #a11y - Native Accessibility Acceptance Criteria

How to test a heading

GIVEN THAT I am on a screen with a heading

1. Scenario: Test keyboard actions

   - WHEN the user presses Tab, Arrow Keys, or Ctrl+Tab
      - THEN keyboard navigation does not apply to headings as they are not interactive elements which receive focus (N/A) 

2. Scenario: Test mobile screen reader gestures

   - WHEN the user swipes to a heading 
      - THEN focus moves sequentially to the heading 
         - AND the screen reader must announce the text as a heading 

3. Scenario: Test screen reader output on all devices

   - WHEN a screen reader reads the heading 
      - THEN its text should clearly announce as a heading 
         - AND when the user navigates by swiping up or down, which focuses on headings through the rotor or controls,
      - THEN its focus should move from heading to heading and announce each text as such 

4. Scenario: Test device OS settings for text resize

   - WHEN text resizing settings are adjusted on the device 
      - THEN all previously noted functionality must be focusable and announced 

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/headings](https://www.magentaa11y.com/MagentaA11yV2#/native-criteria/patterns/headings)

## iOS Developer Notes
### General Notes
- ios developer notes go here

## Android Developer Notes
### General Notes
- android developer notes go here
