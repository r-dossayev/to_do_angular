import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users:User[];
  constructor(private userService: UserService, private router:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  email:string; password:string; firstName:string|null; lastName:string|null;
  error= "";
  id:number = 1;
  register(){
    if (!this.email || !this.password){
      return  this.error = "error"
    }
        this.userService.addUser({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "email": this.email,
          "password": this.password
        })
        return this.router.navigate(["home"])
  }

}
