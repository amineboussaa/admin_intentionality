import { NgModule } from '@angular/core';
import { AnonymousGuardService as AnonymousGuard } from '../auth/anonymous-guard.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'admin', loadChildren: 'app/starter/starter.module#StarterModule'},
      { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule', canActivate : [AnonymousGuard]},
      { path: '**', redirectTo: 'login', pathMatch: 'full' }

    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
