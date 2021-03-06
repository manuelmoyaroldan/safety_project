﻿import { Observable } from 'rxjs/Observable';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { EmployeeDialog } from './employee.dialog';

import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule, ScheduleModule } from 'primeng/primeng';

import './employee.component.scss';

//(window).jQuery = (window).$ = jQuery; // without this, the schedule can't find jQuery (not sure if better way)
//(window as any).$ = (window as any).fullCalendar = fullCalendar;

@Component({
    templateUrl: 'employee.component.html'
    , providers: [EmployeeService
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
        , ScheduleModule
    ]
    
})
export class EmployeeComponent implements OnInit {
    dialogRef: MdDialogRef<EmployeeDialog>;
    lastCloseResult: any;

    public list: any[] = [];
    public selected: any = {};
    public current: any = {};
    public myfecha: any;

    public menu_items: MenuItem[];
    public show_dialog: boolean = false;

    constructor(private _Service: EmployeeService, private viewContainerRef: ViewContainerRef, private dialog: MdDialog) { }

    ngOnInit(): void {
        //this._Service
        //    .getAll()
        //    .subscribe(data => this.list = data,
        //    error => console.log(error),
        //    () => console.log('Get all completed.'));

        this.menu_items = [
            { label: 'Edit', icon: 'fa-edit', command: (event: any) => this.click_Edit(this.selected) },
            { label: 'Activate', icon: 'fa-check-circle-o', command: (event: any) => this.activate() },
            { label: 'DeActivate', icon: 'fa-circle-o', command: (event: any) => this.deactivate() },
            { label: 'Delete', icon: 'fa-close', command: (event: any) => this.delete() }
        ];
    }

    open_Dialog(valueRec: any) {
        let config = new MdDialogConfig();

        config.viewContainerRef = this.viewContainerRef;
        //config.height = '80%';

        this.dialogRef = this.dialog.open(EmployeeDialog, config);
        this.dialogRef.componentInstance.current = JSON.parse(JSON.stringify(valueRec));

        this.dialogRef.afterClosed().subscribe(result => {
            if (result != undefined) {
                if (this.current.employeeId != undefined) { //Edit
                    Object.assign(valueRec, result);
                } else { //Add
                    this.list.push(result);
                }
            }
            this.dialogRef = null;
        });

    }

    click_Add(event: any) {
        //this.selected = {};
        //this.current = {};
        //this.show_dialog = true;

        //this.dialogRef = this.dialog.open(EmployeeDialog);

        //this.dialogRef.afterClosed().subscribe(result => {
        //    //this.lastCloseResult = result;
        //    this.dialogRef = null;
        //}); 

        //let config = new MdDialogConfig();

        //config.viewContainerRef = this.viewContainerRef;


        //this.dialogRef = this.dialog.open(EmployeeDialog, config);
        //this.dialogRef.componentInstance.jazzMessage = "holaaa";
        //this.dialogRef.componentInstance.current = {};

        //this.dialogRef.afterClosed().subscribe(result => {
        //    this.lastCloseResult = result;
        //    this.dialogRef = null;
        //});
        this.current = {};
        this.open_Dialog(this.current);
    }

    click_Edit(valueRec: any) {
        //this.current = Object.assign({}, this.selected);
        
        this.current = valueRec;
        //this.current = JSON.parse(JSON.stringify(valueRec));
        this.open_Dialog(this.current);

        //this.show_dialog = true;
    }

    click_DeActivate(valueRec: any) {
        this._Service.deactivate(valueRec)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    valueRec.isActive = false;
                }
                else {
                    console.log("update error");
                }
            });
    }

    click_Activate(valueRec: any) {
        this._Service.activate(valueRec)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    valueRec.isActive = true;
                }
                else {
                    console.log("update error");
                }
            });

    }

    click_Delete(valueRec: any) {
        this._Service
            .delete(valueRec)
            .then(() => {
                this.list = this.list.filter(h => h.employeeId !== valueRec.employeeId);
                this.selected = {};
            });
    }

    /**primeng*/
    onCancel(event: any) {
        this.show_dialog = false;
    }

    onRowSelect(event: any) {
        this.selected = event.data;
    }

    onRowUnselect(event: any) {
        this.selected = {};
    }

    onSubmit() {
        if (this.selected.employeeId != undefined) { //update
            this._Service.update(this.current)
                .subscribe(data => { this.show_dialog = false; this.selected = Object.assign({}, this.current); });

        } else { //create
            this._Service.create(this.current)
                .subscribe(data => { this.list.push(data); this.show_dialog = false; this.selected = data; });
        }
    }

    deactivate() {
        this._Service.deactivate(this.selected)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    this.selected.isActive = false;
                }
                else {
                    console.log("update error");
                }
            });
    }
    activate() {
        this._Service.activate(this.selected)
            .subscribe((status: any) => {
                if (status) {
                    console.log("updated");
                    this.selected.isActive = true;
                }
                else {
                    console.log("update error");
                }
            });
    }

    delete() {
        this._Service
            .delete(this.selected)
            .then(() => {
                this.list = this.list.filter(h => h.employeeId !== this.selected.employeeId);
                this.selected = {};
            });
    }
}


