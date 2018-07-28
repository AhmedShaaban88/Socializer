import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ApprouteRoutingModule} from './approute-routing.module';
import { AppComponent } from './app.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import {MainModule} from './main/main.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {IsUserService} from './is-user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LandingComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ApprouteRoutingModule,
    MainModule
  ],
  providers: [IsUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
