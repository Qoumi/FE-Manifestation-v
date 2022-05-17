import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeCreateComponent } from './commandes/commande-create/commande-create.component';
import { CommandeListComponent } from './commandes/commande-list/commande-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserLoginComponent } from './module/admin-user/user/user-login/user-login.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCreateAccountComponent } from './module/admin-user/user/user-create-account/user-create-account.component';
import { UserRoutingModule } from './module/admin-user/user/user-login/user-routing.module';
import { DemandeAdminComponent } from './module/admin-user/admin/view/demande-admin/demande-admin.component';
import {AdminLoginComponent} from "./module/admin-user/admin/admin-login/admin-login.component";
import {
  DemandeToUpdateComponent
} from "./module/admin-user/admin/view/demande-admin/demande-to-update/demande-to-update.component";
import {
  DemandeEnCoursComponent
} from "./module/admin-user/admin/view/demande-admin/demande-en-cours/demande-en-cours.component";
import {
  DemandeHistoryComponent
} from "./module/admin-user/admin/view/demande-admin/demande-history/demande-history.component";
import {
  DemandeCreateComponent
} from "./module/admin-user/user/view/demande-user/demande-create/demande-create.component";
import {DemandeUserComponent} from "./module/admin-user/user/view/demande-user/demande-user.component";
import {DemandeListComponent} from "./module/admin-user/user/view/demande-user/demande-list/demande-list.component";
import { NavbarComponent } from './module/admin-user/user/view/navbar/navbar.component';
import { SidebarComponent } from './module/admin-user/user/view/sidebar/sidebar.component';
import {DemandeDetailsComponent} from "./module/admin-user/user/view/demande-user/demande-details/demande-details.component";
import { DemandeDetails1Component } from './module/admin-user/admin/view/demande-admin/demande-details1/demande-details1.component';
import { DemandeEditComponent } from './module/admin-user/user/view/demande-user/demande-edit/demande-edit.component';
import {RouterModule} from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    AdminLoginComponent,
    UserLoginComponent,
    HomePageComponent,
    UserCreateAccountComponent,
    DemandeToUpdateComponent,
    DemandeEnCoursComponent,
    DemandeHistoryComponent,
    DemandeAdminComponent,
    DemandeCreateComponent,
    DemandeUserComponent,
    DemandeListComponent,
    NavbarComponent,
    SidebarComponent,
    DemandeDetailsComponent,
    DemandeEditComponent,
    DemandeDetails1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    UserRoutingModule,
    RouterModule.forRoot([
      { path: 'encours', component: DemandeEnCoursComponent },
      { path: 'history', component: DemandeHistoryComponent },
      { path: 'details1', component: DemandeDetails1Component },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
