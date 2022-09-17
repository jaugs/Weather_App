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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n.header {\r\n  background-color: #e0f2fe;\r\n  text-shadow: -1px 0  white, 0 1px  white, 1px 0  white, 0 -1px  white;\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  color: #0c4a6e;\r\n  width: 15rem;\r\n  height: 5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 1rem;\r\n  border-radius: 14px;\r\n}\r\n\r\n.confirm {\r\n  background-color: #0369a1;\r\n    width: 8rem;\r\n    height: 4rem;\r\n    color: #f0f9ff;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 14px;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 45%;\r\n  border: 2px solid #0c4a6e;\r\n  border-radius: 14px;\r\n  padding: 10px;\r\n}\r\n\r\n.dropbtn {\r\n    background-color: #0369a1;\r\n    width: 8rem;\r\n    height: 4rem;\r\n    color: #f0f9ff;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 14px;\r\n  }\r\n  \r\n  .dropbtn:hover, .dropbtn:focus, .confirm:hover, .confirm:focus {\r\n    background-color: #0c4a6e;\r\n  }\r\n  \r\n  .dropdownMenu {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f0f9ff;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: #0c4a6e;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown-content a:hover {background-color: #bae6fd;}\r\n  \r\n  .show {display:block;}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.searchContainer {\r\n  background-color: #e0f2fe;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 1rem;\r\n  border-radius: 14px;\r\n\r\n}\r\n\r\n#display {\r\n  background-color: #e0f2fe;\r\n  width: 24rem;\r\n  height: 30rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5rem;\r\n  border-radius: 14px;\r\n\r\n}\r\n\r\n.location {\r\n  color: white;\r\n  text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2px;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n}\r\n\r\n.tempDisplay {\r\n  color: white;\r\n  text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2px;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n}\r\n\r\n  .icon {\r\n    color: white;\r\n    width: 3rem;\r\n  }\r\n\r\n  .windDisplay {\r\n    color: white;\r\n    text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2px;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .humidity {\r\n    color: white;\r\n    text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2px;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n  }\r\n.forecastTitle {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n}\r\n  #forecast {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    padding: 1px;\r\n\r\n  }\r\n\r\n  .forecastContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 39rem;\r\n    height: 7rem;\r\n    color: #0c4a6e;\r\n    background-color: #e0f2fe;\r\n    border: 1px solid black;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 14px;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,qEAAqE;EACrE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,2CAA2C;EAC3C,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;IACvB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,YAAY;IACZ,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,4CAA4C;IAC5C,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;EAChB;;EAEA,2BAA2B,yBAAyB,CAAC;;EAErD,OAAO,aAAa,CAAC;;AAEvB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,2CAA2C;EAC3C,aAAa;EACb,mBAAmB;;AAErB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,2CAA2C;EAC3C,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;;AAErB;;AAEA;EACE,YAAY;EACZ,qEAAqE;EACrE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qEAAqE;EACrE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;;EAEE;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,qEAAqE;IACrE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,qEAAqE;IACrE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,eAAe;IACf,gBAAgB;EAClB;AACF;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;;EAEd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,2CAA2C;IAC3C,mBAAmB;EACrB","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n.header {\r\n  background-color: #e0f2fe;\r\n  text-shadow: -1px 0  white, 0 1px  white, 1px 0  white, 0 -1px  white;\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  color: #0c4a6e;\r\n  width: 15rem;\r\n  height: 5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 1rem;\r\n  border-radius: 14px;\r\n}\r\n\r\n.confirm {\r\n  background-color: #0369a1;\r\n    width: 8rem;\r\n    height: 4rem;\r\n    color: #f0f9ff;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 14px;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 45%;\r\n  border: 2px solid #0c4a6e;\r\n  border-radius: 14px;\r\n  padding: 10px;\r\n}\r\n\r\n.dropbtn {\r\n    background-color: #0369a1;\r\n    width: 8rem;\r\n    height: 4rem;\r\n    color: #f0f9ff;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 14px;\r\n  }\r\n  \r\n  .dropbtn:hover, .dropbtn:focus, .confirm:hover, .confirm:focus {\r\n    background-color: #0c4a6e;\r\n  }\r\n  \r\n  .dropdownMenu {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f0f9ff;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: #0c4a6e;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown-content a:hover {background-color: #bae6fd;}\r\n  \r\n  .show {display:block;}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.searchContainer {\r\n  background-color: #e0f2fe;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 1rem;\r\n  border-radius: 14px;\r\n\r\n}\r\n\r\n#display {\r\n  background-color: #e0f2fe;\r\n  width: 24rem;\r\n  height: 30rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5rem;\r\n  border-radius: 14px;\r\n\r\n}\r\n\r\n.location {\r\n  color: white;\r\n  text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2px;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n}\r\n\r\n.tempDisplay {\r\n  color: white;\r\n  text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2px;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n}\r\n\r\n  .icon {\r\n    color: white;\r\n    width: 3rem;\r\n  }\r\n\r\n  .windDisplay {\r\n    color: white;\r\n    text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2px;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .humidity {\r\n    color: white;\r\n    text-shadow: -1px 0  black, 0 1px  black, 1px 0  black, 0 -1px  black;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2px;\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n  }\r\n.forecastTitle {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n}\r\n  #forecast {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    padding: 1px;\r\n\r\n  }\r\n\r\n  .forecastContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 39rem;\r\n    height: 7rem;\r\n    color: #0c4a6e;\r\n    background-color: #e0f2fe;\r\n    border: 1px solid black;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 14px;\r\n  }"],"sourceRoot":""}]);
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

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from print.js!');
  }

/***/ }),

/***/ "./src/backgrounds/cloudyBackground.jpg":
/*!**********************************************!*\
  !*** ./src/backgrounds/cloudyBackground.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb480a81cfe0fe2e052f.jpg";

/***/ }),

/***/ "./src/backgrounds/partlycloudyBackground.jpg":
/*!****************************************************!*\
  !*** ./src/backgrounds/partlycloudyBackground.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7100ac4b4f6a78d391f6.jpg";

/***/ }),

/***/ "./src/backgrounds/pouringBackground.jpg":
/*!***********************************************!*\
  !*** ./src/backgrounds/pouringBackground.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8a7ff9d7d9e8c40461d.jpg";

/***/ }),

/***/ "./src/backgrounds/rainyBackground.jpg":
/*!*********************************************!*\
  !*** ./src/backgrounds/rainyBackground.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47da012122c19d9ecb92.jpg";

/***/ }),

/***/ "./src/backgrounds/snowyBackground.jpg":
/*!*********************************************!*\
  !*** ./src/backgrounds/snowyBackground.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bce9b95712f7454255fd.jpg";

/***/ }),

/***/ "./src/backgrounds/sunBackground.jpg":
/*!*******************************************!*\
  !*** ./src/backgrounds/sunBackground.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3069da81c03b830c9cf8.jpg";

/***/ }),

/***/ "./src/backgrounds/thunderBackground.jpg":
/*!***********************************************!*\
  !*** ./src/backgrounds/thunderBackground.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bff698d80d8341554f0.jpg";

/***/ }),

/***/ "./src/backgrounds/windyBackground.jpg":
/*!*********************************************!*\
  !*** ./src/backgrounds/windyBackground.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "123308719b3f7a40ba73.jpg";

/***/ }),

/***/ "./src/icons/weather-cloudy.svg":
/*!**************************************!*\
  !*** ./src/icons/weather-cloudy.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9342e375ab3da73ddea5.svg";

/***/ }),

/***/ "./src/icons/weather-lightning.svg":
/*!*****************************************!*\
  !*** ./src/icons/weather-lightning.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39455fbcb9cf0e39d183.svg";

/***/ }),

/***/ "./src/icons/weather-night.svg":
/*!*************************************!*\
  !*** ./src/icons/weather-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2afd3e7710652f944bcf.svg";

/***/ }),

/***/ "./src/icons/weather-partly-cloudy.svg":
/*!*********************************************!*\
  !*** ./src/icons/weather-partly-cloudy.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cb8238507668441d7ee.svg";

/***/ }),

/***/ "./src/icons/weather-pouring.svg":
/*!***************************************!*\
  !*** ./src/icons/weather-pouring.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "105e4d8334493ba05685.svg";

/***/ }),

/***/ "./src/icons/weather-rainy.svg":
/*!*************************************!*\
  !*** ./src/icons/weather-rainy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "159a59529d3554462f13.svg";

/***/ }),

/***/ "./src/icons/weather-snowy-rainy.svg":
/*!*******************************************!*\
  !*** ./src/icons/weather-snowy-rainy.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83197239ba8848852d30.svg";

/***/ }),

/***/ "./src/icons/weather-snowy.svg":
/*!*************************************!*\
  !*** ./src/icons/weather-snowy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e44f98c8769e46140bc3.svg";

/***/ }),

/***/ "./src/icons/weather-sunny.svg":
/*!*************************************!*\
  !*** ./src/icons/weather-sunny.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d8e77d0f79f95ade8c.svg";

/***/ }),

/***/ "./src/icons/weather-windy.svg":
/*!*************************************!*\
  !*** ./src/icons/weather-windy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a5e68987c5e27b759b6.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/weather-cloudy.svg */ "./src/icons/weather-cloudy.svg");
/* harmony import */ var _icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/weather-lightning.svg */ "./src/icons/weather-lightning.svg");
/* harmony import */ var _icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/weather-night.svg */ "./src/icons/weather-night.svg");
/* harmony import */ var _icons_weather_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/weather-partly-cloudy.svg */ "./src/icons/weather-partly-cloudy.svg");
/* harmony import */ var _icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/weather-pouring.svg */ "./src/icons/weather-pouring.svg");
/* harmony import */ var _icons_weather_snowy_rainy_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/weather-snowy-rainy.svg */ "./src/icons/weather-snowy-rainy.svg");
/* harmony import */ var _icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/weather-rainy.svg */ "./src/icons/weather-rainy.svg");
/* harmony import */ var _icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/weather-snowy.svg */ "./src/icons/weather-snowy.svg");
/* harmony import */ var _icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/weather-sunny.svg */ "./src/icons/weather-sunny.svg");
/* harmony import */ var _icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/weather-windy.svg */ "./src/icons/weather-windy.svg");
/* harmony import */ var _backgrounds_cloudyBackground_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./backgrounds/cloudyBackground.jpg */ "./src/backgrounds/cloudyBackground.jpg");
/* harmony import */ var _backgrounds_partlycloudyBackground_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./backgrounds/partlycloudyBackground.jpg */ "./src/backgrounds/partlycloudyBackground.jpg");
/* harmony import */ var _backgrounds_pouringBackground_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./backgrounds/pouringBackground.jpg */ "./src/backgrounds/pouringBackground.jpg");
/* harmony import */ var _backgrounds_rainyBackground_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./backgrounds/rainyBackground.jpg */ "./src/backgrounds/rainyBackground.jpg");
/* harmony import */ var _backgrounds_snowyBackground_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backgrounds/snowyBackground.jpg */ "./src/backgrounds/snowyBackground.jpg");
/* harmony import */ var _backgrounds_sunBackground_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./backgrounds/sunBackground.jpg */ "./src/backgrounds/sunBackground.jpg");
/* harmony import */ var _backgrounds_thunderBackground_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./backgrounds/thunderBackground.jpg */ "./src/backgrounds/thunderBackground.jpg");
/* harmony import */ var _backgrounds_windyBackground_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./backgrounds/windyBackground.jpg */ "./src/backgrounds/windyBackground.jpg");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./print.js */ "./src/print.js");






















const container = document.querySelector('.container');
const header = document.querySelector('.header');
const dropdownButton = document.querySelector('.dropbtn');
dropdownButton.onclick = () => {showSelections();}
var now = new Date();
var now_utc = new Date(now.toUTCString());
var new_utc = new Date(now.toUTCString().slice(0, -4));
//let time = new_utc.slice(-16);

console.log(new_utc)



   function showSelections() {
      document.getElementById("drop").classList.toggle("show");
 }
 
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }}}}

const zipCode = document.getElementById('zipcode');
const city = document.getElementById('city');

zipCode.onclick = () => searchZip();
city.onclick = () => searchCity();

function searchZip () {
   dropdownButton.innerText = "Zip Code:"
}

function searchCity () {
   dropdownButton.innerText = "City:"

}

   let confirmBtn = document.querySelector('.confirm')
   confirmBtn.onclick = async () => {
      if (dropdownButton.innerText == 'Zip Code:') {
         let zipValue = document.getElementById('search').value;
         console.log(zipValue);
         let weather = await getWeatherDataZip(zipValue)
      } else if (dropdownButton.innerText == 'City:') {
         let cityValue = document.getElementById('search').value;
         console.log(cityValue);
         let weather = await getWeatherDataCity(cityValue)
      } else dropdownButton.style.backgroundColor = 'red';
   }

   async function getWeatherDataCity(city) {
     let unit = 'imperial'
      let weather = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
      let weatherData = await weather.json();
      console.log(weatherData);
      displayWeather(weatherData);
   }



async function getWeatherDataZip(zip) {
   let getCoors = await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=7100239e64c481b759f7889a357558f4`, {mode: 'cors'});
   let coorData = await getCoors.json();
   let lattitute = coorData.lat;
   let longitude = coorData.lon;
   getForecast(lattitute, longitude);
   let unit = 'imperial'
  let weatherCall = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitute}&lon=${longitude}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let weatherData = await weatherCall.json();
  console.log(weatherData);
  displayWeather(weatherData);
}

async function getForecast (lat, lon){
  // let currentTime = Math.floor(new Date().getTime()/1000.0)
   
   let unit = 'imperial'
  let forecastCall = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let forecastData = await forecastCall.json();
  console.log(forecastData);


  displayForecast(forecastData)

}
 


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
function displayForecast(data) {
   const container = document.getElementById('forecast')
   const day1 = document.getElementById('day1')
   const day2 = document.getElementById('day2')
   const day3 = document.getElementById('day3')
   const day4 = document.getElementById('day4')
   const day5 = document.getElementById('day5')
  
   let day1Temp = [];
   for (let i = 0; i < 8; i++) {
      day1Temp[i] = (data.list[i].main.temp);
   }
   const max1 = day1Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min1 = day1Temp.reduce((a, b) => Math.min(a, b))
   day1.innerText= `${max1}°F/${min1}°F`;

   let day2Temp = [];
   for (let i = 8; i < 16; i++) {
      day2Temp[i] = (data.list[i].main.temp);
   }
   const max2 = day2Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min2 = day2Temp.reduce((a, b) => Math.min(a, b))
   day2.innerText= `${max2}°F/${min2}°F`;

   let day3Temp = [];
   for (let i = 16; i < 24; i++) {
      day3Temp[i] = (data.list[i].main.temp);
   }
   const max3 = day3Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min3 = day3Temp.reduce((a, b) => Math.min(a, b))
   day3.innerText= `${max3}°F/${min3}°F`;

   let day4Temp = [];
   for (let i = 24; i < 32; i++) {
      day4Temp[i] = (data.list[i].main.temp);
   }
   const max4 = day4Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min4 = day4Temp.reduce((a, b) => Math.min(a, b))
   day4.innerText= `${max4}°F/${min4}°F`;

   let day5Temp = [];
   for (let i = 32; i < 40; i++) {
      day5Temp[i] = (data.list[i].main.temp);
   }
   const max5 = day5Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min5 = day5Temp.reduce((a, b) => Math.min(a, b))
   day5.innerText= `${max5}°F/${min5}°F`;
}

function createIcon (type) {
   const icon = new Image();
   icon.src = type;
   icon.setAttribute('class', 'icon')
   return icon
}

function displayWeather(weatherData) {
   const display = document.getElementById('display');

   const nameDisplay = document.createElement('div');
   nameDisplay.setAttribute('class', 'location')
   nameDisplay.innerText = weatherData.name;
   let weatherID = weatherData.weather[0].id;
   let currentIcon = weatherIconType(weatherID);
   nameDisplay.appendChild(createIcon(currentIcon));
   display.appendChild(nameDisplay);

   const tempDisplay = document.createElement('div');
   tempDisplay.setAttribute('class', 'tempDisplay');
   const temperature = document.createElement('div')
   temperature.innerText = weatherData.main.temp;
   let unit = document.createElement('div');
   unit.setAttribute('class', 'unit');
   unit.innerText = ' °F';
   tempDisplay.appendChild(temperature);
   tempDisplay.appendChild(unit);
   display.appendChild(tempDisplay);

   const humidityDisplay = document.createElement('div');
   humidityDisplay.setAttribute('class', 'humidity')
   humidityDisplay.innerText = `${weatherData.main.humidity}% Humidity`;
   display.appendChild(humidityDisplay);


   const windDisplay = document.createElement('div');
   windDisplay.setAttribute('class', 'windDisplay')
   let windDirection = getWind(weatherData.wind.deg);
   windDisplay.innerText = `${windDirection} ${weatherData.wind.speed} MPH`;
   display.appendChild(windDisplay);
   // let currentBackground = createBackground(weatherBackground(weatherID));
  // console.log(currentBackground);
   display.style.backgroundImage = `url(` + weatherBackground(weatherID) + `)`

}

function getWind(degree) {
   if ((degree >= 340 ) || (degree <= 30)) {
      return "N"
   } else if ((degree >= 31 ) && (degree <= 69)) {
      return "NE"
   } else if ((degree >= 70 ) && (degree <= 120)) {
      return "E"
   } else if ((degree >= 121 ) && (degree <= 159)) {
      return "SE"
   } else if ((degree >= 160 ) && (degree <= 200)) {
      return "S"
   } else if ((degree >= 201 ) && (degree <= 249)) {
      return "SW"
   } else if ((degree >= 250 ) && (degree <= 290)) {
      return "W"
   } else if ((degree >= 291 ) && (degree <= 339)) {
      return "NW"
   } else return "?"
}

function weatherBackground (code, time) {
   if (code === 800) {
      return _backgrounds_sunBackground_jpg__WEBPACK_IMPORTED_MODULE_16__
   } else if (code > 800) {
      return _backgrounds_cloudyBackground_jpg__WEBPACK_IMPORTED_MODULE_11__
   } else if ((code >= 600) && (code <= 622)) {
      return _backgrounds_snowyBackground_jpg__WEBPACK_IMPORTED_MODULE_15__
   } else if ((code >= 500) && (code <= 501)) {
      return _backgrounds_rainyBackground_jpg__WEBPACK_IMPORTED_MODULE_14__
   } else if ((code >= 501) && (code <= 531)) {
      return _backgrounds_pouringBackground_jpg__WEBPACK_IMPORTED_MODULE_13__
   } else if ((code >= 300) && (code <= 321)) {
      return  _backgrounds_rainyBackground_jpg__WEBPACK_IMPORTED_MODULE_14__
   } else if ((code >= 200) && (code <= 232)) {
      return _backgrounds_thunderBackground_jpg__WEBPACK_IMPORTED_MODULE_17__
   } else return _backgrounds_windyBackground_jpg__WEBPACK_IMPORTED_MODULE_18__
}


function weatherIconType (code, time) {
   if (code === 800) {
      return _icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_9__
   } else if (code > 800) {
      return _icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__
   } else if ((code >= 600) && (code <= 622)) {
      return _icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_8__
   } else if ((code >= 500) && (code <= 501)) {
      return _icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_7__
   } else if ((code >= 501) && (code <= 531)) {
      return _icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_5__
   } else if ((code >= 300) && (code <= 321)) {
      return  _icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_7__
   } else if ((code >= 200) && (code <= 232)) {
      return _icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_2__
   } else return _icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_10__
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7QUFDNUIsS0FBSztBQUNMLGFBQWEsZ0VBQWlCO0FBQzlCLEtBQUs7QUFDTCxjQUFjLDhEQUFlO0FBQzdCLEtBQUs7QUFDTCxhQUFhLGdFQUFpQjtBQUM5QixLQUFLLFlBQVksOERBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQUs7QUFDbEIsS0FBSztBQUNMLGFBQWEsc0RBQU07QUFDbkIsS0FBSztBQUNMLGFBQWEscURBQUs7QUFDbEIsS0FBSztBQUNMLGFBQWEscURBQUs7QUFDbEIsS0FBSztBQUNMLGFBQWEsdURBQU87QUFDcEIsS0FBSztBQUNMLGNBQWMscURBQUs7QUFDbkIsS0FBSztBQUNMLGFBQWEseURBQVM7QUFDdEIsS0FBSyxZQUFZLHNEQUFLO0FBQ3RCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAwICB3aGl0ZSwgMCAxcHggIHdoaXRlLCAxcHggMCAgd2hpdGUsIDAgLTFweCAgd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMwYzRhNmU7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2OWExO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBjb2xvcjogI2YwZjlmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzBjNGE2ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzY5YTE7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIGNvbG9yOiAjZjBmOWZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMsIC5jb25maXJtOmhvdmVyLCAuY29uZmlybTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kcm9wZG93bk1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XFxyXFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcXHJcXG4gICAgY29sb3I6ICMwYzRhNmU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2JhZTZmZDt9XFxyXFxuICBcXHJcXG4gIC5zaG93IHtkaXNwbGF5OmJsb2NrO31cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQ29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jZGlzcGxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xcclxcbiAgd2lkdGg6IDI0cmVtO1xcclxcbiAgaGVpZ2h0OiAzMHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgIGJsYWNrLCAwIDFweCAgYmxhY2ssIDFweCAwICBibGFjaywgMCAtMXB4ICBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcERpc3BsYXkge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAgYmxhY2ssIDAgMXB4ICBibGFjaywgMXB4IDAgIGJsYWNrLCAwIC0xcHggIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiAgLmljb24ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndpbmREaXNwbGF5IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwICBibGFjaywgMCAxcHggIGJsYWNrLCAxcHggMCAgYmxhY2ssIDAgLTFweCAgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaHVtaWRpdHkge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgIGJsYWNrLCAwIDFweCAgYmxhY2ssIDFweCAwICBibGFjaywgMCAtMXB4ICBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIH1cXHJcXG4uZm9yZWNhc3RUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuICAjZm9yZWNhc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9yZWNhc3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMzlyZW07XFxyXFxuICAgIGhlaWdodDogN3JlbTtcXHJcXG4gICAgY29sb3I6ICMwYzRhNmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUVBQXFFO0VBQ3JFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBLDJCQUEyQix5QkFBeUIsQ0FBQzs7RUFFckQsT0FBTyxhQUFhLENBQUM7O0FBRXZCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxRUFBcUU7RUFDckUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxRUFBcUU7RUFDckUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7RUFFRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAgd2hpdGUsIDAgMXB4ICB3aGl0ZSwgMXB4IDAgIHdoaXRlLCAwIC0xcHggIHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMGM0YTZlO1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjlhMTtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgY29sb3I6ICNmMGY5ZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzRhNmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3BidG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2OWExO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBjb2xvcjogI2YwZjlmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzLCAuY29uZmlybTpob3ZlciwgLmNvbmZpcm06Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZHJvcGRvd25NZW51IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOWZmO1xcclxcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxyXFxuICAgIGNvbG9yOiAjMGM0YTZlO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNiYWU2ZmQ7fVxcclxcbiAgXFxyXFxuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaENvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2Rpc3BsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjJmZTtcXHJcXG4gIHdpZHRoOiAyNHJlbTtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAwICBibGFjaywgMCAxcHggIGJsYWNrLCAxcHggMCAgYmxhY2ssIDAgLTFweCAgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBEaXNwbGF5IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgIGJsYWNrLCAwIDFweCAgYmxhY2ssIDFweCAwICBibGFjaywgMCAtMXB4ICBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4gIC5pY29uIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53aW5kRGlzcGxheSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCAgYmxhY2ssIDAgMXB4ICBibGFjaywgMXB4IDAgIGJsYWNrLCAwIC0xcHggIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmh1bWlkaXR5IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwICBibGFjaywgMCAxcHggIGJsYWNrLCAxcHggMCAgYmxhY2ssIDAgLTFweCAgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuLmZvcmVjYXN0VGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbiAgI2ZvcmVjYXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcmVjYXN0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDM5cmVtO1xcclxcbiAgICBoZWlnaHQ6IDdyZW07XFxyXFxuICAgIGNvbG9yOiAjMGM0YTZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2ljb25zL3dlYXRoZXItY2xvdWR5LnN2Zyc7XHJcbmltcG9ydCBsaWdodG5pbmcgZnJvbSAnLi9pY29ucy93ZWF0aGVyLWxpZ2h0bmluZy5zdmcnO1xyXG5pbXBvcnQgbmlnaHQgZnJvbSAnLi9pY29ucy93ZWF0aGVyLW5pZ2h0LnN2Zyc7XHJcbmltcG9ydCBwYXJ0bHlfY2xvdWR5IGZyb20gJy4vaWNvbnMvd2VhdGhlci1wYXJ0bHktY2xvdWR5LnN2Zyc7XHJcbmltcG9ydCBwb3VyaW5nIGZyb20gJy4vaWNvbnMvd2VhdGhlci1wb3VyaW5nLnN2Zyc7XHJcbmltcG9ydCBzbm93eV9yYWlueSBmcm9tICcuL2ljb25zL3dlYXRoZXItc25vd3ktcmFpbnkuc3ZnJztcclxuaW1wb3J0IHJhaW55IGZyb20gJy4vaWNvbnMvd2VhdGhlci1yYWlueS5zdmcnO1xyXG5pbXBvcnQgc25vd3kgZnJvbSAnLi9pY29ucy93ZWF0aGVyLXNub3d5LnN2Zyc7XHJcbmltcG9ydCBzdW5ueSBmcm9tICcuL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnJztcclxuaW1wb3J0IHdpbmR5IGZyb20gJy4vaWNvbnMvd2VhdGhlci13aW5keS5zdmcnO1xyXG5pbXBvcnQgY2xvdWR5QmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmRzL2Nsb3VkeUJhY2tncm91bmQuanBnJztcclxuaW1wb3J0IHBhcnRseWNsb3VkeUJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kcy9wYXJ0bHljbG91ZHlCYWNrZ3JvdW5kLmpwZyc7XHJcbmltcG9ydCBwb3VyaW5nQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmRzL3BvdXJpbmdCYWNrZ3JvdW5kLmpwZyc7XHJcbmltcG9ydCByYWlueUJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kcy9yYWlueUJhY2tncm91bmQuanBnJztcclxuaW1wb3J0IHNub3d5QmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmRzL3Nub3d5QmFja2dyb3VuZC5qcGcnO1xyXG5pbXBvcnQgc3VuQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmRzL3N1bkJhY2tncm91bmQuanBnJztcclxuaW1wb3J0IHRodW5kZXJCYWNrZ3JvdW5kIGZyb20gJy4vYmFja2dyb3VuZHMvdGh1bmRlckJhY2tncm91bmQuanBnJztcclxuaW1wb3J0IHdpbmR5QmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmRzL3dpbmR5QmFja2dyb3VuZC5qcGcnO1xyXG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcclxuXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGJ0bicpO1xyXG5kcm9wZG93bkJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3Nob3dTZWxlY3Rpb25zKCk7fVxyXG52YXIgbm93ID0gbmV3IERhdGUoKTtcclxudmFyIG5vd191dGMgPSBuZXcgRGF0ZShub3cudG9VVENTdHJpbmcoKSk7XHJcbnZhciBuZXdfdXRjID0gbmV3IERhdGUobm93LnRvVVRDU3RyaW5nKCkuc2xpY2UoMCwgLTQpKTtcclxuLy9sZXQgdGltZSA9IG5ld191dGMuc2xpY2UoLTE2KTtcclxuXHJcbmNvbnNvbGUubG9nKG5ld191dGMpXHJcblxyXG5cclxuXHJcbiAgIGZ1bmN0aW9uIHNob3dTZWxlY3Rpb25zKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3BcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiB9XHJcbiBcclxuIC8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XHJcbiB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcclxuICAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICAgdmFyIGk7XHJcbiAgICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgIH19fX1cclxuXHJcbmNvbnN0IHppcENvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwY29kZScpO1xyXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcclxuXHJcbnppcENvZGUub25jbGljayA9ICgpID0+IHNlYXJjaFppcCgpO1xyXG5jaXR5Lm9uY2xpY2sgPSAoKSA9PiBzZWFyY2hDaXR5KCk7XHJcblxyXG5mdW5jdGlvbiBzZWFyY2haaXAgKCkge1xyXG4gICBkcm9wZG93bkJ1dHRvbi5pbm5lclRleHQgPSBcIlppcCBDb2RlOlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaENpdHkgKCkge1xyXG4gICBkcm9wZG93bkJ1dHRvbi5pbm5lclRleHQgPSBcIkNpdHk6XCJcclxuXHJcbn1cclxuXHJcbiAgIGxldCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0nKVxyXG4gICBjb25maXJtQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChkcm9wZG93bkJ1dHRvbi5pbm5lclRleHQgPT0gJ1ppcCBDb2RlOicpIHtcclxuICAgICAgICAgbGV0IHppcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyh6aXBWYWx1ZSk7XHJcbiAgICAgICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckRhdGFaaXAoemlwVmFsdWUpXHJcbiAgICAgIH0gZWxzZSBpZiAoZHJvcGRvd25CdXR0b24uaW5uZXJUZXh0ID09ICdDaXR5OicpIHtcclxuICAgICAgICAgbGV0IGNpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZTtcclxuICAgICAgICAgY29uc29sZS5sb2coY2l0eVZhbHVlKTtcclxuICAgICAgICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YUNpdHkoY2l0eVZhbHVlKVxyXG4gICAgICB9IGVsc2UgZHJvcGRvd25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhQ2l0eShjaXR5KSB7XHJcbiAgICAgbGV0IHVuaXQgPSAnaW1wZXJpYWwnXHJcbiAgICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2ggKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD03MTAwMjM5ZTY0YzQ4MWI3NTlmNzg4OWEzNTc1NThmNCZ1bml0cz0ke3VuaXR9YCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xyXG4gICAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSk7XHJcbiAgIH1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGFaaXAoemlwKSB7XHJcbiAgIGxldCBnZXRDb29ycyA9IGF3YWl0IGZldGNoIChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC96aXA/emlwPSR7emlwfSZhcHBpZD03MTAwMjM5ZTY0YzQ4MWI3NTlmNzg4OWEzNTc1NThmNGAsIHttb2RlOiAnY29ycyd9KTtcclxuICAgbGV0IGNvb3JEYXRhID0gYXdhaXQgZ2V0Q29vcnMuanNvbigpO1xyXG4gICBsZXQgbGF0dGl0dXRlID0gY29vckRhdGEubGF0O1xyXG4gICBsZXQgbG9uZ2l0dWRlID0gY29vckRhdGEubG9uO1xyXG4gICBnZXRGb3JlY2FzdChsYXR0aXR1dGUsIGxvbmdpdHVkZSk7XHJcbiAgIGxldCB1bml0ID0gJ2ltcGVyaWFsJ1xyXG4gIGxldCB3ZWF0aGVyQ2FsbCA9IGF3YWl0IGZldGNoIChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0dGl0dXRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTcxMDAyMzllNjRjNDgxYjc1OWY3ODg5YTM1NzU1OGY0JnVuaXRzPSR7dW5pdH1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckNhbGwuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0IChsYXQsIGxvbil7XHJcbiAgLy8gbGV0IGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKS8xMDAwLjApXHJcbiAgIFxyXG4gICBsZXQgdW5pdCA9ICdpbXBlcmlhbCdcclxuICBsZXQgZm9yZWNhc3RDYWxsID0gYXdhaXQgZmV0Y2ggKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPTcxMDAyMzllNjRjNDgxYjc1OWY3ODg5YTM1NzU1OGY0JnVuaXRzPSR7dW5pdH1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgbGV0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0Q2FsbC5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcclxuXHJcblxyXG4gIGRpc3BsYXlGb3JlY2FzdChmb3JlY2FzdERhdGEpXHJcblxyXG59XHJcbiBcclxuXHJcblxyXG4vLyBjb25zdCBwb2ludHMgPSBbNDAsIDEwMCwgMSwgNSwgMjUsIDEwXTtcclxuLy8gcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYil7cmV0dXJuIGEgLSBifSk7XHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdChkYXRhKSB7XHJcbiAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdCcpXHJcbiAgIGNvbnN0IGRheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MScpXHJcbiAgIGNvbnN0IGRheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MicpXHJcbiAgIGNvbnN0IGRheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5MycpXHJcbiAgIGNvbnN0IGRheTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5NCcpXHJcbiAgIGNvbnN0IGRheTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5NScpXHJcbiAgXHJcbiAgIGxldCBkYXkxVGVtcCA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBkYXkxVGVtcFtpXSA9IChkYXRhLmxpc3RbaV0ubWFpbi50ZW1wKTtcclxuICAgfVxyXG4gICBjb25zdCBtYXgxID0gZGF5MVRlbXAucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLUluZmluaXR5KTtcclxuICAgY29uc3QgbWluMSA9IGRheTFUZW1wLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYikpXHJcbiAgIGRheTEuaW5uZXJUZXh0PSBgJHttYXgxfcKwRi8ke21pbjF9wrBGYDtcclxuXHJcbiAgIGxldCBkYXkyVGVtcCA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gODsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgZGF5MlRlbXBbaV0gPSAoZGF0YS5saXN0W2ldLm1haW4udGVtcCk7XHJcbiAgIH1cclxuICAgY29uc3QgbWF4MiA9IGRheTJUZW1wLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC1JbmZpbml0eSk7XHJcbiAgIGNvbnN0IG1pbjIgPSBkYXkyVGVtcC5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIpKVxyXG4gICBkYXkyLmlubmVyVGV4dD0gYCR7bWF4Mn3CsEYvJHttaW4yfcKwRmA7XHJcblxyXG4gICBsZXQgZGF5M1RlbXAgPSBbXTtcclxuICAgZm9yIChsZXQgaSA9IDE2OyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICBkYXkzVGVtcFtpXSA9IChkYXRhLmxpc3RbaV0ubWFpbi50ZW1wKTtcclxuICAgfVxyXG4gICBjb25zdCBtYXgzID0gZGF5M1RlbXAucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLUluZmluaXR5KTtcclxuICAgY29uc3QgbWluMyA9IGRheTNUZW1wLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYikpXHJcbiAgIGRheTMuaW5uZXJUZXh0PSBgJHttYXgzfcKwRi8ke21pbjN9wrBGYDtcclxuXHJcbiAgIGxldCBkYXk0VGVtcCA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gMjQ7IGkgPCAzMjsgaSsrKSB7XHJcbiAgICAgIGRheTRUZW1wW2ldID0gKGRhdGEubGlzdFtpXS5tYWluLnRlbXApO1xyXG4gICB9XHJcbiAgIGNvbnN0IG1heDQgPSBkYXk0VGVtcC5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIpLCAtSW5maW5pdHkpO1xyXG4gICBjb25zdCBtaW40ID0gZGF5NFRlbXAucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1pbihhLCBiKSlcclxuICAgZGF5NC5pbm5lclRleHQ9IGAke21heDR9wrBGLyR7bWluNH3CsEZgO1xyXG5cclxuICAgbGV0IGRheTVUZW1wID0gW107XHJcbiAgIGZvciAobGV0IGkgPSAzMjsgaSA8IDQwOyBpKyspIHtcclxuICAgICAgZGF5NVRlbXBbaV0gPSAoZGF0YS5saXN0W2ldLm1haW4udGVtcCk7XHJcbiAgIH1cclxuICAgY29uc3QgbWF4NSA9IGRheTVUZW1wLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC1JbmZpbml0eSk7XHJcbiAgIGNvbnN0IG1pbjUgPSBkYXk1VGVtcC5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIpKVxyXG4gICBkYXk1LmlubmVyVGV4dD0gYCR7bWF4NX3CsEYvJHttaW41fcKwRmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUljb24gKHR5cGUpIHtcclxuICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICBpY29uLnNyYyA9IHR5cGU7XHJcbiAgIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcclxuICAgcmV0dXJuIGljb25cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpIHtcclxuICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICBjb25zdCBuYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBuYW1lRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvY2F0aW9uJylcclxuICAgbmFtZURpc3BsYXkuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEubmFtZTtcclxuICAgbGV0IHdlYXRoZXJJRCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWQ7XHJcbiAgIGxldCBjdXJyZW50SWNvbiA9IHdlYXRoZXJJY29uVHlwZSh3ZWF0aGVySUQpO1xyXG4gICBuYW1lRGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVJY29uKGN1cnJlbnRJY29uKSk7XHJcbiAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobmFtZURpc3BsYXkpO1xyXG5cclxuICAgY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgdGVtcERpc3BsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wRGlzcGxheScpO1xyXG4gICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcclxuICAgbGV0IHVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgdW5pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VuaXQnKTtcclxuICAgdW5pdC5pbm5lclRleHQgPSAnIMKwRic7XHJcbiAgIHRlbXBEaXNwbGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcclxuICAgdGVtcERpc3BsYXkuYXBwZW5kQ2hpbGQodW5pdCk7XHJcbiAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodGVtcERpc3BsYXkpO1xyXG5cclxuICAgY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGh1bWlkaXR5RGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5JylcclxuICAgaHVtaWRpdHlEaXNwbGF5LmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JSBIdW1pZGl0eWA7XHJcbiAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXNwbGF5KTtcclxuXHJcblxyXG4gICBjb25zdCB3aW5kRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICB3aW5kRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmREaXNwbGF5JylcclxuICAgbGV0IHdpbmREaXJlY3Rpb24gPSBnZXRXaW5kKHdlYXRoZXJEYXRhLndpbmQuZGVnKTtcclxuICAgd2luZERpc3BsYXkuaW5uZXJUZXh0ID0gYCR7d2luZERpcmVjdGlvbn0gJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgO1xyXG4gICBkaXNwbGF5LmFwcGVuZENoaWxkKHdpbmREaXNwbGF5KTtcclxuICAgLy8gbGV0IGN1cnJlbnRCYWNrZ3JvdW5kID0gY3JlYXRlQmFja2dyb3VuZCh3ZWF0aGVyQmFja2dyb3VuZCh3ZWF0aGVySUQpKTtcclxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QmFja2dyb3VuZCk7XHJcbiAgIGRpc3BsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChgICsgd2VhdGhlckJhY2tncm91bmQod2VhdGhlcklEKSArIGApYFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZChkZWdyZWUpIHtcclxuICAgaWYgKChkZWdyZWUgPj0gMzQwICkgfHwgKGRlZ3JlZSA8PSAzMCkpIHtcclxuICAgICAgcmV0dXJuIFwiTlwiXHJcbiAgIH0gZWxzZSBpZiAoKGRlZ3JlZSA+PSAzMSApICYmIChkZWdyZWUgPD0gNjkpKSB7XHJcbiAgICAgIHJldHVybiBcIk5FXCJcclxuICAgfSBlbHNlIGlmICgoZGVncmVlID49IDcwICkgJiYgKGRlZ3JlZSA8PSAxMjApKSB7XHJcbiAgICAgIHJldHVybiBcIkVcIlxyXG4gICB9IGVsc2UgaWYgKChkZWdyZWUgPj0gMTIxICkgJiYgKGRlZ3JlZSA8PSAxNTkpKSB7XHJcbiAgICAgIHJldHVybiBcIlNFXCJcclxuICAgfSBlbHNlIGlmICgoZGVncmVlID49IDE2MCApICYmIChkZWdyZWUgPD0gMjAwKSkge1xyXG4gICAgICByZXR1cm4gXCJTXCJcclxuICAgfSBlbHNlIGlmICgoZGVncmVlID49IDIwMSApICYmIChkZWdyZWUgPD0gMjQ5KSkge1xyXG4gICAgICByZXR1cm4gXCJTV1wiXHJcbiAgIH0gZWxzZSBpZiAoKGRlZ3JlZSA+PSAyNTAgKSAmJiAoZGVncmVlIDw9IDI5MCkpIHtcclxuICAgICAgcmV0dXJuIFwiV1wiXHJcbiAgIH0gZWxzZSBpZiAoKGRlZ3JlZSA+PSAyOTEgKSAmJiAoZGVncmVlIDw9IDMzOSkpIHtcclxuICAgICAgcmV0dXJuIFwiTldcIlxyXG4gICB9IGVsc2UgcmV0dXJuIFwiP1wiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYXRoZXJCYWNrZ3JvdW5kIChjb2RlLCB0aW1lKSB7XHJcbiAgIGlmIChjb2RlID09PSA4MDApIHtcclxuICAgICAgcmV0dXJuIHN1bkJhY2tncm91bmRcclxuICAgfSBlbHNlIGlmIChjb2RlID4gODAwKSB7XHJcbiAgICAgIHJldHVybiBjbG91ZHlCYWNrZ3JvdW5kXHJcbiAgIH0gZWxzZSBpZiAoKGNvZGUgPj0gNjAwKSAmJiAoY29kZSA8PSA2MjIpKSB7XHJcbiAgICAgIHJldHVybiBzbm93eUJhY2tncm91bmRcclxuICAgfSBlbHNlIGlmICgoY29kZSA+PSA1MDApICYmIChjb2RlIDw9IDUwMSkpIHtcclxuICAgICAgcmV0dXJuIHJhaW55QmFja2dyb3VuZFxyXG4gICB9IGVsc2UgaWYgKChjb2RlID49IDUwMSkgJiYgKGNvZGUgPD0gNTMxKSkge1xyXG4gICAgICByZXR1cm4gcG91cmluZ0JhY2tncm91bmRcclxuICAgfSBlbHNlIGlmICgoY29kZSA+PSAzMDApICYmIChjb2RlIDw9IDMyMSkpIHtcclxuICAgICAgcmV0dXJuICByYWlueUJhY2tncm91bmRcclxuICAgfSBlbHNlIGlmICgoY29kZSA+PSAyMDApICYmIChjb2RlIDw9IDIzMikpIHtcclxuICAgICAgcmV0dXJuIHRodW5kZXJCYWNrZ3JvdW5kXHJcbiAgIH0gZWxzZSByZXR1cm4gd2luZHlCYWNrZ3JvdW5kXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB3ZWF0aGVySWNvblR5cGUgKGNvZGUsIHRpbWUpIHtcclxuICAgaWYgKGNvZGUgPT09IDgwMCkge1xyXG4gICAgICByZXR1cm4gc3VubnlcclxuICAgfSBlbHNlIGlmIChjb2RlID4gODAwKSB7XHJcbiAgICAgIHJldHVybiBjbG91ZHlcclxuICAgfSBlbHNlIGlmICgoY29kZSA+PSA2MDApICYmIChjb2RlIDw9IDYyMikpIHtcclxuICAgICAgcmV0dXJuIHNub3d5XHJcbiAgIH0gZWxzZSBpZiAoKGNvZGUgPj0gNTAwKSAmJiAoY29kZSA8PSA1MDEpKSB7XHJcbiAgICAgIHJldHVybiByYWlueVxyXG4gICB9IGVsc2UgaWYgKChjb2RlID49IDUwMSkgJiYgKGNvZGUgPD0gNTMxKSkge1xyXG4gICAgICByZXR1cm4gcG91cmluZ1xyXG4gICB9IGVsc2UgaWYgKChjb2RlID49IDMwMCkgJiYgKGNvZGUgPD0gMzIxKSkge1xyXG4gICAgICByZXR1cm4gIHJhaW55XHJcbiAgIH0gZWxzZSBpZiAoKGNvZGUgPj0gMjAwKSAmJiAoY29kZSA8PSAyMzIpKSB7XHJcbiAgICAgIHJldHVybiBsaWdodG5pbmdcclxuICAgfSBlbHNlIHJldHVybiB3aW5keVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9