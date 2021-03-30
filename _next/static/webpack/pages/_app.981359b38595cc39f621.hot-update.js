self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ToTopButton.tsx":
/*!************************************!*\
  !*** ./components/ToTopButton.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToTopButton": function() { return /* binding */ ToTopButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Projects\\egorphilippov\\components\\ToTopButton.tsx",
    _s = $RefreshSig$();






function ToTopButton() {
  _s();

  const {
    0: isArrowVisible,
    1: setIsArrowVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    function onScroll() {
      if (window.pageYOffset > 300) {
        return setIsArrowVisible(true);
      }

      setIsArrowVisible(false);
    }

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToTopButtonContainer, {
    isDisplayed: isArrowVisible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledFontAwesomeIcon, {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowAltCircleUp,
      "aria-label": "Scroll to top",
      "aria-role": "button",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }),
      size: "2x"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(ToTopButton, "yF+YFmZLj3Si+//RLmX9EgDsxwo=");

_c = ToTopButton;
const StyledFontAwesomeIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon).withConfig({
  displayName: "ToTopButton__StyledFontAwesomeIcon",
  componentId: "ey6y4d-0"
})(["color:", ";transition:all 200ms;:focus,:hover{color:", ";}"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => (0,polished__WEBPACK_IMPORTED_MODULE_5__.darken)(0.05, theme.colors.brand));
_c2 = StyledFontAwesomeIcon;
const ToTopButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "ToTopButton__ToTopButtonContainer",
  componentId: "ey6y4d-1"
})(["bottom:10%;right:10%;position:fixed;cursor:pointer;display:", ";@media (max-width:", "){right:5%;}"], ({
  isDisplayed
}) => isDisplayed ? 'block' : 'none', ({
  theme
}) => theme.breakpoints.mobile);
_c3 = ToTopButtonContainer;

var _c, _c2, _c3;

$RefreshReg$(_c, "ToTopButton");
$RefreshReg$(_c2, "StyledFontAwesomeIcon");
$RefreshReg$(_c3, "ToTopButtonContainer");

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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub1RvcEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIlRvVG9wQnV0dG9uIiwiaXNBcnJvd1Zpc2libGUiLCJzZXRJc0Fycm93VmlzaWJsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmYUFycm93QWx0Q2lyY2xlVXAiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiU3R5bGVkRm9udEF3ZXNvbWVJY29uIiwic3R5bGVkIiwiRm9udEF3ZXNvbWVJY29uIiwidGhlbWUiLCJjb2xvcnMiLCJibGFjayIsImRhcmtlbiIsImJyYW5kIiwiVG9Ub3BCdXR0b25Db250YWluZXIiLCJpc0Rpc3BsYXllZCIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwiY29uZmlnIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIlJvdXRlciIsIlJlYWN0R0EiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwicHJvY2VzcyIsInJvdXRlIiwiZmFHaXRodWIiLCJmYUxpbmtlZGluIiwiRmluZE1lVGV4dCIsInNwYWNpbmciLCJtZWRpdW0iLCJNYWluTGF5b3V0Q29udGFpbmVyIiwiU3R5bGVkTWFpbiIsIm5hdkJhckhlaWdodCIsIlN0eWxlZEZvb3RlciIsImxhcmdlIiwiRm9yZ2VkTGluayIsIm5pZHJhdGVjaCIsIkZpbmRNZUxpbmtzIiwiRm9yZ2VkTGlua0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTgxMzU5YjM4NTk1Y2MzOWY2MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb1RvcEJ1dHRvbigpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW2lzQXJyb3dWaXNpYmxlLCBzZXRJc0Fycm93VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIHJldHVybiBzZXRJc0Fycm93VmlzaWJsZSh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0SXNBcnJvd1Zpc2libGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb1RvcEJ1dHRvbkNvbnRhaW5lciBpc0Rpc3BsYXllZD17aXNBcnJvd1Zpc2libGV9PlxyXG4gICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgaWNvbj17ZmFBcnJvd0FsdENpcmNsZVVwfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgdG8gdG9wXCJcclxuICAgICAgICBhcmlhLXJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1RvVG9wQnV0dG9uQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEZvbnRBd2Vzb21lSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG5cclxuICA6Zm9jdXMsXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFRvVG9wQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGlzRGlzcGxheWVkPzogYm9vbGVhbiB9PmBcclxuICBib3R0b206IDEwJTtcclxuICByaWdodDogMTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogJHsoeyBpc0Rpc3BsYXllZCB9KSA9PiAoaXNEaXNwbGF5ZWQgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIHJpZ2h0OiA1JTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSAnbmV4dC1wYWdlLXRyYW5zaXRpb25zJztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFHaXRodWIsIGZhTGlua2VkaW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJztcclxuXHJcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIHRoZW1lIH0gZnJvbSAnc3R5bGVzJztcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90byc7XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICBSZWFjdEdBLnBhZ2V2aWV3KGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCk7XHJcbn0pO1xyXG5cclxuY29uc3QgQXBwOiBOZXh0UGFnZTxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEIGFzIHN0cmluZyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkVnb3IgUGhpbGlwcG92PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIHBlcnNvbmFsIHNpdGUgb2YgRWdvciBQaGlsaXBwb3YuXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiRWdvcixQaGlsaXBwb3ZcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRWdvciBQaGlsaXBwb3ZcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuXHJcbiAgICAgIDxNYWluTGF5b3V0Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxyXG5cclxuICAgICAgICA8U3R5bGVkTWFpbj5cclxuICAgICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIiBza2lwSW5pdGlhbFRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxyXG4gICAgICAgIDwvU3R5bGVkTWFpbj5cclxuXHJcbiAgICAgICAgPFN0eWxlZEZvb3Rlcj5cclxuICAgICAgICAgIDxGaW5kTWVMaW5rcz5cclxuICAgICAgICAgICAgPEZpbmRNZVRleHQ+LSBGaW5kIG1lIG9uPC9GaW5kTWVUZXh0PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xvbmUtY2xvdWRcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdpdEh1YlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NhLmxpbmtlZGluLmNvbS9pbi9lZ29yLXBoaWxpcHBvdi0xNDgyMjA3YlwiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0ZpbmRNZUxpbmtzPlxyXG5cclxuICAgICAgICAgIDxGb3JnZWRMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBGb3JnZWQgZnJvbSDwn5SlIMKpe3llYXJ9eycgJ31cclxuICAgICAgICAgICAgPEZvcmdlZExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm5pZHJhdGVjaC5jb20vXCI+TmlkcmF0ZWNoIEx0ZC48L0ZvcmdlZExpbms+XHJcbiAgICAgICAgICA8L0ZvcmdlZExpbmtDb250YWluZXI+XHJcbiAgICAgICAgPC9TdHlsZWRGb290ZXI+XHJcbiAgICAgIDwvTWFpbkxheW91dENvbnRhaW5lcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRm9udEF3ZXNvbWVJY29uID0gc3R5bGVkKEZvbnRBd2Vzb21lSWNvbilgXHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbmA7XHJcbmNvbnN0IEZpbmRNZVRleHQgPSBzdHlsZWQuc3BhbmBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG5gO1xyXG5jb25zdCBNYWluTGF5b3V0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLm1haW5gXHJcbiAgcGFkZGluZy10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm5pZHJhdGVjaH07XHJcblxyXG4gIDpob3ZlcixcclxuICA6Zm9jdXMge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy5uaWRyYXRlY2gpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZpbmRNZUxpbmtzID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDAgMjB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuXHJcbiAgICA6Zm9jdXMsXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLmJyYW5kKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGb3JnZWRMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==