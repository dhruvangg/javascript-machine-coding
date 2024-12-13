### **Requirements:**
1. **Features to Implement:**
   - Support for validating multiple input fields.
   - Common validation rules (e.g., required, min/max length, email format, etc.).
   - Custom validation rules.
   - Ability to display validation errors for each field.

2. **Functionality:**
   - Validate on form submission.
   - Provide real-time validation (optional, if time permits).
   - Return all errors for invalid fields.

3. **Design Principles:**
   - Write modular and reusable code.
   - Keep it extensible for adding new rules.

---

### **Implementation Plan:**

#### **1. API Design**
Design an intuitive interface for the library. Example:

```javascript
const formValidator = new FormValidator({
  username: { required: true, minLength: 5 },
  email: { required: true, email: true },
  password: { required: true, minLength: 8 },
});

// Validate the form
const errors = formValidator.validate({
  username: "John",
  email: "invalidEmail",
  password: "pass",
});

console.log(errors);
// Output:
// {
//   username: "Minimum length is 5",
//   email: "Invalid email format",
//   password: "Minimum length is 8",
// }
```

---

#### **2. Core Library Implementation**

Here’s a working example:

```javascript
class FormValidator {
  constructor(rules) {
    this.rules = rules;
  }

  validate(formData) {
    const errors = {};

    for (const [field, value] of Object.entries(formData)) {
      const fieldRules = this.rules[field];

      if (!fieldRules) continue;

      for (const [rule, ruleValue] of Object.entries(fieldRules)) {
        const error = this.applyRule(rule, value, ruleValue);
        if (error) {
          errors[field] = error;
          break; // Stop at the first error for this field
        }
      }
    }

    return errors;
  }

  applyRule(rule, value, ruleValue) {
    switch (rule) {
      case "required":
        if (!value) return "This field is required.";
        break;
      case "minLength":
        if (value.length < ruleValue) return `Minimum length is ${ruleValue}.`;
        break;
      case "maxLength":
        if (value.length > ruleValue) return `Maximum length is ${ruleValue}.`;
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email format.";
        break;
      default:
        return null;
    }
  }
}

// Example Usage
const formValidator = new FormValidator({
  username: { required: true, minLength: 5 },
  email: { required: true, email: true },
  password: { required: true, minLength: 8 },
});

const errors = formValidator.validate({
  username: "John",
  email: "invalidEmail",
  password: "pass",
});

console.log(errors);
```

---

### **3. Bonus Features (Optional if Time Permits)**
1. **Real-Time Validation:**
   - Add an API to validate individual fields as the user types.
   - Example:
     ```javascript
     const error = formValidator.validateField("username", "John");
     console.log(error); // "Minimum length is 5"
     ```

2. **Error Formatting:**
   - Add customizable error message templates:
     ```javascript
     { minLength: "The {field} field must be at least {value} characters." }
     ```

3. **Integration with HTML Forms:**
   - Automatically bind validation rules to form inputs using `data-*` attributes.

4. **Debouncing Real-Time Validation:**
   - Use debouncing to avoid performance issues during input events.

---