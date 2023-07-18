import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private router: Router) {}
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  

  getErrorMessage(data: string) {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError(data) ? `Not a valid ${data}` : '';
  }

  login() {
    this.router.navigate(['/login1']);
  }
}
