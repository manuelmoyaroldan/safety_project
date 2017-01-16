webpackJsonp([5],{

/***/ 1081:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crashdocument_component__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crashdocument_routing_module__ = __webpack_require__(1557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "CrashdocumentModule", function() { return CrashdocumentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrashdocumentModule = (function () {
    function CrashdocumentModule() {
    }
    CrashdocumentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__crashdocument_routing_module__["a" /* CrashdocumentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["InputTextModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__crashdocument_component__["a" /* CrashdocumentComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CrashdocumentModule);
    return CrashdocumentModule;
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

/***/ 1544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crashdocument_service__ = __webpack_require__(1558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashdocumentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrashdocumentComponent = (function () {
    function CrashdocumentComponent(_Service, route, location) {
        this._Service = _Service;
        this.route = route;
        this.location = location;
        this.idrec = 0;
        this.doc_state = 1;
        this.doc_state_prev = 1;
        this.show_toolbar = 1;
        this.prev_state = 0;
        this.next_state = 2;
        this.selected = {};
        this.current = {};
        this.selecteddetail = {};
        this.currentdetail = {};
        this.show_dialog = false;
    }
    CrashdocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            try {
                _this.idrec = +params['id'];
            }
            catch (e) {
                _this.idrec = 0;
            }
            if (_this.idrec > 0) {
                _this._Service
                    .get(_this.idrec)
                    .subscribe(function (data) { return _this.current = data; }, function (error) { return console.log(error); }, function () { return console.log('Get travel completed'); });
            }
            else {
            }
        });
    };
    CrashdocumentComponent.prototype.save_traveldetail = function (event) {
        if (this.currentdetail.traveldetailId == 0 || this.currentdetail.traveldetailId == null) {
            if (this.current.traveldetail == undefined || this.current.traveldetail == null) {
                this.current.traveldetail = [];
            }
            this.currentdetail.traveldetailId = -1;
            this.current.traveldetail.push(this.currentdetail);
        }
        else {
            Object.assign(this.selecteddetail, this.currentdetail);
        }
    };
    CrashdocumentComponent.prototype.new_traveldetail = function (event) {
        this.currentdetail = {};
    };
    CrashdocumentComponent.prototype.edit_traveldetail = function (value) {
        this.selecteddetail = value;
        this.currentdetail = JSON.parse(JSON.stringify(this.selecteddetail));
    };
    CrashdocumentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1570),
            providers: [__WEBPACK_IMPORTED_MODULE_4__crashdocument_service__["a" /* CrashdocumentService */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__crashdocument_service__["a" /* CrashdocumentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__crashdocument_service__["a" /* CrashdocumentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _c) || Object])
    ], CrashdocumentComponent);
    return CrashdocumentComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crashdocument_component__ = __webpack_require__(1544);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashdocumentRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__crashdocument_component__["a" /* CrashdocumentComponent */],
        data: {
            title: 'Travel'
        }
    }
];
var CrashdocumentRoutingModule = (function () {
    function CrashdocumentRoutingModule() {
    }
    CrashdocumentRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], CrashdocumentRoutingModule);
    return CrashdocumentRoutingModule;
}());


/***/ },

/***/ 1558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrashdocumentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrashdocumentService = (function () {
    function CrashdocumentService(_http) {
        var _this = this;
        this._http = _http;
        this.BaseUrl = 'http://localhost:24785/api/travel';
        this.getAll = function () {
            return _this._http.get(_this.BaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
        this.get = function (id) {
            return _this._http.get(_this.BaseUrl + '/' + id).map(function (res) { return res.json(); }).catch(_this.handleError);
        };
    }
    CrashdocumentService.prototype.update = function (current) {
        return this._http.put(this.BaseUrl + '/' + current.travelId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashdocumentService.prototype.deactivate = function (current) {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.travelId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashdocumentService.prototype.activate = function (current) {
        return this._http.put(this.BaseUrl + '/activate/' + current.travelId, current).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashdocumentService.prototype.create = function (equipment) {
        return this._http.post(this.BaseUrl, equipment).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    CrashdocumentService.prototype.delete = function (current) {
        return this._http.delete(this.BaseUrl + '/' + current.travelId).toPromise().then(function () { return null; }).catch(this.handleError);
    };
    CrashdocumentService.prototype.handleError = function (error) {
        console.error('API Travel server error:', error);
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
    CrashdocumentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CrashdocumentService);
    return CrashdocumentService;
    var _a;
}());


/***/ },

/***/ 1570:
/***/ function(module, exports) {

module.exports = "<div>\r\n    <md-card>\r\n        <md-card-header>\r\n            <md-icon md-card-avatar style=\"line-height:44px;color: lightgray;\">assignment</md-icon>\r\n            <md-card-title style=\"padding-top: 14px;\">CRASH DOCUMENT</md-card-title>\r\n\r\n            <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n\r\n            <button md-icon-button [md-menu-trigger-for]=\"menu\" md-tooltip=\"list options\" tooltip-position=\"below\">\r\n                <md-icon>more_vert</md-icon>\r\n            </button>\r\n\r\n            <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                    <md-icon style=\"color: #757575;\"> refresh </md-icon>\r\n                    <span> Refresh </span>\r\n                </button>\r\n                <button md-menu-item (click)=\"click_Add()\">\r\n                    <md-icon style=\"color: #757575;\"> add </md-icon>\r\n                    <span> Add </span>\r\n                </button>\r\n            </md-menu>\r\n        </md-card-header>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n            <div fxLayout=\"row\">\r\n                <md-input-container>\r\n                    <input md-input placeholder=\"Date\" type=\"datetime-local\">\r\n                </md-input-container>\r\n            </div>\r\n\r\n            <!--<!--<div style=\"height: 100%;\">-->\r\n            <!--<div>\r\n                <div class=\"flex-container\"\r\n                     fxLayout=\"row\"\r\n                     fxLayout.xs=\"column\"\r\n                     fxLayoutAlign=\"center center\"\r\n                     fxLayoutAlign.xs=\"start\">\r\n                    <div class=\"flex-item\" fxFlex=\"33%\" fxFlex.xs=\"100%\">\r\n\r\n                    </div>\r\n                    <div class=\"flex-item\" fxFlex=\"33%\" fxFlex.xs=\"100%\">\r\n\r\n                    </div>\r\n                    <div class=\"flex-item\" fxFlex=\"33%\" fxFlex.xs=\"100%\">\r\n\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"containerX\">\r\n                    <div fxLayout=\"row\" >\r\n                        <div fxFlex=\"20\">  fxFlex=\"20\"  </div>\r\n                        <div fxFlex=\"60\">  fxFlex=\"60\"  </div>\r\n                        <div fxFlex>      fxFlex       </div>\r\n                    </div>\r\n                </div>-->\r\n                <!--<div class=\"flex-container\"\r\n                     fxLayout=\"row\"\r\n                     fxLayout.xs=\"column\"\r\n                     fxLayoutAlign=\"center center\"\r\n                     fxLayoutAlign.xs=\"start\">\r\n                    <div class=\"flex-item\" fxFlex=\"20%\" fxFlex.xs=\"40%\">  </div>\r\n                    <div class=\"flex-item\" fxFlex>        </div>\r\n                    <div class=\"flex-item\" fxFlex=\"25px\"> </div>\r\n                </div>-->\r\n                <!--Travel Doc {{current.travelId}} {{current.user? current.user.name: 'no user'}}-->\r\n                <!--TOOLBAR-->\r\n                <!--<div fxLayout=\"row\" fxLayoutAlign=\"space-around none\" style=\"height:100%;\">\r\n                    <md-input [(ngModel)]=\"posicionx\" placeholder=\"X\" [ngModelOptions]=\"{standalone: true}\"></md-input>\r\n                </div>-->\r\n            <!--</div>-->\r\n        </md-card-content>\r\n    </md-card>\r\n    <md-card>\r\n        <md-card-header>\r\n            <!--<img md-card-avatar src=\"path/to/img.png\">-->\r\n            <md-icon md-card-avatar style=\"line-height:44px;color: lightgray;\">folder_open</md-icon>\r\n            <md-card-title style=\"padding-top: 14px;\">EQUIPMENT </md-card-title>\r\n\r\n            <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n\r\n            <button md-icon-button [md-menu-trigger-for]=\"menu\" md-tooltip=\"list options\" tooltip-position=\"below\">\r\n                <md-icon>more_vert</md-icon>\r\n                <!--<md-icon fontSet=\"fa\" fontIcon=\"fa-ellipsis-v\"></md-icon>-->\r\n            </button>\r\n            <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n                <button md-menu-item>\r\n                    <md-icon style=\"color: #757575;\"> refresh </md-icon>\r\n                    <span> Refresh </span>\r\n                </button>\r\n                <button md-menu-item (click)=\"click_Add()\">\r\n                    <md-icon style=\"color: #757575;\"> add </md-icon>\r\n                    <span> Add </span>\r\n                </button>\r\n            </md-menu>\r\n        </md-card-header>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n            <md-list>\r\n                <!--<h3 md-subheader>Folders</h3>-->\r\n                <md-list-item *ngFor=\"let item of list\">\r\n                    <!--<button md-icon-button>\r\n                        <md-icon>info</md-icon>\r\n                    </button>-->\r\n                    <!--<md-icon>folder</md-icon>-->\r\n                    <md-icon md-list-avatar style=\"padding-top: 10px;color: lightgray;\">label_outline</md-icon>\r\n                    <!--<div md-list-text>-->\r\n                    <div md-line><span>{{item.name}}</span></div>\r\n                    <p md-line> {{item.isActive?'Enabled':'Disabled'}} </p>\r\n                    <!--</div>-->\r\n                    <span class=\"example-fill-remaining-space\" style=\"flex: 1 1 auto;\"></span>\r\n                    <button md-icon-button md-tooltip=\"edit item\" (click)=\"click_Edit(item)\" tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">edit</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"deactivate item\" (click)=\"click_DeActivate(item)\" tooltip-position=\"below\" *ngIf=\"item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_checked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"activate item\" (click)=\"click_Activate(item)\" tooltip-position=\"below\" *ngIf=\"!item.isActive\">\r\n                        <md-icon style=\"color: #757575;\">radio_button_unchecked</md-icon>\r\n                    </button>\r\n                    <button md-icon-button md-tooltip=\"delete item\" (click)=\"click_Delete(item)\" tooltip-position=\"below\">\r\n                        <md-icon style=\"color: #757575;\">delete_forever</md-icon>\r\n                    </button>\r\n                    <!--<div><div md-line><md-icon md-list-avatar>folder</md-icon><md-icon md-list-avatar>folder</md-icon></div></div>-->\r\n                </md-list-item>\r\n                <md-divider></md-divider>\r\n            </md-list>\r\n\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n</div>\r\n"

/***/ },

/***/ 1575:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var switchMap_1 = __webpack_require__(1576);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ },

/***/ 1576:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(146);
var subscribeToResult_1 = __webpack_require__(147);
/* tslint:disable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }

});
//# sourceMappingURL=5.bundle.js.map