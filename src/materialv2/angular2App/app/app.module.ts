import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Configuration } from './app.constants';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        BrowserModule,
        FormsModule,
        routing,
        SharedModule.forRoot(),
        AboutModule,
        HomeModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }