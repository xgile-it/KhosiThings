(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");





const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'altgen-angular-ui-app';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-component/header/header.component */ "./src/app/shared-component/header/header.component.ts");
/* harmony import */ var _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-component/footer/footer.component */ "./src/app/shared-component/footer/footer.component.ts");
/* harmony import */ var _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-component/navbar/navbar.component */ "./src/app/shared-component/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");









class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-component/header/header.component */ "./src/app/shared-component/header/header.component.ts");
/* harmony import */ var _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-component/navbar/navbar.component */ "./src/app/shared-component/navbar/navbar.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            console.log('data');
            // $('.dropdown-toggle').dropdown()
        }, 1000);
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 180, vars: 0, consts: [[1, "homeBanner"], [1, "searchBox"], [1, "heading"], [1, "dark"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row"], [1, "col-12", "col-md-3"], [1, "form-group"], [1, "form-control"], ["selected", "", "disabled", ""], ["type", "text", "placeholder", "Industry", 1, "form-control"], ["type", "text", "placeholder", "Location", 1, "form-control"], [1, "col", "d-sm-none"], [1, "col"], ["type", "button", 1, "btn", "jobButton"], [1, "job-highlight"], [1, "col-12", "col-md-6"], [1, "jobInfoBox"], [1, "customHeader"], [1, "countryList"], [1, "company"], [1, "companyLogo"], [1, "companyData"], [1, "jobPosition"], [1, "location"], [1, "jobDetail"], [1, "boxPagination"], [1, "col-12", "col-md-6", "mb-3"], [1, "customBody"], [1, "customItem"], [1, "itemIcon"], [1, "itemDetail"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "YOUR DREAM JOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " STARTS HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Search Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "FIND JOBS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Southern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " East Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "FINANCE MANAGER,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " EMPLOYER APPLICANT TRACKER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " CONTINGENCY RECRUITMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " EXECUTIVE SEARCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " HR SERVICES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " EXECUTIVE COACHING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " CANDIDATE ZONE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " QUALIFICATIONS VERIFICATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " JOB SEARCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: [".homeBanner[_ngcontent-%COMP%] {\n  background-image: url('homeBanner.png');\n  background-size: cover;\n  height: 410px;\n  position: relative;\n  background-repeat: no-repeat;\n  margin-left: -2px;\n  z-index: -1;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  margin: -4.5em auto 15px auto;\n  background: #ebebea;\n  width: 65%;\n  padding: 2em 2em 1em 2em;\n  z-index: 1;\n  color: #0c265d;\n}\n\n@media screen and (max-width: 425px) {\n  .searchBox[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .searchBox[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n\n.searchBox[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 15px;\n}\n\n.searchBox[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .dark[_ngcontent-%COMP%] {\n  font-family: Open_Sans_bold;\n}\n\n@media screen and (max-width: 425px) {\n  .searchBox[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    text-align: center;\n  }\n}\n\n.searchBox[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  float: right;\n}\n\n@media screen and (max-width: 768px) {\n  .searchBox[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.searchBox[_ngcontent-%COMP%]   .jobButton[_ngcontent-%COMP%] {\n  float: right;\n  background: #017fb8;\n  color: #fff;\n  border-radius: 0px;\n}\n\n.searchBox[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #0c265d;\n}\n\n.job-highlight[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 425px) {\n  .job-highlight[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.job-highlight[_ngcontent-%COMP%]   .jobInfoBox[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n@media screen and (min-width: 768px) {\n  .job-highlight[_ngcontent-%COMP%]   .jobInfoBox[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n\n.customHeader[_ngcontent-%COMP%] {\n  background: #0c265d;\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  font-family: Open_Sans_bold;\n  font-size: 14px;\n}\n\n.countryList[_ngcontent-%COMP%] {\n  border: 1px solid #c1c3c5;\n  border-top: 0px;\n  border-bottom: 0px;\n  margin: 0px;\n  list-style: none;\n  padding: 0px;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1em;\n  border-bottom: 1px solid #c1c3c5;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   .companyLogo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border: 1px solid #f0f1f1;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   .companyData[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 15px;\n  align-self: center;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   .companyData[_ngcontent-%COMP%]   .jobPosition[_ngcontent-%COMP%] {\n  color: #0c265d;\n  font-size: 12px;\n  font-family: Open_Sans_bold;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   .companyData[_ngcontent-%COMP%]   .jobPosition[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-family: Open_Sans;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   .companyData[_ngcontent-%COMP%]   .jobDetail[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  color: #b4b8c6;\n  word-break: break-all;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]:hover {\n  background: #edeeee;\n  cursor: pointer;\n}\n\n.countryList[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]:hover   .companyLogo[_ngcontent-%COMP%] {\n  border: 1px solid #e1e2e3;\n}\n\n.boxPagination[_ngcontent-%COMP%] {\n  background: #edeeee;\n  height: 35px;\n  border: 1px solid #c1c3c5;\n  border-top: 0px;\n}\n\n.customBody[_ngcontent-%COMP%] {\n  border: 1px solid #c1c3c5;\n  padding: 1em;\n  padding-bottom: 0px;\n  width: 100%;\n  background: #edeeee;\n  float: left;\n}\n\n.customBody[_ngcontent-%COMP%]   .customItem[_ngcontent-%COMP%] {\n  padding: 1em;\n  background: #fff;\n  float: left;\n  width: 48%;\n  display: flex;\n  margin-bottom: 1em;\n}\n\n.customBody[_ngcontent-%COMP%]   .customItem[_ngcontent-%COMP%]   .itemIcon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border: 1px solid #ebebea;\n}\n\n.customBody[_ngcontent-%COMP%]   .customItem[_ngcontent-%COMP%]   .itemDetail[_ngcontent-%COMP%] {\n  color: #0c265d;\n  font-size: 10px;\n  flex: 1;\n  align-self: center;\n  font-family: Open_Sans_bold;\n  padding-left: 15px;\n}\n\n.customBody[_ngcontent-%COMP%]   .customItem[_ngcontent-%COMP%]:nth-child(even) {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxjQ2xCTztBRGlCWDs7QUFFSTtFQVBKO0lBUVEsZUFBQTtJQUNBLFdBQUE7RUFDTjtBQUNGOztBQUFJO0VBWEo7SUFZUSxtQkFBQTtFQUdOO0FBQ0Y7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFIUTtFQUNJLDJCQUFBO0FBS1o7O0FBSFE7RUFOSjtJQU9RLG1CQUFBO0lBQ0Esa0JBQUE7RUFNVjtBQUNGOztBQUxRO0VBQ0ksWUFBQTtBQU9aOztBQU5ZO0VBRko7SUFHUSxhQUFBO0VBU2Q7QUFDRjs7QUFOSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksY0NsREc7QUQwRFg7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQVFKOztBQVBJO0VBSEo7SUFJUSxXQUFBO0VBVU47QUFDRjs7QUFUSTtFQUNJLG1CQUFBO0FBV1I7O0FBVlE7RUFGSjtJQUdRLG1CQUFBO0VBYVY7QUFDRjs7QUFWQTtFQUNJLG1CQ25FTztFRG9FUCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFhSjs7QUFaSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFjUjs7QUFiUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFlWjs7QUFiUTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZVo7O0FBZFk7RUFDSSxjQ2hHTDtFRGlHSyxlQUFBO0VBQ0EsMkJBQUE7QUFnQmhCOztBQWZnQjtFQUNJLHNCQUFBO0FBaUJwQjs7QUFkWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBZ0JoQjs7QUFiUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQWVaOztBQWRZO0VBQ0kseUJBQUE7QUFnQmhCOztBQVZBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFhSjs7QUFaSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBY1I7O0FBYlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBZVo7O0FBYlE7RUFDSSxjQ3ZKRDtFRHdKQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQWVaOztBQWJRO0VBQ0ksWUFBQTtBQWVaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmhvbWVCYW5uZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVCYW5uZXIucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc2VhcmNoQm94e1xuICAgIG1hcmdpbjogLTQuNWVtIGF1dG8gMTVweCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWE7XG4gICAgd2lkdGg6NjUlO1xuICAgIHBhZGRpbmc6IDJlbSAyZW0gMWVtIDJlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGNvbG9yOiRkYXJrQmx1ZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNXB4KXtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmRhcmt7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3Blbl9TYW5zX2JvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MjVweCl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wZG93bntcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuam9iQnV0dG9ue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMTdmYjg7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG4gICAgLmRyb3Bkb3duIGJ1dHRvbntcbiAgICAgICAgY29sb3I6JGRhcmtCbHVlO1xuICAgIH1cbn1cbi5qb2ItaGlnaGxpZ2h0e1xuICAgIHdpZHRoOjY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNXB4KXtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgLmpvYkluZm9Cb3h7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jdXN0b21IZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogJGRhcmtCbHVlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LWZhbWlseTogT3Blbl9TYW5zX2JvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY291bnRyeUxpc3R7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzFjM2M1O1xuICAgIGJvcmRlci10b3A6MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC5jb21wYW55e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjM2M1O1xuICAgICAgICAuY29tcGFueUxvZ297XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2YwZjFmMTtcbiAgICAgICAgfVxuICAgICAgICAuY29tcGFueURhdGF7XG4gICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAuam9iUG9zaXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6JGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3Blbl9TYW5zX2JvbGQ7XG4gICAgICAgICAgICAgICAgLmxvY2F0aW9ue1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3Blbl9TYW5zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qb2JEZXRhaWx7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6I2I0YjhjNjtcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGVlZWU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAuY29tcGFueUxvZ297XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTJlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJveFBhZ2luYXRpb257XG4gICAgYmFja2dyb3VuZDogI2VkZWVlZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjNTtcbiAgICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi5jdXN0b21Cb2R5e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC5jdXN0b21JdGVte1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDo0OCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgLml0ZW1JY29ue1xuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZWJlYmVhO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtRGV0YWlse1xuICAgICAgICAgICAgY29sb3I6JGRhcmtCbHVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5fU2Fuc19ib2xkO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufSIsIiRkYXJrQmx1ZTogIzBjMjY1ZDtcbiRsaWdodEJsdWU6ICM1N2EyZDI7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-component/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-component/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container"], ["href", "#", 1, "navbar-brand", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "ml-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "searchBox"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Jobseeker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Employer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Recruiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  background: url('logo.jpg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 65px;\n  width: 200px;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #0c265d;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-family: Open_Sans_bold;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #57a2d2;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  padding-left: 7px;\n  background: #edeeee;\n}\n\n.searchBox[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #bac0c7;\n  margin-top: 10px;\n  float: left;\n}\n\n.searchBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  margin-right: 0px !important;\n  margin-bottom: 1px;\n  background: #edeeee;\n  box-shadow: none;\n  float: right;\n  width: 93%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtBQUZSOztBQUdRO0VBQ0ksY0NkRDtFRGVDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRFo7O0FBSVk7RUFDSSxjQ3BCSjtBRGtCWjs7QUFRQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU1JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpSOztBQU1JO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXNcIjtcblxuLmxvZ297XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgO1xuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYge1xuICAgIC5uYXYtaXRlbXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAubmF2LWxpbmt7XG4gICAgICAgICAgICBjb2xvcjokZGFya0JsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5fU2Fuc19ib2xkO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgLm5hdi1saW5re1xuICAgICAgICAgICAgICAgIGNvbG9yOiRsaWdodEJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2hCb3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xuICAgIC5mYXtcbiAgICAgICAgY29sb3I6I2JhYzBjNztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZWVlZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogOTMlO1xuICAgIH1cbn0iLCIkZGFya0JsdWU6ICMwYzI2NWQ7XG4kbGlnaHRCbHVlOiAjNTdhMmQyOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-component/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-component/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 0, consts: [[1, "mini-nav"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "employee services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".mini-nav[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n}\n.mini-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n}\n.mini-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  color: white;\n  margin-right: 30px;\n  font-size: 13px;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.mini-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n@media screen and (max-width: 402px) {\n  .mini-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFUjtBQURRO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBR1o7QUFGWTtFQUNJLGlCQUFBO0FBSWhCO0FBRlk7RUFDSTtJQUNJLGlCQUFBO0VBSWxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluaS1uYXZ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAycHgpe1xuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xgileit\angularproject\altgen-angular-ui (1)\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map