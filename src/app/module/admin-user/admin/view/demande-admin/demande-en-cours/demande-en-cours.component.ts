import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Demande} from "../../../../../../controller/model/demande.model";
import {DemandeService} from "../../../../../../controller/service/demande.service";

@Component({
  selector: 'app-demande-en-cours',
  templateUrl: './demande-en-cours.component.html',
  styleUrls: ['./demande-en-cours.component.css']
})
export class DemandeEnCoursComponent implements OnInit {

  constructor( public  demandeService:DemandeService) { }

  ngOnInit(): void {
    this.getListDemandes();
  }
  public getListDemandes()
  {
    this.demandeService.getListDemandes();
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
