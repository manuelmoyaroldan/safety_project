import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { Berthingd3Component } from './berthingd3.component';

const routes: Routes = [
    {
        path: '',
        component: Berthingd3Component,
        data: {
            title: 'Berthingd3'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Berthingd3RoutingModule { }
