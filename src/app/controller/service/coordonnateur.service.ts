import { Injectable } from '@angular/core';
import {Coordonnateur} from "../model/coordonnateur.model";

@Injectable({
  providedIn: 'root'
})
export class CoordonnateurService {
  private _coordonnateur:Coordonnateur;

  constructor() { }


  get coordonnateur(): Coordonnateur {
    if(this._coordonnateur==null){
      this._coordonnateur=new Coordonnateur();
    }
    return this._coordonnateur;
  }

  set coordonnateur(value: Coordonnateur) {
    this._coordonnateur = value;
  }
}
