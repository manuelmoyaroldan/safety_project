import { HomeRoutes } from './home.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpModule,
        HomeRoutes
    ],
    
    declarations: [
        HomeComponent
    ],

    exports: [
        HomeComponent
    ]
})

export class HomeModule { }