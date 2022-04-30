import { Injectable } from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private urlBase = 'http://localhost:8090'
  private url = '/api/v1/commande'
  private _commande: Commande;
  private _commandes: Array<Commande>;
  private _index: number;
  private reportName : String;

  public update(index: number, commande: Commande) {
    this.commande = {...commande};
    this._index = index;
  }

  public save() {
    if (this.commande.id == null) {
      this.http.post<number>(this.urlBase + this.url + '/', this.commande).subscribe(
        data => {
          if (data > 0) {
            this.commandes.push({...this.commande});
          } else {
            alert('error de creation de commande' + data);
          }
        }
      );
      this.commande.id=this.commandes.length+1;
      this.commandes.push({...this.commande});
    } else {
      this.commandes[this._index] = {...this.commande};
    }
    this.commande = null;
  }


  constructor(private http: HttpClient) {
  }

  public init() {
    this.http.get<Array<Commande>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.commandes = data;
      }, error => {
        console.log(error);
      }
    )
  }

  public initOnList() {
    for (var _i = 1; _i <= 4; _i++) {
      let myCommande = new Commande();
      myCommande.id = _i;
      myCommande.ref = "c-" + _i;
      myCommande.total = 100 * _i;
      myCommande.totalPaye = 20 * _i;
      this.commandes.push(myCommande)
    }
  }

  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null) {
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }


  imprimer() {
    this.http.get(this.urlBase + this.url + '/report/html').subscribe(
      result =>{
       let reportName = result;
      }
    );
  }

  supprimer() {
    this.http.delete(this.urlBase + this.url + '/delete/ref/').subscribe()
      }


}
