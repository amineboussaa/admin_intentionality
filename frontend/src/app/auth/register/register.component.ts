import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../login/user';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {RegisterService} from './register.service';
import {AlertService} from '../../auth/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // user = new User();
  registerForm: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private  route: ActivatedRoute,
    private registerService: RegisterService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['',  [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]],
      password: ['', [
        Validators.minLength(8),
        Validators.required
      ]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }
  userRegister(user: User) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registerService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    // console.log('errorMessage: ', this.errorMessage.code);
  }
}
