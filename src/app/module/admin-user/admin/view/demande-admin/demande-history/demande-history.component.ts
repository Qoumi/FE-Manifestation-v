import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DemandeService} from "../../../../../../controller/service/demande.service";

@Component({
  selector: 'app-demande-history',
  templateUrl: './demande-history.component.html',
  styleUrls: ['./demande-history.component.css']
})
export class DemandeHistoryComponent implements OnInit {

  constructor( public  demandeService:DemandeService) { }

  ngOnInit(): void {
    this.getListDemandesAccepter()
    this.getListDemandesrefuser()
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
