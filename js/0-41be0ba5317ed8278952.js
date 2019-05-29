(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/PresentationalComponents/SampleComponent/sample-component.js":
/*!**************************************************************************!*\
  !*** ./src/PresentationalComponents/SampleComponent/sample-component.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-component.scss */ "./src/PresentationalComponents/SampleComponent/sample-component.scss");
/* harmony import */ var _sample_component_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sample_component_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

var SampleComponent = function SampleComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sample-component"
  }, " ", props.children, " ");
};

SampleComponent.displayName = 'SampleComponent';
SampleComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};
/* harmony default export */ __webpack_exports__["default"] = (SampleComponent);

/***/ }),

/***/ "./src/PresentationalComponents/SampleComponent/sample-component.scss":
/*!****************************************************************************!*\
  !*** ./src/PresentationalComponents/SampleComponent/sample-component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/0.js.map