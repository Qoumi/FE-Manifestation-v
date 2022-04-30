import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  readonly API = 'http://localhost:8036/';
  private username:any;

  constructor(private http: HttpClient) { }

  public hasRole(username){
    this.http.get(this.API+'api/v1/admin/user/username'+username).subscribe(
      data=>{
        return this.username=data;
      }
    )
  }
}
