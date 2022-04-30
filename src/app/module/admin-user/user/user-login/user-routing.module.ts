import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../../../home-page/home-page.component";
import {UserLoginComponent} from "./user-login.component";
import {CommandesComponent} from "../../../../commandes/commandes.component";
import {UserCreateAccountComponent} from "../user-create-account/user-create-account.component";
import {AdminLoginComponent} from "../../admin/admin-login/admin-login.component";

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'loginUser', component: UserLoginComponent },
  { path: 'loginAdmin', component: AdminLoginComponent },
  { path: 'commandes',children :[{ path : 'item', component: UserLoginComponent,}] },
  { path: 'createAccount', component: UserCreateAccountComponent }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
