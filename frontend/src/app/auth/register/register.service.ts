import { Injectable } from '@angular/core';
import {User} from '../login/user';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }
/*
  getAll() {
    return this.http.get<User[]>(`${config.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${config.apiUrl}/users/` + id);
  }
*/
  register(user: User) {
    return this.http.post(environment.apiURL + 'register', user);
  }
/*
  update(user: User) {
    return this.http.put(`${config.apiUrl}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.apiUrl}/users/` + id);
  }*/
/*
  register(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.urlLog, {email: email, password: password})
      .pipe(
        map(result => {
          if (result.token !== undefined || result.token !== null) {
            localStorage.setItem('access_token', result.token);
            return true;
          } else {
            return false;
          }
        })
      );
  }
*/

}
