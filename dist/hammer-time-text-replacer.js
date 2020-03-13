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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Replacer; });\nclass Replacer {\n    constructor(config = {}) {\n        this._config = {};\n        this._config = config;\n        this._initButtons();\n        console.log('It\\'s hammer tiiiiime, baby!'); // eslint-disable-line\n    }\n    /**\n     * Performs repacements.\n     */\n    replace() {\n        const selectors = this._config.replacementSelectors || ['.replace-me'];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((el) => {\n            if (el.textContent) {\n                el.textContent = 'Hammer time.';\n            }\n        });\n    }\n    _initButtons() {\n        const selectors = this._config.buttonSelectors || ['.replace-button'];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((button) => {\n            button.addEventListener('click', () => {\n                this.replace();\n            });\n        });\n    }\n    _selectorsJoiner(selectors) {\n        return selectors.join(',');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW1tZXJUaW1lUmVwbGFjZXIvLi9zcmMvUmVwbGFjZXIudHM/NzYzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtBQUFBO0FBQWUsTUFBTSxRQUFRO0lBSTFCLFlBQW1CLFNBQTBCLEVBQUU7UUFGdkMsWUFBTyxHQUFvQixFQUFFLENBQUM7UUFHbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtJQUN0RSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBRXpFLFFBQVE7YUFDSixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2FBQ2xDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU8sWUFBWTtRQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsSUFBSSxDQUFFLGlCQUFpQixDQUFFLENBQUM7UUFFeEUsUUFBUTthQUNKLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRCxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsU0FBbUI7UUFDekMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSCIsImZpbGUiOiIuL3NyYy9SZXBsYWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJUmVwbGFjZXJDb25maWcge1xuICAgYnV0dG9uU2VsZWN0b3JzPzogc3RyaW5nW107XG4gICByZXBsYWNlbWVudFNlbGVjdG9ycz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlciB7XG5cbiAgIHByaXZhdGUgX2NvbmZpZzogSVJlcGxhY2VyQ29uZmlnID0ge307XG5cbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IElSZXBsYWNlckNvbmZpZyA9IHt9KSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgIHRoaXMuX2luaXRCdXR0b25zKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdJdFxcJ3MgaGFtbWVyIHRpaWlpaW1lLCBiYWJ5IScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICB9XG5cbiAgIC8qKlxuICAgICogUGVyZm9ybXMgcmVwYWNlbWVudHMuXG4gICAgKi9cbiAgIHB1YmxpYyByZXBsYWNlKCk6IHZvaWQge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5fY29uZmlnLnJlcGxhY2VtZW50U2VsZWN0b3JzIHx8IFsgJy5yZXBsYWNlLW1lJyBdO1xuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3JzSm9pbmVyKHNlbGVjdG9ycykpXG4gICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSAnSGFtbWVyIHRpbWUuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICBwcml2YXRlIF9pbml0QnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuX2NvbmZpZy5idXR0b25TZWxlY3RvcnMgfHwgWyAnLnJlcGxhY2UtYnV0dG9uJyBdO1xuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3JzSm9pbmVyKHNlbGVjdG9ycykpXG4gICAgICAgICAuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICB0aGlzLnJlcGxhY2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIHByaXZhdGUgX3NlbGVjdG9yc0pvaW5lcihzZWxlY3RvcnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcnMuam9pbignLCcpO1xuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Replacer.ts\n");

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