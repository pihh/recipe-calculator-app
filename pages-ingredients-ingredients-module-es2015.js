(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ingredients-ingredients-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredients/ingredients.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredients/ingredients.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header translucent=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScroll($event)\" (ionScrollStart)=\"scrollStart(header)\">\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Ingredients</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"search\" (ionChange)=\"onInput($event)\"></ion-searchbar>\n  </ion-toolbar>\n\n  <div class=\"ingredients-container\">\n    <div *ngFor=\"let ingredient of items;  let index = index\" class=\"ingredient-container\">\n      <app-card-ingredient [ingredient]=\"ingredient\" [odd]=\" 0 === index % 2\" [even]=\" 1 === index % 2\">\n      </app-card-ingredient>\n    </div>\n  </div>\n  <app-breathe-bottom></app-breathe-bottom>\n  <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadMore($event)\" loadingSpinner=\"bubbles\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/ingredients/ingredients-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ingredients/ingredients-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: IngredientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPageRoutingModule", function() { return IngredientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ingredients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients.page */ "./src/app/pages/ingredients/ingredients.page.ts");




const routes = [
    {
        path: '',
        component: _ingredients_page__WEBPACK_IMPORTED_MODULE_3__["IngredientsPage"]
    }
];
let IngredientsPageRoutingModule = class IngredientsPageRoutingModule {
};
IngredientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngredientsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ingredients/ingredients.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ingredients/ingredients.module.ts ***!
  \*********************************************************/
/*! exports provided: IngredientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPageModule", function() { return IngredientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ingredients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredients-routing.module */ "./src/app/pages/ingredients/ingredients-routing.module.ts");
/* harmony import */ var _ingredients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredients.page */ "./src/app/pages/ingredients/ingredients.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");








let IngredientsPageModule = class IngredientsPageModule {
};
IngredientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingredients_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngredientsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_ingredients_page__WEBPACK_IMPORTED_MODULE_6__["IngredientsPage"]]
    })
], IngredientsPageModule);



/***/ }),

/***/ "./src/app/pages/ingredients/ingredients.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/ingredients/ingredients.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ingredient-container {\n  width: 50vw;\n  display: inline-block;\n}\n\n.ingredient-container ion-card {\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBSUk7RUFDSSw2QkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZ3JlZGllbnQtY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4uaW5ncmVkaWVudC1jb250YWluZXIge1xuICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDsgXG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ingredients/ingredients.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ingredients/ingredients.page.ts ***!
  \*******************************************************/
/*! exports provided: IngredientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPage", function() { return IngredientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_ingredients_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/ingredients.model */ "./src/app/models/ingredients.model.ts");
/* harmony import */ var _services_data_v2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data-v2.service */ "./src/app/services/data-v2.service.ts");




const LIMIT = 10;
let IngredientsPage = class IngredientsPage {
    constructor(renderer, model, dataService) {
        this.renderer = renderer;
        this.model = model;
        this.dataService = dataService;
        this.search = "";
        this.page = 1;
        this.items = [];
    }
    ngOnInit() {
        this.loadData();
    }
    scrollStart(header) {
        this.header = header.el;
    }
    logScroll(event) {
        this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
        if (event.detail.scrollTop > Math.max(0, this.lastX)) {
            // Hide
            this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
        }
        else {
            // Show
            this.renderer.setStyle(this.header, 'margin-top', '0px');
        }
        this.lastX = event.detail.scrollTop;
    }
    loadData(infiniteScroll) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.page);
            let skip = this.page;
            // const items = await this.model.get({ skip: skip, limit: LIMIT, search: this.search.trim() });
            const items = yield this.dataService.getIngredients({ skip: skip, limit: LIMIT, search: this.search.trim() });
            if (skip === 1) {
                this.items = items;
            }
            else {
                this.items = this.items.concat(items);
            }
            if (infiniteScroll) {
                infiniteScroll.target.complete();
                if (Array.isArray(items) && items.length < LIMIT) {
                    console.log({ infiniteScroll }, 'disable it');
                }
            }
        });
    }
    loadMore(infiniteScroll) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.page++;
            yield this.loadData(infiniteScroll);
        });
    }
    onInput($event) {
        this.page = 1;
        this.loadData();
    }
};
IngredientsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_models_ingredients_model__WEBPACK_IMPORTED_MODULE_2__["IngredientsModel"] },
    { type: _services_data_v2_service__WEBPACK_IMPORTED_MODULE_3__["DataV2Service"] }
];
IngredientsPage.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['header',] }]
};
IngredientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingredients',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ingredients.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredients/ingredients.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ingredients.page.scss */ "./src/app/pages/ingredients/ingredients.page.scss")).default]
    })
], IngredientsPage);



/***/ })

}]);
//# sourceMappingURL=pages-ingredients-ingredients-module-es2015.js.map