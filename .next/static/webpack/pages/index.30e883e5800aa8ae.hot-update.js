"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"./node_modules/@mui/material/esm/Link/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\nconst sections = [\n    {\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                flexWrap: \"wrap\"\n            },\n            children: \"binance\"\n        }, void 0, false, {\n            fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined),\n        url: \"/binance\"\n    },\n    {\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                flexWrap: \"wrap\"\n            },\n            children: \"과목 조회 및 변경\"\n        }, void 0, false, {\n            fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined),\n        url: \"/changeCatalog\"\n    }\n];\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    borderBottom: 1,\n                    borderColor: \"divider\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    component: \"h2\",\n                    variant: \"h5\",\n                    color: \"inherit\",\n                    align: \"left\",\n                    noWrap: true,\n                    sx: {\n                        flex: 1\n                    },\n                    style: {\n                        fontWeight: 600\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        href: \"/\",\n                        underline: \"none\",\n                        color: \"inherit\",\n                        children: \"Arbitrage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                component: \"nav\",\n                variant: \"dense\",\n                sx: {\n                    justifyContent: \"flex-start\"\n                },\n                children: sections.map((section)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        underline: \"hover\",\n                        color: \"inherit\",\n                        noWrap: true,\n                        variant: \"body2\",\n                        href: section.url,\n                        sx: {\n                            p: 1,\n                            mr: 5\n                        },\n                        children: section.title\n                    }, section.url, false, {\n                        fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/younganjung/sandbox/arbitrageWeb/components/Header.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNFO0FBQ007QUFDTTtBQUNoQjtBQUVqQyxNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMscUJBQ0UsOERBQUNOLHlEQUFHQTtZQUNGTyxPQUFPO2dCQUNMQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxVQUFVO1lBQ1o7c0JBQ0Q7Ozs7OztRQUlIQyxLQUFLO0lBQ1A7SUFDQTtRQUNFTCxxQkFDRSw4REFBQ04seURBQUdBO1lBQ0ZPLE9BQU87Z0JBQ0xDLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pDLFVBQVU7WUFDWjtzQkFDRDs7Ozs7O1FBSUhDLEtBQUs7SUFDUDtDQUNEO0FBRWMsU0FBU0MsU0FBUztJQUMvQixxQkFDRTs7MEJBQ0UsOERBQUNWLDZEQUFPQTtnQkFBQ1csSUFBSTtvQkFBRUMsY0FBYztvQkFBR0MsYUFBYTtnQkFBVTswQkFDckQsNEVBQUNaLGdFQUFVQTtvQkFDVGEsV0FBVTtvQkFDVkMsU0FBUTtvQkFDUkMsT0FBTTtvQkFDTkMsT0FBTTtvQkFDTkMsTUFBTTtvQkFDTlAsSUFBSTt3QkFBRVEsTUFBTTtvQkFBRTtvQkFDZGQsT0FBTzt3QkFBRWUsWUFBWTtvQkFBSTs4QkFFekIsNEVBQUNyQiwwREFBSUE7d0JBQUNzQixNQUFLO3dCQUFJQyxXQUFVO3dCQUFPTixPQUFNO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wRCw4REFBQ2hCLDZEQUFPQTtnQkFDTmMsV0FBVTtnQkFDVkMsU0FBUTtnQkFDUkosSUFBSTtvQkFBRVksZ0JBQWdCO2dCQUFhOzBCQUVsQ3BCLFNBQVNxQixHQUFHLENBQUMsQ0FBQ0MsVUFBWTtvQkFDekIscUJBQ0UsOERBQUMxQiwwREFBSUE7d0JBQ0h1QixXQUFVO3dCQUNWTixPQUFNO3dCQUNORSxNQUFNO3dCQUVOSCxTQUFRO3dCQUNSTSxNQUFNSSxRQUFRaEIsR0FBRzt3QkFDakJFLElBQUk7NEJBQUVlLEdBQUc7NEJBQUdDLElBQUk7d0JBQUU7a0NBRWpCRixRQUFRckIsS0FBSzt1QkFMVHFCLFFBQVFoQixHQUFHOzs7OztnQkFRdEI7Ozs7Ozs7O0FBSVIsQ0FBQztLQTFDdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIlxuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHtcbiAgICB0aXRsZTogKFxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBiaW5hbmNlXG4gICAgICA8L0JveD5cbiAgICApLFxuICAgIHVybDogXCIvYmluYW5jZVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IChcbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAg6rO866qpIOyhsO2ajCDrsI8g67OA6rK9XG4gICAgICA8L0JveD5cbiAgICApLFxuICAgIHVybDogXCIvY2hhbmdlQ2F0YWxvZ1wiLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb29sYmFyIHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6IFwiZGl2aWRlclwiIH19PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICBub1dyYXBcbiAgICAgICAgICBzeD17eyBmbGV4OiAxIH19XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHVuZGVybGluZT1cIm5vbmVcIiBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgIEFyYml0cmFnZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Ub29sYmFyPlxuXG4gICAgICA8VG9vbGJhclxuICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICB2YXJpYW50PVwiZGVuc2VcIlxuICAgICAgICBzeD17eyBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgID5cbiAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24udXJsfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICBocmVmPXtzZWN0aW9uLnVybH1cbiAgICAgICAgICAgICAgc3g9e3sgcDogMSwgbXI6IDUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJveCIsIkxpbmsiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsInVzZUVmZmVjdCIsInNlY3Rpb25zIiwidGl0bGUiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJ1cmwiLCJIZWFkZXIiLCJzeCIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwiY29tcG9uZW50IiwidmFyaWFudCIsImNvbG9yIiwiYWxpZ24iLCJub1dyYXAiLCJmbGV4IiwiZm9udFdlaWdodCIsImhyZWYiLCJ1bmRlcmxpbmUiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsInNlY3Rpb24iLCJwIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});