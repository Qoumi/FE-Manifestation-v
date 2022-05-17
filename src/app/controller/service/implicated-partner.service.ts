import { Injectable } from '@angular/core';
import {ImplicatedPartner} from "../model/implicated-partner.model";
import {ImplicatedEstablishment} from "../model/implicated-establishment.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImplicatedPartnerService {
  private _implicatedPartnerService:ImplicatedPartner;
  private _implicatedPartnerServices:Array<ImplicatedPartner>
  constructor(private http:HttpClient) { }

  public getImplicatedPartners(id:number)
  {
    this.http.get<Array<ImplicatedPartner>>("http://localhost:8070/api/v1/implicatedPar/id/"+ id).subscribe(
      data=>{
        this.implicatedPartnerServices=data
        console.log('ImplicatedEstablishment');
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }
  get implicatedPartnerService(): ImplicatedPartner {
    return this._implicatedPartnerService;
  }

  set implicatedPartnerService(value: ImplicatedPartner) {
    this._implicatedPartnerService = value;
  }

  get implicatedPartnerServices(): Array<ImplicatedPartner> {
    return this._implicatedPartnerServices;
  }

  set implicatedPartnerServices(value: Array<ImplicatedPartner>) {
    this._implicatedPartnerServices = value;
  }
}
