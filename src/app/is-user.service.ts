import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable()
export class IsUserService {
  userLogin = false;
  constructor(private router: Router) { }
  login(): Observable<boolean> {
    localStorage.setItem('isLogin', 'true');
    return of(true).pipe(
      delay(1500),
      tap(() => this.userLogin =  true)
    );
  }
  logout(): Observable<boolean> {
    localStorage.setItem('isLogin', 'false');
    this.router.navigate(['']);
    return of(false).pipe(
      delay(2000),
      tap(() => this.userLogin = false)
    );
  }
}
