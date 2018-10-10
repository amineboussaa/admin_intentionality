import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './alert.service';
import {LoginService} from './login/login.service';
import {RegisterService} from './register/register.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [
    AlertService,
    LoginService,
    RegisterService
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
