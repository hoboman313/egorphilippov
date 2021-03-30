self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/CollapseMenu.tsx":
/*!********************************************!*\
  !*** ./components/Navbar/CollapseMenu.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\Projects\\egorphilippov\\components\\Navbar\\CollapseMenu.tsx",
    _s = $RefreshSig$();








const CollapseMenu = ({
  isNavbarOpen,
  setIsNavbarOpen
}) => {
  _s();

  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const transitions = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(isNavbarOpen, null, {
    from: {
      position: 'absolute',
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const menuToggle = document.querySelector('#menu-toggle');

    const handleClickOutside = event => {
      if (isNavbarOpen && !(ref !== null && ref !== void 0 && ref.current.contains(event.target)) && !(menuToggle !== null && menuToggle !== void 0 && menuToggle.contains(event.target))) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isNavbarOpen]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: transitions.map(({
      item,
      key,
      props
    }) => item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CollapseWrapper, {
      ref: ref,
      style: props,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLinks, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: '/',
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
              as: "a",
              title: 'Home',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/',
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: '/blog',
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
              as: "a",
              title: 'Blog',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/blog',
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: '/resume',
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
              as: "a",
              title: 'Resumé',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/resume',
              children: "Resum\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: '/contact',
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
              as: "a",
              title: 'Contact',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/contact',
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }, undefined)
    }, key, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

_s(CollapseMenu, "gznphj1tPpBDQ48cD3NH19CnC3Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition];
});

_c = CollapseMenu;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.a.withConfig({
  displayName: "CollapseMenu__NavItem",
  componentId: "sc-1e4kg4n-0"
})(["display:flex;padding:0 ", ";color:", ";:hover{color:", ";}"], ({
  theme
}) => theme.spacing.medium, ({
  isActive,
  theme
}) => isActive ? theme.colors.brand : theme.colors.grey, ({
  isActive,
  theme
}) => (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, isActive ? theme.colors.brand : theme.colors.grey));
_c2 = NavItem;
const CollapseWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div).withConfig({
  displayName: "CollapseMenu__CollapseWrapper",
  componentId: "sc-1e4kg4n-1"
})(["background:", ";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"], ({
  theme
}) => (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, theme.colors.white));
_c3 = CollapseWrapper;
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.ul.withConfig({
  displayName: "CollapseMenu__NavLinks",
  componentId: "sc-1e4kg4n-2"
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;a{text-decoration:none;}@media (min-width:", "){display:none;}"], ({
  theme
}) => theme.breakpoints.mobile);
_c4 = NavLinks;
/* harmony default export */ __webpack_exports__["default"] = (CollapseMenu);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "CollapseMenu");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "CollapseWrapper");
$RefreshReg$(_c4, "NavLinks");

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
        name: "author",
        content: "Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styles__WEBPACK_IMPORTED_MODULE_12__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MainLayoutContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_13__.Navbar, {
        isNavbarOpen: isNavbarOpen,
        setIsNavbarOpen: setIsNavbarOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
              lineNumber: 50,
              columnNumber: 13
            }
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeLinks, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FindMeText, {
            children: "- Find me on"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
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
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLinkContainer, {
          children: ["Forged from \uD83D\uDD25 \xA9", year, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ForgedLink, {
            href: "https://www.nidratech.com/",
            children: "Nidratech Ltd."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvQ29sbGFwc2VNZW51LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQ29sbGFwc2VNZW51IiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwicGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJyZWYiLCJ1c2VSZWYiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJmcm9tIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiZW50ZXIiLCJsZWF2ZSIsInVzZUVmZmVjdCIsIm1lbnVUb2dnbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaXRlbSIsImtleSIsInByb3BzIiwiTmF2SXRlbSIsInN0eWxlZCIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiQ29sbGFwc2VXcmFwcGVyIiwiYW5pbWF0ZWQiLCJ3aGl0ZSIsIk5hdkxpbmtzIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJjb25maWciLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiUm91dGVyIiwiUmVhY3RHQSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJwcm9jZXNzIiwicm91dGUiLCJmYUdpdGh1YiIsImZhTGlua2VkaW4iLCJTdHlsZWRGb250QXdlc29tZUljb24iLCJGb250QXdlc29tZUljb24iLCJGaW5kTWVUZXh0IiwiTWFpbkxheW91dENvbnRhaW5lciIsIlN0eWxlZE1haW4iLCJuYXZCYXJIZWlnaHQiLCJTdHlsZWRGb290ZXIiLCJsYXJnZSIsIkZvcmdlZExpbmsiLCJuaWRyYXRlY2giLCJGaW5kTWVMaW5rcyIsImJsYWNrIiwiRm9yZ2VkTGlua0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxjQUFGO0FBQWdCQztBQUFoQixDQUFELEtBQTJEO0FBQUE7O0FBQzlFLFFBQU07QUFBRUM7QUFBRixNQUFlQyxzREFBUyxFQUE5QjtBQUNBLFFBQU1DLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsUUFBTUMsV0FBVyxHQUFHQywyREFBYSxDQUFDUCxZQUFELEVBQWUsSUFBZixFQUFxQjtBQUNwRFEsUUFBSSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdCQyxhQUFPLEVBQUU7QUFBakMsS0FEOEM7QUFFcERDLFNBQUssRUFBRTtBQUFFRCxhQUFPLEVBQUU7QUFBWCxLQUY2QztBQUdwREUsU0FBSyxFQUFFO0FBQUVGLGFBQU8sRUFBRTtBQUFYO0FBSDZDLEdBQXJCLENBQWpDO0FBTUFHLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5COztBQUNBLFVBQU1DLGtCQUFrQixHQUFJQyxLQUFELElBQVc7QUFDcEMsVUFDRWxCLFlBQVksSUFDWixFQUFDSSxHQUFELGFBQUNBLEdBQUQsZUFBQ0EsR0FBRyxDQUFFZSxPQUFMLENBQWFDLFFBQWIsQ0FBc0JGLEtBQUssQ0FBQ0csTUFBNUIsQ0FBRCxDQURBLElBRUEsRUFBQ1AsVUFBRCxhQUFDQSxVQUFELGVBQUNBLFVBQVUsQ0FBRU0sUUFBWixDQUFxQkYsS0FBSyxDQUFDRyxNQUEzQixDQUFELENBSEYsRUFJRTtBQUNBcEIsdUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRDtBQUNGLEtBUkQ7O0FB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QXBCLENBWm5CLEVBZ0JNLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsTUFoQnZDLENBQWpCO01BQU02QixXO0FBb0JOLE1BQU1FLG1CQUFtQixHQUFHN0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsMENBQXpCO01BQU02QyxtQjtBQUtOLCtEQUFlckIsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlNjBmMmNhM2Y4YmM4YWM0OWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzTmF2YmFyT3BlbjogYm9vbGVhbjtcclxuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ29sbGFwc2VNZW51ID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oaXNOYXZiYXJPcGVuLCBudWxsLCB7XHJcbiAgICBmcm9tOiB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBlbnRlcjogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBsZWF2ZTogeyBvcGFjaXR5OiAwIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlzTmF2YmFyT3BlbiAmJlxyXG4gICAgICAgICFyZWY/LmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICFtZW51VG9nZ2xlPy5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldElzTmF2YmFyT3BlbihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBpc05hdmJhck9wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0cmFuc2l0aW9ucy5tYXAoXHJcbiAgICAgICAgKHsgaXRlbSwga2V5LCBwcm9wcyB9KSA9PlxyXG4gICAgICAgICAgaXRlbSAmJiAoXHJcbiAgICAgICAgICAgIDxDb2xsYXBzZVdyYXBwZXIgcmVmPXtyZWZ9IGtleT17a2V5fSBzdHlsZT17cHJvcHN9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rcz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnSG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9ibG9nJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0Jsb2cnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9ibG9nJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Jlc3VtZSd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydSZXN1bcOpJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcmVzdW1lJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZXN1bcOpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NvbnRhY3QnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQ29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rcz5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZVdyYXBwZXI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29sbGFwc2VXcmFwcGVyID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLndoaXRlKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNC41cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG5gO1xyXG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtIDJyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhR2l0aHViLCBmYUxpbmtlZGluIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7XHJcblxyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzLCB0aGVtZSB9IGZyb20gJ3N0eWxlcyc7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8nO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgUmVhY3RHQS5wYWdldmlldyhgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWApO1xyXG59KTtcclxuXHJcbmNvbnN0IEFwcDogTmV4dFBhZ2U8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCBhcyBzdHJpbmcpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FZ29yIFBoaWxpcHBvdjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJFZ29yIFBoaWxpcHBvdlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG5cclxuICAgICAgPE1haW5MYXlvdXRDb250YWluZXI+XHJcbiAgICAgICAgPE5hdmJhciBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcblxyXG4gICAgICAgIDxTdHlsZWRNYWluPlxyXG4gICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezIwMH0gY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiIHNraXBJbml0aWFsVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgPC9TdHlsZWRNYWluPlxyXG5cclxuICAgICAgICA8U3R5bGVkRm9vdGVyPlxyXG4gICAgICAgICAgPEZpbmRNZUxpbmtzPlxyXG4gICAgICAgICAgICA8RmluZE1lVGV4dD4tIEZpbmQgbWUgb248L0ZpbmRNZVRleHQ+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbG9uZS1jbG91ZFwiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2l0SHViXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IHNpemU9XCIyeFwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2EubGlua2VkaW4uY29tL2luL2Vnb3ItcGhpbGlwcG92LTE0ODIyMDdiXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rZWRJblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkRm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IHNpemU9XCIyeFwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvRmluZE1lTGlua3M+XHJcblxyXG4gICAgICAgICAgPEZvcmdlZExpbmtDb250YWluZXI+XHJcbiAgICAgICAgICAgIEZvcmdlZCBmcm9tIPCflKUgwql7eWVhcn17JyAnfVxyXG4gICAgICAgICAgICA8Rm9yZ2VkTGluayBocmVmPVwiaHR0cHM6Ly93d3cubmlkcmF0ZWNoLmNvbS9cIj5OaWRyYXRlY2ggTHRkLjwvRm9yZ2VkTGluaz5cclxuICAgICAgICAgIDwvRm9yZ2VkTGlua0NvbnRhaW5lcj5cclxuICAgICAgICA8L1N0eWxlZEZvb3Rlcj5cclxuICAgICAgPC9NYWluTGF5b3V0Q29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRGb250QXdlc29tZUljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuYDtcclxuY29uc3QgRmluZE1lVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbmA7XHJcbmNvbnN0IE1haW5MYXlvdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZE1haW4gPSBzdHlsZWQubWFpbmBcclxuICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubGFyZ2V9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmNvbnN0IEZvcmdlZExpbmsgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubmlkcmF0ZWNofTtcclxuXHJcbiAgOmhvdmVyLFxyXG4gIDpmb2N1cyB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLm5pZHJhdGVjaCl9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgRmluZE1lTGlua3MgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMCAyMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG5cclxuICAgIDpmb2N1cyxcclxuICAgIDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZvcmdlZExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9