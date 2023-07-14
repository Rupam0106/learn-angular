import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: AuthService, private router: Router) {}
  onLogin(data: Login) {
    console.log(data);
    this.loginService.login(data).subscribe((response: any) => {
      if (response) {
        this.loginService.isInvalidLogin = true;
        this.router.navigate(['/']);
        localStorage.setItem('accessToken', response.accessToken);
      } else {
        this.loginService.isInvalidLogin = true;
      }
    });
  }

  isValid(){
    this.loginService.isInvalidLogin=false
  }
}
