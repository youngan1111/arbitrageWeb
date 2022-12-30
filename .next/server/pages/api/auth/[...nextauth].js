"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mysql = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\nconst pool = mysql.createPool({\n    user: process.env.NEXT_PUBLIC_DB_USER,\n    password: process.env.NEXT_PUBLIC_DB_PASSWORD,\n    host: process.env.NEXT_PUBLIC_DB_HOST,\n    port: process.env.NEXT_PUBLIC_DB_PORT,\n    database: process.env.NEXT_PUBLIC_DB,\n    multipleStatements: true\n});\nmodule.exports = pool;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRQyxtQkFBT0EsQ0FBQyxzQ0FBZ0I7QUFFdEMsTUFBTUMsT0FBT0YsTUFBTUcsVUFBVSxDQUFDO0lBQzVCQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtJQUNyQ0MsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyx1QkFBdUI7SUFDN0NDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssbUJBQW1CO0lBQ3JDQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLG1CQUFtQjtJQUNyQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxjQUFjO0lBQ3BDQyxvQkFBb0IsSUFBSTtBQUMxQjtBQUVBQyxPQUFPQyxPQUFPLEdBQUdoQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QxLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlzcWwgPSByZXF1aXJlKFwibXlzcWwyL3Byb21pc2VcIilcblxuY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICB1c2VyOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9VU0VSLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREJfUEFTU1dPUkQsXG4gIGhvc3Q6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RCX0hPU1QsXG4gIHBvcnQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RCX1BPUlQsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQixcbiAgbXVsdGlwbGVTdGF0ZW1lbnRzOiB0cnVlLFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBwb29sXG4iXSwibmFtZXMiOlsibXlzcWwiLCJyZXF1aXJlIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0RCX1VTRVIiLCJwYXNzd29yZCIsIk5FWFRfUFVCTElDX0RCX1BBU1NXT1JEIiwiaG9zdCIsIk5FWFRfUFVCTElDX0RCX0hPU1QiLCJwb3J0IiwiTkVYVF9QVUJMSUNfREJfUE9SVCIsImRhdGFiYXNlIiwiTkVYVF9QVUJMSUNfREIiLCJtdWx0aXBsZVN0YXRlbWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pool = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n// nextauth 라이브러리에서 제공하는 credential auth를 획득하는 함수\n// {\n//   user: {\n//     name: string\n//     email: string\n//     image: string\n// }\n// user 아래의 name, image, email 로만 유저 정보를 세션에서 가지고 있을 수 있어 이름은 다르지만 image에는 권한 email에는 유저의 아이디를 저장한다.\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials, req) {\n                const connection = await pool.getConnection(async (conn)=>conn);\n                if (credentials.admin === \"on\") {\n                    const [rows] = await connection.query(\"SELECT * from `admin` where `admin_id` = ? and `password` = ?\", [\n                        credentials.id,\n                        credentials.pw\n                    ]);\n                    // user 아래의 name, image, email 로만 유저 정보를 세션에서 가지고 있을 수 있어 이름은 다르지만 image에는 권한 email에는 유저의 아이디를 저장한다.\n                    rows[0][\"image\"] = \"admin\";\n                    rows[0][\"email\"] = rows[0].admin_id;\n                    if (rows.length != 0) return rows[0];\n                } else {\n                    const [rows1] = await connection.query(\"SELECT * from `student` where `student_id` = ? and `password` = ?\", [\n                        credentials.id,\n                        credentials.pw\n                    ]);\n                    rows1[0][\"image\"] = \"user\";\n                    rows1[0][\"email\"] = rows1[0].student_id;\n                    if (rows1.length != 0) return rows1[0];\n                }\n                connection.release();\n                return Promise.reject(new Error(\"Unknown Error\"));\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\",\n        error: \"/relogin\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNpQztBQUNqRSxNQUFNRSxPQUFPQyxtQkFBT0EsQ0FBQywwQ0FBaUI7QUFFdEMsaURBQWlEO0FBQ2pELElBQUk7QUFDSixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLG9HQUFvRztBQUU3RixNQUFNQyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RKLHNFQUFtQkEsQ0FBQztZQUNsQixNQUFNSyxXQUFVQyxXQUFXLEVBQUVDLEdBQUcsRUFBRTtnQkFDaEMsTUFBTUMsYUFBYSxNQUFNUCxLQUFLUSxhQUFhLENBQUMsT0FBT0MsT0FBU0E7Z0JBQzVELElBQUlKLFlBQVlLLEtBQUssS0FBSyxNQUFNO29CQUM5QixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNSixXQUFXSyxLQUFLLENBQ25DLGlFQUNBO3dCQUFDUCxZQUFZUSxFQUFFO3dCQUFFUixZQUFZUyxFQUFFO3FCQUFDO29CQUVsQyxvR0FBb0c7b0JBQ3BHSCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRztvQkFDbkJBLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHQSxJQUFJLENBQUMsRUFBRSxDQUFDSSxRQUFRO29CQUVuQyxJQUFJSixLQUFLSyxNQUFNLElBQUksR0FBRyxPQUFPTCxJQUFJLENBQUMsRUFBRTtnQkFDdEMsT0FBTztvQkFDTCxNQUFNLENBQUNBLE1BQUssR0FBRyxNQUFNSixXQUFXSyxLQUFLLENBQ25DLHFFQUNBO3dCQUFDUCxZQUFZUSxFQUFFO3dCQUFFUixZQUFZUyxFQUFFO3FCQUFDO29CQUVsQ0gsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUc7b0JBQ25CQSxLQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBR0EsS0FBSSxDQUFDLEVBQUUsQ0FBQ00sVUFBVTtvQkFFckMsSUFBSU4sTUFBS0ssTUFBTSxJQUFJLEdBQUcsT0FBT0wsS0FBSSxDQUFDLEVBQUU7Z0JBQ3RDLENBQUM7Z0JBQ0RKLFdBQVdXLE9BQU87Z0JBQ2xCLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQyxJQUFJQyxNQUFNO1lBQ2xDO1FBQ0Y7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0FBQ0YsRUFBQztBQUNELGlFQUFlMUIsZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5jb25zdCBwb29sID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9kYlwiKVxuXG4vLyBuZXh0YXV0aCDrnbzsnbTruIzrn6zrpqzsl5DshJwg7KCc6rO17ZWY64qUIGNyZWRlbnRpYWwgYXV0aOulvCDtmo3rk53tlZjripQg7ZWo7IiYXG4vLyB7XG4vLyAgIHVzZXI6IHtcbi8vICAgICBuYW1lOiBzdHJpbmdcbi8vICAgICBlbWFpbDogc3RyaW5nXG4vLyAgICAgaW1hZ2U6IHN0cmluZ1xuLy8gfVxuLy8gdXNlciDslYTrnpjsnZggbmFtZSwgaW1hZ2UsIGVtYWlsIOuhnOunjCDsnKDsoIAg7KCV67O066W8IOyEuOyFmOyXkOyEnCDqsIDsp4Dqs6Ag7J6I7J2EIOyImCDsnojslrQg7J2066aE7J2AIOuLpOultOyngOunjCBpbWFnZeyXkOuKlCDqtoztlZwgZW1haWzsl5DripQg7Jyg7KCA7J2YIOyVhOydtOuUlOulvCDsoIDsnqXtlZzri6QuXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIChjb25uKSA9PiBjb25uKVxuICAgICAgICBpZiAoY3JlZGVudGlhbHMuYWRtaW4gPT09IFwib25cIikge1xuICAgICAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXG4gICAgICAgICAgICBcIlNFTEVDVCAqIGZyb20gYGFkbWluYCB3aGVyZSBgYWRtaW5faWRgID0gPyBhbmQgYHBhc3N3b3JkYCA9ID9cIixcbiAgICAgICAgICAgIFtjcmVkZW50aWFscy5pZCwgY3JlZGVudGlhbHMucHddXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIHVzZXIg7JWE656Y7J2YIG5hbWUsIGltYWdlLCBlbWFpbCDroZzrp4wg7Jyg7KCAIOygleuztOulvCDshLjshZjsl5DshJwg6rCA7KeA6rOgIOyeiOydhCDsiJgg7J6I7Ja0IOydtOumhOydgCDri6TrpbTsp4Drp4wgaW1hZ2Xsl5DripQg6raM7ZWcIGVtYWls7JeQ64qUIOycoOyggOydmCDslYTsnbTrlJTrpbwg7KCA7J6l7ZWc64ukLlxuICAgICAgICAgIHJvd3NbMF1bXCJpbWFnZVwiXSA9IFwiYWRtaW5cIlxuICAgICAgICAgIHJvd3NbMF1bXCJlbWFpbFwiXSA9IHJvd3NbMF0uYWRtaW5faWRcblxuICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCAhPSAwKSByZXR1cm4gcm93c1swXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXG4gICAgICAgICAgICBcIlNFTEVDVCAqIGZyb20gYHN0dWRlbnRgIHdoZXJlIGBzdHVkZW50X2lkYCA9ID8gYW5kIGBwYXNzd29yZGAgPSA/XCIsXG4gICAgICAgICAgICBbY3JlZGVudGlhbHMuaWQsIGNyZWRlbnRpYWxzLnB3XVxuICAgICAgICAgIClcbiAgICAgICAgICByb3dzWzBdW1wiaW1hZ2VcIl0gPSBcInVzZXJcIlxuICAgICAgICAgIHJvd3NbMF1bXCJlbWFpbFwiXSA9IHJvd3NbMF0uc3R1ZGVudF9pZFxuXG4gICAgICAgICAgaWYgKHJvd3MubGVuZ3RoICE9IDApIHJldHVybiByb3dzWzBdXG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVua25vd24gRXJyb3JcIikpXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICBlcnJvcjogXCIvcmVsb2dpblwiLFxuICB9LFxufVxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicG9vbCIsInJlcXVpcmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwiY29ubmVjdGlvbiIsImdldENvbm5lY3Rpb24iLCJjb25uIiwiYWRtaW4iLCJyb3dzIiwicXVlcnkiLCJpZCIsInB3IiwiYWRtaW5faWQiLCJsZW5ndGgiLCJzdHVkZW50X2lkIiwicmVsZWFzZSIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();