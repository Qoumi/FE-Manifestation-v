import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DemandeService} from "../../../../../../controller/service/demande.service";
import {Demande} from "../../../../../../controller/model/demande.model";
import {AuthService} from "../../../../../../controller/service/auth.service";

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {
  stepShow:number;
  details=false;
  dialogEdit=false;
  createDemande=false;
  ref:String;
  etat:String;
  private _demandes:Array<Demande>;
  private _demande:Demande;


  constructor(private router:Router,
              public demandeService:DemandeService,
              private authService:AuthService) { }

  get demandes(): Array<Demande> {
    if (this._demandes== null) {
      this._demandes = new Array<Demande>();
    }
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }

  ngOnInit(): void {
    this.authService.loadInfos()
    this.findByUserUsername();
  }
  public detail(ref:String)
  {
    this.demandeService.reference=ref;
    console.log(ref)
    console.log(this.etat)
    this.demandeService.getDetail();
  }
  public edit(ref:String)
  {
    this.demandeService.reference=ref;
    this.demandeService.getEdit();
  }

  public showDemande(){
    this.stepShow=0;
    if (this.stepShow=1){return}
    this.stepShow++
  }
  findByUserUsername()
  {
    this.demandeService.findByUsername();
    this.demandes=this.demandeService.demandes;
  }
  unshowDemande() {

    this.details=false;
  }
  showDetails(ref:String){
    this.ref=ref;
    this.demandeService.findByref(ref);
    this.details=true;
  }
  showDialogEdit(){
    this.dialogEdit=true;
  }
  showCreateDemande(){
    this.createDemande=true;
  }
 annule()
 {
   this.demandeService.changeAnnule()
 }
}
