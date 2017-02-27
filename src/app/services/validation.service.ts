
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'invalidAadhar': `Invaild Aadhar`,
      'invalidmob': `Invalid Mobile No.`
    };

    return config[validatorName];
  }

  // static creditCardValidator(control) {
  //   if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
  //     return null;
  //   } else {
  //     return { 'invalidCreditCard': true };
  //   }
  // }

  // email validations
  static emailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  // aadhar validations
  static aadharValidator(control) {
    if (control.value.match(/^\d{12}$/)) {
      return null;
    } else {
      return { 'invalidAadhar': true };
    }
  }

  // mobile number validations
  static mobValidator(control) {
    if (control.value.match(/^\d{10}$/)) {
      return null;
    } else {
      return { 'invalidmob': true };
    }
  }

  // password validations
  static passwordValidator(control) {
    // {6,100} ----password is between 6 and 100 characters
    // (?=.*[0-9])----password must have at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
}