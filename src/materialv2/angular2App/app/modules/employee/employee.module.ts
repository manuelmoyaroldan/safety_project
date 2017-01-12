import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Configuration } from '../../app.constants';

import { EmployeeComponent } from './employee.component';
import { EmployeeDialog } from './employee.dialog';
import { EmployeeRoutingModule } from './employee-routing.module';

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule, ScheduleModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , FlexLayoutModule.forRoot()
        , CommonModule
        , FormsModule
        , EmployeeRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
        , ScheduleModule
    ],
    declarations: [EmployeeComponent, EmployeeDialog],
    exports: [EmployeeDialog],
    entryComponents: [EmployeeDialog],
    providers: [Configuration]

})
export class EmployeeModule { }
