import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/Http';
import {environment} from '../../../environments/environment';
import {User} from './user';

@Injectable()
export class UserService {

   headears = new HttpHeaders({
         'Accept': '*/*',
        'Authorization':  localStorage.getItem('token')
      });
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(environment.apiURL + 'users/', { headers: this.headears});
  }

 de_activateUser(id) {
    return this.http.get(environment.apiURL + 'users/de_activate/' + id, { headers: this.headears});
 }

  updateUser(id, user: User) {
    return this.http.put(environment.apiURL + 'users/update/'+ id, user, { headers: this.headears}).subscribe(response => console.log(response));
  }

  addUser(user: User) {
    return this.http.post(environment.apiURL + 'users/singup/', user, { headers: this.headears}).subscribe(response => console.log(response));
  }

}
