import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { EquipmentComponent} from './equipment.component';
import { EquipmentDialog } from './equipment.dialog';
import { EquipmentRoutingModule } from './equipment-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , EquipmentRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [EquipmentComponent, EquipmentDialog],
    exports: [EquipmentDialog],
    entryComponents: [EquipmentDialog]

})
export class EquipmentModule { }
