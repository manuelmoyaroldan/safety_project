"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var equipment_service_1 = require('./equipment.service');
var primeng_1 = require('primeng/primeng');
var EquipmentComponent = (function () {
    function EquipmentComponent(_equipmentService) {
        this._equipmentService = _equipmentService;
        this.display = false;
        this.equipments = [];
        this.current = {};
        this.selected = {};
        this.message = "Hello from EquipmentComponent constructor";
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._equipmentService
            .getEquipments()
            .subscribe(function (data) { return _this.equipments = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.showDialog(); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.delete(); } }
        ];
    };
    EquipmentComponent.prototype.onRowSelect = function (event) {
    };
    EquipmentComponent.prototype.onRowUnselect = function (event) {
        this.selected = {};
    };
    EquipmentComponent.prototype.showDialog = function () {
        this.display = true;
    };
    EquipmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this._equipmentService.createEquipment(this.selected)
            .subscribe(function (data) { return _this.selected = data; });
    };
    EquipmentComponent.prototype.delete = function () {
        var _this = this;
        this.selected.isActive = false;
        this._equipmentService
            .deleteEquipment(this.selected)
            .then(function () {
            _this.equipments = _this.equipments.filter(function (h) { return h.equipmentId !== _this.selected.equipmentId; });
        });
    };
    EquipmentComponent = __decorate([
        core_1.Component({
            selector: 'equipmentcomponent',
            template: require('./equipment.component.html'),
            providers: [equipment_service_1.EquipmentService, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.SharedModule, primeng_1.DialogModule, primeng_1.ContextMenuModule]
        }), 
        __metadata('design:paramtypes', [equipment_service_1.EquipmentService])
    ], EquipmentComponent);
    return EquipmentComponent;
}());
exports.EquipmentComponent = EquipmentComponent;
//# sourceMappingURL=equipment.component.js.map