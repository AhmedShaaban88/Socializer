import { Component, OnInit } from '@angular/core';
import {UserdetailsService, Posts} from '../userdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  posts: Posts[] = [];
  friendsPosts = [];
  friendsNames = [];
  uname = localStorage.getItem('userName');
  constructor(private userDetails: UserdetailsService) { }

  ngOnInit() {
    this.userDetails.posts.subscribe(value => {
      if (value !== null) {
      this.posts = value;
      }
    });
    this.userDetails.friendsPosts.subscribe(value => {
      if (value !== null) {
        this.friendsPosts = value;
      }
      this.friendsNames = this.userDetails.friendsNames;


    });





  }

}
