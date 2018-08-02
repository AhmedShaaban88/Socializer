import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApprouteRoutingModule} from './approute-routing.module';
import { AppComponent } from './app.component';
import {LandModule} from './land/land.module';
import {MainModule} from './main/main.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {IsUserService} from './is-user.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LandModule,
    ApprouteRoutingModule,
    MainModule,


  ],
  providers: [IsUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
