import { Observable } from 'rxjs/Observable';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { EquipmenttypeService } from './equipmenttype.service';

import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';


@Component({
    selector: 'EquipmenttypeDialog',
    templateUrl: 'equipmenttype.dialog.html'    
})
export class EquipmenttypeDialog {
    jazzMessage = 'Jazzy jazz jazz';
    public current: any = {};

    constructor(public dialogRef: MdDialogRef<EquipmenttypeDialog>) {
    }
}