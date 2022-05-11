import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserLoginComponent} from "./module/admin-user/user/user-login/user-login.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {HomePageComponent} from "./module/home-page/home-page.component";
import {UserCreateAccountComponent} from "./module/admin-user/user/user-create-account/user-create-account.component";
import {AdminLoginComponent} from "./module/admin-user/admin/admin-login/admin-login.component";
import {
  DemandeCreateComponent
} from "./module/admin-user/user/view/demande-user/demande-create/demande-create.component";
import {DemandeUserComponent} from "./module/admin-user/user/view/demande-user/demande-user.component";
import {DemandeListComponent} from "./module/admin-user/user/view/demande-user/demande-list/demande-list.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./controller/guards/auth.guard";
import {
  DemandeDetailsComponent
} from "./module/admin-user/user/view/demande-user/demande-details/demande-details.component";



const routes: Routes = [


   { path: '', component: HomePageComponent, },
   { path: 'loginUser', component: UserLoginComponent },
   { path: 'loginAdmin', component: AdminLoginComponent },
   { path: 'commandes', component: CommandesComponent },
   { path: 'demande', component: DemandeCreateComponent },
   { path: 'createAccount', component: UserCreateAccountComponent },
  { path: 'details', component:DemandeDetailsComponent},
  { path: 'demandeDetails', component:DemandeDetailsComponent},
  {
    path: 'user-space',
    children: [{
      path: 'demandes',
      component: DemandeListComponent ,
      canActivate: [AuthGuard] },
    ]
  }

]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
