import { Injectable } from '@angular/core';
import {Soutien} from "../model/soutien.model";

@Injectable({
  providedIn: 'root'
})
export class SoutienService {
private _soutien:Soutien;
private _soutiens=new Array<Soutien>();
  constructor() { }

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
