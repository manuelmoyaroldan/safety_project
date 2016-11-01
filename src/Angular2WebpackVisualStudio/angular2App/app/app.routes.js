"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var equipment_component_1 = require('./equipment/equipment.component');
var appRoutes = [
    { path: '', component: equipment_component_1.EquipmentComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'equipment', component: equipment_component_1.EquipmentComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map