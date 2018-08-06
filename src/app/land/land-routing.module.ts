import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {PreventExitService} from '../prevent-exit.service';
import {GaurdService} from '../gaurd.service';

const routes: Routes = [

  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [PreventExitService],
    canActivate: [GaurdService]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [GaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LandRoutingModule { }
