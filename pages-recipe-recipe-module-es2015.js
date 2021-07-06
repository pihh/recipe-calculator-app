(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipe-recipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header parallaxHeader [parallaxImage]=\"recipe.thumbnail\" [parallaxTitle]=\"recipe.name\">\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-back-button defaultHref=\"home\" [text]=\"''\" color=\"secondary\" (click)=\"backButtonClick($event)\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\">\n        <app-favorite [recipe]=\"recipe\"></app-favorite>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">\n      {{recipe.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding bg-app\">\n    <p class=\"font-small text-gray\">{{recipe.description}}</p>\n    <app-recipe-time-dificulty [recipe]=\"recipe\"></app-recipe-time-dificulty>\n  </div>\n  <ion-header collapse=\"condense\" class=\"ion-no-border pull-top\">\n    <ion-toolbar>\n      <div class=\"h2 px\">Nutritional information</div>\n    </ion-toolbar>\n  </ion-header>\n  <app-nutritional-value-display [hasHactionButton]=\"true\" [nutritionalValue]=\"calculatedRecipe\">\n  </app-nutritional-value-display>\n  <ion-header collapse=\"condense\" class=\"ion-no-border ion-header-title-min-height\">\n    <ion-toolbar>\n      <div class=\"h2 px\">Ingredients</div>\n    </ion-toolbar>\n  </ion-header>\n  <div>\n    <div class=\"container-ingredients\">\n      <div *ngFor=\"let q of recipe.quantities\" class=\"card-ingredient \">\n        <ion-card [ngStyle]=\"{'background': 'url( ' + q.ingredient.thumbnail + '  )'}\" class=\"shadow\"\n          growImageToPageHeader [data]=\"q.ingredient\" [thumbnail]=\"q.ingredient.thumbnail\" type=\"ingredient\">\n          <div class=\"card-ingredient-overlay\"></div>\n          <ion-card-content>\n            <div>\n              <div class=\"ingredient-title ion-text-capitalize\">{{q.ingredient.name}}</div>\n              <div>{{q.quantity}}g</div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n  </div>\n\n  <ion-header collapse=\"condense\" class=\"ion-no-border pull-top ml--3 ion-header-title-min-height\">\n    <ion-toolbar>\n      <div class=\"recipe-title-container\">\n        <div class=\"h2 px\">Recipe</div>\n\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"\" *ngFor=\"let step of recipe.steps; let i = index\">\n    <div class=\"h3 ion-padding pb-0\" *ngIf=\"step.type === 'group'\">\n      <strong>\n        {{step.name}}:\n      </strong>\n    </div>\n\n    <div class=\"prc-recipe-step-item ion-padding py-0 font-small text-gray pl-8\" [innerHTML]=\"step.text\" *ngIf=\"step.type === 'instruction'\"></div>\n  </div>\n\n  <div class=\"drawer-distance\"></div>\n</ion-content>\n<app-drawer>\n\n\n  <div class=\"h2 px\">Adjust your recipe</div>\n  <ion-item no-lines>\n    <ion-label position=\"floating\">Desired Calories</ion-label>\n    <ion-input placeholder=\"400\" [(ngModel)]=\"targetKcals\"></ion-input>\n  </ion-item>\n  <ion-item no-lines>\n\n  </ion-item>\n  <div class=\"h2 px\">Fit recipe macros?</div>\n  <ion-item no-lines>\n    <ion-label>Adjust recipe macros?</ion-label>\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"adjustMacros\"></ion-checkbox>\n  </ion-item>\n  <ion-item no-lines>\n\n    <ion-label>Percentage of carbs</ion-label>\n    <ion-input class=\"ion-text-right\" placeholder=\"50\" [(ngModel)]=\"targetCarbs\"></ion-input>\n\n  </ion-item>\n  <ion-item no-lines>\n    <ion-label>Percentage of proteins</ion-label>\n    <ion-input class=\"ion-text-right\" placeholder=\"30\" [(ngModel)]=\"targetProteins\"></ion-input>\n  </ion-item>\n  <ion-item no-lines>\n    <ion-label>Percentage of fats</ion-label>\n    <ion-input class=\"ion-text-right\" placeholder=\"20\" [(ngModel)]=\"targetFats\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"block\" class=\"px margin-top adjust-button\" (click)=\"adjustRecipe()\">Go</ion-button>\n  <app-breathe-bottom></app-breathe-bottom>\n</app-drawer>\n");

/***/ }),

/***/ "./src/app/pages/recipe/recipe-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/recipe/recipe-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RecipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageRoutingModule", function() { return RecipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.page */ "./src/app/pages/recipe/recipe.page.ts");




const routes = [
    {
        path: '',
        component: _recipe_page__WEBPACK_IMPORTED_MODULE_3__["RecipePage"]
    }
];
let RecipePageRoutingModule = class RecipePageRoutingModule {
};
RecipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecipePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recipe/recipe.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/recipe/recipe.module.ts ***!
  \***********************************************/
/*! exports provided: RecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageModule", function() { return RecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-routing.module */ "./src/app/pages/recipe/recipe-routing.module.ts");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe.page */ "./src/app/pages/recipe/recipe.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../directives/directives.module */ "./src/app/directives/directives.module.ts");









let RecipePageModule = class RecipePageModule {
};
RecipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"]
        ],
        declarations: [_recipe_page__WEBPACK_IMPORTED_MODULE_6__["RecipePage"]]
    })
], RecipePageModule);



/***/ }),

/***/ "./src/app/pages/recipe/recipe.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/recipe/recipe.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n.background-image {\n  width: 70vw !important;\n  margin: 0 auto;\n  right: calc( 50% - 35vw );\n  top: 15vw;\n  position: absolute;\n}\n*/\n.background-cover {\n  background: url(\"/assets/images/recipe-background.png\");\n  background-position: bottom;\n  height: 100vw !important;\n  width: 100vw !important;\n  top: 0 !important;\n  left: 0 !important;\n}\n.background-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.fixed-header {\n  position: fixed;\n  top: 0;\n  right: 0;\n  --background: transparent;\n}\n.fixed-header ion-toolbar {\n  --ion-toolbar-background-color: transparent;\n  --ion-toolbar-text-color: white;\n  --background: transparent;\n  --color: white;\n}\n.pt-0 {\n  padding-top: 0;\n}\n.pt-0 p {\n  margin-top: 0;\n}\nion-back-button {\n  --color: white !important;\n}\n.card-ingredient {\n  width: 40vw;\n  height: 45vw;\n  display: inline-block;\n}\n.card-ingredient ion-card {\n  height: 100%;\n  margin-left: 6px;\n  margin-right: 6px;\n  background-size: cover !important;\n  background-position: center;\n}\n.card-ingredient ion-card ion-card-content {\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  color: black;\n}\n.ingredient-title {\n  font-weight: 600;\n}\n.container-ingredients {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 14px;\n  padding-left: 14px;\n}\n.drawer-distance {\n  height: 100px;\n  width: 100vw;\n}\n.recipe-title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-item {\n  --background: transparent;\n}\n.adjust-button {\n  --background: url(/assets/images/recipe-background.png) bottom;\n  --background-position: bottom;\n}\n.inline {\n  display: inline;\n}\n.card-ingredient-overlay {\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+1,ffffff+79&0+0,0.26+80,0.59+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 1%, rgba(255, 255, 255, 0.5) 79%, rgba(255, 255, 255, 0.26) 80%, rgba(255, 255, 255, 0.59) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#96ffffff\",GradientType=0 );\n  /* IE6-9 */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjaXBlL3JlY2lwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBQUE7QUFVQTtFQUNFLHVEQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFERjtBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUNFO0VBQ0UsMkNBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBR0E7RUFDRSxjQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUdBO0VBQ0UseUJBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQU47QUFLQTtFQUNFLGdCQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUtBO0VBQ0UseUJBQUE7QUFGRjtBQUtBO0VBRUUsOERBQUE7RUFDQSw2QkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEscUlBQUE7RUFDMkssYUFBQTtFQUNELDRCQUFBO0VBQzFLLHlMQUFBO0VBQXdLLHFEQUFBO0VBQ3hLLHVIQUFBO0VBQXlILFVBQUE7QUFBM0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNpcGUvcmVjaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICByaWdodDogY2FsYyggNTAlIC0gMzV2dyApO1xuICB0b3A6IDE1dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiovXG5cbi5iYWNrZ3JvdW5kLWNvdmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcmVjaXBlLWJhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGhlaWdodDogMTAwdncgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cblxuLmJhY2tncm91bmQtb3ZlcmxheXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZml4ZWQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi10b29sYmFyLXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1pbmdyZWRpZW50IHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogNDV2dztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuXG4uaW5ncmVkaWVudC10aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250YWluZXItaW5ncmVkaWVudHMge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG59XG5cbi5kcmF3ZXItZGlzdGFuY2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5yZWNpcGUtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYWRqdXN0LWJ1dHRvbntcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjOGMzNmE0IDAlLCAjNjY0YmRjIDEwMCUpXG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL3JlY2lwZS1iYWNrZ3JvdW5kLnBuZykgYm90dG9tO1xuICAtLWJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLmlubGluZXtcbiAgZGlzcGxheTogaW5saW5lXG59XG5cbi5jYXJkLWluZ3JlZGllbnQtb3ZlcmxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jZmZmZmZmKzEsZmZmZmZmKzc5JjArMCwwLjI2KzgwLDAuNTkrMTAwICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDc5JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA4MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC41OSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDElLHJnYmEoMjU1LDI1NSwyNTUsMC41KSA3OSUscmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA4MCUscmdiYSgyNTUsMjU1LDI1NSwwLjU5KSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDElLHJnYmEoMjU1LDI1NSwyNTUsMC41KSA3OSUscmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA4MCUscmdiYSgyNTUsMjU1LDI1NSwwLjU5KSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzk2ZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/recipe/recipe.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/recipe/recipe.page.ts ***!
  \*********************************************/
/*! exports provided: RecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePage", function() { return RecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calculator.service */ "./src/app/services/calculator.service.ts");
/* harmony import */ var _models_recipes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/recipes.model */ "./src/app/models/recipes.model.ts");
/* harmony import */ var _models_ingredients_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../models/ingredients.model */ "./src/app/models/ingredients.model.ts");
/* harmony import */ var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/parallax-header */ "./src/app/utils/parallax-header.ts");
/* harmony import */ var _services_data_v2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/data-v2.service */ "./src/app/services/data-v2.service.ts");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/data */ "./src/app/utils/data.ts");










let RecipePage = class RecipePage {
    constructor(calculator, route, recipeModel, ingredientModel, dataService, events) {
        this.calculator = calculator;
        this.route = route;
        this.recipeModel = recipeModel;
        this.ingredientModel = ingredientModel;
        this.dataService = dataService;
        this.events = events;
        this.recipe = {
            thumbnail: '/assets/images/dish-1.png',
            name: "Chinese Dumplings",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            ingredients: [
                { name: "ingredient 1", thumbnail: "/assets/images/category-1.png", quantity: "100" },
                { name: "ingredient 2", thumbnail: "/assets/images/category-2.png", quantity: "100" },
                { name: "ingredient 3", thumbnail: "/assets/images/category-2.png", quantity: "100" },
            ],
            cookingTime: {
                hour: 1,
                min: 20
            }, steps: _utils_data__WEBPACK_IMPORTED_MODULE_9__["v1"].parseRecipeSteps([
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            ])
        };
        this.calculatedRecipe = {
            kcals: 0,
            proteins: 0,
            carbs: 0,
            fats: 0,
            ingredients: []
        };
        this.targetKcals = 500;
        this.targetCarbs = 50;
        this.targetProteins = 30;
        this.targetFats = 20;
        this.adjustMacros = false;
        this.route.queryParams.subscribe((params) => {
            const recipe = JSON.parse(params.recipe);
            this.recipe.id = recipe.id;
            this.recipe.thumbnail = recipe.thumbnail;
            this.recipe.description = recipe.description;
            this.recipe.name = recipe.name;
            this.recipe.steps = recipe.steps;
            this.loadRecipe();
        });
    }
    ngOnInit() {
        this.events.subscribe('ON_BACK_BUTTON_CLICKED', src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_7__["onBackButtonClick"]);
    }
    ngOnDestroy() {
        this.events.destroy('ON_BACK_BUTTON_CLICKED');
    }
    ionViewDidEnter() {
        this.events.publish('ON_PAGE_DID_ENTER');
    }
    loadRecipe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const recipeId = this.recipe.id;
            // const _data:any = await this.dataService.getRecipes({id:this.recipe.id})
            const _ingredients = [];
            const _recipe = yield this.dataService.getRecipes({ id: this.recipe.id });
            for (let q of _recipe.quantities) {
                q.ingredient = yield this.dataService.getIngredients({ id: q.id });
                _ingredients.push(q.ingredient);
            }
            this.recipe = _recipe;
            this.recipe.ingredients = _ingredients;
            // const data: any = await this.recipeModel.find(recipeId)
            // for (let q of data.quantities) {
            //   q.ingredient = await this.ingredientModel.find(q.ingredient);
            //   this.recipe.ingredients.push(q.ingredient);
            //
            // }
            // this.recipe.quantities = data.quantities;
            // this.recipe.steps = v1.parseRecipeSteps(this.recipe.steps);
            // console.log({ recipe: this.recipe, _recipe: _recipe })
            this.originalRecipe();
        });
    }
    setNewMacros(ingredients = [], nutritionalValue) {
        this.calculatedRecipe.kcals = nutritionalValue.kcals;
        this.calculatedRecipe.carbs = nutritionalValue.carbs;
        this.calculatedRecipe.proteins = nutritionalValue.proteins;
        this.calculatedRecipe.fats = nutritionalValue.fats;
        this.calculatedRecipe.ingredients = ingredients;
    }
    originalRecipe() {
        const { ingredients, nutritionalValue } = this.calculator.original(this.recipe);
        this.setNewMacros(ingredients, nutritionalValue);
    }
    adjustRecipe() {
        let newRecipe = this.calculator.full(this.recipe, this.targetKcals, this.targetCarbs, this.targetProteins, this.targetFats);
        let { ingredients, nutritionalValue } = this.calculator.kcals(newRecipe, this.targetKcals);
        this.setNewMacros(ingredients, nutritionalValue);
        this.events.publish('drawer:close');
    }
    backButtonClick($event) {
        Object(src_app_utils_parallax_header__WEBPACK_IMPORTED_MODULE_7__["onBackButtonClick"])();
    }
};
RecipePage.ctorParameters = () => [
    { type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__["CalculatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _models_recipes_model__WEBPACK_IMPORTED_MODULE_4__["RecipesModel"] },
    { type: _models_ingredients_model__WEBPACK_IMPORTED_MODULE_5__["IngredientsModel"] },
    { type: _services_data_v2_service__WEBPACK_IMPORTED_MODULE_8__["DataV2Service"] },
    { type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }
];
RecipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recipe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe/recipe.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recipe.page.scss */ "./src/app/pages/recipe/recipe.page.scss")).default]
    })
], RecipePage);



/***/ }),

/***/ "./src/app/services/calculator.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/calculator.service.ts ***!
  \************************************************/
/*! exports provided: CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calculator */ "./src/app/utils/calculator.ts");



let CalculatorService = class CalculatorService {
    constructor() { }
    getNutritionData(quantities = [], _ingredients = []) {
        const ingredients = [];
        let nutritionalValue = {
            kcals: 0,
            carbs: 0,
            proteins: 0,
            fats: 0
        };
        // bruteForcing because recipes are kind of small
        quantities.forEach(q => {
            const id = Number.isInteger(q.ingredient) ? q.ingredient : q.ingredient.id;
            for (let ingredient of _ingredients) {
                if (ingredient.id === id) {
                    ingredients.push({
                        ingredient: ingredient,
                        quantity: q.quantity
                    });
                    nutritionalValue.kcals += (ingredient.kcals / 100) * q.quantity;
                    nutritionalValue.carbs += (ingredient.carbs / 100) * q.quantity;
                    nutritionalValue.proteins += (ingredient.proteins / 100) * q.quantity;
                    nutritionalValue.fats +=
                        ((ingredient.fats || ingredient.fat || 0) / 100) * q.quantity;
                }
            }
        });
        Object.keys(nutritionalValue).forEach(key => {
            nutritionalValue[key] = Math.round(nutritionalValue[key]);
        });
        return { ingredients, nutritionalValue };
    }
    extractRecipe(recipe = {}) {
        return this.getNutritionData(recipe.quantities, recipe.ingredients);
    }
    original(recipe) {
        return this.extractRecipe(recipe);
    }
    kcals(recipe, target = 400) {
        let { ingredients, nutritionalValue } = this.extractRecipe(recipe);
        const ratio = target / nutritionalValue.kcals;
        recipe.quantities = recipe.quantities.map(el => {
            el.quantity = Math.round(el.quantity * ratio);
            return el;
        });
        return this.extractRecipe(recipe);
    }
    full(recipe, target = 400, carbs = 50, proteins = 30, fats = 20) {
        const TARGET = {
            C: target * carbs / 100 / 4,
            P: target * proteins / 100 / 4,
            F: target * fats / 100 / 9,
        };
        const updatedRecipe = Object(_utils_calculator__WEBPACK_IMPORTED_MODULE_2__["calculator"])(recipe, TARGET);
        updatedRecipe.quantities = updatedRecipe._quantities;
        // Should add some kind of validation
        return updatedRecipe;
    }
    macros(kcals, carbs, proteins, fats) { }
};
CalculatorService.ctorParameters = () => [];
CalculatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CalculatorService);



/***/ }),

/***/ "./src/app/utils/calculator.ts":
/*!*************************************!*\
  !*** ./src/app/utils/calculator.ts ***!
  \*************************************/
/*! exports provided: calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculator", function() { return calculator; });
/* harmony import */ var _calculator_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator/constants */ "./src/app/utils/calculator/constants.ts");
/* harmony import */ var _calculator_organize_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator/organize-recipe */ "./src/app/utils/calculator/organize-recipe.ts");
/* harmony import */ var _calculator_calculate_current_macros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculate-current-macros */ "./src/app/utils/calculator/calculate-current-macros.ts");
/* harmony import */ var _calculator_calculate_distances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculate-distances */ "./src/app/utils/calculator/calculate-distances.ts");
/* harmony import */ var _calculator_update_recipe_macros__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/update-recipe-macros */ "./src/app/utils/calculator/update-recipe-macros.ts");





const calculator = function (recipe = _calculator_constants__WEBPACK_IMPORTED_MODULE_0__["RECIPE"], target = _calculator_constants__WEBPACK_IMPORTED_MODULE_0__["TARGET"], i = 0) {
    recipe = Object(_calculator_organize_recipe__WEBPACK_IMPORTED_MODULE_1__["organizeRecipe"])(recipe); // recipe._quantities.[type,ingredient,quantity]
    if (i > _calculator_constants__WEBPACK_IMPORTED_MODULE_0__["MAX"])
        return recipe;
    const macros = Object(_calculator_calculate_current_macros__WEBPACK_IMPORTED_MODULE_2__["calculateCurrentMacros"])(recipe);
    const dists = Object(_calculator_calculate_distances__WEBPACK_IMPORTED_MODULE_3__["calculateDistances"])(target, macros);
    Object(_calculator_update_recipe_macros__WEBPACK_IMPORTED_MODULE_4__["updateRecipeMacros"])(recipe, dists);
    i++;
    return calculator(recipe, target, i);
};
///////////////////////// JS VERSION :
/*
const MAX = 10;
const TARGET = {
    C: 125,
    P: 75,
    F: 22.2
};
const RECIPE = {
    quantities: [
        {
            ingredient: 17,
            quantity: 150
        },
        {
            ingredient: 16,
            quantity: 70
        },
        {
            ingredient: 15,
            quantity: 15
        },
        {
            ingredient: 6,
            quantity: 20
        }
    ],
    ingredients: [
        {
            id: 17,
            name: "Chicken breast ",
            description: "Skinless, raw",
            thumbnail: "files/800px_COLOURBOX40324156.jpg",
            kcals: 133,
            carbs: 0,
            fats: 1,
            proteins: 31,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 16,
            name: "Penne pasta",
            description: "Penne pasta raw",
            thumbnail: "files/penne-italian-raw-pasta-white-background-28099368.jpg",
            kcals: 366,
            carbs: 75,
            fats: 2,
            proteins: 12,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 15,
            name: "Pesto",
            description: "Pesto sauce ( Regular )",
            thumbnail:
                "files/homemade-basil-pesto-sauce-glass-jar-white-background-top-view-131117161.jpg",
            kcals: 409,
            carbs: 10,
            fats: 37,
            proteins: 9,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 6,
            name: "sliced black olives",
            description: "",
            thumbnail:
                "files/black-olive-round-slice-marinated-closeup-isolated-white-background-40824080.jpg",
            kcals: 199,
            carbs: 7,
            fats: 19,
            proteins: 0,
            averagePrice: 0,
            calcCalories: true
        }
    ]
};



const defineRecipeIngredientsCategory = function (recipe) {
    recipe._quantities.map(quantity => {
        const ingredient = quantity.ingredient;
        const C = ingredient.carbs * 4;
        const P = ingredient.proteins * 4;
        const F = ingredient.fats * 9;

        if (F > P && F > C) {
            quantity.type = 'F';
        } else if (P > C && P > F) {
            quantity.type = 'P';
        } else {
            quantity.type = 'C'
        }

        return quantity;
    });

    return recipe;
}

const organizeRecipe = function (recipe) {
    let shouldDefineCategories = true;

    const ingredients = recipe.ingredients;
    // If not _quantities , set to quantities
    recipe._quantities = recipe._quantities || recipe.quantities;
    recipe._quantities = recipe._quantities.map(el => {

        const id = el.ingredient;
        const type = el.type;
        for (let ingredient of ingredients) {
            if (id === ingredient.id) {
                el.ingredient = ingredient;
                return el;
            }
        }
        if (!type) shouldDefineCategories = true
        return el;

    });

    if (shouldDefineCategories) recipe = defineRecipeIngredientsCategory(recipe);

    return recipe;
}

const calculateCurrentMacros = function (recipe) {
    let macros = {
        C: 0, P: 0, F: 0
    };

    recipe._quantities = recipe._quantities || [];

    recipe._quantities.forEach(ingredient => {
        macros.C += ingredient.ingredient.carbs * ingredient.quantity / 100;
        macros.P += ingredient.ingredient.proteins * ingredient.quantity / 100;
        macros.F += ingredient.ingredient.fats * ingredient.quantity / 100;
    })

    return macros;
}
const distance = function (macro, target, macros) {
    const t = target[macro];
    const m = macros[macro];
    return t / m;
}

const calculateDistances = function (target, macros) {
    // Where 1 = 100%
    const dists = {
        C: 1,
        P: 1,
        F: 1
    }
    dists.C = distance('C', target, macros);
    dists.P = distance('P', target, macros);
    dists.F = distance('F', target, macros);

    return dists;
}
const updateRecipeMacros = function (recipe, dists) {

    recipe._quantities.map(el => {
        const type = el.type;
        el.quantity = el.quantity * dists[type];
        return el;
    });

    return recipe;
}

const calculator = function (recipe= RECIPE, target = TARGET, i = 0) {
    recipe = organizeRecipe(recipe); // recipe._quantities.[type,ingredient,quantity]

    if (i > MAX) return recipe;

    const macros = calculateCurrentMacros(recipe);
    const dists = calculateDistances(target, macros);

    updateRecipeMacros(recipe, dists);

    i++;
    return calculator(recipe, target, i);
}

function main(){
 return {macros: calculateCurrentMacros(calculator()), target: TARGET, updatedRecipe: calculator()._quantities }
}

main();
*/ 


/***/ }),

/***/ "./src/app/utils/calculator/calculate-current-macros.ts":
/*!**************************************************************!*\
  !*** ./src/app/utils/calculator/calculate-current-macros.ts ***!
  \**************************************************************/
/*! exports provided: calculateCurrentMacros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCurrentMacros", function() { return calculateCurrentMacros; });
const calculateCurrentMacros = function (recipe) {
    let macros = {
        C: 0, P: 0, F: 0
    };
    recipe._quantities = recipe._quantities || [];
    recipe._quantities.forEach(ingredient => {
        macros.C += ingredient.ingredient.carbs * ingredient.quantity / 100;
        macros.P += ingredient.ingredient.proteins * ingredient.quantity / 100;
        macros.F += ingredient.ingredient.fats * ingredient.quantity / 100;
    });
    return macros;
};


/***/ }),

/***/ "./src/app/utils/calculator/calculate-distances.ts":
/*!*********************************************************!*\
  !*** ./src/app/utils/calculator/calculate-distances.ts ***!
  \*********************************************************/
/*! exports provided: calculateDistances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDistances", function() { return calculateDistances; });
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distance */ "./src/app/utils/calculator/distance.ts");

const calculateDistances = function (target, macros) {
    // Where 1 = 100%
    const dists = {
        C: 1,
        P: 1,
        F: 1
    };
    dists.C = Object(_distance__WEBPACK_IMPORTED_MODULE_0__["distance"])('C', target, macros);
    dists.P = Object(_distance__WEBPACK_IMPORTED_MODULE_0__["distance"])('P', target, macros);
    dists.F = Object(_distance__WEBPACK_IMPORTED_MODULE_0__["distance"])('F', target, macros);
    return dists;
};


/***/ }),

/***/ "./src/app/utils/calculator/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/calculator/constants.ts ***!
  \***********************************************/
/*! exports provided: MAX, TARGET, RECIPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX", function() { return MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGET", function() { return TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPE", function() { return RECIPE; });
const MAX = 10;
const TARGET = {
    C: 125,
    P: 75,
    F: 22.2
};
const RECIPE = {
    quantities: [
        {
            ingredient: 17,
            quantity: 150
        },
        {
            ingredient: 16,
            quantity: 70
        },
        {
            ingredient: 15,
            quantity: 15
        },
        {
            ingredient: 6,
            quantity: 20
        }
    ],
    ingredients: [
        {
            id: 17,
            name: "Chicken breast ",
            description: "Skinless, raw",
            thumbnail: "files/800px_COLOURBOX40324156.jpg",
            kcals: 133,
            carbs: 0,
            fats: 1,
            proteins: 31,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 16,
            name: "Penne pasta",
            description: "Penne pasta raw",
            thumbnail: "files/penne-italian-raw-pasta-white-background-28099368.jpg",
            kcals: 366,
            carbs: 75,
            fats: 2,
            proteins: 12,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 15,
            name: "Pesto",
            description: "Pesto sauce ( Regular )",
            thumbnail: "files/homemade-basil-pesto-sauce-glass-jar-white-background-top-view-131117161.jpg",
            kcals: 409,
            carbs: 10,
            fats: 37,
            proteins: 9,
            averagePrice: 0,
            calcCalories: true
        },
        {
            id: 6,
            name: "sliced black olives",
            description: "",
            thumbnail: "files/black-olive-round-slice-marinated-closeup-isolated-white-background-40824080.jpg",
            kcals: 199,
            carbs: 7,
            fats: 19,
            proteins: 0,
            averagePrice: 0,
            calcCalories: true
        }
    ]
};


/***/ }),

/***/ "./src/app/utils/calculator/define-recipe-ingredients-category.ts":
/*!************************************************************************!*\
  !*** ./src/app/utils/calculator/define-recipe-ingredients-category.ts ***!
  \************************************************************************/
/*! exports provided: defineRecipeIngredientsCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineRecipeIngredientsCategory", function() { return defineRecipeIngredientsCategory; });
const defineRecipeIngredientsCategory = function (recipe) {
    recipe._quantities.map(quantity => {
        const ingredient = quantity.ingredient;
        const C = ingredient.carbs * 4;
        const P = ingredient.proteins * 4;
        const F = ingredient.fats * 9;
        if (F > P && F > C) {
            quantity.type = 'F';
        }
        else if (P > C && P > F) {
            quantity.type = 'P';
        }
        else {
            quantity.type = 'C';
        }
        return quantity;
    });
    return recipe;
};


/***/ }),

/***/ "./src/app/utils/calculator/distance.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/calculator/distance.ts ***!
  \**********************************************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
const distance = function (macro, target, macros) {
    const t = target[macro];
    const m = macros[macro];
    return t / m;
};


/***/ }),

/***/ "./src/app/utils/calculator/organize-recipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/utils/calculator/organize-recipe.ts ***!
  \*****************************************************/
/*! exports provided: organizeRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizeRecipe", function() { return organizeRecipe; });
/* harmony import */ var _define_recipe_ingredients_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define-recipe-ingredients-category */ "./src/app/utils/calculator/define-recipe-ingredients-category.ts");

// import { definePercentageOfMacro } from './define-percentage-of-macro';
const organizeRecipe = function (recipe) {
    let shouldDefineCategories = true;
    let shouldMapPercentageOfType = false;
    const ingredients = recipe.ingredients;
    if (!recipe._quantities) {
        recipe._quantities = recipe.quantities;
        shouldMapPercentageOfType = true;
    }
    // If not _quantities , set to quantities
    recipe._quantities = recipe._quantities.map(el => {
        const id = el.ingredient;
        const type = el.type;
        for (let ingredient of ingredients) {
            if (id === ingredient.id) {
                el.ingredient = ingredient;
                return el;
            }
        }
        if (!type)
            shouldDefineCategories = true;
        return el;
    });
    if (shouldDefineCategories)
        recipe = Object(_define_recipe_ingredients_category__WEBPACK_IMPORTED_MODULE_0__["defineRecipeIngredientsCategory"])(recipe);
    // if (shouldMapPercentageOfType) recipe = definePercentageOfMacro(recipe);
    return recipe;
};


/***/ }),

/***/ "./src/app/utils/calculator/update-recipe-macros.ts":
/*!**********************************************************!*\
  !*** ./src/app/utils/calculator/update-recipe-macros.ts ***!
  \**********************************************************/
/*! exports provided: updateRecipeMacros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRecipeMacros", function() { return updateRecipeMacros; });
const updateRecipeMacros = function (recipe, dists) {
    recipe._quantities.map(el => {
        const type = el.type;
        el.quantity = el.quantity * dists[type];
        return el;
    });
    return recipe;
};


/***/ })

}]);
//# sourceMappingURL=pages-recipe-recipe-module-es2015.js.map