import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // atribute: store an array users
  users: any[] = [];

  constructor(
    // invoque the service. why protected?
    protected userService: UserService
  ) {
  }

  ngOnInit() {
    // the hook search again
    this.userService.getUsers().subscribe(
      // result callback
      (data) => {
        this.users = data['results']; // results?
      },
      // error callback
      (error) => {
        console.error(error);
      }
    );
  }

}
