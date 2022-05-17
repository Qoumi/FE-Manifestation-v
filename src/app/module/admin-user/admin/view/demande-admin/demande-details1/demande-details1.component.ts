import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../../../../../controller/service/demande.service";
import {AuthService} from "../../../../../../controller/service/auth.service";
import {User} from "../../../../../../controller/model/user.model";
import {Demande} from "../../../../../../controller/model/demande.model";
import {Manifestation} from "../../../../../../controller/model/manifestation.model";
import {CommitteeOrganisationService} from "../../../../../../controller/service/committee-organisation.service";
import {ContributionParticipantService} from "../../../../../../controller/service/contribution-participant.service";
import {
  ContributionEstablishmentService
} from "../../../../../../controller/service/contribution-establishment.service";
import {ContributionSponsorService} from "../../../../../../controller/service/contribution-sponsor.service";
import {ImplicatedEstablishmentService} from "../../../../../../controller/service/implicated-establishment.service";
import {ImplicatedPartnerService} from "../../../../../../controller/service/implicated-partner.service";
import {SoutienService} from "../../../../../../controller/service/soutien.service";

@Component({
  selector: 'app-demande-details1',
  templateUrl: './demande-details1.component.html',
  styleUrls: ['./demande-details1.component.css']
})
export class DemandeDetails1Component implements OnInit {
   private _authenticatedUser:User;
   private _demande:Demande;

  constructor(public contributionParticipantService:ContributionParticipantService,
              public contributionEstablishmentService:ContributionEstablishmentService,
              public contributionSponsorService:ContributionSponsorService
              ,public  demandeService:DemandeService,private authService:AuthService, public implicatedEstablishmentService:ImplicatedEstablishmentService,
              public implicatedPartnerService:ImplicatedPartnerService,
              public soutienService:SoutienService,
              public committeeOrganisationService:CommitteeOrganisationService) { }


  changeAccept(){
    this.demandeService.demande.manifestation.committeeOrganisations=this.committeeOrganisationService.committeeOrganisations
    this.demandeService.demande.manifestation.implicatedEstablishments=this.implicatedEstablishmentService.implicatedEstablishments
    this.demandeService.demande.manifestation.implicatedPartners=this.implicatedPartnerService.implicatedPartnerServices
    this.demandeService.demande.manifestation.contributionEstablishments=this.contributionEstablishmentService.contributionEstablishments
    this.demandeService.demande.manifestation.contributionParticipants=this.contributionParticipantService.contributionParticipants
    this.demandeService.demande.manifestation.soutiens=this.soutienService.soutiens
    this.demandeService.demande.manifestation.contributionSponsors=this.contributionSponsorService.contributionSponsors
    this.demandeService.changeAccept();
    this.demandeService.demande.manifestation.montantGlobal=this.soutienService.montantGlobal
    this.demandeService.update();
  }
  changeRefuse(){
    this.demandeService.demande.manifestation.committeeOrganisations=this.committeeOrganisationService.committeeOrganisations
    this.demandeService.demande.manifestation.implicatedEstablishments=this.implicatedEstablishmentService.implicatedEstablishments
    this.demandeService.demande.manifestation.implicatedPartners=this.implicatedPartnerService.implicatedPartnerServices
    this.demandeService.demande.manifestation.contributionEstablishments=this.contributionEstablishmentService.contributionEstablishments
    this.demandeService.demande.manifestation.contributionParticipants=this.contributionParticipantService.contributionParticipants
    this.demandeService.demande.manifestation.soutiens=this.soutienService.soutiens
    this.demandeService.demande.manifestation.contributionSponsors=this.contributionSponsorService.contributionSponsors
    this.demandeService.demande.manifestation.montantGlobal=this.soutienService.montantGlobal
    this.demandeService.changerefuser();
    this.demandeService.update();
    console.log(this.demandeService.demande.manifestation)

  }
  get demande(): Demande {
    if(this._demande==null)
    {
      this._demande=new Demande();

    }
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  get authenticatedUser(): User {
    if(this._authenticatedUser==null)
    {
      this._authenticatedUser=new User();
    }
    return this._authenticatedUser;
  }

  set authenticatedUser(value: User) {
    this._authenticatedUser = value;
  }

  public getauthenticatedUser()
  {
    this.authenticatedUser=this.authService.authenticatedUser;
  }
  ngOnInit(): void {
    this.getauthenticatedUser();
  }

}
