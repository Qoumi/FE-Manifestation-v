import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../controller/model/user.model";
import {AuthService} from "../../../../../controller/service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
  private _authenticatedUser:User;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  get authenticatedUser(): User {
    return this.authService.authenticatedUser;
  }

  set authenticatedUser(value: User) {
    this._authenticatedUser = value;
  }
}
