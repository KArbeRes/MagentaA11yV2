## General Notes

How to test an alert notification

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a alert notification

1. Test keyboard only, then screen reader + keyboard actions

   - Tab: Focus does not automatically move to the alert, but can move to interactive elements within the alert (example: Dismiss button)
   - Arrow: Browses to the alert like any other content

2. Test mobile screenreader gestures

   - Swipe: Focus does not move to the alert when it appears, but it can be browsed by the screenreader

3. Listen to screenreader output on all devices

   - Name: The alert is read when it appears (BUT focus DOES NOT transfer automatically when the alert appears)
   - Role: It identifies itself as an alert

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/alert-notification](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/alert-notification)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a alert notification

GIVEN THAT I am on a page with a alert notification

1. Keyboard for mobile & desktop

   - WHEN I use use features that trigger the alert I SEE the alert (BUT focus DOES NOT transfer automatically when the alert appears)

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND 
   - I use use features that trigger the alert
      - I HEAR the alert is read when it appears (BUT focus DOES NOT transfer automatically when the alert appears)
      - I HEAR it identifies itself as an alert

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I use features that trigger the alert
      - I HEAR the alert is read when it appears (BUT focus DOES NOT transfer automatically when the alert appears)
      - I HEAR it identifies itself as an alert

Full information: [https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/alert-notification](https://www.magentaa11y.com/MagentaA11yV2#/web-criteria/component/alert-notification)

## Developer Notes

### Name

- Typically does not have a name or description since there must be only one instance per page.

## Videos

- Videos go here
<video controls>
  <source src="media/video/native/button/buttonIosVoiceover.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
