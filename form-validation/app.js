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
                    break; 
                }
            }
        }

        return errors;
    }

    validateField(field, value) {
        const fieldRules = this.rules[field];

        if (!fieldRules) return null;

        for (const [rule, ruleValue] of Object.entries(fieldRules)) {
            const error = this.applyRule(rule, value, ruleValue);
            if (error) {
                return error;
            }
        }

        return null;
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

export default FormValidator;