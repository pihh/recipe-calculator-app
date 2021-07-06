(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/animations/header-slide.animation.ts":
/*!******************************************************!*\
  !*** ./src/app/animations/header-slide.animation.ts ***!
  \******************************************************/
/*! exports provided: headerSlideUpAnimation, headerSlideDownAnimation, headerSlideOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerSlideUpAnimation", function() { return headerSlideUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerSlideDownAnimation", function() { return headerSlideDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerSlideOutAnimation", function() { return headerSlideOutAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");


let IS_SLIDING_OUT = false;
let IS_SLIDING = false;
const DURATION = 400;
const SLIDE = function (baseElement, from, to) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        if (IS_SLIDING)
            return;
        IS_SLIDING = true;
        const animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
        const slide = animationController.create()
            .addElement(baseElement)
            .duration(DURATION)
            .iterations(1)
            .easing('ease-in')
            .fromTo('marginTop', from, to);
        yield slide.play();
        IS_SLIDING = false;
    });
};
const OUT = function (baseElement) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        if (IS_SLIDING_OUT)
            return;
        IS_SLIDING_OUT = true;
        const animationController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AnimationController"]();
        const slide = animationController.create()
            .addElement(baseElement)
            .duration(150)
            .iterations(1)
            .easing('ease-in')
            .fromTo('left', '0px', '100vw');
        yield slide.play();
        IS_SLIDING_OUT = false;
    });
};
const MARGIN_TOP = function (baseElement) {
    return `-${baseElement.clientHeight}px`;
};
const headerSlideUpAnimation = function (baseElement) {
    SLIDE(baseElement, '0px', MARGIN_TOP(baseElement));
};
const headerSlideDownAnimation = function (baseElement) {
    SLIDE(baseElement, MARGIN_TOP(baseElement), '0px');
};
const headerSlideOutAnimation = function (baseElement) {
    OUT(baseElement);
};


/***/ }),

/***/ "./src/app/services/data-v2.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/data-v2.service.ts ***!
  \*********************************************/
/*! exports provided: DataV2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataV2Service", function() { return DataV2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data */ "./src/app/utils/data.ts");




const URL_V2_BASE = "https://fulgurant-spins.000webhostapp.com/";
const URL_V2_REST = URL_V2_BASE + "wp-json/wp/v2/";
const URL_V2_FAT_SECRET = URL_V2_BASE + "wp-json/prc/v1/nutrition_data/";
const URL_V2_TERM_IMAGE = URL_V2_BASE + "wp-json/prc/v1/term_image/";
const queryBuilderV2 = function (config = {}) {
    config = Object.assign({ per_page: 10, page: 1 }, config);
    let url = URL_V2_REST;
    const endpoint = config.endpoint;
    const id = config.id;
    const relationships = config.relationships;
    config.per_page = config.limit || 10;
    config.page = (config.skip) ? parseInt(config.skip) : 1;
    delete config.endpoint;
    delete config.id;
    delete config.relationships;
    delete config.limit;
    delete config.skip;
    if (!endpoint)
        throw "Need a rest api endpoint";
    url += endpoint;
    if (id) {
        url += '/' + id;
    }
    else {
        url += "?";
        for (let key of Object.keys(config)) {
            url += key + "=" + config[key] + "&";
        }
    }
    return url;
};
let DataV2Service = class DataV2Service {
    constructor(http) {
        this.http = http;
    }
    getCategories(config = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cuisines;
            let courses;
            config.limit = 100;
            config.endpoint = "wprm_cuisine";
            cuisines = yield this.http
                .get(queryBuilderV2(config))
                .toPromise();
            config.endpoint = "wprm_course";
            courses = yield this.http
                .get(queryBuilderV2(config))
                .toPromise();
            let categories = [].concat(_utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseCategoryCuisines(cuisines)).concat(_utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseCategoryCourses(courses));
            return yield Promise.all(categories.map((el) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let thumbnail = yield this.http.get(URL_V2_TERM_IMAGE + el.id).toPromise();
                if (thumbnail) {
                    el.thumbnail = URL_V2_BASE + thumbnail;
                }
                else {
                    el.thumbnail = "/assets/images/category-1.png";
                }
                return el;
            })));
        });
    }
    getRecipes(config = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            config.endpoint = "wprm_recipe";
            let results = yield this.http
                .get(queryBuilderV2(config))
                .toPromise();
            return (config.id) ? _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseRecipe(results) : results.map(el => _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseRecipe(el));
        });
    }
    getIngredients(config = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            config.endpoint = "wprm_ingredient";
            let results = yield this.http
                .get(queryBuilderV2(config))
                .toPromise();
            if (config.id) {
                results = yield this.getNutritionData(results);
                return _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(results);
            }
            else {
                for (let result of results) {
                    result = yield this.getNutritionData(result);
                }
                return results.map(el => _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(el));
            }
            return (config.id) ? _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(results) : results.map(el => _utils_data__WEBPACK_IMPORTED_MODULE_3__["v2"].parseIngredient(el));
        });
    }
    getNutritionData(ingredient = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nutritionData = yield this.http.get(URL_V2_FAT_SECRET + ingredient.id).toPromise();
            ingredient.nutritionData = nutritionData;
            return ingredient;
        });
    }
};
DataV2Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataV2Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataV2Service);



/***/ }),

/***/ "./src/app/utils/data.ts":
/*!*******************************!*\
  !*** ./src/app/utils/data.ts ***!
  \*******************************/
/*! exports provided: v1, v2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return v1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v2", function() { return v2; });
const parseCategories = function (data, category = "cuisines") {
    return data.map(el => {
        return {
            id: el.id,
            type: category,
            name: el.name
        };
    });
};
const extractIngredientNutritionaData = function (ingredient = {}) {
    return ingredient.nutritionData.food.servings.serving.filter(el => el.serving_description === "100 g")[0];
};
const parseRecipeSteps = function (steps = []) {
    return steps.map(el => {
        if (typeof el === "string") {
            return {
                image_url: "",
                name: "",
                text: `<p>${el}</p>`,
                type: "instruction"
            };
        }
        else {
            return {
                image_url: el.image_url,
                name: el.name,
                text: el.text,
                type: el.type
            };
        }
    });
};
const v1 = {
    parseRecipeSteps
};
const v2 = {
    parseCategoryCuisines(cuisines = []) {
        return parseCategories(cuisines);
    },
    parseCategoryCourses(courses) {
        return parseCategories(courses, 'course');
    },
    parseRecipeCookingTime(cookingTime = {}) {
        const prep_time = parseInt(cookingTime.prep_time || 0);
        const cook_time = parseInt(cookingTime.cook_time || 0);
        const total_mins = prep_time + cook_time;
        return { hour: Math.floor(total_mins / 60), min: total_mins % 60 };
    },
    parseRecipeQuantities(result = {}) {
        const quantities = [];
        for (let ingredient of result.ingredients_flat) {
            quantities.push({ quantity: ingredient.amount, id: ingredient.id, unit: ingredient.unit });
        }
        return quantities;
    },
    parseRecipe(recipe = {}) {
        return {
            id: recipe.id,
            name: recipe.title.rendered,
            thumbnail: recipe.recipe.image_url,
            cookingTime: this.parseRecipeCookingTime(recipe.recipe),
            steps: this.parseRecipeSteps(recipe.recipe.instructions_flat),
            quantities: this.parseRecipeQuantities(recipe.recipe)
        };
    },
    parseIngredient(ingredient = {}) {
        const nutritionData = extractIngredientNutritionaData(ingredient);
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
            thumbnail: "https://pihhs-recipe-calculator-databa.herokuapp.com/files/15xp-egg-promo-superJumbo-v2.jpg",
        };
    },
    parseRecipeSteps
};


/***/ }),

/***/ "./src/app/utils/parallax-header.ts":
/*!******************************************!*\
  !*** ./src/app/utils/parallax-header.ts ***!
  \******************************************/
/*! exports provided: onBackButtonClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackButtonClick", function() { return onBackButtonClick; });
/* harmony import */ var _animations_header_slide_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/header-slide.animation */ "./src/app/animations/header-slide.animation.ts");

function onBackButtonClick() {
    const id = '__parallax-header-container__';
    const element = document.getElementById(id);
    Object(_animations_header_slide_animation__WEBPACK_IMPORTED_MODULE_0__["headerSlideOutAnimation"])(element);
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map