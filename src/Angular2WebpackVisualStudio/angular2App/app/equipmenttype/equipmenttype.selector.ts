import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { EquipmenttypeService } from './equipmenttype.service';

import { DropdownModule, SelectItem } from 'primeng/primeng';

@Component({
    selector: 'equipmenttypeselector',
    template: require('./equipmenttype.selector.html'),
    providers: [EquipmenttypeService]
})

export class EquipmenttypeSelector implements OnInit {
    @Input() selected: any;

    public list: any[] = [];
    public listitem: SelectItem[]=[];
    public selecteditem: any= {};

    constructor(private _equipmenttypeService: EquipmenttypeService) {
    }

    ngOnInit() {
        this._equipmenttypeService
            .getEquipmenttypes()
            .subscribe(data => this.list= data,
            error => console.log(error),
            () => this.loadSelectItem());
    }

    private loadSelectItem() {
        this.listitem = [];
        this.listitem.push({ label: '(Select Item)', value: {}})
        for (let item of this.list) {
            this.listitem.push({ label: item.name, value: item });
        }
    }
}