import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Configuration } from './app.constants';
import { routing } from './app.routes';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { TestDataService } from './services/testDataService';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NAV_DROPDOWN_DIRECTIVES,
        AboutComponent,
        HomeComponent
    ],
    providers: [
        TestDataService,
        Configuration
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }