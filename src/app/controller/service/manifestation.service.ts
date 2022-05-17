import { Injectable } from '@angular/core';
import {ImplicatedEstablishment} from "../model/implicated-establishment.model";
import {Manifestation} from "../model/manifestation.model";
import {ImplicatedPartner} from "../model/implicated-partner.model";
import {EntityOrganisationService} from "./entity-organisation.service";
import {CoordonnateurService} from "./coordonnateur.service";
import {CommitteeOrganisationService} from "./committee-organisation.service";

@Injectable({
  providedIn: 'root'
})
export class ManifestationService {
  private _implicatedEstablishment:ImplicatedEstablishment;
  private _implicatedEstablishments:Array<ImplicatedEstablishment>;
  private _implicatedPartner:ImplicatedPartner;
  private _implicatedPartners:Array<ImplicatedPartner>;
  private _manifestation:Manifestation;
  private _index: number;

  constructor(private committeeOrganisationService:CommitteeOrganisationService,private entityOrganisationService:EntityOrganisationService,private coordonnateurService:CoordonnateurService) { }

  public addImplicatedPartner() {
    this.implicatedPartners.push({...this.implicatedPartner});
  }

  public updateImplicatedEstablishment(index: number, implicatedEstablishment: ImplicatedEstablishment) {
    this.implicatedEstablishment ={...implicatedEstablishment};
    this._index = index;
  }
  public updateImplicatedPartner(index: number, implicatedPartner: ImplicatedPartner) {
    this.implicatedPartner ={...implicatedPartner};
    this._index = index;
  }



  get implicatedPartner(): ImplicatedPartner {
    if (this._implicatedPartner==null){
      this._implicatedPartner=new ImplicatedPartner();
    }
    return this._implicatedPartner;
  }

  set implicatedPartner(value: ImplicatedPartner) {
    this._implicatedPartner = value;
  }

  get implicatedPartners(): Array<ImplicatedPartner> {
    if (this._implicatedPartners==null){
      this._implicatedPartners=new Array<ImplicatedPartner>();
    }
    return this._implicatedPartners;
  }

  set implicatedPartners(value: Array<ImplicatedPartner>) {
    this._implicatedPartners = value;
  }

  get manifestation(): Manifestation {
    if(this._manifestation==null){
      this._manifestation=new Manifestation();
    }
    this._manifestation.entityOrganisation=this.entityOrganisationService.entityOrganisation;
    this._manifestation.coordonnateur=this.coordonnateurService.coordonnateur;
    return this._manifestation;
  }

  set manifestation(value: Manifestation) {
    if(this._manifestation==null){
      this._manifestation=new Manifestation();
    }
    this._manifestation = value;
  }

  get implicatedEstablishment(): ImplicatedEstablishment {
    if (this._implicatedEstablishment==null){
      this._implicatedEstablishment=new ImplicatedEstablishment();
    }
    return this._implicatedEstablishment;
  }

  set implicatedEstablishment(value: ImplicatedEstablishment) {
    this._implicatedEstablishment = value;
  }

  get implicatedEstablishments(): Array<ImplicatedEstablishment> {
    if (this._implicatedEstablishments==null){
      this._implicatedEstablishments=new Array<ImplicatedEstablishment>();
    }
    return this._implicatedEstablishments;
  }

  set implicatedEstablishments(value: Array<ImplicatedEstablishment>) {
    this._implicatedEstablishments = value;
  }




}
