import { Injectable } from '@angular/core';
import {ContributionSponsor} from "../model/contribution-sponsor.model";

@Injectable({
  providedIn: 'root'
})
export class ContributionSponsorService {
  private _contributionSponsor:ContributionSponsor;
  private _contributionSponsors=new Array<ContributionSponsor>();

  constructor() { }

  get contributionSponsor(): ContributionSponsor {
    if (this._contributionSponsor==null){
      this._contributionSponsor=new ContributionSponsor();
    }
    return this._contributionSponsor;
  }

  set contributionSponsor(value: ContributionSponsor) {
    this._contributionSponsor = value;
  }

  get contributionSponsors(): ContributionSponsor[] {
    if (this._contributionSponsors==null){
      this._contributionSponsors=new Array<ContributionSponsor>();
    }
    return this._contributionSponsors;
  }

  set contributionSponsors(value: ContributionSponsor[]) {
    this._contributionSponsors = value;
  }

  addContributionSponsor() {
    this._contributionSponsors.push({...this._contributionSponsor});
  }
}
