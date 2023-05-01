/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0px;\\n    padding: 0px;\\n    box-sizing: border-box;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\nbody{\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nheader{\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    padding: 20px;\\n    justify-content: space-between;\\n}\\n\\n#formdiv{\\n    height: auto;\\n}\\n\\nform{\\n    display: flex;\\n    flex-direction: row;\\n    gap: 10px;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\nlabel {\\n    font-weight: bold;\\n    padding: 10px 0px;\\n}\\n  \\ninput {\\n    width: 25vw;\\n    padding: 10px 5px;\\n    border-radius: 5px;\\n    border: 1px solid #ccc;\\n}\\n\\nbutton {\\n    background-color: #4CAF50;\\n    color: white;\\n    padding: 10px 10px;\\n    border: none;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    font-weight: bold;\\n}\\n\\nbutton:hover {\\n    background-color: #3e8e41;\\n}\\n\\n#content{\\n    padding: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    align-self: center;\\n    border: 1px solid black;\\n    width: 96%;\\n}\\n\\n.z{\\n    text-align: center;\\n    font-size: 1.5rem;\\n}\\n\\nfooter{\\n    height: 5vh;\\n    width: 100vw;\\n    text-align: center;\\n    line-height: 5vh;\\n    position: absolute;\\n    bottom: 0;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n    #formdiv{\\n        \\n    }\\n    header{\\n        margin: 0px 20vw 5vw 10vw;\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://clima/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://clima/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://clima/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/google-translate-api-browser/dist/esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/google-translate-api-browser/dist/esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ g),\n/* harmony export */   \"generateRequestUrl\": () => (/* binding */ f),\n/* harmony export */   \"isSupported\": () => (/* binding */ b),\n/* harmony export */   \"normaliseResponse\": () => (/* binding */ p),\n/* harmony export */   \"setCORS\": () => (/* binding */ y),\n/* harmony export */   \"translate\": () => (/* binding */ k)\n/* harmony export */ });\nvar a={d:(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e)},e={};function n(a){let e=[],n=0;for(let t=0;t<a.length;t++){let i=a.charCodeAt(t);128>i?e[n++]=i:(2048>i?e[n++]=i>>6|192:(55296==(64512&i)&&t+1<a.length&&56320==(64512&a.charCodeAt(t+1))?(i=65536+((1023&i)<<10)+(1023&a.charCodeAt(++t)),e[n++]=i>>18|240,e[n++]=i>>12&63|128):e[n++]=i>>12|224,e[n++]=i>>6&63|128),e[n++]=63&i|128)}let i=0;for(n=0;n<e.length;n++)i+=e[n],i=t(i,\"+-a^+6\");return i=t(i,\"+-3^+b+-f\"),i^=0,0>i&&(i=2147483648+(2147483647&i)),i%=1e6,i.toString()+\".\"+i.toString()}a.d(e,{ZP:()=>m,j1:()=>r,Gb:()=>s,e6:()=>l,XU:()=>c,Iu:()=>d});const t=function(a,e){for(let n=0;n<e.length-2;n+=3){let t=e.charAt(n+2);t=\"a\"<=t?t.charCodeAt(0)-87:Number(t),t=\"+\"==e.charAt(n+1)?a>>>t:a<<t,a=\"+\"==e.charAt(n)?a+t:a^t}return a},i={client:\"gtx\",from:\"auto\",to:\"en\",hl:\"en\",tld:\"com\"};function r(a,e){const t=Object.assign(Object.assign({},i),e),r={client:t.client,sl:t.from,tl:t.to,hl:t.hl,ie:\"UTF-8\",oe:\"UTF-8\",otf:\"1\",ssel:\"0\",tsel:\"0\",kc:\"7\",q:a,tk:n(a)},o=new URLSearchParams(r);return[\"at\",\"bd\",\"ex\",\"ld\",\"md\",\"qca\",\"rw\",\"rm\",\"ss\",\"t\"].forEach((a=>o.append(\"dt\",a))),`https://translate.google.${t.tld}/translate_a/single?${o}`}const o={auto:\"Automatic\",af:\"Afrikaans\",sq:\"Albanian\",am:\"Amharic\",ar:\"Arabic\",hy:\"Armenian\",az:\"Azerbaijani\",eu:\"Basque\",be:\"Belarusian\",bn:\"Bengali\",bs:\"Bosnian\",bg:\"Bulgarian\",ca:\"Catalan\",ceb:\"Cebuano\",ny:\"Chichewa\",zh:\"Chinese Simplified\",\"zh-cn\":\"Chinese Simplified\",\"zh-tw\":\"Chinese Traditional\",co:\"Corsican\",hr:\"Croatian\",cs:\"Czech\",da:\"Danish\",nl:\"Dutch\",en:\"English\",eo:\"Esperanto\",et:\"Estonian\",tl:\"Filipino\",fi:\"Finnish\",fr:\"French\",fy:\"Frisian\",gl:\"Galician\",ka:\"Georgian\",de:\"German\",el:\"Greek\",gu:\"Gujarati\",ht:\"Haitian Creole\",ha:\"Hausa\",haw:\"Hawaiian\",he:\"Hebrew\",iw:\"Hebrew\",hi:\"Hindi\",hmn:\"Hmong\",hu:\"Hungarian\",is:\"Icelandic\",ig:\"Igbo\",id:\"Indonesian\",ga:\"Irish\",it:\"Italian\",ja:\"Japanese\",jw:\"Javanese\",kn:\"Kannada\",kk:\"Kazakh\",km:\"Khmer\",rw:\"Kinyarwanda\",ko:\"Korean\",ku:\"Kurdish (Kurmanji)\",ky:\"Kyrgyz\",lo:\"Lao\",la:\"Latin\",lv:\"Latvian\",lt:\"Lithuanian\",lb:\"Luxembourgish\",mk:\"Macedonian\",mg:\"Malagasy\",ms:\"Malay\",ml:\"Malayalam\",mt:\"Maltese\",mi:\"Maori\",mr:\"Marathi\",mn:\"Mongolian\",my:\"Myanmar (Burmese)\",ne:\"Nepali\",no:\"Norwegian\",or:\"Odia (Oriya)\",ps:\"Pashto\",fa:\"Persian\",pl:\"Polish\",pt:\"Portuguese\",pa:\"Punjabi\",ro:\"Romanian\",ru:\"Russian\",sm:\"Samoan\",gd:\"Scots Gaelic\",sr:\"Serbian\",st:\"Sesotho\",sn:\"Shona\",sd:\"Sindhi\",si:\"Sinhala\",sk:\"Slovak\",sl:\"Slovenian\",so:\"Somali\",es:\"Spanish\",su:\"Sundanese\",sw:\"Swahili\",sv:\"Swedish\",tg:\"Tajik\",ta:\"Tamil\",tt:\"Tatar\",te:\"Telugu\",th:\"Thai\",tr:\"Turkish\",tk:\"Turkmen\",uk:\"Ukrainian\",ur:\"Urdu\",ug:\"Uyghur\",uz:\"Uzbek\",vi:\"Vietnamese\",cy:\"Welsh\",xh:\"Xhosa\",yi:\"Yiddish\",yo:\"Yoruba\",zu:\"Zulu\"},s=a=>Boolean(o[a]);function l(a,e=!1){const n={text:\"\",pronunciation:\"\",from:{language:{didYouMean:!1,iso:\"\"},text:{autoCorrected:!1,value:\"\",didYouMean:!1}}};if(a[0].forEach((a=>{a[0]?n.text+=a[0]:a[2]&&(n.pronunciation+=a[2])})),a[2]===a[8][0][0]?n.from.language.iso=a[2]:(n.from.language.didYouMean=!0,n.from.language.iso=a[8][0][0]),a[7]&&a[7][0]){let e=a[7][0];e=e.replace(/<b><i>/g,\"[\"),e=e.replace(/<\\/i><\\/b>/g,\"]\"),n.from.text.value=e,!0===a[7][5]?n.from.text.autoCorrected=!0:n.from.text.didYouMean=!0}return e&&(n.raw=a),n}var u=function(a,e,n,t){return new(n||(n=Promise))((function(i,r){function o(a){try{l(t.next(a))}catch(a){r(a)}}function s(a){try{l(t.throw(a))}catch(a){r(a)}}function l(a){var e;a.done?i(a.value):(e=a.value,e instanceof n?e:new n((function(a){a(e)}))).then(o,s)}l((t=t.apply(a,e||[])).next())}))};let h=\"\";const c=a=>(h=a,d);function d(a,e={}){return u(this,void 0,void 0,(function*(){const n=r(a,e),t=yield fetch(`${h}${n}`);if(!t.ok)throw new Error(\"Request failed\");return l(yield t.json(),e.raw)}))}const m=d;var g=e.ZP,f=e.j1,b=e.Gb,p=e.e6,y=e.XU,k=e.Iu;\n//# sourceMappingURL=esm.js.map\n\n//# sourceURL=webpack://clima/./node_modules/google-translate-api-browser/dist/esm.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://clima/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://clima/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var google_translate_api_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-translate-api-browser */ \"./node_modules/google-translate-api-browser/dist/esm.js\");\n\n\n(0,google_translate_api_browser__WEBPACK_IMPORTED_MODULE_1__.setCORS)(\"http://cors-anywhere.herokuapp.com/\");\n\nconst button = document.querySelector(\"button\");\nconst input = document.querySelector(\"input\");\nconst content = document.querySelector(\"#content\");\n\nlet weekweather;\nlet dayweather;\nlet timezone;\nlet z;\nlet def;\nlet country;\nconst locales = {\"us\": \"en-US\", \"mx\": \"es-MX\"};\n\nasync function getHourlyWeather(city){\n  let response = await fetch(`https://api.aerisapi.com/conditions/${city},?format=json&to=+24hours&plimit=24&filter=1hr&fields=periods.dateTimeISO,periods.tempC,periods.humidity,periods.windSpeedKPH,periods.windDir,periods.weather,periods.feelslikeC,profile.tz,place.country&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)\n  let weather = await response.json();  \n  if (weather.error) {\n    console.log(weather.error.description);\n    return;\n  }\n  country = weather.response[0].place.country;\n  timezone = weather.response[0].profile.tz;\n  dayweather = weather.response[0].periods;\n  console.log(dayweather, timezone, country)\n}\n\nasync function getDailyWeather(city){    \n  let response = await fetch(`https://api.aerisapi.com/forecasts/${city},?format=json&filter=day&limit=8&fields=periods.maxTempC,periods.minTempC,periods.humidity,periods.weather,periods.pop,periods.dateTimeISO&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)\n  let weather = await response.json();\n  if (weather.error) {\n    console.log(weather.error.description);\n    return;\n  }\n  weekweather = weather.response[0].periods;\n  console.log(weekweather);\n}\n\nbutton.addEventListener(\"click\", async (event) => {\n  event.preventDefault();\n  if (!input.value) return;\n  let city = input.value;\n  input.value = \"\";\n  await getHourlyWeather(city);\n  // await getDailyWeather(city);\n  content.innerHTML = \"\";\n\n  def = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ') + \", \" + country.toUpperCase() + \" - \";\n  z = document.createElement(\"p\"); \n  z.classList.add(\"z\");  \n  z.innerHTML = def;  \n  \n  let a = document.createElement(\"p\");  \n  let b = document.createElement(\"p\");\n  let c = document.createElement(\"p\");\n  let d = document.createElement(\"p\");\n  let e = document.createElement(\"p\");\n  let f = document.createElement(\"p\");\n  b.innerText = \"Temperatura: \" + Math.round(dayweather[0].tempC) + \" °C\";\n  c.innerText = \"Sensación térmica: \" + Math.round(dayweather[0].feelslikeC) + \" °C\";\n  d.innerText = \"Humedad: \" + dayweather[0].humidity + \" %\";\n  e.innerText = \"Viento: \" + Math.round(dayweather[0].windSpeedKPH) + \" km/h\";\n  f.innerText = \"Dirección del viento: \" + dayweather[0].windDir;\n  await (0,google_translate_api_browser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dayweather[0].weather, {from: 'en', to: 'es'})\n    .then(response => {\n      a.innerText = response.text\n    });\n  getSeconds();\n  content.append(z,a,b,c,d,e,f);   \n  // getWeekDays();\n})\n\nfunction translateWeather(weather){\n  // translate weather (maybe use switch(weather{case:...etc)\n}\n\nfunction getWeekDays()\n{ \n    let baseDate = new Date(weekweather[0].dateTimeISO.slice(0,10)); // current date\n    console.log(baseDate)\n    let weekDays = [];\n    for(i = 0; i < 8; i++)\n    {       \n        weekDays.push(baseDate.toLocaleDateString(locales.country, { weekday: 'long', timeZone: 'UTC' }));\n        baseDate.setDate(baseDate.getDate() + 1);       \n    }\n    weekDays = weekDays.map( day => day.charAt(0).toUpperCase() + day.substring(1) ); // capitalizes the days of the week\n    console.log(weekDays);\n}\n\nfunction getSeconds(){\n  if (!z) return\n  let date = new Date();\n  let newdate = date.toLocaleString(locales.country, { timeZone: timezone });\n  newdate = newdate.slice(10,21)\n  z.innerHTML = def + newdate;\n}\n\nsetInterval(getSeconds, 1000);\n\n\n\n//# sourceURL=webpack://clima/./src/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;