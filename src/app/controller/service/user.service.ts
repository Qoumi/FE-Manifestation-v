import { Injectable } from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user : User;

  constructor() { }


  get user(): User {
    if(this._user==null){
      this._user=new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
