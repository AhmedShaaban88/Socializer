/*
this service is prevent some component from load (can load)
canactivate and canactivatechild prevent access to this components
 */
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, CanActivateChild} from '@angular/router';
import {IsUserService} from './is-user.service';

@Injectable()
export class GaurdService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private isLogin: IsUserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.checkLogin(state.url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  canLoad(): boolean {
    return this.checkLogin('/main');
  }
  checkLogin(url: any) {

    if (url.toString() === '/' || url.toString() === '/signin' || url.toString() === '/signup') {
      if (localStorage.getItem('isLogin') === 'true') {
        this.router.navigate(['/main']);
      }
    } else if (url.toString().includes('/main') && localStorage.getItem('isLogin') === 'false') {
      this.router.navigate(['/signin']);
    }
    return true;
  }

}
