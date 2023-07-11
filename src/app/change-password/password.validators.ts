import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validPassword(control: AbstractControl) {
    console.log(control.value);
    return new Promise((resolve) => {
      if (control.value !== '1234') resolve({ validPassword: true });
      resolve(null);
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    console.log(newPassword);
    console.log(confirmPassword);
    return new Promise((resolve) => {
      if (
        control.get('newPassword')?.value !=
        control.get('confirmPassword')?.value
      )
        resolve({ passwordShouldMatch: true });
      resolve(null);
    });
  }
}
