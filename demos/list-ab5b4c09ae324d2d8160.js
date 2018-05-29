(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.customAjax = new customAjax({});

var paginatorInstance = new paginator({
    pagename: 'index',
    customAjax: customAjax,
    pattern: 'list',
    url: '/api/list',
    data: {},
    probeType: 3,
    first: function first(end) {
        if (!end) {
            $('.loader').show();
        } else {
            $('.loader').hide();
        }
    },
    // 页面元素
    element: {
        // 包裹框。iScroll5绑定在此元素上
        wrapper: '.wrapper',
        // 内容展示框
        content: '#content',
        // 重新加载元素
        reload: '.reload-wrapper',
        // 列表元素项选择器
        selector: '#content li',
        // 列表元素项选择器主键属性名称
        attrKey: 'keyid'
    },
    ls: {
        id: 'id', // 列表id
        where: '', // 筛选条件
        orders: 'publishDate', // 排序字段
        sorts: 'DESC', // 排序方向 DESC ASC
        list: 'list',
        lastUpdateTime: 'lastUpdateTime',
        hasData: 'hasData',
        detail: 'detail'
    },
    render: function render(data) {
        console.log(data);
        return data;
    },
    renderEnd: function renderEnd() {
        $('li:not(.click)').addClass('click').click(function () {
            var id = $(this).attr(paginatorInstance.options.element.attrKey);
            paginatorInstance.pattern.position.enable();
            //paginatorInstance.pattern.position.pos()
            paginatorInstance.pattern.position.setPos(id);
            // window.location.href = 'detail.html'
        });
    }
});

paginatorInstance.load();

/***/ })
/******/ ]);
});