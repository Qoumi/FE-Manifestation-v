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

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande:Demande;
  private urlBase = 'http://localhost:8070'
  private url = '/api/v1/demande'
  private _demandes:Array<Demande>;
  private cmpRefDemande:number=24124;
  reference:String;
  constructor(private contributionParticipantService:ContributionParticipantService,private contributionEstablishmentService:ContributionEstablishmentService,private contributionSponsorService:ContributionSponsorService ,private committeeOrganisationService:CommitteeOrganisationService,private manifestationService:ManifestationService,private http:HttpClient,private router:Router) { }

  public  getListDemandes()
  {
    this.http.get<Array<Demande>>("http://localhost:8070/api/v1/demande/").subscribe(
      data=>{
        this.demandes=data
        console.log(data)
      } ,error=>{
        console.log(error)
      }
    )

  }
  public  getDetails()
  {
    this.contributionParticipantService.getListContributionParticipants(this.reference)
    this.contributionEstablishmentService.getListContributionEstablishments(this.reference);
    this.contributionSponsorService.getContributionSponsors(this.reference);
    this.committeeOrganisationService.getListcommitteeOrganisation(this.reference);
    this.http.get<Demande>("http://localhost:8070/api/v1/demande/reference/"+ this.reference).subscribe(
      data=>{
        this.demande=data
        console.log('details bien');
        console.log(this.demande.id);
        console.log(data);
        this.details();
      } ,error=>{
        console.log(error)
      }
    )
  }
  public details()
  {
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
    this.cmpRefDemande=this.cmpRefDemande++;
    this.demande.ref="D"+this.cmpRefDemande++;
    this.demande.etat="en cours de traitement";
    if (this.demande.id==null){
    this.http.post<number>(this.urlBase + this.url + '/', this.demande).subscribe(
    data =>{if(data > 0) {
      this.demandes.push({...this.demande});
      } else {
        alert('error de creation de commande' + data);
      }
})
}

}
}
