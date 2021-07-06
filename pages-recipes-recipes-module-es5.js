(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipes-recipes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRecipesRecipesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header #header translucent=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScroll($event)\" (ionScrollStart)=\"scrollStart(header)\">\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Recipes</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"search\" (ionChange)=\"onInput($event)\"></ion-searchbar>\n  </ion-toolbar>\n\n  <div *ngFor=\"let recipe of items\">\n    <app-card-recipe [recipe]=\"recipe\"></app-card-recipe>\n  </div>\n\n  <app-breathe-bottom></app-breathe-bottom>\n  <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadMore($event)\" loadingSpinner=\"bubbles\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/recipes/recipes-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/recipes/recipes-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RecipesPageRoutingModule */

    /***/
    function srcAppPagesRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageRoutingModule", function () {
        return RecipesPageRoutingModule;
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


      var _recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/pages/recipes/recipes.page.ts");

      var routes = [{
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_3__["RecipesPage"]
      }];

      var RecipesPageRoutingModule = function RecipesPageRoutingModule() {
        _classCallCheck(this, RecipesPageRoutingModule);
      };

      RecipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecipesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/recipes/recipes.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/recipes/recipes.module.ts ***!
      \*************************************************/

    /*! exports provided: RecipesPageModule */

    /***/
    function srcAppPagesRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function () {
        return RecipesPageModule;
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


      var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recipes-routing.module */
      "./src/app/pages/recipes/recipes-routing.module.ts");
      /* harmony import */


      var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/pages/recipes/recipes.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../components/components.module */
      "./src/app/components/components.module.ts");

      var RecipesPageModule = function RecipesPageModule() {
        _classCallCheck(this, RecipesPageModule);
      };

      RecipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
      })], RecipesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/recipes/recipes.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/recipes/recipes.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRecipesRecipesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/recipes/recipes.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/recipes/recipes.page.ts ***!
      \***********************************************/

    /*! exports provided: RecipesPage */

    /***/
    function srcAppPagesRecipesRecipesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPage", function () {
        return RecipesPage;
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


      var src_app_models_recipes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/recipes.model */
      "./src/app/models/recipes.model.ts");
      /* harmony import */


      var _services_data_v2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/data-v2.service */
      "./src/app/services/data-v2.service.ts");

      var LIMIT = 10;

      var RecipesPage = /*#__PURE__*/function () {
        function RecipesPage(renderer, recipeModel, dataService) {
          _classCallCheck(this, RecipesPage);

          this.renderer = renderer;
          this.recipeModel = recipeModel;
          this.dataService = dataService;
          this.search = "";
          this.page = 1;
          this.items = [];
        }

        _createClass(RecipesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "scrollStart",
          value: function scrollStart(header) {
            this.header = header.el;
          }
        }, {
          key: "logScroll",
          value: function logScroll(event) {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

            if (event.detail.scrollTop > Math.max(0, this.lastX)) {
              // Hide
              this.renderer.setStyle(this.header, 'margin-top', "-".concat(this.header.clientHeight, "px"));
            } else {
              // Show
              this.renderer.setStyle(this.header, 'margin-top', '0px');
            }

            this.lastX = event.detail.scrollTop;
          }
        }, {
          key: "loadData",
          value: function loadData(infiniteScroll) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var skip, items;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      skip = this.page; // const items = await this.recipeModel.get({ skip: skip, limit: LIMIT, search: this.search });

                      _context.next = 3;
                      return this.dataService.getRecipes({
                        skip: skip,
                        limit: LIMIT,
                        search: this.search
                      });

                    case 3:
                      items = _context.sent;

                      if (skip === 1) {
                        this.items = items;
                      } else {
                        this.items = this.items.concat(items);
                      }

                      if (infiniteScroll) {
                        infiniteScroll.target.complete();

                        if (Array.isArray(items) && items.length < LIMIT) {
                          console.log({
                            infiniteScroll: infiniteScroll
                          }, 'disable it');
                        }
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadMore",
          value: function loadMore(infiniteScroll) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.page++;
                      _context2.next = 3;
                      return this.loadData(infiniteScroll);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onInput",
          value: function onInput($event) {
            this.page = 1;
            this.loadData();
          }
        }]);

        return RecipesPage;
      }();

      RecipesPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: src_app_models_recipes_model__WEBPACK_IMPORTED_MODULE_2__["RecipesModel"]
        }, {
          type: _services_data_v2_service__WEBPACK_IMPORTED_MODULE_3__["DataV2Service"]
        }];
      };

      RecipesPage.propDecorators = {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['header']
        }]
      };
      RecipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipes.page.scss */
        "./src/app/pages/recipes/recipes.page.scss"))["default"]]
      })], RecipesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-recipes-recipes-module-es5.js.map