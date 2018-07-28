import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PreventExitService} from './prevent-exit.service';
import {MainModule} from './main/main.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,

  },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [PreventExitService]

  },
  {
    path: 'main',
    loadChildren: () => MainModule
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ApprouteRoutingModule { }
