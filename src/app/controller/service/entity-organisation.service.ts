import { Injectable } from '@angular/core';
import {EntityOrganisation} from "../model/entity-organisation.model";

@Injectable({
  providedIn: 'root'
})
export class EntityOrganisationService {
  private _entityOrganisation:EntityOrganisation;

  constructor() { }


  get entityOrganisation(): EntityOrganisation {
    if (this._entityOrganisation==null){
      this._entityOrganisation=new EntityOrganisation();
    }
    return this._entityOrganisation;
  }

  set entityOrganisation(value: EntityOrganisation) {
    this._entityOrganisation = value;
  }
}
