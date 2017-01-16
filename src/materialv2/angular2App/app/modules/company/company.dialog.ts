import { Observable } from 'rxjs/Observable';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { CompanyService } from './company.service';

import { MdDialog, MdDialogRef, MdDialogConfig, MdSnackBar} from '@angular/material';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';


@Component({
    selector: 'CompanyDialog',
    templateUrl: 'company.dialog.html',
    providers: [CompanyService]   
})
export class CompanyDialog {
    public current: any = {};

    constructor(private _Service: CompanyService, public dialogRef: MdDialogRef<CompanyDialog>, public _snackbar: MdSnackBar) {
    }

    click_Close() {
        this.dialogRef.close();
    }

    click_Save() {
        if (this.current.companyId != undefined) { //update
            this._Service.update(this.current)
                .subscribe(data => { this.dialogRef.close(data); this._snackbar.open("test", "test2"); });

        } else { //create
            this._Service.create(this.current)
                .subscribe(data => { this.dialogRef.close(data); });
        }
    }


}