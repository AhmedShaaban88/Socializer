import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';


export interface PreventComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({ providedIn: 'root' })
export class PreventExitService implements CanDeactivate<PreventComponent> {

  constructor(private component: PreventComponent) {
  }
  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.component.canDeactivate ? this.component.canDeactivate() : true;
  }
}
