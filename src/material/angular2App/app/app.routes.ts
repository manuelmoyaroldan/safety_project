import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestDataService } from './services/testDataService';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'crash',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./crash/crash.module')['CrashModule']); }); })
    },
    {
        path: 'crashdocument/:id',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./crashdocument/crashdocument.module')['CrashdocumentModule']); }); })
    },
    {
        path: 'equipment',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./equipment/equipment.module')['EquipmentModule']); }); })
    },
    {
        path: 'equipmenttype',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./equipmenttype/equipmenttype.module')['EquipmenttypeModule']); }); })
    },
    {
        path: 'berthing',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./berthing/berthing.module')['BerthingModule']); }); })
    },
    {
        path: 'berthingd3',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./berthingd3/berthingd3.module')['Berthingd3Module']); }); })
    }

];

export const routing = RouterModule.forRoot(appRoutes);