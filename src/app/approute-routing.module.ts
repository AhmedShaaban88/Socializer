import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {GaurdService} from './gaurd.service';
import {PreventExitService} from './prevent-exit.service';
import {LandingComponent} from './land/landing/landing.component';
import {MainModule} from './main/main.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [GaurdService]
  },
  {
    path: 'main',
    loadChildren: () => MainModule,
    // loadChildren: './main/main.module#MainModule',
    canLoad: [GaurdService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GaurdService, PreventExitService]
})
export class ApprouteRoutingModule { }
