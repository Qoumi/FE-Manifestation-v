import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {TokenService} from "./token.service";
import {BehaviorSubject, config, map, Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;



  get authenticated(): boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean) {
    this._authenticated = value;
  }
  public error: string = null;
  readonly API = 'http://localhost:8036/';
  private _authenticatedUser = new User();
  private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
  public _loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) { }

  public loginAdmin(username: string, password: string) {
    this.http.post<any>(this.API + 'login', { username, password }, { observe: 'response' }).subscribe(
      resp => {

        this.error = null;
        const jwt = resp.headers.get('Authorization');
        jwt != null ? this.tokenService.saveToken(jwt) : false;

        this.loadInfos();
        console.log('you are logged in successfully');
        this.router.navigate(['/commandes']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  public loadInfos() {
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    const roles = tokenDecoded.roles;
    const email = tokenDecoded.email;
    const prenom = tokenDecoded.prenom;
    const nom = tokenDecoded.nom;
    const passwordChanged = tokenDecoded.passwordChanged;
    this._authenticatedUser.passwordChanged = passwordChanged;
    this._authenticatedUser.username = username;
    this._authenticatedUser.nom = nom;
    this._authenticatedUser.prenom = prenom;
    this._authenticatedUser.email = email;
    this._authenticatedUser.roles = roles;
    localStorage.setItem('autenticated', JSON.stringify(true));
    this.authenticated = true;
    this._loggedIn.next(true);

  }

  login(username, password) {
    return this.http.post<any>(this.API+'/users/authenticate', { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }


}
