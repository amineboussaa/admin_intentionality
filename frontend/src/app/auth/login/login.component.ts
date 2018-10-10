import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user';
import {LoginService} from './login.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage : string;

  constructor(
    private auth: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    if(this.auth.isAuthenticated){
      this.router.navigate(['/admin']);
    }


    this.loginForm = this.formBuilder.group({
      email: ['',  [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]],
      password: ['', [
        Validators.minLength(8),
        Validators.required
      ]]
    });
    // this.userLogin();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  userLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result =>  this.router.navigate(['/admin']),
        // error => this.errorMessage = <any>error,
        error => {
          this.errorMessage = error;
          console.log(error);
          this.loading = false;

        }
      );
  }
}
