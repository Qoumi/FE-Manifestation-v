import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemandeListComponent} from "./view/demande-user/demande-list/demande-list.component";
import {AuthGuard} from "../../../controller/guards/auth.guard";
import {RouterModule, Routes} from "@angular/router";
const routes:Routes=[

  {
    path: 'user-space',
    children: [{
      path: 'list',
      component: DemandeListComponent ,
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

