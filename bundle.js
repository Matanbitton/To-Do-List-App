/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;800&family=Roboto+Flex:opsz,wght@8..144,300;8..144,600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  --blue: #446df6;\n  --lightpurple: #f7faff;\n  --offwhite: #f7ece1;\n  --black: #0d0106;\n  --green: #387964;\n  --font: \"Montserrat\", sans-serif;\n  --textcolor: #555757;\n}\n\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n.container {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 50px;\n  grid-auto-rows: auto;\n}\n.header {\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  align-items: center;\n  background-color: var(--blue);\n  color: var(--offwhite);\n  font-family: var(--font);\n  letter-spacing: -1px;\n  padding-left: 15px;\n  font-size: 30px;\n\n  gap: 10px;\n}\n.header > h5 {\n  font-size: 26px;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n.sidebar {\n  grid-area: 2 / 1 / 6 / 2;\n  background-color: var(--lightpurple);\n  height: 90vh;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.catagories {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  justify-content: center;\n  gap: 20px;\n}\n.catagories > button {\n  padding: 5px;\n  padding-left: 15px;\n  display: flex;\n  justify-content: start;\n  gap: 10px;\n  text-align: start;\n  font-size: 20px;\n  color: var(--textcolor);\n  font-family: var(--font);\n  background-color: var(--lightpurple);\n  border-radius: 0.2em;\n  font-weight: 500;\n  border: none;\n}\n.catagories > button:hover {\n  color: #f1f8fc;\n  background-color: var(--blue);\n  cursor: pointer;\n}\n.projects {\n  padding: 5px;\n  padding-left: 15px;\n  display: flex;\n  justify-content: start;\n  gap: 10px;\n  text-align: start;\n  font-size: 20px;\n  color: var(--textcolor);\n  font-family: var(--font);\n  background-color: var(--lightpurple);\n  border-radius: 0.2em;\n  font-weight: 500;\n  border-bottom: 2px solid var(--textcolor);\n}\n.footer {\n  grid-area: 9 / 1 / 10 / 3;\n  padding: 12px;\n  background-color: var(--blue);\n  color: white;\n}\n.todo-section-container {\n  grid-area: 2 / 2 / 9 / 3;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  height: 100%;\n}\n.quote {\n  width: 70%;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 18px;\n  font-family: var(--font);\n  color: var(--textcolor);\n}\n.catagory-title {\n  font-size: 40px;\n  font-family: var(--font);\n  height: 100px;\n  margin-bottom: 0;\n}\n.displayed-todos {\n  font-family: var(--font);\n\n  width: 80%;\n  height: 70%;\n  padding: 10px;\n  border-radius: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 50px;\n  grid-template-rows: 30px;\n  align-items: center;\n\n  background-color: var(--lightpurple);\n  font-size: 20px;\n  padding: 10px;\n  border-left: 4px solid var(--green);\n}\n.todo > p {\n  grid-area: 1 / 1 / 1 / 3;\n\n  padding: 0;\n  margin: 0;\n}\n\n.button-wrapper {\n  grid-area: 1 / 2 / 1 / 4;\n}\n.check {\n  color: white;\n  background-color: var(--green);\n  border-radius: 0.5em;\n  padding: 10px;\n  border: none;\n}\n.check:hover {\n  background-color: #295f4f;\n  cursor: pointer;\n}\n.delete {\n  color: white;\n  background-color: rgb(252, 19, 19);\n  border-radius: 0.5em;\n  padding: 10px;\n  border: none;\n}\n.delete:hover {\n  background-color: rgb(194, 3, 3);\n  cursor: pointer;\n}\n.red-text {\n  color: var(--blue);\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px;\n}\n.green-text {\n  font-weight: bold;\n  color: var(--green);\n  padding: 5px;\n  font-size: 20px;\n}\n.project {\n  color: var(--blue);\n}\n.get-to-do {\n  font-size: 30px;\n  padding-left: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;EACtB,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,gCAAgC;EAChC,wBAAwB;EACxB,oBAAoB;AACtB;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;EACtB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;;EAEf,SAAS;AACX;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;AACA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,cAAc;EACd,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,oBAAoB;EACpB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;AACA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,wBAAwB;EACxB,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,wBAAwB;;EAExB,UAAU;EACV,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,wBAAwB;EACxB,mBAAmB;;EAEnB,oCAAoC;EACpC,eAAe;EACf,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,wBAAwB;;EAExB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,8BAA8B;EAC9B,oBAAoB;EACpB,aAAa;EACb,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,kCAAkC;EAClC,oBAAoB;EACpB,aAAa;EACb,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;800&family=Roboto+Flex:opsz,wght@8..144,300;8..144,600&display=swap\");\n* {\n  box-sizing: border-box;\n  --blue: #446df6;\n  --lightpurple: #f7faff;\n  --offwhite: #f7ece1;\n  --black: #0d0106;\n  --green: #387964;\n  --font: \"Montserrat\", sans-serif;\n  --textcolor: #555757;\n}\n\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n.container {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 50px;\n  grid-auto-rows: auto;\n}\n.header {\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  align-items: center;\n  background-color: var(--blue);\n  color: var(--offwhite);\n  font-family: var(--font);\n  letter-spacing: -1px;\n  padding-left: 15px;\n  font-size: 30px;\n\n  gap: 10px;\n}\n.header > h5 {\n  font-size: 26px;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n.sidebar {\n  grid-area: 2 / 1 / 6 / 2;\n  background-color: var(--lightpurple);\n  height: 90vh;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.catagories {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  justify-content: center;\n  gap: 20px;\n}\n.catagories > button {\n  padding: 5px;\n  padding-left: 15px;\n  display: flex;\n  justify-content: start;\n  gap: 10px;\n  text-align: start;\n  font-size: 20px;\n  color: var(--textcolor);\n  font-family: var(--font);\n  background-color: var(--lightpurple);\n  border-radius: 0.2em;\n  font-weight: 500;\n  border: none;\n}\n.catagories > button:hover {\n  color: #f1f8fc;\n  background-color: var(--blue);\n  cursor: pointer;\n}\n.projects {\n  padding: 5px;\n  padding-left: 15px;\n  display: flex;\n  justify-content: start;\n  gap: 10px;\n  text-align: start;\n  font-size: 20px;\n  color: var(--textcolor);\n  font-family: var(--font);\n  background-color: var(--lightpurple);\n  border-radius: 0.2em;\n  font-weight: 500;\n  border-bottom: 2px solid var(--textcolor);\n}\n.footer {\n  grid-area: 9 / 1 / 10 / 3;\n  padding: 12px;\n  background-color: var(--blue);\n  color: white;\n}\n.todo-section-container {\n  grid-area: 2 / 2 / 9 / 3;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  height: 100%;\n}\n.quote {\n  width: 70%;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 18px;\n  font-family: var(--font);\n  color: var(--textcolor);\n}\n.catagory-title {\n  font-size: 40px;\n  font-family: var(--font);\n  height: 100px;\n  margin-bottom: 0;\n}\n.displayed-todos {\n  font-family: var(--font);\n\n  width: 80%;\n  height: 70%;\n  padding: 10px;\n  border-radius: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 50px;\n  grid-template-rows: 30px;\n  align-items: center;\n\n  background-color: var(--lightpurple);\n  font-size: 20px;\n  padding: 10px;\n  border-left: 4px solid var(--green);\n}\n.todo > p {\n  grid-area: 1 / 1 / 1 / 3;\n\n  padding: 0;\n  margin: 0;\n}\n\n.button-wrapper {\n  grid-area: 1 / 2 / 1 / 4;\n}\n.check {\n  color: white;\n  background-color: var(--green);\n  border-radius: 0.5em;\n  padding: 10px;\n  border: none;\n}\n.check:hover {\n  background-color: #295f4f;\n  cursor: pointer;\n}\n.delete {\n  color: white;\n  background-color: rgb(252, 19, 19);\n  border-radius: 0.5em;\n  padding: 10px;\n  border: none;\n}\n.delete:hover {\n  background-color: rgb(194, 3, 3);\n  cursor: pointer;\n}\n.red-text {\n  color: var(--blue);\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px;\n}\n.green-text {\n  font-weight: bold;\n  color: var(--green);\n  padding: 5px;\n  font-size: 20px;\n}\n.project {\n  color: var(--blue);\n}\n.get-to-do {\n  font-size: 30px;\n  padding-left: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectToDos = [];
  }
  addToProjectToDos(toDoList) {
    this.projectToDos.push(toDoList);
  }
}


/***/ }),

/***/ "./src/projectslist.js":
/*!*****************************!*\
  !*** ./src/projectslist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsList)
/* harmony export */ });
class ProjectsList {
  constructor() {
    this.Projects = ["Work"];
  }
  addToProjectList(project) {
    this.Projects.push(project);
  }
}


/***/ }),

/***/ "./src/rendertodos.js":
/*!****************************!*\
  !*** ./src/rendertodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderToDos)
/* harmony export */ });
function renderToDos(toDos) {
  const displayedToDos = document.querySelector(".displayed-todos");
  for (let i = 0; i < toDos.length; i++) {
    const toDoDiv = document.createElement("div");
    const buttons = renderButtons();
    toDoDiv.className = "todo";
    toDoDiv.setAttribute = toDos[i]["title"];
    toDoDiv.textContent = toDos[i].title;
    toDoDiv.append(buttons);
    displayedToDos.append(toDoDiv);
  }

  function renderButtons() {
    const buttonsContainer = document.createElement("button-wrapper");
    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    checkButton.className = "check";
    deleteButton.className = "delete";
    buttonsContainer.className = "button-wrapper";

    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonsContainer.append(checkButton, deleteButton);
    return buttonsContainer;
  }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}


/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
  constructor() {
    this.toDos = [];
  }
  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  removeToDo(toDo) {
    this.toDos = this.toDos.filter((item) => item["title"] == toDo["title"]);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectslist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectslist */ "./src/projectslist.js");
/* harmony import */ var _rendertodos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendertodos */ "./src/rendertodos.js");







const toDoDisplayed = document.querySelector(".displayed-todos");
let myList = new _todolist__WEBPACK_IMPORTED_MODULE_2__["default"]();
let myTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"]("title", "des", "date", "important");
let moreTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"]("movie", "black", "tommorow", "important");
myList.addToDo(myTodo);
myList.addToDo(moreTodo);
(0,_rendertodos__WEBPACK_IMPORTED_MODULE_5__["default"])(myList.toDos);
console.log("ptoato");

let workProject = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("Art");
workProject.addToProjectToDos(myList);
let projectsList = new _projectslist__WEBPACK_IMPORTED_MODULE_4__["default"]();

projectsList.addToProjectList(workProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ1E7QUFDRjtBQUNVO0FBQ0Y7O0FBRXhDO0FBQ0EsaUJBQWlCLGlEQUFRO0FBQ3pCLGlCQUFpQiw2Q0FBSTtBQUNyQixtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBLHdEQUFXO0FBQ1g7O0FBRUEsc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0EsdUJBQXVCLHFEQUFZOztBQUVuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvcHJvamVjdHNsaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3JlbmRlcnRvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDs0MDA7ODAwJmZhbWlseT1Sb2JvdG8rRmxleDpvcHN6LHdnaHRAOC4uMTQ0LDMwMDs4Li4xNDQsNjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC0tYmx1ZTogIzQ0NmRmNjtcXG4gIC0tbGlnaHRwdXJwbGU6ICNmN2ZhZmY7XFxuICAtLW9mZndoaXRlOiAjZjdlY2UxO1xcbiAgLS1ibGFjazogIzBkMDEwNjtcXG4gIC0tZ3JlZW46ICMzODc5NjQ7XFxuICAtLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdGV4dGNvbG9yOiAjNTU1NzU3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuXFxuICBnYXA6IDEwcHg7XFxufVxcbi5oZWFkZXIgPiBoNSB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDYgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRwdXJwbGUpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5jYXRhZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uY2F0YWdvcmllcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHB1cnBsZSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jYXRhZ29yaWVzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjFmOGZjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHB1cnBsZSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dGNvbG9yKTtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDkgLyAxIC8gMTAgLyAzO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4udG9kby1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gOSAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnF1b3RlIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0Y29sb3IpO1xcbn1cXG4uY2F0YWdvcnktdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5kaXNwbGF5ZWQtdG9kb3Mge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcblxcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNzAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHB1cnBsZSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxufVxcbi50b2RvID4gcCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyA0O1xcbn1cXG4uY2hlY2sge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2hlY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NWY0ZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRlbGV0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxOSwgMTkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDMsIDMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucmVkLXRleHQge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5ncmVlbi10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnByb2plY3Qge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG4uZ2V0LXRvLWRvIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTs7RUFFZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHdCQUF3Qjs7RUFFeEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4QixtQkFBbUI7O0VBRW5CLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usd0JBQXdCOztFQUV4QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzQwMDs4MDAmZmFtaWx5PVJvYm90bytGbGV4Om9wc3osd2dodEA4Li4xNDQsMzAwOzguLjE0NCw2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLS1ibHVlOiAjNDQ2ZGY2O1xcbiAgLS1saWdodHB1cnBsZTogI2Y3ZmFmZjtcXG4gIC0tb2Zmd2hpdGU6ICNmN2VjZTE7XFxuICAtLWJsYWNrOiAjMGQwMTA2O1xcbiAgLS1ncmVlbjogIzM4Nzk2NDtcXG4gIC0tZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS10ZXh0Y29sb3I6ICM1NTU3NTc7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG5cXG4gIGdhcDogMTBweDtcXG59XFxuLmhlYWRlciA+IGg1IHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gNiAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHB1cnBsZSk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmNhdGFnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jYXRhZ29yaWVzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0cHVycGxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNhdGFnb3JpZXMgPiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmMWY4ZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0cHVycGxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogOSAvIDEgLyAxMCAvIDM7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50b2RvLXNlY3Rpb24tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyA5IC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucXVvdGUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XFxufVxcbi5jYXRhZ29yeS10aXRsZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmRpc3BsYXllZC10b2RvcyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuXFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0cHVycGxlKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG59XFxuLnRvZG8gPiBwIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXG5cXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDQ7XFxufVxcbi5jaGVjayB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGVjazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk1ZjRmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGVsZXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDE5LCAxOSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5kZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMywgMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5yZWQtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmdyZWVuLXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ucHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcbi5nZXQtdG8tZG8ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMucHJvamVjdFRvRG9zID0gW107XG4gIH1cbiAgYWRkVG9Qcm9qZWN0VG9Eb3ModG9Eb0xpc3QpIHtcbiAgICB0aGlzLnByb2plY3RUb0Rvcy5wdXNoKHRvRG9MaXN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5Qcm9qZWN0cyA9IFtcIldvcmtcIl07XG4gIH1cbiAgYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0KSB7XG4gICAgdGhpcy5Qcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb0Rvcyh0b0Rvcykge1xuICBjb25zdCBkaXNwbGF5ZWRUb0RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheWVkLXRvZG9zXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnV0dG9ucyA9IHJlbmRlckJ1dHRvbnMoKTtcbiAgICB0b0RvRGl2LmNsYXNzTmFtZSA9IFwidG9kb1wiO1xuICAgIHRvRG9EaXYuc2V0QXR0cmlidXRlID0gdG9Eb3NbaV1bXCJ0aXRsZVwiXTtcbiAgICB0b0RvRGl2LnRleHRDb250ZW50ID0gdG9Eb3NbaV0udGl0bGU7XG4gICAgdG9Eb0Rpdi5hcHBlbmQoYnV0dG9ucyk7XG4gICAgZGlzcGxheWVkVG9Eb3MuYXBwZW5kKHRvRG9EaXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvbi13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY2hlY2tCdXR0b24uY2xhc3NOYW1lID0gXCJjaGVja1wiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJidXR0b24td3JhcHBlclwiO1xuXG4gICAgY2hlY2tCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2tcIj48L2k+YDtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+YDtcblxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNoZWNrQnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b0RvcyA9IFtdO1xuICB9XG4gIGFkZFRvRG8odG9Ebykge1xuICAgIHRoaXMudG9Eb3MucHVzaCh0b0RvKTtcbiAgfVxuICByZW1vdmVUb0RvKHRvRG8pIHtcbiAgICB0aGlzLnRvRG9zID0gdGhpcy50b0Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bXCJ0aXRsZVwiXSA9PSB0b0RvW1widGl0bGVcIl0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdHNMaXN0IGZyb20gXCIuL3Byb2plY3RzbGlzdFwiO1xuaW1wb3J0IHJlbmRlclRvRG9zIGZyb20gXCIuL3JlbmRlcnRvZG9zXCI7XG5cbmNvbnN0IHRvRG9EaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXllZC10b2Rvc1wiKTtcbmxldCBteUxpc3QgPSBuZXcgVG9Eb0xpc3QoKTtcbmxldCBteVRvZG8gPSBuZXcgVG9EbyhcInRpdGxlXCIsIFwiZGVzXCIsIFwiZGF0ZVwiLCBcImltcG9ydGFudFwiKTtcbmxldCBtb3JlVG9kbyA9IG5ldyBUb0RvKFwibW92aWVcIiwgXCJibGFja1wiLCBcInRvbW1vcm93XCIsIFwiaW1wb3J0YW50XCIpO1xubXlMaXN0LmFkZFRvRG8obXlUb2RvKTtcbm15TGlzdC5hZGRUb0RvKG1vcmVUb2RvKTtcbnJlbmRlclRvRG9zKG15TGlzdC50b0Rvcyk7XG5jb25zb2xlLmxvZyhcInB0b2F0b1wiKTtcblxubGV0IHdvcmtQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJBcnRcIik7XG53b3JrUHJvamVjdC5hZGRUb1Byb2plY3RUb0RvcyhteUxpc3QpO1xubGV0IHByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0c0xpc3QoKTtcblxucHJvamVjdHNMaXN0LmFkZFRvUHJvamVjdExpc3Qod29ya1Byb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9