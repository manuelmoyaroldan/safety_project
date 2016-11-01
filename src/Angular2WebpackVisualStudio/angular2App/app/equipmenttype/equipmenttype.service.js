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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var EquipmenttypeService = (function () {
    function EquipmenttypeService(_http) {
        var _this = this;
        this._http = _http;
        this.equipmenttypeBaseUrl = 'http://localhost:58333/api/equipmenttype';
        this.getEquipmenttypes = function () {
            return _this._http.get(_this.equipmenttypeBaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
    }
    EquipmenttypeService.prototype.handleError = function (error) {
        console.error('API Equipmenttype server error:', error);
        console.log('error');
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'server error');
    };
    EquipmenttypeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EquipmenttypeService);
    return EquipmenttypeService;
}());
exports.EquipmenttypeService = EquipmenttypeService;
//# sourceMappingURL=equipmenttype.service.js.map