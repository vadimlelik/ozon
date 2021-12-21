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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/load */ \"./src/module/load.js\");\n/* harmony import */ var _module_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/catalog */ \"./src/module/catalog.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/search */ \"./src/module/search.js\");\n/* harmony import */ var _module_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/filter */ \"./src/module/filter.js\");\n/* harmony import */ var _module_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/cart */ \"./src/module/cart.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_module_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n\r\n;(0,_module_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_module_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_module_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_module_cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/module/cart.js":
/*!****************************!*\
  !*** ./src/module/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/module/renderCart.js\");\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart')\r\n  const cartModal = document.querySelector('.cart')\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n  const cartTotal = cartModal.querySelector('.cart-total > span')\r\n  const cartSendBtn = cartModal.querySelector('.cart-confirm')\r\n  const goodsWrapper = document.querySelector('.goods')\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n  const counter = document.querySelector('.counter')\r\n\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem('cart')\r\n      ? JSON.parse(localStorage.getItem('cart'))\r\n      : []\r\n    cartModal.style.display = 'flex'\r\n    ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price\r\n    }, 0)\r\n  }\r\n\r\n  const closeCart = (e) => {\r\n    if (e.target === cartModal || e.target === cartCloseBtn) {\r\n      cartModal.style.display = ''\r\n    }\r\n  }\r\n\r\n  cartBtn.addEventListener('click', openCart)\r\n  cartCloseBtn.addEventListener('click', closeCart)\r\n  cartModal.addEventListener('click', closeCart)\r\n\r\n  goodsWrapper.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains('btn-primary')) {\r\n      const card = event.target.closest('.card')\r\n      const key = card.dataset.key\r\n      const goods = JSON.parse(localStorage.getItem('goods'))\r\n      const cart = localStorage.getItem('cart')\r\n        ? JSON.parse(localStorage.getItem('cart'))\r\n        : []\r\n\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key\r\n      })\r\n\r\n      cart.push(goodItem)\r\n\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n    }\r\n  })\r\n  cartWrapper.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains('btn-primary')) {\r\n      const cart = localStorage.getItem('cart')\r\n        ? JSON.parse(localStorage.getItem('cart'))\r\n        : []\r\n      const card = event.target.closest('.card')\r\n      const key = card.dataset.key\r\n\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key\r\n      })\r\n\r\n      cart.splice(index, 1)\r\n\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n      ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price\r\n      }, 0)\r\n    }\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/cart.js?");

/***/ }),

/***/ "./src/module/catalog.js":
/*!*******************************!*\
  !*** ./src/module/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/module/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector('.catalog-button > button')\r\n  const catalogModal = document.querySelector('.catalog')\r\n  const catalogModalItems = document.querySelectorAll('.catalog li')\r\n  let isOpen = false\r\n\r\n  btnCatalog.addEventListener('click', () => {\r\n    isOpen = !isOpen\r\n\r\n    if (isOpen) {\r\n      catalogModal.style.display = 'block'\r\n    } else {\r\n      catalogModal.style.display = ''\r\n    }\r\n  })\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      const text = item.textContent\r\n      ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_0__.categoryFilters)(data, text))\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/catalog.js?");

/***/ }),

/***/ "./src/module/filter.js":
/*!******************************!*\
  !*** ./src/module/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/module/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst fillter = () => {\r\n  const minInput = document.getElementById('min')\r\n  const maxInput = document.getElementById('max')\r\n  const checkboxInput = document.getElementById('discount-checkbox')\r\n  const filterCheckCheckmark = document.querySelector('.filter-check_checkmark')\r\n\r\n  minInput.addEventListener('input', () => {\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_0__.priceFilters)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_0__.hotSaleFilters)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    })\r\n  })\r\n  maxInput.addEventListener('input', () => {\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_0__.priceFilters)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_0__.hotSaleFilters)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    })\r\n  })\r\n\r\n  checkboxInput.addEventListener('change', () => {\r\n    if (checkboxInput.checked) {\r\n      filterCheckCheckmark.classList.add('checked')\r\n    } else {\r\n      filterCheckCheckmark.classList.remove('checked')\r\n    }\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_0__.priceFilters)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_0__.hotSaleFilters)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    })\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillter);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/filter.js?");

/***/ }),

/***/ "./src/module/filters.js":
/*!*******************************!*\
  !*** ./src/module/filters.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilters\": () => (/* binding */ categoryFilters),\n/* harmony export */   \"priceFilters\": () => (/* binding */ priceFilters),\n/* harmony export */   \"hotSaleFilters\": () => (/* binding */ hotSaleFilters)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value)\r\n  })\r\n}\r\n\r\nconst categoryFilters = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category.includes(value)\r\n  })\r\n}\r\nconst priceFilters = (goods, min, max) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (min === '' && max === '') {\r\n      return goodsItem\r\n    } else if (min !== '' && max !== '') {\r\n      return goodsItem.price > +min && goodsItem.price < +max\r\n    } else if (min !== '' && max === '') {\r\n      return goodsItem.price > +min\r\n    } else if (min === '' && max !== '') {\r\n      return goodsItem.price < +max\r\n    }\r\n  })\r\n}\r\n\r\nconst hotSaleFilters = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true\r\n    } else {\r\n      return goodsItem\r\n    }\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://ozon/./src/module/filters.js?");

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

/***/ "./src/module/renderCart.js":
/*!**********************************!*\
  !*** ./src/module/renderCart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n  cartWrapper.innerHTML = ''\r\n  if (goods.length === 0) {\r\n    cartWrapper.innerHTML = '<p> Товаров нет  </p>'\r\n  } else {\r\n    goods.forEach((goodsItem) => {\r\n      cartWrapper.insertAdjacentHTML(\r\n        'beforeend',\r\n        `\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\"\r\n                style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    `\r\n      )\r\n    })\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/renderCart.js?");

/***/ }),

/***/ "./src/module/renderGoods.js":
/*!***********************************!*\
  !*** ./src/module/renderGoods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods')\r\n  localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n  goodsWrapper.innerHTML = ''\r\n  goods.forEach((goodsItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      'beforeend',\r\n      `\r\n          <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `\r\n    )\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon/./src/module/renderGoods.js?");

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