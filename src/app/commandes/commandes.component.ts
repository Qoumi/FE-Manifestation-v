import { Component, OnInit } from '@angular/core';
import {AuthService} from "../controller/service/auth.service";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  private authService:AuthService;
  public username: "youssef";

  constructor() { }

  ngOnInit(): void {
  }

}
