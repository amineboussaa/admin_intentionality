import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StarterComponent } from './starter.component';
import {AuthGuardService} from "../auth/auth-guard.service";


const routes: Routes = [
  {
    path: 'admin',
    component: StarterComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'configuration', loadChildren: 'app/core/configuration/configuration.module#ConfigurationModule'},
      {path: 'users', loadChildren: 'app/core/user/user.module#UserModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
