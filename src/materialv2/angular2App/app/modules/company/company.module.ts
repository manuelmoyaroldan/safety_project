import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule, MdSnackBar } from '@angular/material';

import { Configuration } from '../../app.constants';

import { CompanyComponent } from './company.component';
import { CompanyDialog } from './company.dialog';
import { CompanyRoutingModule } from './company-routing.module';



import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        MaterialModule
        , CommonModule
        , FormsModule
        , CompanyRoutingModule
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
    ],
    declarations: [CompanyComponent, CompanyDialog],
    exports: [CompanyDialog],
    entryComponents: [CompanyDialog],
    providers: [Configuration]

})
export class CompanyModule { }
