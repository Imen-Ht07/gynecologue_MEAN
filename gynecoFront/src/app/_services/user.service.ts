import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Patiente } from '../_models/patiente';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInStatus = false;
  currentUser!: User;
  name!: String;
  currentPatiente!: Patiente;
  constructor(private http: HttpClient, private router: Router) { 
      
    }
  API_URI = 'http://localhost:8080/auth';


  login(user: User): Observable<any> {
    return this.http.post(`${this.API_URI}/signin`, user).pipe(
      map(response => {
        this.loggedInStatus = true;
        const data = response as any;
        const token = data.token;
        const role = data.role;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        return response;
      }),
      catchError(error => {
        const errorMessage = error.message || 'Something went wrong. Please try again later.';
        return throwError(errorMessage);
      })
    );
  }
 logout():Observable<any> {
    return this.http.post(`${this.API_URI}/signout`,{});}
 
    
  //BOARD 
  getPublicContent(): Observable<any> {
    return this.http.get(`${this.API_URI}/all`, { responseType: 'text' });
  }

  getPatienteBoard(): Observable<any> {
    return this.http.get(`${this.API_URI}/patiente`, { responseType: 'text' });
  }
  
  getSecretaireBoard(): Observable<any> {
    return this.http.get(`${this.API_URI}/secretaire`, { responseType: 'text' });
  }

  getDocteurBoard(): Observable<any> {
    return this.http.get(`${this.API_URI}/docteur`, { responseType: 'text' });
  }

  getCurrentUser() {
    const user_string = localStorage.getItem('User');
    const user = JSON.parse(user_string || '{}');
    return user;
  }

  requestReset(body:any): Observable<any> {
    return this.http.post(`${this.API_URI}/ResetPassword`, body);
  }

  //newPassword(resettoken:any, patienteId:any): Observable<any> {
  //  return this.http.post(`${this.API_URI}/NewPassword/${patienteId}/${resettoken}`);
 // }

  ValidPasswordToken(resettoken:any, patienteId:any): Observable<any> {
    return this.http.get(`${this.API_URI}/ValidPasswordToken${patienteId}/${resettoken}`);
  }

}
