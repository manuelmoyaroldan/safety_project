import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { Configuration } from '../../app.constants';

import { CrashComponent } from './crash.component';
import { CrashDialog } from './crash.dialog';
import { CrashRoutingModule } from './crash-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , CrashRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [CrashComponent, CrashDialog],
    exports: [CrashDialog],
    entryComponents: [CrashDialog],
    providers: [Configuration]

})
export class CrashModule { }
