import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
  
  
declare var Ultima: any;        
 
//require('style!../resources/layout/css/layout-indigo.css');
//import '../resources/demo/js/jquery.deps.js';
//import '../resources/layout/js/layout.js';   
 
@Component({  
    selector: 'my-app', 
    template: require('./app.component.html'),
    styles: [String(require('../resources/layout/css/layout-indigo.css')), String(require('../resources/theme/theme-indigo.css')), String(require('../resources/primeng.min.css'))]
})
     

export class AppComponent implements AfterViewInit {

    
    constructor(private router: Router, private el: ElementRef) {
    }

    ngAfterViewInit() {
          
        Ultima.init(this.el.nativeElement);
    }
}