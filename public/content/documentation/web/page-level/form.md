## General Notes

How to test a web form for accessibility.

## Condensed

### #a11y - Web Accessibility Acceptance Criteria

How to test a web form for accessibility

1. Test keyboard only, then screen reader + keyboard actions
   - Skip-links: Not commonly used for form entry, but useful for jumping to a form landmark.
   - Tab: Focus moves to each form control in logical order, strong visual focus indicator.
   - Forms mode: Enabled when screen reader lands on a form field.

2. Test mobile screenreader gestures
   - Swipe: Focus moves to form controls inside the form.
   - Singletap: Selects a form control.
   - Doubletap: Activates controls as expected.
   - Forms mode: Automatically enabled.

3. Listen to screenreader output on all devices
   - Role: Each input and group is correctly identified (e.g. textbox, combobox, radiogroup).
   - Name: Every input has a programmatic label (visible label, aria-label, or aria-labelledby).
   - Group: Groups of related fields are identified with fieldset/legend or aria attributes.
   - Instructions: Presented before the form or inline, announced in order.
   - Errors: Errors are announced when inputs are invalid.

Full information: [https://www.magentaa11y.com/checklist-web/form/](https://www.magentaa11y.com/checklist-web/form/)

## Gherkin

### #a11y - Web Accessibility Acceptance Criteria

How to test a web form for accessibility

GIVEN THAT I am on a page with a web form

1. Keyboard for mobile & desktop
   - WHEN I use the tab key to move focus to a form field
      - I SEE focus is visually indicated
      - I SEE the focus moves in a logical order

2. Desktop screenreader
   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver)
   - AND I use the tab key or arrow keys to move through form fields
      - I HEAR the role and label for each field
      - I HEAR instructions associated with form fields
      - I HEAR error messages when a field is invalid

3. Mobile screenreader
   - WHEN I use a mobile screenreader (TalkBack, VoiceOver)
   - AND I swipe through the form fields
      - I HEAR each field's name, role, and state
      - I HEAR grouped information where applicable
      - I HEAR errors or hints when applicable

Full information: [https://www.magentaa11y.com/checklist-web/form/](https://www.magentaa11y.com/checklist-web/form/)

## Code examples

### Use semantic HTML

<form aria-label="Sign in">
  <fieldset>
    <legend>Sign in</legend>
    <label for="username">Username</label>
    <input type="text" id="username">
    <button type="submit">Sign in</button>
  </fieldset>
</form>

```html
<form aria-label="Sign in">
  <fieldset>
    <legend>Sign in</legend>
    <label for="username">Username</label>
    <input type="text" id="username">
    <button type="submit">Sign in</button>
  </fieldset>
</form>
```

### Credit card information

Use `fieldset` and `legend` to group related fields, such as:
- This form uses minimal unobtrusive masking to make the credit card number more readable. (When done poorly, masking can can cause the field to be read repeatedly as the mask refreshes)
- Autofill attributes to help customers complete fields with less effort.
- Using inputmode="numeric" brings up the numeric keyboard on mobile devices making entry easier.

<example>
    <form aria-label="Payment information">
        <fieldset>
            <legend>Enter your payment information</legend>
            <div class="card-number-container">
                <label for="card-number">Card Number</label>
                <button type="button" class="cc-camera secondary">
                   <span class="hidden">Use camera to</span> 
                   Scan
                   <span class="hidden">card number</span>
                </button>
                <input type="text" 
                       name="cardnumber" 
                       id="card-number" 
                       autocomplete="cc-number"
                       inputmode="numeric"
                       pattern="[0-9]*"
                       aria-describedby="description-card-number"
                       required>
                <div id="description-card-number" class="hint secure-icon">
                  Secure form protected by 8 bit encryption
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Expiration <span aria-hidden="true">(MM YY)</span></legend>
            <div class="expiry-container">
                <label class="hidden" for="cc-exp-month">Expiration Month (MM)</label>
                <input type="text"
                       maxlength="2"  
                       name="ccmonth" 
                       id="cc-exp-month"
                       inputmode="numeric"
                       autocomplete="cc-exp-month"
                       pattern="[0-9]*"
                       required>
                <label class="hidden" for="cc-exp-year">Expiration Year (YY)</label>
                <input type="text"
                      maxlength="2"  
                      name="ccyear" 
                      id="cc-exp-year"
                      inputmode="numeric"
                      autocomplete="cc-exp-year"
                      pattern="[0-9]*"
                      required>
            </div>
        </fieldset>
        <label for="cc-name">Name on card</label>
        <input type="text"  
               name="ccname" 
               id="cc-name" 
               autocomplete="cc-name" 
               maxlength="19" 
               required>
        <label for="cc-cvc">Security code</label>
        <input type="text" 
               maxlength="5" 
               name="cvc" 
               id="cc-cvc"  
               autocomplete="cc-csc"
               inputmode="numeric"
               pattern="[0-9]*"
               aria-describedby="description-cc-cvc"
               required>
        <div id="description-cc-cvc" class="hint">
            <button type="button" class="inline-link">What's a security code?</button>
        </div>
    </form>
</example>

```html
<form aria-label="Payment information">
  <fieldset>
    <legend>
      Enter your payment information
    </legend>
    <div class="card-number-container">
      <label for="card-number">Card Number</label>
      <button type="button" class="cc-camera secondary">
         <span class="hidden">Use camera to</span> 
         Scan
         <span class="hidden">card number</span>
      </button>
      <input type="text" 
              name="cardnumber" 
              id="card-number" 
              autocomplete="cc-number"
              inputmode="numeric"
              pattern="[0-9]*"
              aria-describedby="description-card-number"
              required>

      <div id="description-card-number" class="hint secure-icon">
        Secure form protected by 8 bit encryption
      </div>
    </div>
    <fieldset>
      <legend>
        Expiration <span aria-hidden="true">(MM YY)</span>
      </legend>
      <div class="expiry-container">
        <label class="hidden" for="cc-exp-month">Expiration Month (MM)</label>
        <input type="text"
              maxlength="2"  
              name="ccmonth" 
              id="cc-exp-month"
              inputmode="numeric"
              autocomplete="cc-exp-month"
              pattern="[0-9]*"
              required>
        <label class="hidden" for="cc-exp-year">Expiration Year (YY)</span></label>
        <input type="text"
              maxlength="2"  
              name="ccyear" 
              id="cc-exp-year"
              inputmode="numeric"
              autocomplete="cc-exp-year"
              pattern="[0-9]*"
              required>
      </div>
    </fieldset>

    <label for="cc-name">Name on card</label>
    <input type="text"
          name="ccname" 
          id="cc-name"
          autocomplete="cc-name"
          maxlength="19" 
          required>

    <label for="cc-cvc">Security code</label>
    <input type="text" 
            maxlength="5" 
            name="cvc" 
            id="cc-cvc"  
            autocomplete="cc-csc"
            inputmode="numeric"
            pattern="[0-9]*"
            aria-describedby="description-cc-cvc"
            required>
    <div id="description-cc-cvc" class="hint">
      <button type="button" class="inline-link">What's a security code?</a>
    </div>
  </fieldset>
</form>
```
### Shipping Information

<form aria-label="Shipping information">
  <fieldset>
    <legend>
      Shipping information
    </legend>
    <label for="address-line1">
      Address line 1
    </label>
    <input type="text" 
            id="address-line1"
            autocomplete="address-line1">
    <label for="address-line2">
      Address line 2
    </label>
    <input type="text" 
            id="address-line2"
            autocomplete="address-line2">
    <label for="address-level2">
      City
    </label>
    <input type="text" 
            id="address-level2"
            autocomplete="address-level2">
    <label for="address-level1">
      State
    </label>
    <select id="address-level1" 
            autocomplete="address-level1">
      <option value="" selected disabled>Choose a state</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    <label for="postal-code">
      Zip postal code
    </label>
    <input type="text" 
            id="postal-code"
            inputmode="numeric"
            pattern="[0-9]*"
            autocomplete="postal-code"
            maxlength="5">
  </fieldset>
</form>

```html
<form aria-label="Shipping information">
  <fieldset>
    <legend>
      Shipping information
    </legend>
    <label for="address-line1">
      Address line 1
    </label>
    <input type="text" 
            id="address-line1"
            autocomplete="address-line1">
    <label for="address-line2">
      Address line 2
    </label>
    <input type="text" 
            id="address-line2"
            autocomplete="address-line2">
    <label for="address-level2">
      City
    </label>
    <input type="text" 
            id="address-level2"
            autocomplete="address-level2">
    <label for="address-level1">
      State
    </label>
    <select id="address-level1" 
            autocomplete="address-level1">
      <option value="" selected disabled>Choose a state</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    <label for="postal-code">
      Zip postal code
    </label>
    <input type="text" 
            id="postal-code"
            inputmode="numeric"
            pattern="[0-9]*"
            autocomplete="postal-code"
            maxlength="5">
  </fieldset>
</form>
```

### Contact Form

<form aria-label="Contact us">
  <fieldset>
    <legend>
      Preferred contact method
    </legend>
    <input type="radio" name="method" id="contact-email" checked>
    <label for="contact-email">Email</label>
    <input type="radio" name="method" id="contact-sms">
    <label for="contact-sms">SMS text</label>
    <input type="radio" name="method" id="contact-phone">
    <label for="contact-phone">Phone</label>
  </fieldset>

  <fieldset>
    <legend>
      Your information
    </legend>
    <label for="email">
      Email address
    </label>
    <input id="email"
           type="email"
           autocomplete="email"
           spellcheck="false"
           aria-describedby="hint-email">
    <div class="hint" id="hint-email">
      We’ll never sell or share your information
    </div>
    <label for="phone">
      Phone number
    </label>
    <input  type="tel"
            id="phone"
            inputmode="numeric"
            autocomplete="tel"
            aria-describedby="hint-phone">
    <div class="hint" id="hint-phone">
      Format: 573-268-9692
    </div>
    <label for="message">
      Your message
    </label>
    <textarea id="message"></textarea>
  </fieldset>
</form>

```html
<form aria-label="Contact us">
  <fieldset>
    <legend>
      Preferred contact method
    </legend>
  
    <input type="radio" name="method" id="contact-email" checked>
    <label for="contact-email">Email</label>
  
    <input type="radio" name="method" id="contact-sms">
    <label for="contact-sms">SMS text</label>
  
    <input type="radio" name="method" id="contact-phone">
    <label for="contact-phone">Phone</label>
  </fieldset>

  <fieldset>
    <legend>
      Your information
    </legend>

    <label for="email">
      Email address
    </label>
    <input id="email"
           type="email"
           autocomplete="email"
           spellcheck="false"
           aria-describedby="hint-email">
    <div class="hint" id="hint-email">
      We’ll never sell or share your information
    </div>

    <label for="phone">
      Phone number
    </label>
    <input  type="tel"
            id="phone"
            inputmode="numeric"
            autocomplete="tel"
            aria-describedby="hint-phone">
    <div class="hint" id="hint-phone">
      Format: 573-268-9692
    </div>

    <label for="message">
      Your message
    </label>
    <textarea id="message"></textarea> 
      

  </fieldset>
</form>
```

## Output from inputs
- Screenreader support varies output can be used for a dynamic content that changes based on user inputs (example: a calculator).
- Alternatively, using a custom element with role=”status” will achieve more predictable results

```html
<form oninput="result.value=parseInt(rent.value)+parseInt(utilities.value)">
  <fieldset>
    <legend>
      Calculate monthly expenses
    </legend>
    
    <label for="rent">Monthly rent</label>
    <input type="text" id="rent" inputmode="numeric" value="2500" maxlength="4">

    <label for="utilities">Monthly utilities</label>
    <input type="text" id="utilities" inputmode="numeric" value="500" maxlength="4">
    
    <label for="result">Total</label>
    <input 
      readonly 
      type="text"
      id="result"
      inputmode="numeric" 
      value="3000" 
      maxlength="6">
  </fieldset>
</form>
```

## Developer Notes

### Do not auto focus inputs

Automatically moving focus to an input field is very confusing for people using assistive technology.

### Group inputs

Use `fieldset` and `legend` to group related fields, such as:
- Sign in
- Shipping address
- Payment information

### Error handling

- Individual inputs must have programmatically described errors read by the screen reader on focus.
- For long forms, list all errors in an alert with links back to each invalid input on submission attempts.

### Field width affordance

- Inputs should visually reflect the expected data length.
    - Middle initial: 1 character
    - State abbreviation: 2 characters
    - Zip code: 5 characters
    - PIN: depends on expected digits

### Layout: Stack inputs vertically

Avoid multiple columns:
- Vertical scrolling is more accessible and expected.
- Screen magnifiers make it difficult to find right-column fields.
- Submit buttons should not be placed in sidebars only.

### Use autocomplete

- Enables quicker completion for all users.
- Especially useful for people with motor disabilities.


