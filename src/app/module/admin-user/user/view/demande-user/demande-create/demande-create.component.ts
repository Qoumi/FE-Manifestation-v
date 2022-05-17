import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {ImplicatedEstablishment} from "../../../../../../controller/model/implicated-establishment.model";
import {ManifestationService} from "../../../../../../controller/service/manifestation.service";
import {ImplicatedPartner} from "../../../../../../controller/model/implicated-partner.model";
import {CommitteeOrganisation} from "../../../../../../controller/model/committee-organisation.model";
import {CommitteeOrganisationService} from "../../../../../../controller/service/committee-organisation.service";
import {ContributionParticipant} from "../../../../../../controller/model/contribution-participant.model";
import {ContributionParticipantService} from "../../../../../../controller/service/contribution-participant.service";
import {Manifestation} from "../../../../../../controller/model/manifestation.model";
import {ContributionEstablishment} from "../../../../../../controller/model/contribution-establishment.model";
import {
  ContributionEstablishmentService
} from "../../../../../../controller/service/contribution-establishment.service";
import {ContributionSponsor} from "../../../../../../controller/model/contribution-sponsor.model";
import {ContributionSponsorService} from "../../../../../../controller/service/contribution-sponsor.service";
import {SoutienService} from "../../../../../../controller/service/soutien.service";
import {Soutien} from "../../../../../../controller/model/soutien.model";
import {DemandeService} from "../../../../../../controller/service/demande.service";
import {EntityOrganisation} from "../../../../../../controller/model/entity-organisation.model";
import {Coordonnateur} from "../../../../../../controller/model/coordonnateur.model";
import {EntityOrganisationService} from "../../../../../../controller/service/entity-organisation.service";
import {CoordonnateurService} from "../../../../../../controller/service/coordonnateur.service";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {

 // title = 'angular13bestcode';

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  entityDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  soutien_step = false;
  print_step = false;
  step = 1;
  stepp:number;
  stepAutre1:number;
  stepAutre2:number;
  steptelechargement:number;
  private _manifestation:Manifestation;
  selectedImplicatedEstablishments: ImplicatedEstablishment=new ImplicatedEstablishment();
  selectedImplicatedPartner: ImplicatedEstablishment=new ImplicatedEstablishment();
  selectedCommitteeOrganisation:CommitteeOrganisation=new CommitteeOrganisation();
  selectedContributionParticipant :ContributionParticipant=new ContributionParticipant();
  selectedContributionEstablishment:ContributionEstablishment=new ContributionEstablishment();
  selectedContributionSponsor:ContributionSponsor=new ContributionSponsor();
  selectedSoutien:Soutien=new Soutien();
  private _entityOrganisation:EntityOrganisation;
  private _coordonnateur:Coordonnateur;

  constructor(private formBuilder: FormBuilder,private manifestationService:ManifestationService,
              private committeeOrganisationService:CommitteeOrganisationService,
              private contributionParticipantService:ContributionParticipantService,
              private contributionEstablishmentService:ContributionEstablishmentService,
              private contributionSponsorService:ContributionSponsorService,
              private soutienService:SoutienService,
              private demandeService:DemandeService,
              private entityOrganisationService:EntityOrganisationService,
              private coordonnateurService:CoordonnateurService) { }


  public addSoutien(){
    if (this.manifestation.soutiens==null){
      this.manifestation.soutiens=new Array<Soutien>();
    }
    this.manifestationService.manifestation.soutiens.push({...this.selectedSoutien});
  }
  public addContributionParticipant(){
    if (this.manifestation.contributionParticipants==null){
      this.manifestation.contributionParticipants=new Array<ContributionParticipant>();
    }
    this.manifestationService.manifestation.contributionParticipants.push({...this.selectedContributionParticipant});
  }
  public addContributionEstablishment(){
    if (this.manifestation.contributionEstablishments==null){
      this.manifestation.contributionEstablishments=new Array<ContributionEstablishment>();
    }
    this.manifestationService.manifestation.contributionEstablishments.push({...this.selectedContributionEstablishment});
  }
  public addContributionSponsor(){
    if (this.manifestation.contributionSponsors==null){
      this.manifestation.contributionSponsors=new Array<ContributionSponsor>();
    }
    this.manifestationService.manifestation.contributionSponsors.push({...this.selectedContributionSponsor});
  }

  public addCommitteeOrganisation(){
    if (this.manifestation.committeeOrganisations==null){
      this.manifestation.committeeOrganisations=new Array<CommitteeOrganisation>()
    }
    this.manifestationService.manifestation.committeeOrganisations.push({...this.selectedCommitteeOrganisation});
  }

  public addImplicatedPartner(){
    if (this.manifestation.implicatedPartners==null){
      this.manifestation.implicatedPartners=new Array<ImplicatedPartner>();
    }
    this.manifestation.implicatedPartners.push({...this.selectedImplicatedPartner});
  }

  public addImplicatedEstablishment() {
    if (this.manifestation.implicatedEstablishments==null){
      this.manifestation.implicatedEstablishments=new Array<ImplicatedEstablishment>();
    }
    this.manifestation.implicatedEstablishments.push({...this.selectedImplicatedEstablishments});
  }

  public save(){
    //alert(this.manifestation.implicatedPartners.forEach(e=>e.name));
    this.demandeService.save()
  }


  get coordonnateur(): Coordonnateur {
    return this.coordonnateurService.coordonnateur;
  }


  get entityOrganisation(): EntityOrganisation {

    return this.entityOrganisationService.entityOrganisation;
  }

  get manifestation(): Manifestation {
    return this.manifestationService.manifestation;
  }

  set manifestation(value: Manifestation) {
    this._manifestation = value;
  }

  ngOnInit() {

    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      lieu: ['', Validators.required],
      nbrParticipantPrevu: ['',Validators.required],
      siteWeb: ['', Validators.required]
    });
    this.entityDetails = this.formBuilder.group({
      name: ['', Validators.required],
      establishmentName: ['', Validators.required],
      responsableName: ['',Validators.required]
    });

    this.addressDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     grade: ['', Validators.required],
      establishmentName: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      fax: ['',Validators.required]
    });

    this.educationalDetails = this.formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['',Validators.required]
    });
  }

  get personal() { return this.personalDetails.controls; }

  get address() { return this.addressDetails.controls; }
  get entity() { return this.addressDetails.controls; }

  get education() { return this.educationalDetails.controls; }
  next(){

    if(this.step==1){
      this.personal_step = true;
     // if (this.personalDetails.invalid) { return  }
      this.step++
    }

    else if(this.step==2){
      this.address_step = true;
     // if (this.addressDetails.invalid) { return }
      this.step++;
    }
    else if(this.step==3){
      this.education_step = true;
     // if (this.educationalDetails.invalid) { return }
      this.step++;
    }


  }

  previous(){
    this.step--

    if(this.step==1){
      this.address_step = false;
    }
    if(this.step==2){
      this.education_step = false;
    }
    if(this.step==3){
      this.soutien_step = false;
    }

  }
  getDemande(){
    this.demandeService.getDemande();
  }
  printReport(){
    this.demandeService.print();
  }

  submit(){
    //this.demandeService.demande.manifestation=this.manifestationService.manifestation
    this.save();
    this.stepp=1;
    if(this.step==4){
      this.soutien_step = true;

      //if (this.educationalDetails.invalid) { return }
    }
  }
  print(){
    this.steptelechargement=2;
  }
  autrePlus(){
    this.stepAutre1=0;
    if (this.stepAutre1=1){return}
    this.stepAutre1++;

  }autreMoins()
  {
    if (this.stepAutre1=0){return}
    this.stepAutre1--;

  }
  autrePlusc(){
    this.stepAutre2=0;
    if (this.stepAutre2=1){return}
    this.stepAutre2++;
  }
  autreMoinsc()
  {
    if (this.stepAutre2=0){return}
    this.stepAutre2--;
  }

  get soutien(): Soutien {
    return this.soutienService.soutien;
  }

  get soutiens(): Soutien[] {

    return this.soutienService.soutiens;
  }
  get contributionSponsor(): ContributionSponsor {
    return this.contributionSponsorService.contributionSponsor;
  }

  get contributionSponsors(): ContributionSponsor[] {
    return this.contributionSponsorService.contributionSponsors;
  }
  get contributionEstablishment(): ContributionEstablishment {
    return this.contributionEstablishmentService.contributionEstablishment;
  }

  get contributionEstablishments(): ContributionEstablishment[] {
    return this.contributionEstablishmentService.contributionEstablishments;
  }
  get contributionParticipants(): ContributionParticipant[] {

    return this.contributionParticipantService.contributionParticipants;
  }
  get contributionParticipant(): ContributionParticipant {
    return this.contributionParticipantService.contributionParticipant;
  }
  get committeeOrganisation(): CommitteeOrganisation {
    return this.committeeOrganisationService.committeeOrganisation;
  }

  get committeeOrganisations(): CommitteeOrganisation[] {
    return this.manifestationService.manifestation.committeeOrganisations;
  }

  get implicatedEstablishments(): Array<ImplicatedEstablishment> {
    return this.manifestationService.implicatedEstablishments;
  }
  get implicatedEstablishment(): ImplicatedEstablishment {
    return this.manifestationService.implicatedEstablishment;
  }
  get implicatedPartner(): ImplicatedPartner {
    return this.manifestationService.implicatedPartner;
  }

  get implicatedPartners(): Array<ImplicatedPartner> {
    return this.manifestationService.implicatedPartners;
  }
  public deleteImplicatedEstablishment (index:number){
    this.implicatedEstablishments.splice(index,1);
  }
  public updateImplicatedEstablishment (index:number,implicatedEstablishment:ImplicatedEstablishment){
    this.manifestationService.updateImplicatedEstablishment(index,implicatedEstablishment);
  }
  public deleteImplicatedPartner (index:number){
    this.implicatedPartners.splice(index,1);
  }
  public updateImplicatedPartner (index:number,implicatedEstablishment:ImplicatedEstablishment){
    this.manifestationService.updateImplicatedPartner(index,implicatedEstablishment);
  }

 /* public addImplicatedEstablishment(){
    this.manifestationService.addImplicatedEstablishment();
  }*/


  public deleteCommitteeOrganisation (index:number){
    this.committeeOrganisations.splice(index,1);
  }
  public updateCommitteeOrganisation (index:number,committeeOrganisation:CommitteeOrganisation){
    this.committeeOrganisationService.updateCommitteeOrganisation(index,committeeOrganisation);
  }





}

