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
/******/ 	__webpack_require__.p = "components/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pattern2 = __webpack_require__(2);

var _pattern3 = _interopRequireDefault(_pattern2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var patternDetail = function (_pattern) {
    _inherits(patternDetail, _pattern);

    function patternDetail(paginator) {
        _classCallCheck(this, patternDetail);

        return _possibleConstructorReturn(this, (patternDetail.__proto__ || Object.getPrototypeOf(patternDetail)).call(this, paginator)); // 调用父类的constructor
    }

    _createClass(patternDetail, [{
        key: 'dataHandler',
        value: function dataHandler() {
            // 数据验证
            this.validate();
        }
    }, {
        key: 'renderHandler',
        value: function renderHandler() {
            // 数据验证
            this.renderValidate();

            this.render();
        }
    }]);

    return patternDetail;
}(_pattern3.default);

exports.default = patternDetail;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pattern2 = __webpack_require__(2);

var _pattern3 = _interopRequireDefault(_pattern2);

var _position = __webpack_require__(13);

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var patternList = function (_pattern) {
    _inherits(patternList, _pattern);

    function patternList(paginator) {
        _classCallCheck(this, patternList);

        // 调用父类的constructor

        var _this = _possibleConstructorReturn(this, (patternList.__proto__ || Object.getPrototypeOf(patternList)).call(this, paginator));

        _this.model = {
            empty: 1,
            prepend: 2,
            append: 3
        };

        _this.ajaxType = 'greed';
        return _this;
    }

    _createClass(patternList, [{
        key: 'dataHandler',
        value: function dataHandler() {
            // 数据验证
            this.validate();

            var me = this;

            var options = $.extend({}, true, {
                pagename: me.options.pagename,
                page: me.options.page,
                //selector: '#content li',
                local: this.local,
                paginator: this.paginator
            }, this.paginator.options);

            // 处理定位
            this.position = new _position2.default(options);
            this.position.reset();
        }
    }, {
        key: 'renderHandler',
        value: function renderHandler() {
            // 数据验证
            this.renderValidate();

            this.render();
        }
    }, {
        key: 'destory',
        value: function destory() {
            this.position && this.position.destory();
        }
    }]);

    return patternList;
}(_pattern3.default);

exports.default = patternList;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 分页模式基类

var pattern = function () {
    // 构造函数
    function pattern(paginator) {
        _classCallCheck(this, pattern);

        this.paginator = paginator;
    }

    // 数据处理


    _createClass(pattern, [{
        key: 'dataHandler',
        value: function dataHandler() {}

        // 渲染处理

    }, {
        key: 'renderHandler',
        value: function renderHandler() {}
    }, {
        key: 'lazyload',
        value: function lazyload() {
            var me = this;

            $('[data-bg-src-small], [data-bg-src-big]', me.options.element.content).each(function () {
                var lock = $(this).attr('data-src-lock');

                if (lock) {
                    return;
                }

                var $wrapper = $(this);

                var type = $wrapper.attr('data-bg-src-big') ? 'big' : 'small';

                // 300毫秒内没有加载完图片，就显示默认图片
                var timer = setTimeout(function () {
                    if ($wrapper[0].className.indexOf('head') > -1) {
                        $wrapper.addClass('empty-head-img-' + type);
                    } else {
                        $wrapper.addClass('empty-img-' + type);
                    }
                }, 300);

                var src = $wrapper.attr('data-bg-src-' + type);

                var image = new Image();
                image.onload = function () {
                    clearTimeout(timer);

                    $wrapper.css('background-image', 'url(' + image.src + ')');
                    $wrapper.addClass('fadeIn animated-faster');
                    setTimeout(function () {
                        me.paginator.scroller.myScroll.refresh();
                    }, 0);
                };
                image.src = src;
            });
        }
    }]);

    return pattern;
}();

exports.default = pattern;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pattern2 = __webpack_require__(2);

var _pattern3 = _interopRequireDefault(_pattern2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var patternServer = function (_pattern) {
    _inherits(patternServer, _pattern);

    function patternServer(paginator) {
        _classCallCheck(this, patternServer);

        // 调用父类的constructor

        var _this = _possibleConstructorReturn(this, (patternServer.__proto__ || Object.getPrototypeOf(patternServer)).call(this, paginator));

        _this.model = {
            empty: 1,
            prepend: 2,
            append: 3
        };

        _this.ajaxType = 'greed';
        return _this;
    }

    _createClass(patternServer, [{
        key: 'dataHandler',
        value: function dataHandler() {
            // 数据验证
            this.validate();
        }
    }, {
        key: 'renderHandler',
        value: function renderHandler() {
            // 数据验证
            this.renderValidate();

            this.render();
        }
    }]);

    return patternServer;
}(_pattern3.default);

exports.default = patternServer;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _factory = __webpack_require__(6);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 核心模块

// 引入配置模块
function paginator(options) {
    this.set(options);
}
// 引入模式工厂


$.extend(paginator.prototype, {
    /**
     * 修改配置
     */
    set: function set(options) {
        this.options = $.extend(true, {}, _config2.default, options);

        this.pattern && this.pattern.destory && this.pattern.destory();

        this.factory = null;
        this.pattern = null;

        // 实例化工厂
        this.factory = new _factory2.default(this);
        // 当前模式
        this.pattern = this.factory.create(this.options.pattern);
    },

    /**
     * 首次加载
     */
    load: function load() {
        // 数据处理
        this.pattern.dataHandler();
        // 渲染处理
        this.pattern.renderHandler();
    },

    /**
     * 再次加载
     */
    reload: function reload(options) {
        if (options) {
            this.set(options);
        }

        // 先终止上一次请求和回调
        this.abort();

        if (this.customAjax && this.customAjax.promise) {
            this.customAjax.promise.always(function () {
                // 设置模式状态为3，以阻止回调
                this.pattern.status = 3;

                this.load();
            });
        } else {
            // 设置模式状态为3，以阻止回调
            this.pattern.status = 3;

            this.load();
        }
    },

    /**
     * 终止请求
     */
    abort: function abort() {
        if (this.customAjax && this.customAjax.promise && this.customAjax.promise.readyState !== 4) {
            // 终止当前请求
            this.customAjax.promise.abort();
            // 设置模式状态为3，以阻止回调
            this.pattern.status = 3;
        }
    }
});

exports.default = paginator;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 配置模块

exports.default = {
    // 分页模式：list-时间戳列表模式；detail-详情模式；server-服务器页码分页模式
    pattern: 'list',

    // 接口路径
    url: '',
    /**
     * 请求模式
     *
     * greed 贪婪型
     */
    ajaxType: '',
    // 请求参数
    data: {},
    // 响应报文时间戳
    stamp: 'updateDate',

    page: {
        /**
         * 每次请求接口获取的数据量
         *
         * 为什么选取40？
         *     每屏一般显示3-10条数据，每页显示[20]条数据，就能显示2-6屏，
         *   获取数据量定为60，就能获得4-12屏数据，已然能够满足需求了。
         */
        getSize: 40,
        /**
         * 每页显示数量
         *
         * 为什么选取20?
         *     每屏一般显示3-10条数据，每页显示[20]条数据，就能显示2-6屏,
         *   然后上拉操作。避免了一次渲染数据太多，操作频繁度也正合适
         */
        size: 20
    },

    // 本地存储相关配置
    ls: {
        // 列表的主键
        id: '',
        // 筛选条件
        where: '',
        // 排序字段
        orders: '',
        // 排序方向
        sorts: '',

        // 列表的本地存储key
        list: null,
        // 列表（详情）最后更新时间的本地存储key
        lastUpdateTime: null,
        // 列表是否取后了最后一条数据的本地存储key：false-没有数据了，取到了最后一条;true-还有数据，没有取到最后一条
        hasData: null
    },

    // 接口返回报错信息协定字段
    errcode: 'errcode',

    // 详情模式配置
    detail: {
        // 是否允许二次更新
        enableUpdate: true
    },

    // 时间戳分页模式配置
    list: {
        // 响应报文：列表数据
        key: 'list',
        // 响应报文：是否还有下一页数据
        hasNextPage: 'hasNextPage'
    },

    // 服务器分页模式配置
    server: {
        // 请求报文：页码
        index: 'pageIndex',
        // 请求报文：每页数量
        size: 'pageSize',
        // 响应报文：列表数据
        key: 'list',
        // 响应报文：总数
        total: 'total'
    },

    // 模板id
    template: 'template',

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
        attrKey: 'data-id'
    },

    // 元素模板
    html: {
        empty: '<div class="empty-wrapper font-bold color-dark-grey">' + '<p><span class="icon icon-empty"></span></p>' + '<p>暂无数据</p>' + '</div>',
        reload: '<div class="reload-wrapper font-bold color-dark-grey">' + '<p><span class="icon icon-reload"></span></p>' + '<p>点击屏幕,重新加载</p>' + '</div>'
    },

    enablePullDown: true,
    enablePullUp: true,

    lazyload: true,
    sameTab: false,
    success: function success(result) {},
    fail: function fail(result) {},
    renderBefore: function renderBefore(model, data, time) {
        return data;
    },
    processStrHtml: function processStrHtml(model, strHtml, time) {
        return strHtml;
    },
    renderEnd: function renderEnd(model, data, time) {}
};
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(9);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var factory = function () {
    // 构造函数
    function factory(paginator) {
        _classCallCheck(this, factory);

        this.paginator = paginator;

        // 分页模式枚举
        this.patterns = {
            // 时间戳列表模式
            list: 'list',
            // 详情模式
            detail: 'detail',
            // 服务端页码索引分页模式，本地无缓存
            server: 'server'
        };
    }

    _createClass(factory, [{
        key: 'create',
        value: function create(pattern) {
            var result = void 0;

            switch (pattern) {
                case this.patterns.list:
                    result = new _index2.default(this.paginator);
                    break;
                case this.patterns.server:
                    result = new _index4.default(this.paginator);
                    break;
                case this.patterns.detail:
                default:
                    result = new _index6.default(this.paginator);
                    break;
            }

            return result;
        }
    }]);

    return factory;
}();

exports.default = factory;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginator = undefined;

var _core = __webpack_require__(4);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.paginator = _core2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(0);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 数据处理模块
$.extend(_core2.default.prototype, {
    validate: function validate() {
        if (!this.paginator) {
            throw 'no config paginator';
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options';
        }

        if (!this.paginator.options.url) {
            throw 'no config url';
        }

        if (!this.paginator.options.errcode) {
            throw 'no config errcode';
        }

        if (!this.paginator.options.ls) {
            throw 'no config ls';
        }

        if (!this.paginator.options.ls.detail) {
            throw 'no config ls.detail';
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime';
        }

        if (!this.paginator.options.detail) {
            throw 'no config detail';
        }

        this.options = this.paginator.options;
    },

    remote: function remote(callback) {
        var me = this;

        me.options.customAjax.get(me.options.url, me.options.data).done(function (result) {
            // 接口请求什么都没返回，回调null
            if (!result) {
                callback(false, null);
                me.options.fail && me.options.fail(null);
                return;
            }

            // 接口请求返回errocode报文，回调null
            if (result[me.options.errcode]) {
                callback(false, null);
                me.options.fail && me.options.fail(result);
                return;
            }

            callback(true, result);
        }).fail(function () {
            // 接口请求失败，回调null
            callback(false, null);
        });
    },

    local: function local(callback) {
        var me = this;

        // key不存在
        if (!ls.has(me.options.ls.detail)) {
            callback(false, null);
            return;
        }

        var data = ls.get(me.options.ls.detail);

        // undefined或null
        if (typeof data === 'undefined' || data == null) {
            callback(true, null);
        } else {
            callback(true, data);
        }
    },

    remoteLS: function remoteLS(callback) {
        var me = this;

        me.remote(function (status, result) {
            ls.set(me.options.ls.lastUpdateTime, Date.now());

            if (!status) {
                callback(false, null);
            } else {
                ls.set(me.options.ls.detail, result || {});
                callback(true, result || {});
            }
        });
    },

    getData: function getData(first, callback) {
        var me = this;

        me.local(function (status, result) {
            if (status && result) {
                // 滚动条加载中
                me.scrollerLoading = true;

                var tmpResult = void 0;

                // 复制数据到临时变量，用于后续比较数据一致性
                if (me.options.detail.enableUpdate) {
                    tmpResult = $.extend({}, result);
                }

                callback(true, result);

                if (me.options.detail.enableUpdate) {
                    me.remoteLS(function (serverStatus, serverResult) {
                        me.scrollerLoading = false;

                        try {
                            if (serverStatus && serverResult && JSON.stringify(serverResult) != JSON.stringify(tmpResult)) {
                                callback(serverStatus, serverResult, 2);
                            }
                        } catch (e) {}
                    });
                }
            } else {
                if (typeof first === 'function') {
                    first();
                }

                me.remoteLS(function (status, result) {
                    callback(status, result);
                });
            }
        });
    },

    load: function load(first, callback) {
        this.getData(first, function (status, result) {
            callback(status, result);
        });
    }

});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(0);

var _core2 = _interopRequireDefault(_core);

__webpack_require__(8);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(0);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 渲染处理模块
$.extend(_core2.default.prototype, {
    renderValidate: function renderValidate() {
        if (!this.paginator.options.element) {
            throw 'no config element';
        }

        if (!this.paginator.options.element.wrapper) {
            throw 'no config element.wrapper';
        }

        if (!this.paginator.options.first) {
            throw 'no config first';
        }

        if (typeof this.paginator.options.first != 'function') {
            throw 'config first is not a function';
        }

        if (!this.paginator.options.html) {
            throw 'no config html';
        }

        if (!this.paginator.options.html.reload) {
            throw 'no config html.reload';
        }
    },

    render: function render() {
        var me = this;

        if (typeof iscrollPull === 'undefined') {
            throw 'no iscrollPull';
        }

        me.paginator.scroller = new iscrollPull(me.options.element.wrapper, {
            probeType: 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function onDownAction() {
                me.load(null, function (model, data) {
                    me.renderHtml(model, data);
                });
            },
            onUpAction: function onUpAction() {},
            onLoaded: function onLoaded() {
                me.paginator.scroller.hideWrapper() // 隐藏wrapper
                .stopDown() // 停止下拉
                .stopUp(); // 停止上拉

                me.load(me.options.first, function (model, data, time) {
                    me.renderHtml(model, data, time);
                });
            }
        });
    },

    renderHtml: function renderHtml(status, data, time) {
        var me = this;

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(status, data, time) || data;
        }

        if (me.options.mock) {
            status = 1;
        }

        if (!status) {
            me.renderError(status, data, time);
            return;
        }

        if (!data || /^{}$/.test(JSON.stringify(data))) {
            me.renderEmpty(status, data, time);
            return;
        }

        me.renderNormal(status, data, time);
    },

    renderError: function renderError(status, data, time) {
        var me = this;

        var contentNode = document.querySelector(me.options.element.content);
        if (!contentNode) {
            throw 'no element node content';
        }
        contentNode.innerHTML = me.options.html.reload;

        $(me.options.element.reload).off('click').one('click', function () {
            window.location.reload();
        });

        me.updateScroller();

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true);
        }

        me.paginator.scroller.showWrapper(); // 显示wrapper
    },

    renderEmpty: function renderEmpty(status, data, time) {
        var me = this;

        document.querySelector(me.options.element.content).innerHTML = me.options.html.empty;

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true);
        }

        me.updateScroller();
        me.paginator.scroller.showWrapper(); // 显示wrapper
    },

    renderNormal: function renderNormal(status, data, time) {
        var me = this;

        if (typeof me.options.render === 'function') {
            data = me.options.render(data);
        }

        var strHtml = template(me.options.template, data);

        if (typeof me.options.processStrHtml === 'function') {
            strHtml = me.options.processStrHtml(null, strHtml);
        }

        $(me.options.element.content).html(strHtml);

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(data, time);
        }

        me.updateScroller();

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true);
        }

        me.paginator.scroller.showWrapper(); // 显示wrapper

        me.options.lazyload && me.lazyload();
    },

    updateScroller: function updateScroller() {
        var me = this;

        var instance = me.paginator.scroller;

        if (!me.options.enablePullDown) {
            instance.stopDown(); // 停止下拉
        } else {
            instance.restDown(); // 重启下拉
        }

        if (me.scrollerloading) {
            instance.beginUpdate(); // 显示加载中
        } else {
            // 必须调用setTimeout，否则加载中效果不显示
            // 调用太早的话，会因为微信顶部加载进度条没有隐藏，而出现一条白色边
            setTimeout(function () {
                instance.myScroll.refresh(); // 刷新滚动条
            }, 500);
        }
    }

});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 数据处理模块
$.extend(_core2.default.prototype, {
    /**
     * 校验参数
     */
    validate: function validate() {
        if (!this.paginator) {
            throw 'no config paginator';
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options';
        }

        if (!this.paginator.options.page) {
            throw 'no config options.page';
        }

        if (!this.paginator.options.page.getSize) {
            throw 'no config options.page.getSize';
        }

        if (!this.paginator.options.page.index) {
            this.paginator.options.page.index = 0;
        }

        if (!this.paginator.options.page.size) {
            this.paginator.options.page.size = 0;
        }

        if (!this.paginator.options.page.lastSize) {
            this.paginator.options.page.lastSize = 0;
        }

        if (!this.paginator.options.customAjax) {
            throw 'no config customAjax';
        }

        if (!this.paginator.options.customAjax.get) {
            throw 'no config customAjax.get';
        }

        if (!this.paginator.options.url) {
            throw 'no config url';
        }

        if (!this.paginator.options.errcode) {
            throw 'no config errcode';
        }

        if (!this.paginator.options.list) {
            throw 'no config list';
        }

        if (!this.paginator.options.list.key) {
            throw 'no config list.key';
        }

        if (!this.paginator.options.ls) {
            throw 'no config ls';
        }

        if (!this.paginator.options.ls.list) {
            throw 'no config ls.list';
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime';
        }

        if (!this.paginator.options.ls.hasData) {
            throw 'no config ls.hasData';
        }

        if (!this.paginator.options.ls.id) {
            throw 'no config ls.id';
        }

        if (!this.paginator.options.success || typeof this.paginator.options.success !== 'function') {
            throw 'no config success or not function';
        }

        this.options = this.paginator.options;
    },

    /**
     * 获取接口数据
     *
     * @param stamp 时间戳
     * @param operate 操作：0-向上取，1-向下去
     * @param callback 回调
     */
    remote: function remote(stamp, operate, callback) {
        var me = this;
        var size = me.options.page.getSize;

        var nextPageId = '';
        if (me.currentModel === me.model.append && me.options.page.minNextPageId) {
            nextPageId = me.options.page.minNextPageId;
        }
        if (me.currentModel === me.model.append && me.options.page.minNextPageTime) {
            stamp = me.options.page.minNextPageTime;
        }

        me.options.customAjax.get(me.options.url, $.extend(true, {}, {
            nextPageId: nextPageId,
            nextPageTime: stamp,
            count: size,
            operate: operate
        }, me.options.data), null, {
            ajaxType: me.options.ajaxType || ''
        }).done(function (result) {
            // 接口请求什么都没返回，回调null
            if (!result) {
                callback(false, null);
                return;
            }

            // 接口请求返回errocode报文，回调null
            if (result[me.options.errcode]) {
                callback(false, null);
                return;
            }

            // 在检验完接口有正常返回数据后调用
            me.options.success(result);

            // 列表数据内容为空
            if (!result[me.options.list.key]) {
                callback(true, []);
                return;
            }

            // 向下取数据时，如果本地存储已表明没有取到最后一页，或者响应报文返回取到了最后一页，则更新配置
            if (operate === 1 && (!ls.get(me.options.ls.hasData) || !result[me.options.list.hasNextPage])) {
                ls.set(me.options.ls.hasData, result[me.options.list.hasNextPage] || false);
            }

            // TODO 列表数据中含有null则去除，会造成列表总数不准
            var list = [];

            for (var i = 0, len = result[me.options.list.key].length; i < len; i++) {
                if (result[me.options.list.key][i]) {
                    list.push(result[me.options.list.key][i]);
                }
            }

            // 如果接口返回了下一个最小id
            if (result.nextPageId) {
                me.options.page.minNextPageId = result.nextPageId;
                ls.set(me.options.ls.hasData + '_nextPageId', result.nextPageId);
            }
            // 如果接口返回下一个最小time
            if (result.nextPageTime) {
                me.options.page.minNextPageTime = result.nextPageTime;
                ls.set(me.options.ls.hasData + '_nextPageTime', result.nextPageTime);
            }

            callback(true, list);
        }).fail(function () {
            // 接口请求失败，回调null
            callback(false, null);
        });
    },

    /**
     * 获取本地数据
     *
     * @param key/index
     * @param where/size
     * @param orders/callback
     * @param sorts
     * @param index
     * @param size
     * @param callback
     *
     */
    local: function local(key, where, orders, sorts, index, size, callback) {
        // 如果orders是方法，进入index,size,callback的参数模式
        if (typeof orders === 'function') {
            var me = this;

            callback = orders;
            size = where;
            index = key;
            sorts = me.options.ls.sorts;
            orders = me.options.ls.orders;
            where = me.options.ls.where;
            key = me.options.ls.list;
        }

        // key不存在
        if (!ls.has(key)) {
            callback(false, null);
            return;
        }

        var list = ls.get(key);

        // 不是数组
        if (!(list instanceof Array)) {
            callback(false, null);
            return;
        }

        // 空数组
        if (list.length === 0) {
            callback(false, []);
            return;
        }

        ls.select(key, where, orders, sorts, index, size, function (status, result) {
            // 获取异常
            if (!status) {
                callback(false, []);
                return;
            }

            // 无内容
            if (!result) {
                callback(false, []);
                return;
            }

            callback(true, result.list);
        });
    },

    /**
     * 第2-n次请求接口，进行筛选排序的数据应该先忽略前面的所有数据
     *
     * @param key/index
     * @param where/size
     * @param orders/skip
     * @param sorts/callback
     * @param index
     * @param size
     * @param skip
     * @param callback
     */
    skipLocal: function skipLocal(key, where, orders, sorts, index, size, skip, callback) {
        // 如果sorts是方法，进入index,size,skip,callback的参数模式
        if (typeof sorts === 'function') {
            var me = this;

            callback = sorts;
            skip = orders;
            size = where;
            index = key;
            sorts = me.options.ls.sorts;
            orders = me.options.ls.orders;
            where = me.options.ls.where;
            key = me.options.ls.list;
        }

        // key不存在
        if (!ls.has(key)) {
            callback(false, null);
            return;
        }

        var list = ls.get(key);

        // 不是数组
        if (!(list instanceof Array)) {
            callback(false, null);
            return;
        }

        // 空数组
        if (list.length === 0) {
            callback(false, []);
            return;
        }

        ls.skipSelect(key, where, orders, sorts, index, size, skip, function (status, result) {
            // 获取异常
            if (!status) {
                callback(false, []);
                return;
            }

            // 无内容
            if (!result) {
                callback(false, []);
                return;
            }

            callback(true, result.list);
        });
    },

    /**
     * 同步数据
     *
     * @param stamp 时间戳
     * @param operate 操作：0-向上取，1-向下去
     * @param callback 回调
     */
    remoteLS: function remoteLS(stamp, operate, callback) {
        var me = this;

        me.remote(stamp, operate, function (serverStatus, serverResult) {
            if (!serverStatus) {
                callback(false, null);
                return;
            }

            // TODO 取最新第一页时，暂时清除缓存，因为数据衔接较难处理
            if (stamp === '' && operate === 1) {
                ls.remove(me.options.ls.list);
                ls.remove(me.options.ls.lastUpdateTime);
            }

            // serverStatus=true的时候，serverResult一定是数组，由remote方法保证
            ls.save(me.options.ls.list, me.options.ls.id, serverResult, function (localStatus, localResult) {
                if (!localStatus) {
                    callback(false, null);
                    return;
                }

                if (!(localResult instanceof Array)) {
                    callback(false, []);
                    return;
                }

                // 有更新到列表数据或者空数组数据，更新列表刷新时间
                ls.set(me.options.ls.lastUpdateTime, Date.now());

                // 刷新最小时间戳，刷新最小id

                // 暂存排序，设置为按时间戳倒序，以获得最大最小时间
                var tmpOrders = me.options.ls.orders;
                var tmpSorts = me.options.ls.sorts;

                // 暂时按照时间戳、id标识排序，以获取筛选后的最小修改时间和页数
                me.options.ls.orders = me.options.stamp + ' ' + me.options.ls.id;
                me.options.ls.sorts = 'DESC DESC';

                // 要对数据进行筛选后，判断是否存在数据，所以必须使用me.local方法
                me.local(1, Number.MAX_VALUE, function (status, result) {
                    // 重置排序为配置
                    me.options.ls.orders = tmpOrders;
                    me.options.ls.sorts = tmpSorts;

                    if (status && result && result instanceof Array && result.length > 0) {
                        // 更新最小时间戳
                        me.options.page.minStamp = result[result.length - 1][me.options.stamp];
                        // 更新最小id
                        me.options.page.minNextPageId = result[result.length - 1][me.options.ls.id];

                        if (ls.get(me.options.ls.hasData + '_nextPageId')) {
                            me.options.page.minNextPageId = ls.get(me.options.ls.hasData + '_nextPageId');
                        }
                        if (ls.get(me.options.ls.hasData + '_nextPageTime')) {
                            me.options.page.minNextPageTime = ls.get(me.options.ls.hasData + '_nextPageTime');
                        }
                    }

                    // 更新总页数，校验当前页码
                    me.local(1, Number.MAX_VALUE, function (status, result) {
                        if (status && result && result instanceof Array && result.length > 0) {
                            // 更新总页数
                            me.options.page.count = Math.ceil(result.length / me.options.page.size);

                            if (me.options.page.lastSize % me.options.page.size !== 0) {
                                me.options.page.index -= 1;

                                if (me.options.page.index <= 0) {
                                    me.options.page.index = 1;
                                }
                            }

                            // 检验当前页码
                            if (me.options.page.count === 0) {
                                me.options.page.index = 1;
                            } else if (me.options.page.index > me.options.page.count) {
                                me.options.page.index = me.options.page.count;
                            }
                        }

                        callback(true, localResult);
                    });
                });
            });
        });
    },

    /**
     * 不足一页的处理
     *
     * @param 模式empty,prepend,append
     */
    lackPage: function lackPage(model, status, result) {
        var me = this;

        if (me.options.page.lastSize >= me.options.page.size) {
            me.options.page.lastSize -= me.options.page.size;
        }

        switch (model) {
            case me.model.append:
                if (me.options.page.lastSize !== 0) {
                    result.splice(0, me.options.page.lastSize);
                }

                break;
            default:

        }

        if (status && result && result instanceof Array) {
            me.options.page.lastSize += result.length;
        }
    },

    /**
     * empty或prepend模式下的分页获取本地存储
     *
     */
    pageLocal: function pageLocal(time, callback) {
        var me = this;

        me.local(me.options.page.index, me.options.page.size, function (status, result) {
            me.lackPage(null, status, result);

            callback(status, result, time || 1);
        });
    },

    /**
     * empty或prepend模式下的同步数据后，再获取页数据
     */
    pageLocalRemoteLS: function pageLocalRemoteLS(stamp, operate, time, callback) {
        var me = this;

        me.remoteLS(stamp, operate, function (status, result) {
            // 取消下拉加载中
            me.scrollerLoading = false;

            if (status && result) {
                me.lastSkip = result.length;
            }

            me.pageLocal(time || 1, callback);
        });
    },

    /**
     * empty模式数据处理
     */
    emptyHandler: function emptyHandler(first, callback) {
        var me = this;
        var model = me.model.empty;

        // empty模式，一定是取服务器最新一页数据
        var stamp = ''; // 时间戳
        var operate = 1; // 操作：0-取最新；1-取历史

        // 重置配置
        me.skip = 0; // 忽略数据总数量默认为0
        me.lastSkip = 0; // 上次忽略的数量默认为0

        // 暂存排序，设置为按时间戳倒序，以获得最大最小时间
        var tmpOrders = me.options.ls.orders;
        var tmpSorts = me.options.ls.sorts;

        // 暂时按照时间戳、id标识排序，以获取筛选后的最小修改时间和页数
        me.options.ls.orders = me.options.stamp + ' ' + me.options.ls.id;
        me.options.ls.sorts = 'DESC DESC';

        // 要对数据进行筛选后，判断是否存在数据，所以必须使用me.local方法
        me.local(1, Number.MAX_VALUE, function (status, result) {
            // 重置排序为配置
            me.options.ls.orders = tmpOrders;
            me.options.ls.sorts = tmpSorts;

            if (status && result && result instanceof Array && result.length > 0) {
                // 更新最小时间戳
                me.options.page.minStamp = result[result.length - 1][me.options.stamp];
                // 更新最小id
                me.options.page.minNextPageId = result[result.length - 1][me.options.ls.id];

                if (ls.get(me.options.ls.hasData + '_nextPageId')) {
                    me.options.page.minNextPageId = ls.get(me.options.ls.hasData + '_nextPageId');
                }
                if (ls.get(me.options.ls.hasData + '_nextPageTime')) {
                    me.options.page.minNextPageTime = ls.get(me.options.ls.hasData + '_nextPageTime');
                }

                if (!me.options.page.minStamp) {
                    throw 'no minStamp';
                }
                if (!me.options.page.minNextPageId) {
                    throw 'no minNextPageId';
                }

                // 更新lastSkip
                me.lastSkip = result.length;
                // 更新页数
                me.options.page.count = Math.ceil(result.length / me.options.page.size);

                me.pageLocal(1, function (status, result) {
                    if (me.position && me.position.enabled()) {
                        callback(status, result);
                    } else {
                        // 下拉加载中
                        me.scrollerLoading = true;
                        // 先处理本次存储数据
                        callback(status, result);

                        // 同步数据后，第二次处理数据
                        me.pageLocalRemoteLS(stamp, operate, 2, callback);
                    }
                });
            } else {
                // 主要用于显示loading
                first && first();

                me.pageLocalRemoteLS(stamp, operate, null, callback);
            }
        });
    },

    /**
     * prepend模式数据处理
     */
    prependHandler: function prependHandler(callback) {
        var me = this;
        var model = me.model.prepend;

        // prepend模式，一定是取服务器最新一页数据
        var stamp = ''; // 时间戳
        var operate = 1; // 操作：0-取最新；1-取历史

        // 重置配置
        me.skip = 0; // 忽略数据总数量默认为0
        me.lastSkip = 0; // 上次忽略的数量默认为0
        me.options.page.lastSize = 0;

        me.remoteLS(stamp, operate, function (status, result) {
            if (status && result) {
                me.lastSkip = result.length;
            }

            me.local(1, me.options.page.size, function (status, result) {
                callback(status, result);
            });
        });
    },

    /**
     * append模式数据处理
     */
    appendHandler: function appendHandler(callback) {
        var me = this;
        var model = me.model.append;

        // append模式，一定是使用最小时间戳取历史
        var stamp = me.options.page.minStamp; // 时间戳
        var operate = 1; // 操作：0-取最新；1-取历史

        // TODO 如果最后一页不足一页，先请求接口再显示
        me.skipLocal(me.options.page.index, me.options.page.size, me.skip, function (status, result) {
            if (status && result && result instanceof Array && result.length > 0) {
                me.lackPage(model, status, result);
                callback(status, result);
            } else {
                me.remoteLS(stamp, operate, function (status, result) {
                    if (status && result) {
                        me.skip = me.lastSkip;
                        me.lastSkip += result.length;
                    }

                    me.skipLocal(me.options.page.index, me.options.page.size, me.skip, function (status, result) {
                        me.lackPage(model, status, result);
                        callback(status, result);
                    });
                });
            }
        });
    },

    /**
     * 获取数据
     * @param model 更新模式
                empty    首次加载
                append   上拉-加载更多数据
                prepend  下拉-刷新
     * @param first 第一次加载(无本地存储)方法
     * @param callback 回调
     */
    getData: function getData(model, first, callback) {
        // 1、刷新：
        //    1-1：本地存储有[筛选后]：显示本地数据，获取最新的第一页数据，判断最新的数据是否和本地数据衔接，若未衔接，需做相应处理
        //    1-2：本地存储无[筛选后]：获取最新的第一页数据
        // 2、下拉：
        //    2-1：本地存储有[筛选后]：获取最新的第一页数据，判断最新的数据是否和本地数据衔接，若未衔接，需做相应处理
        //    2-2：本地存储无[筛选后]：获取最新的第一页数据
        // 3、上拉：
        //    3-1：本地存储有[筛选后]：获取LS分页
        //    3-2：本地存储无[筛选后]：若服务器无历史数据，不可上拉；若有，获取LS最小时间戳以下第一页数据

        // 重置下拉加载中
        this.scrollerLoading = false;

        switch (model) {
            case this.model.empty:
                this.emptyHandler(first, callback);

                break;
            case this.model.prepend:
                this.prependHandler(callback);

                break;
            case this.model.append:
                this.appendHandler(callback);

                break;
            default:
        }
    },

    /**
     * 首次加载
     */
    load: function load(first, callback) {
        var me = this;

        var model = me.model.empty;

        // 重置请求类型
        me.options.ajaxType = me.options.ajaxType || me.ajaxType;

        // 重置页码
        me.options.page.index = 1;
        me.options.page.count = 0;

        me.getData(model, first, function (status, result, time) {
            callback(model, result, time);
        });
    },

    /**
     * 下一页
     */
    next: function next(callback) {
        var me = this;
        var model = me.model.append;

        // 重置请求类型
        me.options.ajaxType = '';

        // 重置页码
        me.options.page.index += 1;

        me.getData(model, null, function (status, result) {
            callback(model, result);
        });
    },

    /**
     * 下拉刷新
     */
    refresh: function refresh(callback) {
        var me = this;
        var model = me.model.prepend;

        // 重置请求类型
        me.options.ajaxType = me.options.ajaxType || me.ajaxType;

        // 重置页码
        me.options.page.index = 1;

        me.getData(model, null, function (status, result) {
            callback(model, result);
        });
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

__webpack_require__(11);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function position(options) {
    if (!options.pagename) {
        return;
    }

    // 记录是否开启定位的sessoinStorage的key
    this.enableKey = options.pagename + '_position';
    // 记录滚动条y值
    this.scrollY = options.pagename + '_scrollY';

    // 记录滚动元素数量
    this.scrollEleCount = options.pagename + '_scrollEleCount';

    // 记录点击元素的id
    this.scrollEleId = options.pagename + '_scrollEleId';

    // 列表元素项选择器
    this.selector = options.element.selector;

    // 列表元素项选择器主键属性名称
    this.attrKey = options.element.attrKey;

    // 页面参数
    this.page = options.page;
    // 用于重新计算分页
    this.local = options.local;

    this.listkey = options.ls.list;

    this.paginator = options.paginator;

    this.options = options;
}

$.extend(position.prototype, {
    // 开启定位
    enable: function enable() {
        sessionStorage.setItem(this.enableKey, true);
    },

    // 关闭定位
    disable: function disable() {
        sessionStorage.removeItem(this.enableKey);
    },

    // 是否开启了定位
    enabled: function enabled() {
        return !!sessionStorage.getItem(this.enableKey);
    },
    // 删除当前元素时重新定位
    delPos: function delPos() {
        var _this = this;
        if (!this.enabled()) return;
        //重新设置定位id,再对id的前个元素进行定位
        this.setPos();
        var posId = Number(sessionStorage.getItem(this.scrollEleId)) || 0;
        var $posEl = $(this.selector + '[' + this.attrKey + '=' + posId + ']').prev();
        if ($posEl.length > 0) {
            var posY = this.offset($posEl[0]).top;
            var maxH = -$(this.options.element.content).height() + $(this.options.element.wrapper).height() - this.options.paginator.scroller.downEle.offsetHeight;
            if ($(this.options.element.content).height() < $(this.options.element.wrapper).height()) {
                //内容不超过一屏幕时
                posY = 0;
            } else if (posY <= maxH) {
                //超过容器最大值设置为最大
                posY = maxH;
            }
            this.paginator.scroller.lastY = posY;
            this.paginator.scroller.myScroll.scrollTo(0, posY);
        }
    },
    // 设置当前点击元素的id
    setPos: function setPos(id) {
        //根据滚动定位id,而不是直接记录id
        var me = this;
        //有传id,根据id定位，没传根据滚动位置找最接近的id(tab切换)
        if (id) {
            sessionStorage.setItem(this.scrollEleId, id);
            return;
        }
        //内容不超过一屏幕，不存在滚动
        if ($(me.options.element.wrapper).height() > $(me.options.element.content).height()) {
            return;
        }
        if (!me.enabled()) return false;
        if (!me.paginator.scroller) return false;
        // 如果存储的定位数值操作上下限，处理下
        var y = me.paginator.scroller.myScroll.y || 0;
        if (y < me.paginator.scroller.myScroll.maxScrollY) {
            y = me.paginator.scroller.myScroll.maxScrollY;
        } else if (me.paginator.scroller.downHeight && y > -me.paginator.scroller.downHeight) {
            y = -me.paginator.scroller.downHeight;
        }

        $(me.selector).each(function (index) {
            var _me = $(this);
            var posY = $(this)[0].offsetTop;
            if (-posY < y && _me.prev()[0]) {
                var prevTop = _me.prev()[0].offsetTop;
                var nextTop = _me[0].offsetTop;
                if (-prevTop - y < nextTop + y) {
                    id = _me.prev()[0].getAttribute(me.attrKey);
                } else {
                    id = _me[0].getAttribute(me.attrKey);
                }
                return false;
            }
        });
        if (id) {
            sessionStorage.setItem(this.scrollEleId, id);
        }
    },

    offset: function offset(el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;
        return {
            left: left,
            top: top
        };
    },

    // 手动定位
    pos: function pos() {
        var me = this;

        if (!me.enabled()) return false;
        if (!me.paginator.scroller) return false;

        // 如果存储的定位数值操作上下限，处理下
        var y = me.paginator.scroller.myScroll.y || 0;
        if (y < me.paginator.scroller.myScroll.maxScrollY) {
            y = me.paginator.scroller.myScroll.maxScrollY;
        } else if (me.paginator.scroller.downHeight && y > -me.paginator.scroller.downHeight) {
            y = -me.paginator.scroller.downHeight;
        }

        // 记录滚动条y值
        sessionStorage.setItem(me.scrollY, y);

        // 记录滚动元素数量
        var count = 0;

        $(me.selector).each(function (index) {
            var height = $(this).height();
            var top = $(this).offset().top;
            var winHeight = $(window).height();

            if (-winHeight < top - winHeight && top - winHeight < height) {
                count = index + 1;
            }
        });

        sessionStorage.setItem(me.scrollEleCount, count);
    },

    // 绑定页面离开事件以记录定位信息
    unload: function unload(scroll) {
        var me = this;

        window.addEventListener('unload', function () {
            if (me.destoryStatus) return false;
            if (!me.enabled()) return false;
            if (!scroll) return false;

            // 绑定页面跳转计算定位值
            me.setPos();

            // 如果存储的定位数值操作上下限，处理下
            var y = scroll.myScroll.y || 0;
            if (y < scroll.myScroll.maxScrollY) {
                y = scroll.myScroll.maxScrollY;
            } else if (scroll.downHeight && y > -scroll.downHeight) {
                y = -scroll.downHeight;
            }

            // 记录滚动条y值
            sessionStorage.setItem(me.scrollY, y);

            // 记录滚动元素数量
            var count = 0;

            $(me.selector).each(function (index) {
                var height = $(this).height();
                var top = $(this).offset().top;
                var winHeight = $(window).height();

                if (-winHeight < top - winHeight && top - winHeight < height) {
                    count = index + 1;
                }
            });

            sessionStorage.setItem(me.scrollEleCount, count);
        });
    },

    // 定位时重新计算分页参数
    reset: function reset() {
        if (!this.enabled()) {
            return;
        }

        if (sessionStorage.getItem(this.scrollEleId) && ls.get(this.listkey)) {
            this.tempSize = this.page.size;

            var count = ls.get(this.listkey).length;
            this.page.size = count >= this.tempSize ? this.tempSize * Math.ceil(count / this.tempSize) : this.tempSize;

            this.reseted = true;
        }
    },

    // 滚动到记录的位置，恢复分页参数
    recover: function recover(scroll, options, callback) {
        if (!this.enabled()) return;
        if (!this.reseted) return;

        this.reseted = false;

        var posId = Number(sessionStorage.getItem(this.scrollEleId)) || 0;
        var $posEl = $(this.selector + '[' + this.attrKey + '=' + posId + ']');
        if ($posEl.length > 0) {

            var posY = this.offset($posEl[0]).top;
            var maxH = -$(this.options.element.content).height() + $(this.options.element.wrapper).height() - this.options.paginator.scroller.downEle.offsetHeight;
            if ($(this.options.element.content).height() < $(this.options.element.wrapper).height()) {
                //内容不超过一屏幕时
                posY = 0;
            } else if (posY <= maxH) {
                //超过容器最大值设置为最大
                posY = maxH;
            }
            scroll.lastY = posY;
            scroll.myScroll.scrollTo(0, posY);
        }
        if (this.tempSize && this.page.size != this.tempSize) {
            this.page.index = this.page.size / this.tempSize;
            this.page.size = this.tempSize;
            this.page.lastSize = this.page.size;
            this.tempSize = null;

            var me = this;

            me.local(1, Number.MAX_VALUE, function (status, result) {
                me.page.count = Math.ceil(result.length / me.page.size);
                if (me.page.count === 0) {
                    me.page.index = 1;
                } else if (me.page.index > me.page.count) {
                    me.page.index = me.page.count;
                }
            });

            options.page = this.page;
        }

        callback && callback();
    },

    destory: function destory() {
        var me = this;
        this.destoryStatus = true;
    }
});

exports.default = position;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 渲染处理模块
$.extend(_core2.default.prototype, {
    renderValidate: function renderValidate() {
        if (!this.paginator.options.element) {
            throw 'no config element';
        }

        if (!this.paginator.options.element.wrapper) {
            throw 'no config element.wrapper';
        }

        if (!this.paginator.options.first) {
            throw 'no config first';
        }

        if (typeof this.paginator.options.first != 'function') {
            throw 'config first is not a function';
        }

        if (!this.paginator.options.html) {
            throw 'no config html';
        }

        if (!this.paginator.options.html.reload) {
            throw 'no config html.reload';
        }
    },

    render: function render() {
        var me = this;

        if (typeof iscrollPull === 'undefined') {
            throw 'no iscrollPull';
        }

        var options = {
            pagename: me.options.pagename,
            probeType: me.options.probeType || 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function onDownAction() {
                var scroll = this;

                me.currentModel = me.model.prepend;

                me.refresh(function (model, data) {
                    me.renderHtml(model, data);

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache(me.paginator.scroller.downHeight);
                    }

                    scroll.lock = false;
                });
            },
            onUpAction: function onUpAction() {
                var scroll = this;

                me.currentModel = me.model.append;

                me.next(function (model, data) {
                    me.renderHtml(model, data);

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.appendCache();
                    }

                    scroll.lock = false;
                });
            },
            onLoaded: function onLoaded() {
                me.currentModel = me.model.empty;

                if (me.paginator.options && !me.paginator.options.sameTab) {
                    me.paginator.scroller.hideWrapper(); // 隐藏wrapper
                }

                if (me.paginator.options && !me.paginator.options.noTopUpdate) {
                    me.paginator.scroller.stopDown() // 停止下拉
                    .stopUp(); // 停止上拉
                }

                me.load(me.options.first, function (model, data, time) {
                    me.renderHtml(model, data, time);

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache();
                    }

                    me.position.unload(me.paginator.scroller);
                });
            }

            // 如果存在上拉下拉，并且已经初始化
        };if (me.paginator.scroller && $(me.paginator.options.element.wrapper).hasClass('scrollerWrapper')) {
            // 如果不重置scroller，需要重置其参数
            me.paginator.scroller.set(options);

            // 如果没有开启定位，滚动到顶端
            if (!me.paginator.pattern.position.enabled() && me.paginator.options && !me.paginator.options.noTopUpdate) {
                me.paginator.scroller.myScroll.scrollTo(0, 0);
            }

            // 停止手势离开屏幕后的滚动
            me.paginator.scroller.myScroll.isAnimating = false;

            setTimeout(function () {
                // 开启手势离开屏幕后的滚动
                me.paginator.scroller.myScroll.isAnimating = true;
                me.paginator.scroller.options.onLoaded();
            }, 200);
        } else {
            me.paginator.scroller = new iscrollPull(me.options.element.wrapper, options);
        }
    },

    renderHtml: function renderHtml(model, data, time) {
        if (this.status && this.status === 3) {
            return;
        }

        var me = this;

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(model, data, time) || data;
        }

        if (!data || !(data instanceof Array)) {
            me.renderError(model, data, time);

            return;
        }

        if (data.length === 0) {
            me.renderEmpty(model, data, time);

            return;
        }

        me.renderNormal(model, data, time);
    },

    renderError: function renderError(model, data, time) {
        var me = this;

        var contentNode = document.querySelector(me.options.element.content);
        if (!contentNode) {
            throw 'no element node content';
        }
        contentNode.innerHTML = me.options.html.reload;

        $(me.options.element.reload).off('click').one('click', function () {
            window.location.reload();
        });

        me.updateScroller(model);

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }

            me.paginator.scroller.stopUp(); // 停止上拉
            me.paginator.scroller.showWrapper(); // 显示wrapper
        }
    },

    renderEmpty: function renderEmpty(model, data, time) {
        var me = this;

        if (model === me.model.empty || model === me.model.prepend) {
            document.querySelector(me.options.element.content).innerHTML = me.options.html.empty;
        }

        if (typeof me.options.renderEmpty === 'function') {
            me.options.renderEmpty(model, data);
        }

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }
        }

        me.updateScroller(model);
        me.paginator.scroller.showWrapper(); // 显示wrapper
    },

    renderNormal: function renderNormal(model, data, time) {
        var me = this;
        var oddArray = [],
            evenArray = []; //by zzs
        for (var i = 0, len = data.length; i < len; i++) {
            data[i] = me.options.render(data[i]);
            //by zzs
            if (me.options.waterfall) {
                if (i % 2 == 0) {
                    evenArray.push(data[i]);
                } else {
                    oddArray.push(data[i]);
                }
            }
        }
        if (me.options.waterfall) {

            if (!$(me.options.element.content).hasClass(me.options.extraClass)) {
                $(me.options.element.content).addClass(me.options.extraClass);
                $(me.options.element.content).html('<div class="even-wrapper"></div><div class="odd-wrapper"></div>');
            }

            var evenHtml = '',
                oddeHtml = '';

            evenHtml = template(me.options.template, evenArray);
            oddeHtml = template(me.options.template, oddArray);

            if (typeof me.options.processStrHtml === 'function') {
                evenHtml = me.options.processStrHtml(model, evenHtml);
                oddeHtml = me.options.processStrHtml(model, oddeHtml);
            }

            if (model === me.model.append) {
                $(me.options.element.content).find(".even-wrapper").append(evenHtml);
                $(me.options.element.content).find(".odd-wrapper").append(oddeHtml);
            } else {
                $(me.options.element.content).find(".even-wrapper").html(evenHtml);
                $(me.options.element.content).find(".odd-wrapper").html(oddeHtml);
            }
        } else {

            $(me.options.element.content).removeClass(me.options.extraClass);

            var strHtml = '';
            // console.error('有没有大于20条的上拉数' + data.length);
            // 如果数据小于20条，一个<div class="pre">显示，否则分几个
            if (data.length <= 20) {
                strHtml = template(me.options.template, data);
            } else {
                var temp = [];

                for (var _i = 1, _len = data.length + 1; _i < _len; _i++) {
                    temp.push(data[_i - 1]);

                    if (_i % 20 == 0 || _i == _len - 1) {
                        strHtml += template(me.options.template, temp);
                        temp = [];
                    }
                }
            }

            if (typeof me.options.processStrHtml === 'function') {
                strHtml = me.options.processStrHtml(model, strHtml);
            }

            if (model === me.model.append) {
                $(me.options.element.content).append(strHtml);
            } else {
                document.querySelector(me.options.element.content).innerHTML = strHtml;
            }
        }

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(model, data, time);
        }

        me.updateScroller(model);

        if (me.paginator.options.probeType == 3) {
            me.paginator.scroller.showEle();
        }

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }

            me.paginator.scroller.showWrapper(); // 显示wrapper
        }

        me.options.lazyload && me.lazyload();
    },

    updateScroller: function updateScroller(model) {
        var me = this;

        var instance = me.paginator.scroller;

        if (!me.options.enablePullDown) {
            instance.stopDown(); // 停止下拉
        } else {
            instance.restDown(); // 重启下拉
        }

        if (!me.options.enablePullUp) {
            instance.stopUp(); // 停止上拉
        } else if (me.options.page.index >= me.options.page.count && !ls.get(me.options.ls.hasData)) {
            instance.stopUp(); // 停止上拉
        } else {
            instance.restUp(); // 重启上拉
        }

        if (me.scrollerloading) {
            instance.beginUpdate(); // 显示加载中
        } else {
            // console.error('是否恢复了分页参数', model, me.model.empty);
            if (model == me.model.empty) {
                me.position.recover(me.paginator.scroller, me.options, function () {
                    // console.error(me.options.page);
                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache();
                        me.paginator.scroller.showEle();
                    }
                });
            }

            // 必须调用setTimeout，否则加载中效果不显示
            // 调用太早的话，会因为微信顶部加载进度条没有隐藏，而出现一条白色边
            setTimeout(function () {
                instance.myScroll.refresh(); // 刷新滚动条
            }, 500);
        }
    }

});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(3);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 数据处理模块
$.extend(_core2.default.prototype, {
    validate: function validate() {
        if (!this.paginator) {
            throw 'no config paginator';
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options';
        }

        if (!this.paginator.options.customAjax) {
            throw 'no config customAjax';
        }

        if (!this.paginator.options.customAjax.get) {
            throw 'no config customAjax.get';
        }

        if (!this.paginator.options.url) {
            throw 'no config url';
        }

        if (!this.paginator.options.errcode) {
            throw 'no config errcode';
        }

        if (!this.paginator.options.ls) {
            throw 'no config ls';
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime';
        }

        if (!this.paginator.options.ls.hasData) {
            throw 'no config ls.hasData';
        }

        if (!this.paginator.options.server) {
            throw 'no config server';
        }

        if (!this.paginator.options.server.key) {
            throw 'no config server.key';
        }

        if (!this.paginator.options.server.total) {
            throw 'no config server.total';
        }

        if (!this.paginator.options.server.index) {
            throw 'no config server.key';
        }

        if (!this.paginator.options.server.size) {
            throw 'no config server.total';
        }

        this.options = this.paginator.options;
    },

    remote: function remote(callback) {
        var me = this;

        me.options.data.pageNum = me.options.data[me.options.server.index];

        me.options.customAjax.get(me.options.url, me.options.data, null, {
            ajaxType: me.options.ajaxType || ''
        }).done(function (result) {
            // 接口请求什么都没返回，回调null
            if (!result) {
                callback(false, null);
                return;
            }

            // 接口请求返回errocode报文，回调null
            if (result[me.options.errcode]) {
                callback(false, null);
                return;
            }

            // 在检验完接口有正常返回数据后调用
            if (typeof me.options.success === 'function') {
                me.options.success(result);
            }

            // 列表数据内容为空
            if (!result[me.options.server.key] && !$.isArray(me.options.server.key)) {
                callback(true, []);
                return;
            }

            // TODO 列表数据中含有null则去除，会造成列表总数不准
            var list = [];

            //保利客服的混合类型数据模式--by zzs wa 
            if ($.isArray(me.options.server.key)) {
                if (me.options.processResult) {
                    list = me.options.processResult(result);
                }
            } else {

                for (var i = 0, len = result[me.options.server.key].length; i < len; i++) {
                    if (result[me.options.server.key][i]) {
                        list.push(result[me.options.server.key][i]);
                    }
                }
            }

            var total = result[me.options.server.total] || 0;
            me.options.page.count = Math.ceil(total / me.options.data[me.options.server.size]);

            if (me.options.data[me.options.server.index] * me.options.data[me.options.server.size] >= total) {
                ls.set(me.options.ls.hasData, false);
            } else {
                ls.set(me.options.ls.hasData, true);
            }

            callback(true, list);
        }).fail(function () {
            // 接口请求失败，回调null
            callback(false, null);
        });
    },

    getData: function getData(first, callback) {
        if (typeof first === 'function') {
            first();
        }

        this.remote(function (status, result) {
            callback(status, result);
        });
    },

    load: function load(first, callback) {
        var me = this;

        var model = me.currentModel = me.model.empty;

        me.options.page.index = 1;
        me.options.data[me.options.server.index] = 1;

        me.getData(first, function (status, result) {
            callback(model, result);
        });
    },

    next: function next(callback) {
        var me = this;

        var model = me.currentModel = me.model.append;

        me.options.page.index += 1;
        me.options.data[me.options.server.index] += 1;

        me.getData(null, function (status, result) {
            callback(model, result);
        });
    },

    refresh: function refresh(callback) {
        var me = this;

        var model = me.currentModel = me.model.prepend;

        me.options.page.index = 1;
        me.options.data[me.options.server.index] = 1;

        me.getData(null, function (status, result) {
            callback(model, result);
        });
    }

});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(3);

var _core2 = _interopRequireDefault(_core);

__webpack_require__(15);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(3);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 渲染处理模块
$.extend(_core2.default.prototype, {
    renderValidate: function renderValidate() {
        if (!this.paginator.options.element) {
            throw 'no config element';
        }

        if (!this.paginator.options.element.wrapper) {
            throw 'no config element.wrapper';
        }

        if (!this.paginator.options.first) {
            throw 'no config first';
        }

        if (typeof this.paginator.options.first != 'function') {
            throw 'config first is not a function';
        }

        if (!this.paginator.options.html) {
            throw 'no config html';
        }

        if (!this.paginator.options.html.reload) {
            throw 'no config html.reload';
        }
    },

    render: function render() {
        var me = this;

        if (typeof iscrollPull === 'undefined') {
            throw 'no iscrollPull';
        }

        var options = {
            probeType: me.options.probeType || 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function onDownAction() {
                me.refresh(function (model, data) {
                    me.renderHtml(model, data);
                });
            },
            onUpAction: function onUpAction() {
                me.next(function (model, data) {
                    me.renderHtml(model, data);
                });
            },
            onLoaded: function onLoaded(local) {
                if (me.paginator.options && !me.paginator.options.sameTab) {
                    me.paginator.scroller.hideWrapper(); // 隐藏wrapper
                }

                if (!local && me.paginator.options && !me.paginator.options.noTopUpdate) {
                    me.paginator.scroller.stopDown(). // 停止下拉
                    stopUp(); // 停止上拉
                }

                me.load(me.options.first, function (model, data) {
                    me.renderHtml(model, data);
                });
            }

            // 如果存在上拉下拉，并且已经初始化
        };if (me.paginator.scroller && $(me.paginator.options.element.wrapper).hasClass('scrollerWrapper')) {
            // 如果不重置scroller，需要重置其参数
            me.paginator.scroller.set(options);

            if (me.paginator.options && !me.paginator.options.noTopUpdate) {
                me.paginator.scroller.myScroll.scrollTo(0, 0);
            }

            // 停止手势离开屏幕后的滚动
            me.paginator.scroller.myScroll.isAnimating = false;

            setTimeout(function () {
                // 开启手势离开屏幕后的滚动
                me.paginator.scroller.myScroll.isAnimating = true;
                me.paginator.scroller.options.onLoaded();
            }, 200);
        } else {
            me.paginator.scroller = new iscrollPull(me.options.element.wrapper, options);
        }
    },

    renderHtml: function renderHtml(model, data) {
        if (this.status && this.status === 3) {
            return;
        }

        var me = this;

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(model, data) || data;
        }

        if (!data || !(data instanceof Array)) {
            me.renderError(model, data);

            return;
        }

        if (data.length === 0) {
            me.renderEmpty(model, data);

            return;
        }

        me.renderNormal(model, data);
    },

    renderError: function renderError(model, data) {
        var me = this;

        var contentNode = document.querySelector(me.options.element.content);
        if (!contentNode) {
            throw 'no element node content';
        }
        contentNode.innerHTML = me.options.html.reload;

        $(me.options.element.reload).off('click').one('click', function () {
            window.location.reload();
        });

        if (me.options.data.pageIndex > 1) {
            me.options.page.index -= 1;
            me.options.data.pageIndex -= 1;
        }

        me.updateScroller(model);

        if (model === me.model.empty || model === me.model.prepend) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }

            me.paginator.scroller.stopUp(); // 停止上拉
            me.paginator.scroller.showWrapper(); // 显示wrapper
        }
    },

    renderEmpty: function renderEmpty(model, data) {
        var me = this;

        if (model === me.model.empty || model === me.model.prepend) {
            document.querySelector(me.options.element.content).innerHTML = me.options.html.empty;
        }

        if (typeof me.options.renderEmpty === 'function') {
            me.options.renderEmpty(model, data);
        }

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }
        }

        me.updateScroller(model);
        me.paginator.scroller.showWrapper(); // 显示wrapper
    },

    renderNormal: function renderNormal(model, data) {
        var me = this;

        if (me.options.waterfall) {
            var oddArray = [];
            var evenArray = [];

            for (var i = 0, len = data.length; i < len; i++) {
                data[i] = me.options.render(data[i]);

                if (i % 2 == 0) {
                    evenArray.push(data[i]);
                } else {
                    oddArray.push(data[i]);
                }
            }

            if (!$(me.options.element.content).hasClass(me.options.extraClass)) {
                $(me.options.element.content).addClass(me.options.extraClass);
                $(me.options.element.content).html('<div class="even-wrapper"></div><div class="odd-wrapper"></div>');
            }

            var evenHtml = '';
            var oddeHtml = '';

            evenHtml = template(me.options.template, evenArray);
            oddeHtml = template(me.options.template, oddArray);

            if (typeof me.options.processStrHtml === 'function') {
                evenHtml = me.options.processStrHtml(model, evenHtml);
                oddeHtml = me.options.processStrHtml(model, oddeHtml);
            }

            if (model === me.model.append) {
                $(me.options.element.content).find(".even-wrapper").append(evenHtml);
                $(me.options.element.content).find(".odd-wrapper").append(oddeHtml);
            } else {
                $(me.options.element.content).find(".even-wrapper").html(evenHtml);
                $(me.options.element.content).find(".odd-wrapper").html(oddeHtml);
            }
        } else {
            $(me.options.element.content).removeClass(me.options.extraClass);
            for (var _i = 0, _len = data.length; _i < _len; _i++) {
                data[_i] = me.options.render(data[_i]);
            }

            var strHtml = template(me.options.template, data);

            if (typeof me.options.processStrHtml === 'function') {
                strHtml = me.options.processStrHtml(model, strHtml);
            }

            if (model === me.model.append) {
                $(me.options.element.content).append(strHtml);
            } else {
                $(me.options.element.content).html(strHtml);
            }
        }

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(model, data);
        }

        me.updateScroller();

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }

            me.paginator.scroller.showWrapper(); // 显示wrapper
        }

        me.options.lazyload && me.lazyload();
    },

    updateScroller: function updateScroller() {
        var me = this;

        var instance = me.paginator.scroller;

        if (!me.options.enablePullDown) {
            instance.stopDown(); // 停止下拉
        } else {
            instance.restDown(); // 重启下拉
        }

        if (!me.options.enablePullUp) {
            // 停止上拉
            instance.stopUp();
        } else if (me.options.page.index >= me.options.page.count && !ls.get(me.options.ls.hasData)) {
            // 停止上拉
            instance.stopUp();
        } else if (!me.options.page.count && !ls.get(me.options.ls.hasData)) {
            //无数据时
            // 停止上拉
            instance.stopUp();
        } else {
            // 重启上拉te
            instance.restUp();
        }

        setTimeout(function () {
            instance.myScroll.refresh(); // 刷新scroller
        }, 100);
    }
});

/***/ })
/******/ ]);
});