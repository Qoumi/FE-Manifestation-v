import { Injectable } from '@angular/core';
import {Demande} from "../model/demande.model";
import {ManifestationService} from "./manifestation.service";
import {HttpClient} from "@angular/common/http";
import {Commande} from "../model/commande.model";
import {Router} from "@angular/router";
import {Manifestation} from "../model/manifestation.model";
import {CommitteeOrganisation} from "../model/committee-organisation.model";
import {CommitteeOrganisationService} from "./committee-organisation.service";
import {ContributionSponsorService} from "./contribution-sponsor.service";
import {ContributionEstablishmentService} from "./contribution-establishment.service";
import {ContributionParticipantService} from "./contribution-participant.service";
import {ImplicatedEstablishmentService} from "./implicated-establishment.service";
import {ImplicatedPartnerService} from "./implicated-partner.service";
import {SoutienService} from "./soutien.service";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande:Demande;
  private urlBase = 'http://localhost:8070'
  private url = '/api/v1/demande'
  private urlprint = '/api/v1/report'
  private _demandes:Array<Demande>;
  private isSaveValidated:Boolean;
  private cmpRefDemande:number=1000;
  reference:String;
  constructor(private contributionParticipantService:ContributionParticipantService,
              private contributionEstablishmentService:ContributionEstablishmentService,
              private contributionSponsorService:ContributionSponsorService ,
              private committeeOrganisationService:CommitteeOrganisationService,
              private manifestationService:ManifestationService,
              private implicatedEstablishmentService:ImplicatedEstablishmentService,
              private implicatedPartnerService:ImplicatedPartnerService,
              private soutienService:SoutienService,
              private http:HttpClient,private router:Router) { }

  public  getListDemandes()
  {
    this.http.get<Array<Demande>>("http://localhost:8070/api/v1/demande/refetate/en cours de traitement").subscribe(
      data=>{
        this.demandes=data
        console.log(data)
      } ,error=>{
        console.log(error)
      }
    )

  }
  public  getListDemandesAccepter()
  {
    this.http.get<Array<Demande>>("http://localhost:8070/api/v1/demande/refetate/la demande accept").subscribe(
      data=>{
        this.demandes=data
        this.getListDemandesrefuser()
        console.log(data)
      } ,error=>{
        console.log(error)
      }
    )

  }
  public  getListDemandesrefuser()
  {
    this.http.get<Array<Demande>>("http://localhost:8070/api/v1/demande/refetate/la demande est refusée").subscribe(
      data=>{
        for (let demande of data)
        {
          this.demandes.push(demande)
        }
        console.log(data)
      } ,error=>{
        console.log(error)
      }
    )

  }
  public update()
  {
    this.http.put<number>("http://localhost:8070/api/v1/demande/",this.demande).subscribe(
      data=>{
        console.log(data);
      } ,error=>{
        console.log(error)
      }
    )
  }

  public changeAccept()
  {
    alert('la demande est accepte')
    this.demande.etat="la demande accept";
  }
  public changerefuser()
  {
    alert('la demande est refuse')
    this.demande.etat="la demande est refusée";
  }
  public  getDetails()
  {
    this.http.get<Demande>("http://localhost:8070/api/v1/demande/reference/"+ this.reference).subscribe(
      data=>{
        this.demande=data
        console.log('details bien');
        console.log(this.demande.id);
        console.log(data);
        this.details(this.demande.manifestation.id);
      } ,error=>{
        console.log(error)
      }
    )
  }
  public details(id: number)
  { this.soutienService.getSoutiens(id)
    this.implicatedEstablishmentService.getImplicatedEstablishments(id)
    this.implicatedPartnerService.getImplicatedPartners(id)
    this.contributionParticipantService.getListContributionParticipants(id)
    this.contributionEstablishmentService.getListContributionEstablishments(id);
    this.contributionSponsorService.getContributionSponsors(id);
    this.committeeOrganisationService.getListcommitteeOrganisation(id);

    console.log(this.reference);
    this.router.navigate(['/details1']);
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
  get demandes(): Array<Demande> {
    if (this._demandes== null) {
      this._demandes = new Array<Demande>();
    }
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }

  get demande(): Demande {
    if (this._demande==null){
      this._demande=new Demande();
    }
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }
  public save(){
    //alert(this.demande.manifestation.coordonnateur.firstName);
    //alert(this.demande.manifestation.name);
    this.cmpRefDemande=this.cmpRefDemande+1;
    this.demande.ref="D"+this.cmpRefDemande;
    this.demande.etat="en cours de traitement";
    if (this.demande.id==null){
    this.http.post<number>(this.urlBase + this.url + '/', this.demande).subscribe(
    data =>{if(data > 0) {
      this.isSaveValidated=true;
      this.demandes.push({...this.demande});
      } else {
      this.isSaveValidated=false;
        alert('error de creation de commande' + data);
      }
},error=>{
        console.log(error)
      }
)
}

}
  public getDemande() {
    this.http.post(this.urlBase + this.url + '/getDemande', this.demande).subscribe();
  }
  public print(){
    if (this.isSaveValidated) {
      this.http.get(this.urlBase + this.urlprint + '/generate').subscribe();
    }
    else{ alert("votre demande n'a pas été validé")}
  }
}
