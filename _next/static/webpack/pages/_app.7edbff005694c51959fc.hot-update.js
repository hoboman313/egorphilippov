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
  var data = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["  \n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n  html, body {\n    font-family: 'Roboto', sans-serif;\n    color: ", "\n  }\n  a {\n      color: ", ";\n      transition: all 200ms;\n\n      :focus, :hover {\n        color: ", ";\n      }\n  }\n  ul li {\n    list-style-type: disc;\n    color: ", ";\n    margin-left: 2.5rem;\n  }\n  .page-transition-enter {\n    opacity: 0;\n  }\n  .page-transition-enter-active {\n    opacity: 1;\n    transition: opacity 200ms;\n  }\n  .page-transition-exit {\n    opacity: 1;\n  }\n  .page-transition-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(_templateObject(), styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BLACK, styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND, (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND), styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND);
_c = GlobalStyle;

var GlobalStyles = function GlobalStyles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(styled_reset__WEBPACK_IMPORTED_MODULE_3__.Reset, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0dsb2JhbFN0eWxlcy50c3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNPTE9SX0JMQUNLIiwiQ09MT1JfQlJBTkQiLCJkYXJrZW4iLCJHbG9iYWxTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLFdBQVcsR0FBR0Msb0VBQUgsb0JBTVhDLHFEQU5XLEVBU1RDLHFEQVRTLEVBYVBDLGdEQUFNLENBQUMsSUFBRCxFQUFPRCxxREFBUCxDQWJDLEVBa0JYQSxxREFsQlcsQ0FBakI7S0FBTUgsVzs7QUFxQ2IsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDbkI7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURtQjtBQUFBLENBQXJCOztNQUFNQSxZO0FBT04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZWRiZmYwMDU2OTRjNTE5NTlmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFJlc2V0IH0gZnJvbSAnc3R5bGVkLXJlc2V0JztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5cclxuaW1wb3J0IHsgQ09MT1JfQlJBTkQsIENPTE9SX0JMQUNLIH0gZnJvbSAnc3R5bGVzL3RoZW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYCAgXHJcbiAgI19fbmV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICR7Q09MT1JfQkxBQ0t9XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogJHtDT0xPUl9CUkFORH07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuXHJcbiAgICAgIDpmb2N1cywgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHtkYXJrZW4oMC4wNSwgQ09MT1JfQlJBTkQpfTtcclxuICAgICAgfVxyXG4gIH1cclxuICB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICBjb2xvcjogJHtDT0xPUl9CUkFORH07XHJcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gIH1cclxuICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIH1cclxuICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDw+XHJcbiAgICA8UmVzZXQgLz5cclxuICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9