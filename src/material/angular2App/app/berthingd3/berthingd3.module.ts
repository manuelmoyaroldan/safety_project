import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { Berthingd3Component} from './berthingd3.component';
import { Berthingd3Dialog } from './berthingd3.dialog';
import { Berthingd3RoutingModule } from './berthingd3-routing.module';

import { D3Service } from 'd3-ng2-service'; //      <-- import statement

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , Berthingd3RoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [Berthingd3Component, Berthingd3Dialog],
    exports: [Berthingd3Dialog],
    providers: [D3Service], // <-- provider registration
    entryComponents: [Berthingd3Dialog]
    

})
export class Berthingd3Module { }
