webpackJsonp([6],{

/***/ 1080:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crash_component__ = __webpack_require__(1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crash_dialog__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crash_routing_module__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "CrashModule", function() { return CrashModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CrashModule = (function () {
    function CrashModule() {
    }
    CrashModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__crash_routing_module__["a" /* CrashRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__crash_component__["a" /* CrashComponent */], __WEBPACK_IMPORTED_MODULE_6__crash_dialog__["a" /* CrashDialog */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__crash_dialog__["a" /* CrashDialog */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__crash_dialog__["a" /* CrashDialog */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CrashModule);
    return CrashModule;
}());


/***/ },

/***/ 1095:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var toPromise_1 = __webpack_require__(629);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 1541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crash_service__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crash_dialog__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrashComponent = (function () {
    function CrashComponent(_Service, viewContainerRef, dialog) {
        this._Service = _Service;
        this.viewContainerRef = viewContainerRef;
        this.dialog = dialog;
        this.list = [];
        this.selected = {};
        this.current = {};
        this.show_dialog = false;
    }
    CrashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Service
            .getAll()
            .subscribe(function (data) { return _this.list = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all completed.'); });
        this.menu_items = [
            { label: 'Edit', icon: 'fa-edit', command: function (event) { return _this.click_Edit(_this.selected); } },
            { label: 'Activate', icon: 'fa-check-circle-o', command: function (event) { return _this.activate(); } },
            { label: 'DeActivate', icon: 'fa-circle-o', command: function (event) { return _this.deactivate(); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.delete(); } }
        ];
    };
    CrashComponent.prototype.open_Dialog = function (valueRec) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__crash_dialog__["a" /* CrashDialog */], config);
        this.dialogRef.componentInstance.current = JSON.parse(JSON.stringify(valueRec));
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (_this.current.crashId != undefined) {
                    Object.assign(valueRec, result);
                }
                else {
                    _this.list.push(result);
                }
            }
            _this.dialogRef = null;
        });
    };
    CrashComponent.prototype.click_Add = function (event) {
        this.current = {};
        this.open_Dialog(this.current);
    };
    CrashComponent.prototype.click_Edit = function (valueRec) {
        this.current = valueRec;
        this.open_Dialog(this.current);
    };
    CrashComponent.prototype.click_DeActivate = function (valueRec) {
        this._Service.deactivate(valueRec)
            .subscribe(function (status) {
            if (status) {
                console.log("updated");
                valueRec.isActive = false;
            }
            else {
                console.log("update error");
            }
        });
    };
    CrashComponent.prototype.click_Activate = function (valueRec) {
        this._Service.activate(valueRec)
            .subscribe(function (status) {
            if (status) {
                console.log("updated");
                valueRec.isActive = true;
            }
            else {
                console.log("update error");
            }
        });
    };
    CrashComponent.prototype.click_Delete = function (valueRec) {
        var _this = this;
        this._Service
            .delete(valueRec)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.crashId !== valueRec.crashId; });
            _this.selected = {};
        });
    };
    CrashComponent.prototype.onCancel = function (event) {
        this.show_dialog = false;
    };
    CrashComponent.prototype.onRowSelect = function (event) {
        this.selected = event.data;
    };
    CrashComponent.prototype.onRowUnselect = function (event) {
        this.selected = {};
    };
    CrashComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.selected.crashId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.show_dialog = false; _this.selected = Object.assign({}, _this.current); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.list.push(data); _this.show_dialog = false; _this.selected = data; });
        }
    };
    CrashComponent.prototype.deactivate = function () {
        var _this = this;
        this._Service.deactivate(this.selected)
            .subscribe(function (status) {
            if (status) {
                console.log("updated");
                _this.selected.isActive = false;
            }
            else {
                console.log("update error");
            }
        });
    };
    CrashComponent.prototype.activate = function () {
        var _this = this;
        this._Service.activate(this.selected)
            .subscribe(function (status) {
            if (status) {
                console.log("updated");
                _this.selected.isActive = true;
            }
            else {
                console.log("update error");
            }
        });
    };
    CrashComponent.prototype.delete = function () {
        var _this = this;
        this._Service
            .delete(this.selected)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.crashId !== _this.selected.crashId; });
            _this.selected = {};
        });
    };
    CrashComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1568),
            providers: [__WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"]) === 'function' && _c) || Object])
    ], CrashComponent);
    return CrashComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crash_service__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrashDialog = (function () {
    function CrashDialog(_Service, dialogRef, _snackbar) {
        this._Service = _Service;
        this.dialogRef = dialogRef;
        this._snackbar = _snackbar;
        this.current = {};
    }
    CrashDialog.prototype.click_Close = function () {
        this.dialogRef.close();
    };
    CrashDialog.prototype.click_Save = function () {
        var _this = this;
        if (this.current.crashId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); _this._snackbar.open("test", "test2"); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); });
        }
    };
    CrashDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'CrashDialog',
            template: __webpack_require__(1569),
            providers: [__WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__crash_service__["a" /* CrashService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _c) || Object])
    ], CrashDialog);
    return CrashDialog;
    var _a, _b, _c;
}());


/***/ },

/***/ 1543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrashService = (function () {
    function CrashService(_http, _conf) {
        var _this = this;
        this._http = _http;
        this._conf = _conf;
        this.BaseUrl = this._conf.Server + 'api/crash';
        this.getAll = function () {
            return _this._http.get(_this.BaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
    }
    CrashService.prototype.update = function (current) {
        return this._http.put(this.BaseUrl + '/' + current.crashId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashService.prototype.deactivate = function (current) {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.crashId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashService.prototype.activate = function (current) {
        return this._http.put(this.BaseUrl + '/activate/' + current.crashId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashService.prototype.create = function (crash) {
        return this._http.post(this.BaseUrl, crash).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashService.prototype.delete = function (current) {
        return this._http.delete(this.BaseUrl + '/' + current.crashId).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    CrashService.prototype.handleError = function (error) {
        console.error('API Crash server error:', error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'server error');
    };
    CrashService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */]) === 'function' && _b) || Object])
    ], CrashService);
    return CrashService;
    var _a, _b;
}());


/***/ },

/***/ 1556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crash_component__ = __webpack_require__(1541);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__crash_component__["a" /* CrashComponent */],
        data: {
            title: 'Crash'
        }
    }
];
var CrashRoutingModule = (function () {
    function CrashRoutingModule() {
    }
    CrashRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], CrashRoutingModule);
    return CrashRoutingModule;
}());


/***/ },

/***/ 1568:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <md-card>\r\n        <md-card-header>\r\n            <md-icon md-card-avatar style=\"line-height:44px;color: lightgray;\">folder_open</md-icon>\r\n            <md-card-title style=\"padding-top: 14px;\">CRASH</md-card-title>\r\n\r\n            <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n\r\n            <button md-icon-button [md-menu-trigger-for]=\"menu\" md-tooltip=\"list options\" tooltip-position=\"below\">\r\n                <md-icon>more_vert</md-icon>\r\n            </button>\r\n\r\n            <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                    <md-icon style=\"color: #757575;\"> refresh </md-icon>\r\n                    <span> Refresh </span>\r\n                </button>\r\n                <button md-menu-item (click)=\"click_Add()\">\r\n                    <md-icon style=\"color: #757575;\"> add </md-icon>\r\n                    <span> Add </span>\r\n                </button>\r\n            </md-menu>\r\n        </md-card-header>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n            <p-dataTable [value]=\"list\"\r\n                         selectionMode=\"single\"\r\n                         [(selection)]=\"selected\"\r\n                         scrollable=\"true\"\r\n                         scrollHeight=\"200px\"\r\n                         [contextMenu]=\"cm\"\r\n                         (onRowSelect)=\"onRowSelect($event)\"\r\n                         (onRowUnselect)=\"onRowUnselect($event)\"\r\n                         #dt>\r\n                <!--<header>User List</header>\r\n                <footer></footer>-->\r\n                <p-column field=\"equipmentId\" header=\"Id\"></p-column>\r\n                <p-column field=\"name\" header=\"Name\"></p-column>\r\n                <p-column field=\"equipmenttype\" header=\"Type\">\r\n                    <template let-col let-item=\"rowData\" pTemplate type=\"body\">\r\n                        <span>{{item.equipmenttype?item.equipmenttype.name:any}}</span>\r\n                    </template>\r\n                </p-column>\r\n                <p-column field=\"isActive\" header=\"Active\"></p-column>\r\n            </p-dataTable>\r\n            <p-contextMenu #cm [model]=\"menu_items\"  appendTo=\"body\"></p-contextMenu>\r\n            <!--<md-list>\r\n                <md-list-item *ngFor=\"let item of list\">\r\n                    <md-icon md-list-avatar style=\"padding-top: 10px;color: lightgray;\">label_outline</md-icon>\r\n                    <div md-line><span>{{item.name}} {{item.equipmenttype?item.equipmenttype.name:'--'}}</span></div>\r\n                    <p md-line> {{item.isActive?'Enabled':'Disabled'}} </p>\r\n                    <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n                    <button md-icon-button md-tooltip=\"edit item\" (click)=\"click_Edit(item)\" tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">edit</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"deactivate item\" (click)=\"click_DeActivate(item)\" tooltip-position=\"below\" *ngIf=\"item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_checked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"activate item\" (click)=\"click_Activate(item)\" tooltip-position=\"below\" *ngIf=\"!item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_unchecked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"delete item\" (click)=\"click_Delete(item)\"  tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">delete_forever</md-icon>\r\n                    </button>\r\n                </md-list-item>\r\n                <md-divider></md-divider>\r\n            </md-list>-->\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n</div>"

/***/ },

/***/ 1569:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div md-dialog-title>\r\n        Equipment\r\n    </div>\r\n    <md-dialog-content>\r\n        <div style=\"min-height:150px;\">\r\n            <input [(ngModel)]=\"current.name\" placeholder=\"name\">\r\n        </div>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button type=\"button\" (click)=\"click_Close()\">Cancel</button>\r\n        <button type=\"button\" (click)=\"click_Save()\">Save</button>\r\n    </md-dialog-actions>\r\n</div>"

/***/ }

});
//# sourceMappingURL=6.bundle.js.map