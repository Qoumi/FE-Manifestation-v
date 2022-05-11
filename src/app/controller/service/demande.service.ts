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
  private _demandes:Array<Demande>;

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
    //alert(this.demande.manifestation.coordonnateur.firstName);
    //alert(this.demande.manifestation.name);
    if (this.demande.id==null){
    this.http.post<number>(this.urlBase + this.url + '/', this.demande).subscribe(
    data =>{if(data > 0) {
      this.demandes.push({...this.demande});
      } else {
        alert('error de creation de commande' + data);
      }
})
}

}
}
