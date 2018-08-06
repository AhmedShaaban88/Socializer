import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';

import {MainComponent} from './main.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { ViewComponent } from './view/view.component';

import {UsersService} from './users.service';
import {ResolveViewService} from './resolve-view.service';
import {UserdetailsService} from './userdetails.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [MainComponent, ProfileComponent, FriendsComponent, ViewComponent, HomeComponent],
  providers: [UsersService, ResolveViewService, UserdetailsService]

})
export class MainModule { }
