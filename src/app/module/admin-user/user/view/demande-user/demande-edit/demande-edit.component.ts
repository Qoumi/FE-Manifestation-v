import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Manifestation} from "../../../../../../controller/model/manifestation.model";
import {ImplicatedEstablishment} from "../../../../../../controller/model/implicated-establishment.model";
import {ManifestationService} from "../../../../../../controller/service/manifestation.service";
import {CommitteeOrganisationService} from "../../../../../../controller/service/committee-organisation.service";
import {ContributionParticipantService} from "../../../../../../controller/service/contribution-participant.service";
import {
  ContributionEstablishmentService
} from "../../../../../../controller/service/contribution-establishment.service";
import {ContributionSponsorService} from "../../../../../../controller/service/contribution-sponsor.service";
import {SoutienService} from "../../../../../../controller/service/soutien.service";
import {Soutien} from "../../../../../../controller/model/soutien.model";
import {ContributionSponsor} from "../../../../../../controller/model/contribution-sponsor.model";
import {ContributionEstablishment} from "../../../../../../controller/model/contribution-establishment.model";
import {ContributionParticipant} from "../../../../../../controller/model/contribution-participant.model";
import {CommitteeOrganisation} from "../../../../../../controller/model/committee-organisation.model";
import {ImplicatedPartner} from "../../../../../../controller/model/implicated-partner.model";

@Component({
  selector: 'app-demande-edit',
  templateUrl: './demande-edit.component.html',
  styleUrls: ['./demande-edit.component.css']
})
export class DemandeEditComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder,private manifestationService:ManifestationService,
              private committeeOrganisationService:CommitteeOrganisationService,
              private contributionParticipantService:ContributionParticipantService,
              private contributionEstablishmentService:ContributionEstablishmentService,
              private contributionSponsorService:ContributionSponsorService,
              private soutienService:SoutienService) { }


  public addImplicatedEstablishment() {
    if (this.manifestation.implicatedEstablishments==null){
      this.manifestation.implicatedEstablishments=new Array<ImplicatedEstablishment>();
    }
    this.manifestation.implicatedEstablishments.push({...this.selectedImplicatedEstablishments});
  }


  get manifestation(): Manifestation {
    if (this._manifestation==null){
      this._manifestation=new Manifestation();
    }
    return this._manifestation;
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

  submit(){
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
    return this.committeeOrganisationService.committeeOrganisations;
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
  public addImplicatedPartner(){
    this.manifestationService.addImplicatedPartner();
  }
  public addCommitteeOrganisation(){
    this.committeeOrganisationService.addCommitteeOrganisation();
  }
  public deleteCommitteeOrganisation (index:number){
    this.committeeOrganisations.splice(index,1);
  }
  public updateCommitteeOrganisation (index:number,committeeOrganisation:CommitteeOrganisation){
    this.committeeOrganisationService.updateCommitteeOrganisation(index,committeeOrganisation);
  }
  public addContributionParticipant(){
    this.contributionParticipantService.addContributionParticipant();
  }
  public addContributionEstablishment(){
    this.contributionEstablishmentService.addContributionEstablishment();
  }
  public addContributionSponsor(){
    this.contributionSponsorService.addContributionSponsor();
  }
  public addSoutien(){
    this.soutienService.addSoutien();
  }



}

