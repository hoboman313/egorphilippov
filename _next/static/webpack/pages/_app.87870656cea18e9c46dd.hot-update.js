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
})(["align-self:flex-end;margin:0 20vw;display:flex;align-items:center;a{color:", ";:focus,:hover{color:", ";}}@media (max-width:", "){margin:0;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black;
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_14__.darken)(0.05, theme.colors.brand);
}, function (_ref6) {
  var theme = _ref6.theme;
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
})(["color:", ";:focus,:hover{color:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.nidratech;
}, function (_ref8) {
  var theme = _ref8.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIlJvdXRlciIsIlJlYWN0R0EiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJ1c2VFZmZlY3QiLCJwcm9jZXNzIiwidGhlbWUiLCJyb3V0ZSIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsIlN0eWxlZEZvbnRBd2Vzb21lSWNvbiIsInN0eWxlZCIsIkZvbnRBd2Vzb21lSWNvbiIsIkZpbmRNZVRleHQiLCJNYWluTGF5b3V0Q29udGFpbmVyIiwiU3R5bGVkTWFpbiIsInNwYWNpbmciLCJuYXZCYXJIZWlnaHQiLCJTdHlsZWRGb290ZXIiLCJsYXJnZSIsIkZpbmRNZUxpbmtzIiwiY29sb3JzIiwiYmxhY2siLCJkYXJrZW4iLCJicmFuZCIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwiRm9yZ2VkTGlua0NvbnRhaW5lciIsIkZvcmdlZExpbmsiLCJuaWRyYXRlY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiO0FBRUFDLDREQUFBLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDQyx3REFBQSxXQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFwQyxTQUErQ0YsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxNQUEvRDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIs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TixJQUFNTyxtQkFBbUIsR0FBR2hCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUF6QjtNQUFNZ0IsbUI7QUFJTixJQUFNQyxVQUFVLEdBQUdqQixtRUFBSDtBQUFBO0FBQUE7QUFBQSw4Q0FDTDtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2UsTUFBTixDQUFhUSxTQUE1QjtBQUFBLENBREssRUFLSDtBQUFBLE1BQUd2QixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlaUIsaURBQU0sQ0FBQyxJQUFELEVBQU9qQixLQUFLLENBQUNlLE1BQU4sQ0FBYVEsU0FBcEIsQ0FBckI7QUFBQSxDQUxHLENBQWhCO01BQU1ELFU7QUFTTiwrREFBZS9CLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44Nzg3MDY1NmNlYTE4ZTljNDZkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcclxuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIHRoZW1lIH0gZnJvbSAnc3R5bGVzJztcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ2ZvbnRzb3VyY2Utcm9ib3RvJztcclxuXHJcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4ge1xyXG4gIFJlYWN0R0EucGFnZXZpZXcoYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gKTtcclxufSk7XHJcblxyXG5jb25zdCBBcHA6IE5leHRQYWdlPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBSZWFjdEdBLmluaXRpYWxpemUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQgYXMgc3RyaW5nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RWdvciBQaGlsaXBwb3Y8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGUgcGVyc29uYWwgc2l0ZSBvZiBFZ29yIFBoaWxpcHBvdi5cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJFZ29yLFBoaWxpcHBvdlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJFZ29yIFBoaWxpcHBvdlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG5cclxuICAgICAgPE1haW5MYXlvdXRDb250YWluZXI+XHJcbiAgICAgICAgPE5hdmJhciBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcblxyXG4gICAgICAgIDxTdHlsZWRNYWluPlxyXG4gICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezIwMH0gY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiIHNraXBJbml0aWFsVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgPC9TdHlsZWRNYWluPlxyXG5cclxuICAgICAgICA8U3R5bGVkRm9vdGVyPlxyXG4gICAgICAgICAgPEZpbmRNZUxpbmtzPlxyXG4gICAgICAgICAgICA8RmluZE1lVGV4dD4tIEZpbmQgbWUgb248L0ZpbmRNZVRleHQ+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xvbmUtY2xvdWRcIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jYS5saW5rZWRpbi5jb20vaW4vZWdvci1waGlsaXBwb3YtMTQ4MjIwN2JcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IHNpemU9XCIyeFwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvRmluZE1lTGlua3M+XHJcblxyXG4gICAgICAgICAgPEZvcmdlZExpbmtDb250YWluZXI+XHJcbiAgICAgICAgICAgIEZvcmdlZCBmcm9tIPCflKUgwql7eWVhcn17JyAnfVxyXG4gICAgICAgICAgICA8Rm9yZ2VkTGluayBocmVmPVwiaHR0cHM6Ly93d3cubmlkcmF0ZWNoLmNvbS9cIj5OaWRyYXRlY2ggTHRkLjwvRm9yZ2VkTGluaz5cclxuICAgICAgICAgIDwvRm9yZ2VkTGlua0NvbnRhaW5lcj5cclxuICAgICAgICA8L1N0eWxlZEZvb3Rlcj5cclxuICAgICAgPC9NYWluTGF5b3V0Q29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRGb250QXdlc29tZUljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuYDtcclxuY29uc3QgRmluZE1lVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuYDtcclxuY29uc3QgTWFpbkxheW91dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuYDtcclxuY29uc3QgU3R5bGVkTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubmF2QmFySGVpZ2h0fTtcclxuYDtcclxuY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5sYXJnZX07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuY29uc3QgRmluZE1lTGlua3MgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMCAyMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG5cclxuICAgIDpmb2N1cyxcclxuICAgIDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZvcmdlZExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm5pZHJhdGVjaH07XHJcblxyXG4gIDpmb2N1cyxcclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy5uaWRyYXRlY2gpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=