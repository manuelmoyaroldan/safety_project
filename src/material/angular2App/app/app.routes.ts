import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestDataService } from './services/testDataService';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'equipmenttype',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./equipmenttype/equipmenttype.module')['EquipmenttypeModule']); }); })
    },

    {
        path: 'berthing',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./berthing/berthing.module')['BerthingModule']); }); })
    }

];

export const routing = RouterModule.forRoot(appRoutes);