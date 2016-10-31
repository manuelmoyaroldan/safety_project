import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {DataService} from '../core/services/data.service';
import {EquipmentService} from './equipment.service';

import {InputTextModule, DataTableModule, SharedModule} from 'primeng/primeng';

@Component({
    selector: 'equipmentcomponent',
    template: require('./equipment.component.html'),
    providers: [EquipmentService, InputTextModule, DataTableModule, SharedModule]
})

export class EquipmentComponent implements OnInit {

    public message: string;
    public equipments: any[] = [];
    public current: any = {};

    constructor(private _equipmentService: EquipmentService) {
        this.message = "Hello from EquipmentComponent constructor";
    }

    ngOnInit() {
        this._equipmentService
            .getEquipments()
            .subscribe(data => this.equipments = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
