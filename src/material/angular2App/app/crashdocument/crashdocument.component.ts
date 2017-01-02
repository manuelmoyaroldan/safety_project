import { Observable } from 'rxjs/Observable';
import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { CrashdocumentService } from './crashdocument.service';

import { DataListModule, DataTableModule, MenuItem, ContextMenuModule, DialogModule } from 'primeng/primeng';

@Component({
    templateUrl: 'crashdocument.component.html'
    , providers: [CrashdocumentService
        , DataListModule
        , DataTableModule
        , ContextMenuModule
        , DialogModule
    ]
   
})
export class CrashdocumentComponent implements OnInit {

    public idrec: Number = 0;
    public myparams: any;

    public doc_state: any = 1;
    public doc_state_prev: any = 1;
    public show_toolbar: any = 1;
    public prev_state: any = 0;
    public next_state: any = 2;

    public selected: any = {};
    public current: any = {};

    public selecteddetail: any = {};
    public currentdetail: any = {};


    public menu_items: MenuItem[];
    public show_dialog: boolean = false;

    constructor(private _Service: CrashdocumentService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            //get parameter
            try {
                this.idrec = +params['id']; // (+) converts string 'id' to a number
            } catch (e) { this.idrec = 0; }

            //asses parameter
            if (this.idrec > 0) {
                this._Service
                    .get(this.idrec)
                    .subscribe(data => this.current = data,
                    error => console.log(error),
                    () => console.log('Get travel completed'));
            } else {
                //create travel
                //this.current = { travelId: 0, destination: '', phaseId: 1, traveldetail: [], advancedetail: [] };
            }
            // In a real app: dispatch action to load the details here.
        });

    }

    save_traveldetail(event: any) {

        if (this.currentdetail.traveldetailId == 0 || this.currentdetail.traveldetailId == null) { //new
            if (this.current.traveldetail == undefined || this.current.traveldetail == null) {
                this.current.traveldetail = [];
            }
            this.currentdetail.traveldetailId = -1;
            this.current.traveldetail.push(this.currentdetail);
        } else {
            Object.assign(this.selecteddetail, this.currentdetail);
        }

        
    }
    new_traveldetail(event: any) {
        this.currentdetail = {};
        
    }
    edit_traveldetail(value: any) {
        this.selecteddetail = value;
        this.currentdetail = JSON.parse(JSON.stringify(this.selecteddetail));
        
    }

}