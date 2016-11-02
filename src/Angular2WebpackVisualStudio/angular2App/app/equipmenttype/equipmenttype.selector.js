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
var equipmenttype_service_1 = require('./equipmenttype.service');
var EquipmenttypeSelector = (function () {
    function EquipmenttypeSelector(_equipmenttypeService) {
        this._equipmenttypeService = _equipmenttypeService;
        this.list = [];
        this.listitem = [];
        this.selecteditem = {};
    }
    EquipmenttypeSelector.prototype.ngOnInit = function () {
        var _this = this;
        this._equipmenttypeService
            .getEquipmenttypes()
            .subscribe(function (data) { return _this.list = data; }, function (error) { return console.log(error); }, function () { return _this.loadSelectItem(); });
    };
    EquipmenttypeSelector.prototype.loadSelectItem = function () {
        this.listitem = [];
        this.listitem.push({ label: '(Select Item)', value: {} });
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            this.listitem.push({ label: item.name, value: item });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EquipmenttypeSelector.prototype, "selected", void 0);
    EquipmenttypeSelector = __decorate([
        core_1.Component({
            selector: 'equipmenttypeselector',
            template: require('./equipmenttype.selector.html'),
            providers: [equipmenttype_service_1.EquipmenttypeService]
        }), 
        __metadata('design:paramtypes', [equipmenttype_service_1.EquipmenttypeService])
    ], EquipmenttypeSelector);
    return EquipmenttypeSelector;
}());
exports.EquipmenttypeSelector = EquipmenttypeSelector;
//# sourceMappingURL=equipmenttype.selector.js.map