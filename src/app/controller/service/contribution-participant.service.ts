import { Injectable } from '@angular/core';
import {ContributionParticipant} from "../model/contribution-participant.model";
import {Manifestation} from "../model/manifestation.model";
import {HttpClient} from "@angular/common/http";
import {ContributionEstablishment} from "../model/contribution-establishment.model";

@Injectable({
  providedIn: 'root'
})
export class ContributionParticipantService {
  private _contributionParticipant:ContributionParticipant;
  private _contributionParticipants=new Array<ContributionParticipant>();
  private _manifestation:Manifestation;

  constructor(private http:HttpClient) { }
  public getListContributionParticipants(reference:String)
  {
    this.http.get<Array<ContributionParticipant>>("http://localhost:8070/api/v1/constributionPar/reference/"+ reference).subscribe(
      data=>{
        this.contributionParticipants=data
        console.log('ContributionParticipant');
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }

  get manifestation(): Manifestation {
    if (this._manifestation==null){
      this._manifestation=new Manifestation();
    }
    return this._manifestation;
  }

  set manifestation(value: Manifestation) {
    this._manifestation = value;
  }


  get contributionParticipants(): ContributionParticipant[] {
    if (this._contributionParticipants==null){
      this._contributionParticipants=new Array<ContributionParticipant>();
    }
    return this._contributionParticipants;
  }

  set contributionParticipants(value: ContributionParticipant[]) {
    this._contributionParticipants = value;
  }

  get contributionParticipant(): ContributionParticipant {
    if (this._contributionParticipant==null){
      this._contributionParticipant=new ContributionParticipant();
    }
    return this._contributionParticipant;
  }

  set contributionParticipant(value: ContributionParticipant) {
    this._contributionParticipant = value;
  }

  addContributionParticipant() {
    this.contributionParticipants.push({...this.contributionParticipant});
  }
}
