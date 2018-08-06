import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UsersService, Users} from './users.service';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ResolveViewService implements Resolve <Users> {

  constructor(private userService: UsersService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Users> {
    const id = route.paramMap.get('id');
    if ( +id > 10 || +id < 1) {
      this.router.navigate(['../notfound'])
      return null;
    }
    return this.userService.getUser(id).pipe(
      take(1),
      map((user) => {
        if (user) {
          return user;
        } else {
          this.router.navigate(['../notfound'])
          return null;
        }
      }
    ));

  }
}
