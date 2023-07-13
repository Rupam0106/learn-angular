import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://ecommerce-backend-xp0v.onrender.com/api/v1/user/login';
  isLoggedIn:boolean=false;
  constructor(private http: HttpClient) {}

  login(data: any) {
    this.http.post(this.url, data).subscribe((response:any) => {
      console.log(response);
      localStorage.setItem('accessToken',response.accessToken);
      this.isLoggedIn=true
    });
  }
}
