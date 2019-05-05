(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<main-nav>\n    <router-outlet></router-outlet>\n</main-nav>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Collab';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _discover_discover_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./discover/discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project-form/project-form.component */ "./src/app/project-form/project-form.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _user_profile_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-profile/edit-user-profile/edit-user-profile.component */ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var _tags_autocomplete_tags_autocomplete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tags-autocomplete/tags-autocomplete.component */ "./src/app/tags-autocomplete/tags-autocomplete.component.ts");
/* harmony import */ var _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-profile/user-info/user-info.component */ "./src/app/user-profile/user-info/user-info.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_8__["ExampleComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__["MainNavComponent"],
                _discover_discover_component__WEBPACK_IMPORTED_MODULE_15__["DiscoverComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"],
                _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_17__["ProjectFormComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_20__["ProjectComponent"],
                _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_21__["ProjectCardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["UserProfileComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_24__["TagsComponent"],
                _user_profile_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_25__["EditUserProfileComponent"],
                _tags_autocomplete_tags_autocomplete_component__WEBPACK_IMPORTED_MODULE_26__["TagsAutocompleteComponent"],
                _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_27__["UserInfoComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"]
            ],
            exports: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_13__["MainNavComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [
                _user_profile_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_25__["EditUserProfileComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/discover/discover.component.css":
/*!*************************************************!*\
  !*** ./src/app/discover/discover.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n}\n\n.grid-container {\n    margin: 20px;\n    width: 1200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDogMTIwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/discover/discover.component.html":
/*!**************************************************!*\
  !*** ./src/app/discover/discover.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search (searchEventEmitter)=\"onSearch($event)\"></app-search>\n<div class=\"row\">\n    <div class=\"grid-container\">\n        <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"380\" (window:resize)=\"onResize($event)\">\n            <mat-grid-tile\n                *ngFor=\"let project of projects\"\n                [colspan]=\"1\"\n                [rowspan]=\"1\"\n            >\n                <app-project-card [project]=\"project\"></app-project-card>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discover/discover.component.ts":
/*!************************************************!*\
  !*** ./src/app/discover/discover.component.ts ***!
  \************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _discover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover.service */ "./src/app/discover/discover.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var log = console.log;
var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(discoverService, router) {
        this.discoverService = discoverService;
        this.router = router;
        this.error = false;
        this.projects = [];
        this.user_id = localStorage.getItem("user_id");
        this.username = localStorage.getItem("username");
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.breakpoint = Math.ceil(window.innerWidth / 600);
    };
    DiscoverComponent.prototype.onResize = function (event) {
        this.breakpoint = Math.ceil(window.innerWidth / 600);
    };
    DiscoverComponent.prototype.getProjects = function () {
        var _this = this;
        this.discoverService.getProjects().subscribe(function (response) {
            _this.projects = response;
        }, function (error) {
            _this.error = true;
        });
    };
    DiscoverComponent.prototype.onSearch = function (searchProjects) {
        var _this = this;
        this.discoverService.getProjectsBySearch(searchProjects).subscribe(function (response) {
            _this.projects = response;
        }, function (err) {
            log('Error searching for projects: ', err);
        });
    };
    DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-discover",
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/discover/discover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_discover_service__WEBPACK_IMPORTED_MODULE_2__["DiscoverService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/discover/discover.service.ts":
/*!**********************************************!*\
  !*** ./src/app/discover/discover.service.ts ***!
  \**********************************************/
/*! exports provided: DiscoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverService", function() { return DiscoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var DiscoverService = /** @class */ (function () {
    function DiscoverService(httpClient) {
        this.httpClient = httpClient;
    }
    DiscoverService.prototype.getProjects = function () {
        return this.httpClient.get("api/projects");
    };
    DiscoverService.prototype.getProjectsWithTags = function () {
        return this.httpClient.get("api/projects?withTags=True");
    };
    DiscoverService.prototype.getProjectsBySearch = function (searchOptions) {
        return this.httpClient.post('api/projects/search', {
            searchByProjects: searchOptions.projects,
            searchByTags: searchOptions.tags,
            searchByUsers: searchOptions.users
        });
    };
    DiscoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DiscoverService);
    return DiscoverService;
}());



/***/ }),

/***/ "./src/app/example/example.component.css":
/*!***********************************************!*\
  !*** ./src/app/example/example.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  example works!\n</p>\n"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/example/example.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    // returns an HttpHeaders object with the current user's auth token
    HttpService.prototype.addAuthToken = function (header) {
        // Checks to see if current user is logged in
        if (sessionStorage.getItem('currentUser')) {
            return header.append('Authorization', 'Token ' + JSON.parse(sessionStorage.getItem('currentUser'))['token']);
        }
        return header;
    };
    // performs a get request after calling the addAuthToken function
    HttpService.prototype.get = function (url) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header = this.addAuthToken(header);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/" + url, { headers: header, withCredentials: true });
    };
    // performs a post request after calling the addAuthToken function
    HttpService.prototype.post = function (url, data) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header = this.addAuthToken(header);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/" + url, data, { headers: header, withCredentials: true });
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /* Wraps the HttpClient object to add the current users authorization token
           saved in the browsers sessionStorage under the key 'token', to any supported
           http requests (GET, POST) */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n          </mat-form-field>\n        </div>\n      </div>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router, snackBar) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.snackBar = snackBar;
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.login(this.loginForm.value).subscribe(function (response) {
            _this.error = false;
            localStorage.setItem("username", response["username"]);
            localStorage.setItem("user_id", response["id"]);
            _this.loginService.setLoginStatus(true);
            _this.router.navigate(['/discover']);
        }, function (error) {
            _this.snackBar.open("The username or password is incorrect.", "Dismiss", {
                duration: 2500
            });
            console.log(error);
            _this.error = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
        // componenet that handels user login
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LoginService.prototype.login = function (data) {
        // login
        return this.httpClient.post("api/user/login/", data);
    };
    LoginService.prototype.logout = function () {
        return this.httpClient.get("api/user/logout");
    };
    LoginService.prototype.setLoginStatus = function (status) {
        this.subject.next({ status: status });
    };
    LoginService.prototype.getLoginStatus = function () {
        return this.subject.asObservable();
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  You have successfully logged out!\n</h3>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (response) {
            localStorage.clear();
            _this.loginService.setLoginStatus(false);
            _this.router.navigate(['/discover']);
        }, function (error) {
            console.log(error);
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n  background-color: #34A1EB;\n}\n\n.mat-toolbar.mat-primary {\n  background-color:#34A1EB;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.spacer{\n  flex: 1 1 auto;\n}\n\nmat-toolbar a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwwLDAsLjI0KTtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0QTFFQjtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzRBMUVCO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc3BhY2Vye1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbm1hdC10b29sYmFyIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uaGlkZGVue1xuICBkaXNwbGF5Om5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"false\"\n      [ngClass]=\"{hidden: !(isHandset$ | async)}\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <span *ngFor=\"let link of navLinks; index as i\">\n        <a mat-list-item *ngIf=\"navLinks[i].name == 'Logout'\" routerLink=\"#\" (click)=\"$event.preventDefault();properLogout()\">Logout</a>\n        <a mat-list-item *ngIf=\"navLinks[i].name == 'Profile'\" routerLink=\"{{link.url + currentUsername}}\">{{link.name}}</a>\n        <a mat-list-item *ngIf=\"navLinks[i].name != 'Logout' && navLinks[i].name != 'Profile'\" routerLink=\"{{link.url}}\">{{link.name}}</a>\n      </span>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"side-buttons\">\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n        svgIcon=\"thumbs-up\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <a routerLink=\"/\">Project Collab</a>\n      <span class=\"spacer\"></span>\n      <div *ngIf=\"!(isHandset$ | async)\">\n        <span *ngFor=\"let link of navLinks; index as i\">\n          <a *ngIf=\"navLinks[i].name == 'Logout'\" routerLink=\"#\" (click)=\"$event.preventDefault();properLogout()\">Logout</a>\n          <a *ngIf=\"navLinks[i].name == 'Profile'\" routerLink=\"{{link.url + currentUsername}}\">{{link.name}}</a>\n          <a *ngIf=\"navLinks[i].name != 'Logout' && navLinks[i].name != 'Profile'\" routerLink=\"{{link.url}}\">{{link.name}}</a>\n        </span>\n      </div>\n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, iconRegistry, sanitizer, loginService, snackbar, router) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.loginService = loginService;
        this.snackbar = snackbar;
        this.router = router;
        this.navLinks = [];
        //default links when users are logged in
        this.loggedInLinks = [
            this.createNavLinkObject("Create Project", "create"),
            this.createNavLinkObject("Logout", "logout"),
            this.createNavLinkObject("Profile", "user/"),
        ];
        //default links when users are not logged in
        this.loggedOutLinks = [
            this.createNavLinkObject("Login", "login"),
            this.createNavLinkObject("Signup", "registration")
        ];
        // default common links across states
        this.commonLinks = [
            this.createNavLinkObject("Discover", "discover")
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
        // subscribe to nav-bar to login service
        this.subscription = this.loginService.getLoginStatus().subscribe(function (login) {
            _this.navLinks = login.status ? _this.commonLinks.concat(_this.loggedInLinks) : _this.commonLinks.concat(_this.loggedOutLinks);
            _this.currentUsername = localStorage.getItem("username");
        });
    }
    //populate nav-bar based on login status
    MainNavComponent.prototype.ngOnInit = function () {
        this.currentUsername = localStorage.getItem("username");
        this.navLinks = this.currentUsername == null ? this.commonLinks.concat(this.loggedOutLinks) : this.commonLinks.concat(this.loggedInLinks);
    };
    MainNavComponent.prototype.createNavLinkObject = function (name, url) {
        return Object.assign({}, {
            name: name,
            url: url
        });
    };
    MainNavComponent.prototype.properLogout = function () {
        var _this = this;
        this.snackbar.open("You have successfully logged out. You will now be redirected to the home page.", "Dismiss", {
            duration: 2500
        });
        setTimeout(function () {
            _this.router.navigate(['/logout']);
        }, 3000); // 3s
    };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/project-card/project-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/project-card/project-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  cursor: pointer;\n}\n\n.dashboard-card:hover {\n  box-shadow: 0 0 20px rgba(33,33,33,.2);\n}\n\n.mat-card-content{\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  /* outline: 1px solid red; */\n}\n\n.profile-card-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin: 1px;\n}\n\n.profile-card-tags {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.profile-card-github {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: left;\n}\n\n.profile-card-github:hover {\n  text-decoration: underline;\n}\n\n.profile-card-user {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  float: right;\n}\n\n.profile-card-user:hover {\n  text-decoration: underline;\n}\n\n.no-decoration {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhc2hib2FyZC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgzMywzMywzMywuMik7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50e1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLnByb2ZpbGUtY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5wcm9maWxlLWNhcmQtdGFncyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1jYXJkLWdpdGh1YiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcm9maWxlLWNhcmQtZ2l0aHViOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm9maWxlLWNhcmQtdXNlciB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZmlsZS1jYXJkLXVzZXI6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5vLWRlY29yYXRpb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/project-card/project-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-card/project-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"project\" class=\"dashboard-card\">\n  <img (click)=\"redirectProject(project)\" mat-card-image src=\"{{ project.image }}\"\n    style=\"height: 200px; object-fit: cover;\" />\n\n  <mat-card-title (click)=\"redirectProject(project)\">\n    {{ project.name }}\n  </mat-card-title>\n\n  <mat-card-content (click)=\"redirectProject(project)\" class=\"dashboard-card-content\">\n    {{ project.description }}\n  </mat-card-content>\n\n  <mat-card-footer class=\"profile-card-footer\">\n    <app-tags class=\"profile-card-tags\" [tags]=\"project.tags\"></app-tags>\n    <span class=\"profile-card-github\">\n      <a class=\"no-decoration\" href=\"{{ project.github }}\">Project Link</a>\n    </span>\n    <button class=\"profile-card-user\" id='discover-project' mat-raised-button color=\"primary\" (click)=\"onEdit(project)\"\n      *ngIf=\"project.owner.username == username\" type=\"button\">Edit</button>\n    <span class=\"profile-card-user\" *ngIf=\"project.owner.username != username\">\n      <a class=\"no-decoration\" routerLink=\"/user/{{project.owner.username}}\">{{ project.owner.username }}</a>\n    </span>\n  </mat-card-footer>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/project-card/project-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent(router) {
        this.router = router;
        this.project = null;
        this.username = localStorage.getItem("username");
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    ProjectCardComponent.prototype.onEdit = function (project) {
        localStorage.setItem("project", JSON.stringify(project));
        this.router.navigate(['/create']);
    };
    ProjectCardComponent.prototype.redirectProject = function (project) {
        this.router.navigate(["/project/" + project.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCardComponent.prototype, "project", void 0);
    ProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-card',
            template: __webpack_require__(/*! ./project-card.component.html */ "./src/app/project-card/project-card.component.html"),
            styles: [__webpack_require__(/*! ./project-card.component.css */ "./src/app/project-card/project-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/project-form/project-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/project-form/project-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-form {\n  padding-top: 50px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.project-full-width {\n  width: 100%;\n}\n\n.main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1mb3JtL3Byb2plY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/project-form/project-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-form/project-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='projectForm' class=\"main-div\">\n  <form class=\"project-form\" [formGroup]=\"projectForm\" novalidate (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"shipping-card\">\n      <mat-card-header>\n        <mat-card-title *ngIf=\"project\">Edit Project</mat-card-title>\n        <mat-card-title *ngIf=\"!project\">Create Project</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field appearance=\"fill\" class=\"project-full-width\">\n              <input id='project-form-name' matInput placeholder=\"Project Name\" formControlName=\"name\" required>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field appearance=\"fill\" class=\"project-full-width\">\n              <textarea rows=\"8\" cols=\"80\" id='project-form-description' matInput placeholder=\"Project Description\" formControlName=\"description\" required></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field appearance=\"fill\" class=\"project-full-width\">\n              <textarea rows=\"8\" cols=\"80\" id='project-form-tasks_required' matInput placeholder=\"Tasks Required\" formControlName=\"tasks_required\" required></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field appearance=\"fill\" class=\"project-full-width\">\n              <input id='project-form-url' matInput placeholder=\"URL\" formControlName=\"url\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field appearance=\"fill\" class=\"project-full-width\">\n              <input id='project-form-github' matInput placeholder=\"Github\" formControlName=\"github\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <app-tags-autocomplete [group]=\"projectForm\" (tagsChanged)=\"tagsChangedHandler($event)\" class=\"project-full-width\"></app-tags-autocomplete>\n          </div>\n        </div>\n        <div class=\"row\">\n          Upload an Image (Optional):\n          <div class=\"col\">\n            <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n            <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n            <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\">\n          </div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button id='project-form-delete' mat-raised-button color=\"primary\" (click)=\"onDelete()\" *ngIf=\"project\" type=\"delete\">Delete</button>\n        <button id='project=form-back' mat-raised-button color=\"primary\" (click)=\"onBack()\">Back</button>\n        <button id='project-form-submit' mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/project-form/project-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-form/project-form.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function() { return ProjectFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-form.service */ "./src/app/project-form/project-form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tags_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tags/tags.service */ "./src/app/tags/tags.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(fb, projectFormService, router, snackBar, tagService, location) {
        this.fb = fb;
        this.projectFormService = projectFormService;
        this.router = router;
        this.snackBar = snackBar;
        this.tagService = tagService;
        this.location = location;
        this.submitted = false;
        this.deleted = false;
        this.response = null;
        this.addedTags = [];
        this.removedTags = [];
    }
    ProjectFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.project) {
            this.projectFormService.create(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.projectForm.value, { image: this.imgURL })).subscribe(function (response) {
                _this.response = response;
                _this.updateProjectTags(response['id']);
                _this.router.navigate(['/discover']);
            }, function (error) {
                _this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss", {
                    duration: 2500
                });
                console.log(error);
            });
        }
        else {
            this.projectFormService.edit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.projectForm.value, { image: this.imgURL }), this.project.id).subscribe(function (response) {
                _this.response = response;
                _this.updateProjectTags(response['id']);
                _this.router.navigate(['/discover']);
            }, function (error) {
                _this.snackBar.open("One or more of the fields are filled in incorrectly.", "Dismiss", {
                    duration: 2500
                });
                console.log(error);
            });
        }
    };
    ProjectFormComponent.prototype.onDelete = function () {
        var _this = this;
        this.deleted = true;
        this.projectFormService.delete({ 'id': this.project.id }).subscribe(function (response) {
            _this.router.navigate(['/discover']);
        }, function (error) {
            _this.snackBar.open("The project was not deleted.", "Dismiss", {
                duration: 2500
            });
            console.log(error);
        });
    };
    ProjectFormComponent.prototype.onBack = function () {
        this.location.back();
    };
    ProjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.project = JSON.parse(localStorage.getItem('project'));
        localStorage.removeItem("project");
        // This is kind of a hack because the project doesn't always contain the tags at the moment
        // so just fetch the tags independently.
        // When accessing the edit project from from the discover page, the tags are not available,
        // but when accessing the edit project form from the project detail page they are.
        if (this.project) {
            this.tagService.getForProject(this.project.id).subscribe(function (tags) {
                _this.projectForm = _this.fb.group({
                    user_id: localStorage.getItem("user_id"),
                    name: [_this.project && _this.project["name"] || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    description: [_this.project && _this.project.description || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    tasks_required: [_this.project && _this.project.tasks_required || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    url: [_this.project && _this.project.url || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    github: [_this.project && _this.project.github || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    tags: [tags.map(function (tag) { return tag.tag; }).splice(0)]
                });
            });
        }
        else {
            this.projectForm = this.fb.group({
                user_id: localStorage.getItem("user_id"),
                name: [this.project && this.project["name"] || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                description: [this.project && this.project.description || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                tasks_required: [this.project && this.project.tasks_required || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                url: [this.project && this.project.url || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                github: [this.project && this.project.github || null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                tags: []
            });
        }
    };
    ProjectFormComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    ProjectFormComponent.prototype.updateProjectTags = function (projectId) {
        var _this = this;
        if (this.addedTags.length > 0) {
            this.tagService.addToProject(projectId, { tags: this.addedTags }).subscribe(function (_) { }, function (error) {
                _this.snackBar.open('Unable to add tags to project', 'Dismiss', {
                    duration: 2500
                });
                console.log(error);
            });
        }
        if (this.removedTags.length > 0) {
            this.tagService.removeFromProject(projectId, { tags: this.removedTags }).subscribe(function (_) { }, function (error) {
                _this.snackBar.open('Unable to remove tags from project', 'Dismiss', {
                    duration: 2500
                });
                console.log(error);
            });
        }
    };
    ProjectFormComponent.prototype.tagsChangedHandler = function (tags) {
        var tagInput = this.projectForm.get('tags').value || [];
        this.addedTags = tags.filter(function (tag) { return tagInput.indexOf(tag) === -1; });
        this.removedTags = tagInput.filter(function (tag) { return tags.indexOf(tag) === -1; });
    };
    ProjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-form',
            template: __webpack_require__(/*! ./project-form.component.html */ "./src/app/project-form/project-form.component.html"),
            styles: [__webpack_require__(/*! ./project-form.component.css */ "./src/app/project-form/project-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _project_form_service__WEBPACK_IMPORTED_MODULE_3__["ProjectFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _tags_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/project-form/project-form.service.ts":
/*!******************************************************!*\
  !*** ./src/app/project-form/project-form.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormService", function() { return ProjectFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ProjectFormService = /** @class */ (function () {
    function ProjectFormService(httpClient) {
        this.httpClient = httpClient;
    }
    ProjectFormService.prototype.create = function (data) {
        return this.httpClient.post('api/project', data);
    };
    ProjectFormService.prototype.edit = function (data, id) {
        return this.httpClient.post('api/project/' + id + '/update', data);
    };
    ProjectFormService.prototype.delete = function (data) {
        return this.httpClient.post('api/project/remove', data);
    };
    ProjectFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ProjectFormService);
    return ProjectFormService;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button {\n  padding: 0 10px;\n}\n\n.mat-card-subtitle {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.mat-card-subtitle:hover {\n  text-decoration: underline;\n}\n\n.project-detail-mat-card {\n  margin: 50px;\n}\n\n.project-title {\n  font-size: 40px;\n}\n\n.project-title-alt {\n  font-size: 100px;\n}\n\n.project-icon {\n  float: left;\n  font-size: 28px;\n  margin-right: 10px;\n  color: black;\n}\n\n.link-description {\n  font-size: 16px;\n}\n\n.links-container {\n  padding: 0;\n}\n\n.single-link-container {\n  font-size: 14px;\n  display: grid;\n}\n\n.fill-container {\n  height: 100%;\n  width: 100%;\n}\n\n#discover-project {\n  margin: 16px 0;\n}\n\n.mat-list-item-avatar:not(:last-child) {\n  float: left;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.contact-wrapper {\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n}\n\n.clickable:hover {\n  box-shadow: 0 0 20px rgba(33,33,33,.2);\n}\n\nbutton.mat-list-avatar {\n  background-color:rgba(205, 224, 236, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvamVjdC1kZXRhaWwtbWF0LWNhcmQge1xuICBtYXJnaW46IDUwcHg7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucHJvamVjdC10aXRsZS1hbHQge1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuXG4ucHJvamVjdC1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5saW5rLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGlua3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpbmdsZS1saW5rLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmZpbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2Rpc2NvdmVyLXByb2plY3Qge1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5tYXQtbGlzdC1pdGVtLWF2YXRhcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmNvbnRhY3Qtd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbGlja2FibGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDMzLDMzLDMzLC4yKTtcbn1cblxuYnV0dG9uLm1hdC1saXN0LWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDUsIDIyNCwgMjM2LCAwLjcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"project-detail-mat-card\" *ngIf=\"project && user && associated_users\">\n    <mat-grid-list [cols]=\"breakpoint\" rowHeight=800px (window:resize)=\"onResize($event)\">\n        <mat-grid-tile *ngIf=\"project.image\" [colspan]=2 [style.border-right]=\"'1px dashed #ddd'\">\n            <img src=\"{{ project.image }}\" alt=\"Project Image\" />\n        </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"!project.image\" [colspan]=2 [style.border-right]=\"'1px dashed #ddd'\">\n            <header class=\"project-title-alt\">{{ project.name }}</header>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=2>\n            <section class=\"description fill-container\">\n                <mat-card class=\"fill-container\">\n                    <mat-card-title class=\"project-title\">{{ project.name }}</mat-card-title>\n\n                    <mat-card-subtitle\n                        routerLink=\"/user/{{ project.owner.username }}\"\n                        >{{ project.owner.username }}</mat-card-subtitle\n                    >\n\n                    <mat-card-title>Description</mat-card-title>\n                    <p>{{ project.description }}</p>\n\n                    <mat-card-title>Tasks Required</mat-card-title>\n                    <p>{{ project.tasks_required }}</p>\n\n                    <mat-card-title>Links</mat-card-title>\n                    <mat-card-actions>\n                        <mat-list class=\"links-container\">\n                            <mat-list-item *ngIf=\"user.email\">\n                                <a href=\"mailto:{{ user.email }}\">\n                                    <fa-icon class=\"project-icon\" [icon]=\"faEnvelope\"></fa-icon>\n                                </a>\n                                <div class=\"single-link-container\">\n                                    <mat-label class=\"link-description\">Email</mat-label>\n                                    <a href=\"mailto:{{ user.email }}\">{{ user.email }}</a>\n                                </div>\n                            </mat-list-item>\n                            <mat-list-item *ngIf=\"github\">\n                                <a href=\"https://github.com/{{ github }}\">\n                                    <fa-icon class=\"project-icon\" [icon]=\"faGithub\"></fa-icon>\n                                </a>\n                                <div class=\"single-link-container\">\n                                    <mat-label class=\"link-description\">Github</mat-label>\n                                    <a href=\"https://github.com/{{ github }}\">{{ github }}</a>\n                                </div>\n                            </mat-list-item>\n                            <mat-list-item *ngIf=\"project.url\">\n                                <a href=\"{{ project.url }}\">\n                                    <fa-icon class=\"project-icon\" [icon]=\"faLink\"></fa-icon>\n                                </a>\n                                <div class=\"single-link-container\">\n                                    <mat-label class=\"link-description\">Website</mat-label>\n                                    <a class=\"project-link\" href=\"{{ project.url }}\">{{ project.url }}</a>\n                                </div>\n                            </mat-list-item>\n                        </mat-list>\n                    </mat-card-actions>\n                    <mat-card-title>Members</mat-card-title>\n                    <mat-list>\n                        <mat-list-item *ngFor=\"let usr of associated_users\">\n                            <div class=\"contact-wrapper\">\n                                <a routerLink=\"/user/{{ usr.user.username }}\">\n                                    <img class=\"clickable\" *ngIf=\"usr.user.photo\" matListAvatar src=\"{{ usr.user.photo }}\" alt=\"{{ usr.user.username }}\">\n                                    <button class=\"clickable\" mat-icon-button color=\"secondary\" *ngIf=\"!usr.user.photo\" matListAvatar>{{ usr.user.name.charAt(0) }}</button>\n                                </a>\n                                <p matLine>{{ usr.user.username }}</p>\n                            </div>\n                        </mat-list-item>\n                    </mat-list>\n\n                    <button id='discover-project' mat-raised-button color=\"primary\" (click)=\"onEdit(project)\"\n                      *ngIf=\"project.owner.username == username\" type=\"button\">Edit</button>\n                    <app-tags class=\"profile-card-tags\" [tags]=\"project.tags\"></app-tags>\n                </mat-card>\n            </section>\n        </mat-grid-tile>\n    </mat-grid-list>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.service */ "./src/app/project/project.service.ts");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _user_profile_user_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-profile/user-profile.service */ "./src/app/user-profile/user-profile.service.ts");







var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, router, projectService, userService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.userService = userService;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLink"];
    }
    ProjectComponent.prototype.onEdit = function (project) {
        localStorage.setItem("project", JSON.stringify(project));
        this.router.navigate(['/create']);
    };
    ProjectComponent.prototype.onResize = function (event) {
        this.breakpoint = (window.innerWidth >= 600) ? 4 : 2;
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectId = this.route.snapshot.paramMap.get("id");
        this.username = localStorage.getItem("username");
        this.breakpoint = (window.innerWidth >= 600) ? 4 : 2;
        this.projectService.getProject(this.projectId).subscribe(function (response) {
            _this.project = response;
            if (_this.project.github) {
                _this.github = _this.project.github.replace("https://github.com/", "");
            }
            _this.userService.getUser(_this.project.owner.username).subscribe(function (response) {
                _this.user = response;
            });
            _this.projectService.getUsers(_this.project.id).subscribe(function (response) {
                _this.associated_users = response;
            });
        });
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-project",
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _user_profile_user_profile_service__WEBPACK_IMPORTED_MODULE_6__["UserProfileService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient) {
        this.httpClient = httpClient;
    }
    ProjectService.prototype.getProject = function (projectId) {
        return this.httpClient.get("api/project/" + projectId + "?withTags=true");
    };
    ProjectService.prototype.getUsers = function (projectId) {
        return this.httpClient.get("api/user_associations/project/" + projectId);
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper [linear]=true #stepper (window:resize)=\"onResize($event)\" *ngIf=\"verticalFlag\" >\n  <mat-step [stepControl]=\"firstGroup\">\n    <form [formGroup]=\"firstGroup\">\n      <ng-template matStepLabel>Login Details</ng-template>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Password (>=8)\" formControlName=\"password\" type=\"password\" required>\n        </mat-form-field>\n      </div>\n      <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Confirm Password\" formControlName=\"passwordConfirm\" type=\"password\" required>\n      </mat-form-field>\n    </div>\n      <div>\n        <button (click)=\"checkPasswordsButton()\" mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondGroup\">\n    <form [formGroup]=\"secondGroup\">\n      <ng-template matStepLabel>Contact Info</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdGroup\">\n    <form [formGroup]=\"thirdGroup\" (ngSubmit)=\"onSubmit()\">\n      <ng-template matStepLabel>Personal Info</ng-template>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Complete!</ng-template>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button (click)=\"redirect()\" mat-raised-button color=\"primary\" type=\"submit\">Continue</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n<mat-horizontal-stepper [linear]=true #stepper (window:resize)=\"onResize($event)\" *ngIf=\"!verticalFlag\">\n  <mat-step [stepControl]=\"firstGroup\">\n    <form [formGroup]=\"firstGroup\">\n      <ng-template matStepLabel>Login Details</ng-template>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Password (>=8)\" formControlName=\"password\" type=\"password\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Confirm Password\" formControlName=\"passwordConfirm\" type=\"password\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <button (click)=\"checkPasswordsButton()\" mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondGroup\">\n    <form [formGroup]=\"secondGroup\">\n      <ng-template matStepLabel>Contact Info</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdGroup\">\n    <form [formGroup]=\"thirdGroup\" (ngSubmit)=\"onSubmit()\">\n      <ng-template matStepLabel>Personal Info</ng-template>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Complete!</ng-template>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button (click)=\"redirect()\" mat-raised-button color=\"primary\" type=\"submit\">Continue</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.service */ "./src/app/registration/registration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_formBuilder, registrationService, router, snackBar) {
        this._formBuilder = _formBuilder;
        this.registrationService = registrationService;
        this.router = router;
        this.snackBar = snackBar;
        this.isLinear = true;
        this.lastBack = false;
        this.hasUnitNumber = false;
        this.error = false;
        this.verticalFlag = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.verticalFlag = (window.innerWidth < 600);
        this.firstGroup = this._formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            passwordConfirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]]
        }, { validator: this.checkPasswords });
        this.secondGroup = this._formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
        this.thirdGroup = this._formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegistrationComponent.prototype.onResize = function (event) {
        this.verticalFlag = (window.innerWidth < 600);
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data = { "name": this.thirdGroup.value.firstName + " " + this.thirdGroup.value.lastName,
            "username": this.firstGroup.value.username,
            "bio": "",
            "password": this.firstGroup.value.password,
            "email": this.secondGroup.value.email,
            "photo": "",
            "linked_in": "",
            "github": "" };
        if (this.firstGroup.value.password != this.firstGroup.value.passwordConfirm) {
            this.snackBar.open("The passwords did not match.", "Dismiss", {
                duration: 2500
            });
        }
        else {
            this.registrationService.registration(this.data, "student").subscribe(function (response) {
                _this.snackBar.open("Your registration has succeeded. Welcome to Project Collab!", "Dismiss", {
                    duration: 2500
                });
                _this.error = false;
            }, function (error) {
                _this.snackBar.open("The username has already been taken.", "Dismiss", {
                    duration: 2500
                });
                _this.error = true;
                console.log(error);
            });
        }
    };
    RegistrationComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.passwordConfirm.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    RegistrationComponent.prototype.checkPasswordsButton = function () {
        if (this.checkPasswords(this.firstGroup)) {
            this.snackBar.open("The passwords do not match", "Dismiss", {
                duration: 2500
            });
        }
    };
    RegistrationComponent.prototype.redirect = function () {
        this.router.navigateByUrl('login');
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        })
        // component that handles user registration
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/registration.service.ts ***!
  \******************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var RegistrationService = /** @class */ (function () {
    function RegistrationService(httpClient) {
        this.httpClient = httpClient;
    }
    RegistrationService.prototype.registration = function (data, type) {
        // registration
        return this.httpClient.post("api/users/" + type, data);
    };
    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _discover_discover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../discover/discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project-form/project-form.component */ "./src/app/project-form/project-form.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");











var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    { path: 'discover', component: _discover_discover_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverComponent"] },
    { path: 'create', component: _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_8__["ProjectFormComponent"] },
    { path: 'user/:username', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"] },
    { path: 'project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"] },
    { path: '', redirectTo: '/discover', pathMatch: 'full' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-wrap {\n  overflow: hidden;\n  text-overflow: clip;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: nowrap;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8td3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"expand\" (opened)=\"open()\" hideToggle>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      <mat-icon>search</mat-icon>\n      &nbsp;\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let tag of filterTags\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"removeFilterTag(tag)\"\n          color=\"accent\" selected>\n          {{tag}}\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n        </mat-chip>\n        <mat-chip *ngFor=\"let user of filterUsers\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"removeUserTag(user)\"\n          color=\"primary\" selected>\n          {{user}}\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n        </mat-chip>\n        <mat-chip *ngFor=\"let project of filterProjects\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"removeProjectTag(project)\"\n          color=\"warn\" selected>\n          {{project}}\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n      <!-- <input matInput placeholder=\"Search Projects by tags, users, or more ... \"> -->\n    </mat-panel-title>\n    <mat-panel-description style=\"padding-top: 5px; justify-content: space-between\">\n      <span></span>\n      Search by #Tag or @UserName or ProjectName\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <mat-grid-list cols=\"1\">\n    <!-- Use when tags get implimented -->\n    <mat-list-item class=\"no-wrap\">\n      Recomended Tags: &nbsp;\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let tag of recomendedTags\" [value]=\"tag\" [selectable]=\"selectable\" [removable]=\"removable\"\n          (removed)=\"removeRecomendedTag(tag)\">\n          {{tag}}\n          <mat-icon matChipRemove *ngIf=\"removable\">add</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </mat-list-item>\n    <mat-divider [inset]=\"true\"></mat-divider>\n    <form [formGroup]=\"formGroup\">\n      <mat-list-item>\n        <mat-form-field style=\"padding-top: 20px; width: 100%; text-align: right\">\n          <input matInput placeholder=\"Search All Projects\" formControlName=\"searchProjectsControl\" [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"addFilterProjectChipEvent($event)\" [matAutocomplete]=\"project\">\n        </mat-form-field>\n        <mat-autocomplete #project=\"matAutocomplete\">\n          <mat-option *ngFor=\"let project of filteredSearchProjects | async\" [value]=\"project\" (click)=\"addFilterProject(project)\">\n            {{project}}\n          </mat-option>\n        </mat-autocomplete>\n    </mat-list-item>\n    </form>\n  </mat-grid-list>\n  <mat-action-row>\n    <button mat-button (click)=\"search()\">Search</button>\n  </mat-action-row>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.expand = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.filterTags = [];
        this.filterUsers = [];
        this.filterProjects = [];
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            searchTagsControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            searchUsersControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            searchProjectsControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        // Emitter to talk to discover page
        this.searchEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getRecommendedTags().subscribe(function (tags) {
            _this.recomendedTags = tags;
            _this.filteredSearchTags = _this.formGroup.get('searchTagsControl').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filterTags(value); }));
        });
        this.searchService.getUsers().subscribe(function (users) {
            _this.searchUsers = users.map(function (user) { return user.username; });
            _this.filteredSearchUsers = _this.formGroup.get('searchUsersControl').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filterUsers(value); }));
        });
        this.searchService.getProjects().subscribe(function (projects) {
            _this.searchProjects = projects.map(function (project) { return project.name; });
            _this.filteredSearchProjects = _this.formGroup.get('searchProjectsControl').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filterProjects(value); }));
        });
    };
    SearchComponent.prototype._filterTags = function (value) {
        var filterValue = value.toLowerCase();
        return this.searchTags.filter(function (tag) { return tag.toLowerCase().includes(filterValue); });
    };
    SearchComponent.prototype._filterUsers = function (value) {
        var filterValue = value.toLowerCase();
        return this.searchUsers.filter(function (tag) { return tag.toLowerCase().includes(filterValue); });
    };
    SearchComponent.prototype._filterProjects = function (value) {
        var filterValue = value.toLowerCase();
        return this.searchProjects.filter(function (tag) { return tag.toLowerCase().includes(filterValue); });
    };
    SearchComponent.prototype.open = function () {
        this.expand = true;
    };
    SearchComponent.prototype.addFilterTag = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.filterTags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
            this.formGroup.get('searchTagsControl').setValue('');
        }
    };
    SearchComponent.prototype.addFilterUser = function (user) {
        // Add our fruit
        if ((user || '').trim() && !this.filterUsers.includes(user.trim())) {
            this.filterUsers.push(user.trim());
        }
    };
    SearchComponent.prototype.addFilterUserChipEvent = function (event) {
        var input = event.input;
        var value = event.value;
        this.addFilterUser(value);
        // Reset the input value
        if (input) {
            input.value = '';
            this.formGroup.get('searchUsersControl').setValue('');
        }
    };
    SearchComponent.prototype.addFilterProject = function (project) {
        // Add our fruit
        if ((project || '').trim() && !this.filterProjects.includes(project.trim())) {
            this.filterProjects.push(project.trim());
        }
    };
    SearchComponent.prototype.addFilterProjectChipEvent = function (event) {
        var input = event.input;
        var value = event.value;
        this.addFilterProject(value);
        // Reset the input value
        if (input) {
            input.value = '';
            this.formGroup.get('searchProjectsControl').setValue('');
        }
    };
    SearchComponent.prototype.removeFilterTag = function (tag) {
        var index = this.filterTags.indexOf(tag);
        if (index >= 0) {
            this.filterTags.splice(index, 1);
        }
    };
    SearchComponent.prototype.removeUserTag = function (tag) {
        var index = this.filterUsers.indexOf(tag);
        if (index >= 0) {
            this.filterUsers.splice(index, 1);
        }
    };
    SearchComponent.prototype.removeProjectTag = function (project) {
        var index = this.filterProjects.indexOf(project);
        if (index >= 0) {
            this.filterProjects.splice(index, 1);
        }
    };
    SearchComponent.prototype.removeRecomendedTag = function (tag) {
        var index = this.recomendedTags.indexOf(tag);
        if (index >= 0) {
            this.recomendedTags.splice(index, 1);
            this.filterTags.push(tag);
        }
    };
    SearchComponent.prototype.search = function () {
        this.expand = false;
        var filterOptions = {
            projects: this.filterProjects,
            tags: this.filterTags,
            users: this.filterUsers
        };
        this.searchEventEmitter.emit(filterOptions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "searchEventEmitter", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var GET_USERS_URL = 'api/users';
var GET_PROJECTS_URL = 'api/projects?withTags=True';
var GET_RECOMMENDED_TAGS_URL = 'api/tags/recommend';
var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
    }
    SearchService.prototype.getUsers = function () {
        return this.httpClient.get(GET_USERS_URL);
    };
    SearchService.prototype.getProjects = function () {
        return this.httpClient.get(GET_PROJECTS_URL);
    };
    SearchService.prototype.getRecommendedTags = function () {
        return this.httpClient.get(GET_RECOMMENDED_TAGS_URL);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/tags-autocomplete/tags-autocomplete.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tags-autocomplete/tags-autocomplete.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-autocomplete {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFncy1hdXRvY29tcGxldGUvdGFncy1hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MtYXV0b2NvbXBsZXRlL3RhZ3MtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnLWF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tags-autocomplete/tags-autocomplete.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tags-autocomplete/tags-autocomplete.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-chip-list tag-autocomplete\" [formGroup]=\"group\">\n  <mat-chip-list #chipList>\n    <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(tag)\" color=\"primary\">\n      {{tag}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"Tags\" #tagInput [formControl]=\"tagAutocompleteController\" [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\n      {{tag}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/tags-autocomplete/tags-autocomplete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tags-autocomplete/tags-autocomplete.component.ts ***!
  \******************************************************************/
/*! exports provided: TagsAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsAutocompleteComponent", function() { return TagsAutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var TagsAutocompleteComponent = /** @class */ (function () {
    function TagsAutocompleteComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tags = [];
        this.tagsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tagAutocompleteController = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.allTags = [];
        this.filteredTags = this.tagAutocompleteController.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (tag) { return tag ? _this._filter(tag) : _this.allTags.slice(); }));
    }
    TagsAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tagInput = this.group.get('tags').value;
        // TODO: Create a new endpoint to search for tags containing a substring of the input?
        // TODO: Make this more generic so it can be used for user tags too?
        this.searchService.getRecommendedTags().subscribe(function (tags) {
            _this.allTags = tags;
        });
        if (tagInput) {
            this.tags = tagInput.slice(0);
        }
    };
    TagsAutocompleteComponent.prototype.add = function (event) {
        // Add tag only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (this.matAutocomplete.isOpen) {
            return;
        }
        var input = event.input;
        var value = event.value;
        // Avoid duplicate tags
        if (this.tags.indexOf(value) === -1) {
            // Add our tag
            if ((value || '').trim()) {
                this.tags.push(value.trim());
                this.tagsChanged.emit(this.tags);
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.tagAutocompleteController.setValue(null);
    };
    TagsAutocompleteComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.tagsChanged.emit(this.tags);
        }
    };
    TagsAutocompleteComponent.prototype.selected = function (event) {
        var value = event.option.viewValue;
        if (this.tags.indexOf(value) === -1) {
            this.tags.push(event.option.viewValue);
            this.tagsChanged.emit(this.tags);
        }
        this.tagInput.nativeElement.value = '';
        this.tagAutocompleteController.setValue(null);
    };
    TagsAutocompleteComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allTags.filter(function (tag) { return tag.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], TagsAutocompleteComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsAutocompleteComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], TagsAutocompleteComponent.prototype, "tagsChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tagInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], TagsAutocompleteComponent.prototype, "tagInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], TagsAutocompleteComponent.prototype, "matAutocomplete", void 0);
    TagsAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tags-autocomplete',
            template: __webpack_require__(/*! ./tags-autocomplete.component.html */ "./src/app/tags-autocomplete/tags-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./tags-autocomplete.component.css */ "./src/app/tags-autocomplete/tags-autocomplete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], TagsAutocompleteComponent);
    return TagsAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/tags/tags.component.css":
/*!*****************************************!*\
  !*** ./src/app/tags/tags.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\n  max-width: 200px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNoaXAge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tags/tags.component.html":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"tags\">\n  <mat-chip *ngFor=\"let tag of tags\" color=\"{{ colour }}\" selected>\n    {{tag}}\n  </mat-chip>\n</mat-chip-list>"

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.service */ "./src/app/tags/tags.service.ts");



var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagsService) {
        this.tagsService = tagsService;
        this.tags = [];
        this.error = false;
    }
    TagsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsComponent.prototype, "tags", void 0);
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/tags/tags.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/tags/tags.service.ts":
/*!**************************************!*\
  !*** ./src/app/tags/tags.service.ts ***!
  \**************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var TagsService = /** @class */ (function () {
    function TagsService(httpClient) {
        this.httpClient = httpClient;
    }
    TagsService.prototype.getForProject = function (projectId) {
        return this.httpClient.get('api/tags/project/' + projectId);
    };
    TagsService.prototype.getForUser = function (username) {
        return this.httpClient.get('api/tags/user/' + username);
    };
    TagsService.prototype.addToUser = function (username, data) {
        return this.httpClient.post('api/tags/user/' + username, data);
    };
    TagsService.prototype.removeFromUser = function (username, data) {
        return this.httpClient.post('api/tags/user/' + username + "/remove", data);
    };
    TagsService.prototype.addToProject = function (projectId, data) {
        return this.httpClient.post('api/tags/project/' + projectId, data);
    };
    TagsService.prototype.removeFromProject = function (projectId, data) {
        return this.httpClient.post('api/tags/project/' + projectId + '/remove', data);
    };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/user-profile/edit-user-profile/edit-user-profile.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL2VkaXQtdXNlci1wcm9maWxlL2VkaXQtdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9lZGl0LXVzZXItcHJvZmlsZS9lZGl0LXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXBwaW5nLWNhcmQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/user-profile/edit-user-profile/edit-user-profile.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit Profile</h1>\n<form [formGroup]=\"editUserForm\">\n    <div mat-dialog-content>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Name\" formControlName=\"name\"/>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Email\" formControlName=\"email\"/>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"LinkedIn\" formControlName=\"linked_in\"/>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Github\" formControlName=\"github\"/>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <textarea matInput placeholder=\"Bio\" formControlName=\"bio\"></textarea>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                    <app-tags-autocomplete [group]=\"editUserForm\" (tagsChanged)=\"tagsChangedHandler($event)\" class=\"project-full-width\"></app-tags-autocomplete>\n                </div>\n            </div>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-raised-button type=\"submit\" (click)=\"onSubmit()\">\n            Save\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user-profile/edit-user-profile/edit-user-profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function() { return EditUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user-profile.service */ "./src/app/user-profile/edit-user-profile/edit-user-profile.service.ts");





var log = console.log;
var EditUserProfileComponent = /** @class */ (function () {
    function EditUserProfileComponent(fb, editUserProfileService, dialogRef, data) {
        this.fb = fb;
        this.editUserProfileService = editUserProfileService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.addedTags = [];
        this.removedTags = [];
        this.originalTags = [];
        this.editUserForm = this.fb.group({
            id: [this.data.id],
            name: [this.data.name],
            email: [this.data.email],
            linked_in: [this.data.linked_in],
            github: [this.data.github],
            bio: [this.data.bio],
            tags: [this.data.tags]
        });
        this.originalTags = this.data.tags; //Used to evaluate addition and removal of tags
        this.username = this.data.username;
    }
    EditUserProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editUserProfileService.saveUser(this.editUserForm.value).subscribe(function (result) {
            _this.dialogRef.close();
        }, function (err) { return log(err); });
        this.editUserProfileService.saveTags(this.username, this.addedTags).subscribe(function (result) {
        }, function (err) { return log(err); });
        this.editUserProfileService.removeTags(this.username, this.removedTags).subscribe(function (result) {
        }, function (err) { return log(err); });
    };
    EditUserProfileComponent.prototype.tagsChangedHandler = function (tags) {
        var _this = this;
        this.addedTags = tags.filter(function (tag) { return _this.originalTags.indexOf(tag) === -1; });
        this.removedTags = this.originalTags.filter(function (tag) { return tags.indexOf(tag) === -1; });
    };
    EditUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user-profile',
            template: __webpack_require__(/*! ./edit-user-profile.component.html */ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-profile.component.css */ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _edit_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["EditUserProfileService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditUserProfileComponent);
    return EditUserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/edit-user-profile/edit-user-profile.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-profile/edit-user-profile/edit-user-profile.service.ts ***!
  \*****************************************************************************/
/*! exports provided: EditUserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileService", function() { return EditUserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");



var EditUserProfileService = /** @class */ (function () {
    function EditUserProfileService(httpClient) {
        this.httpClient = httpClient;
    }
    EditUserProfileService.prototype.saveUser = function (user) {
        return this.httpClient.post('api/user/update', user);
    };
    EditUserProfileService.prototype.saveTags = function (username, tags) {
        return this.httpClient.post('api/tags/user/' + username, { tags: tags });
    };
    EditUserProfileService.prototype.removeTags = function (username, tags) {
        return this.httpClient.post('api/tags/user/' + username + "/remove", { tags: tags });
    };
    EditUserProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EditUserProfileService);
    return EditUserProfileService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-info/user-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user-profile/user-info/user-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n    width: 350px;\n}\n\n.dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n}\n\n.more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user-profile/user-info/user-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user-profile/user-info/user-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"460\" *ngIf=\"user\">\n    <mat-grid-tile colspan=\"1\" rowspan=\"1\">\n        <mat-card class=\"dashboard-card\">\n            <img\n                mat-card-image\n                src=\"{{ user.photo }}\"\n                style=\"object-fit: cover;\"\n            />\n            <mat-card-header>\n                <mat-card-title>\n                    {{ user.name }}\n                    <button\n                        *ngIf=\"isOwner\"\n                        (click)=\"editProfile()\"\n                        mat-icon-button\n                        class=\"more-button\"\n                        aria-label=\"Change Profile Picture\"\n                    >\n                        <mat-icon>create</mat-icon>\n                    </button>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"dashboard-card-content\">\n                <mat-list>\n                    <mat-list-item>\n                        <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n                        <p mat-line>\n                            <a href=\"mailto:{{ user.email }}\">{{\n                                user.email\n                            }}</a>\n                        </p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <fa-icon [icon]=\"faLinkedin\"></fa-icon>\n                        <p mat-line>\n                            <a href=\"{{ user.linked_in }}\">{{\n                                user.linked_in\n                            }}</a>\n                        </p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <fa-icon [icon]=\"faGithub\"></fa-icon>\n                        <p mat-line>\n                            <a href=\"https://github.com/{{ user.github }}\">\n                                {{ user.github }}\n                            </a>\n                        </p>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <h2>Bio</h2>\n                <p>{{ user.bio }}</p>\n                <app-tags class=\"profile-card-tags\" [tags]=\"tags\"></app-tags>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/user-profile/user-info/user-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-profile/user-info/user-info.component.ts ***!
  \***************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile.service */ "./src/app/user-profile/user-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-user-profile/edit-user-profile.component */ "./src/app/user-profile/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");








var log = console.log;
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(dialog, userProfileService, route) {
        this.dialog = dialog;
        this.userProfileService = userProfileService;
        this.route = route;
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLinkedin"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
        this.isOwner = false;
        this.currentUsername = localStorage.getItem('username');
        this.tags = [];
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getUser(params.get('username'));
            _this.getTags(params.get('username'));
        });
    };
    UserInfoComponent.prototype.getTags = function (username) {
        var _this = this;
        this.userProfileService.getTags(username).subscribe(function (tags) {
            _this.tags = tags;
        }, function (error) { return log(error); });
    };
    UserInfoComponent.prototype.getUser = function (username) {
        var _this = this;
        this.userProfileService.getUser(username).subscribe(function (user) {
            _this.user = user;
            if (user.username == _this.currentUsername) {
                _this.isOwner = true;
            }
        }, function (error) { return log(error); });
    };
    UserInfoComponent.prototype.editProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditUserProfileComponent"], {
            width: '500px',
            data: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.user, { tags: this.tags, username: this.user.username })
        });
        dialogRef.afterClosed().subscribe(function (_) { return _this.ngOnInit(); });
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-profile/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-profile/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n}\n\n.profile {\n    width: 350px;\n}\n\n.projects {\n    width: 750px;\n}\n\n.project-title {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n}\n\n.more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ucHJvZmlsZSB7XG4gICAgd2lkdGg6IDM1MHB4O1xufVxuXG4ucHJvamVjdHMge1xuICAgIHdpZHRoOiA3NTBweDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"profile\" *ngIf=\"!(isHandset$ | async)\">\n      <app-user-info></app-user-info>\n    </div>\n    <div class=\"projects\">\n      <app-user-info *ngIf=\"isHandset$ | async\"></app-user-info>\n        <h1 class=\"project-title\">Projects</h1>\n        <mat-grid-list cols=\"2\" rowHeight=\"450px\">\n            <mat-grid-tile\n                *ngFor=\"let project of projects\"\n                [colspan]=\"responsRow | async\"\n                [rowspan]=\"1\"\n            >\n                <app-project-card [project]=\"project\"></app-project-card>\n            </mat-grid-tile>\n        </mat-grid-list>\n        <h3 class=\"project-title\">Similar Projects</h3>\n            <mat-grid-list cols=\"2\" rowHeight=\"450px\">\n              <mat-grid-tile\n                *ngFor=\"let project of recommendedProjects\"\n                [colspan]=\"responsRow | async\"\n                [rowspan]=\"1\"\n              >\n              <app-project-card [project]=\"project\"></app-project-card>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.service */ "./src/app/user-profile/user-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");







var log = console.log;
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(breakpointObserver, userProfileService, route, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.userProfileService = userProfileService;
        this.route = route;
        this.dialog = dialog;
        this.projects = [];
        this.recommendedProjects = [];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }));
        this.responsRow = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var matches = _a.matches;
            return matches ? 2 : 1;
        }));
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getProjects(params.get("username"));
            _this.getRecommendedProjects(params.get("username"));
        });
    };
    UserProfileComponent.prototype.getProjects = function (username) {
        var _this = this;
        this.userProfileService
            .getProjects(username)
            .subscribe(function (projects) { return (_this.projects = projects); }, function (error) { return log(error); });
    };
    UserProfileComponent.prototype.getRecommendedProjects = function (username) {
        var _this = this;
        // Call API for recommended projects
        this.userProfileService
            .getRecProjects(username)
            .subscribe(function (projects) { return (_this.recommendedProjects = projects); }, function (error) { return log(error); });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"],
            _user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-profile/user-profile.service.ts ***!
  \******************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var UserProfileService = /** @class */ (function () {
    function UserProfileService(httpClient) {
        this.httpClient = httpClient;
    }
    UserProfileService.prototype.getUser = function (username) {
        return this.httpClient.get("api/users/" + username);
    };
    UserProfileService.prototype.getTags = function (username) {
        return this.httpClient.get("api/tags/user/" + username);
    };
    UserProfileService.prototype.getProjects = function (username) {
        return this.httpClient.get("api/user_associations/user/" + username);
    };
    UserProfileService.prototype.getRecProjects = function (username) {
        return this.httpClient.get("api/recommend/" + username);
    };
    UserProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], UserProfileService);
    return UserProfileService;
}());



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
var environment = {
    production: false,
    API_URL: "http://localhost:8000"
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\year4\302\Collab.io\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map