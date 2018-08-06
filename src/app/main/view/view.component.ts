import { Component, OnInit } from '@angular/core';
import {Users, UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UsersService) { }
  userData =  new Map();
  posts: any;
  error: string;
  comments: Observable<any>;
  loaded = false;
  ngOnInit() {
    this.route.data
      .subscribe((data: { users: Users }) => {
      this.userData.set('name', data.users.name);
      this.userData.set('email', data.users.email);
        this.userData.set('phone', data.users.phone);
        this.userData.set('address', data.users.address);
        this.userData.set('website', data.users.website);
        this.userData.set('company', data.users.company);
        this.userData.set('id', data.users.id);

      });
    this.loadPosts();

  }
  loadPosts(): any {
   return this.userService.getPost(this.userData.get('id')).subscribe(posts =>
      this.posts = posts,
        error => this.error = error,
        () => {
        this.comments = this.userService.getComments(this.userData.get('id'));
          this.loaded = true;
        }
    );
  }

}
