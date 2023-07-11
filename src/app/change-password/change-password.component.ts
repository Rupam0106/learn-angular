import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangePassword } from './change-password';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validPassword],
      newPassword: ['', Validators.required],
      confirmPassword: [
        '',
        Validators.required,
        PasswordValidators.passwordShouldMatch,
      ],
    });
  }

  onSubmit(data: ChangePassword) {
    console.log(data);
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
