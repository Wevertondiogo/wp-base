import { AbstractControl } from '@angular/forms';

export class EmailValidators {
  static VerifyEmail(email: AbstractControl | null): boolean {
    const atIndex = email?.value.indexOf('@');

    if (email?.value.substr(atIndex) === '@gmail.com' && atIndex !== -1) {
      return email?.invalid && (email.dirty || email.touched);
    } else {
      email?.setErrors({ errorInFormatter: true });
      return true;
    }
  }
}
