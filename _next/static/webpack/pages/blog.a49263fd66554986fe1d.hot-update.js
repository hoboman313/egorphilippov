webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/*! exports provided: BlogContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContainer", function() { return BlogContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var components_Posts_2021__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Posts/2021 */ "./components/Posts/2021/index.ts");

var _jsxFileName = "F:\\Projects\\egorphilippov\\pages\\blog.tsx";





const Clients = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
      title: "Blog | Egor Philippov",
      description: "The personal blog of Egor Philippov.",
      canonical: "https://www.egorphilippov.me/blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogIndex, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogIndexYear, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(YearTitle, {
            children: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), components_Posts_2021__WEBPACK_IMPORTED_MODULE_4__["metas"].map(({
            id,
            title
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BlogEntryLink, {
              href: "#".concat(id),
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, undefined)
          }, id, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), components_Posts_2021__WEBPACK_IMPORTED_MODULE_4__["posts"].map(post => post()), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components__WEBPACK_IMPORTED_MODULE_3__["ToTopButton"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = Clients;
const BlogContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "blog__BlogContainer",
  componentId: "sc-11pogob-0"
})(["font-size:1.25em;margin:0 10vw;position:relative;@media (max-width:", "){margin:0 3vw;}"], ({
  theme
}) => theme.breakpoints.mobile);
_c2 = BlogContainer;
const BlogEntryLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "blog__BlogEntryLink",
  componentId: "sc-11pogob-1"
})(["display:inline-block;margin-bottom:", ";"], ({
  theme
}) => theme.spacing.small);
_c3 = BlogEntryLink;
const BlogIndex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "blog__BlogIndex",
  componentId: "sc-11pogob-2"
})(["border:1px solid ", ";border-radius:0.25rem;padding:", ";margin-bottom:", ";"], ({
  theme
}) => theme.colors.brand, ({
  theme
}) => theme.spacing.medium, ({
  theme
}) => theme.spacing.large);
_c4 = BlogIndex;
const BlogIndexYear = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "blog__BlogIndexYear",
  componentId: "sc-11pogob-3"
})(["font-size:0.9em;"]);
_c5 = BlogIndexYear;
const YearTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "blog__YearTitle",
  componentId: "sc-11pogob-4"
})(["margin-bottom:", ";"], ({
  theme
}) => theme.spacing.small);
_c6 = YearTitle;
/* harmony default export */ __webpack_exports__["default"] = (Clients);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Clients");
$RefreshReg$(_c2, "BlogContainer");
$RefreshReg$(_c3, "BlogEntryLink");
$RefreshReg$(_c4, "BlogIndex");
$RefreshReg$(_c5, "BlogIndexYear");
$RefreshReg$(_c6, "YearTitle");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy50c3giXSwibmFtZXMiOlsiQ2xpZW50cyIsIm1ldGFzMjAyMSIsIm1hcCIsImlkIiwidGl0bGUiLCJwb3N0czIwMjEiLCJwb3N0IiwiQmxvZ0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJCbG9nRW50cnlMaW5rIiwiYSIsInNwYWNpbmciLCJzbWFsbCIsIkJsb2dJbmRleCIsImNvbG9ycyIsImJyYW5kIiwibWVkaXVtIiwibGFyZ2UiLCJCbG9nSW5kZXhZZWFyIiwiWWVhclRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1BLE9BQWlCLEdBQUcsTUFBTTtBQUM5QixzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsV0FBSyxFQUFDLHVCQURSO0FBRUUsaUJBQVcsRUFBQyxzQ0FGZDtBQUdFLGVBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSxxRUFBQyxhQUFEO0FBQUEsOEJBQ0UscUVBQUMsU0FBRDtBQUFBLCtCQUNFLHFFQUFDLGFBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBR0dDLDJEQUFTLENBQUNDLEdBQVYsQ0FBYyxDQUFDO0FBQUVDLGNBQUY7QUFBTUM7QUFBTixXQUFELGtCQUNiO0FBQUEsbUNBQ0UscUVBQUMsYUFBRDtBQUFlLGtCQUFJLGFBQU1ELEVBQU4sQ0FBbkI7QUFBQSx3QkFBZ0NDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVRCxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBYUdFLDJEQUFTLENBQUNILEdBQVYsQ0FBZUksSUFBRCxJQUFVQSxJQUFJLEVBQTVCLENBYkgsZUFlRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJCRCxDQTVCRDs7S0FBTU4sTztBQThCQyxNQUFNTyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBS0gsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxNQUw5QixDQUFuQjtNQUFNTCxhO0FBU2IsTUFBTU0sYUFBYSxHQUFHTCx5REFBTSxDQUFDTSxDQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUVBLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxLQUY3QixDQUFuQjtNQUFNSCxhO0FBSU4sTUFBTUksU0FBUyxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFGQUNPLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQURuQyxFQUdGLENBQUM7QUFBRVQ7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssT0FBTixDQUFjSyxNQUgzQixFQUlJLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssT0FBTixDQUFjTSxLQUpqQyxDQUFmO01BQU1KLFM7QUFNTixNQUFNSyxhQUFhLEdBQUdkLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQW5CO01BQU1hLGE7QUFHTixNQUFNQyxTQUFTLEdBQUdmLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEJBQ0ksQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxPQUFOLENBQWNDLEtBRGpDLENBQWY7TUFBTU8sUztBQUlTdkIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5hNDkyNjNmZDY2NTU0OTg2ZmUxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIFRvVG9wQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHBvc3RzIGFzIHBvc3RzMjAyMSwgbWV0YXMgYXMgbWV0YXMyMDIxIH0gZnJvbSAnY29tcG9uZW50cy9Qb3N0cy8yMDIxJztcclxuXHJcbmNvbnN0IENsaWVudHM6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiQmxvZyB8IEVnb3IgUGhpbGlwcG92XCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBwZXJzb25hbCBibG9nIG9mIEVnb3IgUGhpbGlwcG92LlwiXHJcbiAgICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly93d3cuZWdvcnBoaWxpcHBvdi5tZS9ibG9nXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxCbG9nQ29udGFpbmVyPlxyXG4gICAgICAgIDxCbG9nSW5kZXg+XHJcbiAgICAgICAgICA8QmxvZ0luZGV4WWVhcj5cclxuICAgICAgICAgICAgPFllYXJUaXRsZT4yMDIxPC9ZZWFyVGl0bGU+XHJcblxyXG4gICAgICAgICAgICB7bWV0YXMyMDIxLm1hcCgoeyBpZCwgdGl0bGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8QmxvZ0VudHJ5TGluayBocmVmPXtgIyR7aWR9YH0+e3RpdGxlfTwvQmxvZ0VudHJ5TGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0Jsb2dJbmRleFllYXI+XHJcbiAgICAgICAgPC9CbG9nSW5kZXg+XHJcblxyXG4gICAgICAgIHtwb3N0czIwMjEubWFwKChwb3N0KSA9PiBwb3N0KCkpfVxyXG5cclxuICAgICAgICA8VG9Ub3BCdXR0b24gLz5cclxuICAgICAgPC9CbG9nQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBtYXJnaW46IDAgMTB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIG1hcmdpbjogMCAzdnc7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBCbG9nRW50cnlMaW5rID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5zbWFsbH07XHJcbmA7XHJcbmNvbnN0IEJsb2dJbmRleCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYnJhbmR9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcclxuYDtcclxuY29uc3QgQmxvZ0luZGV4WWVhciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuYDtcclxuY29uc3QgWWVhclRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcuc21hbGx9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==