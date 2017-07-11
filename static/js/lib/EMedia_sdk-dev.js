/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var util = __webpack_require__(4);

	window.emedia = window.emedia || {};
	emedia.util = util;

	emedia.config = function (cfg) {
	    cfg = util.extend({}, cfg);

	    for (var key in cfg) {
	        emedia.config[key] = cfg[key];
	    }
	};

	emedia.config({
	    autoSub: true,

	    onlyEnter: false,

	    reconnect: 10, //重连次数
	    reconnectDelay: 3000, //重连间隔 毫秒

	    getCopyIntervalMillis: 37000,
	    checkConnectIntervalMillis: 1000,

	    iceRebuildCount: 3,
	    iceRebuildIntervalMillis: 500
	});

	var Service = __webpack_require__(5);
	var __event = __webpack_require__(7);

	emedia.Service = Service;

	emedia.event = __event;

	;(function (root, factory) {
	    'use strict';

	    if (( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
	        module.exports = factory();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        root.WebRTC = factory();
	    }
	})(undefined, function () {
	    'use strict';

	    return emedia;
	});

	/**
	 * 判断是否支持pranswer
	 */
	if (/Chrome/.test(navigator.userAgent)) {
	    emedia.supportPRAnswer = navigator.userAgent.split("Chrome/")[1].split(".")[0] >= 50 ? true : false;
	}

	//WebIM.WebRTC.supportPRAnswer = false;


	emedia.LOG_LEVEL = 3;

	emedia.isWebRTC = (/Firefox/.test(navigator.userAgent) || /WebKit/.test(navigator.userAgent)) && /^https\:$/.test(window.location.protocol);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	 * ! Math.uuid.js (v1.4) http://www.broofa.com mailto:robert@broofa.com
	 * 
	 * Copyright (c) 2010 Robert Kieffer Dual licensed under the MIT and GPL
	 * licenses.
	 */

	/*
	 * Generate a random uuid.
	 * 
	 * USAGE: Math.uuid(length, radix) length - the desired number of characters
	 * radix - the number of allowable values for each character.
	 * 
	 * EXAMPLES: // No arguments - returns RFC4122, version 4 ID >>> Math.uuid()
	 * "92329D39-6F5C-4520-ABFC-AAB64544E172" // One argument - returns ID of the
	 * specified length >>> Math.uuid(15) // 15 character ID (default base=62)
	 * "VcydxgltxrVZSTV" // Two arguments - returns ID of the specified length, and
	 * radix. (Radix must be <= 62) >>> Math.uuid(8, 2) // 8 character ID (base=2)
	 * "01001010" >>> Math.uuid(8, 10) // 8 character ID (base=10) "47473046" >>>
	 * Math.uuid(8, 16) // 8 character ID (base=16) "098F4D35"
	 */
	(function () {
	    // Private array of chars to use
	    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

	    Math.uuid = function (len, radix) {
	        var chars = CHARS,
	            uuid = [],
	            i;
	        radix = radix || chars.length;

	        if (len) {
	            // Compact form
	            for (i = 0; i < len; i++) {
	                uuid[i] = chars[0 | Math.random() * radix];
	            }
	        } else {
	            // rfc4122, version 4 form
	            var r;

	            // rfc4122 requires these characters
	            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
	            uuid[14] = '4';

	            // Fill in random data. At i==19 set the high bits of clock sequence
	            // as
	            // per rfc4122, sec. 4.1.5
	            for (i = 0; i < 36; i++) {
	                if (!uuid[i]) {
	                    r = 0 | Math.random() * 16;
	                    uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
	                }
	            }
	        }

	        return uuid.join('');
	    };

	    // A more performant, but slightly bulkier, RFC4122v4 solution. We boost
	    // performance
	    // by minimizing calls to random()
	    Math.uuidFast = function () {
	        var chars = CHARS,
	            uuid = new Array(36),
	            rnd = 0,
	            r;
	        for (var i = 0; i < 36; i++) {
	            if (i == 8 || i == 13 || i == 18 || i == 23) {
	                uuid[i] = '-';
	            } else if (i == 14) {
	                uuid[i] = '4';
	            } else {
	                if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
	                r = rnd & 0xf;
	                rnd = rnd >> 4;
	                uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
	            }
	        }
	        return uuid.join('');
	    };

	    // A more compact, but less performant, RFC4122v4 solution:
	    Math.uuidCompact = function () {
	        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = Math.random() * 16 | 0,
	                v = c == 'x' ? r : r & 0x3 | 0x8;
	            return v.toString(16);
	        });
	    };
	})();

	/**
	 * Util
	 *
	 * @constructor
	 */
	function Util() {}

	/**
	 * Function Logger
	 *
	 * @constructor
	 */
	var Logger = function Logger(tag) {
	    var self = this;

	    var LogLevel = {
	        TRACE: 0,
	        DEBUG: 1,
	        INFO: 2,
	        WARN: 3,
	        ERROR: 4,
	        FATAL: 5
	    };

	    var LogLevelName = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'];

	    this.log = function () {
	        var level = arguments[0];

	        level = arguments[0] = LogLevelName[level];

	        console.log.apply(console, arguments);
	    };

	    function callLog(level, args) {
	        if (emedia && emedia.LOG_LEVEL && level < emedia.LOG_LEVEL) {
	            return;
	        }

	        var _args = [];

	        _args.push(level);
	        _args.push(tag || "");

	        for (var i = 0; i < args.length; i++) {
	            _args.push(args[i]);
	        }

	        //_args.caller && _args.push(_args.caller);

	        self.log.apply(self, _args);
	    };

	    this.trace = function () {
	        this.log && callLog(LogLevel.TRACE, arguments);
	    };

	    this.debug = function () {
	        this.log && callLog(LogLevel.DEBUG, arguments);
	    };

	    this.info = function () {
	        this.log && callLog(LogLevel.INFO, arguments);
	    };

	    this.warn = function () {
	        this.log && callLog(LogLevel.WARN, arguments);
	    };

	    this.error = function () {
	        this.log && callLog(LogLevel.ERROR, arguments);
	    };

	    this.fatal = function () {
	        this.log && callLog(LogLevel.FATAL, arguments);
	    };
	};

	Util.prototype.logger = new Logger();

	Util.prototype.tagLogger = function (tag) {
	    return new Logger(tag);
	};

	/**
	 * parse json
	 *
	 * @param jsonString
	 */
	Util.prototype.parseJSON = function (jsonString) {
	    return JSON.parse(jsonString);
	};

	/**
	 * json to string
	 *
	 * @type {Util.stringifyJSON}
	 */
	var stringifyJSON = Util.prototype.stringifyJSON = function (jsonObj) {
	    return JSON.stringify(jsonObj);
	};

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	/**
	 * check object type
	 *
	 * @type {Util.isPlainObject}
	 */
	var isPlainObject = Util.prototype.isPlainObject = function (obj) {
	    var proto, Ctor;

	    // Detect obvious negatives
	    // Use toString instead of jQuery.type to catch host objects
	    if (!obj || toString.call(obj) !== "[object Object]") {
	        return false;
	    }

	    proto = Object.getPrototypeOf(obj);

	    // Objects with no prototype (e.g., `Object.create( null )`) are plain
	    if (!proto) {
	        return true;
	    }

	    // Objects with prototype are plain iff they were constructed by a
	    // global Object function
	    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
	    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
	};

	Util.prototype.isArray = Array.isArray;

	/**
	 * check empty object
	 *
	 * @param obj
	 * @returns {boolean}
	 */
	Util.prototype.isEmptyObject = function (obj) {
	    var name;
	    for (name in obj) {
	        return false;
	    }
	    return true;
	};

	Util.prototype.type = function (obj) {
	    if (obj == null) {
	        return obj + "";
	    }
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	};

	/**
	 * Function extend
	 *
	 * @returns {*|{}}
	 */
	Util.prototype.extend = function () {
	    var self = this;
	    var options,
	        name,
	        src,
	        copy,
	        copyIsArray,
	        clone,
	        target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false;

	    // Handle a deep copy situation
	    if (typeof target === "boolean") {
	        deep = target;

	        // Skip the boolean and the target
	        target = arguments[i] || {};
	        i++;
	    }

	    // Handle case when target is a string or something (possible in deep
	    // copy)
	    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !self.isFunction(target)) {
	        target = {};
	    }

	    // Extend self itself if only one argument is passed
	    if (i === length) {
	        target = this;
	        i--;
	    }

	    for (; i < length; i++) {

	        // Only deal with non-null/undefined values
	        if ((options = arguments[i]) != null) {

	            // Extend the base object
	            for (name in options) {
	                src = target[name];
	                copy = options[name];

	                // Prevent never-ending loop
	                if (target === copy) {
	                    continue;
	                }

	                // Recurse if we're merging plain objects or arrays
	                if (deep && copy && (self.isPlainObject(copy) || (copyIsArray = self.isArray(copy)))) {

	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && self.isArray(src) ? src : [];
	                    } else {
	                        clone = src && self.isPlainObject(src) ? src : {};
	                    }

	                    // Never move original objects, clone them
	                    target[name] = self.extend(deep, clone, copy);

	                    // Don't bring in undefined values
	                } else if (copy !== undefined) {
	                    target[name] = copy;
	                }
	            }
	        }
	    }

	    // Return the modified object
	    return target;
	};

	Util.prototype.removeAttribute = function (elem, key) {
	    var obj = elem[key];

	    delete elem[key];

	    return obj;
	};

	Util.prototype.prototypeExtend = Util.prototype.classExtend = function () {
	    var self = this;

	    function _Obj__() {
	        for (var i = 0; i < arguments.length; i++) {
	            var cfg = arguments[i] || {};
	            self.extend(true, this, cfg);
	        }

	        this.__init__ && this.__init__();
	    }

	    for (var i = 0; i < arguments.length; i++) {
	        var cfg = arguments[i] || {};
	        if (typeof cfg === "function") {
	            cfg = cfg.prototype;
	        }

	        self.extend(true, _Obj__.prototype, cfg);
	    }

	    _Obj__.extend || (_Obj__.extend = function (_prototypeExtend) {
	        return self.prototypeExtend(_Obj__, _prototypeExtend);
	    });

	    return _Obj__;
	};

	/*
	Util.prototype.prototypeExtend = Util.prototype.classExtend = function(){
	    var self = this;

	    function _Obj__(){
	        for(var i = 0; i < arguments.length; i++){
	            var cfg = arguments[i] || {};
	            self.extend(true, this, cfg);
	        }

	        this.__init__ && this.__init__();
	    }

	    for(var i = 0; i < arguments.length; i++){
	        var cfg = arguments[i] || {};
	        if(typeof cfg === "function"){
	            cfg = cfg.prototype;
	        }

	        self.extend(true, _Obj__.prototype, cfg);
	    }

	    _Obj__.extend || (_Obj__.extend = function (_prototypeExtend) {
	        return self.prototypeExtend(_Obj__, _prototypeExtend);
	    });

	    return _Obj__;
	}
	*/

	/**
	 * get local cache
	 *
	 * @memberOf tool
	 * @name hasLocalData
	 * @param key{string}
	 *            localStorage的key值
	 * @return boolean
	 */
	Util.prototype.hasLocalStorage = function (key) {
	    // null -> localStorage.removeItem时
	    // '{}' -> collection.models.destroy时
	    if (localStorage.getItem(key) == null || localStorage.getItem(key) == '{}') {
	        return false;
	    }
	    return true;
	};

	Util.prototype.toggleClass = function (node, className) {
	    if (node.hasClass(className)) {
	        node.removeClass(className);
	        return;
	    }
	    node.addClass(className);
	};

	/**
	 * set cookie
	 *
	 * @param name{String}
	 *
	 * @param value{String}
	 *
	 * @param hour{Number}
	 *
	 * @return void
	 */
	Util.prototype.setCookie = function (name, value, hour) {
	    var exp = new Date();
	    exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
	    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	};

	/**
	 * read cookie
	 *
	 * @param name(String)
	 *            cookie key
	 * @return cookie value
	 * @memberOf Tool
	 */
	Util.prototype.getCookie = function (name) {
	    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	    if (arr != null) {
	        return unescape(arr[2]);
	    }
	    return null;
	};

	/**
	 * query parameter from url
	 *
	 * @name parseURL
	 * @memberof C.Tools
	 * @param {string}
	 *
	 * @return {string}
	 * @type function
	 * @public
	 */
	Util.prototype.parseURL = function (name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	};

	/**
	 * function(index, value){

	}
	 * @param obj
	 */
	Util.prototype.forEach = function (obj, func) {
	    if (!obj || this.isEmptyObject(obj)) {
	        return;
	    }

	    obj = obj || {};

	    var copy = this.extend(false, {}, obj);

	    for (var index in copy) {
	        func(index, obj[index]);
	    }
	};

	module.exports = new Util();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//Service 类，会创建session(me), 并且将current属性设置为 me; 以后方法需要此值


	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Service");

	var Session = __webpack_require__(6);
	var Attendee = __webpack_require__(8);

	var __event = __webpack_require__(7);
	var EventHandler = __webpack_require__(12);

	var __Desktop = __webpack_require__(13);

	var __desktop = new __Desktop({
	    onExtLoaded: function onExtLoaded() {
	        _logger.info("Share desktop ext. had loaded.");
	    }
	});

	var __Stream = __webpack_require__(11);

	/**
	 * {
	 *  newSession:
	 *  onCalling:
	 *  onRinging:
	 *
	 *
	 * }
	 *
	 *
	 *
	 */
	module.exports = _util.prototypeExtend({
	    __init__: function __init__() {
	        var self = this;

	        var urlLogLevel = _util.parseURL("__log_level___");
	        if (urlLogLevel) {
	            emedia.LOG_LEVEL = parseInt(urlLogLevel);
	        }

	        if (self.ticket && _util.isPlainObject(self.ticket)) {
	            self.setup(self.ticket);
	        }

	        self.namespace = Math.uuidFast();
	    },

	    AVPubstream: __Stream.extend({
	        __init__: function __init__() {
	            var self = this;

	            self.type = 0;
	            self._located = true;
	        }
	    }),

	    ShareDesktopPubstream: __Stream.extend({
	        __init__: function __init__() {
	            var self = this;

	            self.type = 1;
	            self._located = true;
	        }
	    }),

	    __assertCurrent: function __assertCurrent() {
	        var self = this;
	        if (!self.current) {
	            throw "Please call emedia.service.setup(ticket)";
	        }
	        if (self.current.closed) {
	            throw "current closed";
	        }
	    },

	    openUserMedia: function openUserMedia(pubS) {
	        var self = this;

	        self.__assertCurrent();

	        if (!pubS) {
	            throw "require pubS";
	        }

	        return {
	            then: function then(success, errCallback) {
	                if (pubS instanceof self.AVPubstream) {
	                    self._openCamera(pubS, success, errCallback);
	                } else if (pubS instanceof self.ShareDesktopPubstream) {
	                    self._openSharedDesktop(pubS, success, errCallback);
	                } else {
	                    throw "Unspported pubS";
	                }
	            }
	        };
	    },

	    _openSharedDesktop: function _openSharedDesktop(pubS, success, errCallback) {
	        var self = this;

	        self.__assertCurrent();

	        __desktop.openDesktopMedia(null, function (_event) {
	            if (_event instanceof __event.OpenDesktopMedia) {
	                var desktopStreamId = _event.desktopStreamId;

	                var constraints = {
	                    audio: false,
	                    video: {
	                        mandatory: pubS.mandatory || {
	                            chromeMediaSource: 'desktop',
	                            chromeMediaSourceId: desktopStreamId,
	                            maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
	                            maxHeight: window.screen.height > 1080 ? window.screen.height : 1080
	                        },
	                        optional: []
	                    }
	                };

	                delete pubS.mandatory;

	                self.__getUserMedia(constraints, function (_me, stream) {
	                    pubS.localStream = stream;
	                    success && success(self.current, stream);
	                }, errCallback);
	            } else {
	                errCallback && errCallback(_event);
	            }
	        });
	    },

	    _openCamera: function _openCamera(pubS, success, errCallback) {
	        var self = this;

	        self.__assertCurrent();

	        //var constaints = pubS.constaints || {audio: !pubS.aoff, video: !pubS.voff};
	        var constaints = pubS.constaints || { audio: true, video: true };

	        self.__getUserMedia(constaints, function (_me, stream) {
	            self.__controlStream(pubS, stream);

	            pubS.localStream = stream;
	            success && success(self.current, stream);
	        }, errCallback);
	    },

	    __controlStream: function __controlStream(pubS, stream) {
	        stream && stream.getVideoTracks().forEach(function (track) {
	            track.enabled = !pubS.voff;
	        });
	        stream && stream.getAudioTracks().forEach(function (track) {
	            track.enabled = !pubS.aoff;
	        });
	    },

	    __getUserMedia: function __getUserMedia(constaints, success, errCallback) {
	        var self = this;

	        navigator.mediaDevices.getUserMedia(constaints).then(function (stream) {
	            var videoTracks = stream.getVideoTracks();
	            var audioTracks = stream.getAudioTracks();

	            if (videoTracks.length > 0) {
	                _logger.debug('Using video device: ' + videoTracks[0].label);
	            }
	            if (audioTracks.length > 0) {
	                _logger.debug('Using audio device: ' + audioTracks[0].label);
	            }

	            success && success(self.current, stream);
	        }).catch(function (e) {
	            _logger.debug('[WebRTC-API] getUserMedia() error: ', e);

	            self.current.onEvent(new __event.OpenMediaError({ member: self.current, event: e }));
	            errCallback && errCallback(new __event.OpenMediaError({ member: self.current, event: e }));
	        });
	    },

	    setup: function setup(ticket) {
	        var self = this;

	        _logger.debug("recv ticket", ticket);

	        if (typeof ticket === "string") {
	            ticket = JSON.parse(ticket);
	        }

	        var sysUserId = ticket.memName;

	        if (self.current && !self.current.closed) {
	            var __eventCalling = new __event.CurrentCalling();
	            self.current.onEvent(__eventCalling);
	            throw __eventCalling;

	            //self.current.exit(0);
	        }

	        var _Attendee = Attendee.extend(EventHandler);

	        var attendee = self.current = new _Attendee({
	            autoSub: emedia.config.autoSub,
	            getCopyIntervalMillis: emedia.config.getCopyIntervalMillis,
	            sysUserId: sysUserId,
	            resource: self.resource,
	            nickName: self.nickName,
	            ticket: ticket,

	            sessionFactory: function sessionFactory() {
	                return self.newSession(this, ticket);
	            }
	        }, self.listeners || {});

	        return attendee;
	    },

	    exit: function exit() {
	        this.current && this.current.exit(0);
	    },

	    join: function join(joined, joinError) {
	        _logger.debug("begin join ...");

	        var self = this;

	        self.__assertCurrent();

	        self.current.join(joined, joinError);
	    },

	    withpublish: function withpublish(pubS) {
	        var self = this;

	        if (!pubS || !pubS.localStream) {
	            throw "pubS null or stream not open";
	        }

	        self.__assertCurrent();

	        return self.current.withpublish(pubS);
	    },

	    push: function push(pubS, pushed, onPushError) {
	        _logger.debug("begin push ...");

	        var self = this;

	        if (arguments.length === 2) {
	            onPushError = pushed;
	            pushed = undefined;
	        }

	        if (!pubS || !pubS.localStream) {
	            throw "pubS or stream open";
	        }

	        self.__assertCurrent();
	        self.current.push(pubS, pushed, onPushError);
	    },

	    subscribe: function subscribe(streamId, onSub, subfail) {
	        var self = this;

	        self.__assertCurrent();

	        if (arguments.length == 2) {
	            subfail = onSub;
	            onSub = undefined;
	        }

	        self.current.createWebrtcAndSubscribeStream(streamId, {
	            onGotRemote: function onGotRemote(stream) {
	                onSub && onSub(stream);
	            },
	            onEvent: function onEvent(_evt) {
	                subfail && subfail(_evt);
	            }
	        });
	    },

	    hungup: function hungup(streamId) {
	        var self = this;

	        self.__assertCurrent();

	        var attendee = self.current;

	        var stream = attendee._cacheStreams[streamId];
	        var rtcId = stream.rtcId;
	        if (rtcId) {
	            attendee.closeWebrtc(rtcId);

	            if (stream.located()) {
	                stream.type !== 1 && stream._localMediaStream && stream._localMediaStream.getTracks().forEach(function (track) {
	                    track.stop();
	                });

	                attendee._cacheStreams[streamId] && attendee.onRemoveStream(stream);

	                delete attendee._cacheStreams[streamId];
	            }
	        }

	        if (stream && !stream.located()) {
	            attendee._linkedStreams[stream.id] && delete attendee._linkedStreams[stream.id];

	            var _stream = new __Stream(stream);
	            _stream.rtcId = undefined;
	            _stream._webrtc = undefined;

	            attendee.onUpdateStream(_stream);
	        }
	    },

	    voff: function voff(pubS, _voff) {
	        var self = this;

	        self.__assertCurrent();

	        pubS.voff = _voff;

	        pubS.getMediaStream() && pubS.getMediaStream().getVideoTracks().forEach(function (track) {
	            track.enabled = !_voff;
	        });

	        self.current.voff(pubS, _voff);
	    },

	    aoff: function aoff(pubS, _aoff) {
	        var self = this;

	        self.__assertCurrent();

	        pubS.aoff = _aoff;

	        pubS.getMediaStream() && pubS.getMediaStream().getAudioTracks().forEach(function (track) {
	            track.enabled = !_aoff;
	        });

	        self.current.aoff(pubS, _aoff);
	    },

	    startRecord: function startRecord(rtcId, callback) {
	        var self = this;
	        self.current.startRecord(rtcId, callback);
	    },

	    stopRecord: function stopRecord(rtcId, callback) {
	        var self = this;
	        self.current.stopRecord(rtcId, callback);
	    },

	    newSession: function newSession(attendee, ticket) {
	        var self = this;

	        var session = new Session({
	            ticket: ticket,
	            owner: attendee,

	            onTcklC: function onTcklC(evt) {
	                attendee.onTcklC(evt.rtcId, evt.cands);
	            },
	            onAcptC: function onAcptC(evt) {
	                attendee.onAcptC(evt.rtcId, evt.sdp, evt.cands);
	            },
	            onAnsC: function onAnsC(evt) {
	                attendee.onAnsC(evt.rtcId, evt.sdp, evt.cands);
	            },
	            onTermC: function onTermC(evt) {
	                //self.onTermC(me, evt);
	            },
	            onEnter: function onEnter(evt) {
	                attendee.onEnter(evt.cver, evt.mem);
	            },
	            onExit: function onExit(evt) {
	                attendee.onExit(evt.cver, evt.memId, evt.reason);
	            },
	            onPub: function onPub(evt) {
	                attendee.onPub(evt.cver, evt.memId, evt.pubS);
	            },
	            onUnpub: function onUnpub(evt) {
	                attendee.onUnpub(evt.cver, evt.memId, evt.pubSId);
	            },
	            onMems: function onMems(evt) {},
	            onClose: function onClose(evt) {
	                attendee.onClose(evt.cver, evt.confrId);
	            },
	            onEvent: function onEvent(evt) {
	                attendee.onEvent(evt);
	            },
	            onStreamControl: function onStreamControl(evt) {
	                attendee.onStreamControl(evt.streamId, evt.voff, evt.aoff);
	            }
	        });

	        return session;
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Sess");

	var __event = __webpack_require__(7);

	var __url_seqno = 0;

	var Message = _util.prototypeExtend({
	    setSessId: function setSessId(sessId) {
	        sessId && (this.sessId = sessId);
	        return this;
	    },
	    setOp: function setOp(op) {
	        op && (this.op = op);
	        return this;
	    },
	    setTsxId: function setTsxId(tsxId) {
	        tsxId && (this.tsxId = tsxId);
	        return this;
	    },
	    setTicket: function setTicket(tkt) {
	        tkt && (this.tkt = tkt);
	        return this;
	    },
	    setSdp: function setSdp(sdp) {
	        sdp && (this.sdp = sdp);
	        return this;
	    },
	    setCands: function setCands(cands) {
	        cands && (this.cands = cands);
	        return this;
	    },
	    setSubSId: function setSubSId(subSId) {
	        subSId && (this.subSId = subSId);
	        return this;
	    },
	    setPubS: function setPubS(pubS) {
	        pubS && (this.pubS = _util.extend(false, {}, pubS));

	        var thisPubS = this.pubS;

	        thisPubS && _util.forEach(thisPubS, function (key, value) {
	            if (_util.isPlainObject(value) || typeof value === 'function') {
	                _util.removeAttribute(thisPubS, key);
	            }
	        });
	        thisPubS && _util.removeAttribute(thisPubS, "localStream");

	        return this;
	    },
	    setRtcId: function setRtcId(rtcId) {
	        rtcId && (this.rtcId = rtcId);
	        return this;
	    },
	    setCver: function setCver(cver) {
	        cver && (this.cver = cver);
	        return this;
	    },
	    setEndReason: function setEndReason(endReason) {
	        endReason && (this.endReason = endReason);
	        return this;
	    },
	    setNickName: function setNickName(nickName) {
	        nickName && (this.nickName = nickName);
	        return this;
	    },
	    setResource: function setResource(resource) {
	        resource && (this.resource = resource);
	        return this;
	    },
	    setReason: function setReason(reason) {
	        reason && (this.reason = reason);
	        return this;
	    },
	    setConfrId: function setConfrId(confrId) {
	        confrId && (this.confrId = confrId);
	        return this;
	    },
	    setVoff: function setVoff(voff) {
	        voff && (this.voff = voff);
	        return this;
	    },
	    setAoff: function setAoff(aoff) {
	        aoff && (this.aoff = aoff);
	        return this;
	    },
	    setFlag: function setFlag(flag) {
	        flag && (this.flag = flag);
	        return this;
	    }
	});

	/**
	 * {
	 *   websocket:
	 *   onMessage:
	 *   _postMessage(Message):
	 *   onError:
	 * }
	 *
	 * reconnectCount > 0 时不上报错误（调用onWebsocketEvent）。
	 * 不存在或==0 调用调用onWebsocketEvent
	 * 调用onWebsocketEvent WSClose时 将会关闭
	 *
	 * @returns {*}
	 *
	 */

	window.__session_globalCount = 0;

	function _connect(onConnected, onConnectFail, retry) {
	    var self = this;

	    function connectFail(cause, _evt) {
	        try {
	            self.onWebsocketEvent(new __event.WSClose({ url: self.thisWsUri, retry: retry, online: self.online, cause: cause, event: _evt, session: self }));
	        } finally {
	            onConnectFail && onConnectFail(new __event.WSClose({ url: self.thisWsUri, retry: retry, online: self.online, cause: cause, event: _evt, session: self }));
	        }
	    }

	    function post(message) {
	        if (!self.connected(self.thisWsUri)) {
	            _logger.debug("current dont connect. the message = ", message);
	            return;
	        }

	        if (_util.isPlainObject(message) && !(message instanceof Message)) {
	            throw "message not a Messages";
	        }

	        if (self.sessId && message.sessId != self.sessId) {
	            _logger.info("self.sessId && message.sessId != self.sessId", message);
	            return;
	        }

	        self.thisWsUri === self._websocket.url && self._websocket.send(JSON.stringify(message));
	        self.thisWsUri === self._websocket.url && _logger.info("Done send: req:", message, self._websocket.url);
	        self.thisWsUri === self._websocket.url || _logger.info("Donot send(url not equal): req:", message, self._websocket.url);
	    }

	    function notifyNewMessage() {
	        if (self._bufferedMessages.length === 0) {
	            return;
	        }

	        if (self.connected(self.thisWsUri)) {
	            var __array = [];

	            var bufferedMessage;
	            while (bufferedMessage = self._bufferedMessages.shift()) {
	                if (!bufferedMessage.sessId && !self.sessId && bufferedMessage.op != 200) {
	                    //等待Enter
	                    __array.push(bufferedMessage);
	                    continue;
	                }

	                if (bufferedMessage.op === 200) {
	                    //200单独发送，有可能会修改session值
	                    post(bufferedMessage);
	                    break;
	                }

	                if (self.sessId && !bufferedMessage.sessId) {
	                    bufferedMessage.sessId = self.sessId;
	                }

	                var _bufferedMessage = post(bufferedMessage);
	                _bufferedMessage && __array.push(_bufferedMessage);
	            }

	            if (__array.length > 0) {
	                Array.prototype.push.apply(self._bufferedMessages, __array);
	            }
	        } else if (!retry || !self.online) {
	            var _messageMap = _util.extend(false, {}, self._callbacks);

	            var tmp = [];
	            for (var tsxId in _messageMap) {
	                var msg = _messageMap[tsxId];
	                if (!self.online && (msg.op === 107 || msg.op === 201 || msg.op === 206 || msg.op === 400)) {
	                    tmp.push(msg);
	                    continue;
	                }
	                self.onMessage({ op: 1001, tsxId: tsxId, result: -9527, msg: "sdk rsp fail. retry fail or online = " + self.online });
	            }

	            self._bufferedMessages = [];

	            tmp.length > 0 && Array.prototype.push.apply(self._bufferedMessages, tmp);
	        }
	    }

	    if (self.connected(self.thisWsUri)) {
	        onConnected && onConnected(self);
	        _logger.info("Session connected. dont continue connect");
	        self.notifyNewMessage && self.notifyNewMessage();

	        return;
	    }

	    if (!self.online) {
	        connectFail();
	        return;
	    }

	    self.notifyNewMessage = notifyNewMessage;

	    _logger.info("Session begin connect.");

	    var _websocket = self._websocket;
	    if (_websocket) {
	        _logger.warn("will close. websocket state", _websocket.readyState, _websocket.url, self.thisWsUri);
	        _websocket.close(1000);
	    }

	    try {
	        _logger.warn("Connecting", self.thisWsUri, retry);
	        _websocket = self._websocket = new WebSocket(self.thisWsUri);
	    } catch (e) {
	        _logger.error(e);
	        connectFail(e);

	        return;
	    }

	    _websocket.onopen = function (evt) {
	        var _url = this.url;
	        if (_url !== self.thisWsUri) {
	            _logger.error("ignore the onopen. caused by websocket url not ", self.thisWsUri, _url);
	            return;
	        }

	        try {
	            _logger.info("websocket connected:", _url);
	            onConnectFail && (onConnectFail = null);
	            onConnected && onConnected(self);
	            self.onWebsocketEvent(new __event.WSConnected({ event: evt, session: self }));
	        } finally {
	            //self.notifyNewMessage();
	        }
	    };

	    _websocket.onmessage = function (evt) {
	        var _url = this.url;
	        if (_url !== self.thisWsUri) {
	            _logger.error("ignore recv data. caused by websocket url not ", self.thisWsUri, _url, evt.data);
	            return;
	        }

	        _logger.debug("recv data", evt.data);

	        var data = JSON.parse(evt.data);
	        data && data.op == 1001 && _logger.debug("recv message: rsp:", data);
	        data && data.op != 1001 && _logger.info("recv message: evt:", data);

	        self.onMessage(data);
	    };

	    _websocket.onclose = function (evt) {
	        var _url = this.url;
	        _logger.info("Disconnected:", _url, self.thisWsUri, evt);
	        if (_url !== self.thisWsUri) {
	            _logger.error("ignore onclose. caused by websocket url not ", self.thisWsUri, _url);
	            return;
	        }

	        self.notifyNewMessage();

	        if (evt.code !== 1000) {
	            //手动断开
	            connectFail(undefined, evt);
	        }
	    };

	    _websocket.onerror = function (evt) {
	        _logger.info("On error:", evt);

	        self.onWebsocketEvent(new __event.WSError({ event: evt, online: self.online, session: self, url: this.url }));
	    };
	}

	/**
	 * {
	 *   ticket:
	 *   reconnectCount:
	 *   onError:
	 *
	 *   onEnter:
	 *   onExit:
	 *   onPub:
	 *   onUnpub:
	 *   onMems:
	 *   onClose:
	 *
	 *   onInitC:
	 *   onTcklC:
	 *
	 *
	 *   newMessage:
	 *   postMessage:
	 * }
	 *
	 *
	 * @private
	 */
	module.exports = _util.prototypeExtend({
	    _events: {
	        '0': 'onReqP2P',
	        '1': 'onNewCfr',
	        '2': 'onDelCfr',
	        '3': 'onReqTkt',

	        '100': 'onPing',
	        '101': 'onPong',
	        '102': 'onInitC',
	        '103': 'onReqC',
	        '104': 'onAcptC',
	        '105': 'onTcklC',
	        '106': 'onAnsC',
	        '107': 'onTermC',

	        '300': 'onEnter',
	        '301': 'onExit',
	        '302': 'onPub',
	        '303': 'onUnpub',
	        '304': 'onMems',
	        '204': 'onClose',
	        '400': 'onStreamControl',
	        '401': 'onJoin'

	    },

	    __init__: function __init__() {
	        var self = this;

	        //self.owner = null;

	        self._bufferedMessages = [];
	        self._callbacks = {};

	        if (navigator.onLine) {
	            self.online = true;
	        } else {
	            self.online = false;
	        }

	        window.addEventListener("online", function (e) {
	            self.online = true;
	            _logger.warn("online online online");

	            if (!self.closed) {
	                self._reconnect(emedia.config.reconnect);
	            }
	        }, true);

	        window.addEventListener("offline", function (e) {
	            self.online = false;
	            _logger.warn("offline offline offline");

	            self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);

	            self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
	            self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;

	            self._websocket && self._websocket.close(1000);
	        }, true);

	        _logger.warn("online status = ", self.online);
	    },

	    _nextWsUri: function _nextWsUri() {
	        var self = this;

	        var url = self.ticket.url;
	        if (url.indexOf("?") >= 0) {
	            url += "&" + __url_seqno++;
	        } else {
	            url += "?" + __url_seqno++;
	        }
	        return url;
	    },

	    _reconnect: function _reconnect(retry) {
	        var self = this;

	        function connected() {
	            _logger.warn("Reconnected. at ", retry, self._websocket.url);
	            self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
	            self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;

	            var enter = self.newMessage().setOp(200).setSessId(self._sessionId).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource);
	            self.postMessage(enter, function (rsp) {
	                if (rsp.result != 0) {
	                    try {
	                        self.onEvent(new __event.EnterFail({
	                            me: self.owner,
	                            cause: new __event.RspFail({ request: enter, response: rsp }) }));
	                    } finally {
	                        if (rsp.result !== -9527) {
	                            //-9527 客户端 自己返回，网络未通， 其他值服务端返回
	                            self.onEvent(new __event.ServerRefuseEnter({ failed: rsp.result, msg: rsp.msg }));
	                        }
	                    }

	                    return;
	                }

	                self.onEvent(new __event.EnterSuccess());

	                self.owner.onMembers(rsp.cver, rsp.mems);
	                self.owner.onStreams(rsp.cver, rsp.streams);

	                self.notifyNewMessage();
	            });
	        }

	        function failed(evt) {
	            if (retry <= 0) {
	                _logger.warn("Reconnect end. but fail.", evt.url, retry);
	                self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;

	                return;
	            }
	            retry && (self.__retryConnectIntervalId = setTimeout(function () {
	                self.connect(connected, failed, --retry);
	            }, emedia.config.reconnectDelay));
	        }

	        self.connect(connected, failed, --retry);
	    },

	    __checkConnect: function __checkConnect() {
	        var self = this;

	        self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);

	        emedia.config.checkConnectIntervalMillis && (self.__checkConnectIntervalId = setTimeout(function () {
	            _logger.trace("Check connect..");

	            try {
	                if (self.online && !self.connected()) {
	                    self.__retryConnectIntervalId && _logger.debug("online, reconnecting...");
	                    self.__retryConnectIntervalId || _logger.debug("online, but disconnect. will reconnect");
	                    self.__retryConnectIntervalId || self._reconnect(emedia.config.reconnect);
	                } else {
	                    //self.notifyNewMessage && self.notifyNewMessage();
	                }
	            } finally {
	                self.__checkConnect();
	            }
	        }, emedia.config.checkConnectIntervalMillis));
	    },

	    connect: function connect(onConnected, onConnectFail, retry) {
	        var self = this;

	        var nextUrl = self.thisWsUri = self._nextWsUri();

	        typeof retry !== "undefined" && _logger.warn("begin connect... at retry = ", retry, nextUrl);

	        function connected() {
	            try {
	                onConnected.apply(self, arguments);
	            } finally {
	                self.__checkConnect();
	            }
	        }

	        function failed(evt) {
	            try {
	                onConnectFail.apply(self, arguments);
	            } finally {
	                retry || evt.url !== nextUrl || self.onEvent(new __event.ServerRefuseEnter({
	                    failed: -95270, msg: "sdk reconnect fail. " + nextUrl + "|" + evt.url }));
	            }
	        }
	        _connect.call(self, connected, failed, retry);
	    },

	    connected: function connected(wsUri) {
	        var self = this;
	        var result = self.online && self._websocket && (!wsUri || wsUri === self._websocket.url) && self._websocket.readyState == WebSocket.OPEN;
	        //_logger.trace("Connected?", result, self.online, wsUri, self._websocket && self._websocket.url, self._websocket && self._websocket.readyState);

	        return result;
	    },

	    onWebsocketEvent: function onWebsocketEvent(evt) {
	        var self = this;
	        self.onEvent(evt);
	    },

	    register: function register(listeners) {
	        if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === "object") {
	            for (var event in listeners) {
	                this.bind(event, listeners[event]);
	            }
	        }
	    },

	    bind: function bind(event, func) {
	        var self = this;

	        var onFunc;
	        if (onFunc = self._events[event]) {
	            self[onFunc] = func;
	        } else {
	            throw "Not supported event = " + event;
	        }
	    },

	    getSessionId: function getSessionId() {
	        return this._sessionId;
	    },

	    newMessage: function newMessage(cfg) {
	        return new Message(cfg);
	    },

	    __modifyMessage: function __modifyMessage(message) {
	        if (message && message.sdp) {
	            if (typeof message.sdp === 'string') {
	                message.sdp = _util.parseJSON(message.sdp);
	            }
	            message.sdp.type && (message.sdp.type = message.sdp.type.toLowerCase());
	        }
	        if (message && message.cands) {
	            if (typeof message.cands === 'string') {
	                message.cands = _util.parseJSON(message.cands);
	            }

	            for (var i = 0; i < message.cands.length; i++) {
	                typeof message.cands[i] === 'string' && (message.cands[i] = _util.parseJSON(message.cands[i]));

	                message.cands[i].sdpMLineIndex = message.cands[i].mlineindex;
	                message.cands[i].sdpMid = message.cands[i].mid;

	                delete message.cands[i].mlineindex;
	                delete message.cands[i].mid;
	            }
	        }

	        if (message && message.mems) {
	            if (!_util.isArray(message.mems)) {
	                return;
	            }

	            var _mems = message.mems;
	            message.mems = {};

	            _util.forEach(_mems, function (index, _mem) {
	                message.mems[_mem.id] = _mem;
	            });
	        }

	        if (message && message.streams) {
	            if (!_util.isArray(message.streams)) {
	                return;
	            }

	            var _streams = message.streams;
	            message.streams = {};

	            _util.forEach(_streams, function (index, _stream) {
	                message.streams[_stream.id] = _stream;
	            });
	        }
	    },

	    onMessage: function onMessage(servMessage) {
	        var self = this;

	        if (servMessage.op != 1001 && !servMessage.sessId) {
	            throw "message sessId error. server evt data error";
	        }

	        if (servMessage.op != 1001 && self._sessionId && self._sessionId != servMessage.sessId) {
	            throw "message sessId error. server and local not equal";
	        }

	        self.__modifyMessage(servMessage);

	        var reqMessage = _util.removeAttribute(self._callbacks, servMessage.tsxId);
	        if (reqMessage && reqMessage.op === 200) {
	            self._sessionId = servMessage.sessId;

	            if (servMessage.result === 0) {
	                //enter 成功
	                for (var index in self._bufferedMessages) {
	                    var message = self._bufferedMessages[index];

	                    if (!message.sessId && message.op !== 200) {
	                        message.sessId = servMessage.sessId;
	                    }
	                }

	                setTimeout(function () {
	                    self.notifyNewMessage();
	                }, 100);
	            } else {
	                var bufferedMessage;
	                while (bufferedMessage = self._bufferedMessages.shift()) {
	                    if (bufferedMessage.op === 200) {
	                        continue;
	                    }

	                    self.onMessage({ op: 1001, tsxId: bufferedMessage.tsxId, result: -9527, msg: "sdk enter fail. sdk callback. enter result = " + servMessage.result });
	                }
	            }
	        }

	        if (reqMessage && reqMessage.__callback__) {
	            reqMessage.__callback__(servMessage);
	            return;
	        }

	        if (!servMessage.op || servMessage.op == 1001) {
	            _logger.trace("Igron message. caused by op not found.", servMessage);
	            return;
	        }

	        var onFunc;
	        var event = servMessage.op;
	        if ((onFunc = self._events[event]) && (onFunc = self[onFunc])) {
	            onFunc(servMessage);
	        } else {
	            throw "Not supported event = ", servMessage;
	        }
	    },

	    __modifyMessageForPost: function __modifyMessageForPost(message) {
	        if (message.cands) {
	            var _cands = [];

	            var cands = message.cands;
	            for (var i = 0; i < cands.length; i++) {
	                if (cands[i].type && cands[i].type == "candidate") {
	                    _cands.push(cands[i]);
	                    continue;
	                }

	                var _cand = {
	                    type: "candidate",
	                    candidate: cands[i].candidate,
	                    mlineindex: cands[i].sdpMLineIndex,
	                    mid: cands[i].sdpMid
	                };

	                _cands.push(_cand);
	            }

	            message.cands = _cands;
	        }

	        if (message.sdp && _util.isPlainObject(message.sdp)) {
	            var _sdp = {
	                type: message.sdp.type,
	                sdp: message.sdp.sdp
	            };

	            message.sdp = _sdp;

	            message.sdp.type = message.sdp.type.toUpperCase();
	            message.sdp = _util.stringifyJSON(message.sdp);
	        }

	        return message;
	    },

	    postMessage: function postMessage(message, callback) {
	        var self = this;

	        if (!message.tsxId) {
	            message.setTsxId("MSG" + Date.now() + "-" + __session_globalCount++);
	        }

	        if (self._sessionId && self._sessionId != message.sessId) {
	            callback && callback({ op: 1001, tsxId: message.tsxId, result: -9527, msg: "sessionId not excepted." });
	            return;
	        }
	        if (self.closed) {
	            callback && callback({ op: 1001, tsxId: message.tsxId, result: -9527, msg: "session closed" });
	            return;
	        }

	        self.__modifyMessageForPost(message);

	        if (message.op === 200) {
	            // enter 放在首位
	            self._bufferedMessages.unshift(message);
	        } else {
	            self._bufferedMessages.push(message);
	        }
	        self._callbacks[message.tsxId] = _util.extend(message, {
	            __callback__: callback
	        });

	        self.notifyNewMessage && self.notifyNewMessage();
	    },

	    close: function close(reason) {
	        _logger.warn("sessiong closing, reason = ", reason);

	        var self = this;

	        self.notifyNewMessage && self.notifyNewMessage();

	        self.closed = true;

	        self.seqno = 0;

	        self._websocket && (reason == 0 || reason == 100 ? self._websocket.close(1000) : self._websocket.close());

	        self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
	        self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;

	        self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);
	        self.__checkConnectIntervalId && delete self.__checkConnectIntervalId;

	        self.owner = null;
	        //self._sessionId = null;

	        self._bufferedMessages = [];
	        self._callbacks = {};

	        _logger.warn("session closed");
	    }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _util = __webpack_require__(4);
	var _logger = _util.logger;

	/**
	 * Error({
	 *   hidden:
	 * })
	 *
	 *
	 *
	 *
	 */
	var Error = _util.prototypeExtend({
	    __init__: function __init__() {
	        this.day = new Date();
	    },

	    execTime: function execTime() {
	        var hour = this.day.getHours();
	        if (hour < 10) {
	            hour = "0" + hour;
	        }
	        var minute = this.day.getMinutes();
	        if (minute < 10) {
	            minute = "0" + minute;
	        }
	        var second = this.day.getSeconds();
	        if (second < 10) {
	            second = "0" + second;
	        }

	        return hour + ":" + minute + ":" + second;
	    }
	});

	var __ICEEvent = Error.extend({
	    _webrtcDesc: function _webrtcDesc() {
	        var webrtc = this.webrtc;

	        var message = this.webrtc.getRtcId();

	        return message;
	    }
	});

	module.exports = {
	    Exception: Error.extend(),

	    /**
	     * {retry: retry, online: self.online, event: evt, cause: e, session: self}
	     */
	    WSClose: Error.extend({ message: function message() {
	            var message = this.execTime() + " Websocket close (" + (this.retry || 0) + ").";

	            this.online || (message += " offline.");
	            this.event && (message += " wscode: " + this.event.code);
	            this.cause && (message += " cause: " + this.cause.message);

	            this.url && (message += " url: " + this.url);

	            message += " retry: " + (this.retry || 0);

	            this.session && this.session.getSessionId() && (message = message + ", sess = " + this.session.getSessionId());

	            return message;
	        } }),

	    /**
	     * {event: evt, online: self.online, session: self}
	     */
	    WSError: Error.extend({ message: function message() {
	            var message = this.execTime() + " Websocket error. ready state:" + this.event.srcElement.readyState + ". online = " + this.online;
	            this.session && this.session.getSessionId() && (message = message + ", sess = " + this.session.getSessionId());

	            this.url && (message += " url: " + this.url);

	            return message;
	        } }),

	    /**
	     * {event: evt, session: self}
	     */
	    WSConnected: Error.extend({ message: function message() {
	            var message = this.execTime() + " Websocket success. ready state:" + this.event.srcElement.readyState;
	            this.session && this.session.getSessionId() && (message = message + ", sess = " + this.session.getSessionId());

	            return message;
	        } }),

	    /**
	     * {webrtc: webrtc, event: webrtcEvent, state: webrtcEvent.target.iceConnectionState}
	     */
	    ICEChanage: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " state: " + this.state;
	        } }),

	    /**
	     * {webrtc: webrtc, event: err}
	     */
	    AddIceCandError: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + ", add cand error";
	        } }),

	    /**
	     * {webrtc: webrtc, event: event}
	     */
	    ICEConnectFail: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " failed";
	        } }),

	    /**
	     * {webrtc: webrtc, event: event}
	     */
	    ICEConnected: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " connected";
	        } }),

	    /**
	     * {webrtc: webrtc, event: event}
	     */
	    ICEDisconnected: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " disconnected";
	        } }),

	    /**
	     * {webrtc: webrtc}
	     */
	    ICEClosed: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " closed";
	        } }),

	    /**
	     * {webrtc: webrtc}
	     */
	    ICERemoteMediaStream: __ICEEvent.extend({ message: function message() {
	            return this.execTime() + " " + this._webrtcDesc() + " got remote stream";
	        } }),

	    /**
	     * {stream: stream, state:, msg: }
	     */
	    StreamState: Error.extend({ message: function message() {
	            return this.execTime() + " " + " stream " + this.stream.id + " state: " + this.state + " " + this.msg;
	        },
	        iceFail: function iceFail() {
	            this.state = 1;
	            this.msg = "network anomaly. media lost";
	        }
	    }),

	    /**
	     * {member: self.current, event: e}
	     */
	    OpenMediaError: Error.extend({ message: function message() {
	            return this.execTime() + " " + " open media error. caused by " + this.event.toString();
	        } }),

	    /**
	     * {reason: reason, parnter: {id: self._memberId}}
	     */
	    Hangup: Error.extend({ message: function message() {
	            if (this.self) {
	                return "hangup id = " + (this.self.id || "--") + " reason：" + (this.reason || 0);
	            } else {
	                return this.execTime() + " " + (this.parnter && (this.parnter.name || this.parnter.id || " ") || "") + " hangup, reason：" + (this.reason || 0);
	            }
	        } }),

	    /**
	     * {failed: rsp.result, msg: rsp.msg}
	     */
	    ServerRefuseEnter: Error.extend({ message: function message() {
	            return this.execTime() + " " + "server refuse, cause：" + this.failed + ", msg:" + (this.msg || "");
	        } }),

	    /**
	     * {request: req, response: rsp}
	     */
	    RspFail: Error.extend({
	        __init__: function __init__() {
	            this.day = new Date();
	            this.failed = this.response.result;
	            this.msg = this.response.msg;
	        },
	        message: function message() {
	            return this.execTime() + " " + this.request.tsxId + ", " + (this.response.sessId || "--") + " op: " + this.request.op + ", cause: " + this.failed + " " + this.msg;
	        }
	    }),

	    /**
	     * {me: me, cause: _event_}
	     */
	    EnterFail: Error.extend({ message: function message() {
	            return this.execTime() + " " + "enter fail：" + (this.cause ? this.cause.message() : "unkown");
	        } }),

	    EnterSuccess: Error.extend({ message: function message() {
	            return this.execTime() + " " + "enter success";
	        } }),

	    /**
	     * {streamId: rsp.streamId}
	     */
	    PushSuccess: Error.extend({ message: function message() {
	            return this.execTime() + " " + "push success, streamId = " + this.stream.id + " webrtc = " + this.stream.rtcId;
	        } }),

	    /**
	     * {webrtc: webrtc, pubS: pubS, me: me, cause: _event_}
	     */
	    PushFail: Error.extend({ message: function message() {
	            return this.execTime() + " " + "push fail, streamId = " + this.stream.id + " webrtc = " + this.stream.rtcId + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
	        } }),

	    /**
	     * {subMember: subMember, subStream: subStream, cause: ))
	     */
	    SubSuccess: Error.extend({ message: function message() {
	            return this.execTime() + " " + "sub success, streamId = " + this.stream.id + " webrtc = " + this.stream.rtcId;
	        } }),

	    /**
	     * {subMember: subMember, subStream: subStream, cause: ))
	     */
	    SubFail: Error.extend({ message: function message() {
	            return this.execTime() + " " + "sub fail, streamId = " + this.stream.id + " webrtc = " + this.stream.rtcId + " cause：" + (this.cause ? this.cause.message ? this.cause.message() : this.cause : "unkown");
	        } }),

	    CurrentCalling: Error.extend({ message: function message() {
	            return this.execTime() + " " + "warn! current calling...";
	        } }),

	    /**
	     * {desktopStreamId: m.streamId}
	     */
	    OpenDesktopMedia: Error.extend({ message: function message() {
	            return this.execTime() + " " + "shared desktop, desktopStreamId = " + desktopStreamId;
	        } }),

	    OpenDesktopMediaAccessDenied: Error.extend({ message: function message() {
	            return this.execTime() + " " + "shared desktop not allow";
	        } }),

	    ShareDesktopExtensionNotFound: Error.extend({ message: function message() {
	            return this.execTime() + " " + "shared desktop plugin required";
	        } })
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Me");

	var Member = __webpack_require__(9);

	var __event = __webpack_require__(7);

	var Stream = __webpack_require__(11);

	/**
	 * 未体现 member 使用了 session。
	 * 请 这样创建
	 * Member({_session: sess})
	 *
	 *
	 * close:
	 * 1.服务端 踢掉
	 * 2.手动点击 挂断
	 * 3.enter失败！
	 *
	 * websocket 断开连接后，并不会 去close。因为发送消息可以实现重连，重新enter
	 *
	 *
	 */
	var Attendee = Member.extend({
	    __init__: function __init__() {
	        var self = this;

	        self._session || self.sessionFactory && (self._session = self.sessionFactory());

	        if (!self._session) throw "Require session";

	        self._cver = 0;

	        self._cacheMembers = {};
	        self._cacheStreams = {};

	        self._linkedStreams = {};
	        self._maybeNotExistStreams = {}; //与self._streams结构相同，用 存储 断网时，ice fail的stream对象。这个对象可能不存在了

	        self._records = {};

	        self._ices = {};

	        self.closed = false;
	    },

	    newStream: function newStream(cfg) {
	        var attendee = this;

	        var _Stream = new Stream.extend({
	            __init__: function __init__() {
	                var self = this;

	                self.rtcId || self._webrtc && (self.rtcId = self._webrtc.getRtcId());
	                self._webrtc || self.rtcId && (self._webrtc = attendee._ices[self.rtcId]);

	                if (self.memId && !self.owner) {
	                    self.owner = _util.extend({}, attendee._cacheMembers[self.memId]);
	                    if (!self.owner && !self.located()) {
	                        throw "Remote stream, not owner. it = " + self.id;
	                    }
	                }
	            }
	        });

	        return new _Stream(cfg);
	    },

	    getConfrId: function getConfrId() {
	        return this.ticket.confrId;
	    },
	    isCaller: function isCaller() {
	        var self = this;
	        return self.isP2P() && self.ticket.caller == self.name;
	    },
	    isCallee: function isCallee() {
	        var self = this;
	        return self.isP2P() && self.ticket.callee == self.name;
	    },
	    isP2P: function isP2P() {
	        var self = this;
	        return self.ticket && (self.ticket.type == "P2P" || self.ticket.type == "p2p");
	    },
	    isConfr: function isConfr() {
	        var self = this;
	        return self.ticket && (self.ticket.type == "CONFR" || self.ticket.type == "confr");
	    },

	    onEvent: function onEvent(evt) {},

	    join: function join(joined, joinError) {
	        _logger.debug("begin join ...");

	        var self = this;

	        var enter;

	        function onJoinError(_event_) {
	            try {
	                if (_event_ instanceof __event.WSClose && _event_.retry) {
	                    return;
	                }

	                if (!(_event_ instanceof __event.EnterFail)) {
	                    _event_ = new __event.EnterFail({ //可能是 websocket 链接未成功
	                        attendee: self,
	                        cause: _event_
	                    });
	                }

	                self.onEvent(_event_);
	                joinError && joinError(_event_);
	            } finally {}
	        }

	        function enterRsp(rsp) {
	            if (rsp.result != 0) {
	                try {
	                    onJoinError(new __event.RspFail({ request: enter, response: rsp }));
	                } finally {
	                    if (rsp.result !== -9527) {
	                        //-9527 客户端 自己返回，网络未通， 其他值服务端返回
	                        self.onEvent(new __event.ServerRefuseEnter({ failed: rsp.result, msg: rsp.msg }));
	                    }
	                }

	                return;
	            }

	            self.setMemberId(rsp.memId);

	            self.onEvent(new __event.EnterSuccess());

	            joined && joined(rsp.memId);

	            self.onMembers(rsp.cver, rsp.mems);
	            self.onStreams(rsp.cver, rsp.streams);
	        }

	        function onConnected() {
	            enter = self.newMessage().setOp(200).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource);
	            self.postMessage(enter, enterRsp);
	        }

	        self.connect(onConnected, onJoinError);
	        _logger.debug("join", self.ticket.url);
	    },

	    withpublish: function withpublish(pubS) {
	        var self = this;

	        if (!pubS || !pubS.localStream) {
	            throw "pubS null or stream not open";
	        }

	        var enter;

	        var openedStream = pubS && pubS.localStream;

	        var webrtc;

	        function then(joined, joinError) {
	            if (arguments.length === 1) {
	                joinError = joined;
	                joined = undefined;
	            }

	            function onJoinError(_event_) {
	                try {
	                    if (_event_ instanceof __event.WSClose && _event_.retry) {
	                        return;
	                    }

	                    if (!(_event_ instanceof __event.EnterFail)) {
	                        _event_ = new __event.EnterFail({ //可能是 websocket 链接未成功
	                            attendee: self,
	                            cause: _event_
	                        });
	                    }

	                    self.onEvent(_event_);
	                    joinError && joinError(_event_);
	                } finally {
	                    if (openedStream) {
	                        openedStream.getTracks().forEach(function (track) {
	                            track.stop();
	                        });
	                    }

	                    webrtc && self.closeWebrtc(webrtc.getRtcId());
	                }
	            }

	            function enterRsp(rsp) {
	                if (rsp.result != 0) {
	                    try {
	                        onJoinError(new __event.RspFail({ request: enter, response: rsp }));
	                    } finally {
	                        if (rsp.result !== -9527) {
	                            //-9527 客户端 自己返回，网络未通， 其他值服务端返回
	                            self.onEvent(new __event.ServerRefuseEnter({ failed: rsp.result, msg: rsp.msg }));
	                        }
	                    }

	                    return;
	                }

	                self.setMemberId(rsp.memId);

	                self.onEvent(new __event.EnterSuccess());

	                var stream = self.newStream(pubS);
	                stream._localMediaStream = pubS.localStream;
	                stream.rtcId = webrtc.getRtcId();
	                stream._webrtc = webrtc;
	                stream.id = rsp.streamId;
	                stream.owner = { id: rsp.memId, nickName: self.nickName, name: self.sysUserId };

	                joined && joined(rsp.memId, stream);
	                self.onEvent(new __event.PushSuccess({ stream: stream, hidden: true }));

	                rsp.sdp && self.ansC(webrtc.getRtcId(), rsp.sdp);
	                rsp.cands && self.tcklC(webrtc.getRtcId(), rsp.cands);

	                self.onMembers(rsp.cver, rsp.mems);
	                self.onStreams(rsp.cver, rsp.streams);
	            }

	            function onConnected() {
	                _logger.debug("enter and pubs");

	                var stream = pubS.localStream;

	                webrtc = self.createWebrtc({ _rtcId: pubS.rtcId });
	                self.setLocalStream(stream, webrtc.getRtcId());

	                self.doOffer(webrtc.getRtcId(), function (sdp) {
	                    enter = self.newMessage().setOp(200).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource).setSdp(sdp).setRtcId(webrtc.getRtcId()).setPubS(pubS);
	                    self.postMessage(enter, enterRsp);
	                });
	            }

	            self.connect(onConnected, onJoinError);
	            _logger.debug("join", self.ticket.url);
	        }

	        return {
	            join: then
	        };
	    },

	    push: function push(pubS, pushed, onPushError) {
	        _logger.debug("begin push ...");

	        var self = this;

	        if (arguments.length === 2) {
	            onPushError = pushed;
	            pushed = undefined;
	        }

	        if (!pubS || !pubS.localStream) {
	            throw "pubS or stream open";
	        }

	        var initC;

	        var openedStream = pubS.localStream;

	        var webrtc;

	        function _onPushError(_event_) {
	            try {
	                var stream = self.newStream(pubS);
	                stream._localMediaStream = pubS.localStream;
	                stream._webrtc = webrtc;
	                stream.rtcId = webrtc && webrtc.getRtcId();
	                stream.owner = { id: self.getMemberId(), nickName: self.nickName, name: self.sysUserId };

	                var _event_ = new __event.PushFail({
	                    stream: stream,
	                    cause: _event_
	                });

	                self.onEvent(_event_);
	                onPushError && onPushError(_event_);
	            } finally {
	                if (openedStream) {
	                    openedStream.getTracks().forEach(function (track) {
	                        track.stop();
	                    });
	                }

	                webrtc && self.closeWebrtc(webrtc.getRtcId());
	            }
	        }

	        function pushRsp(webrtc, rsp) {
	            if (rsp.result != 0) {
	                _onPushError(new __event.RspFail({ request: initC, response: rsp }));

	                return;
	            }

	            var stream = self.newStream(pubS);
	            stream._localMediaStream = pubS.localStream;
	            stream._webrtc = webrtc;
	            stream.rtcId = webrtc.getRtcId();
	            stream.id = rsp.streamId;
	            stream.owner = { id: self.getMemberId(), nickName: self.nickName, name: self.sysUserId };

	            self.onEvent(new __event.PushSuccess({ stream: stream, hidden: true }));
	            pushed && pushed(stream);

	            rsp.sdp && self.ansC(webrtc.getRtcId(), rsp.sdp);
	            rsp.cands && self.tcklC(webrtc.getRtcId(), rsp.cands);
	        }

	        function pub(pubS) {
	            _logger.debug("pubs");

	            var stream = pubS.localStream;

	            webrtc = self.createWebrtc({ _rtcId: pubS.rtcId });
	            self.setLocalStream(stream, webrtc.getRtcId());

	            self.doOffer(webrtc.getRtcId(), function (sdp) {
	                initC = self.newMessage().setOp(102).setRtcId(webrtc.getRtcId()).setSdp(sdp).setPubS(pubS);

	                self.postMessage(initC, function (rsp) {
	                    pushRsp(webrtc, rsp);
	                });
	            });
	        }

	        pub(pubS);
	        _logger.debug("push", self.ticket.url);
	    },

	    createWebrtcAndSubscribeStream: function createWebrtcAndSubscribeStream(streamId, callbacks, iceServerConfig) {
	        var self = this;

	        callbacks || (callbacks = {});

	        var subStream = self._cacheStreams[streamId];
	        var subMember = self._cacheMembers[subStream.memId];

	        var webrtc = self.createWebrtc({ iceServerConfig: iceServerConfig,
	            onGotMediaStream: function onGotMediaStream(remoteMediaStream) {
	                var evt = new __event.SubSuccess({
	                    stream: stream,
	                    hidden: true
	                });

	                callbacks.onGotRemote && callbacks.onGotRemote(stream);
	                self.onEvent && self.onEvent(evt);
	            }
	        });
	        var rtcId = webrtc.getRtcId();

	        //var stream = self.newStream(subStream);
	        var stream = subStream;
	        stream._webrtc = webrtc;
	        stream.rtcId = rtcId;
	        stream.owner = _util.extend({}, subMember);

	        function _onSubFail(evt) {
	            _logger.error("sub stream error", streamId, evt);

	            evt = new __event.SubFail({
	                stream: stream,
	                cause: evt
	            });

	            callbacks && callbacks.onEvent && callbacks.onEvent(evt);
	            self.onEvent && self.onEvent(evt);
	        }

	        self.offerCall(rtcId, null, streamId, _onSubFail);
	    },

	    subscribeStream: function subscribeStream(rtcId, streamId, rspFail) {
	        var self = this;

	        var webrtc = self._ices[rtcId];

	        var subStream = self._cacheStreams[streamId];
	        var subMember = self._cacheMembers[subStream.memId];

	        //var stream = self.newStream(subStream);
	        var stream = subStream;
	        stream._webrtc = webrtc;
	        stream.rtcId = rtcId;
	        stream.owner = _util.extend({}, subMember);

	        var unsubMessage = self.newMessage().setOp(205).setRtcId(rtcId).setSubSId(streamId);

	        self.postMessage(unsubMessage, function (rsp) {
	            if (rsp.result != 0) {
	                var evt = new __event.SubFail({
	                    stream: stream,
	                    cause: new __event.RspFail({ request: unsubMessage, response: rsp })
	                });

	                rspFail && rspFail(evt);
	                self.onEvent(evt);

	                return;
	            }

	            var evt = new __event.SubSuccess({
	                stream: stream,
	                hidden: true
	            });
	            self.onEvent(evt);
	        });
	    },

	    unsubscribeStream: function unsubscribeStream(streamId) {
	        var self = this;

	        var stream = self._cacheStreams[streamId];
	        var rtcId = stream._webrtc && stream._webrtc.getRtcId();
	        if (!rtcId) {
	            return;
	        }

	        try {
	            var unsubMessage = self.newMessage().setOp(206).setRtcId(rtcId).setSubSId(streamId);

	            self.postMessage(unsubMessage);
	        } finally {
	            self.closeWebrtc(rtcId);
	        }

	        return rtcId;
	    },

	    onEnter: function onEnter(cver, mem) {
	        var self = this;

	        if (!mem) return;
	        if (self._cacheMembers[mem.id]) {
	            return;
	        }

	        self._cacheMembers[mem.id] = mem;
	        self.onAddMember(mem);
	    },

	    _onFinally: function _onFinally() {
	        var self = this;

	        self._cacheMembers = {}; // id, name, nickName, resource
	        self._cacheStreams = {}; // id, memId, name, voff, aoff, type
	        self._linkedStreams = {};
	        self._ices = {};
	        self._maybeNotExistStreams = {};

	        _logger.warn("finally. all clean.");
	    },

	    onExit: function onExit(cver, memId, reason) {
	        var self = this;

	        if (memId == self.getMemberId()) {
	            //被服务器 强制 exit
	            _logger.warn("Me exit. ", reason, memId);

	            try {
	                self.closed || self.close(reason);
	            } catch (e) {
	                self.onEvent(new __event.Hangup({ reason: reason, self: { id: self._memberId } }));
	                self.onMeExit && self.onMeExit(reason);

	                _logger.error(e);
	            }

	            return;
	        }

	        var rmMember = self._cacheMembers[memId];
	        if (rmMember) {
	            self._onRemoveMember(rmMember, reason);
	            self.onEvent(new __event.Hangup({ reason: reason, parnter: rmMember }));
	        }
	    },

	    onPub: function onPub(cver, memId, pubS) {
	        var self = this;

	        if (!self._cacheMembers[memId]) throw "No found member. when pub";

	        var newStream = self.newStream(pubS);
	        var _stream = self._cacheStreams[pubS.id];

	        if (_stream && newStream.sver !== _stream.sver) {
	            _logger.info("Onpub. the steam ", _stream.id, " republish. sver ", _stream.sver, newStream.sver);

	            self._onRepublishStream(_stream);
	            _stream.sver = newStream.sver;

	            return;
	        }

	        var stream = newStream;
	        stream.owner = self._cacheMembers[memId];
	        self._cacheStreams[pubS.id] = stream;
	        self.onAddStream(stream);

	        if (self.autoSub) {
	            self.createWebrtcAndSubscribeStream(pubS.id, {
	                onGotRemote: function onGotRemote(stream) {
	                    //self.onAddStream(stream);
	                }
	            });
	        }
	    },

	    onUnpub: function onUnpub(cver, memId, sId) {
	        var self = this;

	        var rmStream = self._cacheStreams[sId];
	        self._onRemovePubstream(self._cacheMembers[memId], rmStream);
	    },

	    onClose: function onClose(cver, confrId, reason) {
	        var self = this;

	        try {
	            self.close(reason || 0);
	        } finally {
	            self.onConfrClose && self.onConfrClose(confrId, reason);
	        }
	    },

	    __getWebrtcFor: function __getWebrtcFor(pubStreamId) {
	        var self = this;

	        var webrtc = self._cacheStreams[pubStreamId]._webrtc;
	        return webrtc && webrtc.getRtcId();
	    },

	    _updateRemoteStream: function _updateRemoteStream(stream, remoteMediaStream) {
	        remoteMediaStream && remoteMediaStream.getAudioTracks().forEach(function (track) {
	            track.enabled = !stream.aoff;
	        });

	        remoteMediaStream && remoteMediaStream.getVideoTracks().forEach(function (track) {
	            track.enabled = !stream.voff;
	        });
	    },

	    onStreamControl: function onStreamControl(streamId, voff, aoff) {
	        var self = this;

	        var stream = self._cacheStreams[streamId];

	        stream.voff = voff;
	        stream.aoff = aoff;

	        var webrtc = stream._webrtc;
	        webrtc && webrtc._remoteStream && self._updateRemoteStream(stream, webrtc._remoteStream);

	        var stream = self.newStream(stream);
	        self.onUpdateStream && self.onUpdateStream(stream, { voff: voff, aoff: aoff });
	    },

	    aoff: function aoff(pubS, _aoff, callback) {
	        var self = this;

	        var rtcId = self.__getWebrtcFor(pubS.id);
	        if (!rtcId) {
	            throw "pubS not publish" + pubS.id;
	        }

	        self._linkedStreams[pubS.id].aoff = _aoff;

	        var streamControl = self.newMessage().setOp(400).setRtcId(rtcId).setVoff(pubS.voff).setAoff(_aoff);
	        self.postMessage(streamControl, callback);
	    },

	    voff: function voff(pubS, _voff, callback) {
	        var self = this;

	        var rtcId = self.__getWebrtcFor(pubS.id);
	        if (!rtcId) {
	            throw "pubS not publish" + pubS.id;
	        }

	        self._linkedStreams[pubS.id].voff = _voff;

	        var streamControl = self.newMessage().setOp(400).setRtcId(rtcId).setVoff(_voff).setAoff(pubS.aoff);
	        self.postMessage(streamControl, callback);
	    },

	    startRecord: function startRecord(rtcId, success) {
	        var self = this;

	        var startRecord = self.newMessage().setOp(500).setRtcId(rtcId).setFlag(1);
	        self.postMessage(startRecord, function (rsp) {
	            _logger.warn("record ", rtcId, rsp.result, rsp.msg);
	            success && success(rsp.result === 0);
	            if (rsp.result === 0) {
	                self._records[rtcId] = true;
	            }
	        });
	    },

	    stopRecord: function stopRecord(rtcId, success) {
	        var self = this;

	        var stopRecord = self.newMessage().setOp(500).setRtcId(rtcId).setFlag(0);
	        self.postMessage(stopRecord, function (rsp) {
	            _logger.warn("stop record ", rtcId, rsp.result, rsp.msg);
	            success && success(rsp.result === 0);
	            if (self._records[rtcId]) {
	                _util.removeAttribute(self._records, rtcId);
	            }
	        });
	    },

	    onMembers: function onMembers(cver, members) {
	        var self = this;

	        var removedMembers = [];
	        _util.forEach(self._cacheStreams, function (_memberId, _member) {
	            members[_memberId] || removedMembers.push(_member);
	        });
	        _util.forEach(removedMembers, function (_index, _member) {
	            self.onExit(cver, _member.id);
	        });

	        var addMembers = [];
	        _util.forEach(members, function (_memberId, _member) {
	            if (_memberId != self.getMemberId()) {
	                self._cacheStreams[_memberId] || addMembers.push(_member);
	            }
	        });
	        _util.forEach(addMembers, function (_index, _member) {
	            self.onEnter(cver, _member);
	        });

	        cver && (self._cver = cver);
	    },

	    onStreams: function onStreams(cver, streams) {
	        var self = this;

	        var removedStreams = [];
	        _util.forEach(self._cacheStreams, function (_pubSId, _stream) {
	            _stream.located() || streams[_pubSId] || removedStreams.push(_stream);
	        });
	        _util.forEach(removedStreams, function (_index, _stream) {
	            self.onUnpub(cver, _stream.memId, _stream.id);
	        });

	        var addStreams = [];
	        _util.forEach(streams, function (_pubSId, stream) {
	            if (stream.memId != self.getMemberId()) {
	                self._cacheStreams[_pubSId] || addStreams.push(stream);
	            }
	        });
	        _util.forEach(addStreams, function (_index, _stream) {
	            self.onPub(cver, _stream.memId, _stream);
	        });

	        _util.forEach(self._cacheStreams, function (_pubSId, _stream) {
	            var newStream = streams[_pubSId];
	            if (newStream && (newStream.aoff !== _stream.aoff || newStream.voff != _stream.voff)) {
	                self.onStreamControl(_pubSId, newStream.voff, newStream.aoff);
	            }

	            if (newStream && newStream.sver !== _stream.sver) {
	                self._onRepublishStream(newStream);
	                _stream.sver = newStream.sver;
	            }
	        });

	        cver && (self._cver = cver);
	    },

	    _onRemoveMember: function _onRemoveMember(member, reason) {
	        var self = this;

	        _logger.info("remove", member, reason);

	        var unpubStreams = [];
	        _util.forEach(self._cacheStreams, function (_pubSId, _stream) {
	            if (_stream.memId === member.id) {
	                unpubStreams.push(_stream);
	            }
	        });

	        _util.forEach(unpubStreams, function (index, stream) {
	            self._onRemovePubstream(stream.owner, stream, reason);
	        });

	        _util.removeAttribute(self._cacheMembers, member.id);

	        self.onRemoveMember && self.onRemoveMember(member, reason);
	    },

	    _onRemovePubstream: function _onRemovePubstream(member, stream) {
	        var self = this;

	        if (!stream) {
	            return;
	        }

	        var _rtcId = self.unsubscribeStream(stream.id);
	        var rmStream = _util.removeAttribute(self._cacheStreams, stream.id);

	        if (self.onRemoveStream) {
	            var stream = self.newStream(stream);

	            self.onRemoveStream(stream);
	        }
	    },

	    _onRepublishStream: function _onRepublishStream(_stream) {
	        var self = this;

	        if (self._ices[_stream.rtcId] && !self._maybeNotExistStreams[_stream.id]) {
	            var _rtcId = self.unsubscribeStream(_stream.id);

	            self.createWebrtcAndSubscribeStream(_stream.id, {
	                onGotRemote: function onGotRemote(stream) {
	                    //self.onUpdateStream(_stream);
	                }
	            });
	        }
	    },

	    onAddMember: function onAddMember(member) {},
	    onRemoveMember: function onRemoveMember(member, reason) {},

	    onAddStream: function onAddStream(stream) {//stream undefined 表明 autoSub属性 空或false. autoSub = true时，自动订阅

	    },
	    onRemoveStream: function onRemoveStream(stream) {},
	    onUpdateStream: function onUpdateStream(stream) {}
	});

	module.exports = Attendee;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Member");

	var __event = __webpack_require__(7);

	var WebRTC = __webpack_require__(10);

	/**
	 * 未体现 Member 使用了 session。
	 * 请 这样创建
	 * Member({_session: sess, _memberId: memberId})
	 * this._session
	 *
	 * {
	 *  _memberId:
	 *  _ices[Map]:
	 * }
	 *
	 *
	 *
	 */
	module.exports = _util.prototypeExtend({
	    __init__: function __init__() {
	        var self = this;

	        if (!self._session) throw "Require session";

	        self.closed = false;
	        self._ices = {};
	    },

	    setMemberId: function setMemberId(memberId) {
	        this._memberId = memberId;
	    },

	    getMemberId: function getMemberId() {
	        return this._memberId;
	    },

	    /**
	     * createWebrtc({
	     *  _rtcId:
	     *  iceServerConfig:
	     *  onGotMediaStream:
	      * onEvent:
	     * })
	     *
	     * @param iceServerConfig
	     */
	    createWebrtc: function createWebrtc(webrtcCfg) {
	        var self = this;

	        var webrtc = new WebRTC({
	            //iceServerConfig: iceServerConfig,

	            onIceStateChange: function onIceStateChange(event) {
	                var state = event.target.iceConnectionState;

	                _logger.debug("evt.target ice state", state);

	                if (state == 'failed') {
	                    self.onEvent(new __event.ICEConnectFail({ webrtc: webrtc, event: event }));
	                    webrtc.onEvent && webrtc.onEvent(new __event.ICEConnectFail({ webrtc: webrtc, event: event }));

	                    return;
	                }
	                if (state == 'connected') {
	                    self.onEvent(new __event.ICEConnected({ webrtc: webrtc, event: event }));
	                    webrtc.onEvent = null;

	                    return;
	                }
	                if (state == 'closed') {
	                    self.onEvent(new __event.ICEClosed({ webrtc: webrtc }));
	                    webrtc.onEvent && webrtc.onEvent(new __event.ICEClosed({ webrtc: webrtc }));

	                    return;
	                }
	                if (state == 'disconnected') {
	                    self.onEvent(new __event.ICEDisconnected({ webrtc: webrtc }));
	                    webrtc.onEvent && webrtc.onEvent(new __event.ICEDisconnected({ webrtc: webrtc }));

	                    return;
	                }

	                self._onIceStateChange && self._onIceStateChange(webrtc, event);
	            },

	            onIceCandidate: function onIceCandidate(event) {
	                //event.candidate
	                self._onIceCandidate && self._onIceCandidate(webrtc, event);
	            },

	            onGotRemoteStream: function onGotRemoteStream(remoteStream) {
	                _logger.info("got stream.", webrtc, remoteStream);

	                webrtc.onGotMediaStream && webrtc.onGotMediaStream(remoteStream);

	                self.onEvent(new __event.ICERemoteMediaStream({ webrtc: webrtc }));
	            },
	            onAddIceCandidateError: function onAddIceCandidateError(err) {
	                self.onEvent(new __event.AddIceCandError({ webrtc: webrtc, event: err }));
	            },

	            onSetSessionDescriptionError: function onSetSessionDescriptionError(error) {
	                _logger.error('onSetSessionDescriptionError : Failed to set session description: ' + error.toString());
	                webrtc.onEvent && webrtc.onEvent(new __event.ICEConnectFail({ webrtc: webrtc, event: error }));
	            },
	            onCreateSessionDescriptionError: function onCreateSessionDescriptionError(error) {
	                _logger.error('Failed to create session description: ' + error.toString());
	                webrtc.onEvent && webrtc.onEvent(new __event.ICEConnectFail({ webrtc: webrtc, event: error }));
	            }
	        }, webrtcCfg || {});

	        self._ices || (self._ices = {});
	        if (self._ices[webrtc.getRtcId()]) {
	            throw "Webrtc id exsits at ices. it is " + webrtc.getRtcId();
	        }
	        self._ices[webrtc.getRtcId()] = webrtc;

	        self._iceCreateRtcPeerConnection(webrtc.getRtcId());
	        _logger.debug("create rtc ", webrtc);

	        return webrtc;
	    },

	    connect: function connect(suceess, fail) {
	        var self = this;

	        self._session.connect(suceess, fail);
	    },

	    connected: function connected() {
	        var self = this;

	        return self._session.connected();
	    },

	    newMessage: function newMessage(cfg) {
	        var self = this;
	        return self._session.newMessage(cfg || {});
	    },

	    postMessage: function postMessage(message, callback) {
	        var self = this;

	        try {
	            message.sessId || message.setSessId(self._session._sessionId);
	            self._session.postMessage(message, callback);
	        } catch (e) {
	            callback && callback({ op: 1001, tsxId: message.tsxId, result: -9527, msg: "post message. exception" });
	            _logger.error(e);
	        }
	    },

	    onEvent: function onEvent(error) {},

	    _onIceStateChange: function _onIceStateChange(webrtc, webrtcEvent) {
	        var self = this;

	        _logger.info(webrtc.getRtcId(), webrtcEvent);
	        self.onEvent(new __event.ICEChanage({ webrtc: webrtc, event: webrtcEvent, state: webrtcEvent.target.iceConnectionState }));
	    },

	    _onIceCandidate: function _onIceCandidate(webrtc, webrtcEvent) {
	        //event.candidate
	        var self = this;

	        var cands = [];
	        cands.push(webrtcEvent.candidate);

	        var tcklC = self.newMessage().setOp(105).setRtcId(webrtc.getRtcId()).setCands(cands);

	        self.postMessage(tcklC, function (rsp) {
	            if (rsp.result != 0) {
	                self.onEvent(new __event.RspFail({ request: tcklC, response: rsp }));

	                return;
	            }
	        });
	    },

	    _initC: function _initC(webrtc, stream, sdp, subSId, rspFail) {
	        var self = this;

	        if (stream && stream.rtcId !== webrtc.getRtcId()) {
	            throw "stream and webrtc rtcId not equal.";
	        }

	        var initC = self.newMessage().setOp(102).setRtcId(webrtc.getRtcId()).setSdp(sdp).setSubSId(subSId);
	        if (stream && stream.located()) {
	            initC.setPubS(stream);
	        }

	        self.postMessage(initC, function (rsp) {
	            if (rsp.result != 0) {
	                self.onEvent(new __event.RspFail({ request: initC, response: rsp }));
	                rspFail && rspFail(new __event.RspFail({ request: initC, response: rsp }));

	                return;
	            }

	            if (stream && !stream.id && rsp.streamId) {
	                stream.id = rsp.streamId;
	            }

	            rsp.sdp && self.ansC(webrtc.getRtcId(), rsp.sdp, rsp.cands);

	            rsp.mems && self.onMembers && self.onMembers(rsp.cver, rsp.mems);
	            rsp.streams && self.onStreams && self.onStreams(rsp.cver, rsp.streams);
	        });
	    },

	    _acptC: function _acptC(webrtc, sdp, rspFail) {
	        var self = this;

	        var acptC = self.newMessage().setOp(104).setRtcId(webrtc.getRtcId()).setSdp(sdp);

	        self.postMessage(acptC, function (rsp) {
	            if (rsp.result != 0) {
	                self.onEvent(new __event.RspFail({ request: acptC, response: rsp }));
	                rspFail && rspFail(new __event.RspFail({ request: acptC, response: rsp }));

	                return;
	            }
	        });
	    },

	    _ansC: function _ansC(webrtc, sdp, rspFail) {
	        var self = this;

	        var ansC = self.newMessage().setOp(106).setRtcId(webrtc.getRtcId()).setSdp(sdp);

	        self.postMessage(ansC, function (rsp) {
	            if (rsp.result != 0) {
	                self.onEvent(new __event.RspFail({ request: ansC, response: rsp }));
	                rspFail && rspFail(new __event.RspFail({ request: ansC, response: rsp }));

	                return;
	            }
	        });
	    },

	    _termC: function _termC(webrtc, endReason, rspFail) {
	        var self = this;

	        var termC = self.newMessage().setOp(107).setRtcId(webrtc.getRtcId()).setEndReason(endReason);

	        self.postMessage(termC, function (rsp) {
	            if (rsp.result != 0) {
	                self.onEvent(new __event.RspFail({ request: termC, response: rsp }));
	                rspFail && rspFail(new __event.RspFail({ request: termC, response: rsp }));

	                return;
	            }
	        });
	    },

	    _iceCreateRtcPeerConnection: function _iceCreateRtcPeerConnection(rtcId) {
	        var self = this;

	        self._ices[rtcId].createRtcPeerConnection();

	        _logger.debug("create rtc peer connection", rtcId);
	    },

	    doOffer: function doOffer(rtcId, onGotOffer, onCreateOfferError) {
	        var self = this;

	        var webrtc = self._ices[rtcId];

	        webrtc.createOffer(function (sdp) {
	            onGotOffer(sdp);
	        });
	    },

	    offerCall: function offerCall(rtcId, stream, subSId, rspFail) {
	        var self = this;

	        var webrtc = self._ices[rtcId];

	        webrtc.createOffer(function (sdp) {
	            self._initC && self._initC(webrtc, stream, sdp, subSId, rspFail);
	        });
	    },

	    accept: function accept(rtcId, rspFail) {
	        var self = this;

	        var webrtc = self._ices[rtcId];
	        webrtc.createPRAnswer(function (sdp) {
	            self._acptC && self._acptC(webrtc, sdp, rspFail);
	        });
	    },

	    answer: function answer(rtcId, rspFail) {
	        var self = this;

	        var webrtc = self._ices[rtcId];
	        webrtc.createAnswer(function (sdp) {
	            self._ansC && self._ansC(webrtc, sdp, rspFail);
	        });
	    },

	    onTcklC: function onTcklC(rtcId, cands) {
	        var self = this;
	        self._addIceCandidate(cands, rtcId);
	    },

	    onAcptC: function onAcptC(rtcId, sdp, cands) {
	        var self = this;
	        self._iceSetRemoteSDP(sdp, rtcId);
	        cands && self._addIceCandidate(cands, rtcId);
	    },

	    onAnsC: function onAnsC(rtcId, sdp, cands) {
	        var self = this;
	        self._iceSetRemoteSDP(sdp, rtcId);
	        cands && self._addIceCandidate(cands, rtcId);
	    },

	    _addIceCandidate: function _addIceCandidate(cands, rtcId) {
	        var self = this;

	        if (!cands || cands.length == 0) {
	            _logger.warn("drop cands", cands);
	            return;
	        }

	        var webrtc = self._ices[rtcId];
	        webrtc.addIceCandidate(cands);
	    },

	    closeWebrtc: function closeWebrtc(rtcId, remainLocalStream) {
	        var self = this;

	        if (self._records && self._records[rtcId]) {
	            try {
	                self.stopRecord(rtcId);
	            } catch (e) {
	                _logger.error(e);
	            } finally {
	                _util.removeAttribute(self._records, rtcId);
	            }
	        }

	        var webrtc = self._ices[rtcId];
	        try {
	            webrtc && self._termC(webrtc, remainLocalStream && webrtc._localStream ? -10 : 0);
	        } finally {
	            //webrtc && _util.removeAttribute(self._ices, rtcId);

	            webrtc && webrtc.close(remainLocalStream);
	            webrtc && self.onWebrtcTermC && self.onWebrtcTermC(webrtc);

	            if (remainLocalStream) {} else {
	                webrtc && _util.forEach(self._cacheStreams, function (sid, _stream) {
	                    if (_stream.located() && _stream.rtcId === rtcId) {
	                        _stream.type !== 1 && _stream._localMediaStream && _stream._localMediaStream.getTracks().forEach(function (track) {
	                            track.stop();
	                        });

	                        self._cacheStreams[sid] && self._linkedStreams[sid] && self.onRemoveStream(_stream);

	                        delete self._cacheStreams[sid];
	                        _logger.info("Remove stream", sid, ". from cache");
	                    }
	                });
	            }
	        }

	        return webrtc;
	    },

	    __close: function __close(reason) {
	        _logger.warn("closing, reason = ", reason);

	        var self = this;
	        if (self.closed) {
	            return;
	        }

	        self.closed = true;

	        if (self.__getCopyInterval) {
	            clearInterval(self.__getCopyInterval);
	            _logger.warn("Stop interval get copy");
	        }

	        if (self._ices) {
	            for (var _rtcId in self._ices) {
	                self.closeWebrtc(_rtcId);
	            }
	        }

	        var exit = self.newMessage().setOp(201).setReason(reason || 0);
	        self.postMessage(exit);
	    },

	    exit: function exit(reason) {
	        var self = this;
	        self.close(reason);
	    },

	    /**
	     * 1.服务端 踢掉
	     * 2.手动点击 挂断
	     * 3.enter失败！
	     *
	     * @param reason
	     */
	    close: function close(reason) {
	        var self = this;
	        if (self.closed) {
	            return;
	        }

	        try {
	            _util.forEach(self._cacheStreams || {}, function (sid, _stream) {
	                if (_stream.located() && _stream._localMediaStream) {
	                    _stream._localMediaStream.getTracks().forEach(function (track) {
	                        track.stop();
	                    });
	                }
	            });

	            self.__close(reason);
	        } finally {
	            setTimeout(function () {
	                self._session && self._session.close(reason);
	            }, 500);

	            self.onEvent(new __event.Hangup({ reason: reason, self: { id: self._memberId } }));
	            self.onMeExit && self.onMeExit(reason);

	            self._onFinally && self._onFinally();
	        }
	    },

	    webrtcState: function webrtcState(rtcId) {
	        var self = this;

	        var webrtc = self._ices[rtcId];
	        webrtc.iceConnectionState();
	    },

	    _iceSetRemoteSDP: function _iceSetRemoteSDP(sdp, rtcId) {
	        var self = this;

	        var webrtc = self._ices[rtcId];
	        webrtc.setRemoteDescription(sdp);
	    },

	    setLocalStream: function setLocalStream(stream, rtcId) {
	        var self = this;

	        var webrtc = self._ices[rtcId];
	        webrtc.setLocalStream(stream);
	    },

	    onWebrtcTermC: function onWebrtcTermC(_webrtc) {}
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * WebRTC
	 *
	 *                              A                   |                                       B
	 *                                                  |
	 *   1.createMedia:got streamA                      | 1.createMedia:got streamB
	 *   2.new RTCPeerConnection: APeerConnection       | 2.new RTCPeerConnection: BPeerConnection
	 *   3.APeerConnection.createOffer:got offerA       |
	 *      APeerConnection.setLocalDescription(offerA) |
	 *      send offerA ---> ---> ---> --->        ---> |
	 *                                                  | ---> 3.got offerA | offerA = new RTCSessionDescription(offerA);
	 *                                                  | BPeerConnection.setRemoteDescription(offerA)
	 *                                                  |
	 *                                                  |
	 *                                                  | 4.BPeerConnection.createAnswer: got answerB
	 *                                                  | BPeerConnection.setLocalDescription(answerB)
	 *                                                  | <---- send answerB
	 *                                                  | 5.got answerB <--- <--- <--- <---
	 *                                                  | answerB = new RTCSessionDescription(answerB)
	 *                                                  |
	 * APeerConnection.setRemoteDescription(answerB)    |
	 *                                                  |
	 * 6.got candidateA ---> --->  ---> --->            | ---> got candidateA
	 *                                                  | BPeerConnection.addIceCandidate(new RTCIceCandidate(candidateA))
	 *                                                  |
	 *                                                  |
	 *                                                  | got candidateB <--- <--- <--- <---
	 *                                                  | <--- 6.got candidateB APeerConnection.addIceCandidate(candidateB)
	 *                                                  |
	 *                                                  |
	 *                                                  | 7. APeerConnection.addStream(streamA)
	 *                                                  | 7. BPeerConnection.addStream(streamB)
	 *                                                  |
	 *                              streamA >>>>>>>>>>> |  <<<<< see A
	 *                              seeB <<<<<<<<<<<    | <<<<< streamB
	 *                                                  |
	 *
	 */

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Webrtc");

	var __event = __webpack_require__(7);

	var _SDPSection = {
	    headerSection: null,

	    audioSection: null,
	    videoSection: null,

	    _parseHeaderSection: function _parseHeaderSection(sdp) {
	        var index = sdp.indexOf('m=audio');
	        if (index >= 0) {
	            return sdp.slice(0, index);
	        }

	        index = sdp.indexOf('m=video');
	        if (index >= 0) {
	            return sdp.slice(0, index);
	        }

	        return sdp;
	    },

	    _parseAudioSection: function _parseAudioSection(sdp) {
	        var index = sdp.indexOf('m=audio');
	        if (index >= 0) {
	            var endIndex = sdp.indexOf('m=video');
	            return sdp.slice(index, endIndex < 0 ? sdp.length : endIndex);
	        }
	    },

	    _parseVideoSection: function _parseVideoSection(sdp) {
	        var index = sdp.indexOf('m=video');
	        if (index >= 0) {
	            return sdp.slice(index);
	        }
	    },

	    spiltSection: function spiltSection(sdp) {
	        var self = this;

	        self.headerSection = self._parseHeaderSection(sdp);
	        self.audioSection = self._parseAudioSection(sdp);
	        self.videoSection = self._parseVideoSection(sdp);
	    },

	    removeSSRC: function removeSSRC(section) {
	        var arr = [];

	        var _arr = section.split(/a=ssrc:[^\n]+/g);
	        for (var i = 0; i < _arr.length; i++) {
	            _arr[i] != '\n' && arr.push(_arr[i]);
	        }
	        // arr.push('');

	        return arr.join('\n');
	    },

	    removeField_msid: function removeField_msid(section) {
	        var arr = [];

	        var _arr = section.split(/a=msid:[^\n]+/g);
	        for (var i = 0; i < _arr.length; i++) {
	            _arr[i] != '\n' && arr.push(_arr[i]);
	        }
	        // arr.push('');

	        section = arr.join('\n');
	        arr = [];

	        _arr = section.split(/[\n]+/g);
	        for (var i = 0; i < _arr.length; i++) {
	            _arr[i] != '\n' && arr.push(_arr[i]);
	        }

	        return arr.join('\n');
	    },

	    updateHeaderMsidSemantic: function updateHeaderMsidSemantic(wms) {

	        var self = this;

	        var line = "a=msid-semantic: WMS " + wms;

	        var _arr = self.headerSection.split(/a=msid\-semantic: WMS.*/g);
	        var arr = [];
	        switch (_arr.length) {
	            case 1:
	                arr.push(_arr[0]);
	                break;
	            case 2:
	                arr.push(_arr[0]);
	                arr.push(line);
	                arr.push('\n');
	                break;
	            case 3:
	                arr.push(_arr[0]);
	                arr.push(line);
	                arr.push('\n');
	                arr.push(_arr[2]);
	                arr.push('\n');
	                break;
	        }

	        return self.headerSection = arr.join('');
	    },

	    updateAudioSSRCSection: function updateAudioSSRCSection(ssrc, cname, msid, label) {
	        var self = this;

	        self.audioSection && (self.audioSection = self.removeSSRC(self.audioSection));
	        self.audioSection && (self.audioSection = self.removeField_msid(self.audioSection));
	        self.audioSection && (self.audioSection = self.audioSection + self.ssrcSection(ssrc, cname, msid, label));
	    },

	    updateVideoSSRCSection: function updateVideoSSRCSection(ssrc, cname, msid, label) {
	        var self = this;

	        self.videoSection && (self.videoSection = self.removeSSRC(self.videoSection));
	        self.videoSection && (self.videoSection = self.removeField_msid(self.videoSection));
	        self.videoSection && (self.videoSection = self.videoSection + self.ssrcSection(ssrc, cname, msid, label));
	    },

	    getUpdatedSDP: function getUpdatedSDP() {
	        var self = this;

	        var sdp = "";

	        self.headerSection && (sdp += self.headerSection);
	        self.audioSection && (sdp += self.audioSection);
	        self.videoSection && (sdp += self.videoSection);

	        return sdp;
	    },

	    parseMsidSemantic: function parseMsidSemantic(header) {
	        var self = this;

	        var regexp = /a=msid\-semantic:\s*WMS (\S+)/ig;
	        var arr = self._parseLine(header, regexp);

	        arr && arr.length == 2 && (self.msidSemantic = {
	            line: arr[0],
	            WMS: arr[1]
	        });

	        return self.msidSemantic;
	    },

	    ssrcSection: function ssrcSection(ssrc, cname, msid, label) {
	        var lines = ['a=ssrc:' + ssrc + ' cname:' + cname, 'a=ssrc:' + ssrc + ' msid:' + msid + ' ' + label, 'a=ssrc:' + ssrc + ' mslabel:' + msid, 'a=ssrc:' + ssrc + ' label:' + label, ''];

	        return lines.join('\n');
	    },

	    parseSSRC: function parseSSRC(section) {
	        var self = this;

	        var regexp = new RegExp("a=(ssrc):(\\d+) (\\S+):(\\S+)", "ig");

	        var arr = self._parseLine(section, regexp);
	        if (arr) {
	            var ssrc = {
	                lines: [],
	                updateSSRCSection: self.ssrcSection
	            };

	            for (var i = 0; i < arr.length; i++) {
	                var e = arr[i];
	                if (e.indexOf("a=ssrc") >= 0) {
	                    ssrc.lines.push(e);
	                } else {
	                    switch (e) {
	                        case 'ssrc':
	                        case 'cname':
	                        case 'msid':
	                        case 'mslabel':
	                        case 'label':
	                            ssrc[e] = arr[++i];
	                    }
	                }
	            }

	            return ssrc;
	        }
	    },

	    _parseLine: function _parseLine(str, regexp) {
	        var arr = [];

	        var _arr;
	        while ((_arr = regexp.exec(str)) != null) {
	            for (var i = 0; i < _arr.length; i++) {
	                arr.push(_arr[i]);
	            }
	        }

	        if (arr.length > 0) {
	            return arr;
	        }
	    }
	};

	var SDPSection = function SDPSection(sdp) {
	    _util.extend(this, _SDPSection);
	    this.spiltSection(sdp);
	};

	window.__rtc_globalCount = 0;

	/**
	 * Abstract
	 * {
	 *   onIceStateChange:
	 *   onIceCandidate:
	 *   onGotRemoteStream:
	 *
	 *   createRtcPeerConnection:
	 *   createOffer:
	 *   createPRAnswer:
	 *   createAnswer:
	 *   addIceCandidate:
	 *   close:
	 *   iceState:
	 *
	 *   setLocalStream:
	 *   getRtcId:
	 * }
	 *
	 */
	/**
	 * ICE 通道失败：
	 * 1.set sdp 失败
	 * 2.set cands 失败
	 * 但最终都是 ice fail
	 *
	 *
	 * onSetSessionDescriptionError
	 * onCreateSessionDescriptionError
	 * onAddIceCandidateError
	 *
	 * onIceStateChange  ice fail
	 *
	 */
	var _WebRTC = _util.prototypeExtend({
	    sdpConstraints: {
	        'mandatory': {
	            'OfferToReceiveAudio': true,
	            'OfferToReceiveVideo': true
	        }
	    },
	    offerOptions: {
	        offerToReceiveAudio: 1,
	        offerToReceiveVideo: 1
	    },

	    __init__: function __init__() {
	        var self = this;

	        self._rtcId || (self._rtcId = "RTC" + __rtc_globalCount++);

	        self.__setRemoteSDP = false;
	        self.__tmpRemoteCands = [];
	        self._rtcPeerConnection = null;
	    },

	    getRtcId: function getRtcId() {
	        return this._rtcId;
	    },

	    iceState: function iceState() {
	        var self = this;
	        return self._rtcPeerConnection.iceConnectionState;
	    },

	    createRtcPeerConnection: function createRtcPeerConnection(iceServerConfig) {
	        _logger.debug('begin create RtcPeerConnection ......');

	        var self = this;

	        iceServerConfig || (iceServerConfig = self.iceServerConfig);

	        if (iceServerConfig) {
	            //reduce icecandidate number:add default value
	            !iceServerConfig.iceServers && (iceServerConfig.iceServers = []);

	            iceServerConfig.rtcpMuxPolicy = "require";
	            iceServerConfig.bundlePolicy = "max-bundle";

	            //iceServerConfig.iceTransportPolicy = 'relay';
	            if (iceServerConfig.relayOnly) {
	                iceServerConfig.iceTransportPolicy = 'relay';
	            }
	        } else {
	            iceServerConfig = null;
	        }
	        _logger.debug('RtcPeerConnection config:', iceServerConfig);

	        var rtcPeerConnection = self._rtcPeerConnection = new RTCPeerConnection(iceServerConfig);
	        _logger.debug('created local peer connection object', rtcPeerConnection);

	        rtcPeerConnection.onicecandidate = function (event) {
	            //reduce icecandidate number: don't deal with tcp, udp only
	            if (event.type == "icecandidate" && (event.candidate == null || / tcp /.test(event.candidate.candidate))) {
	                return;
	            }
	            self.onIceCandidate(event);
	        };

	        rtcPeerConnection.onicestatechange = function (event) {
	            _logger.debug("ice connect state", self.webRtc.iceConnectionState(), "evt.target state", event.target.iceConnectionState);
	            self.onIceStateChange(event);
	        };

	        rtcPeerConnection.oniceconnectionstatechange = function (event) {
	            self.onIceStateChange(event);
	        };

	        rtcPeerConnection.onaddstream = function (event) {
	            self._onGotRemoteStream(event);
	        };
	    },

	    setLocalStream: function setLocalStream(localStream) {
	        this._localStream = localStream;
	        this._rtcPeerConnection.addStream(localStream);
	        _logger.debug('Added local stream to RtcPeerConnection', localStream);
	    },

	    getLocalStream: function getLocalStream() {
	        return this._localStream;
	    },
	    getRemoteStream: function getRemoteStream() {
	        return this._remoteStream;
	    },

	    createOffer: function createOffer(onCreateOfferSuccess, onCreateOfferError) {
	        var self = this;

	        _logger.debug('createOffer start...');

	        return self._rtcPeerConnection.createOffer(self.offerOptions).then(function (desc) {
	            self.offerDescription = desc;

	            _logger.debug('Offer ', desc); //_logger.debug('from \n' + desc.sdp);
	            _logger.debug('setLocalDescription start');

	            self._rtcPeerConnection.setLocalDescription(desc).then(self.onSetLocalSessionDescriptionSuccess, self.onSetSessionDescriptionError).then(function () {
	                (onCreateOfferSuccess || self.onCreateOfferSuccess)(desc);
	            });
	        }, onCreateOfferError || self.onCreateSessionDescriptionError);
	    },

	    createPRAnswer: function createPRAnswer(onCreatePRAnswerSuccess, onCreatePRAnswerError) {
	        var self = this;

	        _logger.info(' createPRAnswer start');
	        // Since the 'remote' side has no media stream we need
	        // to pass in the right constraints in order for it to
	        // accept the incoming offer of audio and video.
	        return self._rtcPeerConnection.createAnswer(self.sdpConstraints).then(function (desc) {
	            _logger.debug('_____________PRAnswer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);

	            desc.type = "pranswer";
	            desc.sdp = desc.sdp.replace(/a=recvonly/g, 'a=inactive');

	            self.__prAnswerDescription = desc;

	            _logger.debug('inactive PRAnswer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);
	            _logger.debug('setLocalDescription start');

	            self._rtcPeerConnection.setLocalDescription(desc).then(self.onSetLocalSuccess, self.onSetSessionDescriptionError).then(function () {
	                var sdpSection = new SDPSection(desc.sdp);
	                sdpSection.updateHeaderMsidSemantic("MS_0000");
	                sdpSection.updateAudioSSRCSection(1000, "CHROME0000", "MS_0000", "LABEL_AUDIO_1000");
	                sdpSection.updateVideoSSRCSection(2000, "CHROME0000", "MS_0000", "LABEL_VIDEO_2000");

	                desc.sdp = sdpSection.getUpdatedSDP();

	                _logger.debug('Send PRAnswer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);

	                (onCreatePRAnswerSuccess || self.onCreatePRAnswerSuccess)(desc);
	            });
	        }, onCreatePRAnswerError || self.onCreateSessionDescriptionError);
	    },

	    createAnswer: function createAnswer(onCreateAnswerSuccess, onCreateAnswerError) {
	        var self = this;

	        _logger.info('createAnswer start');
	        // Since the 'remote' side has no media stream we need
	        // to pass in the right constraints in order for it to
	        // accept the incoming offer of audio and video.
	        return self._rtcPeerConnection.createAnswer(self.sdpConstraints).then(function (desc) {
	            _logger.debug('_____________________Answer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);

	            desc.type = 'answer';

	            if (emedia.supportPRAnswer) {
	                var sdpSection = new SDPSection(desc.sdp);
	                var ms = sdpSection.parseMsidSemantic(sdpSection.headerSection);
	                if (ms.WMS == '*') {
	                    sdpSection.updateHeaderMsidSemantic(ms.WMS = "MS_0000");
	                }
	                var audioSSRC = sdpSection.parseSSRC(sdpSection.audioSection);
	                var videoSSRC = sdpSection.parseSSRC(sdpSection.videoSection);

	                sdpSection.updateAudioSSRCSection(1000, "CHROME0000", ms.WMS, audioSSRC.label || "LABEL_AUDIO_1000");
	                if (videoSSRC) {
	                    sdpSection.updateVideoSSRCSection(2000, "CHROME0000", ms.WMS, videoSSRC.label || "LABEL_VIDEO_2000");
	                }
	                // mslabel cname

	                desc.sdp = sdpSection.getUpdatedSDP();
	            }

	            self.__answerDescription = desc;

	            _logger.debug('Answer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);
	            _logger.debug('setLocalDescription start');

	            self._rtcPeerConnection.setLocalDescription(desc).then(self.onSetLocalSuccess, self.onSetSessionDescriptionError).then(function () {
	                if (emedia.supportPRAnswer) {
	                    var sdpSection = new SDPSection(desc.sdp);

	                    sdpSection.updateHeaderMsidSemantic("MS_0000");
	                    sdpSection.updateAudioSSRCSection(1000, "CHROME0000", "MS_0000", "LABEL_AUDIO_1000");
	                    sdpSection.updateVideoSSRCSection(2000, "CHROME0000", "MS_0000", "LABEL_VIDEO_2000");

	                    desc.sdp = sdpSection.getUpdatedSDP();
	                }

	                _logger.debug('Send Answer ', desc.sdp); //_logger.debug('from :\n' + desc.sdp);

	                (onCreateAnswerSuccess || self.onCreateAnswerSuccess)(desc);
	            });
	        }, onCreateAnswerError || self.onCreateSessionDescriptionError);
	    },

	    close: function close(remainLocalStream) {
	        _logger.warn("webrtc closing");

	        var self = this;

	        try {
	            self._rtcPeerConnection && self._rtcPeerConnection.close();
	        } catch (e) {
	            _logger.error(e);
	        } finally {
	            // if (!remainLocalStream && self._localStream) {
	            //     self._localStream.getTracks().forEach(function (track) {
	            //         track.stop();
	            //     });
	            //     self._localStream = null;
	            // }

	            if (self._remoteStream) {
	                self._remoteStream.getTracks().forEach(function (track) {
	                    track.stop();
	                });
	            }
	            self._remoteStream = null;

	            self.onClose && self.onClose();
	        }
	    },

	    addIceCandidate: function addIceCandidate(candidate) {
	        var self = this;

	        if (!self._rtcPeerConnection) {
	            return;
	        }

	        _logger.debug('Add ICE candidate: ', candidate);

	        var _cands = _util.isArray(candidate) ? candidate : [];
	        !_util.isArray(candidate) && _cands.push(candidate);

	        if (!self.__setRemoteSDP) {
	            Array.prototype.push.apply(self.__tmpRemoteCands || (self.__tmpRemoteCands = {}), _cands);

	            _logger.debug('Add ICE candidate but tmp buffer caused by not set remote sdp: ', candidate);
	            return;
	        }

	        for (var i = 0; i < _cands.length; i++) {
	            candidate = _cands[i];

	            self._rtcPeerConnection.addIceCandidate(new RTCIceCandidate(candidate)).then(self.onAddIceCandidateSuccess, self.onAddIceCandidateError);
	        }
	    },

	    setRemoteDescription: function setRemoteDescription(desc) {
	        var self = this;

	        _logger.debug('setRemoteDescription start. ', desc);

	        desc.sdp = desc.sdp.replace(/UDP\/TLS\/RTP\/SAVPF/g, "RTP/SAVPF");
	        _logger.debug('setRemoteDescription.', desc);

	        desc = new RTCSessionDescription(desc);

	        return self._rtcPeerConnection.setRemoteDescription(desc).then(function () {
	            self.__setRemoteSDP = true;
	            self.onSetRemoteSuccess.apply(self, arguments);

	            if (self.__tmpRemoteCands && self.__tmpRemoteCands.length > 0) {
	                _logger.debug('After setRemoteDescription. add tmp cands');
	                self.addIceCandidate(self.__tmpRemoteCands);

	                self.__tmpRemoteCands = [];
	            }
	        }, self.onSetSessionDescriptionError);
	    },

	    iceConnectionState: function iceConnectionState() {
	        var self = this;

	        return self._rtcPeerConnection.iceConnectionState;
	    },

	    _onGotRemoteStream: function _onGotRemoteStream(event) {
	        _logger.debug('onGotRemoteStream.', event);
	        this._remoteStream = event.stream;
	        this.onGotRemoteStream(this._remoteStream, event);
	        _logger.debug('received remote stream, you will see the other.');
	    },

	    onSetRemoteSuccess: function onSetRemoteSuccess() {
	        _logger.info('onSetRemoteSuccess complete');
	    },

	    onSetLocalSuccess: function onSetLocalSuccess() {
	        _logger.info('setLocalDescription complete');
	    },

	    onAddIceCandidateSuccess: function onAddIceCandidateSuccess() {
	        _logger.debug('addIceCandidate success');
	    },

	    onAddIceCandidateError: function onAddIceCandidateError(error) {
	        _logger.debug('failed to add ICE Candidate: ' + error.toString());
	    },

	    onIceCandidate: function onIceCandidate(event) {
	        _logger.debug('onIceCandidate : ICE candidate: \n' + event.candidate);
	    },

	    onIceStateChange: function onIceStateChange(event) {
	        _logger.debug('onIceStateChange : ICE state change event: ', event);
	    },

	    onCreateSessionDescriptionError: function onCreateSessionDescriptionError(error) {
	        _logger.error('Failed to create session description: ' + error.toString());
	    },

	    onCreateOfferSuccess: function onCreateOfferSuccess(desc) {
	        _logger.debug('create offer success');
	    },

	    onCreatePRAnswerSuccess: function onCreatePRAnswerSuccess(desc) {
	        _logger.debug('create answer success');
	    },

	    onCreateAnswerSuccess: function onCreateAnswerSuccess(desc) {
	        _logger.debug('create answer success');
	    },

	    onSetSessionDescriptionError: function onSetSessionDescriptionError(error) {
	        _logger.error('onSetSessionDescriptionError : Failed to set session description: ' + error.toString());
	    },

	    onSetLocalSessionDescriptionSuccess: function onSetLocalSessionDescriptionSuccess() {
	        _logger.debug('onSetLocalSessionDescriptionSuccess : setLocalDescription complete');
	    },

	    onGotRemoteStream: function onGotRemoteStream(remoteStream) {
	        _logger.debug("Got remote stream. ", remoteStream);
	    }
	});

	module.exports = _WebRTC;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _util = __webpack_require__(4);

	/**
	 * {
	 *  _located:
	 *  _webrtc:
	 *
	 *  id:
	 *  memId:
	 *  name:
	 *  voff:
	 *  aoff:
	 *  type: 0 1
	 *  owner: {
	 *    id:
	 *    nickName:
	 *    name:
	 *  }
	 *
	 *  _localMediaStream:
	 * }
	 *
	 *
	 *
	 */
	module.exports = _util.prototypeExtend({ //type 0 AVpub 1 Desktop 2 Sub
	    located: function located() {
	        return this._located || false;
	    },

	    webrtc: function webrtc(_webrtc) {
	        _webrtc && (this._webrtc = _webrtc);
	        return this;
	    },

	    getMediaStream: function getMediaStream() {
	        return this._located ? this._localMediaStream : this._webrtc && this._webrtc.getRemoteStream();
	    },

	    getHtmlDOMID: function getHtmlDOMID() {
	        return "_m_" + this.owner.id + "_s_" + this.id;
	    }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Handler");

	var __event = __webpack_require__(7);

	/**
	 * Error({
	 *   code:
	 *   targetObj:
	 *   evtObj:
	 * })
	 *
	 *
	 *
	 *
	 */
	var Handler = _util.prototypeExtend({
	    onEvent: function onEvent(evt) {
	        var self = this;

	        evt && _logger.warn("[EVT]", evt.message(), evt.hidden || "");

	        function afterNotify() {
	            self.handleEvent(evt);
	        }

	        if (evt instanceof emedia.event.StreamState && evt.stream && evt.stream.located()) {
	            afterNotify();
	            return;
	        }

	        try {
	            evt.hidden || self.onNotifyEvent && self.onNotifyEvent(evt);
	        } finally {
	            afterNotify();
	        }
	    },

	    handleEvent: function handleEvent(evt) {
	        var self = this;

	        if (evt instanceof __event.ServerRefuseEnter) {
	            _logger.warn("Server refuse, ", evt.failed, evt.msg);
	            self.onServerRefuseEnter(evt);
	        } else if (evt instanceof __event.EnterFail) {
	            _logger.warn("Enter fail, result = ", evt.failed);
	            self.onEnterFail();
	        } else if (evt instanceof __event.WSClose) {
	            //_logger.warn("Websocket closed");
	            self.onWSClose();
	        } else if (evt instanceof __event.WSConnected) {
	            _logger.warn("Websocket connected");
	        } else if (evt instanceof __event.ICEConnected) {
	            var webrtc = evt.webrtc;
	            self.onICEConnected(webrtc);
	        } else if (evt instanceof __event.ICEConnectFail) {
	            var webrtc = evt.webrtc;
	            self.onICEConnectFail(webrtc);
	        } else if (evt instanceof __event.ICEDisconnected) {
	            //只要ICE断开
	            var webrtc = evt.webrtc;
	            self.onICEDisconnected(webrtc);
	        } else if (evt instanceof __event.ICEClosed) {
	            //只要ICE断开
	            var webrtc = evt.webrtc;
	            self.onICEClosed(webrtc);
	        } else if (evt instanceof __event.ICERemoteMediaStream) {
	            self.onICERemoteMediaStream(evt.webrtc);
	        } else if (evt instanceof __event.PushSuccess) {
	            self._cacheStreams[evt.stream.id] = self._linkedStreams[evt.stream.id] = evt.stream;
	            if (evt.hidden && !self._maybeNotExistStreams[evt.stream.id]) {
	                self.onAddStream(evt.stream);
	                return;
	            }
	            _stream && self.onUpdateStream(_stream);
	        } else if (evt instanceof __event.SubSuccess) {
	            self._linkedStreams[evt.stream.id] = evt.stream;
	        } else if (evt instanceof __event.PushFail) {
	            delete self._linkedStreams[evt.stream.id];

	            var _stream = self.newStream(evt.stream);
	            self.onRemoveStream(_stream);
	        } else if (evt instanceof __event.SubFail) {
	            delete self._linkedStreams[evt.stream.id];

	            var _stream = self.newStream(evt.stream);
	            _stream.rtcId = undefined;
	            _stream._webrtc = undefined;

	            self.onUpdateStream(_stream);
	        } else if (evt instanceof __event.EnterSuccess) {
	            self.onEnterSuccess();
	        }
	    },

	    onServerRefuseEnter: function onServerRefuseEnter(evt) {
	        var self = this;

	        var failed = evt.failed;
	        switch (failed) {
	            case -9527:
	            case -95270:
	                self.close(4);
	                break;
	            case -500:
	            case -502:
	            case -504:
	                self.close(4);
	                break;
	            case -506:
	                self.close(11);
	                break;
	            default:
	                self.close(2);
	        }
	    },

	    onEnterFail: function onEnterFail() {
	        var self = this;

	        if (self.__getCopyInterval) {
	            clearInterval(self.__getCopyInterval);
	        }
	    },

	    onEnterSuccess: function onEnterSuccess() {
	        var self = this;

	        setTimeout(function () {
	            self._failIcesRebuild();
	        }, 200);

	        if (self.getCopyIntervalMillis && self.getCopyIntervalMillis > 0) {
	            _logger.warn("Run interval get copy. interval = ", self.getCopyIntervalMillis);

	            if (self.__getCopyInterval) {
	                clearInterval(self.__getCopyInterval);
	            }

	            self.__getCopyInterval = setInterval(function () {
	                if (self._session.connected()) {
	                    self._sysCopy.apply(self);
	                } else {
	                    _logger.warn("Warn! cannot get copy. cause offline.");

	                    self.__getCopyInterval && clearInterval(self.__getCopyInterval);
	                }
	            }, self.getCopyIntervalMillis);
	        }
	    },

	    onWSClose: function onWSClose() {
	        var self = this;
	        if (self.__getCopyInterval) {
	            clearInterval(self.__getCopyInterval);
	        }

	        _logger.info("Websocket closed.");
	    },

	    onICEDisconnected: function onICEDisconnected(webrtc) {
	        var self = this;

	        _util.forEach(self._linkedStreams, function (sid, stream) {
	            if (stream.rtcId == webrtc.getRtcId()) {
	                var problemStream;
	                if (!(problemStream = self._maybeNotExistStreams[sid])) {
	                    problemStream = self._maybeNotExistStreams[sid] = _util.extend({}, stream);
	                    problemStream.iceRebuildCount = 1;
	                }

	                _logger.info("Stream maybe not exist. caused by disconnected", stream.id);
	            }
	        });
	    },

	    onICEConnectFail: function onICEConnectFail(webrtc) {
	        var self = this;

	        for (var sid in self._linkedStreams) {
	            var stream = self._linkedStreams[sid];
	            if (stream.rtcId == webrtc.getRtcId()) {
	                var problemStream;
	                if (!(problemStream = self._maybeNotExistStreams[sid])) {
	                    problemStream = self._maybeNotExistStreams[sid] = _util.extend({}, stream);
	                    problemStream.iceRebuildCount = 1;
	                }

	                if (problemStream) {
	                    var _evt = new __event.StreamState({ stream: problemStream });
	                    _evt.iceFail();

	                    self.onEvent(_evt);
	                }

	                _logger.info("ice fail. webrtc = ", webrtc.getRtcId(), " problem stream is ", problemStream.iceRebuildCount, problemStream.id);

	                if (problemStream.iceRebuildCount > emedia.config.iceRebuildCount) {
	                    _logger.info("ice fail. webrtc = ", webrtc.getRtcId(), " rebuild fail. problem stream is ", problemStream.id);

	                    if (problemStream.located()) {
	                        self.onEvent(new __event.PushFail({
	                            stream: stream,
	                            cause: "pub ice rebuild failed."
	                        }));
	                    } else {
	                        self.onEvent(new __event.SubFail({
	                            stream: stream,
	                            cause: "sub ice rebuild failed."
	                        }));
	                    }
	                    self.closeWebrtc(webrtc.getRtcId(), false);
	                } else {
	                    _logger.info("ice fail. webrtc = ", webrtc.getRtcId(), " will rebuild. remain local stream. ", problemStream.id);
	                    self.closeWebrtc(webrtc.getRtcId(), true);

	                    setTimeout(function () {
	                        self.iceRebuild(problemStream);
	                    }, emedia.config.iceRebuildIntervalMillis);

	                    _logger.info("ice fail. webrtc = ", webrtc.getRtcId(), " will rebuild. problem stream is ", problemStream.id);
	                }
	            }
	        }
	    },

	    onICEClosed: function onICEClosed(webrtc) {
	        var self = this;

	        // _util.forEach(self._linkedStreams, function (streamId, _stream) {
	        //     if(_stream.rtcId == webrtc.getRtcId() &&_util.removeAttribute(self._linkedStreams, _stream.id)){
	        //         _logger.info("ice closed. closed webrtc = ", webrtc.getRtcId(), "remove linked stream = ", _stream.id);
	        //     }
	        // });

	        _util.removeAttribute(self._ices, webrtc.getRtcId());
	        _logger.info("Remove rtc", webrtc.getRtcId(), "caused by closed");
	    },

	    onICEConnected: function onICEConnected(webrtc) {
	        var self = this;

	        _util.forEach(self._cacheStreams, function (sid, stream) {
	            if (stream.rtcId == webrtc.getRtcId()) {
	                if (self._maybeNotExistStreams[sid]) {
	                    _util.removeAttribute(self._maybeNotExistStreams, stream.id);
	                    self._linkedStreams[sid] = stream;

	                    _logger.info("ice reconnected. webrtc = ", webrtc.getRtcId(), "will update stream = ", stream.id);
	                    //stream.located() && self.onUpdateStream(self._linkedStreams[stream.id]);
	                    //self.onUpdateStream(self._linkedStreams[stream.id]);
	                } else {
	                    _logger.info("ice connected. webrtc = ", webrtc.getRtcId(), stream.id);

	                    stream.located() && self.onEvent(new __event.PushSuccess({ stream: stream }));
	                    stream.located() || self.onEvent(new __event.SubSuccess({ stream: stream }));
	                }
	            }
	        });
	    },

	    onICERemoteMediaStream: function onICERemoteMediaStream(webrtc) {
	        var self = this;

	        var streams = [];
	        _util.forEach(self._cacheStreams, function (sid, _stream) {
	            if (_stream.rtcId == webrtc.getRtcId() && !_stream.located()) {
	                self.onUpdateStream(_stream, { mediaStream: _stream.getMediaStream() });
	            }
	        });
	    },

	    _failIcesRebuild: function _failIcesRebuild() {
	        var self = this;

	        var count = 1;
	        _util.forEach(self._maybeNotExistStreams, function (streamId, stream) {
	            setTimeout(function () {
	                self.iceRebuild(stream);
	            }, count * 100);
	        });
	    },

	    iceRebuild: function iceRebuild(stream) {
	        var self = this;

	        if (!self.connected()) {
	            stream.iceRebuildCount = 1;
	            _logger.warn("Websocket disconnect. waiting. rebuild count reset", stream.iceRebuildCount, stream.id);
	            return;
	        }
	        if (!self._linkedStreams[stream.id]) {
	            _logger.info("ice rebuild fail. it yet closed. stream is ", stream.id, stream.rtcId);
	            _util.removeAttribute(self._maybeNotExistStreams, stream.id);
	            return;
	        }

	        if (stream.iceRebuildCount > emedia.config.iceRebuildCount) {
	            _logger.info("ice rebuild fail. count too many. stream is ", stream.id);

	            if (stream.located()) {
	                self.onEvent(new __event.PushFail({
	                    stream: stream,
	                    cause: "pub ice rebuild failed."
	                }));
	            } else {
	                self.onEvent(new __event.SubFail({
	                    stream: stream,
	                    cause: "sub ice rebuild failed."
	                }));
	            }
	        } else if (self.connected()) {
	            _logger.info("ice try rebuild. count", stream.iceRebuildCount, ". stream is ", stream.id);
	            self.rebuildIce(stream);

	            stream.iceRebuildCount++;
	        } else {
	            _logger.warn("ice rebuild. stop. cause by not websocket disconnect", stream.id);
	        }
	    },

	    rebuildIce: function rebuildIce(stream) {
	        var self = this;

	        if (!self._cacheStreams[stream.id]) {
	            _logger.warn("Begin rebuild ice. not found stream at local", stream.iceRebuildCount, stream.id);
	            return;
	        }
	        _logger.warn("Begin rebuild ice ", stream.iceRebuildCount, stream.id);

	        if (stream.located()) {
	            self.push(stream);
	        } else {
	            self.createWebrtcAndSubscribeStream(stream.id);
	        }
	        _logger.warn("Finish rebuild ice ", stream.iceRebuildCount, stream.id, self._cacheStreams[stream.id].rtcId);
	    },

	    _sysCopy: function _sysCopy() {
	        var self = this;

	        var copyMessage = self.newMessage().setOp(1000).setCver(self._cver || 0);

	        self.postMessage(copyMessage, function (rsp) {
	            if (rsp.result != 0) {
	                _logger.error("Get copy fail. result = ", rsp.result);

	                return;
	            }

	            if ((self._cver || 0) < rsp.cver) {
	                self._cver = rsp.cver;

	                self.onMembers(rsp.cver, rsp.mems || {});
	                self.onStreams(rsp.cver, rsp.streams || {});

	                _logger.info("Got copy success.");
	            }
	        });
	    }
	});

	module.exports = Handler;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(4);
	var _logger = _util.tagLogger("Desktop");

	var __event = __webpack_require__(7);

	window.__shareDesktopMessageCount__ = 0;

	module.exports = _util.prototypeExtend({

	    __RTC_PAGE_MSG_TYPE__: 'RTC-SD-PAGE',
	    __RTC_EXT_MSG_TYPE__: 'RTC-SD-EXT',

	    __init__: function __init__() {
	        var self = this;

	        self.__extLoaded = self.rsdExtLoaded();
	        if (self.__extLoaded) {
	            self.__onRsdExtLoad();
	        }

	        window.addEventListener("load", function (event) {
	            if (self.__extLoaded) {
	                return;
	            }

	            var exist = self.rsdExtLoaded();
	            // console.log('exist=', exist, ', ev4detect=', ev4detect);

	            self.__extLoaded = exist;
	        });

	        window.addEventListener('message', function (event) {
	            if (!event.data) {
	                return;
	            }

	            var msg = event.data;
	            if (!msg.type || msg.type !== self.__RTC_EXT_MSG_TYPE__ || !msg.evname) {
	                return;
	            }
	            _logger.info('got ext-msg: ', msg);

	            if (msg.evname === 'extLoaded') {
	                if (!self.__extLoaded) {
	                    self.__extLoaded = true;

	                    setTimeout(self.__onRsdExtLoad(), 50);
	                }

	                return;
	            }

	            self.__onMessage(msg);
	        });
	    },

	    rsdExtLoaded: function rsdExtLoaded() {
	        var existele = document.getElementById('RTC-Share-Deskto-installed-ele-rat1abrr');
	        return existele ? true : false;
	    },

	    __sendMessage: function __sendMessage(msg, callback) {
	        var self = this;

	        var tsxId = 'tsx_' + __shareDesktopMessageCount__++ + '_' + Math.random().toString(36).substr(2, 4);

	        if (!self.__extLoaded) {
	            throw "Rtc share desktop not loaded";
	        }

	        msg.tsxId = tsxId;

	        self["on_" + tsxId] = function () {
	            callback && callback.apply(self, arguments);

	            delete self["on_" + tsxId];
	        };

	        window.postMessage(msg, '*');
	    },

	    __onMessage: function __onMessage(msg) {
	        var self = this;

	        var tsxId = msg.tsxId;

	        self["on_" + tsxId] && self["on_" + tsxId](msg);
	        //self["on_" + tsxId] || _logger.info(msg);
	    },

	    __onRsdExtLoad: function __onRsdExtLoad() {
	        var self = this;

	        self.onExtLoaded && self.onExtLoaded();
	    },

	    openDesktopMedia: function openDesktopMedia(screenOptions, callback) {
	        var self = this;

	        if (!self.__extLoaded || !self.rsdExtLoaded()) {
	            callback(new __event.ShareDesktopExtensionNotFound());
	            return;
	        }

	        var msg = { type: self.__RTC_PAGE_MSG_TYPE__, evname: 'chooseDesktopMedia', screenOptions: screenOptions };
	        self.__sendMessage(msg, function (m) {
	            if (m.evname === 'onAccessApproved' && m.streamId) {
	                callback(new __event.OpenDesktopMedia({ desktopStreamId: m.streamId }));
	            } else {
	                callback(new __event.OpenDesktopMediaAccessDenied());
	            }
	        });
	    }
	});

/***/ }
/******/ ]);