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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvQ29sbGFwc2VNZW51LnRzeCJdLCJuYW1lcyI6WyJDb2xsYXBzZU1lbnUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJwYXRobmFtZSIsInVzZVJvdXRlciIsInJlZiIsInVzZVJlZiIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsImZyb20iLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJlbnRlciIsImxlYXZlIiwidXNlRWZmZWN0IiwibWVudVRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJpdGVtIiwia2V5IiwicHJvcHMiLCJOYXZJdGVtIiwic3R5bGVkIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJDb2xsYXBzZVdyYXBwZXIiLCJhbmltYXRlZCIsIndoaXRlIiwiTmF2TGlua3MiLCJicmVha3BvaW50cyIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxjQUFGO0FBQWdCQztBQUFoQixDQUFELEtBQTJEO0FBQUE7O0FBQzlFLFFBQU07QUFBRUM7QUFBRixNQUFlQyxzREFBUyxFQUE5QjtBQUNBLFFBQU1DLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsUUFBTUMsV0FBVyxHQUFHQywyREFBYSxDQUFDUCxZQUFELEVBQWUsSUFBZixFQUFxQjtBQUNwRFEsUUFBSSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxV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O01BQU1GLGU7QUFRTixNQUFNRyxRQUFRLEdBQUdaLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDRKQVVTLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsTUFWMUMsQ0FBZDtNQUFNRixRO0FBZU4sK0RBQWUxQyxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjlhN2U1MjFmMmIzMWM5ODc1NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiwgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDb2xsYXBzZU1lbnUgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihpc05hdmJhck9wZW4sIG51bGwsIHtcclxuICAgIGZyb206IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIG9wYWNpdHk6IDAgfSxcclxuICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUnKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXNOYXZiYXJPcGVuICYmXHJcbiAgICAgICAgIXJlZj8uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgIW1lbnVUb2dnbGU/LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SXNOYXZiYXJPcGVuKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGlzTmF2YmFyT3Blbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RyYW5zaXRpb25zLm1hcChcclxuICAgICAgICAoeyBpdGVtLCBrZXksIHByb3BzIH0pID0+XHJcbiAgICAgICAgICBpdGVtICYmIChcclxuICAgICAgICAgICAgPENvbGxhcHNlV3JhcHBlciByZWY9e3JlZn0ga2V5PXtrZXl9IHN0eWxlPXtwcm9wc30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Jsb2cnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQmxvZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2Jsb2cnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmVzdW1lJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1Jlc3Vtw6knfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9yZXN1bWUnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlc3Vtw6lcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydDb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L05hdkxpbmtzPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlV3JhcHBlcj5cclxuICAgICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+XHJcbiAgICAgIGRhcmtlbigwLjA1LCBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb2xsYXBzZVdyYXBwZXIgPSBzdHlsZWQoYW5pbWF0ZWQuZGl2KWBcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMud2hpdGUpfTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0LjVyZW07XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZU1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=