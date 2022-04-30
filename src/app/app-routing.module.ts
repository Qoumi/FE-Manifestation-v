import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserLoginComponent} from "./module/admin-user/user/user-login/user-login.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {HomePageComponent} from "./module/home-page/home-page.component";
import {UserCreateAccountComponent} from "./module/admin-user/user/user-create-account/user-create-account.component";
import {AdminLoginComponent} from "./module/admin-user/admin/admin-login/admin-login.component";

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'loginUser', component: UserLoginComponent },
  { path: 'loginAdmin', component: AdminLoginComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'createAccount', component: UserCreateAccountComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
