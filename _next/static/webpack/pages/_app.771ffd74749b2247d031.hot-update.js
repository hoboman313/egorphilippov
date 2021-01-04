self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/GlobalStyles.tsx":
/*!*********************************!*\
  !*** ./styles/GlobalStyles.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/esm/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\Projects\\egorphilippov\\styles\\GlobalStyles.tsx",
    _this = undefined;

function _templateObject() {
  var data = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["  \n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n  html, body {\n    font-family: 'Roboto', sans-serif;\n    color: ", "\n  }\n  a {\n      color: ", ";\n      transition: all 200ms;\n\n      :focus, :hover {\n        color: ", ";\n      }\n  }\n  ul li {\n    list-style-type: circle;\n  }\n  .page-transition-enter {\n    opacity: 0;\n  }\n  .page-transition-enter-active {\n    opacity: 1;\n    transition: opacity 200ms;\n  }\n  .page-transition-exit {\n    opacity: 1;\n  }\n  .page-transition-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(_templateObject(), styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BLACK, styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND, (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND));
_c = GlobalStyle;

var GlobalStyles = function GlobalStyles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(styled_reset__WEBPACK_IMPORTED_MODULE_3__.Reset, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c2 = GlobalStyles;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "GlobalStyles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0dsb2JhbFN0eWxlcy50c3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNPTE9SX0JMQUNLIiwiQ09MT1JfQlJBTkQiLCJkYXJrZW4iLCJHbG9iYWxTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLFdBQVcsR0FBR0Msb0VBQUgsb0JBTVhDLHFEQU5XLEVBU1RDLHFEQVRTLEVBYVBDLGdEQUFNLENBQUMsSUFBRCxFQUFPRCxxREFBUCxDQWJDLENBQWpCO0tBQU1ILFc7O0FBbUNiLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsc0JBQ25CO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEbUI7QUFBQSxDQUFyQjs7TUFBTUEsWTtBQU9OLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzcxZmZkNzQ3NDliMjI0N2QwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSZXNldCB9IGZyb20gJ3N0eWxlZC1yZXNldCc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmltcG9ydCB7IENPTE9SX0JSQU5ELCBDT0xPUl9CTEFDSyB9IGZyb20gJ3N0eWxlcy90aGVtZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWAgIFxyXG4gICNfX25leHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBodG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAke0NPTE9SX0JMQUNLfVxyXG4gIH1cclxuICBhIHtcclxuICAgICAgY29sb3I6ICR7Q09MT1JfQlJBTkR9O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcblxyXG4gICAgICA6Zm9jdXMsIDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR7ZGFya2VuKDAuMDUsIENPTE9SX0JSQU5EKX07XHJcbiAgICAgIH1cclxuICB9XHJcbiAgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XHJcbiAgfVxyXG4gIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcbiAgfVxyXG4gIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgPD5cclxuICAgIDxSZXNldCAvPlxyXG4gICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=