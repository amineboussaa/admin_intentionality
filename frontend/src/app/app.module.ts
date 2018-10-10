import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './auth/login/login.service';
import {StarterModule} from './starter/starter.module';
import {AuthModule} from './auth/auth.module';
import {FormsModule} from "@angular/forms";
import { AnonymousGuardService as AnonymousGuard } from './auth/anonymous-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarterModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    AnonymousGuard,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
