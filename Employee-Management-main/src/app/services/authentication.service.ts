import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { environment } from '../../environments/environment';
//import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   private apiUrl = 'http://localhost:8080/api/auth/signin';
   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }
   login(usernameOrEmail, password){
   //login(username, password) {
    return this.http.post<any>(`${this.apiUrl}`, { usernameOrEmail, password })
    //return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
   }
   logout(){
     //remove user from l storage and set current user to null
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null)
   }
}
