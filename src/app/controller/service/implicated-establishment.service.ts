import { Injectable } from '@angular/core';
import {ImplicatedEstablishment} from "../model/implicated-establishment.model";
import {ContributionSponsor} from "../model/contribution-sponsor.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImplicatedEstablishmentService {
private _implicatedEstablishment:ImplicatedEstablishment;
private _implicatedEstablishments:Array<ImplicatedEstablishment>;
  constructor(private http:HttpClient) { }
  public getImplicatedEstablishments(id:number)
  {
    this.http.get<Array<ImplicatedEstablishment>>("http://localhost:8070/api/v1/implicatedEst/id/"+ id).subscribe(
      data=>{
        this.implicatedEstablishments=data
        console.log('ImplicatedEstablishment');
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }
  get implicatedEstablishment(): ImplicatedEstablishment {
    return this._implicatedEstablishment;
  }

  set implicatedEstablishment(value: ImplicatedEstablishment) {
    this._implicatedEstablishment = value;
  }

  get implicatedEstablishments(): Array<ImplicatedEstablishment> {
    return this._implicatedEstablishments;
  }

  set implicatedEstablishments(value: Array<ImplicatedEstablishment>) {
    this._implicatedEstablishments = value;
  }
}
