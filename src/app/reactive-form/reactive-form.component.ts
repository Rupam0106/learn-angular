import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(data: string) {
    console.log(data);
  }

  // get user(){
  //  return this.form.get('username')
  // }

  // get password(){
  //   return this.form.get('password')
  //  }
}
