import { Injectable } from '@angular/core';
import {users, authUser, message, userData} from "../data";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers():Array<User>{
    return users;
  }


  addUser(user: User){
    users.push(user)

  }
  getUserByEmail(email:string):User{
    return users.find((user) => user.email === email)!;

  }
  userExists(email:string):boolean{
    let a = false;
    users.forEach(u=>{u.email == email? a= true:false})
    return a;
  }
  getAuthUser(){
    return authUser[0]
  }
  setAuthUser(user:User){
    authUser.push(user)
  }
  getMessage(){
    return message
  }
  setMessage(mes:string){
    message.push(mes)
  }

}
