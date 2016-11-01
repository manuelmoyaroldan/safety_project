import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EquipmentComponent } from './equipment/equipment.component'; 
import { EquipmenttypeSelector } from './equipmenttype/equipmenttype.selector';

import { TestDataService } from './services/testDataService';

import { CoreModule }   from './core/core.module';

import { InputTextModule, DataTableModule, SharedModule, DropdownModule } from 'primeng/primeng';

//import {InputTextModule, CalendarModule, CheckboxModule, PanelModule, DropdownModule, DataTableModule} from 'primeng/primeng';

//import '../../node_modules/jquery/dist/jquery.min.js'; 
//import '../resources/layout/js/layout.js';  
 
@NgModule({ 
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        CoreModule, //Singleton Objects
        JsonpModule, InputTextModule, DataTableModule, SharedModule, DropdownModule //, InputTextModule, CalendarModule, CheckboxModule, PanelModule, DropdownModule, DataTableModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent, EquipmentComponent, EquipmenttypeSelector
    ],
    providers: [
        TestDataService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}