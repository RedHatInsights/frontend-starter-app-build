(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SamplePage"],{

/***/ "./src/SmartComponents/SamplePage/SamplePage.js":
/*!******************************************************!*\
  !*** ./src/SmartComponents/SamplePage/SamplePage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");
/* harmony import */ var _sample_page_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sample-page.scss */ "./src/SmartComponents/SamplePage/sample-page.scss");
/* harmony import */ var _sample_page_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sample_page_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");











var SampleComponent = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/SampleComponent/sample-component */ "./src/PresentationalComponents/SampleComponent/sample-component.js"));
}); // const PageHeader2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header'));
// const PageHeaderTitle2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header-title'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var SamplePage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SamplePage, _Component);

  function SamplePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SamplePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SamplePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SamplePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["PageHeaderTitle"], {
        title: "Sample Insights App"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, " This is page header text ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Main"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, " Sample Component "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SampleComponent, null, " Sample Component "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, " Cards "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, " Buttons "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        type: "button-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "primary"
      }, " PF-Next Primary Button "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "secondary"
      }, " PF-Next Secondary Button "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "tertiary"
      }, " PF-Next Tertiary Button "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "danger"
      }, " PF-Next Danger Button "))));
    }
  }]);

  return SamplePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(SamplePage));

/***/ }),

/***/ "./src/SmartComponents/SamplePage/sample-page.scss":
/*!*********************************************************!*\
  !*** ./src/SmartComponents/SamplePage/sample-page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/SamplePage.js.map