import { Injectable } from '@angular/core';
import {ContributionEstablishment} from "../model/contribution-establishment.model";

@Injectable({
  providedIn: 'root'
})
export class ContributionEstablishmentService {
  private _contributionEstablishment:ContributionEstablishment;
  private _contributionEstablishments=new Array<ContributionEstablishment>();

  constructor() { }

  get contributionEstablishment(): ContributionEstablishment {
    if (this._contributionEstablishment==null){
      this._contributionEstablishment=new ContributionEstablishment();
    }
    return this._contributionEstablishment;
  }

  set contributionEstablishment(value: ContributionEstablishment) {
    this._contributionEstablishment = value;
  }

  get contributionEstablishments(): ContributionEstablishment[] {
    if (this._contributionEstablishments==null){
      this._contributionEstablishments=new Array<ContributionEstablishment>();
    }
    return this._contributionEstablishments;
  }

  set contributionEstablishments(value: ContributionEstablishment[]) {
    this._contributionEstablishments = value;
  }

  addContributionEstablishment() {
    this.contributionEstablishments.push({...this.contributionEstablishment});
  }
}
