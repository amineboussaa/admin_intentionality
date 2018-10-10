import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {AuthGuardService} from '../../auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: UserComponent , canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class UserRoutingModule { }
