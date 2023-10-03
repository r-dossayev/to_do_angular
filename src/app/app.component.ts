import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register';

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.user = this.userService.getAuthUser();
    console.log(this.user)
    console.log("this.user")
  }

  user:User|null
}
