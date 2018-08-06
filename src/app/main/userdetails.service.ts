import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Users, UsersService} from './users.service';

export interface Posts {
  title: string;
  body: string;
}
@Injectable()
export class UserdetailsService {

  constructor(private userService: UsersService) { }
   posts: BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>(null);
   friends: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>(null);
  friendsPosts: BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>(null);
  public postArr = [];
  public  friendsArr = [];
  public friendPostsArr = [];
  public  friendsNames = [];
  id: number;

  addPost(post: Posts): void {
    if (post !== null) {
       this.postArr.push(post);
    }
    this.posts.next(this.postArr);
  }

  addFriend(friend: Users, id: number): void {
      if (friend !== null) {
      this.friendsArr.push(friend);
    }
    this.userService.getPost(id).subscribe(posts =>
        this.friendPostsArr.push(posts),
      error => new Error('error'),
      () => this.friendsNames.push(friend.name)

    );
    this.friends.next(this.friendsArr);
    this.friendsPosts.next(this.friendPostsArr);

  }

  removeFriend(friend: Users): void {

    if (friend !== null) {
     this.friendsArr = this.friendsArr.filter(friendElement =>  friendElement !== friend);
     this.id = this.getID(friend.name);
     this.friendPostsArr.splice(this.id , 1);
      this.friendsNames.splice(this.id , 1);

    }
    this.friends.next(this.friendsArr);
    this.friendsPosts.next(this.friendPostsArr);

  }
  getID(name: string): number {
      return this.friendsNames.indexOf(name);
  }


}
