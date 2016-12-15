import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { BerthingComponent } from './berthing.component';

const routes: Routes = [
    {
        path: '',
        component: BerthingComponent,
        data: {
            title: 'Berthing'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BerthingRoutingModule { }
