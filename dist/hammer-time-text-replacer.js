(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hammerTimeReplacer"] = factory();
	else
		root["hammerTimeReplacer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Replacer.ts":
/*!*************************!*\
  !*** ./src/Replacer.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Replacer; });\nclass Replacer {\n    constructor(config = {}) {\n        this._config = {};\n        this._config = config;\n        this._initButtons();\n    }\n    /**\n     * Performs repacements.\n     */\n    replace() {\n        const selectors = this._config.replacementSelectors || ['.replace-me'];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((el) => {\n            if (el.textContent) {\n                el.textContent = 'Hammer time.';\n            }\n        });\n    }\n    _initButtons() {\n        const selectors = this._config.buttonSelectors || ['.replace-button'];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((button) => {\n            button.addEventListener('click', () => {\n                this.replace();\n            });\n        });\n    }\n    _selectorsJoiner(selectors) {\n        return selectors.join(',');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW1tZXJUaW1lUmVwbGFjZXIvLi9zcmMvUmVwbGFjZXIudHM/NzYzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtBQUFBO0FBQWUsTUFBTSxRQUFRO0lBSTFCLFlBQW1CLFNBQTBCLEVBQUU7UUFGdkMsWUFBTyxHQUFvQixFQUFFLENBQUM7UUFHbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU87UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7UUFFekUsUUFBUTthQUNKLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRCxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNiLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtnQkFDakIsRUFBRSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7YUFDbEM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTyxZQUFZO1FBQ2pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxJQUFJLENBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUV4RSxRQUFRO2FBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxTQUFtQjtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNIIiwiZmlsZSI6Ii4vc3JjL1JlcGxhY2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElSZXBsYWNlckNvbmZpZyB7XG4gICBidXR0b25TZWxlY3RvcnM/OiBzdHJpbmdbXTtcbiAgIHJlcGxhY2VtZW50U2VsZWN0b3JzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VyIHtcblxuICAgcHJpdmF0ZSBfY29uZmlnOiBJUmVwbGFjZXJDb25maWcgPSB7fTtcblxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogSVJlcGxhY2VyQ29uZmlnID0ge30pIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgdGhpcy5faW5pdEJ1dHRvbnMoKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBQZXJmb3JtcyByZXBhY2VtZW50cy5cbiAgICAqL1xuICAgcHVibGljIHJlcGxhY2UoKTogdm9pZCB7XG4gICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLl9jb25maWcucmVwbGFjZW1lbnRTZWxlY3RvcnMgfHwgWyAnLnJlcGxhY2UtbWUnIF07XG5cbiAgICAgIGRvY3VtZW50XG4gICAgICAgICAucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcnNKb2luZXIoc2VsZWN0b3JzKSlcbiAgICAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9ICdIYW1tZXIgdGltZS4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIHByaXZhdGUgX2luaXRCdXR0b25zKCk6IHZvaWQge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5fY29uZmlnLmJ1dHRvblNlbGVjdG9ycyB8fCBbICcucmVwbGFjZS1idXR0b24nIF07XG5cbiAgICAgIGRvY3VtZW50XG4gICAgICAgICAucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcnNKb2luZXIoc2VsZWN0b3JzKSlcbiAgICAgICAgIC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBfc2VsZWN0b3JzSm9pbmVyKHNlbGVjdG9yczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycy5qb2luKCcsJyk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Replacer.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Replacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Replacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replacer */ \"./src/Replacer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Replacer\", function() { return _Replacer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW1tZXJUaW1lUmVwbGFjZXIvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUloQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBsYWNlciBmcm9tICcuL1JlcGxhY2VyJztcblxuZXhwb3J0IHtcbiAgIFJlcGxhY2VyLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });
});