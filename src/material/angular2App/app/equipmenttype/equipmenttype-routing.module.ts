import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { EquipmenttypeComponent, EquipmenttypeDialog } from './equipmenttype.component';

const routes: Routes = [
    {
        path: '',
        component: EquipmenttypeComponent,
        data: {
            title: 'Equipmenttype'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipmenttypeRoutingModule { }
