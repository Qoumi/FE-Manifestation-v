import { Injectable } from '@angular/core';
import {ContributionEstablishment} from "../model/contribution-establishment.model";
import {CommitteeOrganisation} from "../model/committee-organisation.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContributionEstablishmentService {
  private _contributionEstablishment:ContributionEstablishment;
  private _contributionEstablishments=new Array<ContributionEstablishment>();

  constructor(private http:HttpClient) { }

  public getListContributionEstablishments(reference:String)
  {
    this.http.get<Array<ContributionEstablishment>>("http://localhost:8070/api/v1/constributionEst/reference/"+ reference).subscribe(
      data=>{
        this.contributionEstablishments=data
        console.log('ContributionEstablishment');
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }
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
