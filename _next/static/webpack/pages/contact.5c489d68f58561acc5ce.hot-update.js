webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Navbar/CollapseMenu.tsx":
/*!********************************************!*\
  !*** ./components/Navbar/CollapseMenu.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "F:\\Projects\\egorphilippov\\components\\Navbar\\CollapseMenu.tsx",
    _s = $RefreshSig$();








const CollapseMenu = ({
  isNavbarOpen,
  setIsNavbarOpen
}) => {
  _s();

  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const transition = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"])(isNavbarOpen, {
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const menuToggle = document.querySelector('#menu-toggle');

    const handleClickOutside = event => {
      if (isNavbarOpen && !(ref !== null && ref !== void 0 && ref.current.contains(event.target)) && !(menuToggle !== null && menuToggle !== void 0 && menuToggle.contains(event.target))) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isNavbarOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: transition((style, item) => item &&
    /*#__PURE__*/
    // @ts-ignore TODO: weird style typing?
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapseWrapper, {
      ref: ref,
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLinks, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Home',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/',
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/blog',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Blog',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/blog',
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/resume',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Resumé',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/resume',
              children: "Resum\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/contact',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Contact',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/contact',
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

_s(CollapseMenu, "LD3uMfEetldYDiHdDgDsBjOnvOU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"]];
});

_c = CollapseMenu;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "CollapseMenu__NavItem",
  componentId: "sc-1e4kg4n-0"
})(["display:flex;padding:0 ", ";color:", ";justify-content:center;min-width:10vw;:hover{color:", ";}"], ({
  theme
}) => theme.spacing.medium, ({
  isActive,
  theme
}) => isActive ? theme.colors.brand : theme.colors.grey, ({
  isActive,
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.05, isActive ? theme.colors.brand : theme.colors.grey));
_c2 = NavItem;
const CollapseWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div).withConfig({
  displayName: "CollapseMenu__CollapseWrapper",
  componentId: "sc-1e4kg4n-1"
})(["background:", ";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"], ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.05, theme.colors.white));
_c3 = CollapseWrapper;
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "CollapseMenu__NavLinks",
  componentId: "sc-1e4kg4n-2"
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;min-width:10vw;a{text-decoration:none;}@media (min-width:", "){display:none;}"], ({
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvQ29sbGFwc2VNZW51LnRzeCJdLCJuYW1lcyI6WyJDb2xsYXBzZU1lbnUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJwYXRobmFtZSIsInVzZVJvdXRlciIsInJlZiIsInVzZVJlZiIsInRyYW5zaXRpb24iLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsInBvc2l0aW9uIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJ1c2VFZmZlY3QiLCJtZW51VG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiaXRlbSIsIk5hdkl0ZW0iLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJDb2xsYXBzZVdyYXBwZXIiLCJhbmltYXRlZCIsImRpdiIsIndoaXRlIiwiTmF2TGlua3MiLCJ1bCIsImJyZWFrcG9pbnRzIiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLGNBQUY7QUFBZ0JDO0FBQWhCLENBQUQsS0FBMkQ7QUFBQTs7QUFDOUUsUUFBTTtBQUFFQztBQUFGLE1BQWVDLDZEQUFTLEVBQTlCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxRQUFNQyxVQUFVLEdBQUdDLGtFQUFhLENBQUNQLFlBQUQsRUFBZTtBQUM3Q1EsUUFBSSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdC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QU1JLFFBQVEsR0FBR2QseURBQU0sQ0FBQ2UsRUFBVjtBQUFBO0FBQUE7QUFBQSwyS0FXUyxDQUFDO0FBQUViO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLFdBQU4sQ0FBa0JDLE1BWDFDLENBQWQ7TUFBTUgsUTtBQWdCUzFDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuNWM0ODlkNjhmNTg1NjFhY2M1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiwgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDb2xsYXBzZU1lbnUgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKGlzTmF2YmFyT3Blbiwge1xyXG4gICAgZnJvbTogeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogMCB9LFxyXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZScpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc05hdmJhck9wZW4gJiZcclxuICAgICAgICAhcmVmPy5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgICAhbWVudVRvZ2dsZT8uY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRJc05hdmJhck9wZW4oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH07XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW3JlZiwgaXNOYXZiYXJPcGVuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dHJhbnNpdGlvbihcclxuICAgICAgICAoc3R5bGUsIGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtICYmIChcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiB3ZWlyZCBzdHlsZSB0eXBpbmc/XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZVdyYXBwZXIgcmVmPXtyZWZ9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Jsb2cnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQmxvZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2Jsb2cnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmVzdW1lJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1Jlc3Vtw6knfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9yZXN1bWUnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlc3Vtw6lcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydDb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L05hdkxpbmtzPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlV3JhcHBlcj5cclxuICAgICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTB2dztcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29sbGFwc2VXcmFwcGVyID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLndoaXRlKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNC41cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG5gO1xyXG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtIDJyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTB2dztcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlTWVudTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==