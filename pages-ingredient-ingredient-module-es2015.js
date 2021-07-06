(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ingredient-ingredient-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredient/ingredient.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredient/ingredient.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header parallaxHeader [parallaxImage]=\"ingredient.thumbnail\" [parallaxTitle]=\"ingredient.name\"\n  parallaxTextColor=\"black\">\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-back-button defaultHref=\"home\" [text]=\"''\" color=\"secondary\" (click)=\"backButtonClick($event)\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">\n      {{ingredient.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"ion-padding \">\n    <p class=\"font-small text-gray\">{{ingredient.description}}</p>\n  </div>\n\n  <ion-header collapse=\"condense\" class=\"ion-no-border pull-top\">\n    <ion-toolbar>\n      <div class=\"h2 px\">Nutritional information</div>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-nutritional-value-display [hasHactionButton]=\"true\" [nutritionalValue]=\"ingredient\">\n  </app-nutritional-value-display>\n  <app-breathe-bottom></app-breathe-bottom>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/ingredient/ingredient-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ingredient/ingredient-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: IngredientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientPageRoutingModule", function() { return IngredientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ingredient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredient.page */ "./src/app/pages/ingredient/ingredient.page.ts");




const routes = [
    {
        path: '',
        component: _ingredient_page__WEBPACK_IMPORTED_MODULE_3__["IngredientPage"]
    }
];
let IngredientPageRoutingModule = class IngredientPageRoutingModule {
};
IngredientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngredientPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ingredient/ingredient.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ingredient/ingredient.module.ts ***!
  \*******************************************************/
/*! exports provided: IngredientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientPageModule", function() { return IngredientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredient-routing.module */ "./src/app/pages/ingredient/ingredient-routing.module.ts");
/* harmony import */ var _ingredient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient.page */ "./src/app/pages/ingredient/ingredient.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../directives/directives.module */ "./src/app/directives/directives.module.ts");









let IngredientPageModule = class IngredientPageModule {
};
IngredientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngredientPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"]
        ],
        declarations: [_ingredient_page__WEBPACK_IMPORTED_MODULE_6__["IngredientPage"]]
    })
], IngredientPageModule);



/***/ }),

/***/ "./src/app/pages/ingredient/ingredient.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ingredient/ingredient.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-cover {\n  background-position: bottom;\n  height: 100vw !important;\n  width: 100vw !important;\n  top: 0 !important;\n  left: 0 !important;\n}\n\n.background-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.pt-0 {\n  padding-top: 0;\n}\n\n.pt-0 p {\n  margin-top: 0;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.card-ingredient {\n  width: 40vw;\n  height: 45vw;\n  display: inline-block;\n}\n\n.card-ingredient ion-card {\n  height: 100%;\n  margin-left: 6px;\n  margin-right: 6px;\n  background-size: cover !important;\n  background-position: center;\n}\n\n.card-ingredient ion-card ion-card-content {\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  color: black;\n}\n\n.ingredient-title {\n  font-weight: 600;\n}\n\n.container-ingredients {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 14px;\n  padding-left: 14px;\n}\n\n.drawer-distance {\n  height: 100px;\n  width: 100vw;\n}\n\n.recipe-title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.inline {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ncmVkaWVudC9pbmdyZWRpZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUNJO0VBQ0UsYUFBQTtBQUNOOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUFOOztBQUVNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQVI7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0U7RUFDRSx5QkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5ncmVkaWVudC9pbmdyZWRpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgaGVpZ2h0OiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIC5iYWNrZ3JvdW5kLW92ZXJsYXl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnB0LTAge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNhcmQtaW5ncmVkaWVudCB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA0NXZ3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgXG4gICAgaW9uLWNhcmQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5pbmdyZWRpZW50LXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmNvbnRhaW5lci1pbmdyZWRpZW50cyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICB9XG4gIFxuICAuZHJhd2VyLWRpc3RhbmNlIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgLnJlY2lwZS10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIFxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuaW5saW5le1xuICAgIGRpc3BsYXk6IGlubGluZVxuICB9XG4gIFxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ingredient/ingredient.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ingredient/ingredient.page.ts ***!
  \*****************************************************/
/*! exports provided: IngredientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientPage", function() { return IngredientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/parallax-header */ "./src/app/utils/parallax-header.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");





let IngredientPage = class IngredientPage {
    constructor(route, events) {
        this.route = route;
        this.events = events;
        this.ingredient = {
            name: "",
            description: "",
            kcals: 0,
            carbs: 0,
            proteins: 0,
            fats: 0,
            categories: []
        };
        this.route.queryParams.subscribe((params) => {
            const ingredient = JSON.parse(params.ingredient);
            const keys = ['name', 'id', 'description', 'kcals', 'carbs', 'proteins', 'fats', 'thumbnail'];
            for (let key of keys) {
                this.ingredient[key] = ingredient[key];
            }
        });
    }
    ngOnInit() {
        this.events.subscribe('ON_BACK_BUTTON_CLICKED', src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_3__["onBackButtonClick"]);
    }
    ngOnDestroy() {
        this.events.destroy('ON_BACK_BUTTON_CLICKED');
    }
    ionViewDidEnter() {
        this.events.publish('ON_PAGE_DID_ENTER');
    }
    backButtonClick($event) {
        Object(src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_3__["onBackButtonClick"])();
    }
};
IngredientPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }
];
IngredientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingredient',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ingredient.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingredient/ingredient.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ingredient.page.scss */ "./src/app/pages/ingredient/ingredient.page.scss")).default]
    })
], IngredientPage);



/***/ })

}]);
//# sourceMappingURL=pages-ingredient-ingredient-module-es2015.js.map