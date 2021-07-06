(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" #header>\n  <ion-toolbar>\n    <ion-title> </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScroll($event)\" (ionScrollStart)=\"scrollStart(header)\">\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Featured</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Hidden pagination hack buttons -->\n  <button (click)=\"transitionRight()\" id=\"recipe-slider-transition-right-button\" class=\"slider-hidden-button\"></button>\n  <button (click)=\"transitionLeft()\" id=\"recipe-slider-transition-left-button\" class=\"slider-hidden-button\"></button>\n\n  <!-- Slider -->\n  <div class=\"ion-padding\">\n    <div #expandableRecipe growImageToPageHeader [data]=\"activeRecipe\" [thumbnail]=\"activeRecipe.thumbnail\">\n      <div class=\"slide-touchpad-container\" *ngIf=\"activeRecipe\">\n        <div class=\"slide-touchpad\">\n          <div class=\"slide-container\">\n            <div class=\"slide-content\">\n              <div class=\"slide-text \" #activeContent\n                [ngClass]=\"{'slide-right-hidden-initial-state': willSlideRight, 'slide-left-hidden-initial-state': willSlideLeft, 'slide-transition-opacity slide-transition-margin': isSliding}\">\n                <div>\n                  <div class=\"slide-text-title\">\n                    <h1 class=\"slide-text-title-h1 ion-text-capitalize\">{{activeRecipe.name}}</h1>\n                    <p class=\"slide-text-title-p\">{{activeRecipe.description}}</p>\n                  </div>\n\n                  <app-recipe-time-dificulty [recipe]=\"activeRecipe\" [inline]=\"false\"></app-recipe-time-dificulty>\n                </div>\n              </div>\n              <div class=\"slide-picture\">\n                <img #activeImage [src]=\"activeRecipe.featuredImage\" [alt]=\"activeRecipe.name + 'thumbnail'\"\n                  [ngClass]=\"{'slide-right-hidden-initial-state': willSlideRight, 'slide-left-hidden-initial-state': willSlideLeft, 'slide-transition-opacity slide-transition-margin': isSliding}\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" #slides class=\"shadow-lg\">\n        <ion-slide *ngFor=\"let recipe of featuredRecipes\">\n          <div class=\"slide-background\"></div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <!-- Categories Slider-->\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <div class=\"h2 px\">Categories</div>\n    </ion-toolbar>\n  </ion-header>\n  <div>\n    <div class=\"container-categories pull-top\">\n      <div *ngFor=\"let category of categories\" class=\"card-category \">\n        <ion-card [ngStyle]=\"{'background': 'url(/assets/images/recipe-background.png)','background-size': 'cover'}\" class=\"shadow\">\n          <ion-card-content [ngStyle]=\"{'background': 'url( ' + category.thumbnail + '  )','background-size':'cover'}\" >\n            {{category.name}}\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <!-- Add padding on left & right inside the -->\n  </div>\n\n  <!-- Popular Recipes Slider-->\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border pull-top\">\n    <ion-toolbar>\n      <div class=\"h2 px\">Popular Recipes</div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"pull-top\">\n    <div *ngFor=\"let recipe of recipes\">\n      <app-card-recipe [recipe]=\"recipe\"></app-card-recipe>\n\n    </div>\n    <div>\n      <app-card-recipe></app-card-recipe>\n    </div>\n  </div>\n\n  <!-- Extra spacing -->\n  <app-breathe-bottom></app-breathe-bottom>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/animations/discover-recipe-card-slide.animation.ts":
/*!********************************************************************!*\
  !*** ./src/app/animations/discover-recipe-card-slide.animation.ts ***!
  \********************************************************************/
/*! exports provided: discoverRecipeCardSlideAnimation, discoverRecipeCardSlideAnimationDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverRecipeCardSlideAnimation", function() { return discoverRecipeCardSlideAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverRecipeCardSlideAnimationDuration", function() { return discoverRecipeCardSlideAnimationDuration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");


const DURATION = 200;
const TRANSLATE_MIN = '0px';
const TRANSLATE_MAX = '50vw';
const ROTATE_MAX = '180deg';
const ROTATE_MIN = '0deg';
const SCALE_MIN = 0.5;
const SCALE_MAX = 1;
const OPACITY_MIN = 0.2;
const OPACITY_MAX = 1;
const discoverRecipeCardSlideAnimation = function (baseElement, opts) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
        if (opts.side === "right") {
            const slideOut = animationController.create()
                .addElement(baseElement)
                .duration(DURATION)
                .easing('ease-in')
                .fromTo('opacity', OPACITY_MAX, OPACITY_MIN)
                .fromTo("transform", `translateX(${TRANSLATE_MIN}) rotate(${ROTATE_MIN})`, `translateX(${TRANSLATE_MAX}) rotate(${ROTATE_MAX})`);
            const slideIn = animationController.create()
                .addElement(baseElement)
                .duration(DURATION)
                .easing('ease-in')
                .fromTo('opacity', OPACITY_MIN, OPACITY_MAX)
                .fromTo('transform', `translateX(${TRANSLATE_MAX}) rotate(${ROTATE_MAX})`, `translateX(${TRANSLATE_MIN}) rotate(${ROTATE_MIN})`);
            yield slideOut.play();
            yield slideIn.play();
        }
        else {
            const slideOut = animationController.create()
                .addElement(baseElement)
                .duration(DURATION)
                .easing('ease-in')
                .fromTo('opacity', OPACITY_MAX, OPACITY_MIN)
                .fromTo("transform", `translateX(${TRANSLATE_MIN}) scale(${SCALE_MAX})`, `translateX(-${TRANSLATE_MAX}) scale(${SCALE_MIN})`);
            const slideIn = animationController.create()
                .addElement(baseElement)
                .duration(DURATION)
                .easing('ease-in')
                .fromTo('opacity', OPACITY_MIN, OPACITY_MAX)
                .fromTo('transform', `translateX(-${TRANSLATE_MAX}) scale(${SCALE_MIN})`, `translateX(${TRANSLATE_MIN}) scale(${SCALE_MAX})`);
            yield slideOut.play();
            yield slideIn.play();
        }
    });
};
const discoverRecipeCardSlideAnimationDuration = DURATION;


/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../directives/directives.module */ "./src/app/directives/directives.module.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 200px;\n  border-radius: 1em;\n}\n\nion-slide {\n  background: url(\"/assets/images/recipe-background.png\");\n  background-size: contain;\n}\n\n.slide-background {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  background: rgba(8, 96, 168, 0.2);\n}\n\n.slide-container,\n.slide-content {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.slide-text {\n  width: 75%;\n  color: white;\n  padding: 1em;\n  display: flex;\n  align-items: flex-end;\n}\n\n.slide-text ion-icon {\n  color: orange;\n}\n\n.slide-picture {\n  width: 50%;\n}\n\n.slide-picture img {\n  position: absolute;\n  width: 175px;\n  right: -1em;\n  top: -1em;\n}\n\n.slide-text-info {\n  display: flex;\n  font-size: 12px;\n  justify-content: space-between;\n}\n\n.slide-text-title {\n  text-align: left;\n}\n\n.slide-text-title-h1 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slide-text-title-p {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slide-touchpad-container {\n  position: relative;\n  width: 100%;\n  height: 0;\n  z-index: 2;\n}\n\n.slide-touchpad {\n  position: absolute;\n  width: 100%;\n  height: 200px;\n  background-color: transparent;\n  pointer-events: none;\n}\n\n.slider-hidden-button {\n  display: none;\n}\n\n.slide-right-hidden-initial-state {\n  margin-right: -20px;\n  margin-left: 3em !important;\n  opacity: 0;\n}\n\n.slide-left-hidden-initial-state {\n  margin-left: -20px;\n  margin-right: 3em !important;\n  opacity: 0;\n}\n\n.slide-transition-opacity {\n  transition: 0.2s linear all;\n  opacity: 1;\n}\n\n.slide-transition-margin {\n  transition: 0.2s linear all;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.card-category {\n  width: 40vw;\n  height: 20vw;\n  display: inline-block;\n}\n\n.card-category ion-card {\n  height: 100%;\n  margin-left: 6px;\n  margin-right: 6px;\n  background-size: cover !important;\n}\n\n.card-category ion-card ion-card-content {\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  color: white;\n}\n\n.container-categories {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 14px;\n  padding-left: 14px;\n}\n\n.px {\n  padding: 0 16px;\n}\n\n.mt-1 {\n  margin-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBSGdCO0VBSWhCLGtCQUFBO0FBREY7O0FBSUE7RUFDRSx1REFBQTtFQUNBLHdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFERjs7QUFJQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FBS0E7RUFDRSxVQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQXJGZ0I7RUFzRmhCLDZCQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBRko7O0FBSUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGTjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvdWNocGFkLWhlaWdodDogMjAwcHg7XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6ICR0b3VjaHBhZC1oZWlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxuaW9uLXNsaWRle1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9yZWNpcGUtYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnNsaWRlLWJhY2tncm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDk2LCAxNjgsIDAuMik7XG59XG5cbi5zbGlkZS1jb250YWluZXIsXG4uc2xpZGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLXRleHQge1xuICB3aWR0aDogNzUlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9XG59XG5cbi5zbGlkZS1waWN0dXJlIHtcbiAgd2lkdGg6IDUwJTtcblxuICBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgcmlnaHQ6IC0xZW07XG4gICAgdG9wOiAtMWVtO1xuICB9XG59XG5cbi5zbGlkZS10ZXh0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNsaWRlLXRleHQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNsaWRlLXRleHQtdGl0bGUtaDEge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNsaWRlLXRleHQtdGl0bGUtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2xpZGUtdG91Y2hwYWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uc2xpZGUtdG91Y2hwYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR0b3VjaHBhZC1oZWlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNsaWRlci1oaWRkZW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlLXJpZ2h0LWhpZGRlbi1pbml0aWFsLXN0YXRlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDNlbSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2xpZGUtbGVmdC1oaWRkZW4taW5pdGlhbC1zdGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzZW0gIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNsaWRlLXRyYW5zaXRpb24tb3BhY2l0eSB7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyIGFsbDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlLXRyYW5zaXRpb24tbWFyZ2luIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgYWxsO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC1jYXRlZ29yeSB7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBpb24tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG5cbi5jb250YWluZXItY2F0ZWdvcmllcyB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLnB4IHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4ubXQtMSB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_categories_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/categories.model */ "./src/app/models/categories.model.ts");
/* harmony import */ var src_app_services_page_transition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/page-transition.service */ "./src/app/services/page-transition.service.ts");
/* harmony import */ var src_app_models_recipes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/recipes.model */ "./src/app/models/recipes.model.ts");
/* harmony import */ var src_app_animations_discover_recipe_card_slide_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/animations/discover-recipe-card-slide.animation */ "./src/app/animations/discover-recipe-card-slide.animation.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_data_v2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-v2.service */ "./src/app/services/data-v2.service.ts");









let activeIndex = 0;
let HomePage = class HomePage {
    constructor(navCtrl, broadcast, recipeModel, categoryModel, animation, auth, renderer, dataService) {
        this.navCtrl = navCtrl;
        this.broadcast = broadcast;
        this.recipeModel = recipeModel;
        this.categoryModel = categoryModel;
        this.animation = animation;
        this.auth = auth;
        this.renderer = renderer;
        this.dataService = dataService;
        this.isSliding = false;
        this.willSlideLeft = false;
        this.willSlideRight = false;
        this.categories = [
        // { id: 1, name: "category 1", thumbnail: "/assets/images/category-1.png" },
        // { id: 2, name: "category 2", thumbnail: "/assets/images/category-1.png" },
        // { id: 3, name: "category 3", thumbnail: "/assets/images/category-1.png" }
        ];
        this.recipes = [];
        this.featuredRecipes = [];
        this.lastRecipes = [];
        this.activeRecipe = {
            id: 1,
            name: "Chinese Dumplings",
            description: "Chinese dumplings recipe description",
            cookingTime: { hour: 1, min: 10 },
            thumbnail: "/assets/images/dish-1.png",
            dificulty: "easy"
        };
        this.slideOpts = {};
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            on: {
                slideChange() {
                    if (this.activeIndex !== activeIndex) {
                        if (activeIndex > this.activeIndex) {
                            activeIndex = this.activeIndex;
                            const btn = document.getElementById("recipe-slider-transition-right-button");
                            if (btn)
                                btn.click();
                        }
                        else {
                            activeIndex = this.activeIndex;
                            const btn = document.getElementById("recipe-slider-transition-left-button");
                            if (btn)
                                btn.click();
                        }
                    }
                }
            }
        };
        this.loadRecipes();
    }
    scrollStart(header) {
        this.header = header.el;
    }
    logScroll(event) {
        if (event.detail.scrollTop > Math.max(0, this.lastX)) {
            // Hide
            this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
            this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
        }
        else {
            // Show
            this.renderer.setStyle(this.header, 'margin-top', '0px');
            this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
        }
        this.lastX = event.detail.scrollTop;
    }
    ngAfterViewInit() { }
    loadRecipes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const _recipes = yield this.dataService.getRecipes();
            const _categories = yield this.dataService.getCategories();
            console.log({ _recipes, _categories });
            const recipes = yield this.recipeModel.get({ limit: 10 });
            // const categories: any = await this.categoryModel.get();
            /*
            this.recipes = recipes.slice(3, recipes.length);
        
            this.featuredRecipes = recipes.slice(0, 3).map(el => {
              el.featuredImage = "/assets/images/dish-2.png";
              return el;
            });
        
        
            this.categories = _categories.map(el => {
              el.thumbnail = "/assets/images/category-1.png";
              return el;
            });
            */
            this.recipes = _recipes;
            this.featuredRecipes = recipes.slice(0, 3).map(el => {
                el.featuredImage = "/assets/images/dish-2.png";
                return el;
            });
            this.categories = _categories;
            /*
            this.categories = _categories.map(el => {
              if (!el.thumbnail) {
                el.thumbnail = "/assets/images/category-1.png";
        
              }
              return el;
            });
            */
            this.activeRecipe = this.featuredRecipes[0];
        });
    }
    transitionRight() {
        this.slideTransition();
    }
    transitionLeft() {
        this.slideTransition();
    }
    slideTransition() {
        Object(src_app_animations_discover_recipe_card_slide_animation__WEBPACK_IMPORTED_MODULE_6__["discoverRecipeCardSlideAnimation"])(this.activeImage.nativeElement, { side: "right" });
        Object(src_app_animations_discover_recipe_card_slide_animation__WEBPACK_IMPORTED_MODULE_6__["discoverRecipeCardSlideAnimation"])(this.activeContent.nativeElement, { side: "left" });
        setTimeout(() => {
            this.activeRecipe = this.featuredRecipes[activeIndex];
        }, src_app_animations_discover_recipe_card_slide_animation__WEBPACK_IMPORTED_MODULE_6__["discoverRecipeCardSlideAnimationDuration"]);
    }
    goToRecipe(activeRecipe, event = false) {
        this.broadcast.emit(this.broadcast.getDomInformation({
            container: this.expandableRecipe.nativeElement,
            activeImage: this.activeImage.nativeElement
        }, event));
        setTimeout(() => {
            let navigationExtras = {
                queryParams: {
                    recipe: JSON.stringify(activeRecipe)
                },
                animated: false
            };
            this.navCtrl.navigateForward(`recipe/${activeRecipe.id}`, navigationExtras);
        }, 300);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_page_transition_service__WEBPACK_IMPORTED_MODULE_4__["PageTransitionService"] },
    { type: src_app_models_recipes_model__WEBPACK_IMPORTED_MODULE_5__["RecipesModel"] },
    { type: src_app_models_categories_model__WEBPACK_IMPORTED_MODULE_3__["CategoriesModel"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_services_data_v2_service__WEBPACK_IMPORTED_MODULE_8__["DataV2Service"] }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["slides", { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"] },] }],
    expandableRecipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["expandableRecipe",] }],
    activeImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["activeImage",] }],
    activeContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["activeContent",] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['header',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map