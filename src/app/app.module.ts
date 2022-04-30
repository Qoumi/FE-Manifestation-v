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
import { AdminRoutingModule } from './module/admin-user/admin-routing.module';
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
    DemandeAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AppRoutingModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
