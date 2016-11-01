webpackJsonp([0],{

/***/ 0:
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 24);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 28);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 63);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 64);
	var http_1 = __webpack_require__(/*! @angular/http */ 60);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 65);
	var about_component_1 = __webpack_require__(/*! ./about/about.component */ 68);
	var equipment_component_1 = __webpack_require__(/*! ./equipment/equipment.component */ 70);
	var equipmenttype_selector_1 = __webpack_require__(/*! ./equipmenttype/equipmenttype.selector */ 141);
	var testDataService_1 = __webpack_require__(/*! ./services/testDataService */ 66);
	var core_module_1 = __webpack_require__(/*! ./core/core.module */ 144);
	var primeng_1 = __webpack_require__(/*! primeng/primeng */ 72);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                common_1.CommonModule,
	                forms_1.FormsModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                core_module_1.CoreModule,
	                http_1.JsonpModule, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.SharedModule, primeng_1.DropdownModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                about_component_1.AboutComponent,
	                home_component_1.HomeComponent, equipment_component_1.EquipmentComponent, equipmenttype_selector_1.EquipmenttypeSelector
	            ],
	            providers: [
	                testDataService_1.TestDataService,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var data_service_1 = __webpack_require__(/*! ./core/services/data.service */ 59);
	var AppComponent = (function () {
	    function AppComponent(router, el, dataService) {
	        this.router = router;
	        this.el = el;
	        this.dataService = dataService;
	        this.user = {};
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.dataService
	            .getUser()
	            .subscribe(function (data) { return _this.user = data; });
	    };
	    AppComponent.prototype.ngAfterViewInit = function () {
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 62),
	            providers: [data_service_1.DataService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, data_service_1.DataService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 59:
/*!*******************************************************!*\
  !*** ./angular2App/app/core/services/data.service.ts ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 60);
	__webpack_require__(/*! rxjs/add/operator/map */ 61);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
	var DataService = (function () {
	    function DataService(http) {
	        var _this = this;
	        this.http = http;
	        this.userBaseUrl = 'http://localhost:58333/api/user';
	        this.getUser = function () {
	            if (_this.user == null || _this.user == undefined) {
	                console.log("API User");
	                return _this.http.get(_this.userBaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
	            }
	            else {
	                return _this.user;
	            }
	        };
	        this.getUser().subscribe(function (data) { return _this.user = data; }, function (error) { return console.log('Error' + error); }, function () { return console.log(_this.user); });
	    }
	    DataService.prototype.extractData = function (res) {
	        var body = res.json();
	        return body.data || {};
	    };
	    DataService.prototype.handleError = function (error) {
	        console.error('server error:', error);
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
	    DataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], DataService);
	    return DataService;
	}());
	exports.DataService = DataService;


/***/ },

/***/ 62:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"layout-wrapper layout-compact\">\r\n\r\n    <div class=\"layout-container menu-layout-static\">\r\n\r\n        <div class=\"topbar clearfix\">\r\n            <div class=\"topbar-left\">\r\n                <div class=\"logo\"></div>\r\n            </div>\r\n\r\n            <div class=\"topbar-right\">\r\n                <a href=\"#\" id=\"menu-button\">\r\n                    <i></i>\r\n                </a>\r\n\r\n                <a href=\"#\" id=\"topbar-menu-button\">\r\n                    <i class=\"material-icons\">menu</i>\r\n                </a>\r\n                <ul class=\"topbar-items fadeInDown animated\">\r\n                    <li class=\"profile-item\" hidden=\"\">\r\n                        <a href=\"#\">\r\n                            <div class=\"profile-image\"></div>\r\n                            <span class=\"topbar-item-name\">{{user.name}}</span>\r\n                        </a>\r\n\r\n                        <ul class=\"ultima-menu animated\">\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">person</i>\r\n                                    <span>Profile</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">security</i>\r\n                                    <span>Privacy</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">settings_applications</i>\r\n                                    <span>Settings</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">power_settings_new</i>\r\n                                    <span>Logout</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <i class=\"topbar-icon material-icons\">settings</i>\r\n                            <span class=\"topbar-item-name\">Settings</span>\r\n                        </a>\r\n                        <ul class=\"ultima-menu animated\">\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">palette</i>\r\n                                    <span>Change Theme</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">favorite_border</i>\r\n                                    <span>Favorites</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">lock</i>\r\n                                    <span>Lock Screen</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">wallpaper</i>\r\n                                    <span>Wallpaper</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <i class=\"topbar-icon material-icons animated swing\">message</i>\r\n                            <span class=\"topbar-badge animated rubberBand\">5</span>\r\n                            <span class=\"topbar-item-name\">Messages</span>\r\n                        </a>\r\n                        <ul class=\"ultima-menu animated\">\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"topbar-message\" href=\"#\">\r\n                                    <!--<img src=\"resources/layout/images/avatar1.png\" width=\"35\">-->\r\n                                    <span>Give me a call</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"topbar-message\" href=\"#\">\r\n                                    <!--<img src=\"resources/layout/images/avatar2.png\" width=\"35\">-->\r\n                                    <span>Sales reports attached</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"topbar-message\" href=\"#\">\r\n                                    <!--<img src=\"resources/layout/images/avatar3.png\" width=\"35\">-->\r\n                                    <span>About your invoice</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"topbar-message\" href=\"#\">\r\n                                    <!--<img src=\"resources/layout/images/avatar2.png\" width=\"35\">-->\r\n                                    <span>Meeting today at 10pm</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a class=\"topbar-message\" href=\"#\">\r\n                                    <!--<img src=\"resources/layout/images/avatar4.png\" width=\"35\">-->\r\n                                    <span>Out of office</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <i class=\"topbar-icon material-icons\">timer</i>\r\n                            <span class=\"topbar-badge animated rubberBand\">4</span>\r\n                            <span class=\"topbar-item-name\">Notifications</span>\r\n                        </a>\r\n                        <ul class=\"ultima-menu animated\">\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">bug_report</i>\r\n                                    <span>Pending tasks</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">event</i>\r\n                                    <span>Meeting today at 3pm</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">file_download</i>\r\n                                    <span>Download documents</span>\r\n                                </a>\r\n                            </li>\r\n                            <li role=\"menuitem\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"material-icons\">flight</i>\r\n                                    <span>Book flight</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"search-item\">\r\n                        <span class=\"md-inputfield\">\r\n                            <input type=\"text\">\r\n                            <label>Search</label>\r\n                            <i class=\"topbar-icon material-icons\">search</i>\r\n                        </span>\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"layout-menu\">\r\n            <div class=\"nano has-scrollbar\">\r\n                <div class=\"nano-content menu-scroll-content\" tabindex=\"0\" style=\"margin-right: -17px;\">\r\n                    <div class=\"profile\">\r\n                        <div class=\"profile-image\"></div>\r\n                        <a href=\"#\" id=\"profile-options\">\r\n                            <span class=\"profile-name\">{{user.name}}</span>\r\n                            <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <ul class=\"ultima-menu\" id=\"profile-menu\">\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\">\r\n                                <i class=\"material-icons\">person</i>\r\n                                <span>Profile</span>\r\n                            </a>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\">\r\n                                <i class=\"material-icons\">security</i>\r\n                                <span>Privacy</span>\r\n                            </a>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\">\r\n                                <i class=\"material-icons\">settings_application</i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\">\r\n                                <i class=\"material-icons\">power_settings_new</i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <ul class=\"ultima-menu clearfix\" id=\"main-menu\">\r\n                        <li role=\"menuitem\" class=\"active-menuitem\"><a href=\"#/\"><i class=\"material-icons\">dashboard</i><span>Dashboard</span></a></li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">palette</i><span>Themes</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                            <ul role=\"menu\">\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Indigo - Pink</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Brown - Green</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Blue - Amber</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Blue Grey - Green</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Dark - Blue</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Dark - Green</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Green - Yellow</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Purple - Cyan</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Purple - Amber</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Teal - Lime</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Cyan - Amber</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">brush</i><span>Grey - Deep Orange</span></a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">settings_application</i><span>Customization</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                            <ul role=\"menu\">\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">fiber_manual_record</i><span>Compact Size</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">fiber_smart_record</i><span>Material Size</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">menu</i><span>Static Menu</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">exit_to_app</i><span>Overlay Menu</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">border_horizontal</i><span>Horizontal Menu</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">label_outline</i><span>Light Menu</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">label</i><span>Dark Menu</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">contacts</i><span>Inline Profile</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">person_pin</i><span>Top Profile</span></a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id=\"menuform:um_components\" role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">list</i><span>Components</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                            <ul role=\"menu\">\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/sample\"><i class=\"material-icons\">desktop_mac</i><span>Sample Page</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/forms\"><i class=\"material-icons\">input</i><span>Forms</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/data\"><i class=\"material-icons\">grid_on</i><span>Data</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/panels\"><i class=\"material-icons\">content_paste</i><span>Panels</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/overlays\"><i class=\"material-icons\">content_copy</i><span>Overlays</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/menus\"><i class=\"material-icons\">menu</i><span>Menus</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/messages\"><i class=\"material-icons\">message</i><span>Messages</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/charts\"><i class=\"material-icons\">insert_chart</i><span>Charts</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/file\"><i class=\"material-icons\">attach_file</i><span>File</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/misc\"><i class=\"material-icons\">toys</i><span>Misc</span></a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id=\"menuform:um_default\" role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">get_app</i><span>Template Pages</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                            <ul role=\"menu\">\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"landing.html\" target=\"_blank\"><i class=\"material-icons\">flight_land</i><span>Landing</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/empty\"><i class=\"material-icons\">hourglass_empty</i><span>Empty Page</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"./login\" target=\"_blank\"><i class=\"material-icons\">verified_user</i><span>Login Page</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"error.html\" target=\"_blank\"><i class=\"material-icons\">error</i><span>Error Page</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"404.html\" target=\"_blank\"><i class=\"material-icons\">error_outline</i><span>404 Page</span></a></li>\r\n                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"access.html\" target=\"_blank\"><i class=\"material-icons\">security</i><span>Access Denied Page</span></a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">menu</i><span>Menu Hierarchy</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                            <ul role=\"menu\">\r\n                                <li role=\"menuitem\">\r\n                                    <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 1</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                    <ul role=\"menu\">\r\n                                        <li role=\"menuitem\">\r\n                                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 1.1</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                            <ul role=\"menu\">\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 1.1.1</span></a></li>\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 1.1.2</span></a></li>\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 1.1.3</span></a></li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li role=\"menuitem\">\r\n                                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 1.2</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                            <ul role=\"menu\">\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 1.2.1</span></a></li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 2</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                    <ul role=\"menu\">\r\n                                        <li ole=\"menuitem\">\r\n                                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 2.1</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                            <ul role=\"menu\">\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 2.1.1</span></a></li>\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 2.1.2</span></a></li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li role=\"menuitem\">\r\n                                            <a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Submenu 2.2</span><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n                                            <ul role=\"menu\">\r\n                                                <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#\"><i class=\"material-icons\">subject</i><span>Link 2.2.1</span></a></li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li role=\"menuitem\"><a class=\"ripplelink\" href=\"#/utils\"><i class=\"material-icons\">build</i><span>Utils</span></a></li>\r\n                        <li role=\"menuitem\" class=\"\"><a class=\"ripplelink\" href=\"#/documentation\"><i class=\"material-icons\">find_in_page</i><span>Documentation</span><span class=\"ink animate\" style=\"height: 250px; width: 250px; top: -106px; left: -6px; pointer-events: none;\"></span></a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"nano-pane\" style=\"display: none;\"><div class=\"nano-slider\" style=\"height: 933px; transform: translate(0px, 0px);\"></div></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"layout-main\">\r\n            <router-outlet></router-outlet>\r\n            <!--<span md-inputfield>\r\n                <input pinputtext type=\"text\" class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\">\r\n                <label>Email</label>    \r\n            </span>-->\r\n            <!--<p-calendar></p-calendar>-->\r\n\r\n            <!--<div class=\"footer\">\r\n                <div class=\"card clearfix\">\r\n                    <span class=\"footer-text-left\">PrimeNG ULTIMA for Angular2</span>\r\n                    <span class=\"footer-text-right\"><span class=\"ui-icon ui-icon-copyright\"></span>  <span>All Rights Reserved</span></span>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 63:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 64:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 65);
	var about_component_1 = __webpack_require__(/*! ./about/about.component */ 68);
	var equipment_component_1 = __webpack_require__(/*! ./equipment/equipment.component */ 70);
	var appRoutes = [
	    { path: '', component: equipment_component_1.EquipmentComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent },
	    { path: 'equipment', component: equipment_component_1.EquipmentComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 65:
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var testDataService_1 = __webpack_require__(/*! ../services/testDataService */ 66);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.message = "Hello from HomeComponent constructor";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .GetAll()
	            .subscribe(function (data) { return _this.values = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 67),
	            providers: [testDataService_1.TestDataService]
	        }), 
	        __metadata('design:paramtypes', [testDataService_1.TestDataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 66:
/*!*****************************************************!*\
  !*** ./angular2App/app/services/testDataService.ts ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 60);
	__webpack_require__(/*! rxjs/add/operator/map */ 61);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 63);
	var TestDataService = (function () {
	    function TestDataService(_http, _configuration) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this.GetAll = function () {
	            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
	        };
	        this.GetSingle = function (id) {
	            return _this._http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
	        };
	        this.Add = function (itemName) {
	            var toAdd = JSON.stringify({ ItemName: itemName });
	            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers }).map(function (res) { return res.json(); });
	        };
	        this.Update = function (id, itemToUpdate) {
	            return _this._http
	                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
	                .map(function (res) { return res.json(); });
	        };
	        this.Delete = function (id) {
	            return _this._http.delete(_this.actionUrl + id);
	        };
	        this.actionUrl = _configuration.Server + 'api/values/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    TestDataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
	    ], TestDataService);
	    return TestDataService;
	}());
	exports.TestDataService = TestDataService;


/***/ },

/***/ 67:
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>hello {{message}}</p>\r\n\r\n    <ul>\r\n        <li *ngFor=\"let value of values\">\r\n            <span>{{value}} </span>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },

/***/ 68:
/*!**************************************************!*\
  !*** ./angular2App/app/about/about.component.ts ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var AboutComponent = (function () {
	    function AboutComponent() {
	        this.message = "Hello from About";
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	    };
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(/*! ./about.component.html */ 69)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ },

/***/ 69:
/*!****************************************************!*\
  !*** ./angular2App/app/about/about.component.html ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>{{message}}</p>\r\n\r\n</div>"

/***/ },

/***/ 70:
/*!**********************************************************!*\
  !*** ./angular2App/app/equipment/equipment.component.ts ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var equipment_service_1 = __webpack_require__(/*! ./equipment.service */ 71);
	var primeng_1 = __webpack_require__(/*! primeng/primeng */ 72);
	var EquipmentComponent = (function () {
	    function EquipmentComponent(_equipmentService) {
	        this._equipmentService = _equipmentService;
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
	    };
	    EquipmentComponent.prototype.onRowSelect = function (event) {
	    };
	    EquipmentComponent.prototype.onRowUnselect = function (event) {
	        this.selected = {};
	    };
	    EquipmentComponent = __decorate([
	        core_1.Component({
	            selector: 'equipmentcomponent',
	            template: __webpack_require__(/*! ./equipment.component.html */ 140),
	            providers: [equipment_service_1.EquipmentService, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.SharedModule]
	        }), 
	        __metadata('design:paramtypes', [equipment_service_1.EquipmentService])
	    ], EquipmentComponent);
	    return EquipmentComponent;
	}());
	exports.EquipmentComponent = EquipmentComponent;


/***/ },

/***/ 71:
/*!********************************************************!*\
  !*** ./angular2App/app/equipment/equipment.service.ts ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 60);
	__webpack_require__(/*! rxjs/add/operator/map */ 61);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
	var EquipmentService = (function () {
	    function EquipmentService(http) {
	        var _this = this;
	        this.http = http;
	        this.equipmentBaseUrl = 'http://localhost:58333/api/equipment';
	        this.getEquipments = function () {
	            console.log("API Equipments");
	            console.log(_this.equipmentBaseUrl);
	            return _this.http.get(_this.equipmentBaseUrl).map(function (res) { return res.json(); }).catch(_this.handleError);
	        };
	    }
	    EquipmentService.prototype.extractData = function (res) {
	        var body = res.json();
	        return body.data || {};
	    };
	    EquipmentService.prototype.handleError = function (error) {
	        console.error('API Equipment server error:', error);
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
	    EquipmentService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], EquipmentService);
	    return EquipmentService;
	}());
	exports.EquipmentService = EquipmentService;


/***/ },

/***/ 140:
/*!************************************************************!*\
  !*** ./angular2App/app/equipment/equipment.component.html ***!
  \************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\r\n    <!--<div class=\"row grid-container\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"table\">\r\n                <table class=\"table table-striped table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Id</th>\r\n                            <th>Equipment</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let equipment of equipments\">\r\n                            <td>{{ equipment.equipmentId }}</td>\r\n                            <td>{{ equipment.name}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"!equipments.length\">\r\n                            <td>&nbsp;</td>\r\n                            <td colspan=\"6\">No Records Found</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <input type=\"text\" pInputText [(ngModel)]=\"current.name\" />{{current.name}}-->\r\n    <p-dataTable [value]=\"equipments\" selectionMode=\"single\" [(selection)]=\"selected\" scrollable=\"true\"  scrollHeight=\"200px\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\"> \r\n        <header>Equipment List</header>\r\n        <footer><div style=\"text-align: left\">Selected: {{selected ? selected.name : 'none'}}</div></footer>\r\n        <p-column field=\"equipmentId\" header=\"Id\"></p-column>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"equipmenttype.name\" header=\"Type\"></p-column>\r\n    </p-dataTable>\r\n    {{selected ? selected.name : any}}\r\n    <input type=\"text\" pInputText [(ngModel)]=\"selected.name\" />\r\n    <equipmenttypeselector [selected]=\"selected.equipmenttype\"></equipmenttypeselector>\r\n    <!--<div>\r\n        Equipment List\r\n        <div class=\"panel-group\">\r\n            <ul>\r\n                <li *ngFor=\"let equipment of equipments\">\r\n                    <span>{{equipment.name}} </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>-->\r\n</div>\r\n"

/***/ },

/***/ 141:
/*!*****************************************************************!*\
  !*** ./angular2App/app/equipmenttype/equipmenttype.selector.ts ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var equipmenttype_service_1 = __webpack_require__(/*! ./equipmenttype.service */ 142);
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
	            template: __webpack_require__(/*! ./equipmenttype.selector.html */ 143),
	            providers: [equipmenttype_service_1.EquipmenttypeService]
	        }), 
	        __metadata('design:paramtypes', [equipmenttype_service_1.EquipmenttypeService])
	    ], EquipmenttypeSelector);
	    return EquipmenttypeSelector;
	}());
	exports.EquipmenttypeSelector = EquipmenttypeSelector;


/***/ },

/***/ 142:
/*!****************************************************************!*\
  !*** ./angular2App/app/equipmenttype/equipmenttype.service.ts ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 60);
	__webpack_require__(/*! rxjs/add/operator/map */ 61);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
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


/***/ },

/***/ 143:
/*!*******************************************************************!*\
  !*** ./angular2App/app/equipmenttype/equipmenttype.selector.html ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <p-dropdown [options]=\"listitem\" [(ngModel)]=\"selecteditem\"></p-dropdown>\r\n    {{selected ? selected.name: any}}\r\n</div>"

/***/ },

/***/ 144:
/*!*********************************************!*\
  !*** ./angular2App/app/core/core.module.ts ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var data_service_1 = __webpack_require__(/*! ./services/data.service */ 59);
	var CoreModule = (function () {
	    function CoreModule() {
	    }
	    CoreModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [],
	            exports: [common_1.CommonModule],
	            providers: [data_service_1.DataService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CoreModule);
	    return CoreModule;
	}());
	exports.CoreModule = CoreModule;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map