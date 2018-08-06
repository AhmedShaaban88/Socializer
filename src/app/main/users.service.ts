import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';


export interface Users {
  id: number;
  name: string;
  email: string;
  address: any;
  phone: number;
  website: string;
  company: string;
}
@Injectable()
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users> {
   return this.http.get<Users>(this.usersUrl).pipe(
     retry(3),
     catchError(this.handleError)
    );

  }
  getUser(id: number | string): Observable<Users> {
    return this.http.get<Users>(this.usersUrl + `/${+id}`).pipe( retry(3),
      catchError(this.handleError));

  }
  getPost(id: number | string): Observable<any> {
    const url = this.postUrl + new HttpParams().set('?userId', id.toString());
    return this.http.get(url).pipe(retry(3),
      catchError(this.handleError));
  }
  getComments(id: number | string): Observable<any> {
      const url = this.postUrl + `/${id}/comments`;
      return this.http.get(url).pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      return throwError('Sorry something wrong please check your internet');
    }
    return throwError('Sorry something wrong please try again');
  }


}
