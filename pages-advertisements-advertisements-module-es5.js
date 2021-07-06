(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisements-advertisements-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisements/advertisements.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisements/advertisements.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdvertisementsAdvertisementsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title> </ion-title>\n      <ion-buttons slot=\"secondary\">\n        <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-header collapse=\" condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Advertisements</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div>\n    <app-card-advertisement [advertisement]=\"main\"></app-card-advertisement>\n  </div>\n  <div *ngFor=\"let ad of advertisements\">\n    <div>\n      <app-card-advertisement [advertisement]=\"ad\"></app-card-advertisement>\n    </div>\n  </div>\n\n  <app-breathe-bottom></app-breathe-bottom>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/advertisements/advertisements-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/advertisements/advertisements-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdvertisementsPageRoutingModule */

    /***/
    function srcAppPagesAdvertisementsAdvertisementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisementsPageRoutingModule", function () {
        return AdvertisementsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _advertisements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./advertisements.page */
      "./src/app/pages/advertisements/advertisements.page.ts");

      var routes = [{
        path: '',
        component: _advertisements_page__WEBPACK_IMPORTED_MODULE_3__["AdvertisementsPage"]
      }];

      var AdvertisementsPageRoutingModule = function AdvertisementsPageRoutingModule() {
        _classCallCheck(this, AdvertisementsPageRoutingModule);
      };

      AdvertisementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdvertisementsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/advertisements/advertisements.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/advertisements/advertisements.module.ts ***!
      \***************************************************************/

    /*! exports provided: AdvertisementsPageModule */

    /***/
    function srcAppPagesAdvertisementsAdvertisementsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisementsPageModule", function () {
        return AdvertisementsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _advertisements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./advertisements-routing.module */
      "./src/app/pages/advertisements/advertisements-routing.module.ts");
      /* harmony import */


      var _advertisements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./advertisements.page */
      "./src/app/pages/advertisements/advertisements.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../components/components.module */
      "./src/app/components/components.module.ts");

      var AdvertisementsPageModule = function AdvertisementsPageModule() {
        _classCallCheck(this, AdvertisementsPageModule);
      };

      AdvertisementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _advertisements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvertisementsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_advertisements_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisementsPage"]]
      })], AdvertisementsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/advertisements/advertisements.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/advertisements/advertisements.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdvertisementsAdvertisementsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  background: transparent;\n  --background: transparent ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudHMvYWR2ZXJ0aXNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudHMvYWR2ZXJ0aXNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/advertisements/advertisements.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/advertisements/advertisements.page.ts ***!
      \*************************************************************/

    /*! exports provided: AdvertisementsPage */

    /***/
    function srcAppPagesAdvertisementsAdvertisementsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisementsPage", function () {
        return AdvertisementsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdvertisementsPage = /*#__PURE__*/function () {
        function AdvertisementsPage() {
          _classCallCheck(this, AdvertisementsPage);

          this.main = {
            name: "Pihh's flex diet calculator",
            thumbnail: "/assets/images/app-banner.png",
            description: "Please check our ads to suport this project."
          };
          this.advertisements = [{
            name: "Ás dos casinos",
            url: "https://asdoscasinos.pt",
            thumbnail: "/assets/images/as-dos-casinos-banner.png",
            description: "As melhores ofertas e bónus em casinos online Portugueses."
          }, {
            name: "Com Caneco",
            url: "https://comcaneco.com",
            thumbnail: "/assets/images/com-caneco-banner.png",
            description: "Entrega de bebidas 24h (Lisboa, cascais e Oeiras)"
          }];
        }

        _createClass(AdvertisementsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdvertisementsPage;
      }();

      AdvertisementsPage.ctorParameters = function () {
        return [];
      };

      AdvertisementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advertisements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./advertisements.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisements/advertisements.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./advertisements.page.scss */
        "./src/app/pages/advertisements/advertisements.page.scss"))["default"]]
      })], AdvertisementsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-advertisements-advertisements-module-es5.js.map