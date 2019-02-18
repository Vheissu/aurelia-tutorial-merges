import { bindable, customElement } from 'aurelia-framework';
import zxcvbn from 'zxcvbn';

import './password-strength-meter.css';

@customElement('password-strength-meter')
export class PasswordStrengthMeter {
  @bindable() password;

  testedResult = '';

  createPasswordLabel(result) {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  }

  passwordChanged(password) {
    this.testedResult = zxcvbn(password);
  }
}
