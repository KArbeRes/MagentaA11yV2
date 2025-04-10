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

# Construct the full path (this was missing in your previous version)
FULL_PATH="${BASE_PATH}/${RELATIVE_PATH}"

# Validate the template type
if [[ "$TEMPLATE_TYPE" != "criteria" && "$TEMPLATE_TYPE" != "how-to-test" ]]; then
  echo "Error: template-type must be either 'criteria' or 'how-to-test'"
  exit 1
fi

# Detect the section prefix (web, native, how-to-test, etc.)
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

# Template for "how-to-test"
HOW_TO_TEST_TEMPLATE=$(cat <<EOF
1. **Types of images**

   There are many types of images. The type of image can be determined by the context of the page being tested. These different types of images have different testing steps.

2. **How to test**

   ### Automated Testing

   Automated scanning tools, such as [WAVE](https://wave.webaim.org/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/), or [Deque's Axe DevTools](https://www.deque.com/blog/axe-devtools-extension-update-new-color-contrast-analyzer/) are a great starting point for image testing. All of these tools can run page scans that quickly generate reports identifying some image issues. Scans are:

   - **Good** at identifying simple issues like missing `alt` attributes on images or empty alt attributes on functional images.
   - **Bad** at identifying issues related to alternative text quality or whether or not an image should be marked as decorative and hidden from screen readers.

   ### Manual testing

   Automated scanning must be complemented with a manual review of the page. Manual image testing can test for alt text quality, ensuring that decorative images are hidden from assistive technology, all text found in images of text are present in alt text, and that functional images have the appropriate alt text.

   #### **Getting started**

   - Open Chrome DevTools in your browser window `F12`
   - Right-click and select "Inspect" on the image in the page you want to test.

3. **Informative Images**

   - Check that the image owns an `alt` attribute.
   - Ensure that the `alt` attribute is present and not empty.
   - The `alt` attribute value / description of the image should be accurate and succinct. The image alternative should not consist of information that duplicates nearby text content.

   ```html
   <svg role="img" aria-label="I am the alt text">...</svg>
   ```

4. **Decorative Images**

   - Ensure that the `alt` attribute is present and owns an empty or null value: `alt=""`.
   - **Note:** `aria-hidden="true"` is not needed if an image has `alt=""`.

   ```html
   <img alt="" src="../some-image.png" ... />
   ```

5. **Functional Images**

   - Ensure the `alt` attribute is present and owns a value that includes **all** of the text found in the image.
   - Functional images are typically links or buttons so the alt text should define the purpose of the link instead of describing the image.

   - **Note:** Functional images can have `alt=""` if the text alternative is conveyed in the parent control's label, e.g. `aria-label="Download on the Apple App Store"`.

   ```html
   <button aria-label="Download on the Apple App Store">
     <img src="apple.png" alt="" />
   </button>
   ```

6. **Images of Text**

   - Ensure the `alt` attribute includes **all** of the text in the image.
   - Consider logging a defect for [WCAG 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) if HTML/CSS text could be used instead.

   ```html
   <img src="apple-iphone-15-pro.png" alt="Titanium Apple iPhone 15 Pro" />
   ```

7. **Complex Images**

   - Ensure the image has an `alt` attribute that conveys general purpose.
   - If more detail is needed, provide supporting text nearby or downloadable files (e.g., Excel, HTML table).

8. **What to test for**

   <div class="how-to-test-checklist-item">
   <h3>✓ Ensure meaningful images have alt text</h3>
   <p><strong>Note:</strong> The passing example has alt text that matches the image content. The failing example uses a meaningless filename as alt text.</p>
   <table>
       <thead>
           <tr>
               <th scope="col">Pass</th>
               <th scope="col">Fail</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>
                   <img src="media/images/how-to-test/how-to-test-example-iphone.png" alt="Titanium Apple iPhone 15 Pro"/>
               </td>
               <td>
                   <img src="media/images/how-to-test/how-to-test-example-iphone.png" alt="234@@4-JWKK##KK4442221-11-phone-apple-prod.png"/>
               </td>
           </tr>
       </tbody>
   </table>
   </div>

## Related WCAG

- 1.1.1 Non-text Content
- 1.4.5 Images of Text
- 2.4.4 Link Purpose
- 2.5.3 Label in Name
- 4.1.2 Name, Role, Value

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

## Code Examples

### Use Semantic HTML

This semantic HTML contains all accessibility features by default.

```html
<header id="example-header">
  <a href="#nav-example">Skip to navigation</a>
  <a href="#">Not the navigation</a>
  <nav tabindex="-1" class="nav-example" id="nav-example">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li><button>Sign in</button></li>
    </ul>
  </nav>
</header>
```

### When You Can’t Use Semantic HTML

This custom header requires extra attributes.

```html
<div role="banner" tabindex="-1" id="example-header">
  <a href="/">Website name</a>
</div>
```

## Developer Notes

### Name

- Typically doesn’t have a name or description since there must be only one instance per page.

### Role

- Identifies itself as a header or banner landmark.
- If a non-semantic element must be used (like a `<div>`), use `role="banner"` to make the element discoverable.

### Group

- Contains the site title and typically the primary navigation.

### Focus

- Can be targeted with a skip link, but the skip link will typically be labeled “skip to navigation.”
- Use `tabindex="-1"` to make the header targetable with a skip link.
- The `<header>` itself isn’t focusable with the tab key.

EOF
)

# Write to file based on template type
if [ "$TEMPLATE_TYPE" = "how-to-test" ]; then
  echo "$HOW_TO_TEST_TEMPLATE" > "$FILE_PATH"
else
  echo "$CRITERIA_TEMPLATE" > "$FILE_PATH"
fi

echo "Markdown file created at: $FILE_PATH"
