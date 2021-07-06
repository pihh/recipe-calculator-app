(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisement-advertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/advertisement.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/advertisement.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> </ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\" condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Advertisements</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!----\n  <div *ngFor=\"let recipe of items\">\n    <app-card-recipe [recipe]=\"recipe\"></app-card-recipe>\n  </div>\n\n  <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadMore($event)\" loadingSpinner=\"bubbles\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n-->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/advertisement/advertisement-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementPageRoutingModule", function() { return AdvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _advertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisement.page */ "./src/app/pages/advertisement/advertisement.page.ts");




const routes = [
    {
        path: '',
        component: _advertisement_page__WEBPACK_IMPORTED_MODULE_3__["AdvertisementPage"]
    }
];
let AdvertisementPageRoutingModule = class AdvertisementPageRoutingModule {
};
AdvertisementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdvertisementPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/advertisement/advertisement.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementPageModule", function() { return AdvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertisement-routing.module */ "./src/app/pages/advertisement/advertisement-routing.module.ts");
/* harmony import */ var _advertisement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisement.page */ "./src/app/pages/advertisement/advertisement.page.ts");







let AdvertisementPageModule = class AdvertisementPageModule {
};
AdvertisementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvertisementPageRoutingModule"]
        ],
        declarations: [_advertisement_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisementPage"]]
    })
], AdvertisementPageModule);



/***/ }),

/***/ "./src/app/pages/advertisement/advertisement.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvYWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/advertisement/advertisement.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement.page.ts ***!
  \***********************************************************/
/*! exports provided: AdvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementPage", function() { return AdvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdvertisementPage = class AdvertisementPage {
    constructor() { }
    ngOnInit() {
    }
};
AdvertisementPage.ctorParameters = () => [];
AdvertisementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./advertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/advertisement.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./advertisement.page.scss */ "./src/app/pages/advertisement/advertisement.page.scss")).default]
    })
], AdvertisementPage);



/***/ })

}]);
//# sourceMappingURL=pages-advertisement-advertisement-module-es2015.js.map