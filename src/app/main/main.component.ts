import {Component, OnInit} from '@angular/core';
import {IsUserService} from '../is-user.service';
import * as M from 'materialize-css/dist/js/materialize.min';
import {UsersService} from './users.service';
import {UserdetailsService} from './userdetails.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {
  userData: any[] = [];
  postTitle: string;
  postBody: string;

  constructor(private isUser: IsUserService,
              private userService: UsersService,
              private userDetails: UserdetailsService,
              private  route: Router) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
     elems = document.querySelectorAll('.fixed-action-btn');
     instances = M.FloatingActionButton.init(elems, {});
     elems = document.querySelectorAll('.modal');
     instances = M.Modal.init(elems, {});
    if (localStorage.length !== 0) {
      this.userData.push(localStorage.getItem('userName'), localStorage.getItem('email'),
        localStorage.getItem('birthdata'), localStorage.getItem('gender'));
    }
    if (!this.route.url.includes('view')) {
      this.route.navigate(['main/home']);
    }


  }

  logout() {
    localStorage.clear()
    this.userData = null;
    this.isUser.logout();
  }
  submitPost() {
   const obj = {
      title: this.postTitle,
      body: this.postBody
    };
    this.userDetails.addPost(obj);

  }

}
