webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_Projects_egorphilippov_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styles */ "./styles/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fontsource/roboto */ "./node_modules/@fontsource/roboto/index.css");
/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto__WEBPACK_IMPORTED_MODULE_16__);




var _jsxFileName = "F:\\Projects\\egorphilippov\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_Projects_egorphilippov_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["config"].autoAddCss = false;



const year = new Date().getFullYear();
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', () => {
  react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].pageview("".concat(window.location.pathname).concat(window.location.search));
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].initialize("UA-70441070-1");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: styles__WEBPACK_IMPORTED_MODULE_14__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_12__["DefaultSeo"], {
      openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [{
          url: 'https://www.egorphilippov.me/images/logo-xl.jpg',
          width: 496,
          height: 496
        }]
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "msapplication-TileColor",
        content: "#1d7eb1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#ffffff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "author",
        content: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styles__WEBPACK_IMPORTED_MODULE_14__["GlobalStyles"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MainLayoutContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components__WEBPACK_IMPORTED_MODULE_15__["Navbar"], {
        isNavbarOpen: isNavbarOpen,
        setIsNavbarOpen: setIsNavbarOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledMain, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_page_transitions__WEBPACK_IMPORTED_MODULE_7__["PageTransition"], {
          timeout: 200,
          classNames: "page-transition",
          skipInitialTransition: true,
          children: /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            key: router.route,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledFooter, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(FindMeLinks, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(FindMeText, {
            children: "- Find me on"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://github.com/lone-cloud",
            rel: "noreferrer",
            target: "_blank",
            "aria-label": "GitHub",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGithub"],
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "https://ca.linkedin.com/in/egor-philippov-1482207b",
            rel: "noreferrer",
            target: "_blank",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledFontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faLinkedin"],
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ForgedLinkContainer, {
          children: ["Forged from \uD83D\uDD25 \xA9", year, ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ForgedLink, {
            href: "https://www.nidratech.com/",
            children: "Nidratech Ltd."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

_s(App, "qE0K9qoaDK11e4TxVHADv/OTtNk=");

_c = App;
const StyledFontAwesomeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"]).withConfig({
  displayName: "_app__StyledFontAwesomeIcon",
  componentId: "sc-1fdije6-0"
})(["padding:0 0.5rem;"]);
_c2 = StyledFontAwesomeIcon;
const FindMeText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "_app__FindMeText",
  componentId: "sc-1fdije6-1"
})(["text-transform:uppercase;margin-right:", ";font-weight:600;font-size:0.9em;"], ({
  theme
}) => theme.spacing.medium);
_c3 = FindMeText;
const MainLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "_app__MainLayoutContainer",
  componentId: "sc-1fdije6-2"
})(["display:grid;grid-template-rows:1fr min-content;min-height:100vh;"]);
_c4 = MainLayoutContainer;
const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "_app__StyledMain",
  componentId: "sc-1fdije6-3"
})(["padding-top:", ";"], ({
  theme
}) => theme.spacing.navBarHeight);
_c5 = StyledMain;
const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer.withConfig({
  displayName: "_app__StyledFooter",
  componentId: "sc-1fdije6-4"
})(["display:flex;justify-content:center;padding:", ";flex-direction:column;"], ({
  theme
}) => theme.spacing.large);
_c6 = StyledFooter;
const ForgedLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "_app__ForgedLink",
  componentId: "sc-1fdije6-5"
})(["color:", ";:hover,:focus{color:", ";}"], ({
  theme
}) => theme.colors.nidratech, ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_10__["darken"])(0.05, theme.colors.nidratech));
_c7 = ForgedLink;
const FindMeLinks = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "_app__FindMeLinks",
  componentId: "sc-1fdije6-6"
})(["align-self:flex-end;margin:0 20vw;display:flex;align-items:center;a{color:", ";transition:all 200ms;:focus,:hover{color:", ";}}@media (max-width:", "){margin:0;}"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_10__["darken"])(0.05, theme.colors.brand), ({
  theme
}) => theme.breakpoints.mobile);
_c8 = FindMeLinks;
const ForgedLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiY29uZmlnIiwiYXV0b0FkZENzcyIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIlJlYWN0R0EiLCJwYWdldmlldyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxpemUiLCJwcm9jZXNzIiwidGhlbWUiLCJ0eXBlIiwibG9jYWxlIiwiaW1hZ2VzIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJyb3V0ZSIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsIlN0eWxlZEZvbnRBd2Vzb21lSWNvbiIsInN0eWxlZCIsIkZvbnRBd2Vzb21lSWNvbiIsIkZpbmRNZVRleHQiLCJzcGFuIiwic3BhY2luZyIsIm1lZGl1bSIsIk1haW5MYXlvdXRDb250YWluZXIiLCJkaXYiLCJTdHlsZWRNYWluIiwibWFpbiIsIm5hdkJhckhlaWdodCIsIlN0eWxlZEZvb3RlciIsImZvb3RlciIsImxhcmdlIiwiRm9yZ2VkTGluayIsImEiLCJjb2xvcnMiLCJuaWRyYXRlY2giLCJkYXJrZW4iLCJGaW5kTWVMaW5rcyIsImJsYWNrIiwiYnJhbmQiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsIkZvcmdlZExpbmtDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEseUVBQU0sQ0FBQ0MsVUFBUCxHQUFvQixLQUFwQjtBQUVBO0FBQ0E7QUFFQTtBQUVBLE1BQU1DLElBQUks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eURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSwwS0FPSixDQUFDO0FBQUVsQjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDMkIsTUFBTixDQUFhSSxLQVB4QixFQVlGLENBQUM7QUFBRS9CO0FBQUYsQ0FBRCxLQUFlNkIsd0RBQU0sQ0FBQyxJQUFELEVBQU83QixLQUFLLENBQUMyQixNQUFOLENBQWFLLEtBQXBCLENBWm5CLEVBZ0JNLENBQUM7QUFBRWhDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpQyxXQUFOLENBQWtCQyxNQWhCdkMsQ0FBakI7TUFBTUosVztBQW9CTixNQUFNSyxtQkFBbUIsR0FBR3hCLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQXpCO01BQU1pQixtQjtBQUtTN0Msa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZDdjYzlmYjQyMzRlMGUxNjkzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcclxuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcblxyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJztcclxuXHJcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIHRoZW1lIH0gZnJvbSAnc3R5bGVzJztcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90byc7XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICBSZWFjdEdBLnBhZ2V2aWV3KGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCk7XHJcbn0pO1xyXG5cclxuY29uc3QgQXBwOiBOZXh0UGFnZTxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEIGFzIHN0cmluZyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPERlZmF1bHRTZW9cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgICAgICAgIGxvY2FsZTogJ2VuX1VTJyxcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZWdvcnBoaWxpcHBvdi5tZS9pbWFnZXMvbG9nby14bC5qcGcnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA0OTYsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OTYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RWdvciBQaGlsaXBwb3Y8L3RpdGxlPlxyXG5cclxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzFkN2ViMVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRWdvciBQaGlsaXBwb3ZcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuXHJcbiAgICAgIDxNYWluTGF5b3V0Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxyXG5cclxuICAgICAgICA8U3R5bGVkTWFpbj5cclxuICAgICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIiBza2lwSW5pdGlhbFRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxyXG4gICAgICAgIDwvU3R5bGVkTWFpbj5cclxuXHJcbiAgICAgICAgPFN0eWxlZEZvb3Rlcj5cclxuICAgICAgICAgIDxGaW5kTWVMaW5rcz5cclxuICAgICAgICAgICAgPEZpbmRNZVRleHQ+LSBGaW5kIG1lIG9uPC9GaW5kTWVUZXh0PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xvbmUtY2xvdWRcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdpdEh1YlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NhLmxpbmtlZGluLmNvbS9pbi9lZ29yLXBoaWxpcHBvdi0xNDgyMjA3YlwiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0ZpbmRNZUxpbmtzPlxyXG5cclxuICAgICAgICAgIDxGb3JnZWRMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBGb3JnZWQgZnJvbSDwn5SlIMKpe3llYXJ9eycgJ31cclxuICAgICAgICAgICAgPEZvcmdlZExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm5pZHJhdGVjaC5jb20vXCI+TmlkcmF0ZWNoIEx0ZC48L0ZvcmdlZExpbms+XHJcbiAgICAgICAgICA8L0ZvcmdlZExpbmtDb250YWluZXI+XHJcbiAgICAgICAgPC9TdHlsZWRGb290ZXI+XHJcbiAgICAgIDwvTWFpbkxheW91dENvbnRhaW5lcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRm9udEF3ZXNvbWVJY29uID0gc3R5bGVkKEZvbnRBd2Vzb21lSWNvbilgXHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbmA7XHJcbmNvbnN0IEZpbmRNZVRleHQgPSBzdHlsZWQuc3BhbmBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG5gO1xyXG5jb25zdCBNYWluTGF5b3V0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLm1haW5gXHJcbiAgcGFkZGluZy10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm5pZHJhdGVjaH07XHJcblxyXG4gIDpob3ZlcixcclxuICA6Zm9jdXMge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy5uaWRyYXRlY2gpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZpbmRNZUxpbmtzID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDAgMjB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuXHJcbiAgICA6Zm9jdXMsXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLmJyYW5kKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==