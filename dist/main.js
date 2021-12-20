/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/load */ \"./src/module/load.js\");\n/* harmony import */ var _module_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/catalog */ \"./src/module/catalog.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/search */ \"./src/module/search.js\");\n\r\n\r\n\r\n\r\n(0,_module_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_module_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_module_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/module/catalog.js":
/*!*******************************!*\
  !*** ./src/module/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/module/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector('.catalog-button > button')\r\n  const catalogModal = document.querySelector('.catalog')\r\n  const catalogModalItems = document.querySelectorAll('.catalog li')\r\n  let isOpen = false\r\n\r\n  btnCatalog.addEventListener('click', () => {\r\n    isOpen = !isOpen\r\n\r\n    if (isOpen) {\r\n      catalogModal.style.display = 'block'\r\n    } else {\r\n      catalogModal.style.display = ''\r\n    }\r\n  })\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      const text = item.textContent\r\n      ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.categoryFilters)(data, text))\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/catalog.js?");

/***/ }),

/***/ "./src/module/filters.js":
/*!*******************************!*\
  !*** ./src/module/filters.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilters\": () => (/* binding */ categoryFilters)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value)\r\n  })\r\n}\r\n\r\nconst categoryFilters = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category.includes(value)\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://ozon/./src/module/filters.js?");

/***/ }),

/***/ "./src/module/getData.js":
/*!*******************************!*\
  !*** ./src/module/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  return fetch(\r\n    `https://ozon-d7d2d-default-rtdb.firebaseio.com/goods.json?`\r\n  ).then((response) => {\r\n    return response.json()\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/getData.js?");

/***/ }),

/***/ "./src/module/load.js":
/*!****************************!*\
  !*** ./src/module/load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/module/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/load.js?");

/***/ }),

/***/ "./src/module/renderGoods.js":
/*!***********************************!*\
  !*** ./src/module/renderGoods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods')\r\n  goodsWrapper.innerHTML = ''\r\n  goods.forEach((goodsItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      'beforeend',\r\n      `\r\n          <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `\r\n    )\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/renderGoods.js?");

/***/ }),

/***/ "./src/module/search.js":
/*!******************************!*\
  !*** ./src/module/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/module/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input')\r\n  searchInput.addEventListener('input', (event) => {\r\n    const value = event.target.value\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.searchFilter)(data, value))\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;