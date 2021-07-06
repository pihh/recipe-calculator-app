(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContactsContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title></ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Contact us\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"ion-padding\">\n\n  </div>\n  <div class=\"ion-padding\">\n    <div>\n      <ion-label position=\"stacked\">Name*</ion-label>\n      <ion-input required [(ngModel)]=\"name\"></ion-input>\n    </div>\n    <div>\n      <ion-label position=\"stacked\">Email*</ion-label>\n      <ion-input type=\"email\" required [(ngModel)]=\"email\"></ion-input>\n    </div>\n    <div>\n      <ion-label position=\"stacked\">Message*</ion-label>\n      <ion-textarea rows=\"6\" required [(ngModel)]=\"message\"\n        placeholder=\"Help us to improve this project. Do you want to submit a recipe, ask for a new feature, report a bug? Please do!\">\n      </ion-textarea>\n    </div>\n    <div>\n\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-button class=\"signup-button\" (click)=\"submit()\">Submit</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/pages/contacts/contacts-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContactsPageRoutingModule */

    /***/
    function srcAppPagesContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
        return ContactsPageRoutingModule;
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


      var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacts.page */
      "./src/app/pages/contacts/contacts.page.ts");

      var routes = [{
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
      }];

      var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
        _classCallCheck(this, ContactsPageRoutingModule);
      };

      ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/contacts/contacts.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactsPageModule */

    /***/
    function srcAppPagesContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
        return ContactsPageModule;
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


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts-routing.module */
      "./src/app/pages/contacts/contacts-routing.module.ts");
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacts.page */
      "./src/app/pages/contacts/contacts.page.ts");

      var ContactsPageModule = function ContactsPageModule() {
        _classCallCheck(this, ContactsPageModule);
      };

      ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
      })], ContactsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/contacts/contacts.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContactsContactsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".native-input.sc-ion-input-ios, .textarea-wrapper.sc-ion-textarea-ios, ion-input, ion-textarea {\n  border-bottom: 0.55px solid #3880ff;\n  margin-bottom: 1em;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 0.5em 0.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zLCAudGV4dGFyZWEtd3JhcHBlci5zYy1pb24tdGV4dGFyZWEtaW9zLCBpb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcbiAgICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgIzM4ODBmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtIDAuNWVtIDAgMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/contacts/contacts.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.ts ***!
      \*************************************************/

    /*! exports provided: ContactsPage */

    /***/
    function srcAppPagesContactsContactsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
        return ContactsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ContactsPage = /*#__PURE__*/function () {
        function ContactsPage() {
          _classCallCheck(this, ContactsPage);

          this.name = "";
          this.email = "";
          this.message = "";
        }

        _createClass(ContactsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            alert('TODO');
          }
        }]);

        return ContactsPage;
      }();

      ContactsPage.ctorParameters = function () {
        return [];
      };

      ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contacts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contacts.page.scss */
        "./src/app/pages/contacts/contacts.page.scss"))["default"]]
      })], ContactsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-contacts-contacts-module-es5.js.map