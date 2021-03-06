﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { BerthingComponent} from './berthing.component';
import { BerthingDialog } from './berthing.dialog';
import { BerthingRoutingModule } from './berthing-routing.module';

import { D3Service } from 'd3-ng2-service'; //      <-- import statement

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , BerthingRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [BerthingComponent, BerthingDialog],
    exports: [BerthingDialog],
    providers: [D3Service], // <-- provider registration
    entryComponents: [BerthingDialog]
    

})
export class BerthingModule { }
