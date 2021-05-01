import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: any; // UserInterface[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  singleUser(event) {
    console.log(event.target.id);
  }

  ngOnDestroy () {
      // this.userService.getUsers().subscribe().unsubscribe();
  }
}
