"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/modrencomponents/navbar.jsx":
/*!*****************************************!*\
  !*** ./src/modrencomponents/navbar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.css */ \"(app-pages-browser)/./src/modrencomponents/navbar.css\");\n/* harmony import */ var _barrel_optimize_names_FaSearch_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaSearch!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* harmony import */ var _contactModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactModal */ \"(app-pages-browser)/./src/modrencomponents/contactModal.jsx\");\n/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navItems */ \"(app-pages-browser)/./src/modrencomponents/navItems.jsx\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown */ \"(app-pages-browser)/./src/modrencomponents/dropdown.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    function myFunction(e) {\n        e.preventDefault();\n        var x = document.getElementById(\"myDIV\");\n        if (x.style.display === \"block\") {\n            x.style.display = \"none\";\n        } else {\n            x.style.display = \"block\";\n        }\n    }\n    const [isShow, setIsShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleVisibility = ()=>{\n        setIsShow(!isShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navItems__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onMouseEnter: toggleVisibility,\n                                onMouseLeave: toggleVisibility\n                            }, void 0, false, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                isVisible: isShow\n                            }, void 0, false, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"search-icon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaSearch_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSearch, {\n                                size: 20,\n                                onClick: myFunction\n                            }, void 0, false, {\n                                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"myDIV\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"search\",\n                            name: \"\",\n                            placeholder: \"Search here...\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contactModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"H:\\\\electrum web\\\\electrum-web\\\\src\\\\modrencomponents\\\\navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"vUmtCUv4XQXyrC6y2c4yQYENkTw=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tb2RyZW5jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNUO0FBQ1Q7QUFDb0I7QUFDTTtBQUNUO0FBQ0w7QUFDQTtBQUVuQixTQUFTUTs7SUFDdEIsU0FBU0MsV0FBV0MsQ0FBQztRQUNuQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJQyxJQUFJQyxTQUFTQyxjQUFjLENBQUM7UUFDaEMsSUFBSUYsRUFBRUcsS0FBSyxDQUFDQyxPQUFPLEtBQUssU0FBUztZQUMvQkosRUFBRUcsS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDcEIsT0FBTztZQUNMSixFQUFFRyxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUNwQjtJQUNGO0lBQ0EsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNa0IsbUJBQW1CO1FBQ3ZCRCxVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQzs7a0NBQ0MsOERBQUNGO3dCQUFJRyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ3ZCLGtEQUFLQTtnQ0FBQ3dCLEtBQUt0QiwrREFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3BCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDZCxpREFBUUE7Z0NBQUNxQixjQUFjUjtnQ0FBa0JTLGNBQWNUOzs7Ozs7MENBQ3RELDhEQUFDWixpREFBUUE7Z0NBQUNzQixXQUFXWjs7Ozs7Ozs7Ozs7O2tDQUV6Qiw4REFBQ0c7d0JBQUlHLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFFQyxNQUFLO3NDQUNOLDRFQUFDdEIsb0ZBQVFBO2dDQUFDMkIsTUFBTTtnQ0FBSUMsU0FBU3RCOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ1c7d0JBQUlZLElBQUc7a0NBQ04sNEVBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxhQUFZOzs7Ozs7Ozs7OztrQ0FLaEIsOERBQUMvQixxREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQS9Dd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2RyZW5jb21wb25lbnRzL25hdmJhci5qc3g/ZjQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgXCIuL25hdmJhci5jc3NcIjtcclxuaW1wb3J0IHsgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmdcIjtcclxuaW1wb3J0IEZvcm1Nb2RhbCBmcm9tIFwiLi9jb250YWN0TW9kYWxcIjtcclxuaW1wb3J0IE5hdkl0ZW1zIGZyb20gXCIuL25hdkl0ZW1zXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9kcm9wZG93blwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGZ1bmN0aW9uIG15RnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RElWXCIpO1xyXG4gICAgaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3coIWlzU2hvdyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2SXRlbXMgb25Nb3VzZUVudGVyPXt0b2dnbGVWaXNpYmlsaXR5fSBvbk1vdXNlTGVhdmU9e3RvZ2dsZVZpc2liaWxpdHl9Lz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gaXNWaXNpYmxlPXtpc1Nob3d9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtaWNvblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEZhU2VhcmNoIHNpemU9ezIwfSBvbkNsaWNrPXtteUZ1bmN0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJteURJVlwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtTW9kYWwgLz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJGYVNlYXJjaCIsIkxvZ28iLCJGb3JtTW9kYWwiLCJOYXZJdGVtcyIsIkRyb3Bkb3duIiwiTmF2YmFyIiwibXlGdW5jdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiaXNTaG93Iiwic2V0SXNTaG93IiwidG9nZ2xlVmlzaWJpbGl0eSIsImRpdiIsImhlYWRlciIsIm5hdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic3JjIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaXNWaXNpYmxlIiwic2l6ZSIsIm9uQ2xpY2siLCJpZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/modrencomponents/navbar.jsx\n"));

/***/ })

});