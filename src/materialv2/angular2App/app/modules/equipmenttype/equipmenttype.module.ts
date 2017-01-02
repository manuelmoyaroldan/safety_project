import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { EquipmenttypeComponent} from './equipmenttype.component';
import { EquipmenttypeDialog } from './equipmenttype.dialog';
import { EquipmenttypeSelector } from './equipmenttype.selector';
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
    declarations: [EquipmenttypeComponent, EquipmenttypeDialog, EquipmenttypeSelector],
    exports: [EquipmenttypeDialog, EquipmenttypeSelector],
    entryComponents: [EquipmenttypeDialog]

})
export class EquipmenttypeModule { }
