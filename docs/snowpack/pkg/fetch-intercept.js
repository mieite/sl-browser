import { g as getDefaultExportFromNamespaceIfNotNamed } from './common/_commonjsHelpers-79ede638.js';

// native patch for: node-fetch, whatwg-fetch
// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
var global = getGlobal();
var whatwgFetch = global.fetch.bind(global);
const Headers = global.Headers;
const Request$1 = global.Request;
const Response = global.Response;

var whatwgFetch$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': whatwgFetch,
  Headers: Headers,
  Request: Request$1,
  Response: Response
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(whatwgFetch$1);

var browser =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
	
	var attach = __webpack_require__(1);
	var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
	
	module.exports = attach(ENVIRONMENT_IS_WORKER ? self : window);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/*
	* Configuration for React-Native's package system
	* @providesModule whatwg-fetch
	*/
	
	var interceptors = [];
	
	function interceptor(fetch) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  var reversedInterceptors = interceptors.reduce(function (array, interceptor) {
	    return [interceptor].concat(array);
	  }, []);
	  var promise = Promise.resolve(args);
	
	  // Register request interceptors
	  reversedInterceptors.forEach(function (_ref) {
	    var request = _ref.request,
	        requestError = _ref.requestError;
	
	    if (request || requestError) {
	      promise = promise.then(function (args) {
	        return request.apply(undefined, _toConsumableArray(args));
	      }, requestError);
	    }
	  });
	
	  // Register fetch call
	  promise = promise.then(function (args) {
	    var request = new (Function.prototype.bind.apply(Request, [null].concat(_toConsumableArray(args))))();
	    return fetch(request).then(function (response) {
	      response.request = request;
	      return response;
	    }).catch(function (error) {
	      error.request = request;
	      return Promise.reject(error);
	    });
	  });
	
	  // Register response interceptors
	  reversedInterceptors.forEach(function (_ref2) {
	    var response = _ref2.response,
	        responseError = _ref2.responseError;
	
	    if (response || responseError) {
	      promise = promise.then(response, responseError);
	    }
	  });
	
	  return promise;
	}
	
	module.exports = function attach(env) {
	  // Make sure fetch is available in the given environment
	  if (!env.fetch) {
	    try {
	      __webpack_require__(2);
	    } catch (err) {
	      throw Error('No fetch available. Unable to register fetch-intercept');
	    }
	  }
	  env.fetch = function (fetch) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return interceptor.apply(undefined, [fetch].concat(args));
	    };
	  }(env.fetch);
	
	  return {
	    register: function register(interceptor) {
	      interceptors.push(interceptor);
	      return function () {
	        var index = interceptors.indexOf(interceptor);
	        if (index >= 0) {
	          interceptors.splice(index, 1);
	        }
	      };
	    },
	    clear: function clear() {
	      interceptors = [];
	    }
	  };
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require$$0;

/***/ })
/******/ ]);

export default browser;
