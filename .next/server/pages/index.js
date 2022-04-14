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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst formStyle = {\n    margin: \"auto\",\n    padding: \"10px\",\n    border: \"1px solid #c9c9c9\",\n    borderRadius: \"5px\",\n    background: \"yellow\",\n    color: \"black\",\n    width: \"220px\",\n    display: \"block\"\n};\nconst Index = ()=>{\n    const { 0: userInput , 1: setUserInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: todoList , 1: settodoList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        settodoList([\n            userInput,\n            ...todoList\n        ]);\n        setUserInput(\"\");\n    };\n    const handledelete = (todo)=>{\n        const updateArr = todoList.filter((todoItem)=>todoList.indexOf(todoItem) != todoList.indexOf(todo)\n        );\n        settodoList(updateArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"yellow\",\n            color: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    backgroundColor: \"pink\",\n                    color: \"black\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: \"WELCOME TO TODO LIST\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 64\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                            children: \"Introduction:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 22\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 18\n                    }, undefined),\n                    \" TODO List are the lists that we generally use to maintain our day to day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks any time and delete a task which is completed. The four major tasks that we can perform in a TODO list are:\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Add works/List\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter a todo list\",\n                        value: userInput,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 111\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handledelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 53\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 32\n                    }, undefined);\n                }) : \"Todo list is empty\"\n            }, void 0, false, {\n                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    backgroundColor: \"pink\",\n                    color: \"black\"\n                },\n                children: \"   @Copyright 2022 by BADISA NAVEEN. All Rights Reserved.\"\n            }, void 0, false, {\n                fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\todo\\\\pages\\\\index.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkksWUFBWSxDQUFDQyxJQUFJLENBQUM7aUNBQ2pCOzBDQUFFLFFBQU07Ozs7O3lDQUFTOzt1QkFIRnVCLEdBQUc7Ozs7aUNBR0k7aUJBQzFCLENBQUMsR0FDRCxvQkFBb0I7Ozs7O3lCQUV4QjswQkFDTCw4REFBQ0UsR0FBQztnQkFBQ25CLEtBQUssRUFBRTtvQkFBQ0MsZUFBZSxFQUFDLE1BQU07b0JBQUN0QixLQUFLLEVBQUMsT0FBTztpQkFBQzswQkFBRSwyREFBeUQ7Ozs7O3lCQUFJOzs7Ozs7aUJBQzdHLENBQ1Q7Q0FDSjtBQUdELGlFQUFlRyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgZm9ybVN0eWxlID0ge1xyXG4gICAgbWFyZ2luOidhdXRvJyxcclxuICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYzljOWM5JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAneWVsbG93JyxcclxuICAgIGNvbG9yOidibGFjaycsXHJcbiAgICB3aWR0aDogJzIyMHB4JyxcclxuICAgIGRpc3BsYXk6ICdibG9jaydcclxufTtcclxuY29uc3QgSW5kZXggPSgpPT57XHJcbiAgICBjb25zdCBbdXNlcklucHV0LHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3RvZG9MaXN0LHNldHRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXR0b2RvTGlzdChbXHJcbiAgICAgICAgICAgIHVzZXJJbnB1dCxcclxuICAgICAgICAgICAgLi4udG9kb0xpc3RcclxuICAgICAgICBdKVxyXG4gICAgICAgIHNldFVzZXJJbnB1dCgnJylcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVkZWxldGU9KHRvZG8pPT57XHJcbiAgICAgICAgY29uc3QgdXBkYXRlQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtPT50b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSE9dG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuICAgICAgICBzZXR0b2RvTGlzdCh1cGRhdGVBcnIpXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3llbGxvdycsY29sb3I6J2JsYWNrJ319PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidwaW5rJyxjb2xvcjonYmxhY2snfX0+PGNlbnRlcj5XRUxDT01FIFRPIFRPRE8gTElTVDwvY2VudGVyPjwvaDE+XHJcbiAgICAgICAgICAgIDxoNCA+PGgxPjx1PkludHJvZHVjdGlvbjo8L3U+PC9oMT4gVE9ETyBMaXN0IGFyZSB0aGUgbGlzdHMgdGhhdCB3ZSBnZW5lcmFsbHkgdXNlIHRvIG1haW50YWluIG91ciBkYXkgdG8gZGF5IHRhc2tzIG9yIGxpc3Qgb2YgZXZlcnl0aGluZyB0aGF0IHdlIGhhdmUgdG8gZG8sIHdpdGggdGhlIG1vc3QgaW1wb3J0YW50IHRhc2tzIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3QsIGFuZCB0aGUgbGVhc3QgaW1wb3J0YW50IHRhc2tzIGF0IHRoZSBib3R0b20uIEl0IGlzIGhlbHBmdWwgaW4gcGxhbm5pbmcgb3VyIGRhaWx5IHNjaGVkdWxlcy4gV2UgY2FuIGFkZCBtb3JlIHRhc2tzIGFueSB0aW1lIGFuZCBkZWxldGUgYSB0YXNrIHdoaWNoIGlzIGNvbXBsZXRlZC4gVGhlIGZvdXIgbWFqb3IgdGFza3MgdGhhdCB3ZSBjYW4gcGVyZm9ybSBpbiBhIFRPRE8gbGlzdCBhcmU6PC9oND5cclxuICAgICAgICAgICAgPGZvcm0gPlxyXG4gICAgICAgICAgICAgICAgPGg0PkFkZCB3b3Jrcy9MaXN0PC9oND5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0b2RvIGxpc3RcIiB2YWx1ZT17dXNlcklucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Lmxlbmd0aD49MT90b2RvTGlzdC5tYXAoKHRvZG8saWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb30gPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOidUb2RvIGxpc3QgaXMgZW1wdHknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidwaW5rJyxjb2xvcjonYmxhY2snfX0+ICAgQENvcHlyaWdodCAyMDIyIGJ5IEJBRElTQSBOQVZFRU4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImZvcm1TdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ3aWR0aCIsImRpc3BsYXkiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0dG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZWRlbGV0ZSIsInRvZG8iLCJ1cGRhdGVBcnIiLCJmaWx0ZXIiLCJ0b2RvSXRlbSIsImluZGV4T2YiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImgxIiwiY2VudGVyIiwiaDQiLCJ1IiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();