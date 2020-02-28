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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Replacer; });\nclass Replacer {\n    constructor(config = {}) {\n        this._config = {};\n        let button;\n        this._config = config;\n        button = document.querySelector(this._config.buttonSelector || '.replace-button');\n        if (button) {\n            button.addEventListener('click', () => {\n                this.replace();\n            });\n        }\n        console.log('It\\'s hammer time!'); // eslint-disable-line\n    }\n    replace() {\n        const selectors = this._config.replacementSelectors || ['.replace-me'];\n        document.querySelectorAll(selectors.join(',')).forEach((el) => {\n            if (el.textContent) {\n                el.textContent = 'Hammer time.';\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW1tZXJUaW1lUmVwbGFjZXIvLi9zcmMvUmVwbGFjZXIudHM/NzYzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtBQUFBO0FBQWUsTUFBTSxRQUFRO0lBSTFCLFlBQW1CLFNBQTBCLEVBQUU7UUFGdkMsWUFBTyxHQUFvQixFQUFFLENBQUM7UUFHbkMsSUFBSSxNQUFNLENBQUM7UUFFWCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV0QixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO1FBRWxGLElBQUksTUFBTSxFQUFFO1lBQ1QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0lBQzVELENBQUM7SUFFTSxPQUFPO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1FBRXpFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNuRCxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ0osSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNqQixFQUFFLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzthQUNsQztRQUNKLENBQUMsQ0FDSCxDQUFDO0lBQ0wsQ0FBQztDQUNIIiwiZmlsZSI6Ii4vc3JjL1JlcGxhY2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElSZXBsYWNlckNvbmZpZyB7XG4gICBidXR0b25TZWxlY3Rvcj86IHN0cmluZztcbiAgIHJlcGxhY2VtZW50U2VsZWN0b3JzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VyIHtcblxuICAgcHJpdmF0ZSBfY29uZmlnOiBJUmVwbGFjZXJDb25maWcgPSB7fTtcblxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogSVJlcGxhY2VyQ29uZmlnID0ge30pIHtcbiAgICAgIGxldCBidXR0b247XG5cbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IgfHwgJy5yZXBsYWNlLWJ1dHRvbicpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnSXRcXCdzIGhhbW1lciB0aW1lIScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICB9XG5cbiAgIHB1YmxpYyByZXBsYWNlKCk6IHZvaWQge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5fY29uZmlnLnJlcGxhY2VtZW50U2VsZWN0b3JzIHx8IFsgJy5yZXBsYWNlLW1lJyBdO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5qb2luKCcsJykpLmZvckVhY2goXG4gICAgICAgICAoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSAnSGFtbWVyIHRpbWUuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICk7XG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Replacer.ts\n");

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