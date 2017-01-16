import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'crash',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/crash/crash.module')['CrashModule']); }); })
    },
    {
        path: 'crashdocument/:id',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/crashdocument/crashdocument.module')['CrashdocumentModule']); }); })
    },
    {
        path: 'equipment',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/equipment/equipment.module')['EquipmentModule']); }); })
    },
    {
        path: 'company',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/company/company.module')['CompanyModule']); }); })
    },
    {
        path: 'employee',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/employee/employee.module')['EmployeeModule']); }); })
    },
    {
        path: 'equipmenttype',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/equipmenttype/equipmenttype.module')['EquipmenttypeModule']); }); })
    },
    {
        path: 'berthing',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/berthing/berthing.module')['BerthingModule']); }); })
    },
    {
        path: 'berthingd3',
        loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./modules/berthingd3/berthingd3.module')['Berthingd3Module']); }); })
    }

];

export const routing = RouterModule.forRoot(appRoutes);