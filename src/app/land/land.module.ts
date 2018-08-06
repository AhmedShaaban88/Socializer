import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LandingComponent} from './landing/landing.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import { LandRoutingModule } from './land-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LandRoutingModule
  ],
  declarations: [
    LandingComponent,
    SignupComponent,
    SigninComponent

  ]
})
export class LandModule { }
