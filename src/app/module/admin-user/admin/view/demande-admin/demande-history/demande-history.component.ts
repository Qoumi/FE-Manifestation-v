import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-demande-history',
  templateUrl: './demande-history.component.html',
  styleUrls: ['./demande-history.component.css']
})
export class DemandeHistoryComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  public history()
  {
    console.log('you are in recent demandes ');
    this.router.navigate(['/history']);
  }
  public demandeEncours()
  {
    console.log('you are in recent demandes ');
    this.router.navigate(['/encours']);
  }
}
