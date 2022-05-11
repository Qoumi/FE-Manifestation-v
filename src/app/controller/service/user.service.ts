import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {DemandeService} from "./demande.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user : User=new User();

  constructor(private demandeService:DemandeService) { }


  get user(): User {
    if(this._user==null){
      this._user=new User();
    }
    this._user.demandes.push({...this.demandeService.demande});
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
