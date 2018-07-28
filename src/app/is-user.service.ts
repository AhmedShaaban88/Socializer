import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable()
export class IsUserService {
  userLogin = false;
  constructor() { }
  login(): Observable<boolean> {
  return of(true).pipe(
      delay(1500),
      tap(() => this.userLogin =  true)
    );
  }
}
