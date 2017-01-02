import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashdocumentComponent } from './crashdocument.component';

const routes: Routes = [
    {
        path: '',
        component: CrashdocumentComponent,
        data: {
            title: 'Travel'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrashdocumentRoutingModule { }