(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/animations/header-slide.animation.ts":
    /*!******************************************************!*\
      !*** ./src/app/animations/header-slide.animation.ts ***!
      \******************************************************/

    /*! exports provided: headerSlideUpAnimation, headerSlideDownAnimation, headerSlideOutAnimation */

    /***/
    function srcAppAnimationsHeaderSlideAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "headerSlideUpAnimation", function () {
        return headerSlideUpAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "headerSlideDownAnimation", function () {
        return headerSlideDownAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "headerSlideOutAnimation", function () {
        return headerSlideOutAnimation;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var IS_SLIDING_OUT = false;
      var IS_SLIDING = false;
      var DURATION = 400;

      var SLIDE = function SLIDE(baseElement, from, to) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var animationController, slide;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!IS_SLIDING) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  IS_SLIDING = true;
                  animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
                  slide = animationController.create().addElement(baseElement).duration(DURATION).iterations(1).easing('ease-in').fromTo('marginTop', from, to);
                  _context3.next = 7;
                  return slide.play();

                case 7:
                  IS_SLIDING = false;

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
      };

      var OUT = function OUT(baseElement) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var animationController, slide;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!IS_SLIDING_OUT) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return");

                case 2:
                  IS_SLIDING_OUT = true;
                  animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
                  slide = animationController.create().addElement(baseElement).duration(150).iterations(1).easing('ease-in').fromTo('left', '0px', '100vw');
                  _context4.next = 7;
                  return slide.play();

                case 7:
                  IS_SLIDING_OUT = false;

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
      };

      var MARGIN_TOP = function MARGIN_TOP(baseElement) {
        return "-".concat(baseElement.clientHeight, "px");
      };

      var headerSlideUpAnimation = function headerSlideUpAnimation(baseElement) {
        SLIDE(baseElement, '0px', MARGIN_TOP(baseElement));
      };

      var headerSlideDownAnimation = function headerSlideDownAnimation(baseElement) {
        SLIDE(baseElement, MARGIN_TOP(baseElement), '0px');
      };

      var headerSlideOutAnimation = function headerSlideOutAnimation(baseElement) {
        OUT(baseElement);
      };
      /***/

    },

    /***/
    "./src/app/services/data-v2.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/data-v2.service.ts ***!
      \*********************************************/

    /*! exports provided: DataV2Service */

    /***/
    function srcAppServicesDataV2ServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataV2Service", function () {
        return DataV2Service;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/data */
      "./src/app/utils/data.ts");

      var URL_V2_BASE = "https://fulgurant-spins.000webhostapp.com/";
      var URL_V2_REST = URL_V2_BASE + "wp-json/wp/v2/";
      var URL_V2_FAT_SECRET = URL_V2_BASE + "wp-json/prc/v1/nutrition_data/";
      var URL_V2_TERM_IMAGE = URL_V2_BASE + "wp-json/prc/v1/term_image/";

      var queryBuilderV2 = function queryBuilderV2() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        config = Object.assign({
          per_page: 10,
          page: 1
        }, config);
        var url = URL_V2_REST;
        var endpoint = config.endpoint;
        var id = config.id;
        var relationships = config.relationships;
        config.per_page = config.limit || 10;
        config.page = config.skip ? parseInt(config.skip) : 1;
        delete config.endpoint;
        delete config.id;
        delete config.relationships;
        delete config.limit;
        delete config.skip;
        if (!endpoint) throw "Need a rest api endpoint";
        url += endpoint;

        if (id) {
          url += '/' + id;
        } else {
          url += "?";

          for (var _i = 0, _Object$keys = Object.keys(config); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            url += key + "=" + config[key] + "&";
          }
        }

        return url;
      };

      var DataV2Service = /*#__PURE__*/function () {
        function DataV2Service(http) {
          _classCallCheck(this, DataV2Service);

          this.http = http;
        }

        _createClass(DataV2Service, [{
          key: "getCategories",
          value: function getCategories() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this = this;

              var cuisines, courses, categories;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      config.limit = 100;
                      config.endpoint = "wprm_cuisine";
                      _context6.next = 4;
                      return this.http.get(queryBuilderV2(config)).toPromise();

                    case 4:
                      cuisines = _context6.sent;
                      config.endpoint = "wprm_course";
                      _context6.next = 8;
                      return this.http.get(queryBuilderV2(config)).toPromise();

                    case 8:
                      courses = _context6.sent;
                      categories = [].concat(_utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseCategoryCuisines(cuisines)).concat(_utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseCategoryCourses(courses));
                      _context6.next = 12;
                      return Promise.all(categories.map(function (el) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var thumbnail;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.http.get(URL_V2_TERM_IMAGE + el.id).toPromise();

                                case 2:
                                  thumbnail = _context5.sent;

                                  if (thumbnail) {
                                    el.thumbnail = URL_V2_BASE + thumbnail;
                                  } else {
                                    el.thumbnail = "/assets/images/category-1.png";
                                  }

                                  return _context5.abrupt("return", el);

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }));

                    case 12:
                      return _context6.abrupt("return", _context6.sent);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getRecipes",
          value: function getRecipes() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var results;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      config.endpoint = "wprm_recipe";
                      _context7.next = 3;
                      return this.http.get(queryBuilderV2(config)).toPromise();

                    case 3:
                      results = _context7.sent;
                      return _context7.abrupt("return", config.id ? _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseRecipe(results) : results.map(function (el) {
                        return _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseRecipe(el);
                      }));

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getIngredients",
          value: function getIngredients() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var results, _iterator, _step, result;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      config.endpoint = "wprm_ingredient";
                      _context8.next = 3;
                      return this.http.get(queryBuilderV2(config)).toPromise();

                    case 3:
                      results = _context8.sent;

                      if (!config.id) {
                        _context8.next = 11;
                        break;
                      }

                      _context8.next = 7;
                      return this.getNutritionData(results);

                    case 7:
                      results = _context8.sent;
                      return _context8.abrupt("return", _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(results));

                    case 11:
                      _iterator = _createForOfIteratorHelper(results);
                      _context8.prev = 12;

                      _iterator.s();

                    case 14:
                      if ((_step = _iterator.n()).done) {
                        _context8.next = 21;
                        break;
                      }

                      result = _step.value;
                      _context8.next = 18;
                      return this.getNutritionData(result);

                    case 18:
                      result = _context8.sent;

                    case 19:
                      _context8.next = 14;
                      break;

                    case 21:
                      _context8.next = 26;
                      break;

                    case 23:
                      _context8.prev = 23;
                      _context8.t0 = _context8["catch"](12);

                      _iterator.e(_context8.t0);

                    case 26:
                      _context8.prev = 26;

                      _iterator.f();

                      return _context8.finish(26);

                    case 29:
                      return _context8.abrupt("return", results.map(function (el) {
                        return _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(el);
                      }));

                    case 30:
                      return _context8.abrupt("return", config.id ? _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(results) : results.map(function (el) {
                        return _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(el);
                      }));

                    case 31:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[12, 23, 26, 29]]);
            }));
          }
        }, {
          key: "getNutritionData",
          value: function getNutritionData() {
            var ingredient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var nutritionData;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.http.get(URL_V2_FAT_SECRET + ingredient.id).toPromise();

                    case 2:
                      nutritionData = _context9.sent;
                      ingredient.nutritionData = nutritionData;
                      return _context9.abrupt("return", ingredient);

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return DataV2Service;
      }();

      DataV2Service.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      DataV2Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataV2Service);
      /***/
    },

    /***/
    "./src/app/utils/data.ts":
    /*!*******************************!*\
      !*** ./src/app/utils/data.ts ***!
      \*******************************/

    /*! exports provided: v1, v2 */

    /***/
    function srcAppUtilsDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v1", function () {
        return v1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v2", function () {
        return v2;
      });

      var parseCategories = function parseCategories(data) {
        var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "cuisines";
        return data.map(function (el) {
          return {
            id: el.id,
            type: category,
            name: el.name
          };
        });
      };

      var extractIngredientNutritionaData = function extractIngredientNutritionaData() {
        var ingredient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ingredient.nutritionData.food.servings.serving.filter(function (el) {
          return el.serving_description === "100 g";
        })[0];
      };

      var parseRecipeSteps = function parseRecipeSteps() {
        var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return steps.map(function (el) {
          if (typeof el === "string") {
            return {
              image_url: "",
              name: "",
              text: "<p>".concat(el, "</p>"),
              type: "instruction"
            };
          } else {
            return {
              image_url: el.image_url,
              name: el.name,
              text: el.text,
              type: el.type
            };
          }
        });
      };

      var v1 = {
        parseRecipeSteps: parseRecipeSteps
      };
      var v2 = {
        parseCategoryCuisines: function parseCategoryCuisines() {
          var cuisines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return parseCategories(cuisines);
        },
        parseCategoryCourses: function parseCategoryCourses(courses) {
          return parseCategories(courses, 'course');
        },
        parseRecipeCookingTime: function parseRecipeCookingTime() {
          var cookingTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var prep_time = parseInt(cookingTime.prep_time || 0);
          var cook_time = parseInt(cookingTime.cook_time || 0);
          var total_mins = prep_time + cook_time;
          return {
            hour: Math.floor(total_mins / 60),
            min: total_mins % 60
          };
        },
        parseRecipeQuantities: function parseRecipeQuantities() {
          var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var quantities = [];

          var _iterator2 = _createForOfIteratorHelper(result.ingredients_flat),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var ingredient = _step2.value;
              quantities.push({
                quantity: ingredient.amount,
                id: ingredient.id,
                unit: ingredient.unit
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return quantities;
        },
        parseRecipe: function parseRecipe() {
          var recipe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            id: recipe.id,
            name: recipe.title.rendered,
            thumbnail: recipe.recipe.image_url,
            cookingTime: this.parseRecipeCookingTime(recipe.recipe),
            steps: this.parseRecipeSteps(recipe.recipe.instructions_flat),
            quantities: this.parseRecipeQuantities(recipe.recipe)
          };
        },
        parseIngredient: function parseIngredient() {
          var ingredient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var nutritionData = extractIngredientNutritionaData(ingredient);
          return {
            averagePrice: 0,
            calcCalories: true,
            carbs: nutritionData.carbohydrate,
            description: "",
            fats: nutritionData.fat,
            id: ingredient.id,
            kcals: nutritionData.calories,
            name: ingredient.name,
            proteins: nutritionData.protein,
            thumbnail: "https://pihhs-recipe-calculator-databa.herokuapp.com/files/15xp-egg-promo-superJumbo-v2.jpg"
          };
        },
        parseRecipeSteps: parseRecipeSteps
      };
      /***/
    },

    /***/
    "./src/app/utils/parallax-header.ts":
    /*!******************************************!*\
      !*** ./src/app/utils/parallax-header.ts ***!
      \******************************************/

    /*! exports provided: onBackButtonClick */

    /***/
    function srcAppUtilsParallaxHeaderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBackButtonClick", function () {
        return onBackButtonClick;
      });
      /* harmony import */


      var _animations_header_slide_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../animations/header-slide.animation */
      "./src/app/animations/header-slide.animation.ts");

      function onBackButtonClick() {
        var id = '__parallax-header-container__';
        var element = document.getElementById(id);
        Object(_animations_header_slide_animation__WEBPACK_IMPORTED_MODULE_0__["headerSlideOutAnimation"])(element);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map