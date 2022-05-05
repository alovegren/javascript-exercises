/*
Form object
Helpers
  valid first name, last name, password: some text
  valid email: some text and constraint validation pattern w/@
  valid phone: empty or US-style
  all fields valid:

State
  first name, last name, email, password, phone --> objects with 'value' and 'isValid' attributes?

Behavior
  blur event listener
    access current value of input, save it as object state, and pass it to appropriate validation method --> visual indication and display of error message
    - if form validation flag
      - check all valid helper
        - if true, disappear form validation error
  focus event listener
    error styling disappears
  submit
    invoke all valid helper 
      if false
        - display form error message
        - form validation flag is false
      otherwise
        - submit form

- Users can't enter invalid characters (anything besides letters, apostrophe)
  - Disallow on keypress
- Credit card number in 1234-1231-2115-2142 format
  - Four separate input fields
  - Only allow numeric digits
  - Disallow on keypress
- Only allow digits in phone number input
*/

document.addEventListener('DOMContentLoaded', () => {
  const INPUT_FIELDS = ['firstName', 'lastName', 'password', 'email', 'phone', 'creditCard'];
  const NOT_REQUIRED_FIELDS = ['phone'];
  const PROTECTED_KEYS = ['Backspace'];

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  
  function snakeToCamelCase(str) {
    let words = str.split('_');

    words = words.map((word, idx) => {
      if (idx === 0) return word;
      return capitalize(word);
    });

    return words.join('');
  }

  function initializeInput() {
    return { value: '', valid: false };
  }

  function toQueryString(param, value) {
    return `${param}=${encodeURIComponent(value)}`
  }

  class Form {
    isValid(type, input) {
      let valid;

      switch (type) {
        case 'first_name':
        case 'last_name':
        case 'password':
          valid = input !== '';
          break;
        case 'email':
          valid = input.match(/.+@.+/);
          break;
        case 'phone':
          const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
          valid = input === ''
                  || input.match(phoneRegex);
          break;
        case 'credit_card':
          valid = input.match(/[0-9]{4}/);
      }

      return valid;
    }

    areAllValid() {
      return INPUT_FIELDS.every(field => this[field].valid);
    }

    validateCreditCard() {
      const card = this.creditCard.value;
      const cardNumbers = Object.keys(card);

      return cardNumbers.every(creditPart => {
        let number = card[creditPart]
        return this.isValid('credit_card', number);
      });
    }

    updateState(input, valid) {
      if (valid) input.classList.remove('invalid');
      const propertyName = snakeToCamelCase(input.name);

      if (propertyName === 'creditCard') {
        const CREDIT_PART_INDEX = 2;
        const creditPart = Number(input.id[CREDIT_PART_INDEX]);
        this.creditCard.value[creditPart] = input.value;
        this.creditCard.valid = this.validateCreditCard();
      } else {
        this[propertyName].value = input.value;
        this[propertyName].valid = valid;
      }
    }

    renderFieldError(input) {
      input.parentElement.querySelector('.field-error').classList.remove('inactive');
    }

    renderFormError() {
      document.querySelector('.form-error').classList.remove('inactive');
    }

    removeFieldError(input) {
      input.parentElement.querySelector('.field-error').classList.add('inactive');
    }

    removeFormError() {
      document.querySelector('.form-error').classList.add('inactive');
    }

    reevaluateFormError() {
      if (this.hasOwnProperty('allValid') && this.areAllValid()) {
        this.removeFormError();
      }
    }

    createValidDataObj(entries) {
      const dataObj = {};
      let cardNumber = ''

      entries.forEach(entry => {
        let [key, value] = entry;
        if (key === 'credit_card') {
          cardNumber += value;
        } else {
          dataObj[key] = value;
        }
      });

      dataObj.creditCard = cardNumber;
      return dataObj;
    }

    renderSerializedParagraph(queryString) {
      let sectionContainer = document.querySelector('#serialized-form');
      let p = document.createElement('p');
      p.textContent = queryString;
      sectionContainer.appendChild(p);
    }

    registerFocusOut(event) {
      const input = event.target;
      const valid = this.isValid(input.name, input.value);

      if (!valid) {
        input.classList.add('invalid');
        this.renderFieldError(input);
        this.updateState(input, false);
      } else {
        this.updateState(input, true);
        this.reevaluateFormError();
      }
    }

    registerFocus(event) {
      const input = event.target;
      this.removeFieldError(input);
    }

    registerSubmission(event) {
      event.preventDefault();

      const input = event.target;
      if (this.areAllValid()) {
        let rawData = new FormData(document.querySelector('form'));
        rawData = [...rawData.entries()]
        const dataObj = this.createValidDataObj(rawData);

        const queryString = Object.keys(dataObj).map(key => {
          return toQueryString(key, dataObj[key]);
        }).join('&');

        this.renderSerializedParagraph(queryString);
      } else {
        this.renderFormError(input);
        this.allValid = false;
      };
    }

    registerKeyDown(event) {
      const input = event.target;
      const key = event.key;
      if (PROTECTED_KEYS.includes(key)) return;

      switch (input.name) {
        case 'first_name':
        case 'last_name':
          if (key && !key.match(/[a-z]|[A-Z]|'|\s/)) event.preventDefault();
          break;
        case 'phone':
          if (key && !key.match(/[0-9]|-/)) event.preventDefault();
          break;
        case 'credit_card':
          if (key && !key.match(/[0-9]/)) event.preventDefault();
          break;
      }
    }

    registerCreditKeyUp(event) {
      let input = event.target;

      if (input.id === 'cd4') return;
      
      if (input.value.length === 4) {
        let nextInput = input.nextElementSibling;
        nextInput.focus();
      }
    }

    bindEventListeners() {
      const form = document.querySelector('form');
      const cardList = document.querySelector('#credit_card_li');

      form.addEventListener('focusout', event => {
        if (event.target.tagName !== "BUTTON") this.registerFocusOut(event);
      });

      form.addEventListener('focusin', event => {
        if (event.target.tagName !== "BUTTON") this.registerFocus(event);  
      });

      form.addEventListener('submit', event => {
        this.registerSubmission(event);
      });

      form.addEventListener('keydown', event => {
        this.registerKeyDown(event);
      });

      cardList.addEventListener('keyup', event => {
        this.registerCreditKeyUp(event);
      });
    }

    constructor() {
      INPUT_FIELDS.forEach(propName => {
        if (propName === 'creditCard') {
          let data = initializeInput();
          data.value = { 1: '', 2: '', 3: '', 4: '' };
          this[propName] = data;
          return;
        }

        const data = initializeInput();
        if (NOT_REQUIRED_FIELDS.includes(propName)) data.valid = true;

        this[propName] = data;
      });

      this.bindEventListeners();
    }
  }
  
  new Form();
});