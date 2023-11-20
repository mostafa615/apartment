import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<IUser | null>;
    public user: Observable<IUser | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
    let  url=environment.apiUrl+"/Admin/Login?UserMail="+username+"&Password="+password
        return this.http.post<any>(url, { username, password })
            .pipe(map(user => {
              debugger
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem("tokenKey", user.token);

                this.userSubject.next(user);
                return user;
            }));
    }
    public isLoggedIn(): boolean {
      let token = localStorage.getItem("tokenKey");
      return token != null && token.length > 0;
    }
    logout() {
      localStorage.removeItem("tokenKey");

        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
    public getToken(): string | null {
      return this.isLoggedIn() ? localStorage.getItem("tokenKey") : null;
    }
}
