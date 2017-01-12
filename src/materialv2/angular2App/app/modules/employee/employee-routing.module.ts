import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        data: {
            title: 'Employee'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
