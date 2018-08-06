import { Component, OnInit } from '@angular/core';
import {Users, UsersService} from '../users.service';
import * as $ from 'jquery';
import * as M from 'materialize-css/dist/js/materialize.min';
import {UserdetailsService} from '../userdetails.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass']
})
export class FriendsComponent implements OnInit {
  error: any;
  allData: any;
  loaded = false;
  noMorePeople = false;
  hiddenPeople = 0;

  constructor(private usersService: UsersService, private userDetails: UserdetailsService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users =>
       this.allData = users
     ,
     error => this.error = error,
     () => this.loaded = true);
  }
  hide(id: number): void {
    $('.m3').eq(id).hide(1000);
    this.hiddenPeople++;
    if (this.hiddenPeople ===  $('.col').length) {
      this.error = 'No more people';
    }
  }
  addFriend(user: Users): any {
    M.toast({html: `You add ${user.name}`, classes: 'rounded'});
    this.userDetails.addFriend(user, user.id);
    this.hide(+user.id - 1);
  }





}
