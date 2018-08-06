import { Component, OnInit } from '@angular/core';
import {UserdetailsService, Posts} from '../userdetails.service';
import * as M from '../../../assets/materialize/js/materialize.js';
import {Users} from '../users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
 posts: Posts[] = [];
 friends: Users[] = [];
 name: string;
 email: string;
 bd: any;

  constructor(private userDetails: UserdetailsService) { }

  ngOnInit() {
    this.name = localStorage.getItem('userName');
    this.email = localStorage.getItem('email');
    this.bd = localStorage.getItem('birthdata');
    this.userDetails.posts.subscribe(value => {
      if (value !== null) {
        this.posts = value;
      }
    });
    this.userDetails.friends.subscribe(value => {
      if (value !== null) {
        this.friends = value;
      }
    });
  }
  deleteFriend(friend: Users): void {
    M.toast({html: `You remove ${friend.name}`, classes: 'rounded'});
    this.userDetails.removeFriend(friend);
  }




}
