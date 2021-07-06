(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu menuId=\"home-menu\" contentId=\"home\" #menu>\n    <ion-content>\n      <div id=\"menu-header-bg\">\n        <div id=\"menu-header-content\">\n          <img src=\"/assets/images/avatar.jpg\">\n          <ion-label>\n            <h2>Filipe Sá</h2>\n            <p>pihh.rocks@gmail.com</p>\n          </ion-label>\n        </div>\n      </div>\n      <ion-list lines=\"none\" id=\"menu-items\">\n        <ion-item routerLink=\"/home\" (click)=\"closeMenu()\" [ngClass]=\"currentRoute === '/home' ? 'active' :''\">\n          <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n          Home\n        </ion-item>\n        <ion-item routerLink=\"/recipes\" (click)=\"closeMenu()\" [ngClass]=\"currentRoute === '/recipes' ? 'active' :''\">\n          <ion-icon name=\"fast-food-outline\" slot=\"start\"></ion-icon>\n          Recipes\n        </ion-item>\n        <ion-item routerLink=\"/favorites\" (click)=\"closeMenu()\"\n          [ngClass]=\"currentRoute === '/favorites' ? 'active' :''\">\n          <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n          Favorites\n        </ion-item>\n        <ion-item routerLink=\"/ingredients\" (click)=\"closeMenu()\"\n          [ngClass]=\"currentRoute === '/ingredients' ? 'active' :''\">\n          <ion-icon name=\"restaurant-outline\" slot=\"start\"></ion-icon>\n          Ingredients\n        </ion-item>\n        <ion-item routerLink=\"/advertisements\" (click)=\"closeMenu()\"\n          [ngClass]=\"currentRoute === '/advertisements' ? 'active' :''\">\n          <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n          Advertisements\n        </ion-item>\n        <ion-item routerLink=\"/contacts\" (click)=\"closeMenu()\" [ngClass]=\"currentRoute === '/contacts' ? 'active' :''\">\n          <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>\n          Contact Us\n        </ion-item>\n        <ion-item (click)=\"auth.signOut()\" (click)=\"closeMenu()\">\n          <ion-icon name=\"exit-outline\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"home\"></ion-router-outlet>\n  <app-page-transition></app-page-transition>\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breathe-bottom/breathe-bottom.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/breathe-bottom/breathe-bottom.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBreatheBottomBreatheBottomComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-padding\">&nbsp;</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-advertisement/card-advertisement.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-advertisement/card-advertisement.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardAdvertisementCardAdvertisementComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card class=\"card-advertisement shadow-lg advertisement-page-card\" (click)=\"goToUrl()\"\n  [ngStyle]=\"{'background': 'url('+advertisement.thumbnail+')', 'background-position':'center'}\">\n  <div class=\"ion-padding bottom-card-title\">\n    <ion-card-subtitle class=\"text-white\">Ad</ion-card-subtitle>\n\n  </div>\n\n</ion-card>\n<div>\n  <ion-title size=\"small\" class=\"card-advertisement-title\">{{advertisement.name}}</ion-title>\n  <ion-title size=\"small\" class=\"card-advertisement-subtitle\">{{advertisement.description}}</ion-title>\n</div>\n<div class=\"px mt-1\">\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-category/card-category.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-category/card-category.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardCategoryCardCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  card-category works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-ingredient/card-ingredient.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-ingredient/card-ingredient.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardIngredientCardIngredientComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card growImageToPageHeader [data]=\"ingredient\" [thumbnail]=\"ingredient.thumbnail\"\n  [ngStyle]=\"{'background-image': 'url(' + ingredient.thumbnail + ')', 'background-position': 'center'}\"\n  [ngClass]=\"{'odd': odd, 'even':even}\" class=\"card-ingredient shadow-lg\" type=\"ingredient\">\n\n  <div class=\"card-ingredient-overlay\">\n\n  </div>\n\n  <ion-card-content>\n    <ion-title size=\"small\" class=\"card-ingredient-title\">{{ingredient.name}}</ion-title>\n    <div class=\"px mt-1 recipe-macros\">\n      <span>\n        <span class=\"text-orange\">Kcals: </span>\n        {{ingredient.kcals}}\n      </span>\n      <span>\n        <span class=\"text-orange\">C: </span>\n        {{ingredient.carbs}}g\n      </span>\n      <span>\n        <span class=\"text-orange\">P: </span>\n        {{ingredient.proteins}}g\n      </span>\n      <span>\n        <span class=\"text-orange\">F: </span>\n        {{ingredient.fats}}g\n      </span>\n    </div>\n  </ion-card-content>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-recipe/card-recipe.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-recipe/card-recipe.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardRecipeCardRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"hasRecipe\">\n  <ion-card class=\"card-recipe shadow-lg\" growImageToPageHeader [data]=\"recipe\" [thumbnail]=\"recipe.thumbnail\"\n    [ngStyle]=\"{'background-image': 'url(' + recipe.thumbnail + ')', 'background-position': 'center'}\">\n    <div class=\"card-recipe-overlay pointer-events-none\">\n      <app-favorite [recipe]=\"recipe\"></app-favorite>\n    </div>\n  </ion-card>\n  <ion-title size=\"small\" class=\"card-recipe-title\">{{recipe.name}}</ion-title>\n  <div class=\"px mt-1\">\n    <app-recipe-time-dificulty [recipe]=\"recipe\"></app-recipe-time-dificulty>\n  </div>\n</div>\n<div *ngIf=\"!hasRecipe\">\n  <ion-card class=\"card-recipe shadow-lg recipes-page-card\" (click)=\"goToRecipes()\">\n    <div class=\"ion-padding bottom-card-title\">\n      <ion-card-subtitle>Check all the recipes</ion-card-subtitle>\n      <ion-card-title class=\"text-white\">Go to recipes</ion-card-title>\n    </div>\n    <div class=\"card-recipe-overlay\">\n      <img src=\"/assets/images/dish-1.png\" class=\"absolute right-0 all-recipes-image-placeholder\">\n    </div>\n  </ion-card>\n  <ion-title size=\"small\" class=\"card-recipe-title\">Go to recipes page</ion-title>\n  <div class=\"px mt-1\">\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawer/drawer.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawer/drawer.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDrawerDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"backdrop\" [ngClass]=\"isOpen ? 'fade' : 'fade-in'\" tappable (click)=\"toggleDrawer()\"></div>\n<div class=\"drawer\" #drawer>\n  <div class=\"ion-text-center\">\n    <ion-button fill=\"clear\" expand=\"full\" (click)=\"toggleDrawer()\">\n      <div class=\"drawer-pull\"></div>\n    </ion-button>\n  </div>\n  <ng-content></ng-content>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorite/favorite.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorite/favorite.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFavoriteFavoriteComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon [name]=\"icon\" [slot]=\"slot\" (click)=\"toggleState($event)\"></ion-icon>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNoDataNoDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>\n    <ion-icon name=\"alert-circle-outline\"></ion-icon>\n  </strong>\n\n  <p>Sorry, nothing to see here.</p>\n  <p><a>Update your search params and try again.</a></p>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value-display/nutritional-value-display.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value-display/nutritional-value-display.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNutritionalValueDisplayNutritionalValueDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"square-container\">\n  <app-nutritional-value [title]=\"'kcals'\" [value]=\"nutritionalValue.kcals\" [percentage]=\"100\" [classes]=\"classes\">\n  </app-nutritional-value>\n  <app-nutritional-value [title]=\"'carbs'\" [value]=\"nutritionalValue.carbs\" [percentage]=\"macros.carbs\"\n    [classes]=\"classes\"></app-nutritional-value>\n  <app-nutritional-value [title]=\"'protein'\" [value]=\"nutritionalValue.proteins\" [percentage]=\"macros.proteins\"\n    [classes]=\"classes\"></app-nutritional-value>\n  <app-nutritional-value [title]=\"'fat'\" [value]=\"nutritionalValue.fats\" [percentage]=\"macros.fats\" [classes]=\"classes\">\n  </app-nutritional-value>\n</div>\n\n<div class=\"square-container\">\n  <app-nutritional-value [title]=\"'carbs'\" [value]=\"macros.carbs\" [percentage]=\"macros.carbs\" [classes]=\"classes\">\n  </app-nutritional-value>\n  <app-nutritional-value [title]=\"'protein'\" [value]=\"macros.proteins\" [percentage]=\"macros.proteins\"\n    [classes]=\"classes\"></app-nutritional-value>\n  <app-nutritional-value [title]=\"'fat'\" [value]=\"macros.fats\" [percentage]=\"macros.fats\" [classes]=\"classes\">\n  </app-nutritional-value>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value/nutritional-value.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value/nutritional-value.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNutritionalValueNutritionalValueComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"progressbar-container shadow\">\n  <svg class=\"progressbar round {{ classes }}\" viewbox=\" 0 0 64 64\" #thumb>\n    <circle cx=\"40\" cy=\"40\" r=\"39\" />\n  </svg>\n  <div class=\"progress-content\">\n    <div class=\"progress-text ion-text-capitalize\">{{ title }}</div>\n    <div class=\"progress-value\">\n      <h4 class=\"square-value text-orange text-sm\">{{ value }}</h4>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-transition/page-transition.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-transition/page-transition.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageTransitionPageTransitionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-transition-component\" [ngStyle]=\"{'display': isOpen ? 'block' : 'none' }\">\n    <!-- \n    <div class=\"container\">\n        <div class=\"background\" #background [ngClass]=\"{'upgraded-background': isTransitioning}\">\n\n        </div>\n        <img class=\"image\" #image [ngClass]=\"{'upgraded-image': isTransitioning}\">\n    </div>\n    -->\n    <div class=\"page-background-cover transition\" #background>\n        <div [ngStyle]=\"{'background': 'url('+ src +')'}\" class=\"page-background-overlay transition\" #image></div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsRecipeTimeDificultyRecipeTimeDificultyComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"slide-text-info\"\n  *ngIf=\"recipe\"\n  [ngClass]=\"inline ? 'justify-content-end' : ''\"\n>\n  <div class=\"slide-text-info-time\">\n    <ion-icon name=\"time-outline\"></ion-icon>\n    {{ recipe.cookingTime.hour }}:{{ recipe.cookingTime.min }}\n  </div>\n  <div class=\"slide-text-info-dificulty\">\n    <ion-icon name=\"speedometer-outline\"></ion-icon> Easy\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/animations/fade.ts":
    /*!************************************!*\
      !*** ./src/app/animations/fade.ts ***!
      \************************************/

    /*! exports provided: fadeOut, fadeIn */

    /***/
    function srcAppAnimationsFadeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
        return fadeOut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
        return fadeIn;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var IS_FADING = false;
      var DURATION = 400;

      var FADE = function FADE(baseElement) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'in';
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var from, to, ease, animationController, fade;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!IS_FADING) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  IS_FADING = true;
                  from = direction === "in" ? 0 : 1;
                  to = direction === "in" ? 1 : 0;
                  ease = direction === "in" ? "ease-in" : "ease-out";
                  animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
                  fade = animationController.create().addElement(baseElement).duration(DURATION).iterations(1).easing(ease).fromTo('opacity', from, to);
                  _context.next = 10;
                  return fade.play();

                case 10:
                  IS_FADING = false;

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      };

      var fadeOut = function fadeOut(baseElement) {
        return FADE(baseElement, 'out');
      };

      var fadeIn = function fadeIn(baseElement) {
        return FADE(baseElement);
      };
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-welcome-welcome-module */
          "pages-welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./pages/welcome/welcome.module */
          "./src/app/pages/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'recipe/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-recipe-recipe-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-recipe-recipe-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/recipe/recipe.module */
          "./src/app/pages/recipe/recipe.module.ts")).then(function (m) {
            return m.RecipePageModule;
          });
        }
      }, {
        path: 'ingredients',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-ingredients-ingredients-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-ingredients-ingredients-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/ingredients/ingredients.module */
          "./src/app/pages/ingredients/ingredients.module.ts")).then(function (m) {
            return m.IngredientsPageModule;
          });
        }
      }, {
        path: 'ingredient/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-ingredient-ingredient-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-ingredient-ingredient-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/ingredient/ingredient.module */
          "./src/app/pages/ingredient/ingredient.module.ts")).then(function (m) {
            return m.IngredientPageModule;
          });
        }
      }, {
        path: 'recipes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-recipes-recipes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-recipes-recipes-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/recipes/recipes.module */
          "./src/app/pages/recipes/recipes.module.ts")).then(function (m) {
            return m.RecipesPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favorites-favorites-module */
          "pages-favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./pages/favorites/favorites.module */
          "./src/app/pages/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-contacts-contacts-module */
          "pages-contacts-contacts-module").then(__webpack_require__.bind(null,
          /*! ./pages/contacts/contacts.module */
          "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
            return m.ContactsPageModule;
          });
        }
      }, {
        path: 'advertisement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-advertisement-advertisement-module */
          "pages-advertisement-advertisement-module").then(__webpack_require__.bind(null,
          /*! ./pages/advertisement/advertisement.module */
          "./src/app/pages/advertisement/advertisement.module.ts")).then(function (m) {
            return m.AdvertisementPageModule;
          });
        }
      }, {
        path: 'advertisements',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-advertisements-advertisements-module */
          "pages-advertisements-advertisements-module").then(__webpack_require__.bind(null,
          /*! ./pages/advertisements/advertisements.module */
          "./src/app/pages/advertisements/advertisements.module.ts")).then(function (m) {
            return m.AdvertisementsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _utils_fixed_viewport_measures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./utils/fixed-viewport-measures */
      "./src/app/utils/fixed-viewport-measures.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, auth, route, metaService, events) {
          var _this2 = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.auth = auth;
          this.route = route;
          this.metaService = metaService;
          this.events = events;
          this.currentRoute = "";
          this.initializeApp();
          route.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
              _this2.currentRoute = e.url;
            }
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            this.platform.ready().then(function () {
              _this3.statusBar.styleDefault();

              _this3.splashScreen.hide();

              document.addEventListener('ionBackButton', function (ev) {
                _this3.events.publish('ON_BACK_BUTTON_CLICKED');
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            Object(_utils_fixed_viewport_measures__WEBPACK_IMPORTED_MODULE_7__["fixedViewportMeasures"])();
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"]
        }];
      };

      AppComponent.propDecorators = {
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['menu']
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./directives/directives.module */
      "./src/app/directives/directives.module.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _models_ingredients_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./models/ingredients.model */
      "./src/app/models/ingredients.model.ts");
      /* harmony import */


      var _models_countries_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./models/countries.model */
      "./src/app/models/countries.model.ts");
      /* harmony import */


      var _models_currencies_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./models/currencies.model */
      "./src/app/models/currencies.model.ts");
      /* harmony import */


      var _models_cuisines_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./models/cuisines.model */
      "./src/app/models/cuisines.model.ts");
      /* harmony import */


      var _models_categories_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./models/categories.model */
      "./src/app/models/categories.model.ts");
      /* harmony import */


      var _models_prices_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./models/prices.model */
      "./src/app/models/prices.model.ts");
      /* harmony import */


      var _models_regimens_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./models/regimens.model */
      "./src/app/models/regimens.model.ts");
      /* harmony import */


      var _models_stores_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./models/stores.model */
      "./src/app/models/stores.model.ts");
      /* harmony import */


      var _models_users_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./models/users.model */
      "./src/app/models/users.model.ts");
      /* harmony import */


      var _models_recipes_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./models/recipes.model */
      "./src/app/models/recipes.model.ts");
      /* harmony import */


      var _models_advertisements_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./models/advertisements.model */
      "./src/app/models/advertisements.model.ts");
      /* harmony import */


      var _storage_favorites_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./storage/favorites.storage */
      "./src/app/storage/favorites.storage.ts"); // Modules are providers
      // Storage are providers
      // import { ServiceWorkerModule } from '@angular/service-worker';
      // import { environment } from '../environments/environment';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: "ios"
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_11__["DirectivesModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _models_ingredients_model__WEBPACK_IMPORTED_MODULE_14__["IngredientsModel"], _models_categories_model__WEBPACK_IMPORTED_MODULE_18__["CategoriesModel"], _models_currencies_model__WEBPACK_IMPORTED_MODULE_16__["CurrenciesModel"], _models_cuisines_model__WEBPACK_IMPORTED_MODULE_17__["CuisinesModel"], _models_countries_model__WEBPACK_IMPORTED_MODULE_15__["CountriesModel"], _models_regimens_model__WEBPACK_IMPORTED_MODULE_20__["RegimensModel"], _models_prices_model__WEBPACK_IMPORTED_MODULE_19__["PricesModel"], _models_users_model__WEBPACK_IMPORTED_MODULE_22__["UsersModel"], _models_recipes_model__WEBPACK_IMPORTED_MODULE_23__["RecipesModel"], _models_stores_model__WEBPACK_IMPORTED_MODULE_21__["StoresModel"], _storage_favorites_storage__WEBPACK_IMPORTED_MODULE_25__["FavoritesStorage"], _models_advertisements_model__WEBPACK_IMPORTED_MODULE_24__["AdvertisementsModel"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/components/breathe-bottom/breathe-bottom.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/breathe-bottom/breathe-bottom.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBreatheBottomBreatheBottomComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYXRoZS1ib3R0b20vYnJlYXRoZS1ib3R0b20uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/breathe-bottom/breathe-bottom.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/breathe-bottom/breathe-bottom.component.ts ***!
      \***********************************************************************/

    /*! exports provided: BreatheBottomComponent */

    /***/
    function srcAppComponentsBreatheBottomBreatheBottomComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreatheBottomComponent", function () {
        return BreatheBottomComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BreatheBottomComponent = /*#__PURE__*/function () {
        function BreatheBottomComponent() {
          _classCallCheck(this, BreatheBottomComponent);
        }

        _createClass(BreatheBottomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreatheBottomComponent;
      }();

      BreatheBottomComponent.ctorParameters = function () {
        return [];
      };

      BreatheBottomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breathe-bottom',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./breathe-bottom.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breathe-bottom/breathe-bottom.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./breathe-bottom.component.scss */
        "./src/app/components/breathe-bottom/breathe-bottom.component.scss"))["default"]]
      })], BreatheBottomComponent);
      /***/
    },

    /***/
    "./src/app/components/card-advertisement/card-advertisement.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/card-advertisement/card-advertisement.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCardAdvertisementCardAdvertisementComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-advertisement {\n  height: 20vh;\n  background-size: cover !important;\n  height: 20vh;\n  background-position: center;\n  background: url(\"/assets/images/advertisement-background.png\");\n  background-position: bottom;\n}\n.card-advertisement .card-advertisement-overlay {\n  text-align: center;\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  height: 90%;\n  width: 90%;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position-x: center !important;\n}\n.card-advertisement .card-advertisement-overlay img {\n  max-height: 100%;\n}\n.card-advertisement-title {\n  text-align: left;\n  padding: 0;\n  padding-left: 16px;\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: -12px;\n  color: black;\n  text-transform: capitalize;\n}\n.card-advertisement-subtitle {\n  text-align: left;\n  padding: 0;\n  padding-left: 17px;\n  font-size: 12px;\n  color: gray;\n  text-transform: capitalize;\n}\napp-favorite {\n  position: absolute;\n  top: 0;\n  font-size: 20px;\n  color: wheat;\n  right: 0;\n}\n.all-advertisements-image-placeholder {\n  right: -5em;\n  top: -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWFkdmVydGlzZW1lbnQvY2FyZC1hZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsOERBQUE7RUFFQSwyQkFBQTtBQURKO0FBRUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtBQUFOO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBTUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBSEo7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1hZHZlcnRpc2VtZW50L2NhcmQtYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWFkdmVydGlzZW1lbnQge1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYWR2ZXJ0aXNlbWVudC1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIC5jYXJkLWFkdmVydGlzZW1lbnQtb3ZlcmxheSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUlO1xuICAgICAgcmlnaHQ6IDUlO1xuICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlciAhaW1wb3J0YW50O1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jYXJkLWFkdmVydGlzZW1lbnQtaW1hZ2V7fVxuICBcbiAgLmNhcmQtYWR2ZXJ0aXNlbWVudC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIC5jYXJkLWFkdmVydGlzZW1lbnQtc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIFxuICBhcHAtZmF2b3JpdGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoZWF0O1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmFsbC1hZHZlcnRpc2VtZW50cy1pbWFnZS1wbGFjZWhvbGRlcntcbiAgICByaWdodDogLTVlbTtcbiAgICB0b3A6IC0xZW07XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/card-advertisement/card-advertisement.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/card-advertisement/card-advertisement.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CardAdvertisementComponent */

    /***/
    function srcAppComponentsCardAdvertisementCardAdvertisementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardAdvertisementComponent", function () {
        return CardAdvertisementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CardAdvertisementComponent = /*#__PURE__*/function () {
        function CardAdvertisementComponent() {
          _classCallCheck(this, CardAdvertisementComponent);

          this.advertisement = {};
        }

        _createClass(CardAdvertisementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToUrl",
          value: function goToUrl() {
            if (this.advertisement.url) {
              window.open(this.advertisement.url, '_system');
            }
          }
        }]);

        return CardAdvertisementComponent;
      }();

      CardAdvertisementComponent.ctorParameters = function () {
        return [];
      };

      CardAdvertisementComponent.propDecorators = {
        advertisement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CardAdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./card-advertisement.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-advertisement/card-advertisement.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./card-advertisement.component.scss */
        "./src/app/components/card-advertisement/card-advertisement.component.scss"))["default"]]
      })], CardAdvertisementComponent);
      /***/
    },

    /***/
    "./src/app/components/card-category/card-category.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/card-category/card-category.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCardCategoryCardCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jYXRlZ29yeS9jYXJkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/card-category/card-category.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/card-category/card-category.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CardCategoryComponent */

    /***/
    function srcAppComponentsCardCategoryCardCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardCategoryComponent", function () {
        return CardCategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CardCategoryComponent = /*#__PURE__*/function () {
        function CardCategoryComponent() {
          _classCallCheck(this, CardCategoryComponent);
        }

        _createClass(CardCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardCategoryComponent;
      }();

      CardCategoryComponent.ctorParameters = function () {
        return [];
      };

      CardCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./card-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-category/card-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./card-category.component.scss */
        "./src/app/components/card-category/card-category.component.scss"))["default"]]
      })], CardCategoryComponent);
      /***/
    },

    /***/
    "./src/app/components/card-ingredient/card-ingredient.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/card-ingredient/card-ingredient.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCardIngredientCardIngredientComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-ingredient {\n  height: 30vh;\n  background-size: cover !important;\n  background: url(\"/assets/images/recipe-background.png\");\n  background-position: center !important;\n}\n.card-ingredient .card-ingredient-overlay {\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+1,ffffff+79&0+0,0.26+80,0.59+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 1%, rgba(255, 255, 255, 0.26) 79%, rgba(255, 255, 255, 0.26) 80%, rgba(255, 255, 255, 0.59) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#96ffffff\",GradientType=0 );\n  /* IE6-9 */\n}\n.card-ingredient-title {\n  text-align: left;\n  padding: 0;\n  padding-left: 16px;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -12px;\n  text-transform: capitalize;\n  color: black;\n}\n.recipe-macros {\n  font-size: 12px;\n}\nion-card {\n  margin-bottom: 0px !important;\n}\nion-card-content {\n  padding: 0;\n  bottom: 8px;\n  position: absolute;\n  left: -4px;\n}\n.odd {\n  margin-right: 8px;\n}\n.even {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWluZ3JlZGllbnQvY2FyZC1pbmdyZWRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsdURBQUE7RUFFQSxzQ0FBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHFJQUFBO0VBQzRLLGFBQUE7RUFDRCw0QkFBQTtFQUMzSywwTEFBQTtFQUF5SyxxREFBQTtFQUN6Syx1SEFBQTtFQUF5SCxVQUFBO0FBSS9IO0FBQUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBR0o7QUFDRTtFQUNFLGVBQUE7QUFFSjtBQUNFO0VBQ0UsNkJBQUE7QUFFSjtBQUFFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHSjtBQUFFO0VBQ0UsaUJBQUE7QUFHSjtBQUFFO0VBQ0UsZ0JBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1pbmdyZWRpZW50L2NhcmQtaW5ncmVkaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWluZ3JlZGllbnQge1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcmVjaXBlLWJhY2tncm91bmQucG5nXCIpO1xuICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAuY2FyZC1pbmdyZWRpZW50LW92ZXJsYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNmZmZmZmYrMSxmZmZmZmYrNzkmMCswLDAuMjYrODAsMC41OSsxMDAgKi9cbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA3OSUsIHJnYmEoMjU1LDI1NSwyNTUsMC4yNikgODAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNTkpIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA3OSUscmdiYSgyNTUsMjU1LDI1NSwwLjI2KSA4MCUscmdiYSgyNTUsMjU1LDI1NSwwLjU5KSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUscmdiYSgyNTUsMjU1LDI1NSwwKSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpIDc5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpIDgwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuNTkpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzk2ZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xuICAgIH1cbiAgfVxuICBcbiAgLmNhcmQtaW5ncmVkaWVudC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuXG4gIC5yZWNpcGUtbWFjcm9ze1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50OyBcbiAgfVxuICBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00cHg7XG4gIH1cblxuICAub2Rke1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgLmV2ZW57XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/card-ingredient/card-ingredient.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/card-ingredient/card-ingredient.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CardIngredientComponent */

    /***/
    function srcAppComponentsCardIngredientCardIngredientComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardIngredientComponent", function () {
        return CardIngredientComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CardIngredientComponent = /*#__PURE__*/function () {
        function CardIngredientComponent(navCtrl) {
          _classCallCheck(this, CardIngredientComponent);

          this.navCtrl = navCtrl;
          this.odd = false;
          this.even = false;
        }

        _createClass(CardIngredientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToIngredient",
          value: function goToIngredient(ingredient, $event) {
            var _this4 = this;

            setTimeout(function () {
              var navigationExtras = {
                queryParams: {
                  ingredient: JSON.stringify(ingredient)
                },
                animated: false
              };

              _this4.navCtrl.navigateForward("ingredient/".concat(ingredient.id), navigationExtras);
            }, 300);
          }
        }]);

        return CardIngredientComponent;
      }();

      CardIngredientComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      CardIngredientComponent.propDecorators = {
        ingredient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        odd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        even: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CardIngredientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-ingredient',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./card-ingredient.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-ingredient/card-ingredient.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./card-ingredient.component.scss */
        "./src/app/components/card-ingredient/card-ingredient.component.scss"))["default"]]
      })], CardIngredientComponent);
      /***/
    },

    /***/
    "./src/app/components/card-recipe/card-recipe.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/card-recipe/card-recipe.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCardRecipeCardRecipeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-recipe {\n  height: 20vh;\n  background-size: cover !important;\n  height: 20vh;\n  background: url(\"/assets/images/recipe-background.png\");\n  background-position: bottom;\n}\n.card-recipe .card-recipe-overlay {\n  text-align: center;\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  height: 90%;\n  width: 90%;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position-x: center !important;\n}\n.card-recipe .card-recipe-overlay img {\n  max-height: 100%;\n}\n.card-recipe-title {\n  text-align: left;\n  padding: 0;\n  padding-left: 16px;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -12px;\n  color: gray;\n  text-transform: capitalize;\n}\napp-favorite {\n  position: absolute;\n  top: 0;\n  font-size: 20px;\n  color: wheat;\n  right: 0;\n}\n.all-recipes-image-placeholder {\n  right: -5em;\n  top: -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLXJlY2lwZS9jYXJkLXJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFFQSx1REFBQTtFQUVBLDJCQUFBO0FBREo7QUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0FBQU47QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtcmVjaXBlL2NhcmQtcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcmVjaXBlIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjB2aDtcbiAgXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcmVjaXBlLWJhY2tncm91bmQucG5nXCIpO1xuICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgLmNhcmQtcmVjaXBlLW92ZXJsYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1JTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2FyZC1yZWNpcGUtaW1hZ2V7fVxuICBcbiAgLmNhcmQtcmVjaXBlLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICBcbiAgYXBwLWZhdm9yaXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGVhdDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5hbGwtcmVjaXBlcy1pbWFnZS1wbGFjZWhvbGRlcntcbiAgICByaWdodDogLTVlbTtcbiAgICB0b3A6IC0xZW07XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/card-recipe/card-recipe.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/card-recipe/card-recipe.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CardRecipeComponent */

    /***/
    function srcAppComponentsCardRecipeCardRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardRecipeComponent", function () {
        return CardRecipeComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CardRecipeComponent = /*#__PURE__*/function () {
        function CardRecipeComponent(navCtrl) {
          _classCallCheck(this, CardRecipeComponent);

          this.navCtrl = navCtrl;
        }

        _createClass(CardRecipeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToRecipes",
          value: function goToRecipes() {
            this.navCtrl.navigateForward("recipes");
          }
        }, {
          key: "hasRecipe",
          get: function get() {
            return this.recipe && this.recipe.id ? true : false;
          }
        }]);

        return CardRecipeComponent;
      }();

      CardRecipeComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      CardRecipeComponent.propDecorators = {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CardRecipeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-recipe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./card-recipe.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-recipe/card-recipe.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./card-recipe.component.scss */
        "./src/app/components/card-recipe/card-recipe.component.scss"))["default"]]
      })], CardRecipeComponent);
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./drawer/drawer.component */
      "./src/app/components/drawer/drawer.component.ts");
      /* harmony import */


      var _page_transition_page_transition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page-transition/page-transition.component */
      "./src/app/components/page-transition/page-transition.component.ts");
      /* harmony import */


      var _card_recipe_card_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./card-recipe/card-recipe.component */
      "./src/app/components/card-recipe/card-recipe.component.ts");
      /* harmony import */


      var _card_category_card_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./card-category/card-category.component */
      "./src/app/components/card-category/card-category.component.ts");
      /* harmony import */


      var _card_ingredient_card_ingredient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./card-ingredient/card-ingredient.component */
      "./src/app/components/card-ingredient/card-ingredient.component.ts");
      /* harmony import */


      var _card_advertisement_card_advertisement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./card-advertisement/card-advertisement.component */
      "./src/app/components/card-advertisement/card-advertisement.component.ts");
      /* harmony import */


      var _recipe_time_dificulty_recipe_time_dificulty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./recipe-time-dificulty/recipe-time-dificulty.component */
      "./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.ts");
      /* harmony import */


      var _nutritional_value_display_nutritional_value_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./nutritional-value-display/nutritional-value-display.component */
      "./src/app/components/nutritional-value-display/nutritional-value-display.component.ts");
      /* harmony import */


      var _nutritional_value_nutritional_value_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./nutritional-value/nutritional-value.component */
      "./src/app/components/nutritional-value/nutritional-value.component.ts");
      /* harmony import */


      var _no_data_no_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./no-data/no-data.component */
      "./src/app/components/no-data/no-data.component.ts");
      /* harmony import */


      var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./favorite/favorite.component */
      "./src/app/components/favorite/favorite.component.ts");
      /* harmony import */


      var _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../directives/directives.module */
      "./src/app/directives/directives.module.ts");
      /* harmony import */


      var _breathe_bottom_breathe_bottom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./breathe-bottom/breathe-bottom.component */
      "./src/app/components/breathe-bottom/breathe-bottom.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]],
        declarations: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _page_transition_page_transition_component__WEBPACK_IMPORTED_MODULE_5__["PageTransitionComponent"], _card_category_card_category_component__WEBPACK_IMPORTED_MODULE_7__["CardCategoryComponent"], _card_ingredient_card_ingredient_component__WEBPACK_IMPORTED_MODULE_8__["CardIngredientComponent"], _card_recipe_card_recipe_component__WEBPACK_IMPORTED_MODULE_6__["CardRecipeComponent"], _card_advertisement_card_advertisement_component__WEBPACK_IMPORTED_MODULE_9__["CardAdvertisementComponent"], _recipe_time_dificulty_recipe_time_dificulty_component__WEBPACK_IMPORTED_MODULE_10__["RecipeTimeDificultyComponent"], _nutritional_value_display_nutritional_value_display_component__WEBPACK_IMPORTED_MODULE_11__["NutritionalValueDisplayComponent"], _nutritional_value_nutritional_value_component__WEBPACK_IMPORTED_MODULE_12__["NutritionalValueComponent"], _no_data_no_data_component__WEBPACK_IMPORTED_MODULE_13__["NoDataComponent"], _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteComponent"], _breathe_bottom_breathe_bottom_component__WEBPACK_IMPORTED_MODULE_16__["BreatheBottomComponent"]],
        exports: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _page_transition_page_transition_component__WEBPACK_IMPORTED_MODULE_5__["PageTransitionComponent"], _card_category_card_category_component__WEBPACK_IMPORTED_MODULE_7__["CardCategoryComponent"], _card_ingredient_card_ingredient_component__WEBPACK_IMPORTED_MODULE_8__["CardIngredientComponent"], _card_recipe_card_recipe_component__WEBPACK_IMPORTED_MODULE_6__["CardRecipeComponent"], _card_advertisement_card_advertisement_component__WEBPACK_IMPORTED_MODULE_9__["CardAdvertisementComponent"], _recipe_time_dificulty_recipe_time_dificulty_component__WEBPACK_IMPORTED_MODULE_10__["RecipeTimeDificultyComponent"], _nutritional_value_display_nutritional_value_display_component__WEBPACK_IMPORTED_MODULE_11__["NutritionalValueDisplayComponent"], _nutritional_value_nutritional_value_component__WEBPACK_IMPORTED_MODULE_12__["NutritionalValueComponent"], _no_data_no_data_component__WEBPACK_IMPORTED_MODULE_13__["NoDataComponent"], _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteComponent"], _breathe_bottom_breathe_bottom_component__WEBPACK_IMPORTED_MODULE_16__["BreatheBottomComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/drawer/drawer.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/drawer/drawer.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDrawerDrawerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;\n  width: 100vw;\n  border-radius: 20px;\n  bottom: -74vh;\n  height: 80vh;\n  z-index: 101;\n  background: white;\n}\n\n.drawer-pull {\n  background: #CCC;\n  height: 4px;\n  width: 60px;\n  border-radius: 2px;\n}\n\n.backdrop {\n  width: 100vw;\n  height: 100vh;\n  background: #00000094;\n  z-index: 100;\n  position: absolute;\n  bottom: 0;\n}\n\n.fade-in {\n  transition: 0.4s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade {\n  transition: 0.4s linear all;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEyKTAgNHB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm90dG9tOiAtNzR2aDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgei1pbmRleDogMTAxO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZHJhd2VyLXB1bGx7XG4gICAgYmFja2dyb3VuZDojQ0NDO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJhY2tkcm9we1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5NDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xufVxuXG4uZmFkZS1pbntcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGxpbmVhciBhbGwgO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5mYWRle1xuICAgIHRyYW5zaXRpb246IDAuNHMgbGluZWFyIGFsbDtcbiAgICBvcGFjaXR5OiAxO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/drawer/drawer.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/drawer/drawer.component.ts ***!
      \*******************************************************/

    /*! exports provided: DrawerComponent */

    /***/
    function srcAppComponentsDrawerDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrawerComponent", function () {
        return DrawerComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/events.service */
      "./src/app/services/events.service.ts");

      var DrawerComponent = /*#__PURE__*/function () {
        function DrawerComponent(platform, gestureController, events) {
          var _this5 = this;

          _classCallCheck(this, DrawerComponent);

          this.platform = platform;
          this.gestureController = gestureController;
          this.events = events;
          this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isOpen = false;
          this.openHeight = 0;
          this.toggleSubscription = events.subscribe('drawer:toggle', function (data) {
            _this5.toggleDrawer();
          });
          this.closeSubscription = events.subscribe('drawer:close', function (data) {
            _this5.closeDrawer();
          });
        }

        _createClass(DrawerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.toggleSubscription.unsubscribe();
            this.closeSubscription.unsubscribe();
          }
        }, {
          key: "toggleDrawer",
          value: function toggleDrawer() {
            var drawer = this.drawer.nativeElement;

            if (this.isOpen) {
              drawer.style.transition = '.4s ease-out';
              drawer.style.transform = "";
              this.isOpen = false;
            } else {
              drawer.style.transition = '.4s ease-out';
              drawer.style.transform = "translateY(".concat(-this.openHeight, "px)");
              this.isOpen = true;
            }
          }
        }, {
          key: "closeDrawer",
          value: function closeDrawer() {
            var drawer = this.drawer.nativeElement;
            drawer.style.transition = '.4s ease-out';
            drawer.style.transform = "";
            this.isOpen = false;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var drawer, gesture;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      drawer = this.drawer.nativeElement;
                      this.openHeight = this.platform.height() / 100 * 70;
                      _context2.next = 4;
                      return this.gestureController.create({
                        el: drawer,
                        gestureName: 'swipe',
                        direction: 'y',
                        onMove: function onMove(ev) {
                          if (ev.deltaY < -_this6.openHeight) return;
                          drawer.style.transform = "translateY(".concat(ev.deltaY, "px)");
                        },
                        onEnd: function onEnd(ev) {
                          if (ev.deltaY < -50 && !_this6.isOpen) {
                            drawer.style.transition = '.4s ease-out';
                            drawer.style.transform = "translateY(".concat(-_this6.openHeight, "px)");

                            _this6.openState.emit(true);

                            _this6.isOpen = true;
                          } else if (ev.deltaY > 50 && _this6.isOpen) {
                            drawer.style.transition = '.4s ease-out';
                            drawer.style.transform = "";

                            _this6.openState.emit(false);

                            _this6.isOpen = false;
                          } else {
                            drawer.style.transition = '.4s ease-out';
                            drawer.style.transform = "";

                            _this6.openState.emit(false);

                            _this6.isOpen = false;
                          }
                        }
                      });

                    case 4:
                      gesture = _context2.sent;
                      gesture.enable(true);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return DrawerComponent;
      }();

      DrawerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }];
      };

      DrawerComponent.propDecorators = {
        drawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['drawer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        openState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['openStateChanged']
        }]
      };
      DrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drawer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./drawer.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawer/drawer.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./drawer.component.scss */
        "./src/app/components/drawer/drawer.component.scss"))["default"]]
      })], DrawerComponent);
      /***/
    },

    /***/
    "./src/app/components/favorite/favorite.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/favorite/favorite.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFavoriteFavoriteComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/favorite/favorite.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/favorite/favorite.component.ts ***!
      \***********************************************************/

    /*! exports provided: FavoriteComponent */

    /***/
    function srcAppComponentsFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
        return FavoriteComponent;
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


      var src_app_storage_favorites_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/storage/favorites.storage */
      "./src/app/storage/favorites.storage.ts");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/events.service */
      "./src/app/services/events.service.ts");

      var FavoriteComponent = /*#__PURE__*/function () {
        function FavoriteComponent(favoritesStorage, events) {
          var _this7 = this;

          _classCallCheck(this, FavoriteComponent);

          this.favoritesStorage = favoritesStorage;
          this.liked = false;
          this.icon = 'heart-outline';
          this.recipe = {};
          this.slot = "icon-only";
          this.subscription = events.subscribe("storage:".concat(favoritesStorage.table), function (data) {
            _this7._checkState();
          });
        }

        _createClass(FavoriteComponent, [{
          key: "_setIcon",
          value: function _setIcon() {
            if (this.liked) {
              this.icon = 'heart';
            } else {
              this.icon = 'heart-outline';
            }
          }
        }, {
          key: "_checkState",
          value: function _checkState() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var liked, id, favorites, ids;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      liked = false;
                      id = this.recipe.id;
                      _context3.next = 4;
                      return this.favoritesStorage.read();

                    case 4:
                      favorites = _context3.sent;
                      ids = favorites.map(function (el) {
                        return el.id;
                      });

                      if (!(ids.indexOf(id) > -1)) {
                        _context3.next = 11;
                        break;
                      }

                      liked = true;
                      this.liked = true;

                      this._setIcon();

                      return _context3.abrupt("return");

                    case 11:
                      this.liked = liked;

                      this._setIcon();

                      return _context3.abrupt("return");

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toggleState",
          value: function toggleState($event) {
            $event.preventDefault();
            $event.stopPropagation();

            if (this.liked) {
              this.favoritesStorage.destroy(this.recipe.id);
            } else {
              this.favoritesStorage.create(this.recipe);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkState();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._checkState();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return FavoriteComponent;
      }();

      FavoriteComponent.ctorParameters = function () {
        return [{
          type: src_app_storage_favorites_storage__WEBPACK_IMPORTED_MODULE_2__["FavoritesStorage"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }];
      };

      FavoriteComponent.propDecorators = {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['recipe']
        }],
        slot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['slot']
        }]
      };
      FavoriteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorite.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorite/favorite.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorite.component.scss */
        "./src/app/components/favorite/favorite.component.scss"))["default"]]
      })], FavoriteComponent);
      /***/
    },

    /***/
    "./src/app/components/no-data/no-data.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/no-data/no-data.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNoDataNoDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-icon {\n  font-size: 40px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uby1kYXRhL25vLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uby1kYXRhL25vLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIFxuICAgIGNvbG9yOiAjOGM4YzhjO1xuICBcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaW9uLWljb257XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/no-data/no-data.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/no-data/no-data.component.ts ***!
      \*********************************************************/

    /*! exports provided: NoDataComponent */

    /***/
    function srcAppComponentsNoDataNoDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoDataComponent", function () {
        return NoDataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NoDataComponent = /*#__PURE__*/function () {
        function NoDataComponent() {
          _classCallCheck(this, NoDataComponent);
        }

        _createClass(NoDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoDataComponent;
      }();

      NoDataComponent.ctorParameters = function () {
        return [];
      };

      NoDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./no-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-data/no-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./no-data.component.scss */
        "./src/app/components/no-data/no-data.component.scss"))["default"]]
      })], NoDataComponent);
      /***/
    },

    /***/
    "./src/app/components/nutritional-value-display/nutritional-value-display.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/nutritional-value-display/nutritional-value-display.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNutritionalValueDisplayNutritionalValueDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uYWwtdmFsdWUtZGlzcGxheS9udXRyaXRpb25hbC12YWx1ZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/nutritional-value-display/nutritional-value-display.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/nutritional-value-display/nutritional-value-display.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: NutritionalValueDisplayComponent */

    /***/
    function srcAppComponentsNutritionalValueDisplayNutritionalValueDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NutritionalValueDisplayComponent", function () {
        return NutritionalValueDisplayComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NutritionalValueDisplayComponent = /*#__PURE__*/function () {
        function NutritionalValueDisplayComponent() {
          _classCallCheck(this, NutritionalValueDisplayComponent);

          this.hasHactionButton = false;
          this.nutritionalValue = {
            kcals: 0,
            proteins: 0,
            carbs: 0,
            fats: 0
          };
          this.classes = "";
          this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(NutritionalValueDisplayComponent, [{
          key: "action",
          value: function action() {
            this.onAction.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "macros",
          get: function get() {
            var carbs = 0;
            var proteins = 0;
            var fats = 0;

            if (this.nutritionalValue.kcals) {
              carbs = Math.round(this.nutritionalValue.carbs * 4 * 100 / this.nutritionalValue.kcals) + "%";
              proteins = Math.round(this.nutritionalValue.proteins * 4 * 100 / this.nutritionalValue.kcals) + "%";
              fats = Math.round(this.nutritionalValue.fats * 9 * 100 / this.nutritionalValue.kcals) + "%";
            }

            return {
              carbs: carbs,
              proteins: proteins,
              fats: fats
            };
          }
        }]);

        return NutritionalValueDisplayComponent;
      }();

      NutritionalValueDisplayComponent.ctorParameters = function () {
        return [];
      };

      NutritionalValueDisplayComponent.propDecorators = {
        hasHactionButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nutritionalValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      NutritionalValueDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nutritional-value-display",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nutritional-value-display.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value-display/nutritional-value-display.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nutritional-value-display.component.scss */
        "./src/app/components/nutritional-value-display/nutritional-value-display.component.scss"))["default"]]
      })], NutritionalValueDisplayComponent);
      /***/
    },

    /***/
    "./src/app/components/nutritional-value/nutritional-value.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/nutritional-value/nutritional-value.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNutritionalValueNutritionalValueComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".square-title {\n  height: 24px;\n}\n\n.square-value {\n  margin: 0;\n}\n\n.progress-text {\n  font-weight: 600;\n}\n\n.progress-value {\n  font-size: 12px;\n}\n\n.progressbar {\n  position: absolute;\n  max-width: 100%;\n  height: 100%;\n}\n\n.progressbar-container {\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  box-shadow: 0px 3px 5px rgba(98, 140, 255, 0.3);\n}\n\n.progressbar__track {\n  fill: white;\n  stroke: white;\n  stroke-width: 3px;\n}\n\n.progressbar__thumb {\n  fill: transparent;\n  stroke: orange;\n  stroke-width: 1px;\n  stroke-dasharray: 0 calc(30 * 2 * 3.141593);\n  stroke-linecap: round;\n  -webkit-animation: progress 1.2s forwards;\n          animation: progress 1.2s forwards;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n\n.round {\n  transform: rotate(-90deg);\n  transition: all 1s ease-in-out;\n  position: absolute;\n  /* SVG */\n  stroke: orange;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-dasharray: 0 999;\n}\n\n.round circle {\n  fill: #fff;\n}\n\n.round.gray circle {\n  fill: #f5f5f5;\n}\n\n.progress-content {\n  z-index: 1;\n  text-align: center;\n}\n\n.progress-value {\n  -webkit-animation: pulse 400ms 1.6s forwards;\n          animation: pulse 400ms 1.6s forwards;\n}\n\n.text-sm {\n  font-size: 14px;\n}\n\n@-webkit-keyframes progress-5 {\n  to {\n    stroke-dasharray: 18;\n  }\n}\n\n@keyframes progress-5 {\n  to {\n    stroke-dasharray: 18;\n  }\n}\n\n@-webkit-keyframes progress-10 {\n  to {\n    stroke-dasharray: 36;\n  }\n}\n\n@keyframes progress-10 {\n  to {\n    stroke-dasharray: 36;\n  }\n}\n\n@-webkit-keyframes progress-15 {\n  to {\n    stroke-dasharray: 54;\n  }\n}\n\n@keyframes progress-15 {\n  to {\n    stroke-dasharray: 54;\n  }\n}\n\n@-webkit-keyframes progress-20 {\n  to {\n    stroke-dasharray: 72;\n  }\n}\n\n@keyframes progress-20 {\n  to {\n    stroke-dasharray: 72;\n  }\n}\n\n@-webkit-keyframes progress-25 {\n  to {\n    stroke-dasharray: 90;\n  }\n}\n\n@keyframes progress-25 {\n  to {\n    stroke-dasharray: 90;\n  }\n}\n\n@-webkit-keyframes progress-30 {\n  to {\n    stroke-dasharray: 108;\n  }\n}\n\n@keyframes progress-30 {\n  to {\n    stroke-dasharray: 108;\n  }\n}\n\n@-webkit-keyframes progress-35 {\n  to {\n    stroke-dasharray: 126;\n  }\n}\n\n@keyframes progress-35 {\n  to {\n    stroke-dasharray: 126;\n  }\n}\n\n@-webkit-keyframes progress-40 {\n  to {\n    stroke-dasharray: 144;\n  }\n}\n\n@keyframes progress-40 {\n  to {\n    stroke-dasharray: 144;\n  }\n}\n\n@-webkit-keyframes progress-45 {\n  to {\n    stroke-dasharray: 162;\n  }\n}\n\n@keyframes progress-45 {\n  to {\n    stroke-dasharray: 162;\n  }\n}\n\n@-webkit-keyframes progress-50 {\n  to {\n    stroke-dasharray: 180;\n  }\n}\n\n@keyframes progress-50 {\n  to {\n    stroke-dasharray: 180;\n  }\n}\n\n@-webkit-keyframes progress-55 {\n  to {\n    stroke-dasharray: 198;\n  }\n}\n\n@keyframes progress-55 {\n  to {\n    stroke-dasharray: 198;\n  }\n}\n\n@-webkit-keyframes progress-60 {\n  to {\n    stroke-dasharray: 216;\n  }\n}\n\n@keyframes progress-60 {\n  to {\n    stroke-dasharray: 216;\n  }\n}\n\n@-webkit-keyframes progress-65 {\n  to {\n    stroke-dasharray: 234;\n  }\n}\n\n@keyframes progress-65 {\n  to {\n    stroke-dasharray: 234;\n  }\n}\n\n@-webkit-keyframes progress-70 {\n  to {\n    stroke-dasharray: 252;\n  }\n}\n\n@keyframes progress-70 {\n  to {\n    stroke-dasharray: 252;\n  }\n}\n\n@-webkit-keyframes progress-75 {\n  to {\n    stroke-dasharray: 270;\n  }\n}\n\n@keyframes progress-75 {\n  to {\n    stroke-dasharray: 270;\n  }\n}\n\n@-webkit-keyframes progress-80 {\n  to {\n    stroke-dasharray: 288;\n  }\n}\n\n@keyframes progress-80 {\n  to {\n    stroke-dasharray: 288;\n  }\n}\n\n@-webkit-keyframes progress-85 {\n  to {\n    stroke-dasharray: 306;\n  }\n}\n\n@keyframes progress-85 {\n  to {\n    stroke-dasharray: 306;\n  }\n}\n\n@-webkit-keyframes progress-90 {\n  to {\n    stroke-dasharray: 324;\n  }\n}\n\n@keyframes progress-90 {\n  to {\n    stroke-dasharray: 324;\n  }\n}\n\n@-webkit-keyframes progress-95 {\n  to {\n    stroke-dasharray: 342;\n  }\n}\n\n@keyframes progress-95 {\n  to {\n    stroke-dasharray: 342;\n  }\n}\n\n@-webkit-keyframes progress-100 {\n  to {\n    stroke-dasharray: 360;\n  }\n}\n\n@keyframes progress-100 {\n  to {\n    stroke-dasharray: 360;\n  }\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb25hbC12YWx1ZS9udXRyaXRpb25hbC12YWx1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSxvQkFBQTtFQUVGO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLG9CQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usb0JBQUE7RUFDRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxvQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFBO0VBQUY7QUFDRjs7QUFIQTtFQUNFO0lBQ0Usb0JBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxvQkFBQTtFQURGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLG9CQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0Usb0JBQUE7RUFGRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxvQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLHFCQUFBO0VBSEY7QUFDRjs7QUFBQTtFQUNFO0lBQ0UscUJBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxxQkFBQTtFQUpGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UscUJBQUE7RUFMRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLHFCQUFBO0VBTkY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UscUJBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxxQkFBQTtFQVBGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLHFCQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFO0lBQ0UscUJBQUE7RUFSRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxxQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLHFCQUFBO0VBVEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UscUJBQUE7RUFURjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxxQkFBQTtFQVZGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLHFCQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFO0lBQ0UscUJBQUE7RUFYRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxxQkFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLHFCQUFBO0VBWkY7QUFDRjs7QUFTQTtFQUNFO0lBQ0UscUJBQUE7RUFaRjtBQUNGOztBQWVBO0VBQ0U7SUFDRSxxQkFBQTtFQWJGO0FBQ0Y7O0FBVUE7RUFDRTtJQUNFLHFCQUFBO0VBYkY7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLHFCQUFBO0VBZEY7QUFDRjs7QUFXQTtFQUNFO0lBQ0UscUJBQUE7RUFkRjtBQUNGOztBQWlCQTtFQUNFO0lBQ0UscUJBQUE7RUFmRjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxxQkFBQTtFQWZGO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSxxQkFBQTtFQWhCRjtBQUNGOztBQWFBO0VBQ0U7SUFDRSxxQkFBQTtFQWhCRjtBQUNGOztBQW1CQTtFQUNFO0lBQ0UscUJBQUE7RUFqQkY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UscUJBQUE7RUFqQkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLG1CQUFBO0VBbEJGO0VBb0JBO0lBQ0UscUJBQUE7RUFsQkY7RUFvQkE7SUFDRSxtQkFBQTtFQWxCRjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxtQkFBQTtFQWxCRjtFQW9CQTtJQUNFLHFCQUFBO0VBbEJGO0VBb0JBO0lBQ0UsbUJBQUE7RUFsQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnV0cml0aW9uYWwtdmFsdWUvbnV0cml0aW9uYWwtdmFsdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJlLXRpdGxlIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLnNxdWFyZS12YWx1ZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2dyZXNzLXRleHR7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9ncmVzcy12YWx1ZXtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZ3Jlc3NiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvZ3Jlc3NiYXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuMylcbn1cblxuLnByb2dyZXNzYmFyX190cmFjayB7XG4gIGZpbGw6IHdoaXRlO1xuICBzdHJva2U6IHdoaXRlO1xuICBzdHJva2Utd2lkdGg6IDNweDtcbn1cblxuLnByb2dyZXNzYmFyX190aHVtYiB7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xuICBzdHJva2U6IG9yYW5nZTtcbiAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDAgY2FsYygzMCAqIDIgKiAzLjE0MTU5Myk7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxLjJzIGZvcndhcmRzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuXG4ucm91bmQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogU1ZHICovXG5cbiAgc3Ryb2tlOm9yYW5nZTtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMCA5OTk7XG59XG4ucm91bmQgY2lyY2xlIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnJvdW5kLmdyYXkgY2lyY2xlIHtcbiAgZmlsbDogI2Y1ZjVmNTtcbn1cblxuLnByb2dyZXNzLWNvbnRlbnQge1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcy12YWx1ZSB7XG4gIGFuaW1hdGlvbjogcHVsc2UgNDAwbXMgMS42cyBmb3J3YXJkcztcbn1cblxuLnRleHQtc217XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy01IHtcbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMTAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMTUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMjAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA0O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMjUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA1O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMzAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA2O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtMzUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA3O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtNDAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtNDUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiA5O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtNTAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAxMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLTU1IHtcbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4ICogMTE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy02MCB7XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxOCAqIDEyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtNjUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAxMztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLTcwIHtcbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4ICogMTQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy03NSB7XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxOCAqIDE1O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtODAge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAxNjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLTg1IHtcbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4ICogMTc7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy05MCB7XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxOCAqIDE4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtOTUge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTggKiAxOTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLTEwMCB7XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxOCAqIDIwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/nutritional-value/nutritional-value.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/nutritional-value/nutritional-value.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NutritionalValueComponent */

    /***/
    function srcAppComponentsNutritionalValueNutritionalValueComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NutritionalValueComponent", function () {
        return NutritionalValueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NutritionalValueComponent = /*#__PURE__*/function () {
        function NutritionalValueComponent() {
          _classCallCheck(this, NutritionalValueComponent);

          this.value = "";
          this.title = "";
          this.percentage = "0";
          this.classes = "";
        }

        _createClass(NutritionalValueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var currentPercentage = this.percentage || "0";
            currentPercentage = String(currentPercentage);
            currentPercentage = parseInt(currentPercentage.trim("%"));

            try {
              this.thumb.nativeElement.style.strokeDasharray = "".concat(currentPercentage * 250 / 100, " 999");
            } catch (ex) {}
          }
        }]);

        return NutritionalValueComponent;
      }();

      NutritionalValueComponent.ctorParameters = function () {
        return [];
      };

      NutritionalValueComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        percentage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["thumb"]
        }]
      };
      NutritionalValueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nutritional-value",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nutritional-value.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nutritional-value/nutritional-value.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nutritional-value.component.scss */
        "./src/app/components/nutritional-value/nutritional-value.component.scss"))["default"]]
      })], NutritionalValueComponent);
      /***/
    },

    /***/
    "./src/app/components/page-transition/page-transition.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/page-transition/page-transition.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPageTransitionPageTransitionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-transition-component {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  background: transparent;\n}\n\n.container {\n  position: relative;\n  width: 100vh;\n  height: 40vh;\n  background: transparent;\n}\n\n.background, .image {\n  position: fixed;\n}\n\n.transition {\n  transition: 1s linear all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLXRyYW5zaXRpb24vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS10cmFuc2l0aW9uL3BhZ2UtdHJhbnNpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhZ2UtdHJhbnNpdGlvbi1jb21wb25lbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG59XG5cbi5iYWNrZ3JvdW5kLC5pbWFnZXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IDFzIGxpbmVhciBhbGw7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/page-transition/page-transition.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/page-transition/page-transition.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PageTransitionComponent */

    /***/
    function srcAppComponentsPageTransitionPageTransitionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTransitionComponent", function () {
        return PageTransitionComponent;
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


      var _services_page_transition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/page-transition.service */
      "./src/app/services/page-transition.service.ts");

      var PageTransitionComponent = /*#__PURE__*/function () {
        function PageTransitionComponent(broadcast) {
          var _this8 = this;

          _classCallCheck(this, PageTransitionComponent);

          this.broadcast = broadcast;
          this.isTransitioning = false;
          this.isOpen = false;
          this.src = "";
          this.broadcast.getBroadcastObservable().subscribe(function (res) {
            if (!res) return;
            if (!res.background && !res.image) return;
            _this8.isOpen = true;

            _this8.buildContainer(res.background, res.image);

            setTimeout(function () {
              _this8.isTransitioning = true;
              setTimeout(function () {
                _this8.isOpen = false;
                _this8.isTransitioning = false;

                _this8.resetContainer();
              }, 1000);
            }, 100);
          });
        }

        _createClass(PageTransitionComponent, [{
          key: "buildContainer",
          value: function buildContainer(background, image) {
            console.log({
              background: background,
              image: image
            });
            this.background.nativeElement.style.top = background.top + "px";
            this.background.nativeElement.style.left = background.left + 'px';
            this.background.nativeElement.style.width = background.width + 'px';
            this.background.nativeElement.style.height = background.height + 'px';
            this.background.nativeElement.style.borderRadius = background.borderRadius;
            this.background.nativeElement.style.background = "url(".concat(background.src, ")");
            this.image.nativeElement.style.top = image.top + "px";
            this.image.nativeElement.style.left = image.left + 'px';
            this.image.nativeElement.style.width = image.width + 'px';
            this.image.nativeElement.style.height = image.height + 'px';
            this.image.nativeElement.style.borderRadius = image.borderRadius;
            this.image.nativeElement.src = image.src;
            this.src = image.src;
          }
        }, {
          key: "resetContainer",
          value: function resetContainer() {
            this.background.nativeElement.style.top = "";
            this.background.nativeElement.style.left = "";
            this.background.nativeElement.style.width = "";
            this.background.nativeElement.style.height = "";
            this.background.nativeElement.style.borderRadius = "";
            this.image.nativeElement.style.top = "";
            this.image.nativeElement.style.left = "";
            this.image.nativeElement.style.width = "";
            this.image.nativeElement.style.height = "";
            this.image.nativeElement.style.borderRadius = "";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageTransitionComponent;
      }();

      PageTransitionComponent.ctorParameters = function () {
        return [{
          type: _services_page_transition_service__WEBPACK_IMPORTED_MODULE_2__["PageTransitionService"]
        }];
      };

      PageTransitionComponent.propDecorators = {
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['background']
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['image']
        }]
      };
      PageTransitionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-transition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./page-transition.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-transition/page-transition.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./page-transition.component.scss */
        "./src/app/components/page-transition/page-transition.component.scss"))["default"]]
      })], PageTransitionComponent);
      /***/
    },

    /***/
    "./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsRecipeTimeDificultyRecipeTimeDificultyComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slide-text-info {\n  display: flex;\n  font-size: 12px;\n  justify-content: space-between;\n}\n\n.slide-text-info-dificulty {\n  margin-left: 6px;\n}\n\nion-icon {\n  color: orange;\n}\n\n.justify-content-end {\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtdGltZS1kaWZpY3VsdHkvcmVjaXBlLXRpbWUtZGlmaWN1bHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFDRTtFQUNFLG9CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS10aW1lLWRpZmljdWx0eS9yZWNpcGUtdGltZS1kaWZpY3VsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtdGV4dC1pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zbGlkZS10ZXh0LWluZm8tZGlmaWN1bHR5e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbiAgXG4gIGlvbi1pY29ue1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1lbmR7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RecipeTimeDificultyComponent */

    /***/
    function srcAppComponentsRecipeTimeDificultyRecipeTimeDificultyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeTimeDificultyComponent", function () {
        return RecipeTimeDificultyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RecipeTimeDificultyComponent = /*#__PURE__*/function () {
        function RecipeTimeDificultyComponent() {
          _classCallCheck(this, RecipeTimeDificultyComponent);

          this.recipe = {
            cookingTime: {
              hour: 0,
              min: 0
            },
            dificulty: "Easy"
          };
          this.inline = true;
        }

        _createClass(RecipeTimeDificultyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipeTimeDificultyComponent;
      }();

      RecipeTimeDificultyComponent.ctorParameters = function () {
        return [];
      };

      RecipeTimeDificultyComponent.propDecorators = {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      RecipeTimeDificultyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-time-dificulty',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipe-time-dificulty.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipe-time-dificulty.component.scss */
        "./src/app/components/recipe-time-dificulty/recipe-time-dificulty.component.scss"))["default"]]
      })], RecipeTimeDificultyComponent);
      /***/
    },

    /***/
    "./src/app/directives/directives.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/directives/directives.module.ts ***!
      \*************************************************/

    /*! exports provided: DirectivesModule */

    /***/
    function srcAppDirectivesDirectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
        return DirectivesModule;
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


      var _parallax_header_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parallax-header/parallax-header.directive */
      "./src/app/directives/parallax-header/parallax-header.directive.ts");
      /* harmony import */


      var _grow_image_to_page_header_grow_image_to_page_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./grow-image-to-page-header/grow-image-to-page-header.directive */
      "./src/app/directives/grow-image-to-page-header/grow-image-to-page-header.directive.ts");

      var DirectivesModule = function DirectivesModule() {
        _classCallCheck(this, DirectivesModule);
      };

      DirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_parallax_header_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxHeaderDirective"], _grow_image_to_page_header_grow_image_to_page_header_directive__WEBPACK_IMPORTED_MODULE_4__["GrowImageToPageHeaderDirective"]],
        exports: [_parallax_header_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxHeaderDirective"], _grow_image_to_page_header_grow_image_to_page_header_directive__WEBPACK_IMPORTED_MODULE_4__["GrowImageToPageHeaderDirective"]]
      })], DirectivesModule);
      /***/
    },

    /***/
    "./src/app/directives/grow-image-to-page-header/grow-image-to-page-header.directive.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/directives/grow-image-to-page-header/grow-image-to-page-header.directive.ts ***!
      \*********************************************************************************************/

    /*! exports provided: GrowImageToPageHeaderDirective */

    /***/
    function srcAppDirectivesGrowImageToPageHeaderGrowImageToPageHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GrowImageToPageHeaderDirective", function () {
        return GrowImageToPageHeaderDirective;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _animations_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../animations/fade */
      "./src/app/animations/fade.ts");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var GrowImageToPageHeaderDirective = /*#__PURE__*/function () {
        function GrowImageToPageHeaderDirective(element, animationCtrl, navCtrl, events) {
          _classCallCheck(this, GrowImageToPageHeaderDirective);

          this.element = element;
          this.animationCtrl = animationCtrl;
          this.navCtrl = navCtrl;
          this.events = events;
          this.goTo = "home";
          this.thumbnail = "";
          this.name = "";
          this.type = "recipe";
          this.data = {};
        }

        _createClass(GrowImageToPageHeaderDirective, [{
          key: "onClick",
          value: function onClick(event) {
            this.openTransition(this.element.nativeElement);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.animCardBorderRadius = this.animationCtrl.create('animCardBorderRadius');
            this.animCardPosition = this.animationCtrl.create('animCardPosition');
            this.animCardSize = this.animationCtrl.create('animCardSize');
            this.animContainerBackgroundOpacity = this.animationCtrl.create('animContainerBackgroundOpacity');
          }
        }, {
          key: "openTransition",
          value: function openTransition(card) {
            var _this9 = this;

            // Get card background image and radius
            var backgroundImage = this.thumbnail || window.getComputedStyle(card).backgroundImage.slice(4, -1).replace(/"/g, "");
            var borderRadius = window.getComputedStyle(card).borderRadius; // Get card initial measures

            var cardOffset = card.getBoundingClientRect();
            var cardWidth = cardOffset.width;
            var cardHeight = cardOffset.height; // Get card initial positions

            var distFromTop = cardOffset.top;
            var distFromLeft = cardOffset.left; // Insert a div with height: 100vh , width: 100vw , position fixed covering all page

            var div = document.createElement('div');
            div.style.position = "fixed";
            div.style.height = "100vh";
            div.style.width = "100vw";
            div.style.top = "0";
            div.style.right = "0";
            div.style.background = "rgba(255,255,255,0)";
            document.body.appendChild(div); // Insert proxy in div with the size of the card , backgroundImage, position, border radius and absolute 

            var proxyCard = document.createElement('div');
            proxyCard.style.position = "fixed";
            proxyCard.style.width = cardWidth + 'px';
            proxyCard.style.height = cardHeight + 'px';
            proxyCard.style.top = distFromTop + 'px';
            proxyCard.style.left = distFromLeft + 'px';
            proxyCard.style.borderRadius = borderRadius;
            proxyCard.style.background = 'url(' + backgroundImage + ')';
            proxyCard.style.backgroundPosition = "center";
            proxyCard.style.backgroundSize = "cover";
            div.appendChild(proxyCard);
            proxyCard.style.backgroundSize = "cover";
            this.animContainerBackgroundOpacity.addElement(div).duration(300).easing('ease-in').iterations(1).fromTo('background', 'rgba(255,255,255,0)', 'rgba(255,255,255,1)').play();
            this.animCardBorderRadius.addElement(proxyCard).duration(100).easing('ease-in').iterations(1).fromTo('borderRadius', borderRadius, 0).play();
            this.animCardSize.addElement(proxyCard).duration(300).easing('ease-in').iterations(1).fromTo('width', cardWidth, "100vw").fromTo('height', cardHeight, "300px").fromTo('top', distFromTop + 'px', "0px").fromTo('left', distFromLeft + 'px', '0px').play();
            this.div = div;
            this.events.subscribe('ON_PAGE_DID_ENTER', function () {
              _this9.removeElement(_this9.div);

              _this9.events.destroy('ON_PAGE_DID_ENTER');
            });
            setTimeout(function () {
              _this9.animCardSize.stop();

              _this9.animCardBorderRadius.stop();

              _this9.animContainerBackgroundOpacity.stop();

              var navigationExtras = {
                queryParams: {},
                animated: false
              };

              if (_this9.type === "recipe") {
                navigationExtras.queryParams.recipe = JSON.stringify(_this9.data);

                _this9.navCtrl.navigateForward("recipe/".concat(_this9.data.id), navigationExtras);
              } else {
                navigationExtras.queryParams.ingredient = JSON.stringify(_this9.data);

                _this9.navCtrl.navigateForward("ingredient/".concat(_this9.data.id), navigationExtras);
              }
            }, 1000);
          }
        }, {
          key: "removeElement",
          value: function removeElement(div) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!div) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.next = 3;
                      return Object(_animations_fade__WEBPACK_IMPORTED_MODULE_3__["fadeOut"])(div);

                    case 3:
                      div.parentNode.removeChild(div);
                      this.div = false;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return GrowImageToPageHeaderDirective;
      }();

      GrowImageToPageHeaderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }];
      };

      GrowImageToPageHeaderDirective.propDecorators = {
        goTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['goTo']
        }],
        thumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['thumbnail']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['name']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['type']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['data']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }]
      };
      GrowImageToPageHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[growImageToPageHeader]'
      })], GrowImageToPageHeaderDirective);
      /***/
    },

    /***/
    "./src/app/directives/parallax-header/parallax-header.directive.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/directives/parallax-header/parallax-header.directive.ts ***!
      \*************************************************************************/

    /*! exports provided: ParallaxHeaderDirective */

    /***/
    function srcAppDirectivesParallaxHeaderParallaxHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function () {
        return ParallaxHeaderDirective;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _utils_pseudo_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/pseudo-styles */
      "./src/app/utils/pseudo-styles.ts");

      var ParallaxHeaderDirective = /*#__PURE__*/function () {
        function ParallaxHeaderDirective(element, renderer, domCtrl) {
          _classCallCheck(this, ParallaxHeaderDirective);

          this.element = element;
          this.renderer = renderer;
          this.domCtrl = domCtrl;
          this.parallaxHeight = 300;
          this.parallaxRgbValue = '255,255,255';
          this.parallaxTitle = 'Parallax Title Loerm Ipsum etc';
          this.parallaxTextColor = 'white';
        }

        _createClass(ParallaxHeaderDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this10 = this;

            Object(_utils_pseudo_styles__WEBPACK_IMPORTED_MODULE_3__["boot"])();
            var $element = this.element.nativeElement;
            var $parallaxHeaderContainer = document.createElement('div');
            var $parallaxHeaderBackground = document.createElement('div');
            var $parallaxHeaderOverlay = document.createElement('div');
            var $parallaxHeaderTitle = document.createElement('h1');
            var $ionContent = $element.nextElementSibling;
            var $ionToolbar = $element.getElementsByTagName('ion-toolbar');
            var $ionToolbarTitle = null;
            $parallaxHeaderContainer.setAttribute('id', '__parallax-header-container__');

            if ($ionToolbar && $ionToolbar[0]) {
              $ionToolbar = $ionToolbar[0];
              $ionToolbarTitle = $ionToolbar.getElementsByTagName('ion-title');

              if ($ionToolbarTitle && $ionToolbarTitle[0]) {
                $ionToolbarTitle = $ionToolbarTitle[0];
              }
            }

            $element.parentNode.insertBefore($parallaxHeaderContainer, $element.nextElementSibling);
            this.domCtrl.write(function () {
              $element.parentNode.insertBefore($parallaxHeaderContainer, $element.nextElementSibling);
              $parallaxHeaderContainer.appendChild($parallaxHeaderBackground);
              $parallaxHeaderContainer.appendChild($parallaxHeaderOverlay);
              $parallaxHeaderOverlay.appendChild($parallaxHeaderTitle);

              _this10.applyHeaderStyles($element, $ionToolbar, $ionToolbarTitle);

              _this10.applyIonContentStyles($ionContent);

              _this10.applyContainerStyles($parallaxHeaderContainer);

              _this10.applyBackgroundStyles($parallaxHeaderBackground);

              _this10.applyOverlayStyles($parallaxHeaderOverlay);

              _this10.applyTitleStyles($parallaxHeaderTitle);

              _this10.bindScrollEvents($ionContent, $ionToolbar, $element, $parallaxHeaderOverlay, $parallaxHeaderContainer, $ionToolbarTitle);
            });
          }
        }, {
          key: "applyTitleStyles",
          value: function applyTitleStyles($ionToolbarTitle) {
            var textColor = this.parallaxTextColor;
            var shadowColor = textColor === "white" ? 'black' : 'white';
            $ionToolbarTitle.innerText = this._parallaxTitle;
            $ionToolbarTitle.style.setProperty('color', this.parallaxTextColor);
            $ionToolbarTitle.style.setProperty('display', 'inline-block');
            $ionToolbarTitle.style.setProperty('align-self', 'flex-end');
            $ionToolbarTitle.style.setProperty('padding', '0 16px');
            $ionToolbarTitle.style.setProperty('text-shadow', '0 1px 2em ' + shadowColor);
            $ionToolbarTitle.style.setProperty('text-transform', 'capitalize');
          }
        }, {
          key: "applyIonContentStyles",
          value: function applyIonContentStyles($ionContent) {
            $ionContent.style.setProperty('--background', 'transparent');
            $ionContent.style.setProperty('--padding-top', 'calc( 300px - 44px )');
          }
        }, {
          key: "applyOverlayStyles",
          value: function applyOverlayStyles($overlay) {
            this.renderer.setStyle($overlay, 'background', 'rgba(' + this._parallaxRgbValue + ', 0)');
            this.renderer.setStyle($overlay, 'height', this._parallaxHeight + 'px');
            this.renderer.setStyle($overlay, 'background-size', 'cover');
            this.renderer.setStyle($overlay, 'width', '100%');
            this.renderer.setStyle($overlay, 'top', '0');
            this.renderer.setStyle($overlay, 'right', '0');
            this.renderer.setStyle($overlay, 'position', 'absolute');
            this.renderer.setStyle($overlay, 'display', 'flex');
          }
        }, {
          key: "applyBackgroundStyles",
          value: function applyBackgroundStyles($overlay) {
            this.renderer.setStyle($overlay, 'background-image', 'url(' + this._parallaxImage + ')');
            this.renderer.setStyle($overlay, 'height', this._parallaxHeight + 'px');
            this.renderer.setStyle($overlay, 'background-size', 'cover');
            this.renderer.setStyle($overlay, 'background-position', 'center');
            this.renderer.setStyle($overlay, 'width', '100%');
            this.renderer.setStyle($overlay, 'top', '0');
            this.renderer.setStyle($overlay, 'right', '0');
            this.renderer.setStyle($overlay, 'position', 'absolute');
          }
        }, {
          key: "applyContainerStyles",
          value: function applyContainerStyles($container) {
            this.renderer.setStyle($container, 'height', this._parallaxHeight + 'px');
            this.renderer.setStyle($container, 'position', 'absolute');
            this.renderer.setStyle($container, 'width', '100%');
            this.renderer.setStyle($container, 'top', '0');
            this.renderer.setStyle($container, 'right', '0');
            this.renderer.setStyle($container, 'position', 'absolute');
          }
        }, {
          key: "applyHeaderStyles",
          value: function applyHeaderStyles($header, $ionToolbar, $ionToolbarTitle) {
            $header.pseudoStyle('after', 'opacity', '0');

            for (var _i = 0, _arr = _toConsumableArray($header.getElementsByTagName('ion-button')); _i < _arr.length; _i++) {
              var $button = _arr[_i];
              $button.style.setProperty('--color', 'white');
            }

            this.renderer.setStyle($header, 'background', 'transparent');

            if ($ionToolbar) {
              $ionToolbar.style.setProperty('--background', 'transparent');
            }

            if ($ionToolbarTitle) {
              this.renderer.setStyle($ionToolbarTitle, 'opacity', "0");
            }
          }
        }, {
          key: "bindScrollEvents",
          value: function bindScrollEvents($ionContent, $ionToolbar, $ionHeader, $overlay, $container, $ionToolbarTitle) {
            var _this11 = this;

            $ionContent.scrollEvents = true;
            $ionContent.addEventListener('ionScroll', function (event) {
              if (event.detail.scrollTop > 300) {
                $container.style.top = '-' + 300 / 1.5 + 'px';
                $overlay.style.background = "rgba(255,255,255, 1) ";

                if ($ionToolbar) {
                  $ionToolbar.style.setProperty('--border-width', '0 0 0.55px');
                  $ionToolbar.style.setProperty('--background', 'rgba(' + _this11._parallaxRgbValue + ',1)');
                }

                if ($ionToolbarTitle) {
                  _this11.renderer.setStyle($ionToolbarTitle, 'opacity', "1");
                }

                $ionHeader.pseudoStyle('after', 'opacity', '1');

                for (var _i2 = 0, _arr2 = _toConsumableArray($ionHeader.getElementsByTagName('ion-button')); _i2 < _arr2.length; _i2++) {
                  var $button = _arr2[_i2];
                  $button.style.setProperty('--color', '');
                }
              } else {
                $ionHeader.pseudoStyle('after', 'opacity', '0');
                $container.style.top = '-' + event.detail.scrollTop / 1.5 + 'px';
                $overlay.style.background = "rgba(255,255,255, " + (event.detail.scrollTop + 44) / 300 + ") ";

                if ($ionToolbar) {
                  $ionToolbar.style.setProperty('--border-width', '0');
                  $ionToolbar.style.setProperty('--background', 'rgba(' + _this11._parallaxRgbValue + ',0)');
                }

                if ($ionToolbarTitle) {
                  _this11.renderer.setStyle($ionToolbarTitle, 'opacity', "0");
                }

                for (var _i3 = 0, _arr3 = _toConsumableArray($ionHeader.getElementsByTagName('ion-button')); _i3 < _arr3.length; _i3++) {
                  var _$button = _arr3[_i3];

                  _$button.style.setProperty('--color', 'white');
                }
              }
            });
          }
        }, {
          key: "_parallaxTitle",
          get: function get() {
            return this.parallaxTitle || 'Parallax Title Loerm Ipsum etc';
          }
        }, {
          key: "_parallaxImage",
          get: function get() {
            return this.imagePath || 'https://ununsplash.imgix.net/photo-1421091242698-34f6ad7fc088?fit=crop&fm=jpg&h=650&q=75&w=950';
          }
        }, {
          key: "_parallaxHeight",
          get: function get() {
            return this.parallaxHeight || 300;
          }
        }, {
          key: "_parallaxRgbValue",
          get: function get() {
            return this.parallaxRgbValue || '255,255,255';
          }
        }]);

        return ParallaxHeaderDirective;
      }();

      ParallaxHeaderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
        }];
      };

      ParallaxHeaderDirective.propDecorators = {
        imagePath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parallaxImage']
        }],
        parallaxHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parallaxHeight']
        }],
        parallaxRgbValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parallaxRgbValue']
        }],
        parallaxTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parallaxTitle']
        }],
        parallaxTextColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parallaxTextColor']
        }]
      };
      ParallaxHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[parallaxHeader]'
      })], ParallaxHeaderDirective);
      /***/
    },

    /***/
    "./src/app/models/advertisements.model.ts":
    /*!************************************************!*\
      !*** ./src/app/models/advertisements.model.ts ***!
      \************************************************/

    /*! exports provided: AdvertisementsModel */

    /***/
    function srcAppModelsAdvertisementsModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisementsModel", function () {
        return AdvertisementsModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "advertisements";
      var relationships = {};

      var AdvertisementsModel = /*#__PURE__*/function (_services_data_servic) {
        _inherits(AdvertisementsModel, _services_data_servic);

        var _super = _createSuper(AdvertisementsModel);

        function AdvertisementsModel(http) {
          var _this12;

          _classCallCheck(this, AdvertisementsModel);

          _this12 = _super.call(this, http, model, relationships);
          _this12.http = http;
          return _this12;
        }

        return AdvertisementsModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      AdvertisementsModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AdvertisementsModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AdvertisementsModel);
      /***/
    },

    /***/
    "./src/app/models/categories.model.ts":
    /*!********************************************!*\
      !*** ./src/app/models/categories.model.ts ***!
      \********************************************/

    /*! exports provided: CategoriesModel */

    /***/
    function srcAppModelsCategoriesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesModel", function () {
        return CategoriesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/many-to-many */
      "./src/app/models/utils/many-to-many.ts");

      var model = "categories";
      var relationships = {
        ingredients: Object(_utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__["manyToMany"])("categories", "ingredients"),
        recipes: Object(_utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__["manyToMany"])("categories", "recipes")
      };

      var CategoriesModel = /*#__PURE__*/function (_services_data_servic2) {
        _inherits(CategoriesModel, _services_data_servic2);

        var _super2 = _createSuper(CategoriesModel);

        function CategoriesModel(http) {
          var _this13;

          _classCallCheck(this, CategoriesModel);

          _this13 = _super2.call(this, http, model, relationships);
          _this13.http = http;
          return _this13;
        }

        return CategoriesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      CategoriesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      CategoriesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], CategoriesModel);
      /***/
    },

    /***/
    "./src/app/models/countries.model.ts":
    /*!*******************************************!*\
      !*** ./src/app/models/countries.model.ts ***!
      \*******************************************/

    /*! exports provided: CountriesModel */

    /***/
    function srcAppModelsCountriesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountriesModel", function () {
        return CountriesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "countries";
      var relationships = {};

      var CountriesModel = /*#__PURE__*/function (_services_data_servic3) {
        _inherits(CountriesModel, _services_data_servic3);

        var _super3 = _createSuper(CountriesModel);

        function CountriesModel(http) {
          var _this14;

          _classCallCheck(this, CountriesModel);

          _this14 = _super3.call(this, http, model, relationships);
          _this14.http = http;
          return _this14;
        }

        return CountriesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      CountriesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      CountriesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], CountriesModel);
      /***/
    },

    /***/
    "./src/app/models/cuisines.model.ts":
    /*!******************************************!*\
      !*** ./src/app/models/cuisines.model.ts ***!
      \******************************************/

    /*! exports provided: CuisinesModel */

    /***/
    function srcAppModelsCuisinesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CuisinesModel", function () {
        return CuisinesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "cuisines";
      var relationships = {};

      var CuisinesModel = /*#__PURE__*/function (_services_data_servic4) {
        _inherits(CuisinesModel, _services_data_servic4);

        var _super4 = _createSuper(CuisinesModel);

        function CuisinesModel(http) {
          var _this15;

          _classCallCheck(this, CuisinesModel);

          _this15 = _super4.call(this, http, model, relationships);
          _this15.http = http;
          return _this15;
        }

        return CuisinesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      CuisinesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      CuisinesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], CuisinesModel);
      /***/
    },

    /***/
    "./src/app/models/currencies.model.ts":
    /*!********************************************!*\
      !*** ./src/app/models/currencies.model.ts ***!
      \********************************************/

    /*! exports provided: CurrenciesModel */

    /***/
    function srcAppModelsCurrenciesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrenciesModel", function () {
        return CurrenciesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "currencies";
      var relationships = {};

      var CurrenciesModel = /*#__PURE__*/function (_services_data_servic5) {
        _inherits(CurrenciesModel, _services_data_servic5);

        var _super5 = _createSuper(CurrenciesModel);

        function CurrenciesModel(http) {
          var _this16;

          _classCallCheck(this, CurrenciesModel);

          _this16 = _super5.call(this, http, model, relationships);
          _this16.http = http;
          return _this16;
        }

        return CurrenciesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      CurrenciesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      CurrenciesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], CurrenciesModel);
      /***/
    },

    /***/
    "./src/app/models/ingredients.model.ts":
    /*!*********************************************!*\
      !*** ./src/app/models/ingredients.model.ts ***!
      \*********************************************/

    /*! exports provided: IngredientsModel */

    /***/
    function srcAppModelsIngredientsModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IngredientsModel", function () {
        return IngredientsModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/many-to-many */
      "./src/app/models/utils/many-to-many.ts");

      var model = "ingredients";
      var relationships = {
        categories: Object(_utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__["manyToMany"])("recipes", "categories")
      };

      var IngredientsModel = /*#__PURE__*/function (_services_data_servic6) {
        _inherits(IngredientsModel, _services_data_servic6);

        var _super6 = _createSuper(IngredientsModel);

        function IngredientsModel(http) {
          var _this17;

          _classCallCheck(this, IngredientsModel);

          _this17 = _super6.call(this, http, model, relationships);
          _this17.http = http;
          return _this17;
        }

        return IngredientsModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      IngredientsModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      IngredientsModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], IngredientsModel);
      /***/
    },

    /***/
    "./src/app/models/prices.model.ts":
    /*!****************************************!*\
      !*** ./src/app/models/prices.model.ts ***!
      \****************************************/

    /*! exports provided: PricesModel */

    /***/
    function srcAppModelsPricesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricesModel", function () {
        return PricesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _utils_has_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/has-one */
      "./src/app/models/utils/has-one.ts");

      var model = "prices";
      var relationships = {
        currency: Object(_utils_has_one__WEBPACK_IMPORTED_MODULE_4__["hasOne"])("currencies", "currencyId"),
        store: Object(_utils_has_one__WEBPACK_IMPORTED_MODULE_4__["hasOne"])("stores", "storeId"),
        ingredient: Object(_utils_has_one__WEBPACK_IMPORTED_MODULE_4__["hasOne"])("ingredients", "ingredientId")
      };

      var PricesModel = /*#__PURE__*/function (_services_data_servic7) {
        _inherits(PricesModel, _services_data_servic7);

        var _super7 = _createSuper(PricesModel);

        function PricesModel(http) {
          var _this18;

          _classCallCheck(this, PricesModel);

          _this18 = _super7.call(this, http, model, relationships);
          _this18.http = http;
          return _this18;
        }

        return PricesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      PricesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      PricesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], PricesModel);
      /***/
    },

    /***/
    "./src/app/models/recipes.model.ts":
    /*!*****************************************!*\
      !*** ./src/app/models/recipes.model.ts ***!
      \*****************************************/

    /*! exports provided: RecipesModel */

    /***/
    function srcAppModelsRecipesModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesModel", function () {
        return RecipesModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/many-to-many */
      "./src/app/models/utils/many-to-many.ts");

      var model = "recipes";
      var relationships = {
        ingredients: Object(_utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__["manyToMany"])("recipes", "ingredients"),
        categories: Object(_utils_many_to_many__WEBPACK_IMPORTED_MODULE_4__["manyToMany"])("recipes", "categories")
      };

      var RecipesModel = /*#__PURE__*/function (_services_data_servic8) {
        _inherits(RecipesModel, _services_data_servic8);

        var _super8 = _createSuper(RecipesModel);

        function RecipesModel(http) {
          var _this19;

          _classCallCheck(this, RecipesModel);

          _this19 = _super8.call(this, http, model, relationships);
          _this19.http = http;
          return _this19;
        }

        return RecipesModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      RecipesModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      RecipesModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], RecipesModel);
      /***/
    },

    /***/
    "./src/app/models/regimens.model.ts":
    /*!******************************************!*\
      !*** ./src/app/models/regimens.model.ts ***!
      \******************************************/

    /*! exports provided: RegimensModel */

    /***/
    function srcAppModelsRegimensModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegimensModel", function () {
        return RegimensModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "regimens";
      var relationships = {};

      var RegimensModel = /*#__PURE__*/function (_services_data_servic9) {
        _inherits(RegimensModel, _services_data_servic9);

        var _super9 = _createSuper(RegimensModel);

        function RegimensModel(http) {
          var _this20;

          _classCallCheck(this, RegimensModel);

          _this20 = _super9.call(this, http, model, relationships);
          _this20.http = http;
          return _this20;
        }

        return RegimensModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      RegimensModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      RegimensModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], RegimensModel);
      /***/
    },

    /***/
    "./src/app/models/stores.model.ts":
    /*!****************************************!*\
      !*** ./src/app/models/stores.model.ts ***!
      \****************************************/

    /*! exports provided: StoresModel */

    /***/
    function srcAppModelsStoresModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoresModel", function () {
        return StoresModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "stores";
      var relationships = {};

      var StoresModel = /*#__PURE__*/function (_services_data_servic10) {
        _inherits(StoresModel, _services_data_servic10);

        var _super10 = _createSuper(StoresModel);

        function StoresModel(http) {
          var _this21;

          _classCallCheck(this, StoresModel);

          _this21 = _super10.call(this, http, model, relationships);
          _this21.http = http;
          return _this21;
        }

        return StoresModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      StoresModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      StoresModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], StoresModel);
      /***/
    },

    /***/
    "./src/app/models/users.model.ts":
    /*!***************************************!*\
      !*** ./src/app/models/users.model.ts ***!
      \***************************************/

    /*! exports provided: UsersModel */

    /***/
    function srcAppModelsUsersModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModel", function () {
        return UsersModel;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var model = "users";
      var relationships = {};

      var UsersModel = /*#__PURE__*/function (_services_data_servic11) {
        _inherits(UsersModel, _services_data_servic11);

        var _super11 = _createSuper(UsersModel);

        function UsersModel(http) {
          var _this22;

          _classCallCheck(this, UsersModel);

          _this22 = _super11.call(this, http, model, relationships);
          _this22.http = http;
          return _this22;
        }

        return UsersModel;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      UsersModel.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      UsersModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], UsersModel);
      /***/
    },

    /***/
    "./src/app/models/utils/has-one.ts":
    /*!*****************************************!*\
      !*** ./src/app/models/utils/has-one.ts ***!
      \*****************************************/

    /*! exports provided: hasOne */

    /***/
    function srcAppModelsUtilsHasOneTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasOne", function () {
        return hasOne;
      });

      var hasOne = function hasOne() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
        return {
          type: "hasOne",
          url: function url(data) {
            var id = data[key];
            return "".concat(first, "/").concat(id);
          },
          key: key
        };
      };
      /***/

    },

    /***/
    "./src/app/models/utils/many-to-many.ts":
    /*!**********************************************!*\
      !*** ./src/app/models/utils/many-to-many.ts ***!
      \**********************************************/

    /*! exports provided: manyToMany */

    /***/
    function srcAppModelsUtilsManyToManyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "manyToMany", function () {
        return manyToMany;
      });

      var manyToMany = function manyToMany() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";
        return {
          type: "manyToMany",
          url: function url() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var id = data[key];
            return "".concat(first, "/").concat(id, "/").concat(second);
          },
          key: key
        };
      };
      /***/

    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var URL = "https://pihhs-recipe-calculator-databa.herokuapp.com/";

      var AuthService = /*#__PURE__*/function (_services_data_servic12) {
        _inherits(AuthService, _services_data_servic12);

        var _super12 = _createSuper(AuthService);

        function AuthService(http) {
          var _this23;

          _classCallCheck(this, AuthService);

          _this23 = _super12.call(this, http);
          _this23.http = http;
          return _this23;
        }

        _createClass(AuthService, [{
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var data, result;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      data = {
                        email: "pihh.rocks@gmail.com",
                        password: "pihhrek85"
                      };
                      _context5.next = 3;
                      return this.http.post(URL + "login", data).toPromise();

                    case 3:
                      result = _context5.sent;

                      this._setToken(result.token);

                      return _context5.abrupt("return", result);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return AuthService;
      }(_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/data.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var OPTIONS = function OPTIONS() {
        var headers = {
          "Content-Type": "application/json"
        };

        if (TOKEN) {
          headers["Authorization"] = "Bearer ".concat(TOKEN);
        }

        var httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers)
        };
        return httpOptions;
      };

      var URL = "https://pihhs-recipe-calculator-databa.herokuapp.com/";
      var URL_V2 = "https://fulgurant-spins.000webhostapp.com/wp-json/wp/v2/";

      var queryBuilderV2 = function queryBuilderV2() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = URL_V2;
        var endpoint = config.endpoint;
        var id = config.id;
        var relationships = config.relationships;
        delete config.endpoint;
        delete config.id;
        delete config.relationships;
        if (!endpoint) throw "Need a rest api endpoint";
        url += endpoint;

        if (id) {
          url += '/' + id;
        } else {
          url += "?";

          for (var _i4 = 0, _Object$keys = Object.keys(config); _i4 < _Object$keys.length; _i4++) {
            var key = _Object$keys[_i4];
            url += key + "=" + config[key] + "&";
          }
        }

        return url;
      };

      var queryBuilder = function queryBuilder() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = URL;

        if (config.forceUrl) {
          return url + config.forceUrl;
        }

        url += config.model;

        if (config.id) {
          url += "/".concat(config.id);
          delete config.id;
        }

        delete config.model;
        var keys = Object.keys(config);
        if (keys.length > 0) url += "?filter={";
        if (config.limit) url += "\"limit\":".concat(config.limit, ",");
        if (config.skip) url += "\"skip\":".concat(config.skip, ",");
        if (config.order) url += "\"order\":\"".concat(config.order, "\",");
        if (config.search) url += "\"where\":{\"name\":{\"regexp\":\"/".concat(config.search, "/i\"}}");
        url = url.replace(/,\s*$/, "");
        if (keys.length > 0) url += "}";

        if (url.charAt(url.length - 1) == "&") {
          url = url.substr(0, url.length - 1);
        }

        return url;
      };

      var TOKEN = "";

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var relationships = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          _classCallCheck(this, DataService);

          this.http = http;
          this.relationships = [];
          this.model = "";
          this.model = model;
          this.relationships = relationships;
        }

        _createClass(DataService, [{
          key: "_setToken",
          value: function _setToken() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            TOKEN = token;
          }
        }, {
          key: "_getToken",
          value: function _getToken() {
            return TOKEN;
          }
        }, {
          key: "_handleException",
          value: function _handleException() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var ex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            console.log("EX", {
              config: config,
              ex: ex
            });

            if (!config.skipError) {// alert("Http Request failed");
            }

            return Promise.reject(ex.error.error);
          }
        }, {
          key: "_parseConfig",
          value: function _parseConfig() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (id) config.id = id;
            config.model = this.model;
            return config;
          }
        }, {
          key: "_addImages",
          value: function _addImages() {
            var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (Array.isArray(result)) {
                        result.forEach(function (r) {
                          if (r.thumbnail) r.thumbnail = URL + r.thumbnail;
                          if (r.avatar) r.avatar = URL + r.avatar;
                        });
                      } else {
                        if (result.thumbnail) result.thumbnail = URL + result.thumbnail;
                        if (result.avatar) result.avatar = URL + result.avatar;
                      }

                      return _context7.abrupt("return", result);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "_addRelations",
          value: function _addRelations() {
            var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _iterator, _step, r, _iterator2, _step2, relation, _iterator3, _step3, _relation;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (Array.isArray(config.include)) {
                        // Checks for relationship and updates the
                        if (Array.isArray(result)) {
                          _iterator = _createForOfIteratorHelper(result);

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              r = _step.value;
                              _iterator2 = _createForOfIteratorHelper(config.include);

                              try {
                                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                  relation = _step2.value;

                                  if (this.relationships && this.relationships[relation]) {
                                    if (this.relationships[relation].type === "manyToMany") {
                                      this._addManyToManyRelation(r, relation);
                                    }

                                    if (this.relationships[relation].type === "hasOne") {
                                      this._addHasOneRelationship(r, relation);
                                    }
                                  }
                                }
                              } catch (err) {
                                _iterator2.e(err);
                              } finally {
                                _iterator2.f();
                              }
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                        } else {
                          _iterator3 = _createForOfIteratorHelper(config.include);

                          try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                              _relation = _step3.value;

                              if (this.relationships && this.relationships[_relation]) {
                                if (this.relationships[_relation].type === "manyToMany") {
                                  this._addManyToManyRelation(result, _relation);
                                }
                              }

                              if (this.relationships[_relation].type === "hasOne") {
                                this._addHasOneRelationship(result, _relation);
                              }
                            }
                          } catch (err) {
                            _iterator3.e(err);
                          } finally {
                            _iterator3.f();
                          }
                        }
                      }

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "_addManyToManyRelation",
          value: function _addManyToManyRelation(result, relation) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      result[relation] = [];
                      result[relation] = this.get({
                        forceUrl: this.relationships[relation].url(result)
                      }).then(function (rels) {
                        result[relation] = rels;
                      });

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "_addHasOneRelationship",
          value: function _addHasOneRelationship(result, relation) {
            // result[relation] = await this.get({
            //   forceUrl: this.relationships[relation].url(result)
            // });
            result[relation] = {};
            this.get({
              forceUrl: this.relationships[relation].url(result)
            }).then(function (rel) {
              result[relation] = rel;
            });
          }
        }, {
          key: "find",
          value: function find() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      config = this._parseConfig(config, id);
                      _context10.next = 4;
                      return this.http.get(queryBuilder(config), OPTIONS()).toPromise();

                    case 4:
                      result = _context10.sent;

                      this._addRelations(result, config);

                      this._addImages(result);

                      return _context10.abrupt("return", result);

                    case 10:
                      _context10.prev = 10;
                      _context10.t0 = _context10["catch"](0);
                      return _context10.abrupt("return", this._handleException(config, _context10.t0));

                    case 13:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 10]]);
            }));
          }
        }, {
          key: "get",
          value: function get() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var result;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      if (!config.order) config.order = "id DESC";
                      config = this._parseConfig(config);
                      _context11.next = 5;
                      return this.http.get(queryBuilder(config), OPTIONS()).toPromise();

                    case 5:
                      result = _context11.sent;

                      this._addRelations(result, config);

                      this._addImages(result);

                      return _context11.abrupt("return", result);

                    case 11:
                      _context11.prev = 11;
                      _context11.t0 = _context11["catch"](0);
                      return _context11.abrupt("return", this._handleException(config, _context11.t0));

                    case 14:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 11]]);
            }));
          }
        }, {
          key: "create",
          value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var result;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      config = this._parseConfig(config);
                      _context12.next = 4;
                      return this.http.post(queryBuilder(config), data, OPTIONS()).toPromise();

                    case 4:
                      result = _context12.sent;
                      return _context12.abrupt("return", result);

                    case 8:
                      _context12.prev = 8;
                      _context12.t0 = _context12["catch"](0);
                      return _context12.abrupt("return", this._handleException(config, _context12.t0));

                    case 11:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 8]]);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            console.log("patch", id, data, config, this);
          }
        }, {
          key: "delete",
          value: function _delete() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      config = this._parseConfig(config, id);
                      _context13.next = 4;
                      return this.http["delete"](queryBuilder(config), OPTIONS()).toPromise();

                    case 4:
                      result = _context13.sent;
                      return _context13.abrupt("return", result);

                    case 8:
                      _context13.prev = 8;
                      _context13.t0 = _context13["catch"](0);
                      return _context13.abrupt("return", this._handleException(config, _context13.t0));

                    case 11:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 8]]);
            }));
          }
        }, {
          key: "v2GetRecipes",
          value: function v2GetRecipes() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var result;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      config.endpoint = "wprm_recipe";
                      _context14.next = 3;
                      return this.http.get(queryBuilderV2(config)).toPromise();

                    case 3:
                      result = _context14.sent;
                      return _context14.abrupt("return", result);

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return DataService;
      }();
      /***/

    },

    /***/
    "./src/app/services/events.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /**
       * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
       *
       * @author Shashank Agrawal
       */


      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.channels = {};
        }
        /**
         * Subscribe to a topic and provide a single handler/observer.
         * @param topic The name of the topic to subscribe to.
         * @param observer The observer or callback function to listen when changes are published.
         *
         * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
         */


        _createClass(EventsService, [{
          key: "subscribe",
          value: function subscribe(topic, observer) {
            if (!this.channels[topic]) {
              // You can also use ReplaySubject with one concequence
              this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            }

            return this.channels[topic].subscribe(observer);
          }
          /**
           * Publish some data to the subscribers of the given topic.
           * @param topic The name of the topic to emit data to.
           * @param data data in any format to pass on.
           */

        }, {
          key: "publish",
          value: function publish(topic, data) {
            var subject = this.channels[topic];

            if (!subject) {
              // Or you can create a new subject for future subscribers
              return;
            }

            subject.next(data);
          }
          /**
           * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
           * destroy the observable of the topic using this method.
           * @param topic The name of the topic to destroy.
           */

        }, {
          key: "destroy",
          value: function destroy(topic) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.complete();
            delete this.channels[topic];
          }
        }]);

        return EventsService;
      }();

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    },

    /***/
    "./src/app/services/page-transition.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/page-transition.service.ts ***!
      \*****************************************************/

    /*! exports provided: PageTransitionService */

    /***/
    function srcAppServicesPageTransitionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTransitionService", function () {
        return PageTransitionService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var PageTransitionService = /*#__PURE__*/function () {
        function PageTransitionService() {
          _classCallCheck(this, PageTransitionService);

          this.broadcast = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(PageTransitionService, [{
          key: "emit",
          value: function emit(element) {
            if (!element) return;
            this.broadcast.next(element);
          }
        }, {
          key: "getBroadcastObservable",
          value: function getBroadcastObservable() {
            return this.broadcast.asObservable();
          }
        }, {
          key: "_generateDomBroadcast",
          value: function _generateDomBroadcast(container, activeImage) {
            var containerTop = container.getBoundingClientRect().top;
            var containerLeft = container.getBoundingClientRect().left;
            var containerHeight = container.getBoundingClientRect().height;
            var containerWidth = container.getBoundingClientRect().width;
            var containerSrc = '/assets/images/recipe-background.png';
            var containerBorderRadius = '1em';
            var activeImageSrc = activeImage.src;
            var activeImageTop = activeImage.getBoundingClientRect().top;
            var activeImageLeft = activeImage.getBoundingClientRect().left;
            var activeImageHeight = activeImage.getBoundingClientRect().height;
            var activeImageWidth = activeImage.getBoundingClientRect().width;
            var activeImageBorderRadius = '100%';
            return {
              background: {
                container: container,
                src: containerSrc,
                top: containerTop,
                left: containerLeft,
                height: containerHeight,
                width: containerWidth,
                borderRadius: containerBorderRadius
              },
              image: {
                container: activeImage,
                src: activeImageSrc,
                top: activeImageTop,
                left: activeImageLeft,
                height: activeImageHeight,
                width: activeImageWidth,
                borderRadius: activeImageBorderRadius
              }
            };
          }
        }, {
          key: "_getDomInformationFromEvent",
          value: function _getDomInformationFromEvent(event) {
            var container = event.srcElement;
            var activeImage = container.querySelector(container.getAttribute('data-thumbnail-container'));
            activeImage.src = container.getAttribute('data-thumbnail');
            return this._generateDomBroadcast(container, activeImage);
          }
        }, {
          key: "_getDomInformationFromRecipe",
          value: function _getDomInformationFromRecipe(dom) {
            var container = dom.container;
            var activeImage = dom.activeImage;
            return this._generateDomBroadcast(container, activeImage);
          }
        }, {
          key: "getDomInformation",
          value: function getDomInformation(dom, event) {
            if (event) {
              return this._getDomInformationFromEvent(event);
            } else {
              return this._getDomInformationFromRecipe(dom);
            }
          }
        }]);

        return PageTransitionService;
      }();

      PageTransitionService.ctorParameters = function () {
        return [];
      };

      PageTransitionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PageTransitionService);
      /***/
    },

    /***/
    "./src/app/services/storage.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events.service */
      "./src/app/services/events.service.ts");

      var StorageService = /*#__PURE__*/function () {
        /**
         *
         * @param storage
         * @param table
         */
        function StorageService(storage, events) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.events = events; // storage table ( or key as you prefer to name it, I personally look at it like a database )

          this.table = "";
        }
        /**
         * Broadcast storage state change
         * @param update
         * @param data
         */


        _createClass(StorageService, [{
          key: "_broadcast",
          value: function _broadcast() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var data = arguments.length > 1 ? arguments[1] : undefined;
            update = update ? update : "";
            this.events.publish("storage:".concat(this.table));
            this.events.publish("storage:".concat(this.table, ":").concat(update), data);
          }
          /**
           * Function that handles when we want to update one item of the whole items array
           * @param item
           * @param onMatch
           */

        }, {
          key: "_updateSingleItemState",
          value: function _updateSingleItemState(item, onMatch) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var key, items, _items, _iterator4, _step4, i;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      onMatch = onMatch ? onMatch : "update";
                      key = this.table;
                      _context15.next = 4;
                      return this.storage.get(key);

                    case 4:
                      items = _context15.sent;

                      if (!(!items || items.length === 0)) {
                        _context15.next = 7;
                        break;
                      }

                      return _context15.abrupt("return", null);

                    case 7:
                      _items = [];
                      _iterator4 = _createForOfIteratorHelper(items);
                      _context15.prev = 9;

                      _iterator4.s();

                    case 11:
                      if ((_step4 = _iterator4.n()).done) {
                        _context15.next = 22;
                        break;
                      }

                      i = _step4.value;

                      if (!(i.id === item.id)) {
                        _context15.next = 19;
                        break;
                      }

                      if (onMatch === "update") {
                        _items.push(item);
                      }

                      if (!(onMatch === "delete")) {
                        _context15.next = 17;
                        break;
                      }

                      return _context15.abrupt("continue", 20);

                    case 17:
                      _context15.next = 20;
                      break;

                    case 19:
                      _items.push(i);

                    case 20:
                      _context15.next = 11;
                      break;

                    case 22:
                      _context15.next = 27;
                      break;

                    case 24:
                      _context15.prev = 24;
                      _context15.t0 = _context15["catch"](9);

                      _iterator4.e(_context15.t0);

                    case 27:
                      _context15.prev = 27;

                      _iterator4.f();

                      return _context15.finish(27);

                    case 30:
                      return _context15.abrupt("return", this.storage.set(key, _items));

                    case 31:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[9, 24, 27, 30]]);
            }));
          }
          /**
           * List all events on this storage
           */

        }, {
          key: "listEvents",
          value: function listEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this24 = this;

              var events, actions;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      events = ["storage:".concat(this.table)];
                      actions = ['create', 'update', 'delete'];
                      actions.forEach(function (action) {
                        events.push("storage:".concat(_this24.table, ":").concat(action));
                      });
                      return _context16.abrupt("return", events);

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
          /**
           * Pushes a item to this storage
           * @param item
           * @async
           */

        }, {
          key: "create",
          value: function create(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var result, key, items;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      key = this.table;
                      _context17.next = 3;
                      return this.storage.get(key);

                    case 3:
                      items = _context17.sent;

                      if (!items) {
                        _context17.next = 11;
                        break;
                      }

                      items.push(item);
                      _context17.next = 8;
                      return this.storage.set(key, items);

                    case 8:
                      result = _context17.sent;
                      _context17.next = 14;
                      break;

                    case 11:
                      _context17.next = 13;
                      return this.storage.set(key, [item]);

                    case 13:
                      result = _context17.sent;

                    case 14:
                      this._broadcast('create', result);

                      return _context17.abrupt("return", result);

                    case 16:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
          /**
           * Gets all items from a table
           */

        }, {
          key: "read",
          value: function read() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.storage.get(this.table);

                    case 2:
                      _context18.t0 = _context18.sent;

                      if (_context18.t0) {
                        _context18.next = 5;
                        break;
                      }

                      _context18.t0 = [];

                    case 5:
                      return _context18.abrupt("return", _context18.t0);

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
          /**
           * Updates a item
           * @param item
           */

        }, {
          key: "update",
          value: function update(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var result;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this._updateSingleItemState(item, 'update');

                    case 2:
                      result = _context19.sent;

                      this._broadcast('update', item);

                      return _context19.abrupt("return", result);

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
          /**
           * Remove item
           * @param id
           */

        }, {
          key: "destroy",
          value: function destroy(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var item, result;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      item = {
                        id: id
                      };
                      result = this._updateSingleItemState(item, 'delete');

                      this._broadcast('delete', item);

                      return _context20.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * A storage service that will be extended to store several data instances on the browser
       * @version: 1.0.0
       */
      ], StorageService);
      /***/
    },

    /***/
    "./src/app/storage/favorites.storage.ts":
    /*!**********************************************!*\
      !*** ./src/app/storage/favorites.storage.ts ***!
      \**********************************************/

    /*! exports provided: FavoritesStorage */

    /***/
    function srcAppStorageFavoritesStorageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesStorage", function () {
        return FavoritesStorage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/storage.service */
      "./src/app/services/storage.service.ts");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var KEY = "b21522fa2fe28bb48d2d89c739d290fb";

      var FavoritesStorage = /*#__PURE__*/function (_services_storage_ser) {
        _inherits(FavoritesStorage, _services_storage_ser);

        var _super13 = _createSuper(FavoritesStorage);

        function FavoritesStorage(storage, event) {
          var _this25;

          _classCallCheck(this, FavoritesStorage);

          _this25 = _super13.call(this, storage, event);
          _this25.storage = storage;
          _this25.event = event;
          _this25.table = KEY;
          return _this25;
        }

        return FavoritesStorage;
      }(_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]);

      FavoritesStorage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }];
      };

      FavoritesStorage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], FavoritesStorage);
      /***/
    },

    /***/
    "./src/app/utils/fixed-viewport-measures.ts":
    /*!**************************************************!*\
      !*** ./src/app/utils/fixed-viewport-measures.ts ***!
      \**************************************************/

    /*! exports provided: fixedViewportMeasures */

    /***/
    function srcAppUtilsFixedViewportMeasuresTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fixedViewportMeasures", function () {
        return fixedViewportMeasures;
      });

      var fixedViewportMeasures = function fixedViewportMeasures() {
        /*
        setTimeout(function () {
            let viewheight = window.innerHeight;
            let viewwidth = window.innerWidth;
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
        }, 300);
        */
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
      };
      /***/

    },

    /***/
    "./src/app/utils/pseudo-styles.ts":
    /*!****************************************!*\
      !*** ./src/app/utils/pseudo-styles.ts ***!
      \****************************************/

    /*! exports provided: boot */

    /***/
    function srcAppUtilsPseudoStylesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "boot", function () {
        return boot;
      });

      var isBoot = false;
      var UID = {
        _current: 0,
        getNew: function getNew() {
          this._current++;
          return this._current;
        }
      };

      function boot() {
        if (isBoot) return;
        isBoot = true; // @ts-ignore

        HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
          var _this = this;

          var _sheetId = "pseudoStyles";

          var _head = document.head || document.getElementsByTagName('head')[0];

          var _sheet = document.getElementById(_sheetId) || document.createElement('style');

          _sheet.id = _sheetId;
          var className = "pseudoStyle" + UID.getNew();
          _this.className += " " + className;
          _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";

          _head.appendChild(_sheet);

          return this;
        };
      }
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/Pi/Desktop/dev/recipe-calculator/app/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map