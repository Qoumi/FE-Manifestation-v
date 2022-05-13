import {ImplicatedEstablishment} from "./implicated-establishment.model";
import {ImplicatedPartner} from "./implicated-partner.model";
import {ContributionSponsor} from "./contribution-sponsor.model";
import {CommitteeOrganisation} from "./committee-organisation.model";
import {Coordonnateur} from "./coordonnateur.model";
import {ContributionEstablishment} from "./contribution-establishment.model";
import {ContributionParticipant} from "./contribution-participant.model";
import {Soutien} from "./soutien.model";
import {EntityOrganisation} from "./entity-organisation.model";

export class Manifestation {
  public id: number;
  public name: String;
  public ref: String;
  public etentue: String;
  public dateStart: Date;
  public dateEnd: Date;
  public lieu: String;
  public nbrParticipantPrevu: number;
  public siteWeb: String;
  public implicatedEstablishments = new Array<ImplicatedEstablishment>();
  public implicatedPartners = new Array<ImplicatedPartner>();
  public contributionSponsors = new Array<ContributionSponsor>();
  public committeeOrganisations = new Array<CommitteeOrganisation>();
  public coordonnateur: Coordonnateur;
  public entityOrganisation: EntityOrganisation;
  contributionEstablishments = new Array<ContributionEstablishment>();
  public contributionParticipants = new Array<ContributionParticipant>();
  soutiens = new Array<Soutien>();
  montantGlobal: number;
}
