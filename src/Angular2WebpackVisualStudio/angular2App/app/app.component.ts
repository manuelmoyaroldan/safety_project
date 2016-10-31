import { Observable } from 'rxjs/Observable';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

import { Router } from '@angular/router';  
   
import {DataService} from './core/services/data.service';
 
//declare var Ultima: any;         
 
//require('style!../resources/layout/css/layout-indigo.css');
//import '../resources/demo/js/jquery.deps.js';
//import '../resources/layout/js/layout.js';    
   
@Component({   
    selector: 'my-app',  
    template: require('./app.component.html'),
    providers: [DataService]
    //styles: [String(require('../resources/layout/css/layout-indigo.css'))]//, String(require('../resources/theme/theme-indigo.css')), String(require('../resources/primeng.min.css'))]
})
     

export class AppComponent implements OnInit {//AfterViewInit {

    user: any = {};

    constructor(private router: Router, private el: ElementRef, private dataService: DataService) {
        
    }

    ngOnInit() {
        //console.log("cargando componente");
        //this.dataService
        //    .getUser()
        //    .subscribe(data => this.user = data,
        //    error => console.log('Error' + error),
        //    () => console.log(this.user));
        this.dataService
            .getUser()
            .subscribe(data => this.user = data);

    }

    ngAfterViewInit() {
        //Ultima.init(this.el.nativeElement);
    }
}