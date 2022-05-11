import { Component, OnInit } from '@angular/core';
import {Manifestation} from "../../../../../../controller/model/manifestation.model";
import {DemandeListComponent} from "../demande-list/demande-list.component";

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent implements OnInit {
  private _manifestation:Manifestation;

  constructor(private demandeListComponent:DemandeListComponent) { }

  ngOnInit(): void {
  }


  get manifestation(): Manifestation {
    return this._manifestation;
  }

  set manifestation(value: Manifestation) {
    this._manifestation = value;
  }
  showDialogEdit(){
    this.demandeListComponent.showDialogEdit();
  }
}
