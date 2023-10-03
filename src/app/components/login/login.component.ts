import {Component, Input} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {users} from "../../data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users:User[];
  constructor(private userService: UserService, private router:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  email:string; password:string; firstName:string|null; lastName:string|null;
  error= "";

  login(){
    console.log("fdfds11111d")
    console.log(users)
    if (this.userService.userExists(this.email)){

        this.userService.setAuthUser({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "email": this.email,
          "password": this.password
        })
      }

    return this.router.navigate(["home"])
  }
}
