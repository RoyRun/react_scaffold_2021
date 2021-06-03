/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_scaffold_2021"] = self["webpackChunkreact_scaffold_2021"] || []).push([["index"],{

/***/ 352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ 744);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ 179);\n\n\n\nfunction getComponent() {\n  // const element = document.createElement('div');\n  // const IMG404 = new Image();\n  // IMG404.src = IMG;\n  // element.appendChild(IMG404)\n  // Lodash, currently included via a script, is required for this line to work\n  // element.innerHTML = 'hello'\n  return __webpack_require__.e(/*! import() | lodash */ \"vendor\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23)).then(function (_ref) {\n    var _ = _ref[\"default\"];\n    var element = document.createElement('div');\n    element.innerHTML = _.join(['Hello233', 'webpack'], ' ');\n    ;\n    return element;\n  })[\"catch\"](function (error) {\n    return 'An error occurred while loading the component';\n  });\n}\n\ngetComponent().then(function (component) {\n  document.body.appendChild(component);\n});\n\n//# sourceURL=webpack://react_scaffold_2021/./src/index.js?");

/***/ }),

/***/ 179:
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react_scaffold_2021/./src/index.less?");

/***/ }),

/***/ 744:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react_scaffold_2021/./src/index.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(352));
/******/ }
]);