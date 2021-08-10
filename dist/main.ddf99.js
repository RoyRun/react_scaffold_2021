(self["webpackChunkreact_scaffold_2021"] = self["webpackChunkreact_scaffold_2021"] || []).push([[179],{

/***/ 6660:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(3804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
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
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(5161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/context/index.js

var themes = {
  light: {
    background: '#eeeeee'
  },
  dark: {
    background: '#222222'
  }
};
var context = /*#__PURE__*/external_React_default().createContext(themes.dark);
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
      count: dayjs_min_default()().format(),
      theme: themes.light,
      data: map_default()([1, 2, 3], function (item) {
        return item + 1;
      })
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement(external_React_.Fragment, null, /*#__PURE__*/external_React_default().createElement(context.Provider, {
        value: this.state.theme
      }, this.state.count, /*#__PURE__*/external_React_default().createElement("img", {
        src: "/image.png"
      })));
    }
  }]);

  return Home;
}((external_React_default()).Component);


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/external_React_default().createElement(Home, null), document.getElementById('root')); // function getComponent() {
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

/***/ 3804:
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(6660)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);