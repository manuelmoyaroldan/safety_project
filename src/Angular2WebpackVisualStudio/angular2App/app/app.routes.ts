import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EquipmentComponent } from './equipment/equipment.component';

import { TestDataService } from './services/testDataService';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent },
    { path: '', component: EquipmentComponent },
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'equipment', component: EquipmentComponent }
];

export const routing = RouterModule.forRoot(appRoutes);