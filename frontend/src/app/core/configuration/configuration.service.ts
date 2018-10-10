import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Configuration} from './configuration';

@Injectable()
export class ConfigurationService {
  constructor(private http: HttpClient) { }

  getConfiguration() {
    return this.http.get(environment.apiURL + 'configuration', { headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      })});
  }


  updateConfiguration(configuration: Configuration) {
    return this.http.put(environment.apiURL + 'configuration/update', configuration , { headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      })}).subscribe(response => console.log(response));
  }

}
