import {Manifestation} from "./manifestation.model";
import {User} from "./user.model";

export class Demande {
  public id:number;
  public ref:String;
  public manifestation:Manifestation;
  public etat:String;
  public motif:String;
  public createdAt:Date;
  public updatedAt:Date;
  public user:User;

}
