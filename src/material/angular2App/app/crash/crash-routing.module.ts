import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MaterialModule } from '@angular/material';

import { CrashComponent } from './crash.component';

const routes: Routes = [
    {
        path: '',
        component: CrashComponent,
        data: {
            title: 'Crash'
        }
    }
];

@NgModule({
    //imports: [RouterModule.forChild(routes), MaterialModule.forRoot()],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrashRoutingModule { }
