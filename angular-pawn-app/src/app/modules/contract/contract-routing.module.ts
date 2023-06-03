import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractComponent} from "./contract.component";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteComponent} from "./delete/delete.component";


const routes: Routes = [{path:'contract',component:ContractComponent,children:[
    {
      path: '', component: ListComponent
    },
    {
      path: 'create', component: CreateComponent
    },
    {
      path: 'contract/:idContract', component: ListComponent
    },
    {
      path:'delete',component:DeleteComponent
    }
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
