"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/binance",{

/***/ "./pages/binance.js":
/*!**************************!*\
  !*** ./pages/binance.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MySchedule; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MySchedule() {\n    _s();\n    const [markPrice, setMarkPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [markPriceTime, setMarkPriceTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [symbol, setSymbol] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [indexPrice, setIndexPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [fundingRate, setFundingRate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [nextFundingRate, setNextFundingRate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const futures = \"btcusdt\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const markPriceEvery1sec = new WebSocket(\"wss://fstream.binance.com/ws/\".concat(futures, \"@markPrice@1s\"));\n        markPriceEvery1sec.onmessage = (param)=>{\n            let { data  } = param;\n            const json = JSON.parse(data);\n            setMarkPrice(json.p);\n            setMarkPriceTime(json.E);\n            setSymbol(json.s);\n            setIndexPrice(json.i);\n            setFundingRate(json.r);\n            setNextFundingRate(json.T);\n        };\n    // const orderBookEvery100ms = new WebSocket(\n    //   `wss://fstream.binance.com/stream?streams=${futures}@depth5@100ms`\n    // )\n    // orderBookEvery100ms.onmessage = ({ data }) => {\n    //   const json = JSON.parse(data)\n    //   console.log(json.E)\n    //   setMarkPrice(json.E)\n    // }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/younganjung/sandbox/arbitrageWeb/pages/binance.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    ml: 3,\n                    mt: 1,\n                    mb: 2\n                },\n                variant: \"h5\",\n                gutterBottom: true,\n                children: \"\\xb7 내 시간표\"\n            }, void 0, false, {\n                fileName: \"/Users/younganjung/sandbox/arbitrageWeb/pages/binance.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MySchedule, \"h8jHNyUwS5Tuzcm4mkxvuh/Ivp0=\");\n_c = MySchedule;\nvar _c;\n$RefreshReg$(_c, \"MySchedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iaW5hbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ0Y7QUFDVTtBQUNOO0FBQ2xCO0FBRVYsU0FBU00sYUFBYTs7SUFDbkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUN2RCxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUNqRCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNLENBQUNhLGlCQUFpQkMsbUJBQW1CLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFFM0QsTUFBTWUsVUFBVTtJQUVoQmhCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNaUIscUJBQXFCLElBQUlDLFVBQzdCLGdDQUF3QyxPQUFSRixTQUFRO1FBRTFDQyxtQkFBbUJFLFNBQVMsR0FBRyxTQUFjO2dCQUFiLEVBQUVDLEtBQUksRUFBRTtZQUN0QyxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO1lBQ3hCZixhQUFhZ0IsS0FBS0csQ0FBQztZQUNuQmpCLGlCQUFpQmMsS0FBS0ksQ0FBQztZQUN2QmhCLFVBQVVZLEtBQUtLLENBQUM7WUFDaEJmLGNBQWNVLEtBQUtNLENBQUM7WUFDcEJkLGVBQWVRLEtBQUtPLENBQUM7WUFDckJiLG1CQUFtQk0sS0FBS1EsQ0FBQztRQUMzQjtJQUVBLDZDQUE2QztJQUM3Qyx1RUFBdUU7SUFDdkUsSUFBSTtJQUNKLGtEQUFrRDtJQUNsRCxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixJQUFJO0lBQ04sR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDaEMsMERBQU1BOzs7OzswQkFDUCw4REFBQ0UsZ0VBQVVBO2dCQUFDK0IsSUFBSTtvQkFBRUMsSUFBSTtvQkFBR0MsSUFBSTtvQkFBR0MsSUFBSTtnQkFBRTtnQkFBR0MsU0FBUTtnQkFBS0MsWUFBWTswQkFBQzs7Ozs7Ozs7QUFLekUsQ0FBQztHQTFDdUJoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9iaW5hbmNlLmpzPzdjYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlTY2hlZHVsZSgpIHtcbiAgY29uc3QgW21hcmtQcmljZSwgc2V0TWFya1ByaWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttYXJrUHJpY2VUaW1lLCBzZXRNYXJrUHJpY2VUaW1lXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtzeW1ib2wsIHNldFN5bWJvbF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5kZXhQcmljZSwgc2V0SW5kZXhQcmljZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZnVuZGluZ1JhdGUsIHNldEZ1bmRpbmdSYXRlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtuZXh0RnVuZGluZ1JhdGUsIHNldE5leHRGdW5kaW5nUmF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGZ1dHVyZXMgPSBcImJ0Y3VzZHRcIlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFya1ByaWNlRXZlcnkxc2VjID0gbmV3IFdlYlNvY2tldChcbiAgICAgIGB3c3M6Ly9mc3RyZWFtLmJpbmFuY2UuY29tL3dzLyR7ZnV0dXJlc31AbWFya1ByaWNlQDFzYFxuICAgIClcbiAgICBtYXJrUHJpY2VFdmVyeTFzZWMub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgc2V0TWFya1ByaWNlKGpzb24ucClcbiAgICAgIHNldE1hcmtQcmljZVRpbWUoanNvbi5FKVxuICAgICAgc2V0U3ltYm9sKGpzb24ucylcbiAgICAgIHNldEluZGV4UHJpY2UoanNvbi5pKVxuICAgICAgc2V0RnVuZGluZ1JhdGUoanNvbi5yKVxuICAgICAgc2V0TmV4dEZ1bmRpbmdSYXRlKGpzb24uVClcbiAgICB9XG5cbiAgICAvLyBjb25zdCBvcmRlckJvb2tFdmVyeTEwMG1zID0gbmV3IFdlYlNvY2tldChcbiAgICAvLyAgIGB3c3M6Ly9mc3RyZWFtLmJpbmFuY2UuY29tL3N0cmVhbT9zdHJlYW1zPSR7ZnV0dXJlc31AZGVwdGg1QDEwMG1zYFxuICAgIC8vIClcbiAgICAvLyBvcmRlckJvb2tFdmVyeTEwMG1zLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIC8vICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKGpzb24uRSlcbiAgICAvLyAgIHNldE1hcmtQcmljZShqc29uLkUpXG4gICAgLy8gfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8VHlwb2dyYXBoeSBzeD17eyBtbDogMywgbXQ6IDEsIG1iOiAyIH19IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgwrcg64K0IOyLnOqwhO2RnFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk15U2NoZWR1bGUiLCJtYXJrUHJpY2UiLCJzZXRNYXJrUHJpY2UiLCJtYXJrUHJpY2VUaW1lIiwic2V0TWFya1ByaWNlVGltZSIsInN5bWJvbCIsInNldFN5bWJvbCIsImluZGV4UHJpY2UiLCJzZXRJbmRleFByaWNlIiwiZnVuZGluZ1JhdGUiLCJzZXRGdW5kaW5nUmF0ZSIsIm5leHRGdW5kaW5nUmF0ZSIsInNldE5leHRGdW5kaW5nUmF0ZSIsImZ1dHVyZXMiLCJtYXJrUHJpY2VFdmVyeTFzZWMiLCJXZWJTb2NrZXQiLCJvbm1lc3NhZ2UiLCJkYXRhIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInAiLCJFIiwicyIsImkiLCJyIiwiVCIsInN4IiwibWwiLCJtdCIsIm1iIiwidmFyaWFudCIsImd1dHRlckJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/binance.js\n"));

/***/ })

});