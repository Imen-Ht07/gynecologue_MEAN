import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser!: User;
  name!: String;
  constructor(private http: HttpClient, private router: Router) { 
      
    }
  API_URI = 'http://localhost:8080/auth';

  logoutUser() {
    localStorage.clear()
    window.location.reload()
  }
  login(User: User): Observable<any> {
    return this.http.post<User[]>(`${this.API_URI}/signin`, User)
    .pipe(map(User => {
      localStorage.setItem('User', JSON.stringify(User));
      return User;
      
    }));

  }

  logout() {
    localStorage.removeItem('User');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    const user_string = localStorage.getItem('User');
    const user = JSON.parse(user_string || '{}');
    return user;
  }

  requestReset(body:any): Observable<any> {
    return this.http.post(`${this.API_URI}/ResetPassword`, body);
  }

  newPassword(body:any): Observable<any> {
    return this.http.post(`${this.API_URI}/ValidPasswordToken`, body);
  }

  ValidPasswordToken(body:any): Observable<any> {
    return this.http.post(`${this.API_URI}/NewPassword`, body);
  }

  
 
}
