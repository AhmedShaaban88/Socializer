import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {FriendsComponent} from './friends/friends.component';
import {ViewComponent} from './view/view.component';
import {GaurdService} from '../gaurd.service';
import {ResolveViewService} from './resolve-view.service';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [GaurdService],
    children: [
      {
        path: '',
        canActivateChild: [GaurdService],
        children: [
    {
     path: 'home',
     component: HomeComponent
    },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'friends',
        component: FriendsComponent,
      },
      {
      path: 'view/:id',
      component: ViewComponent,
       resolve: {
        users: ResolveViewService
       }
      }
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule { }
