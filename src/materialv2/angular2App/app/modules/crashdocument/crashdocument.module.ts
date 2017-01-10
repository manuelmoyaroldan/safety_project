import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrashdocumentComponent } from './crashdocument.component';
import { CrashdocumentRoutingModule } from './crashdocument-routing.module';

import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DataListModule, DataTableModule, ContextMenuModule, MenuItem, DialogModule, ButtonModule, DropdownModule, CalendarModule, RadioButtonModule, InputTextModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , CrashdocumentRoutingModule
        , MaterialModule.forRoot()
        , FlexLayoutModule.forRoot()
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ButtonModule
        , DropdownModule
        , CalendarModule
        , RadioButtonModule
        , InputTextModule
    ],
    declarations: [CrashdocumentComponent]
})
export class CrashdocumentModule { }