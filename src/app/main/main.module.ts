import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import {UsersService} from './users.service';
import { ViewComponent } from './view/view.component';
import {ResolveViewService} from './resolve-view.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ],
  declarations: [MainComponent, ProfileComponent, FriendsComponent, ViewComponent],
  providers: [UsersService, ResolveViewService]

})
export class MainModule { }
