import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login/login.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,
              private login : LoginService
              ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.login.isAuthenticated()){
      this.router.navigate(['login']);
    }
      return true;
  }

}
