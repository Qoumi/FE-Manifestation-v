import { Component, OnInit } from '@angular/core';
import {Commande} from "../../controller/model/commande.model";
import {CommandeService} from "../../controller/service/commande.service";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  Imprimer: any;
  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }
  constructor(private commandeService:CommandeService) { }

  public delete (index:number){
    this.commandes.splice(index,1);
  }
  public update (index:number,commande:Commande){
    this.commandeService.update(index,commande);
  }

  ngOnInit(): void {
    this.commandeService.init();
  }
  public imprimer(){
    this.commandeService.imprimer();
  }

}
