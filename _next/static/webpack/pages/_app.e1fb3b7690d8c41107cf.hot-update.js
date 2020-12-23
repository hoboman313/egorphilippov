self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/navbar/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BurgerMenu */ "./components/navbar/BurgerMenu.tsx");
/* harmony import */ var _CollapseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollapseMenu */ "./components/navbar/CollapseMenu.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\Projects\\egorphilippov\\components\\navbar\\Navbar.tsx",
    _s = $RefreshSig$();







function Navbar(_ref) {
  _s();

  var isNavbarOpen = _ref.isNavbarOpen,
      setIsNavbarOpen = _ref.setIsNavbarOpen;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      pathname = _useRouter.pathname;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: '/',
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
            as: "a",
            "aria-label": 'Site cloud logo',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImgLogo, {
              src: "images/logo.jpg",
              alt: "Site cloud logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLinks, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Home',
                isActive: pathname === '/',
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/blog',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Blog',
                isActive: pathname === '/blog',
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/resume',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Resumé',
                isActive: pathname === '/resume',
                children: "Resum\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/contact',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Contact us',
                isActive: pathname === '/contact',
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BurgerWrapper, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BurgerMenu__WEBPACK_IMPORTED_MODULE_3__.default, {
            isNavbarOpen: isNavbarOpen,
            setIsNavbarOpen: setIsNavbarOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CollapseMenu__WEBPACK_IMPORTED_MODULE_4__.default, {
      isNavbarOpen: isNavbarOpen,
      setIsNavbarOpen: setIsNavbarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Navbar, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Navbar;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.a.withConfig({
  displayName: "Navbar__NavItem",
  componentId: "sc-16v7ten-0"
})(["display:flex;padding:0 ", ";color:", ";align-items:center;:hover{color:", ";}@media (max-width:", "){padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive,
      theme = _ref3.theme;
  return isActive ? theme.colors.brand : theme.colors.grey;
}, function (_ref4) {
  var isActive = _ref4.isActive,
      theme = _ref4.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, isActive ? theme.colors.brand : theme.colors.grey);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.mobile;
});
_c2 = NavItem;
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.nav.withConfig({
  displayName: "Navbar__NavBar",
  componentId: "sc-16v7ten-1"
})(["position:fixed;width:100%;top:0;left:0;z-index:1;"]);
_c3 = NavBar;
var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Navbar__FlexContainer",
  componentId: "sc-16v7ten-2"
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:", "){padding:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.navBarHeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.breakpoints.mobile;
}, function (_ref10) {
  var theme = _ref10.theme;
  return "0 ".concat(theme.spacing.small);
});
_c4 = FlexContainer;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.ul.withConfig({
  displayName: "Navbar__NavLinks",
  componentId: "sc-16v7ten-3"
})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;a{text-decoration:none;}@media (max-width:", "){display:none;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakpoints.mobile;
});
_c5 = NavLinks;
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Navbar__BurgerWrapper",
  componentId: "sc-16v7ten-4"
})(["margin:auto 0;@media (min-width:", "){display:none;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.mobile;
});
_c6 = BurgerWrapper;
var ImgLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.img.withConfig({
  displayName: "Navbar__ImgLogo",
  componentId: "sc-16v7ten-5"
})(["width:3.75rem;height:3.75rem;border-radius:3.75rem;border:2px solid #fff;transition-duration:0.3s;:focus,:hover{transform:scale(1.05);}"]);
_c7 = ImgLogo;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "FlexContainer");
$RefreshReg$(_c5, "NavLinks");
$RefreshReg$(_c6, "BurgerWrapper");
$RefreshReg$(_c7, "ImgLogo");

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
  var data = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["  \n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n  html, body {\n    font-family: 'Roboto', sans-serif;\n  }\n  a {\n      color: ", ";\n\n      :focus, :hover {\n        color: ", ";\n      }\n  }\n  .page-transition-enter {\n    opacity: 0;\n  }\n  .page-transition-enter-active {\n    opacity: 1;\n    transition: opacity 200ms;\n  }\n  .page-transition-exit {\n    opacity: 1;\n  }\n  .page-transition-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(_templateObject(), styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND, (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, styles_theme__WEBPACK_IMPORTED_MODULE_5__.COLOR_BRAND));
_c = GlobalStyle;

var GlobalStyles = function GlobalStyles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(styled_reset__WEBPACK_IMPORTED_MODULE_3__.Reset, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0dsb2JhbFN0eWxlcy50c3giXSwibmFtZXMiOlsiTmF2YmFyIiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJOYXZJdGVtIiwic3R5bGVkIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJicmVha3BvaW50cyIsIm1vYmlsZSIsIk5hdkJhciIsIkZsZXhDb250YWluZXIiLCJuYXZCYXJIZWlnaHQiLCJ3aGl0ZSIsInNtYWxsIiwiTmF2TGlua3MiLCJCdXJnZXJXcmFwcGVyIiwiSW1nTG9nbyIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDT0xPUl9CUkFORCIsIkdsb2JhbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPTyxTQUFTQSxNQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBckRDLFlBQXFELFFBQXJEQSxZQUFxRDtBQUFBLE1BQXZDQyxlQUF1QyxRQUF2Q0EsZUFBdUM7O0FBQUEsbUJBQ3ZEQyxzREFBUyxFQUQ4QztBQUFBLE1BQ3BFQyxRQURvRSxjQUNwRUEsUUFEb0U7O0FBRzVFLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsTUFBRDtBQUFBLDZCQUNFLDhEQUFDLGFBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRSxHQUFaO0FBQWlCLGtCQUFRLE1BQXpCO0FBQUEsaUNBQ0UsOERBQUMsT0FBRDtBQUFTLGNBQUUsRUFBQyxHQUFaO0FBQWdCLDBCQUFZLGlCQUE1QjtBQUFBLG1DQUNFLDhEQUFDLE9BQUQ7QUFBUyxpQkFBRyxFQUFDLGlCQUFi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LENBWFQsQ0FBZDtNQUFNTSxRO0FBZU4sSUFBTUMsYUFBYSxHQUFHakIscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBR0k7QUFBQSxNQUFHQyxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLE1BQWpDO0FBQUEsQ0FISixDQUFuQjtNQUFNTyxhO0FBT04sSUFBTUMsT0FBTyxHQUFHbEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0lBQWI7TUFBTWtCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SE47QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1DLFdBQVcsR0FBR0Msb0VBQUgsb0JBUVRDLHFEQVJTLEVBV1BiLGdEQUFNLENBQUMsSUFBRCxFQUFPYSxxREFBUCxDQVhDLENBQWpCO0tBQU1GLFc7O0FBOEJiLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsc0JBQ25CO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEbUI7QUFBQSxDQUFyQjs7TUFBTUEsWTtBQU9OLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTFmYjNiNzY5MGQ4YzQxMTA3Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJy4vQnVyZ2VyTWVudSc7XHJcbmltcG9ydCBDb2xsYXBzZU1lbnUgZnJvbSAnLi9Db2xsYXBzZU1lbnUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc05hdmJhck9wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNOYXZiYXJPcGVuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgPEZsZXhDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiBhcmlhLWxhYmVsPXsnU2l0ZSBjbG91ZCBsb2dvJ30+XHJcbiAgICAgICAgICAgICAgPEltZ0xvZ28gc3JjPVwiaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiU2l0ZSBjbG91ZCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxOYXZMaW5rcz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0hvbWUnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ30+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Jsb2cnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQmxvZyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9ibG9nJ30+XHJcbiAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Jlc3VtZSd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydSZXN1bcOpJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Jlc3VtZSd9PlxyXG4gICAgICAgICAgICAgICAgICBSZXN1bcOpXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0NvbnRhY3QgdXMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9PlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rcz5cclxuXHJcbiAgICAgICAgICA8QnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICAgICAgPEJ1cmdlck1lbnUgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxyXG4gICAgICAgICAgPC9CdXJnZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvRmxleENvbnRhaW5lcj5cclxuICAgICAgPC9OYXZCYXI+XHJcblxyXG4gICAgICA8Q29sbGFwc2VNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEJ1cmdlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0byAwO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgSW1nTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDMuNzVyZW07XHJcbiAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMuNzVyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cclxuICA6Zm9jdXMsXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUmVzZXQgfSBmcm9tICdzdHlsZWQtcmVzZXQnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5pbXBvcnQgeyBDT0xPUl9CUkFORCB9IGZyb20gJ3N0eWxlcy90aGVtZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWAgIFxyXG4gICNfX25leHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBodG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgYSB7XHJcbiAgICAgIGNvbG9yOiAke0NPTE9SX0JSQU5EfTtcclxuXHJcbiAgICAgIDpmb2N1cywgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHtkYXJrZW4oMC4wNSwgQ09MT1JfQlJBTkQpfTtcclxuICAgICAgfVxyXG4gIH1cclxuICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIH1cclxuICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDw+XHJcbiAgICA8UmVzZXQgLz5cclxuICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9