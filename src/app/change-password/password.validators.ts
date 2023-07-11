import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') resolve({ validPassword: true });
      resolve(null);
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
    if (
      control.get('newPassword')?.value != control.get('confirmPassword')?.value
    )
      return { passwordShouldMatch: true };
    return null;
  }
}
