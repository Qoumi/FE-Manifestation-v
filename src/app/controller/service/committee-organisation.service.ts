import { Injectable } from '@angular/core';
import {CommitteeOrganisation} from "../model/committee-organisation.model";

@Injectable({
  providedIn: 'root'
})
export class CommitteeOrganisationService {
  private _committeeOrganisation:CommitteeOrganisation;
  private _committeeOrganisations= new Array<CommitteeOrganisation>();
  private _index:number;

  constructor() { }


  get committeeOrganisation(): CommitteeOrganisation {
    if (this._committeeOrganisation==null){
      this._committeeOrganisation=new CommitteeOrganisation();
    }
    return this._committeeOrganisation;
  }

  set committeeOrganisation(value: CommitteeOrganisation) {
    this._committeeOrganisation = value;
  }

  get committeeOrganisations(): CommitteeOrganisation[] {
    if (this._committeeOrganisations==null){
      this._committeeOrganisations=new Array<CommitteeOrganisation>();
    }
    return this._committeeOrganisations;
  }

  set committeeOrganisations(value: CommitteeOrganisation[]) {
    this._committeeOrganisations = value;
  }

  addCommitteeOrganisation() {
    this.committeeOrganisations.push({...this.committeeOrganisation});
  }

  updateCommitteeOrganisation(index: number, committeeOrganisation: CommitteeOrganisation) {
    this.committeeOrganisation={...committeeOrganisation};
    this._index = index;
  }
}
