import {Manifestation} from "./manifestation.model";

export class Demande {
  public id:number;
  public ref:String;
  public manifestation:Manifestation;
  public etat:String;
  public motif:String;
  public createdAt:Date;
  public updatedAt:Date;

}
