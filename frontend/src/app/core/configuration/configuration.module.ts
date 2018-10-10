import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../auth/login/login.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfigurationRoutingModule
  ],
  providers: [
    LoginService,
    ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule { }
