(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-text>\n    <h1>Welcome.</h1>\n    <p>Get started by logging into <br> your account.</p>\n  </ion-text>\n\n  <div class=\"actions\">\n    <a routerLink=\"/home\">\n      <div class=\"login-buttons\">\n\n        <ion-button>\n          <ion-avatar>\n            <img src=\"../../../assets/images/facebook.png\" alt=\"Login with facebook\">\n          </ion-avatar>\n          <ion-label>\n            Facebook\n          </ion-label>\n        </ion-button>\n\n\n        <ion-button>\n          <ion-avatar>\n            <img src=\"../../../assets/images/google.png\" alt=\"Login with google\">\n          </ion-avatar>\n          <ion-label>\n            Google\n          </ion-label>\n        </ion-button>\n\n      </div>\n    </a>\n    <div class=\"separator\">\n      <span>or</span>\n      <span class=\"line left\"></span>\n      <span class=\"line right\"></span>\n    </div>\n    <ion-button class=\"signup-button\" expand=\"block\">Signup with email</ion-button>\n    <p class=\"login\">Existing user? <a routerLink=\"/home\">Login now</a></p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-weight: 300;\n}\n\nion-text {\n  position: absolute;\n  top: 25%;\n}\n\nion-text h1 {\n  font-size: 42px;\n}\n\nion-text p {\n  font-size: 14px;\n  color: #696969;\n}\n\n.actions {\n  position: absolute;\n  width: 90%;\n  bottom: 16px;\n}\n\nion-button {\n  --border-radius: 9px;\n  --box-shadow: none;\n  text-transform: initial;\n  font-size: 12px;\n}\n\n.login-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.login-buttons ion-button {\n  width: 45%;\n  --background: #FFF;\n  --color: #3b3b3b;\n  --border-style: solid;\n  --border-color: #eeeeee;\n  --border-width: 0.5px;\n}\n\nion-avatar {\n  height: 12px;\n  width: 12px;\n  margin-right: 7px;\n  margin-bottom: 1px;\n}\n\n.separator {\n  display: flex;\n  justify-content: center;\n  margin: 8px auto 10px;\n  font-size: 12px;\n  position: relative;\n}\n\n.separator .line {\n  position: absolute;\n  border-top: 1px solid #dfdfdf;\n  width: 50px;\n  height: 2px;\n  top: 8px;\n}\n\n.separator .right {\n  right: 98px;\n}\n\n.separator .left {\n  left: 98px;\n}\n\n.login {\n  text-align: center;\n  font-size: 12px;\n  margin-top: 16px;\n}\n\n.login a {\n  color: blue;\n  font-weight: 400;\n  margin-left: 5px;\n  text-decoration: none;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFDSTtFQUNFLGVBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQU47O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFHSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRE47O0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBRk47O0FBS0k7RUFDRSxXQUFBO0FBSE47O0FBTUk7RUFDRSxVQUFBO0FBSk47O0FBU0U7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5OOztBQVVFO0VBQ0UscUJBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgXG4gIGlvbi10ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1JTtcbiAgXG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDQycHg7XG4gICAgfVxuICBcbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2OTY5NjlcbiAgICB9XG4gIH1cbiAgXG4gIC5hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6ICA5cHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIFxuICAubG9naW4tYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAtLWJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAtLWNvbG9yOiAjM2IzYjNiO1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNlZWVlZWU7XG4gICAgICAtLWJvcmRlci13aWR0aDogMC41cHg7XG4gICAgfVxuICB9XG4gIFxuICBpb24tYXZhdGFye1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIH1cbiAgXG4gIC5zZXBhcmF0b3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDhweCBhdXRvIDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgLmxpbmV7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB0b3A6IDhweDtcbiAgICB9XG4gIFxuICAgIC5yaWdodHtcbiAgICAgIHJpZ2h0OiA5OHB4O1xuICAgIH1cbiAgXG4gICAgLmxlZnR7XG4gICAgICBsZWZ0OiA5OHB4O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5sb2dpbiB7XG4gIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBhe1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WelcomePage = class WelcomePage {
    constructor() { }
    ngOnInit() {
    }
};
WelcomePage.ctorParameters = () => [];
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
    })
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map