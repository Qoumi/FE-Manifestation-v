import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {
  stepShow:number;
  details=false;
  dialogEdit=false;
  createDemande=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public showDemande(){
    this.stepShow=0;
    if (this.stepShow=1){return}
    this.stepShow++
  }

  unshowDemande() {
    if (this.stepShow=0){return}
    this.stepShow--
  }
  showDetails(){
    this.details=true;
  }
  showDialogEdit(){
    this.dialogEdit=true;
  }
  showCreateDemande(){
    this.createDemande=true;
  }

}
