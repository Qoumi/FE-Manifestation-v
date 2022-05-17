import { NgModule } from '@angular/core';
import {DemandeEnCoursComponent} from "./view/demande-admin/demande-en-cours/demande-en-cours.component";
import { CommonModule } from '@angular/common';
import {AuthGuard} from "../../../controller/guards/auth.guard";
import {RouterModule, Routes} from "@angular/router";
const routes:Routes=[

  {
    path: 'admin-space',
    children: [{
      path: 'list',
      component:DemandeEnCoursComponent ,
      canActivate: [AuthGuard]      }]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
  export class UserRoutingModule {
  }

