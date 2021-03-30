self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_Projects_egorphilippov_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles */ "./styles/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/roboto */ "./node_modules/@fontsource/roboto/index.css");
/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\Projects\\egorphilippov\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_Projects_egorphilippov_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__.config.autoAddCss = false;



const year = new Date().getFullYear();
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', () => {
  react_ga__WEBPACK_IMPORTED_MODULE_5__.default.pageview("".concat(window.location.pathname).concat(window.location.search));
});

const App = ({
  Component,
  pageProps,
  router
}) => {
  _s();

  const {
    0: isNavbarOpen,
    1: setIsNavbarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_5__.default.initialize("UA-70441070-1");
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
    theme: styles__WEBPACK_IMPORTED_MODULE_12__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "description",
        content: "The personal site of Egor Philippov."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "keywords",
        content: "Egor,Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "author",
        content: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styles__WEBPACK_IMPORTED_MODULE_12__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MainLayoutContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_13__.Navbar, {
        isNavbarOpen: isNavbarOpen,
        setIsNavbarOpen: setIsNavbarOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMain, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__.PageTransition, {
          timeout: 200,
          classNames: "page-transition",
          skipInitialTransition: true,
          children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            key: router.route,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeLinks, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeText, {
            children: "- Find me on"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://github.com/lone-cloud",
            rel: "noreferrer",
            target: "_blank",
            "aria-label": "GitHub",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faGithub,
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://ca.linkedin.com/in/egor-philippov-1482207b",
            rel: "noreferrer",
            target: "_blank",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faLinkedin,
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLinkContainer, {
          children: ["Forged from \uD83D\uDD25 \xA9", year, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLink, {
            href: "https://www.nidratech.com/",
            children: "Nidratech Ltd."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

_s(App, "qE0K9qoaDK11e4TxVHADv/OTtNk=");

_c = App;
const StyledFontAwesomeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon).withConfig({
  displayName: "_app__StyledFontAwesomeIcon",
  componentId: "sc-1fdije6-0"
})(["padding:0 0.5rem;"]);
_c2 = StyledFontAwesomeIcon;
const FindMeText = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.span.withConfig({
  displayName: "_app__FindMeText",
  componentId: "sc-1fdije6-1"
})(["text-transform:uppercase;margin-right:", ";font-weight:600;font-size:0.9em;"], ({
  theme
}) => theme.spacing.medium);
_c3 = FindMeText;
const MainLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div.withConfig({
  displayName: "_app__MainLayoutContainer",
  componentId: "sc-1fdije6-2"
})(["display:grid;grid-template-rows:1fr min-content;min-height:100vh;"]);
_c4 = MainLayoutContainer;
const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.main.withConfig({
  displayName: "_app__StyledMain",
  componentId: "sc-1fdije6-3"
})(["padding-top:", ";"], ({
  theme
}) => theme.spacing.navBarHeight);
_c5 = StyledMain;
const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.footer.withConfig({
  displayName: "_app__StyledFooter",
  componentId: "sc-1fdije6-4"
})(["display:flex;justify-content:center;padding:", ";flex-direction:column;"], ({
  theme
}) => theme.spacing.large);
_c6 = StyledFooter;
const ForgedLink = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.a.withConfig({
  displayName: "_app__ForgedLink",
  componentId: "sc-1fdije6-5"
})(["color:", ";:hover,:focus{color:", ";}"], ({
  theme
}) => theme.colors.nidratech, ({
  theme
}) => (0,polished__WEBPACK_IMPORTED_MODULE_15__.darken)(0.05, theme.colors.nidratech));
_c7 = ForgedLink;
const FindMeLinks = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div.withConfig({
  displayName: "_app__FindMeLinks",
  componentId: "sc-1fdije6-6"
})(["align-self:flex-end;margin:0 20vw;display:flex;align-items:center;a{color:", ";transition:all 200ms;:focus,:hover{color:", ";}}@media (max-width:", "){margin:0;}"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => (0,polished__WEBPACK_IMPORTED_MODULE_15__.darken)(0.05, theme.colors.brand), ({
  theme
}) => theme.breakpoints.mobile);
_c8 = FindMeLinks;
const ForgedLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div.withConfig({
  displayName: "_app__ForgedLinkContainer",
  componentId: "sc-1fdije6-7"
})(["margin-top:2rem;align-self:center;"]);
_c9 = ForgedLinkContainer;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "StyledFontAwesomeIcon");
$RefreshReg$(_c3, "FindMeText");
$RefreshReg$(_c4, "MainLayoutContainer");
$RefreshReg$(_c5, "StyledMain");
$RefreshReg$(_c6, "StyledFooter");
$RefreshReg$(_c7, "ForgedLink");
$RefreshReg$(_c8, "FindMeLinks");
$RefreshReg$(_c9, "ForgedLinkContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiY29uZmlnIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIlJvdXRlciIsIlJlYWN0R0EiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9jZXNzIiwidGhlbWUiLCJyb3V0ZSIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsIlN0eWxlZEZvbnRBd2Vzb21lSWNvbiIsInN0eWxlZCIsIkZvbnRBd2Vzb21lSWNvbiIsIkZpbmRNZVRleHQiLCJzcGFjaW5nIiwibWVkaXVtIiwiTWFpbkxheW91dENvbnRhaW5lciIsIlN0eWxlZE1haW4iLCJuYXZCYXJIZWlnaHQiLCJTdHlsZWRGb290ZXIiLCJsYXJnZSIsIkZvcmdlZExpbmsiLCJjb2xvcnMiLCJuaWRyYXRlY2giLCJkYXJrZW4iLCJGaW5kTWVMaW5rcyIsImJsYWNrIiwiYnJhbmQiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsIkZvcmdlZExpbmtDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0ZBQUEsR0FBb0IsS0FBcEI7QUFFQTtBQUNBO0FBRUE7QUFFQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWI7QUFFQUMsNERBQUEsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU07QUFDNUNDLHdEQUFBLFdBQW9CQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQXBDLFNBQStDRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLE1B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LENBQUNnQixNQUFOLENBQWFJLEtBUHhCLEVBWUYsQ0FBQztBQUFFcEI7QUFBRixDQUFELEtBQWVrQixpREFBTSxDQUFDLElBQUQsRUFBT2xCLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUssS0FBcEIsQ0FabkIsRUFnQk0sQ0FBQztBQUFFckI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLE1BaEJ2QyxDQUFqQjtNQUFNSixXO0FBb0JOLE1BQU1LLG1CQUFtQixHQUFHbkIsc0VBQUg7QUFBQTtBQUFBO0FBQUEsMENBQXpCO01BQU1tQixtQjtBQUtOLCtEQUFlakMsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4MjAxYmNhODVhNmRkODU5ZTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhR2l0aHViLCBmYUxpbmtlZGluIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7XHJcblxyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzLCB0aGVtZSB9IGZyb20gJ3N0eWxlcyc7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8nO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgUmVhY3RHQS5wYWdldmlldyhgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWApO1xyXG59KTtcclxuXHJcbmNvbnN0IEFwcDogTmV4dFBhZ2U8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCBhcyBzdHJpbmcpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FZ29yIFBoaWxpcHBvdjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSBwZXJzb25hbCBzaXRlIG9mIEVnb3IgUGhpbGlwcG92LlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkVnb3IsUGhpbGlwcG92XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkVnb3IgUGhpbGlwcG92XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcblxyXG4gICAgICA8TWFpbkxheW91dENvbnRhaW5lcj5cclxuICAgICAgICA8TmF2YmFyIGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuXHJcbiAgICAgICAgPFN0eWxlZE1haW4+XHJcbiAgICAgICAgICA8UGFnZVRyYW5zaXRpb24gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCIgc2tpcEluaXRpYWxUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cclxuICAgICAgICA8L1N0eWxlZE1haW4+XHJcblxyXG4gICAgICAgIDxTdHlsZWRGb290ZXI+XHJcbiAgICAgICAgICA8RmluZE1lTGlua3M+XHJcbiAgICAgICAgICAgIDxGaW5kTWVUZXh0Pi0gRmluZCBtZSBvbjwvRmluZE1lVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sb25lLWNsb3VkXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHaXRIdWJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jYS5saW5rZWRpbi5jb20vaW4vZWdvci1waGlsaXBwb3YtMTQ4MjIwN2JcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmtlZEluXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9GaW5kTWVMaW5rcz5cclxuXHJcbiAgICAgICAgICA8Rm9yZ2VkTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgRm9yZ2VkIGZyb20g8J+UpSDCqXt5ZWFyfXsnICd9XHJcbiAgICAgICAgICAgIDxGb3JnZWRMaW5rIGhyZWY9XCJodHRwczovL3d3dy5uaWRyYXRlY2guY29tL1wiPk5pZHJhdGVjaCBMdGQuPC9Gb3JnZWRMaW5rPlxyXG4gICAgICAgICAgPC9Gb3JnZWRMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3R5bGVkRm9vdGVyPlxyXG4gICAgICA8L01haW5MYXlvdXRDb250YWluZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEZvbnRBd2Vzb21lSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG5gO1xyXG5jb25zdCBGaW5kTWVUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tcmlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuYDtcclxuY29uc3QgTWFpbkxheW91dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuYDtcclxuY29uc3QgU3R5bGVkTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubmF2QmFySGVpZ2h0fTtcclxuYDtcclxuY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5sYXJnZX07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuY29uc3QgRm9yZ2VkTGluayA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5uaWRyYXRlY2h9O1xyXG5cclxuICA6aG92ZXIsXHJcbiAgOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMubmlkcmF0ZWNoKX07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGaW5kTWVMaW5rcyA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAwIDIwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcblxyXG4gICAgOmZvY3VzLFxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuY29uc3QgRm9yZ2VkTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=