import { Injectable } from '@angular/core';
import {ContributionSponsor} from "../model/contribution-sponsor.model";
import {HttpClient} from "@angular/common/http";
import {ContributionParticipant} from "../model/contribution-participant.model";

@Injectable({
  providedIn: 'root'
})
export class ContributionSponsorService {
  private _contributionSponsor:ContributionSponsor;
  private _contributionSponsors=new Array<ContributionSponsor>();

  constructor(private http:HttpClient) { }
 public getContributionSponsors(reference:String)
 {
   this.http.get<Array<ContributionSponsor>>("http://localhost:8070/api/v1/constributionPar/reference/"+ reference).subscribe(
     data=>{
       this.contributionSponsors=data
       console.log('ContributionParticipant');
       console.log(data);
     } ,error=>{
       console.log(error)
     }
   )
 }
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
