/*
prevent the user from return without saving the changes
 */
import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';


export interface PreventComponent {
  canDeactivate: () => Observable<boolean> | boolean;
}
@Injectable()
export class PreventExitService implements CanDeactivate<PreventComponent> {
  canDeactivate(component: PreventComponent): Observable<boolean>|boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
