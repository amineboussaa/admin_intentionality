import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuardService as AuthGuard} from '../auth/auth-guard.service';
import { StarterRoutingModule } from './starter-routing.module';
import {StarterComponent} from './starter.component';
import {StarterContentComponent} from './starter-content/starter-content.component';
import {StarterControlSidebarComponent} from './starter-control-sidebar/starter-control-sidebar.component';
import {StarterFooterComponent} from './starter-footer/starter-footer.component';
import {StarterHeaderComponent} from './starter-header/starter-header.component';
import {StarterLeftSideComponent} from './starter-left-side/starter-left-side.component';
import {ConfigurationModule} from "../core/configuration/configuration.module";
import {UserModule} from "../core/user/user.module";
import {ConfigurationService} from "../core/configuration/configuration.service";
import {UserService} from "../core/user/user.service";

@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule,
    ConfigurationModule,
    UserModule,
  ],
  providers: [
    AuthGuard,
    ConfigurationService,
    UserService
  ],
  declarations: [
    StarterComponent,
    StarterContentComponent,
    StarterControlSidebarComponent,
    StarterFooterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent
  ]
})
export class StarterModule { }
