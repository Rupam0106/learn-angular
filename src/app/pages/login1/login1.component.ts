import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
})
export class Login1Component {
  constructor(private router:Router){}
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(data: string) {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError(data) ? `Not a valid ${data}` : '';
  
  }

  signUp(){
    this.router.navigate(["/sign-up"])
  }
}
