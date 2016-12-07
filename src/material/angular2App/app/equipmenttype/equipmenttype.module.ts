import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from  '@angular/material';

import { EquipmenttypeComponent, EquipmenttypeDialog } from './equipmenttype.component';
import { EquipmenttypeRoutingModule } from './equipmenttype-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , EquipmenttypeRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [EquipmenttypeComponent, EquipmenttypeDialog],
    entryComponents: [EquipmenttypeDialog]

})
export class EquipmenttypeModule { }
