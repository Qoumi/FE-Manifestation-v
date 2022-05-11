import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../controller/service/auth.service";
import {Commande} from "../../../../controller/model/commande.model";
import {Router} from "@angular/router";
import {User} from "../../../../controller/model/user.model";
import {UserService} from "../../../../controller/service/user.service";
import {RoleService} from "../../../../controller/service/role.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor(private router: Router, private authService:AuthService,private userService:UserService,private roleService:RoleService) { }
  get user(): User {
    return this.userService.user;
  }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginAdmin(username,passowrd);

  }
}
