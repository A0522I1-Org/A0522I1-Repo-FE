import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [ContractComponent, CreateComponent, ListComponent, UpdateComponent, DeleteComponent],
    imports: [
        CommonModule,
        ContractRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,

    ]
})
export class ContractModule { }
