import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isInvalidLogin: boolean = true;
  url: string = 'https://ecommerce-backend-xp0v.onrender.com/api/v1/user/login';
  constructor(private http: HttpClient) {}

  login(data: any) {
   return this.http.post(this.url, data);
  }
}
