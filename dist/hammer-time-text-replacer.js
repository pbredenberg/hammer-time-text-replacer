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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Replacer; });\nconst DEFAULT_REPLACEMENT_SELECTOR = '.replace-me', DEFAULT_REPLACEMENT_TEXT = 'Hammer time.';\nclass Replacer {\n    constructor(config = {}) {\n        this._config = {};\n        this._nodeRecords = [];\n        this._config = config;\n        this._initButtons();\n    }\n    /**\n     * Performs repacements.\n     */\n    replace() {\n        const selectors = this._config.replacementSelectors || [DEFAULT_REPLACEMENT_SELECTOR];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((el) => {\n            if (el.textContent) {\n                this._nodeRecords.push({\n                    id: this._nodeRecords.length,\n                    node: el.cloneNode(true),\n                });\n                el.textContent = this._config.replacementText || DEFAULT_REPLACEMENT_TEXT;\n            }\n        });\n    }\n    restore() {\n        const selectors = this._config.replacementSelectors || [DEFAULT_REPLACEMENT_SELECTOR];\n        document\n            .querySelectorAll(this._selectorsJoiner(selectors))\n            .forEach((el, key) => {\n            const nodeRecord = this._nodeRecords[key];\n            if (nodeRecord) {\n                el.textContent = nodeRecord.node.textContent;\n            }\n        });\n    }\n    _initButtons() {\n        const replaceButtonSelectors = this._config.replaceButtonSelectors || ['.replace-button'];\n        const restoreButtonSelectors = this._config.restoreButtonSelectors || ['.restore-button'];\n        document\n            .querySelectorAll(this._selectorsJoiner(replaceButtonSelectors))\n            .forEach((button) => {\n            button.addEventListener('click', () => {\n                this.replace();\n            });\n        });\n        document\n            .querySelectorAll(this._selectorsJoiner(restoreButtonSelectors))\n            .forEach((button) => {\n            button.addEventListener('click', () => {\n                this.restore();\n            });\n        });\n    }\n    _selectorsJoiner(selectors) {\n        return selectors.join(',');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW1tZXJUaW1lUmVwbGFjZXIvLi9zcmMvUmVwbGFjZXIudHM/NzYzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtBQUFBO0FBQUEsTUFBTSw0QkFBNEIsR0FBRyxhQUFhLEVBQzVDLHdCQUF3QixHQUFHLGNBQWMsQ0FBQztBQUVqQyxNQUFNLFFBQVE7SUFNMUIsWUFBbUIsU0FBMEIsRUFBRTtRQUp2QyxZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUU5QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU87UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixJQUFJLENBQUUsNEJBQTRCLENBQUUsQ0FBQztRQUV4RixRQUFRO2FBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ2IsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDcEIsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtvQkFDNUIsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUMxQixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsSUFBSSx3QkFBd0IsQ0FBQzthQUM1RTtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLE9BQU87UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixJQUFJLENBQUUsNEJBQTRCLENBQUUsQ0FBQztRQUV4RixRQUFRO2FBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTFDLElBQUksVUFBVSxFQUFFO2dCQUNiLEVBQUUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDL0M7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTyxZQUFZO1FBQ2pCLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsSUFBSSxDQUFFLGlCQUFpQixDQUFFLENBQUM7UUFFNUYsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixJQUFJLENBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUU1RixRQUFRO2FBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDL0QsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRU4sUUFBUTthQUNKLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQy9ELE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxTQUFtQjtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNIIiwiZmlsZSI6Ii4vc3JjL1JlcGxhY2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElSZXBsYWNlckNvbmZpZyB7XG4gICBidXR0b25TZWxlY3RvcnM/OiBzdHJpbmdbXTtcbiAgIHJlcGxhY2VtZW50U2VsZWN0b3JzPzogc3RyaW5nW107XG4gICByZXN0b3JlQnV0dG9uU2VsZWN0b3JzPzogc3RyaW5nW107XG4gICByZXBsYWNlQnV0dG9uU2VsZWN0b3JzPzogc3RyaW5nW107XG4gICByZXBsYWNlbWVudFRleHQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTm9kZVJlY29yZCB7XG4gICBpZDogbnVtYmVyO1xuICAgbm9kZTogTm9kZTtcbn1cblxuY29uc3QgREVGQVVMVF9SRVBMQUNFTUVOVF9TRUxFQ1RPUiA9ICcucmVwbGFjZS1tZScsXG4gICAgICBERUZBVUxUX1JFUExBQ0VNRU5UX1RFWFQgPSAnSGFtbWVyIHRpbWUuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZXIge1xuXG4gICBwcml2YXRlIF9jb25maWc6IElSZXBsYWNlckNvbmZpZyA9IHt9O1xuXG4gICBwcml2YXRlIF9ub2RlUmVjb3JkczogSU5vZGVSZWNvcmRbXSA9IFtdO1xuXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBJUmVwbGFjZXJDb25maWcgPSB7fSkge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFBlcmZvcm1zIHJlcGFjZW1lbnRzLlxuICAgICovXG4gICBwdWJsaWMgcmVwbGFjZSgpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuX2NvbmZpZy5yZXBsYWNlbWVudFNlbGVjdG9ycyB8fCBbIERFRkFVTFRfUkVQTEFDRU1FTlRfU0VMRUNUT1IgXTtcblxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yc0pvaW5lcihzZWxlY3RvcnMpKVxuICAgICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgIHRoaXMuX25vZGVSZWNvcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuX25vZGVSZWNvcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgIG5vZGU6IGVsLmNsb25lTm9kZSh0cnVlKSxcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0aGlzLl9jb25maWcucmVwbGFjZW1lbnRUZXh0IHx8IERFRkFVTFRfUkVQTEFDRU1FTlRfVEVYVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICBwdWJsaWMgcmVzdG9yZSgpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuX2NvbmZpZy5yZXBsYWNlbWVudFNlbGVjdG9ycyB8fCBbIERFRkFVTFRfUkVQTEFDRU1FTlRfU0VMRUNUT1IgXTtcblxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yc0pvaW5lcihzZWxlY3RvcnMpKVxuICAgICAgICAgLmZvckVhY2goKGVsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVSZWNvcmQgPSB0aGlzLl9ub2RlUmVjb3Jkc1trZXldO1xuXG4gICAgICAgICAgICBpZiAobm9kZVJlY29yZCkge1xuICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBub2RlUmVjb3JkLm5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBfaW5pdEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICBjb25zdCByZXBsYWNlQnV0dG9uU2VsZWN0b3JzID0gdGhpcy5fY29uZmlnLnJlcGxhY2VCdXR0b25TZWxlY3RvcnMgfHwgWyAnLnJlcGxhY2UtYnV0dG9uJyBdO1xuXG4gICAgICBjb25zdCByZXN0b3JlQnV0dG9uU2VsZWN0b3JzID0gdGhpcy5fY29uZmlnLnJlc3RvcmVCdXR0b25TZWxlY3RvcnMgfHwgWyAnLnJlc3RvcmUtYnV0dG9uJyBdO1xuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3JzSm9pbmVyKHJlcGxhY2VCdXR0b25TZWxlY3RvcnMpKVxuICAgICAgICAgLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3JzSm9pbmVyKHJlc3RvcmVCdXR0b25TZWxlY3RvcnMpKVxuICAgICAgICAgLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICBwcml2YXRlIF9zZWxlY3RvcnNKb2luZXIoc2VsZWN0b3JzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzLmpvaW4oJywnKTtcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Replacer.ts\n");

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