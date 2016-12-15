import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/testDataService';

import {  } from '@angular/material';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    providers: [TestDataService]
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];
    public posicionx: any = 10;
    public posiciony: any = 10;

    constructor(private _dataService: TestDataService) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(
            data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete')
            );
    }

    testclick() {
        window.alert("click");
    }
}
