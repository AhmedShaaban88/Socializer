import { Component, OnInit } from '@angular/core';
import {IsUserService} from '../is-user.service';
import * as M from '../../assets/materialize/js/materialize.js';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  userData: any[] = [];
  constructor(private isUser: IsUserService) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
     elems = document.querySelectorAll('.fixed-action-btn');
     instances = M.FloatingActionButton.init(elems, {
     });
    if (localStorage.length !== 0) {
      this.userData.push(localStorage.getItem('userName'), localStorage.getItem('email'),
        localStorage.getItem('birthdata'), localStorage.getItem('gender'));
    }
  }

  logout() {
    localStorage.clear()
    this.userData = null;
    this.isUser.logout();
  }

}
