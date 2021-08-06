(self["webpackChunkreact_scaffold_2021"] = self["webpackChunkreact_scaffold_2021"] || []).push([[179],{

/***/ 8840:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(1383);
;// CONCATENATED MODULE: ./src/index.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);



/* harmony default export */ const src = (cjs_js_src/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/index.less
var dist_cjs_js_src = __webpack_require__(7341);
;// CONCATENATED MODULE: ./src/index.less

            

var src_options = {};

src_options.insert = "head";
src_options.singleton = false;

var src_update = injectStylesIntoStyleTag_default()(dist_cjs_js_src/* default */.Z, src_options);



/* harmony default export */ const src_0 = (dist_cjs_js_src/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js
var construct = __webpack_require__(1068);
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(530);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js
var createClass = __webpack_require__(6849);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(7647);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(6002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(891);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(594);
;// CONCATENATED MODULE: ./src/Child/index.js


function Child(props) {
  console.log('render Child');
  var random = (0,react.useRef)(Math.random());
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, "child page..."), /*#__PURE__*/react.createElement("p", null, random.current), /*#__PURE__*/react.createElement("button", {
    onClick: props.onSetCount
  }, "\u70B9\u6211 Count ++ "));
}

/* harmony default export */ const src_Child = (/*#__PURE__*/(0,react.memo)(Child));
;// CONCATENATED MODULE: ./src/useCallback/index.js



function useCallbackTest() {
  var _useState = (0,react.useState)(10),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1]; // 缓存一个置零的函数


  var cacheSetCount = (0,react.useCallback)(function () {
    return setCount(0);
  }, [setCount]);
  (0,react.useEffect)(function () {
    console.log('use effect..');
  }, []);
  (0,react.useLayoutEffect)(function () {
    console.log('use layout effect');
  });
  return /*#__PURE__*/react.createElement("div", null, "use callback page", /*#__PURE__*/react.createElement("span", null, count), /*#__PURE__*/react.createElement(src_Child, {
    onSetCount: function onSetCount() {
      return setCount(0);
    }
  }));
}
;// CONCATENATED MODULE: ./src/context/index.js

var themes = {
  light: {
    background: '#eeeeee'
  },
  dark: {
    background: '#222222'
  }
};
var context = /*#__PURE__*/react.createContext(themes.dark);
context.displayName = 'themeContext';

;// CONCATENATED MODULE: ./src/Home/index.jsx







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(construct_default())) return false; if ((construct_default()).sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Home = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Home);

    _this = _super.call(this);
    _this.state = {
      count: 0,
      theme: themes.light
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(context.Provider, {
        value: this.state.theme
      }, /*#__PURE__*/react.createElement(useCallbackTest, null), /*#__PURE__*/react.createElement("img", {
        src: "/image.png"
      })));
    }
  }]);

  return Home;
}(react.Component);


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/react.createElement(Home, null), document.getElementById('root')); // function getComponent() {
//     // const element = document.createElement('div');
//     // const IMG404 = new Image();
//     // IMG404.src = IMG;
//     // element.appendChild(IMG404)
//     // Lodash, currently included via a script, is required for this line to work
//     // element.innerHTML = 'hello'
//     return import(/*webpackChunkName:'lodash'*/'lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div');
//       element.innerHTML = _.join(['Hello233', 'webpack'], ' ');;
//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
//   }
//   getComponent().then((component) => {
//     document.body.appendChild(component);
//   });

/***/ }),

/***/ 7341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    width: 400px;\n    height: 400px;\n    border: 1px solid red;\n    /* background: url('./404.png'); */\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(8840)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);