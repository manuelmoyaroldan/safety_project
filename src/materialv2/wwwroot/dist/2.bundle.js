webpackJsonp([2,3],{

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmenttypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipmenttypeService = (function () {
    function EquipmenttypeService(_http, _conf) {
        var _this = this;
        this._http = _http;
        this._conf = _conf;
        this.BaseUrl = this._conf.Server + 'api/equipmenttype';
        this.getAll = function () {
            return _this._http.get(_this.BaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
    }
    EquipmenttypeService.prototype.update = function (current) {
        return this._http.put(this.BaseUrl + '/' + current.equipmenttypeId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmenttypeService.prototype.deactivate = function (current) {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.equipmenttypeId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmenttypeService.prototype.activate = function (current) {
        return this._http.put(this.BaseUrl + '/activate/' + current.equipmenttypeId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmenttypeService.prototype.create = function (equipment) {
        return this._http.post(this.BaseUrl, equipment).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmenttypeService.prototype.delete = function (current) {
        return this._http.delete(this.BaseUrl + '/' + current.equipmenttypeId).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    EquipmenttypeService.prototype.handleError = function (error) {
        console.error('API Equipmenttype server error:', error);
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
    EquipmenttypeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */]) === 'function' && _b) || Object])
    ], EquipmenttypeService);
    return EquipmenttypeService;
    var _a, _b;
}());


/***/ },

/***/ 1056:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipmenttype_dialog__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmenttypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EquipmenttypeComponent = (function () {
    function EquipmenttypeComponent(_Service, viewContainerRef, dialog) {
        this._Service = _Service;
        this.viewContainerRef = viewContainerRef;
        this.dialog = dialog;
        this.list = [];
        this.selected = {};
        this.current = {};
        this.show_dialog = false;
    }
    EquipmenttypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Service
            .getAll()
            .subscribe(function (data) { return _this.list = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all completed.'); });
        this.menu_items = [
            { label: 'Activate', icon: 'fa-check-circle-o', command: function (event) { return _this.activate(); } },
            { label: 'DeActivate', icon: 'fa-circle-o', command: function (event) { return _this.deactivate(); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.delete(); } }
        ];
    };
    EquipmenttypeComponent.prototype.open_Dialog = function (valueRec) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = this.viewContainerRef;
        config.height = '80%';
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__equipmenttype_dialog__["a" /* EquipmenttypeDialog */], config);
        this.dialogRef.componentInstance.current = JSON.parse(JSON.stringify(valueRec));
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (_this.current.equipmenttypeId != undefined) {
                    Object.assign(valueRec, result);
                }
                else {
                    _this.list.push(result);
                }
            }
            _this.dialogRef = null;
        });
    };
    EquipmenttypeComponent.prototype.click_Add = function (event) {
        this.current = {};
        this.open_Dialog(this.current);
    };
    EquipmenttypeComponent.prototype.click_Edit = function (valueRec) {
        this.current = valueRec;
        this.open_Dialog(this.current);
    };
    EquipmenttypeComponent.prototype.click_DeActivate = function (valueRec) {
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
    EquipmenttypeComponent.prototype.click_Activate = function (valueRec) {
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
    EquipmenttypeComponent.prototype.click_Delete = function (valueRec) {
        var _this = this;
        this._Service
            .delete(valueRec)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.equipmenttypeId !== valueRec.equipmenttypeId; });
            _this.selected = {};
        });
    };
    EquipmenttypeComponent.prototype.onCancel = function (event) {
        this.show_dialog = false;
    };
    EquipmenttypeComponent.prototype.onRowSelect = function (event) {
    };
    EquipmenttypeComponent.prototype.onRowUnselect = function (event) {
        this.selected = {};
    };
    EquipmenttypeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.selected.equipmenttypeId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.show_dialog = false; _this.selected = Object.assign({}, _this.current); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.list.push(data); _this.show_dialog = false; _this.selected = data; });
        }
    };
    EquipmenttypeComponent.prototype.deactivate = function () {
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
    EquipmenttypeComponent.prototype.activate = function () {
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
    EquipmenttypeComponent.prototype.delete = function () {
        var _this = this;
        this._Service
            .delete(this.selected)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.equipmenttypeId !== _this.selected.equipmenttypeId; });
            _this.selected = {};
        });
    };
    EquipmenttypeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1415),
            providers: [__WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"]) === 'function' && _c) || Object])
    ], EquipmenttypeComponent);
    return EquipmenttypeComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1057:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmenttypeDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmenttypeDialog = (function () {
    function EquipmenttypeDialog(_Service, dialogRef, _snackbar) {
        this._Service = _Service;
        this.dialogRef = dialogRef;
        this._snackbar = _snackbar;
        this.current = {};
    }
    EquipmenttypeDialog.prototype.click_Close = function () {
        this.dialogRef.close();
    };
    EquipmenttypeDialog.prototype.click_Save = function () {
        var _this = this;
        if (this.current.equipmenttypeId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); _this._snackbar.open("test", "test2"); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); });
        }
    };
    EquipmenttypeDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'EquipmenttypeDialog',
            template: __webpack_require__(1416),
            providers: [__WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _c) || Object])
    ], EquipmenttypeDialog);
    return EquipmenttypeDialog;
    var _a, _b, _c;
}());


/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipmenttype_component__ = __webpack_require__(1056);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmenttypeRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__equipmenttype_component__["a" /* EquipmenttypeComponent */],
        data: {
            title: 'Equipmenttype'
        }
    }
];
var EquipmenttypeRoutingModule = (function () {
    function EquipmenttypeRoutingModule() {
    }
    EquipmenttypeRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], EquipmenttypeRoutingModule);
    return EquipmenttypeRoutingModule;
}());


/***/ },

/***/ 1133:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmenttypeSelector; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmenttypeSelector = (function () {
    function EquipmenttypeSelector(_Service) {
        this._Service = _Service;
        this.selectedItemChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.list = [];
        this.listitem = [];
    }
    Object.defineProperty(EquipmenttypeSelector.prototype, "selectedItem", {
        get: function () {
            return this.currentSelectedItem;
        },
        set: function (machineItem) {
            this.currentSelectedItem = machineItem;
            this.selectedItemChange.emit(machineItem);
        },
        enumerable: true,
        configurable: true
    });
    EquipmenttypeSelector.prototype.ngOnInit = function () {
        var _this = this;
        this._Service
            .getAll()
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], EquipmenttypeSelector.prototype, "selectedItemChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], EquipmenttypeSelector.prototype, "selectedItem", null);
    EquipmenttypeSelector = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'equipmenttypeselector',
            template: __webpack_require__(1417),
            providers: [__WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */], __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["DropdownModule"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__equipmenttype_service__["a" /* EquipmenttypeService */]) === 'function' && _b) || Object])
    ], EquipmenttypeSelector);
    return EquipmenttypeSelector;
    var _a, _b;
}());


/***/ },

/***/ 1415:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <!--DataTable-->\r\n    <md-card>\r\n        <md-card-header>\r\n            <!--<img md-card-avatar src=\"path/to/img.png\">-->\r\n            <md-icon md-card-avatar style=\"line-height:44px;color: lightgray;\">folder_open</md-icon>\r\n            <md-card-title style=\"padding-top: 14px;\">EQUIPMENT TYPE</md-card-title>\r\n            <!--<md-card-subtitle>Header subtitle</md-card-subtitle>-->\r\n\r\n            <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n\r\n            <button md-icon-button [md-menu-trigger-for]=\"menu\" md-tooltip=\"list options\" tooltip-position=\"below\">\r\n                <md-icon>more_vert</md-icon>\r\n                <!--<md-icon fontSet=\"fa\" fontIcon=\"fa-ellipsis-v\"></md-icon>-->\r\n            </button>\r\n\r\n            <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                    <md-icon style=\"color: #757575;\"> refresh </md-icon>\r\n                    <span> Refresh </span>\r\n                </button>\r\n                <button md-menu-item (click)=\"click_Add()\">\r\n                    <md-icon style=\"color: #757575;\"> add </md-icon>\r\n                    <span> Add </span>\r\n                </button>\r\n\r\n            </md-menu>\r\n            <!--<md-divider></md-divider>-->\r\n        </md-card-header>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n            <!--<md-divider></md-divider>-->\r\n            <!--<p-dataTable [value]=\"list\"\r\n                         selectionMode=\"single\"\r\n                         [(selection)]=\"selected\"\r\n                         scrollable=\"true\"\r\n                         scrollHeight=\"200px\"\r\n                         [contextMenu]=\"cm\"\r\n                         (onRowSelect)=\"onRowSelect($event)\"\r\n                         (onRowUnselect)=\"onRowUnselect($event)\">\r\n                <header>User List</header>\r\n                <footer>\r\n                    <button pButton type=\"text\" (click)=\"click_Add()\" icon=\"fa-check\" label=\"Add\"></button>\r\n                </footer>\r\n                <p-column field=\"equipmenttypeId\" header=\"Id\"></p-column>\r\n                <p-column field=\"name\" header=\"Name\"></p-column>\r\n                <p-column field=\"isActive\" header=\"Active\"></p-column>\r\n            </p-dataTable>\r\n            <p-contextMenu #cm [model]=\"menu_items\"></p-contextMenu>-->\r\n            <!--<md-list>\r\n                <h3 md-subheader>Folders</h3>\r\n                <md-list-item *ngFor=\"let item of list\">\r\n                    <md-icon md-list-avatar>folder</md-icon>\r\n                    <div>\r\n                        <div md-line><span>{{item.name}}</span><span>test</span></div>\r\n                        <p md-line class=\"demo-2\"> {{item.isActive?'Enabled':'Disabled'}} </p>\r\n                    </div>\r\n                    <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n                    <div><div md-line><md-icon md-list-avatar>folder</md-icon><md-icon md-list-avatar>folder</md-icon></div></div>\r\n                </md-list-item>\r\n                <md-divider></md-divider>\r\n            </md-list>-->\r\n            <md-list>\r\n                <!--<h3 md-subheader>Folders</h3>-->\r\n                <md-list-item *ngFor=\"let item of list\">\r\n                    <!--<button md-icon-button>\r\n                        <md-icon>info</md-icon>\r\n                    </button>-->\r\n                    <!--<md-icon>folder</md-icon>-->\r\n                    <md-icon md-list-avatar style=\"padding-top: 10px;color: lightgray;\">label_outline</md-icon>\r\n                    <!--<div md-list-text>-->\r\n                    <div md-line><span>{{item.name}}</span></div>\r\n                    <p md-line> {{item.isActive?'Enabled':'Disabled'}} </p>\r\n                    <!--</div>-->\r\n                    <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n                    <button md-icon-button md-tooltip=\"edit item\" (click)=\"click_Edit(item)\" tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">edit</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"deactivate item\" (click)=\"click_DeActivate(item)\" tooltip-position=\"below\" *ngIf=\"item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_checked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"activate item\" (click)=\"click_Activate(item)\" tooltip-position=\"below\" *ngIf=\"!item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_unchecked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"delete item\" (click)=\"click_Delete(item)\"  tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">delete_forever</md-icon>\r\n                    </button>\r\n                    <!--<div><div md-line><md-icon md-list-avatar>folder</md-icon><md-icon md-list-avatar>folder</md-icon></div></div>-->\r\n                </md-list-item>\r\n                <md-divider></md-divider>\r\n            </md-list>\r\n\r\n            <!--<p-dataList [value]=\"list\" [paginator]=\"false\" >\r\n                <template let-item>\r\n                    <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n                        <div class=\"ui-grid-row\">\r\n                            <div class=\"ui-grid-col-3\" style=\"text-align:center\"><i class=\"fa fa-search\" (click)=\"selectCar(car)\" style=\"cursor:pointer;float:left;margin-top:40px\"></i><img src=\"showcase/resources/demo/images/car/{{car.brand}}-big.gif\"></div>\r\n                            <div class=\"ui-grid-col-9\">\r\n                                <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n                                    <div class=\"ui-grid-row\">\r\n                                        <div class=\"ui-grid-col-2\">Name </div>\r\n                                        <div class=\"ui-grid-col-10\">{{item.name}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </template>\r\n            </p-dataList>-->\r\n            <!--<form>\r\n                <md-input class=\"demo-full-width\" placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n                </md-input>\r\n\r\n                <table style=\"width: 100%\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td><md-input placeholder=\"First name\" style=\"width: 100%\"></md-input></td>\r\n                        <td><md-input placeholder=\"Long Last Name That Will Be Truncated\" style=\"width: 100%\"></md-input></td>\r\n                    </tr>\r\n                </table>\r\n                <p>\r\n                    <md-textarea class=\"demo-full-width\" placeholder=\"Address\" value=\"1600 Amphitheatre Pkway\"></md-textarea>\r\n                    <md-textarea class=\"demo-full-width\" placeholder=\"Address 2\"></md-textarea>\r\n                </p>\r\n                <table style=\"width: 100%\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td><md-input class=\"demo-full-width\" placeholder=\"City\"></md-input></td>\r\n                        <td><md-input class=\"demo-full-width\" placeholder=\"State\"></md-input></td>\r\n                        <td><p-calendar [(ngModel)]=\"myfecha\" [ngModelOptions]=\"{standalone: true}\"></p-calendar></td>\r\n                        <td><p-calendar [(ngModel)]=\"myfecha\"></p-calendar></td>\r\n                        <td>\r\n                            <md-input #postalCode class=\"demo-full-width\" maxlength=\"5\"\r\n                                      placeholder=\"Postal Code\"\r\n                                      value=\"94043\">\r\n                                <md-hint align=\"end\">{{postalCode.characterCount}} / 5</md-hint>\r\n                            </md-input>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>-->\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n    {{lastCloseResult}}\r\n    <!--Dialog-->\r\n    <!--<p-dialog [(visible)]=\"show_dialog\" modal=\"true\" responsive=\"true\" draggable=\"false\" resizable=\"false\">\r\n        <header>\r\n            Header content here\r\n        </header>\r\n        <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\" class=\"editForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label>Id</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"phaseId\" [(ngModel)]=\"current.phaseId\" #Name=\"ngModel\" required>\r\n                <div class=\"alert alert-danger\" [hidden]=\"current.phaseId\">Id is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"current.name\" #Name=\"ngModel\" required>\r\n                <div class=\"alert alert-danger\" [hidden]=\"current.name\">Name is required</div>\r\n            </div>\r\n        </form>\r\n        <footer>\r\n            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n                <button class=\"btn btn-default\" (click)=\"onCancel($event)\">Cancel</button>\r\n                <button class=\"btn btn-success\" [disabled]=\"!customerForm.dirty || !customerForm.valid\" (click)=\"onSubmit()\">Update</button>\r\n            </div>\r\n        </footer>\r\n    </p-dialog>-->\r\n\r\n\r\n</div>"

/***/ },

/***/ 1416:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div style=\"display: flex;flex-direction: row;position: relative;top: -20px;left: -10px;width: 110%;\" tabindex=\"-1\">\r\n        <span style=\"line-height:44px;\">EQUIPMENT</span>\r\n        <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n        <button md-icon-button  md-tooltip=\"list options\" tooltip-position=\"below\" tabindex=\"-1\" >\r\n            <md-icon >clear</md-icon>\r\n        </button>\r\n    </div>\r\n    <input [(ngModel)]=\"current.name\" placeholder=\"name\">\r\n\r\n    <button type=\"button\" (click)=\"click_Close()\">Cancel</button>\r\n    <button type=\"button\" (click)=\"click_Save()\">Save</button>\r\n    <!--<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>\r\n    <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>\r\n    <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>-->\r\n</div>"

/***/ },

/***/ 1417:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"form-group\">\r\n        <label>Equipment Type</label>\r\n        <p-dropdown style=\"display: block;\" [appendTo]=\"body\" [style]=\"{width:'100%'}\" [options]=\"listitem\" [(ngModel)]=\"selectedItem\"></p-dropdown>\r\n    </div>\r\n</div>"

/***/ },

/***/ 1429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_service__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipment_dialog__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EquipmentComponent = (function () {
    function EquipmentComponent(_Service, viewContainerRef, dialog) {
        this._Service = _Service;
        this.viewContainerRef = viewContainerRef;
        this.dialog = dialog;
        this.list = [];
        this.selected = {};
        this.current = {};
        this.show_dialog = false;
    }
    EquipmentComponent.prototype.ngOnInit = function () {
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
    EquipmentComponent.prototype.open_Dialog = function (valueRec) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__equipment_dialog__["a" /* EquipmentDialog */], config);
        this.dialogRef.componentInstance.current = JSON.parse(JSON.stringify(valueRec));
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                if (_this.current.equipmentId != undefined) {
                    Object.assign(valueRec, result);
                }
                else {
                    _this.list.push(result);
                }
            }
            _this.dialogRef = null;
        });
    };
    EquipmentComponent.prototype.click_Add = function (event) {
        this.current = {};
        this.open_Dialog(this.current);
    };
    EquipmentComponent.prototype.click_Edit = function (valueRec) {
        this.current = valueRec;
        this.open_Dialog(this.current);
    };
    EquipmentComponent.prototype.click_DeActivate = function (valueRec) {
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
    EquipmentComponent.prototype.click_Activate = function (valueRec) {
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
    EquipmentComponent.prototype.click_Delete = function (valueRec) {
        var _this = this;
        this._Service
            .delete(valueRec)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.equipmentId !== valueRec.equipmentId; });
            _this.selected = {};
        });
    };
    EquipmentComponent.prototype.onCancel = function (event) {
        this.show_dialog = false;
    };
    EquipmentComponent.prototype.onRowSelect = function (event) {
        this.selected = event.data;
    };
    EquipmentComponent.prototype.onRowUnselect = function (event) {
        this.selected = {};
    };
    EquipmentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.selected.equipmentId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.show_dialog = false; _this.selected = Object.assign({}, _this.current); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.list.push(data); _this.show_dialog = false; _this.selected = data; });
        }
    };
    EquipmentComponent.prototype.deactivate = function () {
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
    EquipmentComponent.prototype.activate = function () {
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
    EquipmentComponent.prototype.delete = function () {
        var _this = this;
        this._Service
            .delete(this.selected)
            .then(function () {
            _this.list = _this.list.filter(function (h) { return h.equipmentId !== _this.selected.equipmentId; });
            _this.selected = {};
        });
    };
    EquipmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1451),
            providers: [__WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdDialog"]) === 'function' && _c) || Object])
    ], EquipmentComponent);
    return EquipmentComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_service__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmentDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentDialog = (function () {
    function EquipmentDialog(_Service, dialogRef, _snackbar) {
        this._Service = _Service;
        this.dialogRef = dialogRef;
        this._snackbar = _snackbar;
        this.current = {};
    }
    EquipmentDialog.prototype.click_Close = function () {
        this.dialogRef.close();
    };
    EquipmentDialog.prototype.click_Save = function () {
        var _this = this;
        if (this.current.equipmentId != undefined) {
            this._Service.update(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); _this._snackbar.open("test", "test2"); });
        }
        else {
            this._Service.create(this.current)
                .subscribe(function (data) { _this.dialogRef.close(data); });
        }
    };
    EquipmentDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'EquipmentDialog',
            template: __webpack_require__(1452),
            providers: [__WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialogRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _c) || Object])
    ], EquipmentDialog);
    return EquipmentDialog;
    var _a, _b, _c;
}());


/***/ },

/***/ 1431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipmentService = (function () {
    function EquipmentService(_http, _conf) {
        var _this = this;
        this._http = _http;
        this._conf = _conf;
        this.BaseUrl = this._conf.Server + 'api/equipment';
        this.getAll = function () {
            return _this._http.get(_this.BaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
    }
    EquipmentService.prototype.update = function (current) {
        return this._http.put(this.BaseUrl + '/' + current.equipmentId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmentService.prototype.deactivate = function (current) {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.equipmentId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmentService.prototype.activate = function (current) {
        return this._http.put(this.BaseUrl + '/activate/' + current.equipmentId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmentService.prototype.create = function (equipment) {
        return this._http.post(this.BaseUrl, equipment).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EquipmentService.prototype.delete = function (current) {
        return this._http.delete(this.BaseUrl + '/' + current.equipmentId).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    EquipmentService.prototype.handleError = function (error) {
        console.error('API Equipment server error:', error);
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
    EquipmentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */]) === 'function' && _b) || Object])
    ], EquipmentService);
    return EquipmentService;
    var _a, _b;
}());


/***/ },

/***/ 1440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipment_component__ = __webpack_require__(1429);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmentRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__equipment_component__["a" /* EquipmentComponent */],
        data: {
            title: 'Equipment'
        }
    }
];
var EquipmentRoutingModule = (function () {
    function EquipmentRoutingModule() {
    }
    EquipmentRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], EquipmentRoutingModule);
    return EquipmentRoutingModule;
}());


/***/ },

/***/ 1451:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <md-card>\r\n        <md-card-header>\r\n            <md-icon md-card-avatar style=\"line-height:44px;color: lightgray;\">folder_open</md-icon>\r\n            <md-card-title style=\"padding-top: 14px;\">EQUIPMENT</md-card-title>\r\n\r\n            <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n\r\n            <button md-icon-button [md-menu-trigger-for]=\"menu\" md-tooltip=\"list options\" tooltip-position=\"below\">\r\n                <md-icon>more_vert</md-icon>\r\n            </button>\r\n\r\n            <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                    <md-icon style=\"color: #757575;\"> refresh </md-icon>\r\n                    <span> Refresh </span>\r\n                </button>\r\n                <button md-menu-item (click)=\"click_Add()\">\r\n                    <md-icon style=\"color: #757575;\"> add </md-icon>\r\n                    <span> Add </span>\r\n                </button>\r\n            </md-menu>\r\n        </md-card-header>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n            <p-dataTable [value]=\"list\"\r\n                         selectionMode=\"single\"\r\n                         [(selection)]=\"selected\"\r\n                         scrollable=\"true\"\r\n                         scrollHeight=\"200px\"\r\n                         [contextMenu]=\"cm\"\r\n                         (onRowSelect)=\"onRowSelect($event)\"\r\n                         (onRowUnselect)=\"onRowUnselect($event)\"\r\n                         #dt>\r\n                <!--<header>User List</header>\r\n                <footer></footer>-->\r\n                <p-column field=\"equipmentId\" header=\"Id\"></p-column>\r\n                <p-column field=\"name\" header=\"Name\"></p-column>\r\n                <p-column field=\"equipmenttype\" header=\"Type\">\r\n                    <template let-col let-item=\"rowData\" pTemplate type=\"body\">\r\n                        <span>{{item.equipmenttype?item.equipmenttype.name:any}}</span>\r\n                    </template>\r\n                </p-column>\r\n                <p-column field=\"isActive\" header=\"Active\"></p-column>\r\n            </p-dataTable>\r\n            <p-contextMenu #cm [model]=\"menu_items\"  appendTo=\"body\"></p-contextMenu>\r\n            <!--<md-list>\r\n                <md-list-item *ngFor=\"let item of list\">\r\n                    <md-icon md-list-avatar style=\"padding-top: 10px;color: lightgray;\">label_outline</md-icon>\r\n                    <div md-line><span>{{item.name}} {{item.equipmenttype?item.equipmenttype.name:'--'}}</span></div>\r\n                    <p md-line> {{item.isActive?'Enabled':'Disabled'}} </p>\r\n                    <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n                    <button md-icon-button md-tooltip=\"edit item\" (click)=\"click_Edit(item)\" tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">edit</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"deactivate item\" (click)=\"click_DeActivate(item)\" tooltip-position=\"below\" *ngIf=\"item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_checked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"activate item\" (click)=\"click_Activate(item)\" tooltip-position=\"below\" *ngIf=\"!item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_unchecked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"delete item\" (click)=\"click_Delete(item)\"  tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">delete_forever</md-icon>\r\n                    </button>\r\n                </md-list-item>\r\n                <md-divider></md-divider>\r\n            </md-list>-->\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n</div>"

/***/ },

/***/ 1452:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div md-dialog-title>\r\n        Equipment\r\n    </div>\r\n    <md-dialog-content>\r\n        <div style=\"min-height:150px;\">\r\n            <input [(ngModel)]=\"current.name\" placeholder=\"name\">\r\n            <equipmenttypeselector [(selectedItem)]=\"current.equipmenttype\"></equipmenttypeselector>\r\n        </div>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button type=\"button\" (click)=\"click_Close()\">Cancel</button>\r\n        <button type=\"button\" (click)=\"click_Save()\">Save</button>\r\n    </md-dialog-actions>\r\n</div>"

/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipmenttype_component__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipmenttype_dialog__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipmenttype_selector__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__equipmenttype_routing_module__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "EquipmenttypeModule", function() { return EquipmenttypeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EquipmenttypeModule = (function () {
    function EquipmenttypeModule() {
    }
    EquipmenttypeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__equipmenttype_routing_module__["a" /* EquipmenttypeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__equipmenttype_component__["a" /* EquipmenttypeComponent */], __WEBPACK_IMPORTED_MODULE_5__equipmenttype_dialog__["a" /* EquipmenttypeDialog */], __WEBPACK_IMPORTED_MODULE_6__equipmenttype_selector__["a" /* EquipmenttypeSelector */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__equipmenttype_dialog__["a" /* EquipmenttypeDialog */], __WEBPACK_IMPORTED_MODULE_6__equipmenttype_selector__["a" /* EquipmenttypeSelector */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__equipmenttype_dialog__["a" /* EquipmenttypeDialog */]]
        }), 
        __metadata('design:paramtypes', [])
    ], EquipmenttypeModule);
    return EquipmenttypeModule;
}());


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment_component__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipment_dialog__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__equipment_routing_module__ = __webpack_require__(1440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__equipmenttype_equipmenttype_module__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "EquipmentModule", function() { return EquipmentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EquipmentModule = (function () {
    function EquipmentModule() {
    }
    EquipmentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__equipment_routing_module__["a" /* EquipmentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8__equipmenttype_equipmenttype_module__["EquipmenttypeModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__equipment_component__["a" /* EquipmentComponent */], __WEBPACK_IMPORTED_MODULE_6__equipment_dialog__["a" /* EquipmentDialog */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__equipment_dialog__["a" /* EquipmentDialog */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__equipment_dialog__["a" /* EquipmentDialog */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]]
        }), 
        __metadata('design:paramtypes', [])
    ], EquipmentModule);
    return EquipmentModule;
}());


/***/ },

/***/ 983:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var toPromise_1 = __webpack_require__(520);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }

});
//# sourceMappingURL=2.bundle.js.map