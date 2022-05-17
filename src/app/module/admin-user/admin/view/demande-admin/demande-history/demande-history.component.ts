import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DemandeService} from "../../../../../../controller/service/demande.service";
import {Demande} from "../../../../../../controller/model/demande.model";

@Component({
  selector: 'app-demande-history',
  templateUrl: './demande-history.component.html',
  styleUrls: ['./demande-history.component.css']
})
export class DemandeHistoryComponent implements OnInit {
   term:string
  constructor( public  demandeService:DemandeService) { }

  ngOnInit(): void {
    this.getListDemandesAccepter()
  }
  public getListDemandesrefuser()
  {
    this.demandeService.getListDemandesrefuser()
  }
  public getListDemandesAccepter()
  {
    this.demandeService.getListDemandesAccepter();
  }
  public details(ref:String)
  {
    this.demandeService.reference=ref;
    this.demandeService.getDetails();
  }
  public history()
  {
    this.demandeService.history();
  }
  public demandeEncours()
  {
    this.demandeService.demandeEncours();
  }
}
