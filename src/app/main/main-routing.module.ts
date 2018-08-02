import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {GaurdService} from '../gaurd.service';
import {ProfileComponent} from './profile/profile.component';
import {FriendsComponent} from './friends/friends.component';
import {ViewComponent} from './view/view.component';
import {ResolveViewService} from './resolve-view.service';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [GaurdService],
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule { }
