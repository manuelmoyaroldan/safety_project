﻿import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { EquipmenttypeService } from './equipmenttype.service';

import { DropdownModule, SelectItem } from 'primeng/primeng';

@Component({
    selector: 'equipmenttypeselector'
    , templateUrl: 'equipmenttype.selector.html'
    , providers: [EquipmenttypeService, DropdownModule]
})
export class EquipmenttypeSelector implements OnInit {
    //private currentSelectedItem: MachineItem;
    //@Output() selectedItemChange: EventEmitter<MachineItem> = new EventEmitter<MachineItem>();

    //@Input() set selectedItem(machineItem: MachineItem) {
    //    this.currentSelectedItem = machineItem;
    //    this.selectedItemChange.emit(machineItem);
    //}

    //get selectedItem(): MachineItem {
    //    return this.currentSelectedItem;
    //}
    private currentSelectedItem: any;
    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() set selectedItem(machineItem: any) {
        this.currentSelectedItem = machineItem;
        this.selectedItemChange.emit(machineItem);
        //console.log("set "+machineItem);
    }

    get selectedItem(): any {
        //console.log("get " + this.currentSelectedItem);
        return this.currentSelectedItem;
    }

    //@Input() selected: any;

    public list: any[] = [];
    public listitem: SelectItem[] = [];
    //public selecteditem: any = {};

    constructor(private _Service: EquipmenttypeService) {

    }

    ngOnInit(): void {
        this._Service
            .getAll()
            .subscribe(data => this.list = data,
            error => console.log(error),
            () => this.loadSelectItem());

    }

    private loadSelectItem() {
        this.listitem = [];
        this.listitem.push({ label: '(Select Item)', value: {} })
        for (let item of this.list) {
            this.listitem.push({ label: item.name, value: item });
        }
    }
}