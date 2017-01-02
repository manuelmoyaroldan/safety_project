import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { EquipmentComponent } from './equipment.component';

const routes: Routes = [
    {
        path: '',
        component: EquipmentComponent,
        data: {
            title: 'Equipment'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipmentRoutingModule { }
