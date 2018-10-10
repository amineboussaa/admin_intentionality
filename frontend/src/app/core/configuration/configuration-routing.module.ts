import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationComponent} from './configuration.component';
import {AuthGuardService} from '../../auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: ConfigurationComponent , canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers : [AuthGuardService],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
