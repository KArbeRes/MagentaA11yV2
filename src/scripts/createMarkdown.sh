#!/bin/bash

# Exit on errors
set -e

# Ensure two arguments are provided
if [ "$#" -ne 2 ]; then
   echo "Usage: $0 <filename> <relative-path>"
   exit 1
fi

# Define arguments
FILENAME="$1.md"
RELATIVE_PATH="$2"
BASE_PATH="public/content/platforms"

# Construct the full path
FULL_PATH="${BASE_PATH}/${RELATIVE_PATH}"

# Check if the directory exists, if not create it
if [ ! -d "$FULL_PATH" ]; then
   mkdir -p "$FULL_PATH"
   echo "Created directory: $FULL_PATH"
fi

# Create the markdown file if it doesn't already exist
FILE_PATH="${FULL_PATH}/${FILENAME}"
if [ -f "$FILE_PATH" ]; then
   echo "Error: File '$FILE_PATH' already exists!"
   exit 1
fi

# Create the markdown file with a template
cat >"$FILE_PATH" <<"EOF"
# General Notes
> This file was generated using the createMarkdown script.

This section provides general information about this component, including guidelines and best practices.

# Condensed
This section provides a **high-level summary** of the key accessibility criteria.

### Example Summary:
1. **Keyboard Navigation**
   - Tab key moves focus logically.
   - Zoom up to 200% is supported.

2. **Mobile Screen Reader Gestures**
   - Swipe moves focus through content.
   - Orientation change does not disrupt accessibility.

3. **Screen Reader Support**
   - The page title is meaningful.
   - Major landmarks are properly defined.

4. **Device OS Settings**
   - Users can resize text without content loss.

More details: [Web Accessibility Checklist](https://www.magentaa11y.com/checklist-web/html/).

# Gherkin
Defines web accessibility acceptance criteria using the **Given, When, Then** format.

## a11y - Web Accessibility Acceptance Criteria

### Example Scenario:
```gherkin
Feature: Example Feature
  Scenario: Example Scenario
    Given I am a keyboard user
    When I press "Tab" to navigate
    Then I should see a visible focus on interactive elements
```

### Another Scenario:
```gherkin
Feature: Responsive Design
  Scenario: Zooming in
    Given I zoom in using OS settings
    When I increase text size to 200%
    Then content remains readable without loss of information
```

# Criteria
Lists the specific criteria required for this component to meet accessibility, usability, and functional standards.

### Example Criteria List:
- [ ] The page must have a **unique** and **descriptive title**.
- [ ] All images must have meaningful **alt text**.
- [ ] Keyboard navigation should allow access to **all interactive elements**.
- [ ] The color contrast must meet **WCAG AA standards**.

# Developer Notes
Contains developer-specific information, including expected behaviors, implementation details, and best practices.

### Example Notes:
- Use **semantic HTML elements** (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Ensure **all links are descriptive** (e.g., avoid "Click here").
- **ARIA attributes should be used sparingly**, and only when necessary.

# Android Developer Notes
Provides guidance for implementing this component on **Android** platforms.

### Example Android-Specific Guidance:
- Ensure **TalkBack** announces elements correctly.
- Use **focusable Views** (`android:focusable="true"`) for better keyboard support.
- Implement **custom accessibility actions** when necessary.

# iOS Developer Notes
Provides guidance for implementing this component on **iOS** platforms.

### Example iOS-Specific Guidance:
- Test with **VoiceOver** to ensure proper navigation.
- Use **UIAccessibilityTraits** to define element behavior.
- Ensure **Dynamic Type** scales properly when users adjust text size.

# Videos
Includes relevant **video demonstrations or tutorials** related to this component.

### Example Embedded Video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/example" frameborder="0" allowfullscreen></iframe>

EOF

echo "Markdown file created at: $FILE_PATH"
