self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/Container.tsx");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./components/Button.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Projects\\egorphilippov\\pages\\contact.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Contact = function Contact() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var isSubmitEnabled = email.length > 2 && message.length > 2;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Contact | Egor Philippov"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactForm, {
      action: "https://formspree.io/philippovegor@gmail.com",
      method: "POST",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormLabel, {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmailInput, {
          id: "email",
          name: "email",
          type: "email",
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormLabel, {
          htmlFor: "message",
          children: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageInput, {
          id: "message",
          name: "message",
          rows: 3,
          onChange: function onChange(e) {
            return setMessage(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "hidden",
        name: "_next",
        value: "https://www.egorphilippov.me/success"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        disabled: !isSubmitEnabled,
        type: "submit",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Contact, "mxdRTHxkiTeLOv2akPbesFCh75U=");

_c = Contact;
var ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.form.withConfig({
  displayName: "contact__ContactForm",
  componentId: "umux2u-0"
})(["margin:0 10vw;@media (max-width:", "){margin:0 3vw;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.mobile;
});
_c2 = ContactForm;
var formControl = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["display:block;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:", ";background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus{color:#495057;background-color:", ";border-color:", ";outline:0;box-shadow:0 0 0 0.1rem ", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_6__.lighten)(0.3, theme.colors.white);
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_6__.lighten)(0.3, theme.colors.white);
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_6__.lighten)(0.3, theme.colors.brand);
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_6__.lighten)(0.3, theme.colors.brand);
});
var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.label.withConfig({
  displayName: "contact__FormLabel",
  componentId: "umux2u-1"
})(["display:block;margin-bottom:", ";margin-top:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.small;
});
_c3 = FormLabel;
var MessageInput = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.textarea.withConfig({
  displayName: "contact__MessageInput",
  componentId: "umux2u-2"
})(["", " height:auto;"], formControl);
_c4 = MessageInput;
var EmailInput = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.input.withConfig({
  displayName: "contact__EmailInput",
  componentId: "umux2u-3"
})(["", ""], formControl);
_c5 = EmailInput;
var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "contact__FormGroup",
  componentId: "umux2u-4"
})(["display:grid;margin-bottom:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.medium;
});
_c6 = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Contact");
$RefreshReg$(_c2, "ContactForm");
$RefreshReg$(_c3, "FormLabel");
$RefreshReg$(_c4, "MessageInput");
$RefreshReg$(_c5, "EmailInput");
$RefreshReg$(_c6, "FormGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC50c3giXSwibmFtZXMiOlsiQ29udGFjdCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNTdWJtaXRFbmFibGVkIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiQ29udGFjdEZvcm0iLCJzdHlsZWQiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJsaWdodGVuIiwiY29sb3JzIiwid2hpdGUiLCJicmFuZCIsIkZvcm1MYWJlbCIsInNwYWNpbmciLCJtZWRpdW0iLCJzbWFsbCIsIk1lc3NhZ2VJbnB1dCIsIkVtYWlsSW5wdXQiLCJGb3JtR3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1BLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQU07QUFBQTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUN2QkMsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBQUEsbUJBRUFGLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFdkJHLE9BRnVCO0FBQUEsTUFFZEMsVUFGYzs7QUFHOUIsTUFBTUMsZUFBZSxHQUFHSixLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxPQUFPLENBQUNHLE1BQVIsR0FBaUIsQ0FBN0Q7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxXQUFEO0FBQWEsWUFBTSxFQUFDLDhDQUFwQjtBQUFtRSxZQUFNLEVBQUMsTUFBMUU7QUFBQSw4QkFDRSw4REFBQyxTQUFE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SSxXQURjLENBQWxCO01BQU1VLFk7QUFJTixJQUFNQyxVQUFVLEdBQUdmLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1pJLFdBRFksQ0FBaEI7TUFBTVcsVTtBQUdOLElBQU1DLFNBQVMsR0FBR2hCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlDQUVJO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDVSxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FGSixDQUFmO01BQU1JLFM7QUFLTiwrREFBZTVCLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5kOWJiYzI0OWM2MDk5NGNjYzg5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tICdjb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENvbnRhY3Q6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBpc1N1Ym1pdEVuYWJsZWQgPSBlbWFpbC5sZW5ndGggPiAyICYmIG1lc3NhZ2UubGVuZ3RoID4gMjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db250YWN0IHwgRWdvciBQaGlsaXBwb3Y8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8Q29udGFjdEZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vcGhpbGlwcG92ZWdvckBnbWFpbC5jb21cIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxFbWFpbElucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPE1lc3NhZ2VJbnB1dFxyXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cHM6Ly93d3cuZWdvcnBoaWxpcHBvdi5tZS9zdWNjZXNzXCIgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IWlzU3VibWl0RW5hYmxlZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ29udGFjdEZvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBtYXJnaW46IDAgMTB2dztcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgbWFyZ2luOiAwIDN2dztcclxuICB9XHJcbmA7XHJcbmNvbnN0IGZvcm1Db250cm9sID0gY3NzYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGxpZ2h0ZW4oMC4zLCB0aGVtZS5jb2xvcnMud2hpdGUpfTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gbGlnaHRlbigwLjMsIHRoZW1lLmNvbG9ycy53aGl0ZSl9O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGxpZ2h0ZW4oMC4zLCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gJHsoeyB0aGVtZSB9KSA9PiBsaWdodGVuKDAuMywgdGhlbWUuY29sb3JzLmJyYW5kKX07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGb3JtTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLnNtYWxsfTtcclxuYDtcclxuY29uc3QgTWVzc2FnZUlucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gICR7Zm9ybUNvbnRyb2x9XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5gO1xyXG5jb25zdCBFbWFpbElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gICR7Zm9ybUNvbnRyb2x9XHJcbmA7XHJcbmNvbnN0IEZvcm1Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=