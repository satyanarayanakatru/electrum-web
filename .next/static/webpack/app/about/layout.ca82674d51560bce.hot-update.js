"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/layout",{

/***/ "(app-pages-browser)/./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navItems */ \"(app-pages-browser)/./src/components/navItems.jsx\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ \"(app-pages-browser)/./src/components/dropdown.jsx\");\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.css */ \"(app-pages-browser)/./src/components/navbar.css\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    //   function myFunction(x,y) {\n    //     var x = document.getElementById(\"nav_bar\");\n    //     var y = document.getElementById(\"hamburger\");\n    //     if (x.style.display === \"block\") {\n    //         x.style.display = \"none\";\n    //     } else {\n    //         x.style.display = \"block\";   \n    //     }\n    //     y.classList.toggle(\"change\");\n    // }\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleVisibility = ()=>{\n        setIsVisible(!isVisible);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"fix fixed\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: \"logo_image\",\n                        className: \"mr-7\",\n                        width: 200,\n                        height: 50\n                    }, void 0, false, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ham_menu\",\n                    id: \"hamburger\",\n                    onClick: myFunction,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bar1\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bar2\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bar3\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"nav_bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navbar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        onMouseOver: toggleVisibility\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        isVisible: isVisible\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"get_started_btn\",\n                                children: \"Get started\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\components\\\\navbar.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDd0M7QUFDVDtBQUNHO0FBQ0E7QUFDWjtBQUN5QjtBQUUvQyxNQUFNTSxTQUFTOztJQUNmLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsb0RBQW9EO0lBQ3BELHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLElBQUk7SUFFRixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsbUJBQW1CO1FBQ3ZCRCxhQUFhLENBQUNEO0lBQ2hCO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQU9DLFdBQVU7OzhCQUNoQiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNULGtEQUFLQTt3QkFDSlcsS0FBS1IsK0RBQUlBO3dCQUNUUyxLQUFJO3dCQUNKSCxXQUFVO3dCQUNWSSxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ0o7b0JBQUlELFdBQVU7b0JBQVdNLElBQUc7b0JBQVlDLFNBQVNDOztzQ0FDaEQsOERBQUNQOzRCQUFJRCxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNDOzRCQUFJRCxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNDOzRCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7OEJBRWpCLDhEQUFDQztvQkFBSUssSUFBRzs7c0NBQ04sOERBQUNMOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDUzs7a0RBQ0MsOERBQUNqQixpREFBUUE7d0NBQUNrQixhQUFhWjs7Ozs7O2tEQUN2Qiw4REFBQ0wsaURBQVFBO3dDQUFDRyxXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3pCLDhEQUFDSztzQ0FDQyw0RUFBQ1U7Z0NBQU9YLFdBQVU7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEQ7R0EvQ01MO0tBQUFBO0FBaUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qc3g/NjRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTmF2SXRlbXMgZnJvbSBcIi4vbmF2SXRlbXNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2Ryb3Bkb3duXCI7XHJcbmltcG9ydCAnLi9uYXZiYXIuY3NzJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLnN2ZydcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuLy8gICBmdW5jdGlvbiBteUZ1bmN0aW9uKHgseSkge1xyXG4vLyAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9iYXJcIik7XHJcbi8vICAgICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xyXG4vLyAgICAgaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbi8vICAgICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICBcclxuLy8gICAgIH1cclxuLy8gICAgIHkuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuLy8gfVxyXG5cclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXggZml4ZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29faW1hZ2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci03XCJcclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1fbWVudVwiIGlkPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17bXlGdW5jdGlvbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdl9iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1zIG9uTW91c2VPdmVyPXt0b2dnbGVWaXNpYmlsaXR5fSAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBpc1Zpc2libGU9e2lzVmlzaWJsZX0gLz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2V0X3N0YXJ0ZWRfYnRuXCI+R2V0IHN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5hdkl0ZW1zIiwiRHJvcGRvd24iLCJMb2dvIiwiTmF2YmFyIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaWQiLCJvbkNsaWNrIiwibXlGdW5jdGlvbiIsIm5hdiIsIm9uTW91c2VPdmVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.jsx\n"));

/***/ })

});