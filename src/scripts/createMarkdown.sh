#!/bin/bash

# Exit on errors
set -e

# Ensure exactly three arguments are provided
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <filename> <relative-path> <template-type>"
  exit 1
fi

# Define arguments
FILENAME="$1.md"
RELATIVE_PATH="$2"
TEMPLATE_TYPE="$3"
BASE_PATH="public/content/documentation"

# Construct the full path
FULL_PATH="${BASE_PATH}/${RELATIVE_PATH}"

# Validate the template type
if [[ "$TEMPLATE_TYPE" != "criteria" && "$TEMPLATE_TYPE" != "how-to-test" ]]; then
  echo "Error: template-type must be either 'criteria' or 'how-to-test'"
  exit 1
fi

# Detect the section prefix
IFS='/' read -r SECTION _ <<< "$RELATIVE_PATH"

# Set the criteria prefix based on the section
case "$SECTION" in
  web)
    CRITERIA_PREFIX="web-criteria"
    ;;
  native)
    CRITERIA_PREFIX="native-criteria"
    ;;
  *)
    CRITERIA_PREFIX="$SECTION"
    ;;
esac

# Generate dynamic URL path
SLUG_PATH=$(echo "$RELATIVE_PATH/$1" | sed "s|^$SECTION/||" | sed 's|/|/|g')
FULL_LINK="https://www.magentaa11y.com/MagentaA11yV2#/${CRITERIA_PREFIX}/${SLUG_PATH}"

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

# Define additional section for native files
NATIVE_ADDITIONAL_SECTIONS=$(cat <<'EOF'

## iOS Developer Notes
- ios developer notes go here

## Android Developer Notes
- android developer notes go here
EOF
)

# Template for "how-to-test"
HOW_TO_TEST_TEMPLATE=$(cat <<'EOF'
1. **Types of images**
...
## Resources
- [W3C Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
- [WebAIM Alternative Text](https://webaim.org/techniques/alttext/)

## General Notes

Learn how to test and provide appropriate alternative text for different image types—including informative, decorative, and complex images—to ensure they are accessible to all users. Covers both automated tools and manual inspection techniques.
EOF
)

# Template for "criteria" with dynamic URL
CRITERIA_TEMPLATE=$(cat <<EOF
## General Notes

There must only be a singular header/banner element on the page. Contains the site title and typically the primary navigation.

## Condensed

### a11y - Web Accessibility Acceptance Criteria

How to test a header landmark

1. Test keyboard only, then screen reader + keyboard actions

   &mdash; Skip-links: Focus moves directly to the header or navigation

   &mdash; Tab: Nothing, headings are not focusable unless they are actionable

   &mdash; Arrow-keys: Headings are browsed

2. Test mobile screenreader gestures

   &mdash; Swipe: Focus moves directly to the header or navigation

   &mdash; Doubletap: This typically activates most elements

3. Listen to screenreader output on all devices

   &mdash; Role: It is discoverable with screenreader shortcuts as header/banner landmark

   &mdash; Group: It typically contains the name and primary navigation of the website

Full information: [$FULL_LINK]($FULL_LINK)

## Gherkin

### a11y - Web Accessibility Acceptance Criteria

How to test a header landmark

GIVEN THAT I am on a page with a header landmark

1. Keyboard for mobile & desktop

   &mdash; WHEN I use the tab key to enter the web browser window I SEE focus is strongly visually indicated on interactive components

2. Desktop screenreader

   &mdash; WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND

   &mdash; I use the tab key to enter the web browser window

   &mdash; I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

   &mdash; I HEAR It typically contains the name and primary navigation of the website

3. Mobile screenreader

   &mdash; WHEN I use a mobile screenreader (Talkback, VoiceOver) AND

   &mdash; I swipe to focusable elements in the header

   &mdash; I HEAR It is discoverable with screenreader shortcuts as header/banner landmark

   &mdash; I HEAR It typically contains the name and primary navigation of the website


Full information: [$FULL_LINK]($FULL_LINK)

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.


EOF
)

# Append additional sections for native
if [[ "$SECTION" == "native" ]]; then
  CRITERIA_TEMPLATE="${CRITERIA_TEMPLATE}
${NATIVE_ADDITIONAL_SECTIONS}"
fi

# Write to file based on template type
if [ "$TEMPLATE_TYPE" = "how-to-test" ]; then
  echo "$HOW_TO_TEST_TEMPLATE" > "$FILE_PATH"
else
  echo -e "$CRITERIA_TEMPLATE" > "$FILE_PATH"
fi

echo "Markdown file created at: $FILE_PATH"
