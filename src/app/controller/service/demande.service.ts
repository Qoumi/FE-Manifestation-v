import { Injectable } from '@angular/core';
import {Demande} from "../model/demande.model";
import {ManifestationService} from "./manifestation.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande:Demande=new Demande();
  private urlBase = 'http://localhost:8070'
  private url = '/api/v1/demande'
  private urlprint = '/api/v1/report'
  private _demandes:Array<Demande>;
  private isSaveValidated:Boolean;

  constructor(private manifestationService:ManifestationService,private http:HttpClient) { }


  get demandes(): Array<Demande> {
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }

  get demande(): Demande {
    if (this._demande==null){
      this._demande=new Demande();
    }
    this._demande.manifestation=this.manifestationService.manifestation;
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }
  public save(){
    if (this.demande.id==null){
    this.http.post<number>(this.urlBase + this.url + '/', this.demande).subscribe(
    data =>{if(data > 0) {
      this.isSaveValidated=true;
      this.demandes.push({...this.demande});
      } else {
      this.isSaveValidated=false;
        alert('erreur de sauvegarde de votre demande, vérifiez les données saisies!');
      }
})
}

}
public getDemande() {
  this.http.post(this.urlBase + this.url + '/getDemande', this.demande).subscribe();
}
public print(){
    if (this.isSaveValidated) {
      this.http.get(this.urlBase + this.urlprint + '/generate').subscribe();
    }
    else{ alert("votre demande n'a pas été validé")}
}

}
