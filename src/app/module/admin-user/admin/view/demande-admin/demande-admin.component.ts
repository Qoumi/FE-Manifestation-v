import { Component, OnInit } from '@angular/core';
import {Demande} from "../../../../../controller/model/demande.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-demande-admin',
  templateUrl: './demande-admin.component.html',
  styleUrls: ['./demande-admin.component.css']
})
export class DemandeAdminComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


}
