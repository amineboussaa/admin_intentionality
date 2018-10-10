import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from './user';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    // return this.http.post(this.urlLog, {email, password}).map((res: User) => res)
    return this.http.post(environment.apiURL + 'users/login', {email, password}).map(((data : any) => {
        // login successful if there's a jwt token in the response
        if(data.success === true) {
          //&& user.token
          localStorage.setItem('currentUser', data.user);
          localStorage.setItem('token', data.token);
          console.log(data.token);
          return data.user;
        }else {
          throw new Error(data.msg);
        }
    }
      )).catch(this.handleErrorObservable);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
  isTokenExpired(): boolean {
    return ;
  }
   isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const currentUser = localStorage.getItem('currentUser');
     if(currentUser){return true;}
     return (false);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
