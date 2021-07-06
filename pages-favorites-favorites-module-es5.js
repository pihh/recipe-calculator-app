(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorites-favorites-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFavoritesFavoritesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header #header translucent=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title> </ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-menu-button menu=\"home-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScroll($event)\" (ionScrollStart)=\"scrollStart(header)\">\n  <ion-header collapse=\"condense\" translucent=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Favorites</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"search\" (ionChange)=\"onInput($event)\"></ion-searchbar>\n  </ion-toolbar>\n\n\n  <div *ngFor=\"let recipe of items | filter:search as result\">\n    <app-card-recipe [recipe]=\"recipe\"></app-card-recipe>\n  </div>\n\n\n  <app-no-data *ngIf=\"(items | filter:search)?.length === 0\"></app-no-data>\n  <app-breathe-bottom></app-breathe-bottom>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/favorites/favorites-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FavoritesPageRoutingModule */

    /***/
    function srcAppPagesFavoritesFavoritesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function () {
        return FavoritesPageRoutingModule;
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


      var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorites.page */
      "./src/app/pages/favorites/favorites.page.ts");

      var routes = [{
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
      }];

      var FavoritesPageRoutingModule = function FavoritesPageRoutingModule() {
        _classCallCheck(this, FavoritesPageRoutingModule);
      };

      FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/favorites/favorites.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavoritesPageModule */

    /***/
    function srcAppPagesFavoritesFavoritesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function () {
        return FavoritesPageModule;
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


      var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorites-routing.module */
      "./src/app/pages/favorites/favorites-routing.module.ts");
      /* harmony import */


      var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorites.page */
      "./src/app/pages/favorites/favorites.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var FavoritesPageModule = function FavoritesPageModule() {
        _classCallCheck(this, FavoritesPageModule);
      };

      FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
      })], FavoritesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/favorites/favorites.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFavoritesFavoritesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/favorites/favorites.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.ts ***!
      \***************************************************/

    /*! exports provided: FavoritesPage */

    /***/
    function srcAppPagesFavoritesFavoritesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPage", function () {
        return FavoritesPage;
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


      var _utils_revealing_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/revealing-header */
      "./src/app/utils/revealing-header.ts");
      /* harmony import */


      var _storage_favorites_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../storage/favorites.storage */
      "./src/app/storage/favorites.storage.ts");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var FavoritesPage = /*#__PURE__*/function () {
        function FavoritesPage(favorites, events) {
          var _this = this;

          _classCallCheck(this, FavoritesPage);

          this.favorites = favorites;
          this.search = "";
          this.items = [];
          this.result = [];
          this.subscription = events.subscribe("storage:".concat(favorites.table), function (data) {
            console.log('evennnnnnt');

            _this._checkState();
          });
        }

        _createClass(FavoritesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load();
          }
        }, {
          key: "_checkState",
          value: function _checkState() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var favorites;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.favorites.read();

                    case 2:
                      favorites = _context.sent;
                      this.items = favorites;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "load",
          value: function load() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var items;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.favorites.read();

                    case 2:
                      items = _context2.sent;
                      this.items = items;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "scrollStart",
          value: function scrollStart(header) {
            Object(_utils_revealing_header__WEBPACK_IMPORTED_MODULE_2__["scrollStart"])(this, header);
          }
        }, {
          key: "logScroll",
          value: function logScroll(event) {
            Object(_utils_revealing_header__WEBPACK_IMPORTED_MODULE_2__["logScroll"])(this, event);
          }
        }, {
          key: "onInput",
          value: function onInput(event) {}
        }]);

        return FavoritesPage;
      }();

      FavoritesPage.ctorParameters = function () {
        return [{
          type: _storage_favorites_storage__WEBPACK_IMPORTED_MODULE_3__["FavoritesStorage"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }];
      };

      FavoritesPage.propDecorators = {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['header']
        }]
      };
      FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorites.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorites.page.scss */
        "./src/app/pages/favorites/favorites.page.scss"))["default"]]
      })], FavoritesPage);
      /***/
    },

    /***/
    "./src/app/pipes/filter/filter.pipe.ts":
    /*!*********************************************!*\
      !*** ./src/app/pipes/filter/filter.pipe.ts ***!
      \*********************************************/

    /*! exports provided: FilterPipe */

    /***/
    function srcAppPipesFilterFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      };

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(items) {
            var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            search = search.trim().toLocaleLowerCase();
            if (search.length === 0) return items;
            return items.filter(function (item) {
              var name = item.name || "";
              var description = item.description || "";
              if (name.toLocaleLowerCase().indexOf(search) > -1) return 1;
              if (description.toLocaleLowerCase().indexOf(search) > -1) return 1;
              return 0;
            });
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], FilterPipe);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./filter/filter.pipe */
      "./src/app/pipes/filter/filter.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
        exports: [_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/utils/revealing-header.ts":
    /*!*******************************************!*\
      !*** ./src/app/utils/revealing-header.ts ***!
      \*******************************************/

    /*! exports provided: scrollStart, logScroll */

    /***/
    function srcAppUtilsRevealingHeaderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scrollStart", function () {
        return scrollStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logScroll", function () {
        return logScroll;
      });
      /**
       *
       * @param header - @Input at page
       * @param instance @Page
       */


      var scrollStart = function scrollStart(instance, header) {
        instance.header = header.el;
      };
      /**
       * @requires Renderer2 Service
       * @requires instance.lastX:any
       * @requires instance.header:async
       * @param event - Scroll event
       * @param instance - @Page
       */


      var logScroll = function logScroll(instance, event) {
        if (!instance.lastX) instance.lastX = 0;
        instance.renderer.setStyle(instance.header, 'transition', 'margin-top 400ms');

        if (event.detail.scrollTop > Math.max(0, instance.lastX)) {
          // Hide
          instance.renderer.setStyle(instance.header, 'margin-top', "-".concat(instance.header.clientHeight, "px"));
        } else {
          // Show
          instance.renderer.setStyle(instance.header, 'margin-top', '0px');
        }

        instance.lastX = event.detail.scrollTop;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-favorites-favorites-module-es5.js.map