import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {DataService} from '../core/services/data.service';
import { EquipmentService } from './equipment.service';

import { Equipment, EquipmentType } from '../shared/interfaces';

import { InputTextModule, DataTableModule, SharedModule, DialogModule, ContextMenuModule, MenuItem } from 'primeng/primeng';

@Component({
    selector: 'equipmentcomponent',
    template: require('./equipment.component.html'),
    providers: [EquipmentService, InputTextModule, DataTableModule, SharedModule, DialogModule, ContextMenuModule]
})

export class EquipmentComponent implements OnInit {

    public display: boolean = false;
    public message: string;
    public equipments: any[] = [];
    public current: any = {} ;
    public selected: any = {};

    public items: MenuItem[];

    constructor(private _equipmentService: EquipmentService) {
        this.message = "Hello from EquipmentComponent constructor";
    }

    ngOnInit() {
        this._equipmentService
            .getEquipments()
            .subscribe(data => this.equipments = data,
            error => console.log(error),
            () => console.log('Get all complete'));

        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.showDialog() },
            { label: 'Delete', icon: 'fa-close', command: (event) => this.onSubmit() }
        ];
    }
    
    onRowSelect(event) {
    }

    onRowUnselect(event) {
        //this.selected = new Equipment();
        this.selected = {};
    }
    showDialog() {
        this.display = true;
    }
    onSubmit() {
        //this._equipmentService.updateEquipment(this.selected)
        //    .subscribe((status: any) => {
        //        if (status) {
        //            console.log("updated");
        //            //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
        //            //this.customerForm.form.markAsPristine();
        //            //this.router.navigate(['/']);
        //        }
        //        else {
        //            console.log("update error");
        //            //this.errorMessage = 'Unable to save customer';
        //        }
        //    });
        this._equipmentService.createEquipment(this.selected)
            .subscribe(data=> this.selected=data);
    }


}
