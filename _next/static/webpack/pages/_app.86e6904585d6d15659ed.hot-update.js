self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles */ "./styles/theme.ts");
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles */ "./styles/GlobalStyles.tsx");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./components/navbar/Navbar.tsx");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fontsource_roboto__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\Projects\\egorphilippov\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var year = new Date().getFullYear();
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', function () {
  react_ga__WEBPACK_IMPORTED_MODULE_5__.default.pageview("".concat(window.location.pathname).concat(window.location.search));
});

var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isNavbarOpen = _useState[0],
      setIsNavbarOpen = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_5__.default.initialize("UA-70441070-1");
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {
    theme: styles__WEBPACK_IMPORTED_MODULE_10__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "description",
        content: "The personal site of Egor Philippov."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "keywords",
        content: "Egor,Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "author",
        content: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styles__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MainLayoutContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_12__.Navbar, {
        isNavbarOpen: isNavbarOpen,
        setIsNavbarOpen: setIsNavbarOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMain, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__.PageTransition, {
          timeout: 200,
          classNames: "page-transition",
          skipInitialTransition: true,
          children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            key: router.route,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            },
            __self: _this
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeLinks, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeText, {
            children: "- Find me on"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://github.com/lone-cloud",
            rel: "noreferrer",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faGithub,
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://ca.linkedin.com/in/egor-philippov-1482207b",
            rel: "noreferrer",
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faLinkedin,
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLinkContainer, {
          children: ["Forged from \uD83D\uDD25 \xA9", year, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLink, {
            href: "https://www.nidratech.com/",
            children: "Nidratech Ltd."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(App, "qE0K9qoaDK11e4TxVHADv/OTtNk=");

_c = App;
var StyledFontAwesomeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon).withConfig({
  displayName: "_app__StyledFontAwesomeIcon",
  componentId: "sc-1fdije6-0"
})(["padding:0 0.5rem;"]);
_c2 = StyledFontAwesomeIcon;
var FindMeText = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.span.withConfig({
  displayName: "_app__FindMeText",
  componentId: "sc-1fdije6-1"
})(["text-transform:uppercase;margin-right:1rem;font-weight:600;font-size:0.9em;"]);
_c3 = FindMeText;
var MainLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "_app__MainLayoutContainer",
  componentId: "sc-1fdije6-2"
})(["display:grid;grid-template-rows:1fr min-content;min-height:100vh;"]);
_c4 = MainLayoutContainer;
var StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.main.withConfig({
  displayName: "_app__StyledMain",
  componentId: "sc-1fdije6-3"
})(["padding-top:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.navBarHeight;
});
_c5 = StyledMain;
var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.footer.withConfig({
  displayName: "_app__StyledFooter",
  componentId: "sc-1fdije6-4"
})(["display:flex;justify-content:center;padding:", ";flex-direction:column;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.large;
});
_c6 = StyledFooter;
var FindMeLinks = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "_app__FindMeLinks",
  componentId: "sc-1fdije6-5"
})(["align-self:flex-end;margin:0 20vw;display:flex;align-items:center;a{color:", ";}@media (max-width:", "){margin:0;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.mobile;
});
_c7 = FindMeLinks;
var ForgedLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "_app__ForgedLinkContainer",
  componentId: "sc-1fdije6-6"
})(["margin-top:2rem;align-self:center;"]);
_c8 = ForgedLinkContainer;
var ForgedLink = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.a.withConfig({
  displayName: "_app__ForgedLink",
  componentId: "sc-1fdije6-7"
})(["color:", ";:focus,:hover{color:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.nidratech;
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_14__.darken)(0.05, theme.colors.nidratech);
});
_c9 = ForgedLink;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "StyledFontAwesomeIcon");
$RefreshReg$(_c3, "FindMeText");
$RefreshReg$(_c4, "MainLayoutContainer");
$RefreshReg$(_c5, "StyledMain");
$RefreshReg$(_c6, "StyledFooter");
$RefreshReg$(_c7, "FindMeLinks");
$RefreshReg$(_c8, "ForgedLinkContainer");
$RefreshReg$(_c9, "ForgedLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIlJvdXRlciIsIlJlYWN0R0EiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJ1c2VFZmZlY3QiLCJwcm9jZXNzIiwidGhlbWUiLCJyb3V0ZSIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsIlN0eWxlZEZvbnRBd2Vzb21lSWNvbiIsInN0eWxlZCIsIkZvbnRBd2Vzb21lSWNvbiIsIkZpbmRNZVRleHQiLCJNYWluTGF5b3V0Q29udGFpbmVyIiwiU3R5bGVkTWFpbiIsInNwYWNpbmciLCJuYXZCYXJIZWlnaHQiLCJTdHlsZWRGb290ZXIiLCJsYXJnZSIsIkZpbmRNZUxpbmtzIiwiY29sb3JzIiwiYmxhY2siLCJicmVha3BvaW50cyIsIm1vYmlsZSIsIkZvcmdlZExpbmtDb250YWluZXIiLCJGb3JnZWRMaW5rIiwibmlkcmF0ZWNoIiwiZGFya2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBYjtBQUVBQyw0REFBQSxDQUFpQixxQkFBakIsRUFBd0MsWUFBTTtBQUM1Q0Msd0RBQUEsV0FBb0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBcEMsU0FBK0NGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBL0Q7QUFDRCxDQUZEOztBQUlBLElBQU1DLEdBQXVCLEdBQUcsU0FBMUJBLEdBQTBCLE9BQXNDO0FB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SCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDZSxNQUFOLENBQWFNLFNBQTVCO0FBQUEsQ0FESyxFQUtIO0FBQUEsTUFBR3JCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVzQixpREFBTSxDQUFDLElBQUQsRUFBT3RCLEtBQUssQ0FBQ2UsTUFBTixDQUFhTSxTQUFwQixDQUFyQjtBQUFBLENBTEcsQ0FBaEI7TUFBTUQsVTtBQVNOLCtEQUFlN0IsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg2ZTY5MDQ1ODVkNmQxNTY1OWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhR2l0aHViLCBmYUxpbmtlZGluIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlcywgdGhlbWUgfSBmcm9tICdzdHlsZXMnO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdjb21wb25lbnRzJztcclxuXHJcbmltcG9ydCAnZm9udHNvdXJjZS1yb2JvdG8nO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgUmVhY3RHQS5wYWdldmlldyhgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWApO1xyXG59KTtcclxuXHJcbmNvbnN0IEFwcDogTmV4dFBhZ2U8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCBhcyBzdHJpbmcpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FZ29yIFBoaWxpcHBvdjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSBwZXJzb25hbCBzaXRlIG9mIEVnb3IgUGhpbGlwcG92LlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkVnb3IsUGhpbGlwcG92XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkVnb3IgUGhpbGlwcG92XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcblxyXG4gICAgICA8TWFpbkxheW91dENvbnRhaW5lcj5cclxuICAgICAgICA8TmF2YmFyIGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuXHJcbiAgICAgICAgPFN0eWxlZE1haW4+XHJcbiAgICAgICAgICA8UGFnZVRyYW5zaXRpb24gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCIgc2tpcEluaXRpYWxUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cclxuICAgICAgICA8L1N0eWxlZE1haW4+XHJcblxyXG4gICAgICAgIDxTdHlsZWRGb290ZXI+XHJcbiAgICAgICAgICA8RmluZE1lTGlua3M+XHJcbiAgICAgICAgICAgIDxGaW5kTWVUZXh0Pi0gRmluZCBtZSBvbjwvRmluZE1lVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbG9uZS1jbG91ZFwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NhLmxpbmtlZGluLmNvbS9pbi9lZ29yLXBoaWxpcHBvdi0xNDgyMjA3YlwiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9GaW5kTWVMaW5rcz5cclxuXHJcbiAgICAgICAgICA8Rm9yZ2VkTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgRm9yZ2VkIGZyb20g8J+UpSDCqXt5ZWFyfXsnICd9XHJcbiAgICAgICAgICAgIDxGb3JnZWRMaW5rIGhyZWY9XCJodHRwczovL3d3dy5uaWRyYXRlY2guY29tL1wiPk5pZHJhdGVjaCBMdGQuPC9Gb3JnZWRMaW5rPlxyXG4gICAgICAgICAgPC9Gb3JnZWRMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3R5bGVkRm9vdGVyPlxyXG4gICAgICA8L01haW5MYXlvdXRDb250YWluZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEZvbnRBd2Vzb21lSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG5gO1xyXG5jb25zdCBGaW5kTWVUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG5gO1xyXG5jb25zdCBNYWluTGF5b3V0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLm1haW5gXHJcbiAgcGFkZGluZy10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBGaW5kTWVMaW5rcyA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAwIDIwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgRm9yZ2VkTGluayA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5uaWRyYXRlY2h9O1xyXG5cclxuICA6Zm9jdXMsXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMubmlkcmF0ZWNoKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9