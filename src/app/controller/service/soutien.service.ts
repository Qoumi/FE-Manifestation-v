import { Injectable } from '@angular/core';
import {Soutien} from "../model/soutien.model";
import {ImplicatedPartner} from "../model/implicated-partner.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SoutienService {
private _soutien:Soutien;
private _montantGlobal:number;
private _soutiens=new Array<Soutien>();
  constructor(private http:HttpClient) { }
  public getSoutiens(id:number)
  {
    this.http.get<Array<Soutien>>("http://localhost:8070/api/v1/soutien/id/"+ id).subscribe(
      data=>{
        this.soutiens=data
        console.log('sotien');
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }

  get montantGlobal(): number {
    return this._montantGlobal;
  }

  set montantGlobal(value: number) {
    this._montantGlobal = value;
  }

  /*calcMontantGlobale()
  {
    this.montantGlobal=0;
    for(let c of this.soutiens)
    {
      this.montantGlobal+=c.montantPropose
    }
  }
   */
  get soutien(): Soutien {
    if (this._soutien==null){
      this._soutien=new Soutien();
    }
    return this._soutien;
  }

  set soutien(value: Soutien) {
    this._soutien = value;
  }

  get soutiens(): Soutien[] {
    if (this._soutiens==null){
      this._soutiens=new Array<Soutien>()
    }
    return this._soutiens;
  }

  set soutiens(value: Soutien[]) {
    this._soutiens = value;
  }

  addSoutien() {
    this.soutiens.push({...this.soutien});
  }
}
