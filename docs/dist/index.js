var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// docs/snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// docs/snowpack/pkg/common/_commonjsHelpers-79ede638.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function getDefaultExportFromNamespaceIfNotNamed(n3) {
  return n3 && Object.prototype.hasOwnProperty.call(n3, "default") && Object.keys(n3).length === 1 ? n3["default"] : n3;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// docs/snowpack/pkg/common/index-448fcd18.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i3 = 0; i3 < 10; i3++) {
      test2["_" + String.fromCharCode(i3)] = i3;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
      return test2[n3];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s3 = 1; s3 < arguments.length; s3++) {
    from = Object(arguments[s3]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i3 = 0; i3 < symbols.length; i3++) {
        if (propIsEnumerable.call(from, symbols[i3])) {
          to[symbols[i3]] = from[symbols[i3]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q2 = 60109, r3 = 60110, t4 = 60112;
  exports.Suspense = 60113;
  var u4 = 60115, v3 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w4 = Symbol.for;
    n3 = w4("react.element");
    p3 = w4("react.portal");
    exports.Fragment = w4("react.fragment");
    exports.StrictMode = w4("react.strict_mode");
    exports.Profiler = w4("react.profiler");
    q2 = w4("react.provider");
    r3 = w4("react.context");
    t4 = w4("react.forward_ref");
    exports.Suspense = w4("react.suspense");
    u4 = w4("react.memo");
    v3 = w4("react.lazy");
  }
  var x4 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a3) {
    if (a3 === null || typeof a3 !== "object")
      return null;
    a3 = x4 && a3[x4] || a3["@@iterator"];
    return typeof a3 === "function" ? a3 : null;
  }
  function z3(a3) {
    for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a3, c3 = 1; c3 < arguments.length; c3++)
      b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a3 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B4 = {};
  function C2(a3, b3, c3) {
    this.props = a3;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  C2.prototype.isReactComponent = {};
  C2.prototype.setState = function(a3, b3) {
    if (typeof a3 !== "object" && typeof a3 !== "function" && a3 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a3, b3, "setState");
  };
  C2.prototype.forceUpdate = function(a3) {
    this.updater.enqueueForceUpdate(this, a3, "forceUpdate");
  };
  function D5() {
  }
  D5.prototype = C2.prototype;
  function E3(a3, b3, c3) {
    this.props = a3;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  var F4 = E3.prototype = new D5();
  F4.constructor = E3;
  objectAssign(F4, C2.prototype);
  F4.isPureReactComponent = true;
  var G3 = {current: null}, H4 = Object.prototype.hasOwnProperty, I4 = {key: true, ref: true, __self: true, __source: true};
  function J2(a3, b3, c3) {
    var e4, d4 = {}, k3 = null, h4 = null;
    if (b3 != null)
      for (e4 in b3.ref !== void 0 && (h4 = b3.ref), b3.key !== void 0 && (k3 = "" + b3.key), b3)
        H4.call(b3, e4) && !I4.hasOwnProperty(e4) && (d4[e4] = b3[e4]);
    var g2 = arguments.length - 2;
    if (g2 === 1)
      d4.children = c3;
    else if (1 < g2) {
      for (var f3 = Array(g2), m3 = 0; m3 < g2; m3++)
        f3[m3] = arguments[m3 + 2];
      d4.children = f3;
    }
    if (a3 && a3.defaultProps)
      for (e4 in g2 = a3.defaultProps, g2)
        d4[e4] === void 0 && (d4[e4] = g2[e4]);
    return {$$typeof: n3, type: a3, key: k3, ref: h4, props: d4, _owner: G3.current};
  }
  function K2(a3, b3) {
    return {$$typeof: n3, type: a3.type, key: b3, ref: a3.ref, props: a3.props, _owner: a3._owner};
  }
  function L3(a3) {
    return typeof a3 === "object" && a3 !== null && a3.$$typeof === n3;
  }
  function escape(a3) {
    var b3 = {"=": "=0", ":": "=2"};
    return "$" + a3.replace(/[=:]/g, function(a4) {
      return b3[a4];
    });
  }
  var M3 = /\/+/g;
  function N4(a3, b3) {
    return typeof a3 === "object" && a3 !== null && a3.key != null ? escape("" + a3.key) : b3.toString(36);
  }
  function O4(a3, b3, c3, e4, d4) {
    var k3 = typeof a3;
    if (k3 === "undefined" || k3 === "boolean")
      a3 = null;
    var h4 = false;
    if (a3 === null)
      h4 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h4 = true;
          break;
        case "object":
          switch (a3.$$typeof) {
            case n3:
            case p3:
              h4 = true;
          }
      }
    if (h4)
      return h4 = a3, d4 = d4(h4), a3 = e4 === "" ? "." + N4(h4, 0) : e4, Array.isArray(d4) ? (c3 = "", a3 != null && (c3 = a3.replace(M3, "$&/") + "/"), O4(d4, b3, c3, "", function(a4) {
        return a4;
      })) : d4 != null && (L3(d4) && (d4 = K2(d4, c3 + (!d4.key || h4 && h4.key === d4.key ? "" : ("" + d4.key).replace(M3, "$&/") + "/") + a3)), b3.push(d4)), 1;
    h4 = 0;
    e4 = e4 === "" ? "." : e4 + ":";
    if (Array.isArray(a3))
      for (var g2 = 0; g2 < a3.length; g2++) {
        k3 = a3[g2];
        var f3 = e4 + N4(k3, g2);
        h4 += O4(k3, b3, c3, f3, d4);
      }
    else if (f3 = y4(a3), typeof f3 === "function")
      for (a3 = f3.call(a3), g2 = 0; !(k3 = a3.next()).done; )
        k3 = k3.value, f3 = e4 + N4(k3, g2++), h4 += O4(k3, b3, c3, f3, d4);
    else if (k3 === "object")
      throw b3 = "" + a3, Error(z3(31, b3 === "[object Object]" ? "object with keys {" + Object.keys(a3).join(", ") + "}" : b3));
    return h4;
  }
  function P4(a3, b3, c3) {
    if (a3 == null)
      return a3;
    var e4 = [], d4 = 0;
    O4(a3, e4, "", "", function(a4) {
      return b3.call(c3, a4, d4++);
    });
    return e4;
  }
  function Q3(a3) {
    if (a3._status === -1) {
      var b3 = a3._result;
      b3 = b3();
      a3._status = 0;
      a3._result = b3;
      b3.then(function(b4) {
        a3._status === 0 && (b4 = b4.default, a3._status = 1, a3._result = b4);
      }, function(b4) {
        a3._status === 0 && (a3._status = 2, a3._result = b4);
      });
    }
    if (a3._status === 1)
      return a3._result;
    throw a3._result;
  }
  var R4 = {current: null};
  function S4() {
    var a3 = R4.current;
    if (a3 === null)
      throw Error(z3(321));
    return a3;
  }
  var T4 = {ReactCurrentDispatcher: R4, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G3, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P4, forEach: function(a3, b3, c3) {
    P4(a3, function() {
      b3.apply(this, arguments);
    }, c3);
  }, count: function(a3) {
    var b3 = 0;
    P4(a3, function() {
      b3++;
    });
    return b3;
  }, toArray: function(a3) {
    return P4(a3, function(a4) {
      return a4;
    }) || [];
  }, only: function(a3) {
    if (!L3(a3))
      throw Error(z3(143));
    return a3;
  }};
  exports.Component = C2;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T4;
  exports.cloneElement = function(a3, b3, c3) {
    if (a3 === null || a3 === void 0)
      throw Error(z3(267, a3));
    var e4 = objectAssign({}, a3.props), d4 = a3.key, k3 = a3.ref, h4 = a3._owner;
    if (b3 != null) {
      b3.ref !== void 0 && (k3 = b3.ref, h4 = G3.current);
      b3.key !== void 0 && (d4 = "" + b3.key);
      if (a3.type && a3.type.defaultProps)
        var g2 = a3.type.defaultProps;
      for (f3 in b3)
        H4.call(b3, f3) && !I4.hasOwnProperty(f3) && (e4[f3] = b3[f3] === void 0 && g2 !== void 0 ? g2[f3] : b3[f3]);
    }
    var f3 = arguments.length - 2;
    if (f3 === 1)
      e4.children = c3;
    else if (1 < f3) {
      g2 = Array(f3);
      for (var m3 = 0; m3 < f3; m3++)
        g2[m3] = arguments[m3 + 2];
      e4.children = g2;
    }
    return {
      $$typeof: n3,
      type: a3.type,
      key: d4,
      ref: k3,
      props: e4,
      _owner: h4
    };
  };
  exports.createContext = function(a3, b3) {
    b3 === void 0 && (b3 = null);
    a3 = {$$typeof: r3, _calculateChangedBits: b3, _currentValue: a3, _currentValue2: a3, _threadCount: 0, Provider: null, Consumer: null};
    a3.Provider = {$$typeof: q2, _context: a3};
    return a3.Consumer = a3;
  };
  exports.createElement = J2;
  exports.createFactory = function(a3) {
    var b3 = J2.bind(null, a3);
    b3.type = a3;
    return b3;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a3) {
    return {$$typeof: t4, render: a3};
  };
  exports.isValidElement = L3;
  exports.lazy = function(a3) {
    return {$$typeof: v3, _payload: {_status: -1, _result: a3}, _init: Q3};
  };
  exports.memo = function(a3, b3) {
    return {$$typeof: u4, type: a3, compare: b3 === void 0 ? null : b3};
  };
  exports.useCallback = function(a3, b3) {
    return S4().useCallback(a3, b3);
  };
  exports.useContext = function(a3, b3) {
    return S4().useContext(a3, b3);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a3, b3) {
    return S4().useEffect(a3, b3);
  };
  exports.useImperativeHandle = function(a3, b3, c3) {
    return S4().useImperativeHandle(a3, b3, c3);
  };
  exports.useLayoutEffect = function(a3, b3) {
    return S4().useLayoutEffect(a3, b3);
  };
  exports.useMemo = function(a3, b3) {
    return S4().useMemo(a3, b3);
  };
  exports.useReducer = function(a3, b3, c3) {
    return S4().useReducer(a3, b3, c3);
  };
  exports.useRef = function(a3) {
    return S4().useRef(a3);
  };
  exports.useState = function(a3) {
    return S4().useState(a3);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});
var React = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), react, {
  default: react
}));

// docs/snowpack/pkg/react.js
var Component = react.Component;
var useEffect = react.useEffect;
var useState = react.useState;

// docs/snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f3, g2, h4, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l3 = performance;
    exports.unstable_now = function() {
      return l3.now();
    };
  } else {
    var p3 = Date, q2 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t4 = null, u4 = null, w4 = function() {
      if (t4 !== null)
        try {
          var a3 = exports.unstable_now();
          t4(true, a3);
          t4 = null;
        } catch (b3) {
          throw setTimeout(w4, 0), b3;
        }
    };
    f3 = function(a3) {
      t4 !== null ? setTimeout(f3, 0, a3) : (t4 = a3, setTimeout(w4, 0));
    };
    g2 = function(a3, b3) {
      u4 = setTimeout(a3, b3);
    };
    h4 = function() {
      clearTimeout(u4);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x4 = window.setTimeout, y4 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A3 = false, B4 = null, C2 = -1, D5 = 5, E3 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E3;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a3) {
      0 > a3 || 125 < a3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D5 = 0 < a3 ? Math.floor(1e3 / a3) : 5;
    };
    var F4 = new MessageChannel(), G3 = F4.port2;
    F4.port1.onmessage = function() {
      if (B4 !== null) {
        var a3 = exports.unstable_now();
        E3 = a3 + D5;
        try {
          B4(true, a3) ? G3.postMessage(null) : (A3 = false, B4 = null);
        } catch (b3) {
          throw G3.postMessage(null), b3;
        }
      } else
        A3 = false;
    };
    f3 = function(a3) {
      B4 = a3;
      A3 || (A3 = true, G3.postMessage(null));
    };
    g2 = function(a3, b3) {
      C2 = x4(function() {
        a3(exports.unstable_now());
      }, b3);
    };
    h4 = function() {
      y4(C2);
      C2 = -1;
    };
  }
  function H4(a3, b3) {
    var c3 = a3.length;
    a3.push(b3);
    a:
      for (; ; ) {
        var d4 = c3 - 1 >>> 1, e4 = a3[d4];
        if (e4 !== void 0 && 0 < I4(e4, b3))
          a3[d4] = b3, a3[c3] = e4, c3 = d4;
        else
          break a;
      }
  }
  function J2(a3) {
    a3 = a3[0];
    return a3 === void 0 ? null : a3;
  }
  function K2(a3) {
    var b3 = a3[0];
    if (b3 !== void 0) {
      var c3 = a3.pop();
      if (c3 !== b3) {
        a3[0] = c3;
        a:
          for (var d4 = 0, e4 = a3.length; d4 < e4; ) {
            var m3 = 2 * (d4 + 1) - 1, n3 = a3[m3], v3 = m3 + 1, r3 = a3[v3];
            if (n3 !== void 0 && 0 > I4(n3, c3))
              r3 !== void 0 && 0 > I4(r3, n3) ? (a3[d4] = r3, a3[v3] = c3, d4 = v3) : (a3[d4] = n3, a3[m3] = c3, d4 = m3);
            else if (r3 !== void 0 && 0 > I4(r3, c3))
              a3[d4] = r3, a3[v3] = c3, d4 = v3;
            else
              break a;
          }
      }
      return b3;
    }
    return null;
  }
  function I4(a3, b3) {
    var c3 = a3.sortIndex - b3.sortIndex;
    return c3 !== 0 ? c3 : a3.id - b3.id;
  }
  var L3 = [], M3 = [], N4 = 1, O4 = null, P4 = 3, Q3 = false, R4 = false, S4 = false;
  function T4(a3) {
    for (var b3 = J2(M3); b3 !== null; ) {
      if (b3.callback === null)
        K2(M3);
      else if (b3.startTime <= a3)
        K2(M3), b3.sortIndex = b3.expirationTime, H4(L3, b3);
      else
        break;
      b3 = J2(M3);
    }
  }
  function U4(a3) {
    S4 = false;
    T4(a3);
    if (!R4)
      if (J2(L3) !== null)
        R4 = true, f3(V3);
      else {
        var b3 = J2(M3);
        b3 !== null && g2(U4, b3.startTime - a3);
      }
  }
  function V3(a3, b3) {
    R4 = false;
    S4 && (S4 = false, h4());
    Q3 = true;
    var c3 = P4;
    try {
      T4(b3);
      for (O4 = J2(L3); O4 !== null && (!(O4.expirationTime > b3) || a3 && !exports.unstable_shouldYield()); ) {
        var d4 = O4.callback;
        if (typeof d4 === "function") {
          O4.callback = null;
          P4 = O4.priorityLevel;
          var e4 = d4(O4.expirationTime <= b3);
          b3 = exports.unstable_now();
          typeof e4 === "function" ? O4.callback = e4 : O4 === J2(L3) && K2(L3);
          T4(b3);
        } else
          K2(L3);
        O4 = J2(L3);
      }
      if (O4 !== null)
        var m3 = true;
      else {
        var n3 = J2(M3);
        n3 !== null && g2(U4, n3.startTime - b3);
        m3 = false;
      }
      return m3;
    } finally {
      O4 = null, P4 = c3, Q3 = false;
    }
  }
  var W3 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a3) {
    a3.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R4 || Q3 || (R4 = true, f3(V3));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P4;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L3);
  };
  exports.unstable_next = function(a3) {
    switch (P4) {
      case 1:
      case 2:
      case 3:
        var b3 = 3;
        break;
      default:
        b3 = P4;
    }
    var c3 = P4;
    P4 = b3;
    try {
      return a3();
    } finally {
      P4 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W3;
  exports.unstable_runWithPriority = function(a3, b3) {
    switch (a3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a3 = 3;
    }
    var c3 = P4;
    P4 = a3;
    try {
      return b3();
    } finally {
      P4 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a3, b3, c3) {
    var d4 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d4 + c3 : d4) : c3 = d4;
    switch (a3) {
      case 1:
        var e4 = -1;
        break;
      case 2:
        e4 = 250;
        break;
      case 5:
        e4 = 1073741823;
        break;
      case 4:
        e4 = 1e4;
        break;
      default:
        e4 = 5e3;
    }
    e4 = c3 + e4;
    a3 = {id: N4++, callback: b3, priorityLevel: a3, startTime: c3, expirationTime: e4, sortIndex: -1};
    c3 > d4 ? (a3.sortIndex = c3, H4(M3, a3), J2(L3) === null && a3 === J2(M3) && (S4 ? h4() : S4 = true, g2(U4, c3 - d4))) : (a3.sortIndex = e4, H4(L3, a3), R4 || Q3 || (R4 = true, f3(V3)));
    return a3;
  };
  exports.unstable_wrapCallback = function(a3) {
    var b3 = P4;
    return function() {
      var c3 = P4;
      P4 = b3;
      try {
        return a3.apply(this, arguments);
      } finally {
        P4 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a3) {
  for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a3, c3 = 1; c3 < arguments.length; c3++)
    b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a3 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a3, b3) {
  ea(a3, b3);
  ea(a3 + "Capture", b3);
}
function ea(a3, b3) {
  ca[a3] = b3;
  for (a3 = 0; a3 < b3.length; a3++)
    ba.add(b3[a3]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a3) {
  if (ia.call(ka, a3))
    return true;
  if (ia.call(ja, a3))
    return false;
  if (ha.test(a3))
    return ka[a3] = true;
  ja[a3] = true;
  return false;
}
function ma(a3, b3, c3, d4) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b3) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d4)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a3 = a3.toLowerCase().slice(0, 5);
      return a3 !== "data-" && a3 !== "aria-";
    default:
      return false;
  }
}
function na(a3, b3, c3, d4) {
  if (b3 === null || typeof b3 === "undefined" || ma(a3, b3, c3, d4))
    return true;
  if (d4)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b3;
      case 4:
        return b3 === false;
      case 5:
        return isNaN(b3);
      case 6:
        return isNaN(b3) || 1 > b3;
    }
  return false;
}
function B(a3, b3, c3, d4, e4, f3, g2) {
  this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
  this.attributeName = d4;
  this.attributeNamespace = e4;
  this.mustUseProperty = c3;
  this.propertyName = a3;
  this.type = b3;
  this.sanitizeURL = f3;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a3) {
  D[a3] = new B(a3, 0, false, a3, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a3) {
  var b3 = a3[0];
  D[b3] = new B(b3, 1, false, a3[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a3) {
  D[a3] = new B(a3, 2, false, a3.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a3) {
  D[a3] = new B(a3, 2, false, a3, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a3) {
  D[a3] = new B(a3, 3, false, a3.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a3) {
  D[a3] = new B(a3, 3, true, a3, null, false, false);
});
["capture", "download"].forEach(function(a3) {
  D[a3] = new B(a3, 4, false, a3, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a3) {
  D[a3] = new B(a3, 6, false, a3, null, false, false);
});
["rowSpan", "start"].forEach(function(a3) {
  D[a3] = new B(a3, 5, false, a3.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a3) {
  return a3[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a3) {
  var b3 = a3.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a3, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a3) {
  D[a3] = new B(a3, 1, false, a3.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a3) {
  D[a3] = new B(a3, 1, false, a3.toLowerCase(), null, true, true);
});
function qa(a3, b3, c3, d4) {
  var e4 = D.hasOwnProperty(b3) ? D[b3] : null;
  var f3 = e4 !== null ? e4.type === 0 : d4 ? false : !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N" ? false : true;
  f3 || (na(b3, c3, e4, d4) && (c3 = null), d4 || e4 === null ? la(b3) && (c3 === null ? a3.removeAttribute(b3) : a3.setAttribute(b3, "" + c3)) : e4.mustUseProperty ? a3[e4.propertyName] = c3 === null ? e4.type === 3 ? false : "" : c3 : (b3 = e4.attributeName, d4 = e4.attributeNamespace, c3 === null ? a3.removeAttribute(b3) : (e4 = e4.type, c3 = e4 === 3 || e4 === 4 && c3 === true ? "" : "" + c3, d4 ? a3.setAttributeNS(d4, b3, c3) : a3.setAttribute(b3, c3))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E3 = Symbol.for;
  sa = E3("react.element");
  ta = E3("react.portal");
  ua = E3("react.fragment");
  wa = E3("react.strict_mode");
  xa = E3("react.profiler");
  ya = E3("react.provider");
  za = E3("react.context");
  Aa = E3("react.forward_ref");
  Ba = E3("react.suspense");
  Ca = E3("react.suspense_list");
  Da = E3("react.memo");
  Ea = E3("react.lazy");
  Fa = E3("react.block");
  E3("react.scope");
  Ga = E3("react.opaque.id");
  Ha = E3("react.debug_trace_mode");
  Ia = E3("react.offscreen");
  Ja = E3("react.legacy_hidden");
}
var E3;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a3) {
  if (a3 === null || typeof a3 !== "object")
    return null;
  a3 = Ka && a3[Ka] || a3["@@iterator"];
  return typeof a3 === "function" ? a3 : null;
}
var Ma;
function Na(a3) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b3 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b3 && b3[1] || "";
    }
  return "\n" + Ma + a3;
}
var Oa = false;
function Pa(a3, b3) {
  if (!a3 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b3)
      if (b3 = function() {
        throw Error();
      }, Object.defineProperty(b3.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b3, []);
        } catch (k3) {
          var d4 = k3;
        }
        Reflect.construct(a3, [], b3);
      } else {
        try {
          b3.call();
        } catch (k3) {
          d4 = k3;
        }
        a3.call(b3.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d4 = k3;
      }
      a3();
    }
  } catch (k3) {
    if (k3 && d4 && typeof k3.stack === "string") {
      for (var e4 = k3.stack.split("\n"), f3 = d4.stack.split("\n"), g2 = e4.length - 1, h4 = f3.length - 1; 1 <= g2 && 0 <= h4 && e4[g2] !== f3[h4]; )
        h4--;
      for (; 1 <= g2 && 0 <= h4; g2--, h4--)
        if (e4[g2] !== f3[h4]) {
          if (g2 !== 1 || h4 !== 1) {
            do
              if (g2--, h4--, 0 > h4 || e4[g2] !== f3[h4])
                return "\n" + e4[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h4);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a3 = a3 ? a3.displayName || a3.name : "") ? Na(a3) : "";
}
function Qa(a3) {
  switch (a3.tag) {
    case 5:
      return Na(a3.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a3 = Pa(a3.type, false), a3;
    case 11:
      return a3 = Pa(a3.type.render, false), a3;
    case 22:
      return a3 = Pa(a3.type._render, false), a3;
    case 1:
      return a3 = Pa(a3.type, true), a3;
    default:
      return "";
  }
}
function Ra(a3) {
  if (a3 == null)
    return null;
  if (typeof a3 === "function")
    return a3.displayName || a3.name || null;
  if (typeof a3 === "string")
    return a3;
  switch (a3) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a3 === "object")
    switch (a3.$$typeof) {
      case za:
        return (a3.displayName || "Context") + ".Consumer";
      case ya:
        return (a3._context.displayName || "Context") + ".Provider";
      case Aa:
        var b3 = a3.render;
        b3 = b3.displayName || b3.name || "";
        return a3.displayName || (b3 !== "" ? "ForwardRef(" + b3 + ")" : "ForwardRef");
      case Da:
        return Ra(a3.type);
      case Fa:
        return Ra(a3._render);
      case Ea:
        b3 = a3._payload;
        a3 = a3._init;
        try {
          return Ra(a3(b3));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a3) {
  switch (typeof a3) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a3;
    default:
      return "";
  }
}
function Ta(a3) {
  var b3 = a3.type;
  return (a3 = a3.nodeName) && a3.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
}
function Ua(a3) {
  var b3 = Ta(a3) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a3.constructor.prototype, b3), d4 = "" + a3[b3];
  if (!a3.hasOwnProperty(b3) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e4 = c3.get, f3 = c3.set;
    Object.defineProperty(a3, b3, {configurable: true, get: function() {
      return e4.call(this);
    }, set: function(a4) {
      d4 = "" + a4;
      f3.call(this, a4);
    }});
    Object.defineProperty(a3, b3, {enumerable: c3.enumerable});
    return {getValue: function() {
      return d4;
    }, setValue: function(a4) {
      d4 = "" + a4;
    }, stopTracking: function() {
      a3._valueTracker = null;
      delete a3[b3];
    }};
  }
}
function Va(a3) {
  a3._valueTracker || (a3._valueTracker = Ua(a3));
}
function Wa(a3) {
  if (!a3)
    return false;
  var b3 = a3._valueTracker;
  if (!b3)
    return true;
  var c3 = b3.getValue();
  var d4 = "";
  a3 && (d4 = Ta(a3) ? a3.checked ? "true" : "false" : a3.value);
  a3 = d4;
  return a3 !== c3 ? (b3.setValue(a3), true) : false;
}
function Xa(a3) {
  a3 = a3 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a3 === "undefined")
    return null;
  try {
    return a3.activeElement || a3.body;
  } catch (b3) {
    return a3.body;
  }
}
function Ya(a3, b3) {
  var c3 = b3.checked;
  return objectAssign({}, b3, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a3._wrapperState.initialChecked});
}
function Za(a3, b3) {
  var c3 = b3.defaultValue == null ? "" : b3.defaultValue, d4 = b3.checked != null ? b3.checked : b3.defaultChecked;
  c3 = Sa(b3.value != null ? b3.value : c3);
  a3._wrapperState = {initialChecked: d4, initialValue: c3, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null};
}
function $a(a3, b3) {
  b3 = b3.checked;
  b3 != null && qa(a3, "checked", b3, false);
}
function ab(a3, b3) {
  $a(a3, b3);
  var c3 = Sa(b3.value), d4 = b3.type;
  if (c3 != null)
    if (d4 === "number") {
      if (c3 === 0 && a3.value === "" || a3.value != c3)
        a3.value = "" + c3;
    } else
      a3.value !== "" + c3 && (a3.value = "" + c3);
  else if (d4 === "submit" || d4 === "reset") {
    a3.removeAttribute("value");
    return;
  }
  b3.hasOwnProperty("value") ? bb(a3, b3.type, c3) : b3.hasOwnProperty("defaultValue") && bb(a3, b3.type, Sa(b3.defaultValue));
  b3.checked == null && b3.defaultChecked != null && (a3.defaultChecked = !!b3.defaultChecked);
}
function cb(a3, b3, c3) {
  if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
    var d4 = b3.type;
    if (!(d4 !== "submit" && d4 !== "reset" || b3.value !== void 0 && b3.value !== null))
      return;
    b3 = "" + a3._wrapperState.initialValue;
    c3 || b3 === a3.value || (a3.value = b3);
    a3.defaultValue = b3;
  }
  c3 = a3.name;
  c3 !== "" && (a3.name = "");
  a3.defaultChecked = !!a3._wrapperState.initialChecked;
  c3 !== "" && (a3.name = c3);
}
function bb(a3, b3, c3) {
  if (b3 !== "number" || Xa(a3.ownerDocument) !== a3)
    c3 == null ? a3.defaultValue = "" + a3._wrapperState.initialValue : a3.defaultValue !== "" + c3 && (a3.defaultValue = "" + c3);
}
function db(a3) {
  var b3 = "";
  react.Children.forEach(a3, function(a4) {
    a4 != null && (b3 += a4);
  });
  return b3;
}
function eb(a3, b3) {
  a3 = objectAssign({children: void 0}, b3);
  if (b3 = db(b3.children))
    a3.children = b3;
  return a3;
}
function fb(a3, b3, c3, d4) {
  a3 = a3.options;
  if (b3) {
    b3 = {};
    for (var e4 = 0; e4 < c3.length; e4++)
      b3["$" + c3[e4]] = true;
    for (c3 = 0; c3 < a3.length; c3++)
      e4 = b3.hasOwnProperty("$" + a3[c3].value), a3[c3].selected !== e4 && (a3[c3].selected = e4), e4 && d4 && (a3[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b3 = null;
    for (e4 = 0; e4 < a3.length; e4++) {
      if (a3[e4].value === c3) {
        a3[e4].selected = true;
        d4 && (a3[e4].defaultSelected = true);
        return;
      }
      b3 !== null || a3[e4].disabled || (b3 = a3[e4]);
    }
    b3 !== null && (b3.selected = true);
  }
}
function gb(a3, b3) {
  if (b3.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b3, {value: void 0, defaultValue: void 0, children: "" + a3._wrapperState.initialValue});
}
function hb(a3, b3) {
  var c3 = b3.value;
  if (c3 == null) {
    c3 = b3.children;
    b3 = b3.defaultValue;
    if (c3 != null) {
      if (b3 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b3 = c3;
    }
    b3 == null && (b3 = "");
    c3 = b3;
  }
  a3._wrapperState = {initialValue: Sa(c3)};
}
function ib(a3, b3) {
  var c3 = Sa(b3.value), d4 = Sa(b3.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a3.value && (a3.value = c3), b3.defaultValue == null && a3.defaultValue !== c3 && (a3.defaultValue = c3));
  d4 != null && (a3.defaultValue = "" + d4);
}
function jb(a3) {
  var b3 = a3.textContent;
  b3 === a3._wrapperState.initialValue && b3 !== "" && b3 !== null && (a3.value = b3);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a3) {
  switch (a3) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a3, b3) {
  return a3 == null || a3 === "http://www.w3.org/1999/xhtml" ? lb(b3) : a3 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a3;
}
var nb;
var ob = function(a3) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c3, d4, e4) {
    MSApp.execUnsafeLocalFunction(function() {
      return a3(b3, c3, d4, e4);
    });
  } : a3;
}(function(a3, b3) {
  if (a3.namespaceURI !== kb.svg || "innerHTML" in a3)
    a3.innerHTML = b3;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
    for (b3 = nb.firstChild; a3.firstChild; )
      a3.removeChild(a3.firstChild);
    for (; b3.firstChild; )
      a3.appendChild(b3.firstChild);
  }
});
function pb(a3, b3) {
  if (b3) {
    var c3 = a3.firstChild;
    if (c3 && c3 === a3.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b3;
      return;
    }
  }
  a3.textContent = b3;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a3) {
  rb.forEach(function(b3) {
    b3 = b3 + a3.charAt(0).toUpperCase() + a3.substring(1);
    qb[b3] = qb[a3];
  });
});
function sb(a3, b3, c3) {
  return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c3 || typeof b3 !== "number" || b3 === 0 || qb.hasOwnProperty(a3) && qb[a3] ? ("" + b3).trim() : b3 + "px";
}
function tb(a3, b3) {
  a3 = a3.style;
  for (var c3 in b3)
    if (b3.hasOwnProperty(c3)) {
      var d4 = c3.indexOf("--") === 0, e4 = sb(c3, b3[c3], d4);
      c3 === "float" && (c3 = "cssFloat");
      d4 ? a3.setProperty(c3, e4) : a3[c3] = e4;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a3, b3) {
  if (b3) {
    if (ub[a3] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
      throw Error(y(137, a3));
    if (b3.dangerouslySetInnerHTML != null) {
      if (b3.children != null)
        throw Error(y(60));
      if (!(typeof b3.dangerouslySetInnerHTML === "object" && "__html" in b3.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b3.style != null && typeof b3.style !== "object")
      throw Error(y(62));
  }
}
function wb(a3, b3) {
  if (a3.indexOf("-") === -1)
    return typeof b3.is === "string";
  switch (a3) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a3) {
  a3 = a3.target || a3.srcElement || window;
  a3.correspondingUseElement && (a3 = a3.correspondingUseElement);
  return a3.nodeType === 3 ? a3.parentNode : a3;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a3) {
  if (a3 = Cb(a3)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b3 = a3.stateNode;
    b3 && (b3 = Db(b3), yb(a3.stateNode, a3.type, b3));
  }
}
function Eb(a3) {
  zb ? Ab ? Ab.push(a3) : Ab = [a3] : zb = a3;
}
function Fb() {
  if (zb) {
    var a3 = zb, b3 = Ab;
    Ab = zb = null;
    Bb(a3);
    if (b3)
      for (a3 = 0; a3 < b3.length; a3++)
        Bb(b3[a3]);
  }
}
function Gb(a3, b3) {
  return a3(b3);
}
function Hb(a3, b3, c3, d4, e4) {
  return a3(b3, c3, d4, e4);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a3, b3, c3) {
  if (Lb)
    return a3(b3, c3);
  Lb = true;
  try {
    return Jb(a3, b3, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a3, b3) {
  var c3 = a3.stateNode;
  if (c3 === null)
    return null;
  var d4 = Db(c3);
  if (d4 === null)
    return null;
  c3 = d4[b3];
  a:
    switch (b3) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d4 = !d4.disabled) || (a3 = a3.type, d4 = !(a3 === "button" || a3 === "input" || a3 === "select" || a3 === "textarea"));
        a3 = !d4;
        break a;
      default:
        a3 = false;
    }
  if (a3)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b3, typeof c3));
  return c3;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a3) {
    Pb = false;
  }
var Qb;
function Rb(a3, b3, c3, d4, e4, f3, g2, h4, k3) {
  var l3 = Array.prototype.slice.call(arguments, 3);
  try {
    b3.apply(c3, l3);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a3) {
  Sb = true;
  Tb = a3;
}};
function Xb(a3, b3, c3, d4, e4, f3, g2, h4, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a3, b3, c3, d4, e4, f3, g2, h4, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l3 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l3);
  }
}
function Zb(a3) {
  var b3 = a3, c3 = a3;
  if (a3.alternate)
    for (; b3.return; )
      b3 = b3.return;
  else {
    a3 = b3;
    do
      b3 = a3, (b3.flags & 1026) !== 0 && (c3 = b3.return), a3 = b3.return;
    while (a3);
  }
  return b3.tag === 3 ? c3 : null;
}
function $b(a3) {
  if (a3.tag === 13) {
    var b3 = a3.memoizedState;
    b3 === null && (a3 = a3.alternate, a3 !== null && (b3 = a3.memoizedState));
    if (b3 !== null)
      return b3.dehydrated;
  }
  return null;
}
function ac(a3) {
  if (Zb(a3) !== a3)
    throw Error(y(188));
}
function bc(a3) {
  var b3 = a3.alternate;
  if (!b3) {
    b3 = Zb(a3);
    if (b3 === null)
      throw Error(y(188));
    return b3 !== a3 ? null : a3;
  }
  for (var c3 = a3, d4 = b3; ; ) {
    var e4 = c3.return;
    if (e4 === null)
      break;
    var f3 = e4.alternate;
    if (f3 === null) {
      d4 = e4.return;
      if (d4 !== null) {
        c3 = d4;
        continue;
      }
      break;
    }
    if (e4.child === f3.child) {
      for (f3 = e4.child; f3; ) {
        if (f3 === c3)
          return ac(e4), a3;
        if (f3 === d4)
          return ac(e4), b3;
        f3 = f3.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d4.return)
      c3 = e4, d4 = f3;
    else {
      for (var g2 = false, h4 = e4.child; h4; ) {
        if (h4 === c3) {
          g2 = true;
          c3 = e4;
          d4 = f3;
          break;
        }
        if (h4 === d4) {
          g2 = true;
          d4 = e4;
          c3 = f3;
          break;
        }
        h4 = h4.sibling;
      }
      if (!g2) {
        for (h4 = f3.child; h4; ) {
          if (h4 === c3) {
            g2 = true;
            c3 = f3;
            d4 = e4;
            break;
          }
          if (h4 === d4) {
            g2 = true;
            d4 = f3;
            c3 = e4;
            break;
          }
          h4 = h4.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d4)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a3 : b3;
}
function cc(a3) {
  a3 = bc(a3);
  if (!a3)
    return null;
  for (var b3 = a3; ; ) {
    if (b3.tag === 5 || b3.tag === 6)
      return b3;
    if (b3.child)
      b3.child.return = b3, b3 = b3.child;
    else {
      if (b3 === a3)
        break;
      for (; !b3.sibling; ) {
        if (!b3.return || b3.return === a3)
          return null;
        b3 = b3.return;
      }
      b3.sibling.return = b3.return;
      b3 = b3.sibling;
    }
  }
  return null;
}
function dc(a3, b3) {
  for (var c3 = a3.alternate; b3 !== null; ) {
    if (b3 === a3 || b3 === c3)
      return true;
    b3 = b3.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a3, b3, c3, d4, e4) {
  return {blockedOn: a3, domEventName: b3, eventSystemFlags: c3 | 16, nativeEvent: e4, targetContainers: [d4]};
}
function sc(a3, b3) {
  switch (a3) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b3.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b3.pointerId);
  }
}
function tc(a3, b3, c3, d4, e4, f3) {
  if (a3 === null || a3.nativeEvent !== f3)
    return a3 = rc(b3, c3, d4, e4, f3), b3 !== null && (b3 = Cb(b3), b3 !== null && fc(b3)), a3;
  a3.eventSystemFlags |= d4;
  b3 = a3.targetContainers;
  e4 !== null && b3.indexOf(e4) === -1 && b3.push(e4);
  return a3;
}
function uc(a3, b3, c3, d4, e4) {
  switch (b3) {
    case "focusin":
      return kc = tc(kc, a3, b3, c3, d4, e4), true;
    case "dragenter":
      return lc = tc(lc, a3, b3, c3, d4, e4), true;
    case "mouseover":
      return mc = tc(mc, a3, b3, c3, d4, e4), true;
    case "pointerover":
      var f3 = e4.pointerId;
      nc.set(f3, tc(nc.get(f3) || null, a3, b3, c3, d4, e4));
      return true;
    case "gotpointercapture":
      return f3 = e4.pointerId, oc.set(f3, tc(oc.get(f3) || null, a3, b3, c3, d4, e4)), true;
  }
  return false;
}
function vc(a3) {
  var b3 = wc(a3.target);
  if (b3 !== null) {
    var c3 = Zb(b3);
    if (c3 !== null) {
      if (b3 = c3.tag, b3 === 13) {
        if (b3 = $b(c3), b3 !== null) {
          a3.blockedOn = b3;
          hc(a3.lanePriority, function() {
            scheduler.unstable_runWithPriority(a3.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b3 === 3 && c3.stateNode.hydrate) {
        a3.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a3.blockedOn = null;
}
function xc(a3) {
  if (a3.blockedOn !== null)
    return false;
  for (var b3 = a3.targetContainers; 0 < b3.length; ) {
    var c3 = yc(a3.domEventName, a3.eventSystemFlags, b3[0], a3.nativeEvent);
    if (c3 !== null)
      return b3 = Cb(c3), b3 !== null && fc(b3), a3.blockedOn = c3, false;
    b3.shift();
  }
  return true;
}
function zc(a3, b3, c3) {
  xc(a3) && c3.delete(b3);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a3 = jc[0];
    if (a3.blockedOn !== null) {
      a3 = Cb(a3.blockedOn);
      a3 !== null && ec(a3);
      break;
    }
    for (var b3 = a3.targetContainers; 0 < b3.length; ) {
      var c3 = yc(a3.domEventName, a3.eventSystemFlags, b3[0], a3.nativeEvent);
      if (c3 !== null) {
        a3.blockedOn = c3;
        break;
      }
      b3.shift();
    }
    a3.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a3, b3) {
  a3.blockedOn === b3 && (a3.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a3) {
  function b3(b4) {
    return Bc(b4, a3);
  }
  if (0 < jc.length) {
    Bc(jc[0], a3);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d4 = jc[c3];
      d4.blockedOn === a3 && (d4.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a3);
  lc !== null && Bc(lc, a3);
  mc !== null && Bc(mc, a3);
  nc.forEach(b3);
  oc.forEach(b3);
  for (c3 = 0; c3 < pc.length; c3++)
    d4 = pc[c3], d4.blockedOn === a3 && (d4.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a3, b3) {
  var c3 = {};
  c3[a3.toLowerCase()] = b3.toLowerCase();
  c3["Webkit" + a3] = "webkit" + b3;
  c3["Moz" + a3] = "moz" + b3;
  return c3;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a3) {
  if (Fc[a3])
    return Fc[a3];
  if (!Ec[a3])
    return a3;
  var b3 = Ec[a3], c3;
  for (c3 in b3)
    if (b3.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a3] = b3[c3];
  return a3;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a3, b3) {
  for (var c3 = 0; c3 < a3.length; c3 += 2) {
    var d4 = a3[c3], e4 = a3[c3 + 1];
    e4 = "on" + (e4[0].toUpperCase() + e4.slice(1));
    Nc.set(d4, b3);
    Mc.set(d4, e4);
    da(e4, [d4]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a3) {
  if ((1 & a3) !== 0)
    return F = 15, 1;
  if ((2 & a3) !== 0)
    return F = 14, 2;
  if ((4 & a3) !== 0)
    return F = 13, 4;
  var b3 = 24 & a3;
  if (b3 !== 0)
    return F = 12, b3;
  if ((a3 & 32) !== 0)
    return F = 11, 32;
  b3 = 192 & a3;
  if (b3 !== 0)
    return F = 10, b3;
  if ((a3 & 256) !== 0)
    return F = 9, 256;
  b3 = 3584 & a3;
  if (b3 !== 0)
    return F = 8, b3;
  if ((a3 & 4096) !== 0)
    return F = 7, 4096;
  b3 = 4186112 & a3;
  if (b3 !== 0)
    return F = 6, b3;
  b3 = 62914560 & a3;
  if (b3 !== 0)
    return F = 5, b3;
  if (a3 & 67108864)
    return F = 4, 67108864;
  if ((a3 & 134217728) !== 0)
    return F = 3, 134217728;
  b3 = 805306368 & a3;
  if (b3 !== 0)
    return F = 2, b3;
  if ((1073741824 & a3) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a3;
}
function Sc(a3) {
  switch (a3) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a3) {
  switch (a3) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a3));
  }
}
function Uc(a3, b3) {
  var c3 = a3.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d4 = 0, e4 = 0, f3 = a3.expiredLanes, g2 = a3.suspendedLanes, h4 = a3.pingedLanes;
  if (f3 !== 0)
    d4 = f3, e4 = F = 15;
  else if (f3 = c3 & 134217727, f3 !== 0) {
    var k3 = f3 & ~g2;
    k3 !== 0 ? (d4 = Rc(k3), e4 = F) : (h4 &= f3, h4 !== 0 && (d4 = Rc(h4), e4 = F));
  } else
    f3 = c3 & ~g2, f3 !== 0 ? (d4 = Rc(f3), e4 = F) : h4 !== 0 && (d4 = Rc(h4), e4 = F);
  if (d4 === 0)
    return 0;
  d4 = 31 - Vc(d4);
  d4 = c3 & ((0 > d4 ? 0 : 1 << d4) << 1) - 1;
  if (b3 !== 0 && b3 !== d4 && (b3 & g2) === 0) {
    Rc(b3);
    if (e4 <= F)
      return b3;
    F = e4;
  }
  b3 = a3.entangledLanes;
  if (b3 !== 0)
    for (a3 = a3.entanglements, b3 &= d4; 0 < b3; )
      c3 = 31 - Vc(b3), e4 = 1 << c3, d4 |= a3[c3], b3 &= ~e4;
  return d4;
}
function Wc(a3) {
  a3 = a3.pendingLanes & -1073741825;
  return a3 !== 0 ? a3 : a3 & 1073741824 ? 1073741824 : 0;
}
function Xc(a3, b3) {
  switch (a3) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a3 = Yc(24 & ~b3), a3 === 0 ? Xc(10, b3) : a3;
    case 10:
      return a3 = Yc(192 & ~b3), a3 === 0 ? Xc(8, b3) : a3;
    case 8:
      return a3 = Yc(3584 & ~b3), a3 === 0 && (a3 = Yc(4186112 & ~b3), a3 === 0 && (a3 = 512)), a3;
    case 2:
      return b3 = Yc(805306368 & ~b3), b3 === 0 && (b3 = 268435456), b3;
  }
  throw Error(y(358, a3));
}
function Yc(a3) {
  return a3 & -a3;
}
function Zc(a3) {
  for (var b3 = [], c3 = 0; 31 > c3; c3++)
    b3.push(a3);
  return b3;
}
function $c(a3, b3, c3) {
  a3.pendingLanes |= b3;
  var d4 = b3 - 1;
  a3.suspendedLanes &= d4;
  a3.pingedLanes &= d4;
  a3 = a3.eventTimes;
  b3 = 31 - Vc(b3);
  a3[b3] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a3) {
  return a3 === 0 ? 32 : 31 - (bd(a3) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a3, b3, c3, d4) {
  Kb || Ib();
  var e4 = hd, f3 = Kb;
  Kb = true;
  try {
    Hb(e4, a3, b3, c3, d4);
  } finally {
    (Kb = f3) || Mb();
  }
}
function id(a3, b3, c3, d4) {
  ed(dd, hd.bind(null, a3, b3, c3, d4));
}
function hd(a3, b3, c3, d4) {
  if (fd) {
    var e4;
    if ((e4 = (b3 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a3))
      a3 = rc(null, a3, b3, c3, d4), jc.push(a3);
    else {
      var f3 = yc(a3, b3, c3, d4);
      if (f3 === null)
        e4 && sc(a3, d4);
      else {
        if (e4) {
          if (-1 < qc.indexOf(a3)) {
            a3 = rc(f3, a3, b3, c3, d4);
            jc.push(a3);
            return;
          }
          if (uc(f3, a3, b3, c3, d4))
            return;
          sc(a3, d4);
        }
        jd(a3, b3, d4, null, c3);
      }
    }
  }
}
function yc(a3, b3, c3, d4) {
  var e4 = xb(d4);
  e4 = wc(e4);
  if (e4 !== null) {
    var f3 = Zb(e4);
    if (f3 === null)
      e4 = null;
    else {
      var g2 = f3.tag;
      if (g2 === 13) {
        e4 = $b(f3);
        if (e4 !== null)
          return e4;
        e4 = null;
      } else if (g2 === 3) {
        if (f3.stateNode.hydrate)
          return f3.tag === 3 ? f3.stateNode.containerInfo : null;
        e4 = null;
      } else
        f3 !== e4 && (e4 = null);
    }
  }
  jd(a3, b3, d4, e4, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a3, b3 = ld, c3 = b3.length, d4, e4 = "value" in kd ? kd.value : kd.textContent, f3 = e4.length;
  for (a3 = 0; a3 < c3 && b3[a3] === e4[a3]; a3++)
    ;
  var g2 = c3 - a3;
  for (d4 = 1; d4 <= g2 && b3[c3 - d4] === e4[f3 - d4]; d4++)
    ;
  return md = e4.slice(a3, 1 < d4 ? 1 - d4 : void 0);
}
function od(a3) {
  var b3 = a3.keyCode;
  "charCode" in a3 ? (a3 = a3.charCode, a3 === 0 && b3 === 13 && (a3 = 13)) : a3 = b3;
  a3 === 10 && (a3 = 13);
  return 32 <= a3 || a3 === 13 ? a3 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a3) {
  function b3(b4, d4, e4, f3, g2) {
    this._reactName = b4;
    this._targetInst = e4;
    this.type = d4;
    this.nativeEvent = f3;
    this.target = g2;
    this.currentTarget = null;
    for (var c3 in a3)
      a3.hasOwnProperty(c3) && (b4 = a3[c3], this[c3] = b4 ? b4(f3) : f3[c3]);
    this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b3.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a4 = this.nativeEvent;
    a4 && (a4.preventDefault ? a4.preventDefault() : typeof a4.returnValue !== "unknown" && (a4.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a4 = this.nativeEvent;
    a4 && (a4.stopPropagation ? a4.stopPropagation() : typeof a4.cancelBubble !== "unknown" && (a4.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b3;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a3) {
  return a3.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a3) {
  return a3.relatedTarget === void 0 ? a3.fromElement === a3.srcElement ? a3.toElement : a3.fromElement : a3.relatedTarget;
}, movementX: function(a3) {
  if ("movementX" in a3)
    return a3.movementX;
  a3 !== yd && (yd && a3.type === "mousemove" ? (wd = a3.screenX - yd.screenX, xd = a3.screenY - yd.screenY) : xd = wd = 0, yd = a3);
  return wd;
}, movementY: function(a3) {
  return "movementY" in a3 ? a3.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a3) {
  return "clipboardData" in a3 ? a3.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a3) {
  var b3 = this.nativeEvent;
  return b3.getModifierState ? b3.getModifierState(a3) : (a3 = Od[a3]) ? !!b3[a3] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a3) {
  if (a3.key) {
    var b3 = Md[a3.key] || a3.key;
    if (b3 !== "Unidentified")
      return b3;
  }
  return a3.type === "keypress" ? (a3 = od(a3), a3 === 13 ? "Enter" : String.fromCharCode(a3)) : a3.type === "keydown" || a3.type === "keyup" ? Nd[a3.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a3) {
  return a3.type === "keypress" ? od(a3) : 0;
}, keyCode: function(a3) {
  return a3.type === "keydown" || a3.type === "keyup" ? a3.keyCode : 0;
}, which: function(a3) {
  return a3.type === "keypress" ? od(a3) : a3.type === "keydown" || a3.type === "keyup" ? a3.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a3) {
    return "deltaX" in a3 ? a3.deltaX : "wheelDeltaX" in a3 ? -a3.wheelDeltaX : 0;
  },
  deltaY: function(a3) {
    return "deltaY" in a3 ? a3.deltaY : "wheelDeltaY" in a3 ? -a3.wheelDeltaY : "wheelDelta" in a3 ? -a3.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a3, b3) {
  switch (a3) {
    case "keyup":
      return $d.indexOf(b3.keyCode) !== -1;
    case "keydown":
      return b3.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a3) {
  a3 = a3.detail;
  return typeof a3 === "object" && "data" in a3 ? a3.data : null;
}
var ie = false;
function je(a3, b3) {
  switch (a3) {
    case "compositionend":
      return he(b3);
    case "keypress":
      if (b3.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a3 = b3.data, a3 === ee && fe ? null : a3;
    default:
      return null;
  }
}
function ke(a3, b3) {
  if (ie)
    return a3 === "compositionend" || !ae && ge(a3, b3) ? (a3 = nd(), md = ld = kd = null, ie = false, a3) : null;
  switch (a3) {
    case "paste":
      return null;
    case "keypress":
      if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
        if (b3.char && 1 < b3.char.length)
          return b3.char;
        if (b3.which)
          return String.fromCharCode(b3.which);
      }
      return null;
    case "compositionend":
      return de && b3.locale !== "ko" ? null : b3.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a3) {
  var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
  return b3 === "input" ? !!le[a3.type] : b3 === "textarea" ? true : false;
}
function ne(a3, b3, c3, d4) {
  Eb(d4);
  b3 = oe(b3, "onChange");
  0 < b3.length && (c3 = new td("onChange", "change", null, c3, d4), a3.push({event: c3, listeners: b3}));
}
var pe = null;
var qe = null;
function re(a3) {
  se(a3, 0);
}
function te(a3) {
  var b3 = ue(a3);
  if (Wa(b3))
    return a3;
}
function ve(a3, b3) {
  if (a3 === "change")
    return b3;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a3) {
  if (a3.propertyName === "value" && te(qe)) {
    var b3 = [];
    ne(b3, qe, a3, xb(a3));
    a3 = re;
    if (Kb)
      a3(b3);
    else {
      Kb = true;
      try {
        Gb(a3, b3);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a3, b3, c3) {
  a3 === "focusin" ? (Ae(), pe = b3, qe = c3, pe.attachEvent("onpropertychange", Be)) : a3 === "focusout" && Ae();
}
function De(a3) {
  if (a3 === "selectionchange" || a3 === "keyup" || a3 === "keydown")
    return te(qe);
}
function Ee(a3, b3) {
  if (a3 === "click")
    return te(b3);
}
function Fe(a3, b3) {
  if (a3 === "input" || a3 === "change")
    return te(b3);
}
function Ge(a3, b3) {
  return a3 === b3 && (a3 !== 0 || 1 / a3 === 1 / b3) || a3 !== a3 && b3 !== b3;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a3, b3) {
  if (He(a3, b3))
    return true;
  if (typeof a3 !== "object" || a3 === null || typeof b3 !== "object" || b3 === null)
    return false;
  var c3 = Object.keys(a3), d4 = Object.keys(b3);
  if (c3.length !== d4.length)
    return false;
  for (d4 = 0; d4 < c3.length; d4++)
    if (!Ie.call(b3, c3[d4]) || !He(a3[c3[d4]], b3[c3[d4]]))
      return false;
  return true;
}
function Ke(a3) {
  for (; a3 && a3.firstChild; )
    a3 = a3.firstChild;
  return a3;
}
function Le(a3, b3) {
  var c3 = Ke(a3);
  a3 = 0;
  for (var d4; c3; ) {
    if (c3.nodeType === 3) {
      d4 = a3 + c3.textContent.length;
      if (a3 <= b3 && d4 >= b3)
        return {node: c3, offset: b3 - a3};
      a3 = d4;
    }
    a: {
      for (; c3; ) {
        if (c3.nextSibling) {
          c3 = c3.nextSibling;
          break a;
        }
        c3 = c3.parentNode;
      }
      c3 = void 0;
    }
    c3 = Ke(c3);
  }
}
function Me(a3, b3) {
  return a3 && b3 ? a3 === b3 ? true : a3 && a3.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Me(a3, b3.parentNode) : "contains" in a3 ? a3.contains(b3) : a3.compareDocumentPosition ? !!(a3.compareDocumentPosition(b3) & 16) : false : false;
}
function Ne() {
  for (var a3 = window, b3 = Xa(); b3 instanceof a3.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b3.contentWindow.location.href === "string";
    } catch (d4) {
      c3 = false;
    }
    if (c3)
      a3 = b3.contentWindow;
    else
      break;
    b3 = Xa(a3.document);
  }
  return b3;
}
function Oe(a3) {
  var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
  return b3 && (b3 === "input" && (a3.type === "text" || a3.type === "search" || a3.type === "tel" || a3.type === "url" || a3.type === "password") || b3 === "textarea" || a3.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a3, b3, c3) {
  var d4 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d4) || (d4 = Qe, "selectionStart" in d4 && Oe(d4) ? d4 = {start: d4.selectionStart, end: d4.selectionEnd} : (d4 = (d4.ownerDocument && d4.ownerDocument.defaultView || window).getSelection(), d4 = {anchorNode: d4.anchorNode, anchorOffset: d4.anchorOffset, focusNode: d4.focusNode, focusOffset: d4.focusOffset}), Se && Je(Se, d4) || (Se = d4, d4 = oe(Re, "onSelect"), 0 < d4.length && (b3 = new td("onSelect", "select", null, b3, c3), a3.push({event: b3, listeners: d4}), b3.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a3, b3, c3) {
  var d4 = a3.type || "unknown-event";
  a3.currentTarget = c3;
  Yb(d4, b3, void 0, a3);
  a3.currentTarget = null;
}
function se(a3, b3) {
  b3 = (b3 & 4) !== 0;
  for (var c3 = 0; c3 < a3.length; c3++) {
    var d4 = a3[c3], e4 = d4.event;
    d4 = d4.listeners;
    a: {
      var f3 = void 0;
      if (b3)
        for (var g2 = d4.length - 1; 0 <= g2; g2--) {
          var h4 = d4[g2], k3 = h4.instance, l3 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f3 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l3);
          f3 = k3;
        }
      else
        for (g2 = 0; g2 < d4.length; g2++) {
          h4 = d4[g2];
          k3 = h4.instance;
          l3 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f3 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l3);
          f3 = k3;
        }
    }
  }
  if (Ub)
    throw a3 = Vb, Ub = false, Vb = null, a3;
}
function G(a3, b3) {
  var c3 = $e(b3), d4 = a3 + "__bubble";
  c3.has(d4) || (af(b3, a3, 2, false), c3.add(d4));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a3) {
  a3[bf] || (a3[bf] = true, ba.forEach(function(b3) {
    Ye.has(b3) || df(b3, false, a3, null);
    df(b3, true, a3, null);
  }));
}
function df(a3, b3, c3, d4) {
  var e4 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f3 = c3;
  a3 === "selectionchange" && c3.nodeType !== 9 && (f3 = c3.ownerDocument);
  if (d4 !== null && !b3 && Ye.has(a3)) {
    if (a3 !== "scroll")
      return;
    e4 |= 2;
    f3 = d4;
  }
  var g2 = $e(f3), h4 = a3 + "__" + (b3 ? "capture" : "bubble");
  g2.has(h4) || (b3 && (e4 |= 4), af(f3, a3, e4, b3), g2.add(h4));
}
function af(a3, b3, c3, d4) {
  var e4 = Nc.get(b3);
  switch (e4 === void 0 ? 2 : e4) {
    case 0:
      e4 = gd;
      break;
    case 1:
      e4 = id;
      break;
    default:
      e4 = hd;
  }
  c3 = e4.bind(null, b3, c3, a3);
  e4 = void 0;
  !Pb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e4 = true);
  d4 ? e4 !== void 0 ? a3.addEventListener(b3, c3, {capture: true, passive: e4}) : a3.addEventListener(b3, c3, true) : e4 !== void 0 ? a3.addEventListener(b3, c3, {passive: e4}) : a3.addEventListener(b3, c3, false);
}
function jd(a3, b3, c3, d4, e4) {
  var f3 = d4;
  if ((b3 & 1) === 0 && (b3 & 2) === 0 && d4 !== null)
    a:
      for (; ; ) {
        if (d4 === null)
          return;
        var g2 = d4.tag;
        if (g2 === 3 || g2 === 4) {
          var h4 = d4.stateNode.containerInfo;
          if (h4 === e4 || h4.nodeType === 8 && h4.parentNode === e4)
            break;
          if (g2 === 4)
            for (g2 = d4.return; g2 !== null; ) {
              var k3 = g2.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g2.stateNode.containerInfo, k3 === e4 || k3.nodeType === 8 && k3.parentNode === e4)
                  return;
              }
              g2 = g2.return;
            }
          for (; h4 !== null; ) {
            g2 = wc(h4);
            if (g2 === null)
              return;
            k3 = g2.tag;
            if (k3 === 5 || k3 === 6) {
              d4 = f3 = g2;
              continue a;
            }
            h4 = h4.parentNode;
          }
        }
        d4 = d4.return;
      }
  Nb(function() {
    var d5 = f3, e5 = xb(c3), g3 = [];
    a: {
      var h5 = Mc.get(a3);
      if (h5 !== void 0) {
        var k4 = td, x4 = a3;
        switch (a3) {
          case "keypress":
            if (od(c3) === 0)
              break a;
          case "keydown":
          case "keyup":
            k4 = Rd;
            break;
          case "focusin":
            x4 = "focus";
            k4 = Fd;
            break;
          case "focusout":
            x4 = "blur";
            k4 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k4 = Fd;
            break;
          case "click":
            if (c3.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k4 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k4 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k4 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k4 = Hd;
            break;
          case Lc:
            k4 = Xd;
            break;
          case "scroll":
            k4 = vd;
            break;
          case "wheel":
            k4 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k4 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k4 = Td;
        }
        var w4 = (b3 & 4) !== 0, z3 = !w4 && a3 === "scroll", u4 = w4 ? h5 !== null ? h5 + "Capture" : null : h5;
        w4 = [];
        for (var t4 = d5, q2; t4 !== null; ) {
          q2 = t4;
          var v3 = q2.stateNode;
          q2.tag === 5 && v3 !== null && (q2 = v3, u4 !== null && (v3 = Ob(t4, u4), v3 != null && w4.push(ef(t4, v3, q2))));
          if (z3)
            break;
          t4 = t4.return;
        }
        0 < w4.length && (h5 = new k4(h5, x4, null, c3, e5), g3.push({event: h5, listeners: w4}));
      }
    }
    if ((b3 & 7) === 0) {
      a: {
        h5 = a3 === "mouseover" || a3 === "pointerover";
        k4 = a3 === "mouseout" || a3 === "pointerout";
        if (h5 && (b3 & 16) === 0 && (x4 = c3.relatedTarget || c3.fromElement) && (wc(x4) || x4[ff]))
          break a;
        if (k4 || h5) {
          h5 = e5.window === e5 ? e5 : (h5 = e5.ownerDocument) ? h5.defaultView || h5.parentWindow : window;
          if (k4) {
            if (x4 = c3.relatedTarget || c3.toElement, k4 = d5, x4 = x4 ? wc(x4) : null, x4 !== null && (z3 = Zb(x4), x4 !== z3 || x4.tag !== 5 && x4.tag !== 6))
              x4 = null;
          } else
            k4 = null, x4 = d5;
          if (k4 !== x4) {
            w4 = Bd;
            v3 = "onMouseLeave";
            u4 = "onMouseEnter";
            t4 = "mouse";
            if (a3 === "pointerout" || a3 === "pointerover")
              w4 = Td, v3 = "onPointerLeave", u4 = "onPointerEnter", t4 = "pointer";
            z3 = k4 == null ? h5 : ue(k4);
            q2 = x4 == null ? h5 : ue(x4);
            h5 = new w4(v3, t4 + "leave", k4, c3, e5);
            h5.target = z3;
            h5.relatedTarget = q2;
            v3 = null;
            wc(e5) === d5 && (w4 = new w4(u4, t4 + "enter", x4, c3, e5), w4.target = q2, w4.relatedTarget = z3, v3 = w4);
            z3 = v3;
            if (k4 && x4)
              b: {
                w4 = k4;
                u4 = x4;
                t4 = 0;
                for (q2 = w4; q2; q2 = gf(q2))
                  t4++;
                q2 = 0;
                for (v3 = u4; v3; v3 = gf(v3))
                  q2++;
                for (; 0 < t4 - q2; )
                  w4 = gf(w4), t4--;
                for (; 0 < q2 - t4; )
                  u4 = gf(u4), q2--;
                for (; t4--; ) {
                  if (w4 === u4 || u4 !== null && w4 === u4.alternate)
                    break b;
                  w4 = gf(w4);
                  u4 = gf(u4);
                }
                w4 = null;
              }
            else
              w4 = null;
            k4 !== null && hf(g3, h5, k4, w4, false);
            x4 !== null && z3 !== null && hf(g3, z3, x4, w4, true);
          }
        }
      }
      a: {
        h5 = d5 ? ue(d5) : window;
        k4 = h5.nodeName && h5.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h5.type === "file")
          var J2 = ve;
        else if (me(h5))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k4 = h5.nodeName) && k4.toLowerCase() === "input" && (h5.type === "checkbox" || h5.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a3, d5))) {
          ne(g3, J2, c3, e5);
          break a;
        }
        K2 && K2(a3, h5, d5);
        a3 === "focusout" && (K2 = h5._wrapperState) && K2.controlled && h5.type === "number" && bb(h5, "number", h5.value);
      }
      K2 = d5 ? ue(d5) : window;
      switch (a3) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d5, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c3, e5);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c3, e5);
      }
      var Q3;
      if (ae)
        b: {
          switch (a3) {
            case "compositionstart":
              var L3 = "onCompositionStart";
              break b;
            case "compositionend":
              L3 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L3 = "onCompositionUpdate";
              break b;
          }
          L3 = void 0;
        }
      else
        ie ? ge(a3, c3) && (L3 = "onCompositionEnd") : a3 === "keydown" && c3.keyCode === 229 && (L3 = "onCompositionStart");
      L3 && (de && c3.locale !== "ko" && (ie || L3 !== "onCompositionStart" ? L3 === "onCompositionEnd" && ie && (Q3 = nd()) : (kd = e5, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d5, L3), 0 < K2.length && (L3 = new Ld(L3, a3, null, c3, e5), g3.push({event: L3, listeners: K2}), Q3 ? L3.data = Q3 : (Q3 = he(c3), Q3 !== null && (L3.data = Q3))));
      if (Q3 = ce ? je(a3, c3) : ke(a3, c3))
        d5 = oe(d5, "onBeforeInput"), 0 < d5.length && (e5 = new Ld("onBeforeInput", "beforeinput", null, c3, e5), g3.push({event: e5, listeners: d5}), e5.data = Q3);
    }
    se(g3, b3);
  });
}
function ef(a3, b3, c3) {
  return {instance: a3, listener: b3, currentTarget: c3};
}
function oe(a3, b3) {
  for (var c3 = b3 + "Capture", d4 = []; a3 !== null; ) {
    var e4 = a3, f3 = e4.stateNode;
    e4.tag === 5 && f3 !== null && (e4 = f3, f3 = Ob(a3, c3), f3 != null && d4.unshift(ef(a3, f3, e4)), f3 = Ob(a3, b3), f3 != null && d4.push(ef(a3, f3, e4)));
    a3 = a3.return;
  }
  return d4;
}
function gf(a3) {
  if (a3 === null)
    return null;
  do
    a3 = a3.return;
  while (a3 && a3.tag !== 5);
  return a3 ? a3 : null;
}
function hf(a3, b3, c3, d4, e4) {
  for (var f3 = b3._reactName, g2 = []; c3 !== null && c3 !== d4; ) {
    var h4 = c3, k3 = h4.alternate, l3 = h4.stateNode;
    if (k3 !== null && k3 === d4)
      break;
    h4.tag === 5 && l3 !== null && (h4 = l3, e4 ? (k3 = Ob(c3, f3), k3 != null && g2.unshift(ef(c3, k3, h4))) : e4 || (k3 = Ob(c3, f3), k3 != null && g2.push(ef(c3, k3, h4))));
    c3 = c3.return;
  }
  g2.length !== 0 && a3.push({event: b3, listeners: g2});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a3, b3) {
  switch (a3) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b3.autoFocus;
  }
  return false;
}
function nf(a3, b3) {
  return a3 === "textarea" || a3 === "option" || a3 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a3) {
  a3.nodeType === 1 ? a3.textContent = "" : a3.nodeType === 9 && (a3 = a3.body, a3 != null && (a3.textContent = ""));
}
function rf(a3) {
  for (; a3 != null; a3 = a3.nextSibling) {
    var b3 = a3.nodeType;
    if (b3 === 1 || b3 === 3)
      break;
  }
  return a3;
}
function sf(a3) {
  a3 = a3.previousSibling;
  for (var b3 = 0; a3; ) {
    if (a3.nodeType === 8) {
      var c3 = a3.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b3 === 0)
          return a3;
        b3--;
      } else
        c3 === "/$" && b3++;
    }
    a3 = a3.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a3) {
  return {$$typeof: Ga, toString: a3, valueOf: a3};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a3) {
  var b3 = a3[wf];
  if (b3)
    return b3;
  for (var c3 = a3.parentNode; c3; ) {
    if (b3 = c3[ff] || c3[wf]) {
      c3 = b3.alternate;
      if (b3.child !== null || c3 !== null && c3.child !== null)
        for (a3 = sf(a3); a3 !== null; ) {
          if (c3 = a3[wf])
            return c3;
          a3 = sf(a3);
        }
      return b3;
    }
    a3 = c3;
    c3 = a3.parentNode;
  }
  return null;
}
function Cb(a3) {
  a3 = a3[wf] || a3[ff];
  return !a3 || a3.tag !== 5 && a3.tag !== 6 && a3.tag !== 13 && a3.tag !== 3 ? null : a3;
}
function ue(a3) {
  if (a3.tag === 5 || a3.tag === 6)
    return a3.stateNode;
  throw Error(y(33));
}
function Db(a3) {
  return a3[xf] || null;
}
function $e(a3) {
  var b3 = a3[yf];
  b3 === void 0 && (b3 = a3[yf] = new Set());
  return b3;
}
var zf = [];
var Af = -1;
function Bf(a3) {
  return {current: a3};
}
function H(a3) {
  0 > Af || (a3.current = zf[Af], zf[Af] = null, Af--);
}
function I(a3, b3) {
  Af++;
  zf[Af] = a3.current;
  a3.current = b3;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a3, b3) {
  var c3 = a3.type.contextTypes;
  if (!c3)
    return Cf;
  var d4 = a3.stateNode;
  if (d4 && d4.__reactInternalMemoizedUnmaskedChildContext === b3)
    return d4.__reactInternalMemoizedMaskedChildContext;
  var e4 = {}, f3;
  for (f3 in c3)
    e4[f3] = b3[f3];
  d4 && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = b3, a3.__reactInternalMemoizedMaskedChildContext = e4);
  return e4;
}
function Ff(a3) {
  a3 = a3.childContextTypes;
  return a3 !== null && a3 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a3, b3, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b3);
  I(N, c3);
}
function If(a3, b3, c3) {
  var d4 = a3.stateNode;
  a3 = b3.childContextTypes;
  if (typeof d4.getChildContext !== "function")
    return c3;
  d4 = d4.getChildContext();
  for (var e4 in d4)
    if (!(e4 in a3))
      throw Error(y(108, Ra(b3) || "Unknown", e4));
  return objectAssign({}, c3, d4);
}
function Jf(a3) {
  a3 = (a3 = a3.stateNode) && a3.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a3);
  I(N, N.current);
  return true;
}
function Kf(a3, b3, c3) {
  var d4 = a3.stateNode;
  if (!d4)
    throw Error(y(169));
  c3 ? (a3 = If(a3, b3, Df), d4.__reactInternalMemoizedMergedChildContext = a3, H(N), H(M), I(M, a3)) : H(N);
  I(N, c3);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a3) {
  switch (a3) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a3, b3) {
  a3 = fg(a3);
  return Nf(a3, b3);
}
function hg(a3, b3, c3) {
  a3 = fg(a3);
  return Of(a3, b3, c3);
}
function ig() {
  if (bg !== null) {
    var a3 = bg;
    bg = null;
    Pf(a3);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a3 = 0;
    try {
      var b3 = ag;
      gg(99, function() {
        for (; a3 < b3.length; a3++) {
          var c3 = b3[a3];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a3 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a3, b3) {
  if (a3 && a3.defaultProps) {
    b3 = objectAssign({}, b3);
    a3 = a3.defaultProps;
    for (var c3 in a3)
      b3[c3] === void 0 && (b3[c3] = a3[c3]);
    return b3;
  }
  return b3;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a3) {
  var b3 = mg.current;
  H(mg);
  a3.type._context._currentValue = b3;
}
function sg(a3, b3) {
  for (; a3 !== null; ) {
    var c3 = a3.alternate;
    if ((a3.childLanes & b3) === b3)
      if (c3 === null || (c3.childLanes & b3) === b3)
        break;
      else
        c3.childLanes |= b3;
    else
      a3.childLanes |= b3, c3 !== null && (c3.childLanes |= b3);
    a3 = a3.return;
  }
}
function tg(a3, b3) {
  ng = a3;
  pg = og = null;
  a3 = a3.dependencies;
  a3 !== null && a3.firstContext !== null && ((a3.lanes & b3) !== 0 && (ug = true), a3.firstContext = null);
}
function vg(a3, b3) {
  if (pg !== a3 && b3 !== false && b3 !== 0) {
    if (typeof b3 !== "number" || b3 === 1073741823)
      pg = a3, b3 = 1073741823;
    b3 = {context: a3, observedBits: b3, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b3;
      ng.dependencies = {lanes: 0, firstContext: b3, responders: null};
    } else
      og = og.next = b3;
  }
  return a3._currentValue;
}
var wg = false;
function xg(a3) {
  a3.updateQueue = {baseState: a3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a3, b3) {
  a3 = a3.updateQueue;
  b3.updateQueue === a3 && (b3.updateQueue = {baseState: a3.baseState, firstBaseUpdate: a3.firstBaseUpdate, lastBaseUpdate: a3.lastBaseUpdate, shared: a3.shared, effects: a3.effects});
}
function zg(a3, b3) {
  return {eventTime: a3, lane: b3, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a3, b3) {
  a3 = a3.updateQueue;
  if (a3 !== null) {
    a3 = a3.shared;
    var c3 = a3.pending;
    c3 === null ? b3.next = b3 : (b3.next = c3.next, c3.next = b3);
    a3.pending = b3;
  }
}
function Bg(a3, b3) {
  var c3 = a3.updateQueue, d4 = a3.alternate;
  if (d4 !== null && (d4 = d4.updateQueue, c3 === d4)) {
    var e4 = null, f3 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g2 = {eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null};
        f3 === null ? e4 = f3 = g2 : f3 = f3.next = g2;
        c3 = c3.next;
      } while (c3 !== null);
      f3 === null ? e4 = f3 = b3 : f3 = f3.next = b3;
    } else
      e4 = f3 = b3;
    c3 = {baseState: d4.baseState, firstBaseUpdate: e4, lastBaseUpdate: f3, shared: d4.shared, effects: d4.effects};
    a3.updateQueue = c3;
    return;
  }
  a3 = c3.lastBaseUpdate;
  a3 === null ? c3.firstBaseUpdate = b3 : a3.next = b3;
  c3.lastBaseUpdate = b3;
}
function Cg(a3, b3, c3, d4) {
  var e4 = a3.updateQueue;
  wg = false;
  var f3 = e4.firstBaseUpdate, g2 = e4.lastBaseUpdate, h4 = e4.shared.pending;
  if (h4 !== null) {
    e4.shared.pending = null;
    var k3 = h4, l3 = k3.next;
    k3.next = null;
    g2 === null ? f3 = l3 : g2.next = l3;
    g2 = k3;
    var n3 = a3.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A3 = n3.lastBaseUpdate;
      A3 !== g2 && (A3 === null ? n3.firstBaseUpdate = l3 : A3.next = l3, n3.lastBaseUpdate = k3);
    }
  }
  if (f3 !== null) {
    A3 = e4.baseState;
    g2 = 0;
    n3 = l3 = k3 = null;
    do {
      h4 = f3.lane;
      var p3 = f3.eventTime;
      if ((d4 & h4) === h4) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f3.tag,
          payload: f3.payload,
          callback: f3.callback,
          next: null
        });
        a: {
          var C2 = a3, x4 = f3;
          h4 = b3;
          p3 = c3;
          switch (x4.tag) {
            case 1:
              C2 = x4.payload;
              if (typeof C2 === "function") {
                A3 = C2.call(p3, A3, h4);
                break a;
              }
              A3 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x4.payload;
              h4 = typeof C2 === "function" ? C2.call(p3, A3, h4) : C2;
              if (h4 === null || h4 === void 0)
                break a;
              A3 = objectAssign({}, A3, h4);
              break a;
            case 2:
              wg = true;
          }
        }
        f3.callback !== null && (a3.flags |= 32, h4 = e4.effects, h4 === null ? e4.effects = [f3] : h4.push(f3));
      } else
        p3 = {eventTime: p3, lane: h4, tag: f3.tag, payload: f3.payload, callback: f3.callback, next: null}, n3 === null ? (l3 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g2 |= h4;
      f3 = f3.next;
      if (f3 === null)
        if (h4 = e4.shared.pending, h4 === null)
          break;
        else
          f3 = h4.next, h4.next = null, e4.lastBaseUpdate = h4, e4.shared.pending = null;
    } while (1);
    n3 === null && (k3 = A3);
    e4.baseState = k3;
    e4.firstBaseUpdate = l3;
    e4.lastBaseUpdate = n3;
    Dg |= g2;
    a3.lanes = g2;
    a3.memoizedState = A3;
  }
}
function Eg(a3, b3, c3) {
  a3 = b3.effects;
  b3.effects = null;
  if (a3 !== null)
    for (b3 = 0; b3 < a3.length; b3++) {
      var d4 = a3[b3], e4 = d4.callback;
      if (e4 !== null) {
        d4.callback = null;
        d4 = c3;
        if (typeof e4 !== "function")
          throw Error(y(191, e4));
        e4.call(d4);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a3, b3, c3, d4) {
  b3 = a3.memoizedState;
  c3 = c3(d4, b3);
  c3 = c3 === null || c3 === void 0 ? b3 : objectAssign({}, b3, c3);
  a3.memoizedState = c3;
  a3.lanes === 0 && (a3.updateQueue.baseState = c3);
}
var Kg = {isMounted: function(a3) {
  return (a3 = a3._reactInternals) ? Zb(a3) === a3 : false;
}, enqueueSetState: function(a3, b3, c3) {
  a3 = a3._reactInternals;
  var d4 = Hg(), e4 = Ig(a3), f3 = zg(d4, e4);
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a3, f3);
  Jg(a3, e4, d4);
}, enqueueReplaceState: function(a3, b3, c3) {
  a3 = a3._reactInternals;
  var d4 = Hg(), e4 = Ig(a3), f3 = zg(d4, e4);
  f3.tag = 1;
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a3, f3);
  Jg(a3, e4, d4);
}, enqueueForceUpdate: function(a3, b3) {
  a3 = a3._reactInternals;
  var c3 = Hg(), d4 = Ig(a3), e4 = zg(c3, d4);
  e4.tag = 2;
  b3 !== void 0 && b3 !== null && (e4.callback = b3);
  Ag(a3, e4);
  Jg(a3, d4, c3);
}};
function Lg(a3, b3, c3, d4, e4, f3, g2) {
  a3 = a3.stateNode;
  return typeof a3.shouldComponentUpdate === "function" ? a3.shouldComponentUpdate(d4, f3, g2) : b3.prototype && b3.prototype.isPureReactComponent ? !Je(c3, d4) || !Je(e4, f3) : true;
}
function Mg(a3, b3, c3) {
  var d4 = false, e4 = Cf;
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? f3 = vg(f3) : (e4 = Ff(b3) ? Df : M.current, d4 = b3.contextTypes, f3 = (d4 = d4 !== null && d4 !== void 0) ? Ef(a3, e4) : Cf);
  b3 = new b3(c3, f3);
  a3.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
  b3.updater = Kg;
  a3.stateNode = b3;
  b3._reactInternals = a3;
  d4 && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = e4, a3.__reactInternalMemoizedMaskedChildContext = f3);
  return b3;
}
function Ng(a3, b3, c3, d4) {
  a3 = b3.state;
  typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c3, d4);
  typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c3, d4);
  b3.state !== a3 && Kg.enqueueReplaceState(b3, b3.state, null);
}
function Og(a3, b3, c3, d4) {
  var e4 = a3.stateNode;
  e4.props = c3;
  e4.state = a3.memoizedState;
  e4.refs = Fg;
  xg(a3);
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? e4.context = vg(f3) : (f3 = Ff(b3) ? Df : M.current, e4.context = Ef(a3, f3));
  Cg(a3, c3, e4, d4);
  e4.state = a3.memoizedState;
  f3 = b3.getDerivedStateFromProps;
  typeof f3 === "function" && (Gg(a3, b3, f3, c3), e4.state = a3.memoizedState);
  typeof b3.getDerivedStateFromProps === "function" || typeof e4.getSnapshotBeforeUpdate === "function" || typeof e4.UNSAFE_componentWillMount !== "function" && typeof e4.componentWillMount !== "function" || (b3 = e4.state, typeof e4.componentWillMount === "function" && e4.componentWillMount(), typeof e4.UNSAFE_componentWillMount === "function" && e4.UNSAFE_componentWillMount(), b3 !== e4.state && Kg.enqueueReplaceState(e4, e4.state, null), Cg(a3, c3, e4, d4), e4.state = a3.memoizedState);
  typeof e4.componentDidMount === "function" && (a3.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a3, b3, c3) {
  a3 = c3.ref;
  if (a3 !== null && typeof a3 !== "function" && typeof a3 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d4 = c3.stateNode;
      }
      if (!d4)
        throw Error(y(147, a3));
      var e4 = "" + a3;
      if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === e4)
        return b3.ref;
      b3 = function(a4) {
        var b4 = d4.refs;
        b4 === Fg && (b4 = d4.refs = {});
        a4 === null ? delete b4[e4] : b4[e4] = a4;
      };
      b3._stringRef = e4;
      return b3;
    }
    if (typeof a3 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a3));
  }
  return a3;
}
function Rg(a3, b3) {
  if (a3.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b3) === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : b3));
}
function Sg(a3) {
  function b3(b4, c4) {
    if (a3) {
      var d5 = b4.lastEffect;
      d5 !== null ? (d5.nextEffect = c4, b4.lastEffect = c4) : b4.firstEffect = b4.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d5) {
    if (!a3)
      return null;
    for (; d5 !== null; )
      b3(c4, d5), d5 = d5.sibling;
    return null;
  }
  function d4(a4, b4) {
    for (a4 = new Map(); b4 !== null; )
      b4.key !== null ? a4.set(b4.key, b4) : a4.set(b4.index, b4), b4 = b4.sibling;
    return a4;
  }
  function e4(a4, b4) {
    a4 = Tg(a4, b4);
    a4.index = 0;
    a4.sibling = null;
    return a4;
  }
  function f3(b4, c4, d5) {
    b4.index = d5;
    if (!a3)
      return c4;
    d5 = b4.alternate;
    if (d5 !== null)
      return d5 = d5.index, d5 < c4 ? (b4.flags = 2, c4) : d5;
    b4.flags = 2;
    return c4;
  }
  function g2(b4) {
    a3 && b4.alternate === null && (b4.flags = 2);
    return b4;
  }
  function h4(a4, b4, c4, d5) {
    if (b4 === null || b4.tag !== 6)
      return b4 = Ug(c4, a4.mode, d5), b4.return = a4, b4;
    b4 = e4(b4, c4);
    b4.return = a4;
    return b4;
  }
  function k3(a4, b4, c4, d5) {
    if (b4 !== null && b4.elementType === c4.type)
      return d5 = e4(b4, c4.props), d5.ref = Qg(a4, b4, c4), d5.return = a4, d5;
    d5 = Vg(c4.type, c4.key, c4.props, null, a4.mode, d5);
    d5.ref = Qg(a4, b4, c4);
    d5.return = a4;
    return d5;
  }
  function l3(a4, b4, c4, d5) {
    if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c4.containerInfo || b4.stateNode.implementation !== c4.implementation)
      return b4 = Wg(c4, a4.mode, d5), b4.return = a4, b4;
    b4 = e4(b4, c4.children || []);
    b4.return = a4;
    return b4;
  }
  function n3(a4, b4, c4, d5, f4) {
    if (b4 === null || b4.tag !== 7)
      return b4 = Xg(c4, a4.mode, d5, f4), b4.return = a4, b4;
    b4 = e4(b4, c4);
    b4.return = a4;
    return b4;
  }
  function A3(a4, b4, c4) {
    if (typeof b4 === "string" || typeof b4 === "number")
      return b4 = Ug("" + b4, a4.mode, c4), b4.return = a4, b4;
    if (typeof b4 === "object" && b4 !== null) {
      switch (b4.$$typeof) {
        case sa:
          return c4 = Vg(b4.type, b4.key, b4.props, null, a4.mode, c4), c4.ref = Qg(a4, null, b4), c4.return = a4, c4;
        case ta:
          return b4 = Wg(b4, a4.mode, c4), b4.return = a4, b4;
      }
      if (Pg(b4) || La(b4))
        return b4 = Xg(b4, a4.mode, c4, null), b4.return = a4, b4;
      Rg(a4, b4);
    }
    return null;
  }
  function p3(a4, b4, c4, d5) {
    var e5 = b4 !== null ? b4.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e5 !== null ? null : h4(a4, b4, "" + c4, d5);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e5 ? c4.type === ua ? n3(a4, b4, c4.props.children, d5, e5) : k3(a4, b4, c4, d5) : null;
        case ta:
          return c4.key === e5 ? l3(a4, b4, c4, d5) : null;
      }
      if (Pg(c4) || La(c4))
        return e5 !== null ? null : n3(a4, b4, c4, d5, null);
      Rg(a4, c4);
    }
    return null;
  }
  function C2(a4, b4, c4, d5, e5) {
    if (typeof d5 === "string" || typeof d5 === "number")
      return a4 = a4.get(c4) || null, h4(b4, a4, "" + d5, e5);
    if (typeof d5 === "object" && d5 !== null) {
      switch (d5.$$typeof) {
        case sa:
          return a4 = a4.get(d5.key === null ? c4 : d5.key) || null, d5.type === ua ? n3(b4, a4, d5.props.children, e5, d5.key) : k3(b4, a4, d5, e5);
        case ta:
          return a4 = a4.get(d5.key === null ? c4 : d5.key) || null, l3(b4, a4, d5, e5);
      }
      if (Pg(d5) || La(d5))
        return a4 = a4.get(c4) || null, n3(b4, a4, d5, e5, null);
      Rg(b4, d5);
    }
    return null;
  }
  function x4(e5, g3, h5, k4) {
    for (var l4 = null, t4 = null, u4 = g3, z3 = g3 = 0, q2 = null; u4 !== null && z3 < h5.length; z3++) {
      u4.index > z3 ? (q2 = u4, u4 = null) : q2 = u4.sibling;
      var n4 = p3(e5, u4, h5[z3], k4);
      if (n4 === null) {
        u4 === null && (u4 = q2);
        break;
      }
      a3 && u4 && n4.alternate === null && b3(e5, u4);
      g3 = f3(n4, g3, z3);
      t4 === null ? l4 = n4 : t4.sibling = n4;
      t4 = n4;
      u4 = q2;
    }
    if (z3 === h5.length)
      return c3(e5, u4), l4;
    if (u4 === null) {
      for (; z3 < h5.length; z3++)
        u4 = A3(e5, h5[z3], k4), u4 !== null && (g3 = f3(u4, g3, z3), t4 === null ? l4 = u4 : t4.sibling = u4, t4 = u4);
      return l4;
    }
    for (u4 = d4(e5, u4); z3 < h5.length; z3++)
      q2 = C2(u4, e5, z3, h5[z3], k4), q2 !== null && (a3 && q2.alternate !== null && u4.delete(q2.key === null ? z3 : q2.key), g3 = f3(q2, g3, z3), t4 === null ? l4 = q2 : t4.sibling = q2, t4 = q2);
    a3 && u4.forEach(function(a4) {
      return b3(e5, a4);
    });
    return l4;
  }
  function w4(e5, g3, h5, k4) {
    var l4 = La(h5);
    if (typeof l4 !== "function")
      throw Error(y(150));
    h5 = l4.call(h5);
    if (h5 == null)
      throw Error(y(151));
    for (var t4 = l4 = null, u4 = g3, z3 = g3 = 0, q2 = null, n4 = h5.next(); u4 !== null && !n4.done; z3++, n4 = h5.next()) {
      u4.index > z3 ? (q2 = u4, u4 = null) : q2 = u4.sibling;
      var w5 = p3(e5, u4, n4.value, k4);
      if (w5 === null) {
        u4 === null && (u4 = q2);
        break;
      }
      a3 && u4 && w5.alternate === null && b3(e5, u4);
      g3 = f3(w5, g3, z3);
      t4 === null ? l4 = w5 : t4.sibling = w5;
      t4 = w5;
      u4 = q2;
    }
    if (n4.done)
      return c3(e5, u4), l4;
    if (u4 === null) {
      for (; !n4.done; z3++, n4 = h5.next())
        n4 = A3(e5, n4.value, k4), n4 !== null && (g3 = f3(n4, g3, z3), t4 === null ? l4 = n4 : t4.sibling = n4, t4 = n4);
      return l4;
    }
    for (u4 = d4(e5, u4); !n4.done; z3++, n4 = h5.next())
      n4 = C2(u4, e5, z3, n4.value, k4), n4 !== null && (a3 && n4.alternate !== null && u4.delete(n4.key === null ? z3 : n4.key), g3 = f3(n4, g3, z3), t4 === null ? l4 = n4 : t4.sibling = n4, t4 = n4);
    a3 && u4.forEach(function(a4) {
      return b3(e5, a4);
    });
    return l4;
  }
  return function(a4, d5, f4, h5) {
    var k4 = typeof f4 === "object" && f4 !== null && f4.type === ua && f4.key === null;
    k4 && (f4 = f4.props.children);
    var l4 = typeof f4 === "object" && f4 !== null;
    if (l4)
      switch (f4.$$typeof) {
        case sa:
          a: {
            l4 = f4.key;
            for (k4 = d5; k4 !== null; ) {
              if (k4.key === l4) {
                switch (k4.tag) {
                  case 7:
                    if (f4.type === ua) {
                      c3(a4, k4.sibling);
                      d5 = e4(k4, f4.props.children);
                      d5.return = a4;
                      a4 = d5;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f4.type) {
                      c3(a4, k4.sibling);
                      d5 = e4(k4, f4.props);
                      d5.ref = Qg(a4, k4, f4);
                      d5.return = a4;
                      a4 = d5;
                      break a;
                    }
                }
                c3(a4, k4);
                break;
              } else
                b3(a4, k4);
              k4 = k4.sibling;
            }
            f4.type === ua ? (d5 = Xg(f4.props.children, a4.mode, h5, f4.key), d5.return = a4, a4 = d5) : (h5 = Vg(f4.type, f4.key, f4.props, null, a4.mode, h5), h5.ref = Qg(a4, d5, f4), h5.return = a4, a4 = h5);
          }
          return g2(a4);
        case ta:
          a: {
            for (k4 = f4.key; d5 !== null; ) {
              if (d5.key === k4)
                if (d5.tag === 4 && d5.stateNode.containerInfo === f4.containerInfo && d5.stateNode.implementation === f4.implementation) {
                  c3(a4, d5.sibling);
                  d5 = e4(d5, f4.children || []);
                  d5.return = a4;
                  a4 = d5;
                  break a;
                } else {
                  c3(a4, d5);
                  break;
                }
              else
                b3(a4, d5);
              d5 = d5.sibling;
            }
            d5 = Wg(f4, a4.mode, h5);
            d5.return = a4;
            a4 = d5;
          }
          return g2(a4);
      }
    if (typeof f4 === "string" || typeof f4 === "number")
      return f4 = "" + f4, d5 !== null && d5.tag === 6 ? (c3(a4, d5.sibling), d5 = e4(d5, f4), d5.return = a4, a4 = d5) : (c3(a4, d5), d5 = Ug(f4, a4.mode, h5), d5.return = a4, a4 = d5), g2(a4);
    if (Pg(f4))
      return x4(a4, d5, f4, h5);
    if (La(f4))
      return w4(a4, d5, f4, h5);
    l4 && Rg(a4, f4);
    if (typeof f4 === "undefined" && !k4)
      switch (a4.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a4.type) || "Component"));
      }
    return c3(a4, d5);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a3) {
  if (a3 === $g)
    throw Error(y(174));
  return a3;
}
function eh(a3, b3) {
  I(ch, b3);
  I(bh, a3);
  I(ah, $g);
  a3 = b3.nodeType;
  switch (a3) {
    case 9:
    case 11:
      b3 = (b3 = b3.documentElement) ? b3.namespaceURI : mb(null, "");
      break;
    default:
      a3 = a3 === 8 ? b3.parentNode : b3, b3 = a3.namespaceURI || null, a3 = a3.tagName, b3 = mb(b3, a3);
  }
  H(ah);
  I(ah, b3);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a3) {
  dh(ch.current);
  var b3 = dh(ah.current);
  var c3 = mb(b3, a3.type);
  b3 !== c3 && (I(bh, a3), I(ah, c3));
}
function hh(a3) {
  bh.current === a3 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a3) {
  for (var b3 = a3; b3 !== null; ) {
    if (b3.tag === 13) {
      var c3 = b3.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b3;
    } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
      if ((b3.flags & 64) !== 0)
        return b3;
    } else if (b3.child !== null) {
      b3.child.return = b3;
      b3 = b3.child;
      continue;
    }
    if (b3 === a3)
      break;
    for (; b3.sibling === null; ) {
      if (b3.return === null || b3.return === a3)
        return null;
      b3 = b3.return;
    }
    b3.sibling.return = b3.return;
    b3 = b3.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a3, b3) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b3;
  c3.return = a3;
  c3.flags = 8;
  a3.lastEffect !== null ? (a3.lastEffect.nextEffect = c3, a3.lastEffect = c3) : a3.firstEffect = a3.lastEffect = c3;
}
function oh(a3, b3) {
  switch (a3.tag) {
    case 5:
      var c3 = a3.type;
      b3 = b3.nodeType !== 1 || c3.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
      return b3 !== null ? (a3.stateNode = b3, true) : false;
    case 6:
      return b3 = a3.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a3.stateNode = b3, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a3) {
  if (lh) {
    var b3 = kh;
    if (b3) {
      var c3 = b3;
      if (!oh(a3, b3)) {
        b3 = rf(c3.nextSibling);
        if (!b3 || !oh(a3, b3)) {
          a3.flags = a3.flags & -1025 | 2;
          lh = false;
          jh = a3;
          return;
        }
        mh(jh, c3);
      }
      jh = a3;
      kh = rf(b3.firstChild);
    } else
      a3.flags = a3.flags & -1025 | 2, lh = false, jh = a3;
  }
}
function qh(a3) {
  for (a3 = a3.return; a3 !== null && a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 13; )
    a3 = a3.return;
  jh = a3;
}
function rh(a3) {
  if (a3 !== jh)
    return false;
  if (!lh)
    return qh(a3), lh = true, false;
  var b3 = a3.type;
  if (a3.tag !== 5 || b3 !== "head" && b3 !== "body" && !nf(b3, a3.memoizedProps))
    for (b3 = kh; b3; )
      mh(a3, b3), b3 = rf(b3.nextSibling);
  qh(a3);
  if (a3.tag === 13) {
    a3 = a3.memoizedState;
    a3 = a3 !== null ? a3.dehydrated : null;
    if (!a3)
      throw Error(y(317));
    a: {
      a3 = a3.nextSibling;
      for (b3 = 0; a3; ) {
        if (a3.nodeType === 8) {
          var c3 = a3.data;
          if (c3 === "/$") {
            if (b3 === 0) {
              kh = rf(a3.nextSibling);
              break a;
            }
            b3--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b3++;
        }
        a3 = a3.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a3.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a3 = 0; a3 < th.length; a3++)
    th[a3]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a3, b3) {
  if (b3 === null)
    return false;
  for (var c3 = 0; c3 < b3.length && c3 < a3.length; c3++)
    if (!He(a3[c3], b3[c3]))
      return false;
  return true;
}
function Ch(a3, b3, c3, d4, e4, f3) {
  xh = f3;
  R = b3;
  b3.memoizedState = null;
  b3.updateQueue = null;
  b3.lanes = 0;
  vh.current = a3 === null || a3.memoizedState === null ? Dh : Eh;
  a3 = c3(d4, e4);
  if (zh) {
    f3 = 0;
    do {
      zh = false;
      if (!(25 > f3))
        throw Error(y(301));
      f3 += 1;
      T = S = null;
      b3.updateQueue = null;
      vh.current = Fh;
      a3 = c3(d4, e4);
    } while (zh);
  }
  vh.current = Gh;
  b3 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b3)
    throw Error(y(300));
  return a3;
}
function Hh() {
  var a3 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a3 : T = T.next = a3;
  return T;
}
function Ih() {
  if (S === null) {
    var a3 = R.alternate;
    a3 = a3 !== null ? a3.memoizedState : null;
  } else
    a3 = S.next;
  var b3 = T === null ? R.memoizedState : T.next;
  if (b3 !== null)
    T = b3, S = a3;
  else {
    if (a3 === null)
      throw Error(y(310));
    S = a3;
    a3 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a3 : T = T.next = a3;
  }
  return T;
}
function Jh(a3, b3) {
  return typeof b3 === "function" ? b3(a3) : b3;
}
function Kh(a3) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a3;
  var d4 = S, e4 = d4.baseQueue, f3 = c3.pending;
  if (f3 !== null) {
    if (e4 !== null) {
      var g2 = e4.next;
      e4.next = f3.next;
      f3.next = g2;
    }
    d4.baseQueue = e4 = f3;
    c3.pending = null;
  }
  if (e4 !== null) {
    e4 = e4.next;
    d4 = d4.baseState;
    var h4 = g2 = f3 = null, k3 = e4;
    do {
      var l3 = k3.lane;
      if ((xh & l3) === l3)
        h4 !== null && (h4 = h4.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d4 = k3.eagerReducer === a3 ? k3.eagerState : a3(d4, k3.action);
      else {
        var n3 = {
          lane: l3,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h4 === null ? (g2 = h4 = n3, f3 = d4) : h4 = h4.next = n3;
        R.lanes |= l3;
        Dg |= l3;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e4);
    h4 === null ? f3 = d4 : h4.next = g2;
    He(d4, b3.memoizedState) || (ug = true);
    b3.memoizedState = d4;
    b3.baseState = f3;
    b3.baseQueue = h4;
    c3.lastRenderedState = d4;
  }
  return [b3.memoizedState, c3.dispatch];
}
function Lh(a3) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a3;
  var d4 = c3.dispatch, e4 = c3.pending, f3 = b3.memoizedState;
  if (e4 !== null) {
    c3.pending = null;
    var g2 = e4 = e4.next;
    do
      f3 = a3(f3, g2.action), g2 = g2.next;
    while (g2 !== e4);
    He(f3, b3.memoizedState) || (ug = true);
    b3.memoizedState = f3;
    b3.baseQueue === null && (b3.baseState = f3);
    c3.lastRenderedState = f3;
  }
  return [f3, d4];
}
function Mh(a3, b3, c3) {
  var d4 = b3._getVersion;
  d4 = d4(b3._source);
  var e4 = b3._workInProgressVersionPrimary;
  if (e4 !== null)
    a3 = e4 === d4;
  else if (a3 = a3.mutableReadLanes, a3 = (xh & a3) === a3)
    b3._workInProgressVersionPrimary = d4, th.push(b3);
  if (a3)
    return c3(b3._source);
  th.push(b3);
  throw Error(y(350));
}
function Nh(a3, b3, c3, d4) {
  var e4 = U;
  if (e4 === null)
    throw Error(y(349));
  var f3 = b3._getVersion, g2 = f3(b3._source), h4 = vh.current, k3 = h4.useState(function() {
    return Mh(e4, b3, c3);
  }), l3 = k3[1], n3 = k3[0];
  k3 = T;
  var A3 = a3.memoizedState, p3 = A3.refs, C2 = p3.getSnapshot, x4 = A3.source;
  A3 = A3.subscribe;
  var w4 = R;
  a3.memoizedState = {refs: p3, source: b3, subscribe: d4};
  h4.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l3;
    var a4 = f3(b3._source);
    if (!He(g2, a4)) {
      a4 = c3(b3._source);
      He(n3, a4) || (l3(a4), a4 = Ig(w4), e4.mutableReadLanes |= a4 & e4.pendingLanes);
      a4 = e4.mutableReadLanes;
      e4.entangledLanes |= a4;
      for (var d5 = e4.entanglements, h5 = a4; 0 < h5; ) {
        var k4 = 31 - Vc(h5), v3 = 1 << k4;
        d5[k4] |= a4;
        h5 &= ~v3;
      }
    }
  }, [c3, b3, d4]);
  h4.useEffect(function() {
    return d4(b3._source, function() {
      var a4 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a4(b3._source));
        var d5 = Ig(w4);
        e4.mutableReadLanes |= d5 & e4.pendingLanes;
      } catch (q2) {
        c4(function() {
          throw q2;
        });
      }
    });
  }, [b3, d4]);
  He(C2, c3) && He(x4, b3) && He(A3, d4) || (a3 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3}, a3.dispatch = l3 = Oh.bind(null, R, a3), k3.queue = a3, k3.baseQueue = null, n3 = Mh(e4, b3, c3), k3.memoizedState = k3.baseState = n3);
  return n3;
}
function Ph(a3, b3, c3) {
  var d4 = Ih();
  return Nh(d4, a3, b3, c3);
}
function Qh(a3) {
  var b3 = Hh();
  typeof a3 === "function" && (a3 = a3());
  b3.memoizedState = b3.baseState = a3;
  a3 = b3.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a3};
  a3 = a3.dispatch = Oh.bind(null, R, a3);
  return [b3.memoizedState, a3];
}
function Rh(a3, b3, c3, d4) {
  a3 = {tag: a3, create: b3, destroy: c3, deps: d4, next: null};
  b3 = R.updateQueue;
  b3 === null ? (b3 = {lastEffect: null}, R.updateQueue = b3, b3.lastEffect = a3.next = a3) : (c3 = b3.lastEffect, c3 === null ? b3.lastEffect = a3.next = a3 : (d4 = c3.next, c3.next = a3, a3.next = d4, b3.lastEffect = a3));
  return a3;
}
function Sh(a3) {
  var b3 = Hh();
  a3 = {current: a3};
  return b3.memoizedState = a3;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a3, b3, c3, d4) {
  var e4 = Hh();
  R.flags |= a3;
  e4.memoizedState = Rh(1 | b3, c3, void 0, d4 === void 0 ? null : d4);
}
function Vh(a3, b3, c3, d4) {
  var e4 = Ih();
  d4 = d4 === void 0 ? null : d4;
  var f3 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f3 = g2.destroy;
    if (d4 !== null && Bh(d4, g2.deps)) {
      Rh(b3, c3, f3, d4);
      return;
    }
  }
  R.flags |= a3;
  e4.memoizedState = Rh(1 | b3, c3, f3, d4);
}
function Wh(a3, b3) {
  return Uh(516, 4, a3, b3);
}
function Xh(a3, b3) {
  return Vh(516, 4, a3, b3);
}
function Yh(a3, b3) {
  return Vh(4, 2, a3, b3);
}
function Zh(a3, b3) {
  if (typeof b3 === "function")
    return a3 = a3(), b3(a3), function() {
      b3(null);
    };
  if (b3 !== null && b3 !== void 0)
    return a3 = a3(), b3.current = a3, function() {
      b3.current = null;
    };
}
function $h(a3, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a3]) : null;
  return Vh(4, 2, Zh.bind(null, b3, a3), c3);
}
function ai() {
}
function bi(a3, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d4 = c3.memoizedState;
  if (d4 !== null && b3 !== null && Bh(b3, d4[1]))
    return d4[0];
  c3.memoizedState = [a3, b3];
  return a3;
}
function ci(a3, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d4 = c3.memoizedState;
  if (d4 !== null && b3 !== null && Bh(b3, d4[1]))
    return d4[0];
  a3 = a3();
  c3.memoizedState = [a3, b3];
  return a3;
}
function di(a3, b3) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a3(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a3(false), b3();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a3, b3, c3) {
  var d4 = Hg(), e4 = Ig(a3), f3 = {lane: e4, action: c3, eagerReducer: null, eagerState: null, next: null}, g2 = b3.pending;
  g2 === null ? f3.next = f3 : (f3.next = g2.next, g2.next = f3);
  b3.pending = f3;
  g2 = a3.alternate;
  if (a3 === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a3.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b3.lastRenderedReducer, g2 !== null))
      try {
        var h4 = b3.lastRenderedState, k3 = g2(h4, c3);
        f3.eagerReducer = g2;
        f3.eagerState = k3;
        if (He(k3, h4))
          return;
      } catch (l3) {
      } finally {
      }
    Jg(a3, e4, d4);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a3, b3) {
  Hh().memoizedState = [a3, b3 === void 0 ? null : b3];
  return a3;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a3, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a3]) : null;
  return Uh(4, 2, Zh.bind(null, b3, a3), c3);
}, useLayoutEffect: function(a3, b3) {
  return Uh(4, 2, a3, b3);
}, useMemo: function(a3, b3) {
  var c3 = Hh();
  b3 = b3 === void 0 ? null : b3;
  a3 = a3();
  c3.memoizedState = [a3, b3];
  return a3;
}, useReducer: function(a3, b3, c3) {
  var d4 = Hh();
  b3 = c3 !== void 0 ? c3(b3) : b3;
  d4.memoizedState = d4.baseState = b3;
  a3 = d4.queue = {pending: null, dispatch: null, lastRenderedReducer: a3, lastRenderedState: b3};
  a3 = a3.dispatch = Oh.bind(null, R, a3);
  return [d4.memoizedState, a3];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Qh(a3), c3 = b3[0], d4 = b3[1];
  Wh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d4(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Qh(false), b3 = a3[0];
  a3 = di.bind(null, a3[1]);
  Sh(a3);
  return [a3, b3];
}, useMutableSource: function(a3, b3, c3) {
  var d4 = Hh();
  d4.memoizedState = {refs: {getSnapshot: b3, setSnapshot: null}, source: a3, subscribe: c3};
  return Nh(d4, a3, b3, c3);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a3 = false, b3 = uf(function() {
      a3 || (a3 = true, c3("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c3 = Qh(b3)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c3("r:" + (tf++).toString(36));
    }, void 0, null));
    return b3;
  }
  b3 = "r:" + (tf++).toString(36);
  Qh(b3);
  return b3;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Kh(Jh), c3 = b3[0], d4 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d4(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Kh(Jh)[0];
  return [
    Th().current,
    a3
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a3) {
  var b3 = Lh(Jh), c3 = b3[0], d4 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d4(a3);
    } finally {
      wh.transition = b4;
    }
  }, [a3]);
  return c3;
}, useTransition: function() {
  var a3 = Lh(Jh)[0];
  return [
    Th().current,
    a3
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a3, b3, c3, d4) {
  b3.child = a3 === null ? Zg(b3, null, c3, d4) : Yg(b3, a3.child, c3, d4);
}
function gi(a3, b3, c3, d4, e4) {
  c3 = c3.render;
  var f3 = b3.ref;
  tg(b3, e4);
  d4 = Ch(a3, b3, c3, d4, f3, e4);
  if (a3 !== null && !ug)
    return b3.updateQueue = a3.updateQueue, b3.flags &= -517, a3.lanes &= ~e4, hi(a3, b3, e4);
  b3.flags |= 1;
  fi(a3, b3, d4, e4);
  return b3.child;
}
function ii(a3, b3, c3, d4, e4, f3) {
  if (a3 === null) {
    var g2 = c3.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b3.tag = 15, b3.type = g2, ki(a3, b3, g2, d4, e4, f3);
    a3 = Vg(c3.type, null, d4, b3, b3.mode, f3);
    a3.ref = b3.ref;
    a3.return = b3;
    return b3.child = a3;
  }
  g2 = a3.child;
  if ((e4 & f3) === 0 && (e4 = g2.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e4, d4) && a3.ref === b3.ref))
    return hi(a3, b3, f3);
  b3.flags |= 1;
  a3 = Tg(g2, d4);
  a3.ref = b3.ref;
  a3.return = b3;
  return b3.child = a3;
}
function ki(a3, b3, c3, d4, e4, f3) {
  if (a3 !== null && Je(a3.memoizedProps, d4) && a3.ref === b3.ref)
    if (ug = false, (f3 & e4) !== 0)
      (a3.flags & 16384) !== 0 && (ug = true);
    else
      return b3.lanes = a3.lanes, hi(a3, b3, f3);
  return li(a3, b3, c3, d4, f3);
}
function mi(a3, b3, c3) {
  var d4 = b3.pendingProps, e4 = d4.children, f3 = a3 !== null ? a3.memoizedState : null;
  if (d4.mode === "hidden" || d4.mode === "unstable-defer-without-hiding")
    if ((b3.mode & 4) === 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, c3);
    else if ((c3 & 1073741824) !== 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, f3 !== null ? f3.baseLanes : c3);
    else
      return a3 = f3 !== null ? f3.baseLanes | c3 : c3, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = {baseLanes: a3}, ni(b3, a3), null;
  else
    f3 !== null ? (d4 = f3.baseLanes | c3, b3.memoizedState = null) : d4 = c3, ni(b3, d4);
  fi(a3, b3, e4, c3);
  return b3.child;
}
function oi(a3, b3) {
  var c3 = b3.ref;
  if (a3 === null && c3 !== null || a3 !== null && a3.ref !== c3)
    b3.flags |= 128;
}
function li(a3, b3, c3, d4, e4) {
  var f3 = Ff(c3) ? Df : M.current;
  f3 = Ef(b3, f3);
  tg(b3, e4);
  c3 = Ch(a3, b3, c3, d4, f3, e4);
  if (a3 !== null && !ug)
    return b3.updateQueue = a3.updateQueue, b3.flags &= -517, a3.lanes &= ~e4, hi(a3, b3, e4);
  b3.flags |= 1;
  fi(a3, b3, c3, e4);
  return b3.child;
}
function pi(a3, b3, c3, d4, e4) {
  if (Ff(c3)) {
    var f3 = true;
    Jf(b3);
  } else
    f3 = false;
  tg(b3, e4);
  if (b3.stateNode === null)
    a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2), Mg(b3, c3, d4), Og(b3, c3, d4, e4), d4 = true;
  else if (a3 === null) {
    var g2 = b3.stateNode, h4 = b3.memoizedProps;
    g2.props = h4;
    var k3 = g2.context, l3 = c3.contextType;
    typeof l3 === "object" && l3 !== null ? l3 = vg(l3) : (l3 = Ff(c3) ? Df : M.current, l3 = Ef(b3, l3));
    var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A3 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h4 !== d4 || k3 !== l3) && Ng(b3, g2, d4, l3);
    wg = false;
    var p3 = b3.memoizedState;
    g2.state = p3;
    Cg(b3, d4, g2, e4);
    k3 = b3.memoizedState;
    h4 !== d4 || p3 !== k3 || N.current || wg ? (typeof n3 === "function" && (Gg(b3, c3, n3, d4), k3 = b3.memoizedState), (h4 = wg || Lg(b3, c3, h4, d4, p3, k3, l3)) ? (A3 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b3.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b3.flags |= 4), b3.memoizedProps = d4, b3.memoizedState = k3), g2.props = d4, g2.state = k3, g2.context = l3, d4 = h4) : (typeof g2.componentDidMount === "function" && (b3.flags |= 4), d4 = false);
  } else {
    g2 = b3.stateNode;
    yg(a3, b3);
    h4 = b3.memoizedProps;
    l3 = b3.type === b3.elementType ? h4 : lg(b3.type, h4);
    g2.props = l3;
    A3 = b3.pendingProps;
    p3 = g2.context;
    k3 = c3.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M.current, k3 = Ef(b3, k3));
    var C2 = c3.getDerivedStateFromProps;
    (n3 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h4 !== A3 || p3 !== k3) && Ng(b3, g2, d4, k3);
    wg = false;
    p3 = b3.memoizedState;
    g2.state = p3;
    Cg(b3, d4, g2, e4);
    var x4 = b3.memoizedState;
    h4 !== A3 || p3 !== x4 || N.current || wg ? (typeof C2 === "function" && (Gg(b3, c3, C2, d4), x4 = b3.memoizedState), (l3 = wg || Lg(b3, c3, l3, d4, p3, x4, k3)) ? (n3 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d4, x4, k3), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d4, x4, k3)), typeof g2.componentDidUpdate === "function" && (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b3.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h4 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h4 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 256), b3.memoizedProps = d4, b3.memoizedState = x4), g2.props = d4, g2.state = x4, g2.context = k3, d4 = l3) : (typeof g2.componentDidUpdate !== "function" || h4 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h4 === a3.memoizedProps && p3 === a3.memoizedState || (b3.flags |= 256), d4 = false);
  }
  return qi(a3, b3, c3, d4, f3, e4);
}
function qi(a3, b3, c3, d4, e4, f3) {
  oi(a3, b3);
  var g2 = (b3.flags & 64) !== 0;
  if (!d4 && !g2)
    return e4 && Kf(b3, c3, false), hi(a3, b3, f3);
  d4 = b3.stateNode;
  ei.current = b3;
  var h4 = g2 && typeof c3.getDerivedStateFromError !== "function" ? null : d4.render();
  b3.flags |= 1;
  a3 !== null && g2 ? (b3.child = Yg(b3, a3.child, null, f3), b3.child = Yg(b3, null, h4, f3)) : fi(a3, b3, h4, f3);
  b3.memoizedState = d4.state;
  e4 && Kf(b3, c3, true);
  return b3.child;
}
function ri(a3) {
  var b3 = a3.stateNode;
  b3.pendingContext ? Hf(a3, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && Hf(a3, b3.context, false);
  eh(a3, b3.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a3, b3, c3) {
  var d4 = b3.pendingProps, e4 = P.current, f3 = false, g2;
  (g2 = (b3.flags & 64) !== 0) || (g2 = a3 !== null && a3.memoizedState === null ? false : (e4 & 2) !== 0);
  g2 ? (f3 = true, b3.flags &= -65) : a3 !== null && a3.memoizedState === null || d4.fallback === void 0 || d4.unstable_avoidThisFallback === true || (e4 |= 1);
  I(P, e4 & 1);
  if (a3 === null) {
    d4.fallback !== void 0 && ph(b3);
    a3 = d4.children;
    e4 = d4.fallback;
    if (f3)
      return a3 = ui(b3, a3, e4, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, a3;
    if (typeof d4.unstable_expectedLoadTime === "number")
      return a3 = ui(b3, a3, e4, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, b3.lanes = 33554432, a3;
    c3 = vi({mode: "visible", children: a3}, b3.mode, c3, null);
    c3.return = b3;
    return b3.child = c3;
  }
  if (a3.memoizedState !== null) {
    if (f3)
      return d4 = wi(a3, b3, d4.children, d4.fallback, c3), f3 = b3.child, e4 = a3.child.memoizedState, f3.memoizedState = e4 === null ? {baseLanes: c3} : {baseLanes: e4.baseLanes | c3}, f3.childLanes = a3.childLanes & ~c3, b3.memoizedState = si, d4;
    c3 = xi(a3, b3, d4.children, c3);
    b3.memoizedState = null;
    return c3;
  }
  if (f3)
    return d4 = wi(a3, b3, d4.children, d4.fallback, c3), f3 = b3.child, e4 = a3.child.memoizedState, f3.memoizedState = e4 === null ? {baseLanes: c3} : {baseLanes: e4.baseLanes | c3}, f3.childLanes = a3.childLanes & ~c3, b3.memoizedState = si, d4;
  c3 = xi(a3, b3, d4.children, c3);
  b3.memoizedState = null;
  return c3;
}
function ui(a3, b3, c3, d4) {
  var e4 = a3.mode, f3 = a3.child;
  b3 = {mode: "hidden", children: b3};
  (e4 & 2) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = b3) : f3 = vi(b3, e4, 0, null);
  c3 = Xg(c3, e4, d4, null);
  f3.return = a3;
  c3.return = a3;
  f3.sibling = c3;
  a3.child = f3;
  return c3;
}
function xi(a3, b3, c3, d4) {
  var e4 = a3.child;
  a3 = e4.sibling;
  c3 = Tg(e4, {mode: "visible", children: c3});
  (b3.mode & 2) === 0 && (c3.lanes = d4);
  c3.return = b3;
  c3.sibling = null;
  a3 !== null && (a3.nextEffect = null, a3.flags = 8, b3.firstEffect = b3.lastEffect = a3);
  return b3.child = c3;
}
function wi(a3, b3, c3, d4, e4) {
  var f3 = b3.mode, g2 = a3.child;
  a3 = g2.sibling;
  var h4 = {mode: "hidden", children: c3};
  (f3 & 2) === 0 && b3.child !== g2 ? (c3 = b3.child, c3.childLanes = 0, c3.pendingProps = h4, g2 = c3.lastEffect, g2 !== null ? (b3.firstEffect = c3.firstEffect, b3.lastEffect = g2, g2.nextEffect = null) : b3.firstEffect = b3.lastEffect = null) : c3 = Tg(g2, h4);
  a3 !== null ? d4 = Tg(a3, d4) : (d4 = Xg(d4, f3, e4, null), d4.flags |= 2);
  d4.return = b3;
  c3.return = b3;
  c3.sibling = d4;
  b3.child = c3;
  return d4;
}
function yi(a3, b3) {
  a3.lanes |= b3;
  var c3 = a3.alternate;
  c3 !== null && (c3.lanes |= b3);
  sg(a3.return, b3);
}
function zi(a3, b3, c3, d4, e4, f3) {
  var g2 = a3.memoizedState;
  g2 === null ? a3.memoizedState = {isBackwards: b3, rendering: null, renderingStartTime: 0, last: d4, tail: c3, tailMode: e4, lastEffect: f3} : (g2.isBackwards = b3, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d4, g2.tail = c3, g2.tailMode = e4, g2.lastEffect = f3);
}
function Ai(a3, b3, c3) {
  var d4 = b3.pendingProps, e4 = d4.revealOrder, f3 = d4.tail;
  fi(a3, b3, d4.children, c3);
  d4 = P.current;
  if ((d4 & 2) !== 0)
    d4 = d4 & 1 | 2, b3.flags |= 64;
  else {
    if (a3 !== null && (a3.flags & 64) !== 0)
      a:
        for (a3 = b3.child; a3 !== null; ) {
          if (a3.tag === 13)
            a3.memoizedState !== null && yi(a3, c3);
          else if (a3.tag === 19)
            yi(a3, c3);
          else if (a3.child !== null) {
            a3.child.return = a3;
            a3 = a3.child;
            continue;
          }
          if (a3 === b3)
            break a;
          for (; a3.sibling === null; ) {
            if (a3.return === null || a3.return === b3)
              break a;
            a3 = a3.return;
          }
          a3.sibling.return = a3.return;
          a3 = a3.sibling;
        }
    d4 &= 1;
  }
  I(P, d4);
  if ((b3.mode & 2) === 0)
    b3.memoizedState = null;
  else
    switch (e4) {
      case "forwards":
        c3 = b3.child;
        for (e4 = null; c3 !== null; )
          a3 = c3.alternate, a3 !== null && ih(a3) === null && (e4 = c3), c3 = c3.sibling;
        c3 = e4;
        c3 === null ? (e4 = b3.child, b3.child = null) : (e4 = c3.sibling, c3.sibling = null);
        zi(b3, false, e4, c3, f3, b3.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e4 = b3.child;
        for (b3.child = null; e4 !== null; ) {
          a3 = e4.alternate;
          if (a3 !== null && ih(a3) === null) {
            b3.child = e4;
            break;
          }
          a3 = e4.sibling;
          e4.sibling = c3;
          c3 = e4;
          e4 = a3;
        }
        zi(b3, true, c3, null, f3, b3.lastEffect);
        break;
      case "together":
        zi(b3, false, null, null, void 0, b3.lastEffect);
        break;
      default:
        b3.memoizedState = null;
    }
  return b3.child;
}
function hi(a3, b3, c3) {
  a3 !== null && (b3.dependencies = a3.dependencies);
  Dg |= b3.lanes;
  if ((c3 & b3.childLanes) !== 0) {
    if (a3 !== null && b3.child !== a3.child)
      throw Error(y(153));
    if (b3.child !== null) {
      a3 = b3.child;
      c3 = Tg(a3, a3.pendingProps);
      b3.child = c3;
      for (c3.return = b3; a3.sibling !== null; )
        a3 = a3.sibling, c3 = c3.sibling = Tg(a3, a3.pendingProps), c3.return = b3;
      c3.sibling = null;
    }
    return b3.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a3, b3) {
  for (var c3 = b3.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a3.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a3, b3, c3, d4) {
  var e4 = a3.memoizedProps;
  if (e4 !== d4) {
    a3 = b3.stateNode;
    dh(ah.current);
    var f3 = null;
    switch (c3) {
      case "input":
        e4 = Ya(a3, e4);
        d4 = Ya(a3, d4);
        f3 = [];
        break;
      case "option":
        e4 = eb(a3, e4);
        d4 = eb(a3, d4);
        f3 = [];
        break;
      case "select":
        e4 = objectAssign({}, e4, {value: void 0});
        d4 = objectAssign({}, d4, {value: void 0});
        f3 = [];
        break;
      case "textarea":
        e4 = gb(a3, e4);
        d4 = gb(a3, d4);
        f3 = [];
        break;
      default:
        typeof e4.onClick !== "function" && typeof d4.onClick === "function" && (a3.onclick = jf);
    }
    vb(c3, d4);
    var g2;
    c3 = null;
    for (l3 in e4)
      if (!d4.hasOwnProperty(l3) && e4.hasOwnProperty(l3) && e4[l3] != null)
        if (l3 === "style") {
          var h4 = e4[l3];
          for (g2 in h4)
            h4.hasOwnProperty(g2) && (c3 || (c3 = {}), c3[g2] = "");
        } else
          l3 !== "dangerouslySetInnerHTML" && l3 !== "children" && l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && l3 !== "autoFocus" && (ca.hasOwnProperty(l3) ? f3 || (f3 = []) : (f3 = f3 || []).push(l3, null));
    for (l3 in d4) {
      var k3 = d4[l3];
      h4 = e4 != null ? e4[l3] : void 0;
      if (d4.hasOwnProperty(l3) && k3 !== h4 && (k3 != null || h4 != null))
        if (l3 === "style")
          if (h4) {
            for (g2 in h4)
              !h4.hasOwnProperty(g2) || k3 && k3.hasOwnProperty(g2) || (c3 || (c3 = {}), c3[g2] = "");
            for (g2 in k3)
              k3.hasOwnProperty(g2) && h4[g2] !== k3[g2] && (c3 || (c3 = {}), c3[g2] = k3[g2]);
          } else
            c3 || (f3 || (f3 = []), f3.push(l3, c3)), c3 = k3;
        else
          l3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h4 = h4 ? h4.__html : void 0, k3 != null && h4 !== k3 && (f3 = f3 || []).push(l3, k3)) : l3 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f3 = f3 || []).push(l3, "" + k3) : l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l3) ? (k3 != null && l3 === "onScroll" && G("scroll", a3), f3 || h4 === k3 || (f3 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f3 = f3 || []).push(l3, k3));
    }
    c3 && (f3 = f3 || []).push("style", c3);
    var l3 = f3;
    if (b3.updateQueue = l3)
      b3.flags |= 4;
  }
};
Ei = function(a3, b3, c3, d4) {
  c3 !== d4 && (b3.flags |= 4);
};
function Fi(a3, b3) {
  if (!lh)
    switch (a3.tailMode) {
      case "hidden":
        b3 = a3.tail;
        for (var c3 = null; b3 !== null; )
          b3.alternate !== null && (c3 = b3), b3 = b3.sibling;
        c3 === null ? a3.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a3.tail;
        for (var d4 = null; c3 !== null; )
          c3.alternate !== null && (d4 = c3), c3 = c3.sibling;
        d4 === null ? b3 || a3.tail === null ? a3.tail = null : a3.tail.sibling = null : d4.sibling = null;
    }
}
function Gi(a3, b3, c3) {
  var d4 = b3.pendingProps;
  switch (b3.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b3.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d4 = b3.stateNode;
      d4.pendingContext && (d4.context = d4.pendingContext, d4.pendingContext = null);
      if (a3 === null || a3.child === null)
        rh(b3) ? b3.flags |= 4 : d4.hydrate || (b3.flags |= 256);
      Ci(b3);
      return null;
    case 5:
      hh(b3);
      var e4 = dh(ch.current);
      c3 = b3.type;
      if (a3 !== null && b3.stateNode != null)
        Di(a3, b3, c3, d4, e4), a3.ref !== b3.ref && (b3.flags |= 128);
      else {
        if (!d4) {
          if (b3.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a3 = dh(ah.current);
        if (rh(b3)) {
          d4 = b3.stateNode;
          c3 = b3.type;
          var f3 = b3.memoizedProps;
          d4[wf] = b3;
          d4[xf] = f3;
          switch (c3) {
            case "dialog":
              G("cancel", d4);
              G("close", d4);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d4);
              break;
            case "video":
            case "audio":
              for (a3 = 0; a3 < Xe.length; a3++)
                G(Xe[a3], d4);
              break;
            case "source":
              G("error", d4);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d4);
              G("load", d4);
              break;
            case "details":
              G("toggle", d4);
              break;
            case "input":
              Za(d4, f3);
              G("invalid", d4);
              break;
            case "select":
              d4._wrapperState = {wasMultiple: !!f3.multiple};
              G("invalid", d4);
              break;
            case "textarea":
              hb(d4, f3), G("invalid", d4);
          }
          vb(c3, f3);
          a3 = null;
          for (var g2 in f3)
            f3.hasOwnProperty(g2) && (e4 = f3[g2], g2 === "children" ? typeof e4 === "string" ? d4.textContent !== e4 && (a3 = ["children", e4]) : typeof e4 === "number" && d4.textContent !== "" + e4 && (a3 = ["children", "" + e4]) : ca.hasOwnProperty(g2) && e4 != null && g2 === "onScroll" && G("scroll", d4));
          switch (c3) {
            case "input":
              Va(d4);
              cb(d4, f3, true);
              break;
            case "textarea":
              Va(d4);
              jb(d4);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f3.onClick === "function" && (d4.onclick = jf);
          }
          d4 = a3;
          b3.updateQueue = d4;
          d4 !== null && (b3.flags |= 4);
        } else {
          g2 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
          a3 === kb.html && (a3 = lb(c3));
          a3 === kb.html ? c3 === "script" ? (a3 = g2.createElement("div"), a3.innerHTML = "<script></script>", a3 = a3.removeChild(a3.firstChild)) : typeof d4.is === "string" ? a3 = g2.createElement(c3, {is: d4.is}) : (a3 = g2.createElement(c3), c3 === "select" && (g2 = a3, d4.multiple ? g2.multiple = true : d4.size && (g2.size = d4.size))) : a3 = g2.createElementNS(a3, c3);
          a3[wf] = b3;
          a3[xf] = d4;
          Bi(a3, b3, false, false);
          b3.stateNode = a3;
          g2 = wb(c3, d4);
          switch (c3) {
            case "dialog":
              G("cancel", a3);
              G("close", a3);
              e4 = d4;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a3);
              e4 = d4;
              break;
            case "video":
            case "audio":
              for (e4 = 0; e4 < Xe.length; e4++)
                G(Xe[e4], a3);
              e4 = d4;
              break;
            case "source":
              G("error", a3);
              e4 = d4;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a3);
              G("load", a3);
              e4 = d4;
              break;
            case "details":
              G("toggle", a3);
              e4 = d4;
              break;
            case "input":
              Za(a3, d4);
              e4 = Ya(a3, d4);
              G("invalid", a3);
              break;
            case "option":
              e4 = eb(a3, d4);
              break;
            case "select":
              a3._wrapperState = {wasMultiple: !!d4.multiple};
              e4 = objectAssign({}, d4, {value: void 0});
              G("invalid", a3);
              break;
            case "textarea":
              hb(a3, d4);
              e4 = gb(a3, d4);
              G("invalid", a3);
              break;
            default:
              e4 = d4;
          }
          vb(c3, e4);
          var h4 = e4;
          for (f3 in h4)
            if (h4.hasOwnProperty(f3)) {
              var k3 = h4[f3];
              f3 === "style" ? tb(a3, k3) : f3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a3, k3)) : f3 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a3, k3) : typeof k3 === "number" && pb(a3, "" + k3) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ca.hasOwnProperty(f3) ? k3 != null && f3 === "onScroll" && G("scroll", a3) : k3 != null && qa(a3, f3, k3, g2));
            }
          switch (c3) {
            case "input":
              Va(a3);
              cb(a3, d4, false);
              break;
            case "textarea":
              Va(a3);
              jb(a3);
              break;
            case "option":
              d4.value != null && a3.setAttribute("value", "" + Sa(d4.value));
              break;
            case "select":
              a3.multiple = !!d4.multiple;
              f3 = d4.value;
              f3 != null ? fb(a3, !!d4.multiple, f3, false) : d4.defaultValue != null && fb(a3, !!d4.multiple, d4.defaultValue, true);
              break;
            default:
              typeof e4.onClick === "function" && (a3.onclick = jf);
          }
          mf(c3, d4) && (b3.flags |= 4);
        }
        b3.ref !== null && (b3.flags |= 128);
      }
      return null;
    case 6:
      if (a3 && b3.stateNode != null)
        Ei(a3, b3, a3.memoizedProps, d4);
      else {
        if (typeof d4 !== "string" && b3.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b3) ? (d4 = b3.stateNode, c3 = b3.memoizedProps, d4[wf] = b3, d4.nodeValue !== c3 && (b3.flags |= 4)) : (d4 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d4), d4[wf] = b3, b3.stateNode = d4);
      }
      return null;
    case 13:
      H(P);
      d4 = b3.memoizedState;
      if ((b3.flags & 64) !== 0)
        return b3.lanes = c3, b3;
      d4 = d4 !== null;
      c3 = false;
      a3 === null ? b3.memoizedProps.fallback !== void 0 && rh(b3) : c3 = a3.memoizedState !== null;
      if (d4 && !c3 && (b3.mode & 2) !== 0)
        if (a3 === null && b3.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d4 || c3)
        b3.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b3), a3 === null && cf(b3.stateNode.containerInfo), null;
    case 10:
      return rg(b3), null;
    case 17:
      return Ff(b3.type) && Gf(), null;
    case 19:
      H(P);
      d4 = b3.memoizedState;
      if (d4 === null)
        return null;
      f3 = (b3.flags & 64) !== 0;
      g2 = d4.rendering;
      if (g2 === null)
        if (f3)
          Fi(d4, false);
        else {
          if (V !== 0 || a3 !== null && (a3.flags & 64) !== 0)
            for (a3 = b3.child; a3 !== null; ) {
              g2 = ih(a3);
              if (g2 !== null) {
                b3.flags |= 64;
                Fi(d4, false);
                f3 = g2.updateQueue;
                f3 !== null && (b3.updateQueue = f3, b3.flags |= 4);
                d4.lastEffect === null && (b3.firstEffect = null);
                b3.lastEffect = d4.lastEffect;
                d4 = c3;
                for (c3 = b3.child; c3 !== null; )
                  f3 = c3, a3 = d4, f3.flags &= 2, f3.nextEffect = null, f3.firstEffect = null, f3.lastEffect = null, g2 = f3.alternate, g2 === null ? (f3.childLanes = 0, f3.lanes = a3, f3.child = null, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g2.childLanes, f3.lanes = g2.lanes, f3.child = g2.child, f3.memoizedProps = g2.memoizedProps, f3.memoizedState = g2.memoizedState, f3.updateQueue = g2.updateQueue, f3.type = g2.type, a3 = g2.dependencies, f3.dependencies = a3 === null ? null : {lanes: a3.lanes, firstContext: a3.firstContext}), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b3.child;
              }
              a3 = a3.sibling;
            }
          d4.tail !== null && O() > Ji && (b3.flags |= 64, f3 = true, Fi(d4, false), b3.lanes = 33554432);
        }
      else {
        if (!f3)
          if (a3 = ih(g2), a3 !== null) {
            if (b3.flags |= 64, f3 = true, c3 = a3.updateQueue, c3 !== null && (b3.updateQueue = c3, b3.flags |= 4), Fi(d4, true), d4.tail === null && d4.tailMode === "hidden" && !g2.alternate && !lh)
              return b3 = b3.lastEffect = d4.lastEffect, b3 !== null && (b3.nextEffect = null), null;
          } else
            2 * O() - d4.renderingStartTime > Ji && c3 !== 1073741824 && (b3.flags |= 64, f3 = true, Fi(d4, false), b3.lanes = 33554432);
        d4.isBackwards ? (g2.sibling = b3.child, b3.child = g2) : (c3 = d4.last, c3 !== null ? c3.sibling = g2 : b3.child = g2, d4.last = g2);
      }
      return d4.tail !== null ? (c3 = d4.tail, d4.rendering = c3, d4.tail = c3.sibling, d4.lastEffect = b3.lastEffect, d4.renderingStartTime = O(), c3.sibling = null, b3 = P.current, I(P, f3 ? b3 & 1 | 2 : b3 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a3 !== null && a3.memoizedState !== null !== (b3.memoizedState !== null) && d4.mode !== "unstable-defer-without-hiding" && (b3.flags |= 4), null;
  }
  throw Error(y(156, b3.tag));
}
function Li(a3) {
  switch (a3.tag) {
    case 1:
      Ff(a3.type) && Gf();
      var b3 = a3.flags;
      return b3 & 4096 ? (a3.flags = b3 & -4097 | 64, a3) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b3 = a3.flags;
      if ((b3 & 64) !== 0)
        throw Error(y(285));
      a3.flags = b3 & -4097 | 64;
      return a3;
    case 5:
      return hh(a3), null;
    case 13:
      return H(P), b3 = a3.flags, b3 & 4096 ? (a3.flags = b3 & -4097 | 64, a3) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a3), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a3, b3) {
  try {
    var c3 = "", d4 = b3;
    do
      c3 += Qa(d4), d4 = d4.return;
    while (d4);
    var e4 = c3;
  } catch (f3) {
    e4 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
  }
  return {value: a3, source: b3, stack: e4};
}
function Ni(a3, b3) {
  try {
    console.error(b3.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a3, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {element: null};
  var d4 = b3.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d4);
    Ni(a3, b3);
  };
  return c3;
}
function Si(a3, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d4 = a3.type.getDerivedStateFromError;
  if (typeof d4 === "function") {
    var e4 = b3.value;
    c3.payload = function() {
      Ni(a3, b3);
      return d4(e4);
    };
  }
  var f3 = a3.stateNode;
  f3 !== null && typeof f3.componentDidCatch === "function" && (c3.callback = function() {
    typeof d4 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a3, b3));
    var c4 = b3.stack;
    this.componentDidCatch(b3.value, {componentStack: c4 !== null ? c4 : ""});
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a3) {
  var b3 = a3.ref;
  if (b3 !== null)
    if (typeof b3 === "function")
      try {
        b3(null);
      } catch (c3) {
        Wi(a3, c3);
      }
    else
      b3.current = null;
}
function Xi(a3, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b3.flags & 256 && a3 !== null) {
        var c3 = a3.memoizedProps, d4 = a3.memoizedState;
        a3 = b3.stateNode;
        b3 = a3.getSnapshotBeforeUpdate(b3.elementType === b3.type ? c3 : lg(b3.type, c3), d4);
        a3.__reactInternalSnapshotBeforeUpdate = b3;
      }
      return;
    case 3:
      b3.flags & 256 && qf(b3.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a3, b3, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a3 = b3 = b3.next;
        do {
          if ((a3.tag & 3) === 3) {
            var d4 = a3.create;
            a3.destroy = d4();
          }
          a3 = a3.next;
        } while (a3 !== b3);
      }
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a3 = b3 = b3.next;
        do {
          var e4 = a3;
          d4 = e4.next;
          e4 = e4.tag;
          (e4 & 4) !== 0 && (e4 & 1) !== 0 && (Zi(c3, a3), $i(c3, a3));
          a3 = d4;
        } while (a3 !== b3);
      }
      return;
    case 1:
      a3 = c3.stateNode;
      c3.flags & 4 && (b3 === null ? a3.componentDidMount() : (d4 = c3.elementType === c3.type ? b3.memoizedProps : lg(c3.type, b3.memoizedProps), a3.componentDidUpdate(d4, b3.memoizedState, a3.__reactInternalSnapshotBeforeUpdate)));
      b3 = c3.updateQueue;
      b3 !== null && Eg(c3, b3, a3);
      return;
    case 3:
      b3 = c3.updateQueue;
      if (b3 !== null) {
        a3 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a3 = c3.child.stateNode;
              break;
            case 1:
              a3 = c3.child.stateNode;
          }
        Eg(c3, b3, a3);
      }
      return;
    case 5:
      a3 = c3.stateNode;
      b3 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a3.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a3, b3) {
  for (var c3 = a3; ; ) {
    if (c3.tag === 5) {
      var d4 = c3.stateNode;
      if (b3)
        d4 = d4.style, typeof d4.setProperty === "function" ? d4.setProperty("display", "none", "important") : d4.display = "none";
      else {
        d4 = c3.stateNode;
        var e4 = c3.memoizedProps.style;
        e4 = e4 !== void 0 && e4 !== null && e4.hasOwnProperty("display") ? e4.display : null;
        d4.style.display = sb("display", e4);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b3 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a3) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a3)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a3, b3) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b3);
    } catch (f3) {
    }
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a3 = b3.updateQueue;
      if (a3 !== null && (a3 = a3.lastEffect, a3 !== null)) {
        var c3 = a3 = a3.next;
        do {
          var d4 = c3, e4 = d4.destroy;
          d4 = d4.tag;
          if (e4 !== void 0)
            if ((d4 & 4) !== 0)
              Zi(b3, c3);
            else {
              d4 = b3;
              try {
                e4();
              } catch (f3) {
                Wi(d4, f3);
              }
            }
          c3 = c3.next;
        } while (c3 !== a3);
      }
      break;
    case 1:
      Vi(b3);
      a3 = b3.stateNode;
      if (typeof a3.componentWillUnmount === "function")
        try {
          a3.props = b3.memoizedProps, a3.state = b3.memoizedState, a3.componentWillUnmount();
        } catch (f3) {
          Wi(b3, f3);
        }
      break;
    case 5:
      Vi(b3);
      break;
    case 4:
      cj(a3, b3);
  }
}
function dj(a3) {
  a3.alternate = null;
  a3.child = null;
  a3.dependencies = null;
  a3.firstEffect = null;
  a3.lastEffect = null;
  a3.memoizedProps = null;
  a3.memoizedState = null;
  a3.pendingProps = null;
  a3.return = null;
  a3.updateQueue = null;
}
function ej(a3) {
  return a3.tag === 5 || a3.tag === 3 || a3.tag === 4;
}
function fj(a3) {
  a: {
    for (var b3 = a3.return; b3 !== null; ) {
      if (ej(b3))
        break a;
      b3 = b3.return;
    }
    throw Error(y(160));
  }
  var c3 = b3;
  b3 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d4 = false;
      break;
    case 3:
      b3 = b3.containerInfo;
      d4 = true;
      break;
    case 4:
      b3 = b3.containerInfo;
      d4 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b3, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a3; ; ) {
        for (; c3.sibling === null; ) {
          if (c3.return === null || ej(c3.return)) {
            c3 = null;
            break a;
          }
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
          if (c3.flags & 2)
            continue b;
          if (c3.child === null || c3.tag === 4)
            continue b;
          else
            c3.child.return = c3, c3 = c3.child;
        }
        if (!(c3.flags & 2)) {
          c3 = c3.stateNode;
          break a;
        }
      }
  d4 ? gj(a3, c3, b3) : hj(a3, c3, b3);
}
function gj(a3, b3, c3) {
  var d4 = a3.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a3 = e4 ? a3.stateNode : a3.stateNode.instance, b3 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a3, b3) : c3.insertBefore(a3, b3) : (c3.nodeType === 8 ? (b3 = c3.parentNode, b3.insertBefore(a3, c3)) : (b3 = c3, b3.appendChild(a3)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b3.onclick !== null || (b3.onclick = jf));
  else if (d4 !== 4 && (a3 = a3.child, a3 !== null))
    for (gj(a3, b3, c3), a3 = a3.sibling; a3 !== null; )
      gj(a3, b3, c3), a3 = a3.sibling;
}
function hj(a3, b3, c3) {
  var d4 = a3.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a3 = e4 ? a3.stateNode : a3.stateNode.instance, b3 ? c3.insertBefore(a3, b3) : c3.appendChild(a3);
  else if (d4 !== 4 && (a3 = a3.child, a3 !== null))
    for (hj(a3, b3, c3), a3 = a3.sibling; a3 !== null; )
      hj(a3, b3, c3), a3 = a3.sibling;
}
function cj(a3, b3) {
  for (var c3 = b3, d4 = false, e4, f3; ; ) {
    if (!d4) {
      d4 = c3.return;
      a:
        for (; ; ) {
          if (d4 === null)
            throw Error(y(160));
          e4 = d4.stateNode;
          switch (d4.tag) {
            case 5:
              f3 = false;
              break a;
            case 3:
              e4 = e4.containerInfo;
              f3 = true;
              break a;
            case 4:
              e4 = e4.containerInfo;
              f3 = true;
              break a;
          }
          d4 = d4.return;
        }
      d4 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g2 = a3, h4 = c3, k3 = h4; ; )
          if (bj(g2, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h4)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h4)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f3 ? (g2 = e4, h4 = c3.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h4) : g2.removeChild(h4)) : e4.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e4 = c3.stateNode.containerInfo;
        f3 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a3, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d4 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a3, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b3.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d4 = c3 = c3.next;
        do
          (d4.tag & 3) === 3 && (a3 = d4.destroy, d4.destroy = void 0, a3 !== void 0 && a3()), d4 = d4.next;
        while (d4 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b3.stateNode;
      if (c3 != null) {
        d4 = b3.memoizedProps;
        var e4 = a3 !== null ? a3.memoizedProps : d4;
        a3 = b3.type;
        var f3 = b3.updateQueue;
        b3.updateQueue = null;
        if (f3 !== null) {
          c3[xf] = d4;
          a3 === "input" && d4.type === "radio" && d4.name != null && $a(c3, d4);
          wb(a3, e4);
          b3 = wb(a3, d4);
          for (e4 = 0; e4 < f3.length; e4 += 2) {
            var g2 = f3[e4], h4 = f3[e4 + 1];
            g2 === "style" ? tb(c3, h4) : g2 === "dangerouslySetInnerHTML" ? ob(c3, h4) : g2 === "children" ? pb(c3, h4) : qa(c3, g2, h4, b3);
          }
          switch (a3) {
            case "input":
              ab(c3, d4);
              break;
            case "textarea":
              ib(c3, d4);
              break;
            case "select":
              a3 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d4.multiple, f3 = d4.value, f3 != null ? fb(c3, !!d4.multiple, f3, false) : a3 !== !!d4.multiple && (d4.defaultValue != null ? fb(c3, !!d4.multiple, d4.defaultValue, true) : fb(c3, !!d4.multiple, d4.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b3.stateNode === null)
        throw Error(y(162));
      b3.stateNode.nodeValue = b3.memoizedProps;
      return;
    case 3:
      c3 = b3.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b3.memoizedState !== null && (jj = O(), aj(b3.child, true));
      kj(b3);
      return;
    case 19:
      kj(b3);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b3, b3.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a3) {
  var b3 = a3.updateQueue;
  if (b3 !== null) {
    a3.updateQueue = null;
    var c3 = a3.stateNode;
    c3 === null && (c3 = a3.stateNode = new Ui());
    b3.forEach(function(b4) {
      var d4 = lj.bind(null, a3, b4);
      c3.has(b4) || (c3.add(b4), b4.then(d4, d4));
    });
  }
}
function mj(a3, b3) {
  return a3 !== null && (a3 = a3.memoizedState, a3 === null || a3.dehydrated !== null) ? (b3 = b3.memoizedState, b3 !== null && b3.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a3) {
  a3 = a3.mode;
  if ((a3 & 2) === 0)
    return 1;
  if ((a3 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a3 = Gj;
    var b3 = 4186112 & ~Hj;
    b3 &= -b3;
    b3 === 0 && (a3 = 4186112 & ~a3, b3 = a3 & -a3, b3 === 0 && (b3 = 8192));
    return b3;
  }
  a3 = eg();
  (X & 4) !== 0 && a3 === 98 ? a3 = Xc(12, Gj) : (a3 = Sc(a3), a3 = Xc(a3, Gj));
  return a3;
}
function Jg(a3, b3, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a3 = Kj(a3, b3);
  if (a3 === null)
    return null;
  $c(a3, b3, c3);
  a3 === U && (Hi |= b3, V === 4 && Ii(a3, W));
  var d4 = eg();
  b3 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a3) : (Mj(a3, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d4 !== 98 && d4 !== 99 || (Cj === null ? Cj = new Set([a3]) : Cj.add(a3)), Mj(a3, c3));
  vj = a3;
}
function Kj(a3, b3) {
  a3.lanes |= b3;
  var c3 = a3.alternate;
  c3 !== null && (c3.lanes |= b3);
  c3 = a3;
  for (a3 = a3.return; a3 !== null; )
    a3.childLanes |= b3, c3 = a3.alternate, c3 !== null && (c3.childLanes |= b3), c3 = a3, a3 = a3.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a3, b3) {
  for (var c3 = a3.callbackNode, d4 = a3.suspendedLanes, e4 = a3.pingedLanes, f3 = a3.expirationTimes, g2 = a3.pendingLanes; 0 < g2; ) {
    var h4 = 31 - Vc(g2), k3 = 1 << h4, l3 = f3[h4];
    if (l3 === -1) {
      if ((k3 & d4) === 0 || (k3 & e4) !== 0) {
        l3 = b3;
        Rc(k3);
        var n3 = F;
        f3[h4] = 10 <= n3 ? l3 + 250 : 6 <= n3 ? l3 + 5e3 : -1;
      }
    } else
      l3 <= b3 && (a3.expiredLanes |= k3);
    g2 &= ~k3;
  }
  d4 = Uc(a3, a3 === U ? W : 0);
  b3 = F;
  if (d4 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a3.callbackNode = null, a3.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a3.callbackPriority === b3)
        return;
      c3 !== Zf && Pf(c3);
    }
    b3 === 15 ? (c3 = Lj.bind(null, a3), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b3 === 14 ? c3 = hg(99, Lj.bind(null, a3)) : (c3 = Tc(b3), c3 = hg(c3, Nj.bind(null, a3)));
    a3.callbackPriority = b3;
    a3.callbackNode = c3;
  }
}
function Nj(a3) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b3 = a3.callbackNode;
  if (Oj() && a3.callbackNode !== b3)
    return null;
  var c3 = Uc(a3, a3 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d4 = c3;
  var e4 = X;
  X |= 16;
  var f3 = Pj();
  if (U !== a3 || W !== d4)
    wj(), Qj(a3, d4);
  do
    try {
      Rj();
      break;
    } catch (h4) {
      Sj(a3, h4);
    }
  while (1);
  qg();
  oj.current = f3;
  X = e4;
  Y !== null ? d4 = 0 : (U = null, W = 0, d4 = V);
  if ((tj & Hi) !== 0)
    Qj(a3, 0);
  else if (d4 !== 0) {
    d4 === 2 && (X |= 64, a3.hydrate && (a3.hydrate = false, qf(a3.containerInfo)), c3 = Wc(a3), c3 !== 0 && (d4 = Tj(a3, c3)));
    if (d4 === 1)
      throw b3 = sj, Qj(a3, 0), Ii(a3, c3), Mj(a3, O()), b3;
    a3.finishedWork = a3.current.alternate;
    a3.finishedLanes = c3;
    switch (d4) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a3);
        break;
      case 3:
        Ii(a3, c3);
        if ((c3 & 62914560) === c3 && (d4 = jj + 500 - O(), 10 < d4)) {
          if (Uc(a3, 0) !== 0)
            break;
          e4 = a3.suspendedLanes;
          if ((e4 & c3) !== c3) {
            Hg();
            a3.pingedLanes |= a3.suspendedLanes & e4;
            break;
          }
          a3.timeoutHandle = of(Uj.bind(null, a3), d4);
          break;
        }
        Uj(a3);
        break;
      case 4:
        Ii(a3, c3);
        if ((c3 & 4186112) === c3)
          break;
        d4 = a3.eventTimes;
        for (e4 = -1; 0 < c3; ) {
          var g2 = 31 - Vc(c3);
          f3 = 1 << g2;
          g2 = d4[g2];
          g2 > e4 && (e4 = g2);
          c3 &= ~f3;
        }
        c3 = e4;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a3.timeoutHandle = of(Uj.bind(null, a3), c3);
          break;
        }
        Uj(a3);
        break;
      case 5:
        Uj(a3);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a3, O());
  return a3.callbackNode === b3 ? Nj.bind(null, a3) : null;
}
function Ii(a3, b3) {
  b3 &= ~uj;
  b3 &= ~Hi;
  a3.suspendedLanes |= b3;
  a3.pingedLanes &= ~b3;
  for (a3 = a3.expirationTimes; 0 < b3; ) {
    var c3 = 31 - Vc(b3), d4 = 1 << c3;
    a3[c3] = -1;
    b3 &= ~d4;
  }
}
function Lj(a3) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a3 === U && (a3.expiredLanes & W) !== 0) {
    var b3 = W;
    var c3 = Tj(a3, b3);
    (tj & Hi) !== 0 && (b3 = Uc(a3, b3), c3 = Tj(a3, b3));
  } else
    b3 = Uc(a3, 0), c3 = Tj(a3, b3);
  a3.tag !== 0 && c3 === 2 && (X |= 64, a3.hydrate && (a3.hydrate = false, qf(a3.containerInfo)), b3 = Wc(a3), b3 !== 0 && (c3 = Tj(a3, b3)));
  if (c3 === 1)
    throw c3 = sj, Qj(a3, 0), Ii(a3, b3), Mj(a3, O()), c3;
  a3.finishedWork = a3.current.alternate;
  a3.finishedLanes = b3;
  Uj(a3);
  Mj(a3, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a3 = Cj;
    Cj = null;
    a3.forEach(function(a4) {
      a4.expiredLanes |= 24 & a4.pendingLanes;
      Mj(a4, O());
    });
  }
  ig();
}
function Wj(a3, b3) {
  var c3 = X;
  X |= 1;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a3, b3) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a3, b3) {
  I(rj, qj);
  qj |= b3;
  tj |= b3;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a3, b3) {
  a3.finishedWork = null;
  a3.finishedLanes = 0;
  var c3 = a3.timeoutHandle;
  c3 !== -1 && (a3.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d4 = c3;
      switch (d4.tag) {
        case 1:
          d4 = d4.type.childContextTypes;
          d4 !== null && d4 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d4);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d4);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a3;
  Y = Tg(a3.current, null);
  W = qj = tj = b3;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a3, b3) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d4 = R.memoizedState; d4 !== null; ) {
          var e4 = d4.queue;
          e4 !== null && (e4.pending = null);
          d4 = d4.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b3;
        Y = null;
        break;
      }
      a: {
        var f3 = a3, g2 = c3.return, h4 = c3, k3 = b3;
        b3 = W;
        h4.flags |= 2048;
        h4.firstEffect = h4.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l3 = k3;
          if ((h4.mode & 2) === 0) {
            var n3 = h4.alternate;
            n3 ? (h4.updateQueue = n3.updateQueue, h4.memoizedState = n3.memoizedState, h4.lanes = n3.lanes) : (h4.updateQueue = null, h4.memoizedState = null);
          }
          var A3 = (P.current & 1) !== 0, p3 = g2;
          do {
            var C2;
            if (C2 = p3.tag === 13) {
              var x4 = p3.memoizedState;
              if (x4 !== null)
                C2 = x4.dehydrated !== null ? true : false;
              else {
                var w4 = p3.memoizedProps;
                C2 = w4.fallback === void 0 ? false : w4.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
              }
            }
            if (C2) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u4 = new Set();
                u4.add(l3);
                p3.updateQueue = u4;
              } else
                z3.add(l3);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h4.flags |= 16384;
                h4.flags &= -2981;
                if (h4.tag === 1)
                  if (h4.alternate === null)
                    h4.tag = 17;
                  else {
                    var t4 = zg(-1, 1);
                    t4.tag = 2;
                    Ag(h4, t4);
                  }
                h4.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h4 = b3;
              var q2 = f3.pingCache;
              q2 === null ? (q2 = f3.pingCache = new Oi(), k3 = new Set(), q2.set(l3, k3)) : (k3 = q2.get(l3), k3 === void 0 && (k3 = new Set(), q2.set(l3, k3)));
              if (!k3.has(h4)) {
                k3.add(h4);
                var v3 = Yj.bind(null, f3, l3, h4);
                l3.then(v3, v3);
              }
              p3.flags |= 4096;
              p3.lanes = b3;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k3 = Error((Ra(h4.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h4);
        p3 = g2;
        do {
          switch (p3.tag) {
            case 3:
              f3 = k3;
              p3.flags |= 4096;
              b3 &= -b3;
              p3.lanes |= b3;
              var J2 = Pi(p3, f3, b3);
              Bg(p3, J2);
              break a;
            case 1:
              f3 = k3;
              var K2 = p3.type, Q3 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q3 !== null && typeof Q3.componentDidCatch === "function" && (Ti === null || !Ti.has(Q3)))) {
                p3.flags |= 4096;
                b3 &= -b3;
                p3.lanes |= b3;
                var L3 = Si(p3, f3, b3);
                Bg(p3, L3);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b3 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a3 = oj.current;
  oj.current = Gh;
  return a3 === null ? Gh : a3;
}
function Tj(a3, b3) {
  var c3 = X;
  X |= 16;
  var d4 = Pj();
  U === a3 && W === b3 || Qj(a3, b3);
  do
    try {
      ak();
      break;
    } catch (e4) {
      Sj(a3, e4);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d4;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a3) {
  var b3 = ck(a3.alternate, a3, qj);
  a3.memoizedProps = a3.pendingProps;
  b3 === null ? Zj(a3) : Y = b3;
  pj.current = null;
}
function Zj(a3) {
  var b3 = a3;
  do {
    var c3 = b3.alternate;
    a3 = b3.return;
    if ((b3.flags & 2048) === 0) {
      c3 = Gi(c3, b3, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b3;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d4 = 0, e4 = c3.child; e4 !== null; )
          d4 |= e4.lanes | e4.childLanes, e4 = e4.sibling;
        c3.childLanes = d4;
      }
      a3 !== null && (a3.flags & 2048) === 0 && (a3.firstEffect === null && (a3.firstEffect = b3.firstEffect), b3.lastEffect !== null && (a3.lastEffect !== null && (a3.lastEffect.nextEffect = b3.firstEffect), a3.lastEffect = b3.lastEffect), 1 < b3.flags && (a3.lastEffect !== null ? a3.lastEffect.nextEffect = b3 : a3.firstEffect = b3, a3.lastEffect = b3));
    } else {
      c3 = Li(b3);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a3 !== null && (a3.firstEffect = a3.lastEffect = null, a3.flags |= 2048);
    }
    b3 = b3.sibling;
    if (b3 !== null) {
      Y = b3;
      return;
    }
    Y = b3 = a3;
  } while (b3 !== null);
  V === 0 && (V = 5);
}
function Uj(a3) {
  var b3 = eg();
  gg(99, dk.bind(null, a3, b3));
  return null;
}
function dk(a3, b3) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a3.finishedWork;
  if (c3 === null)
    return null;
  a3.finishedWork = null;
  a3.finishedLanes = 0;
  if (c3 === a3.current)
    throw Error(y(177));
  a3.callbackNode = null;
  var d4 = c3.lanes | c3.childLanes, e4 = d4, f3 = a3.pendingLanes & ~e4;
  a3.pendingLanes = e4;
  a3.suspendedLanes = 0;
  a3.pingedLanes = 0;
  a3.expiredLanes &= e4;
  a3.mutableReadLanes &= e4;
  a3.entangledLanes &= e4;
  e4 = a3.entanglements;
  for (var g2 = a3.eventTimes, h4 = a3.expirationTimes; 0 < f3; ) {
    var k3 = 31 - Vc(f3), l3 = 1 << k3;
    e4[k3] = 0;
    g2[k3] = -1;
    h4[k3] = -1;
    f3 &= ~l3;
  }
  Cj !== null && (d4 & 24) === 0 && Cj.has(a3) && Cj.delete(a3);
  a3 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d4 = c3.firstEffect) : d4 = c3 : d4 = c3.firstEffect;
  if (d4 !== null) {
    e4 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h4 = {start: g2.selectionStart, end: g2.selectionEnd};
      else
        a:
          if (h4 = (h4 = g2.ownerDocument) && h4.defaultView || window, (l3 = h4.getSelection && h4.getSelection()) && l3.rangeCount !== 0) {
            h4 = l3.anchorNode;
            f3 = l3.anchorOffset;
            k3 = l3.focusNode;
            l3 = l3.focusOffset;
            try {
              h4.nodeType, k3.nodeType;
            } catch (va) {
              h4 = null;
              break a;
            }
            var n3 = 0, A3 = -1, p3 = -1, C2 = 0, x4 = 0, w4 = g2, z3 = null;
            b:
              for (; ; ) {
                for (var u4; ; ) {
                  w4 !== h4 || f3 !== 0 && w4.nodeType !== 3 || (A3 = n3 + f3);
                  w4 !== k3 || l3 !== 0 && w4.nodeType !== 3 || (p3 = n3 + l3);
                  w4.nodeType === 3 && (n3 += w4.nodeValue.length);
                  if ((u4 = w4.firstChild) === null)
                    break;
                  z3 = w4;
                  w4 = u4;
                }
                for (; ; ) {
                  if (w4 === g2)
                    break b;
                  z3 === h4 && ++C2 === f3 && (A3 = n3);
                  z3 === k3 && ++x4 === l3 && (p3 = n3);
                  if ((u4 = w4.nextSibling) !== null)
                    break;
                  w4 = z3;
                  z3 = w4.parentNode;
                }
                w4 = u4;
              }
            h4 = A3 === -1 || p3 === -1 ? null : {start: A3, end: p3};
          } else
            h4 = null;
      h4 = h4 || {start: 0, end: 0};
    } else
      h4 = null;
    lf = {focusedElem: g2, selectionRange: h4};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d4;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d4;
    do
      try {
        for (g2 = a3; Z !== null; ) {
          var t4 = Z.flags;
          t4 & 16 && pb(Z.stateNode, "");
          if (t4 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v3 = q2.ref;
              v3 !== null && (typeof v3 === "function" ? v3(null) : v3.current = null);
            }
          }
          switch (t4 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h4 = Z;
              cj(g2, h4);
              var J2 = h4.alternate;
              dj(h4);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v3 = lf;
    q2 = Ne();
    t4 = v3.focusedElem;
    g2 = v3.selectionRange;
    if (q2 !== t4 && t4 && t4.ownerDocument && Me(t4.ownerDocument.documentElement, t4)) {
      g2 !== null && Oe(t4) && (q2 = g2.start, v3 = g2.end, v3 === void 0 && (v3 = q2), "selectionStart" in t4 ? (t4.selectionStart = q2, t4.selectionEnd = Math.min(v3, t4.value.length)) : (v3 = (q2 = t4.ownerDocument || document) && q2.defaultView || window, v3.getSelection && (v3 = v3.getSelection(), h4 = t4.textContent.length, J2 = Math.min(g2.start, h4), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h4), !v3.extend && J2 > g2 && (h4 = g2, g2 = J2, J2 = h4), h4 = Le(t4, J2), f3 = Le(t4, g2), h4 && f3 && (v3.rangeCount !== 1 || v3.anchorNode !== h4.node || v3.anchorOffset !== h4.offset || v3.focusNode !== f3.node || v3.focusOffset !== f3.offset) && (q2 = q2.createRange(), q2.setStart(h4.node, h4.offset), v3.removeAllRanges(), J2 > g2 ? (v3.addRange(q2), v3.extend(f3.node, f3.offset)) : (q2.setEnd(f3.node, f3.offset), v3.addRange(q2))))));
      q2 = [];
      for (v3 = t4; v3 = v3.parentNode; )
        v3.nodeType === 1 && q2.push({element: v3, left: v3.scrollLeft, top: v3.scrollTop});
      typeof t4.focus === "function" && t4.focus();
      for (t4 = 0; t4 < q2.length; t4++)
        v3 = q2[t4], v3.element.scrollLeft = v3.left, v3.element.scrollTop = v3.top;
    }
    fd = !!kf;
    lf = kf = null;
    a3.current = c3;
    Z = d4;
    do
      try {
        for (t4 = a3; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t4, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q3 = Z.ref;
            if (Q3 !== null) {
              var L3 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L3;
                  break;
                default:
                  q2 = L3;
              }
              typeof Q3 === "function" ? Q3(q2) : Q3.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e4;
  } else
    a3.current = c3;
  if (xj)
    xj = false, yj = a3, zj = b3;
  else
    for (Z = d4; Z !== null; )
      b3 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b3;
  d4 = a3.pendingLanes;
  d4 === 0 && (Ti = null);
  d4 === 1 ? a3 === Ej ? Dj++ : (Dj = 0, Ej = a3) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a3, O());
  if (Qi)
    throw Qi = false, a3 = Ri, Ri = null, a3;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a3 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a3, Z) && dc(Z, Ij) && (Jj = true));
    var b3 = Z.flags;
    (b3 & 256) !== 0 && Xi(a3, Z);
    (b3 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a3 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a3, fk);
  }
  return false;
}
function $i(a3, b3) {
  Aj.push(b3, a3);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a3, b3) {
  Bj.push(b3, a3);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a3 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b3 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d4 = 0; d4 < c3.length; d4 += 2) {
    var e4 = c3[d4], f3 = c3[d4 + 1], g2 = e4.destroy;
    e4.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k3) {
        if (f3 === null)
          throw Error(y(330));
        Wi(f3, k3);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d4 = 0; d4 < c3.length; d4 += 2) {
    e4 = c3[d4];
    f3 = c3[d4 + 1];
    try {
      var h4 = e4.create;
      e4.destroy = h4();
    } catch (k3) {
      if (f3 === null)
        throw Error(y(330));
      Wi(f3, k3);
    }
  }
  for (h4 = a3.current.firstEffect; h4 !== null; )
    a3 = h4.nextEffect, h4.nextEffect = null, h4.flags & 8 && (h4.sibling = null, h4.stateNode = null), h4 = a3;
  X = b3;
  ig();
  return true;
}
function gk(a3, b3, c3) {
  b3 = Mi(c3, b3);
  b3 = Pi(a3, b3, 1);
  Ag(a3, b3);
  b3 = Hg();
  a3 = Kj(a3, 1);
  a3 !== null && ($c(a3, 1, b3), Mj(a3, b3));
}
function Wi(a3, b3) {
  if (a3.tag === 3)
    gk(a3, a3, b3);
  else
    for (var c3 = a3.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a3, b3);
        break;
      } else if (c3.tag === 1) {
        var d4 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4))) {
          a3 = Mi(b3, a3);
          var e4 = Si(c3, a3, 1);
          Ag(c3, e4);
          e4 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e4), Mj(c3, e4);
          else if (typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4)))
            try {
              d4.componentDidCatch(b3, a3);
            } catch (f3) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a3, b3, c3) {
  var d4 = a3.pingCache;
  d4 !== null && d4.delete(b3);
  b3 = Hg();
  a3.pingedLanes |= a3.suspendedLanes & c3;
  U === a3 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a3, 0) : uj |= c3);
  Mj(a3, b3);
}
function lj(a3, b3) {
  var c3 = a3.stateNode;
  c3 !== null && c3.delete(b3);
  b3 = 0;
  b3 === 0 && (b3 = a3.mode, (b3 & 2) === 0 ? b3 = 1 : (b3 & 4) === 0 ? b3 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b3 = Yc(62914560 & ~Gj), b3 === 0 && (b3 = 4194304)));
  c3 = Hg();
  a3 = Kj(a3, b3);
  a3 !== null && ($c(a3, b3, c3), Mj(a3, c3));
}
var ck;
ck = function(a3, b3, c3) {
  var d4 = b3.lanes;
  if (a3 !== null)
    if (a3.memoizedProps !== b3.pendingProps || N.current)
      ug = true;
    else if ((c3 & d4) !== 0)
      ug = (a3.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b3.tag) {
        case 3:
          ri(b3);
          sh();
          break;
        case 5:
          gh(b3);
          break;
        case 1:
          Ff(b3.type) && Jf(b3);
          break;
        case 4:
          eh(b3, b3.stateNode.containerInfo);
          break;
        case 10:
          d4 = b3.memoizedProps.value;
          var e4 = b3.type._context;
          I(mg, e4._currentValue);
          e4._currentValue = d4;
          break;
        case 13:
          if (b3.memoizedState !== null) {
            if ((c3 & b3.child.childLanes) !== 0)
              return ti(a3, b3, c3);
            I(P, P.current & 1);
            b3 = hi(a3, b3, c3);
            return b3 !== null ? b3.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d4 = (c3 & b3.childLanes) !== 0;
          if ((a3.flags & 64) !== 0) {
            if (d4)
              return Ai(a3, b3, c3);
            b3.flags |= 64;
          }
          e4 = b3.memoizedState;
          e4 !== null && (e4.rendering = null, e4.tail = null, e4.lastEffect = null);
          I(P, P.current);
          if (d4)
            break;
          else
            return null;
        case 23:
        case 24:
          return b3.lanes = 0, mi(a3, b3, c3);
      }
      return hi(a3, b3, c3);
    }
  else
    ug = false;
  b3.lanes = 0;
  switch (b3.tag) {
    case 2:
      d4 = b3.type;
      a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2);
      a3 = b3.pendingProps;
      e4 = Ef(b3, M.current);
      tg(b3, c3);
      e4 = Ch(null, b3, d4, a3, e4, c3);
      b3.flags |= 1;
      if (typeof e4 === "object" && e4 !== null && typeof e4.render === "function" && e4.$$typeof === void 0) {
        b3.tag = 1;
        b3.memoizedState = null;
        b3.updateQueue = null;
        if (Ff(d4)) {
          var f3 = true;
          Jf(b3);
        } else
          f3 = false;
        b3.memoizedState = e4.state !== null && e4.state !== void 0 ? e4.state : null;
        xg(b3);
        var g2 = d4.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b3, d4, g2, a3);
        e4.updater = Kg;
        b3.stateNode = e4;
        e4._reactInternals = b3;
        Og(b3, d4, a3, c3);
        b3 = qi(null, b3, d4, true, f3, c3);
      } else
        b3.tag = 0, fi(null, b3, e4, c3), b3 = b3.child;
      return b3;
    case 16:
      e4 = b3.elementType;
      a: {
        a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2);
        a3 = b3.pendingProps;
        f3 = e4._init;
        e4 = f3(e4._payload);
        b3.type = e4;
        f3 = b3.tag = hk(e4);
        a3 = lg(e4, a3);
        switch (f3) {
          case 0:
            b3 = li(null, b3, e4, a3, c3);
            break a;
          case 1:
            b3 = pi(null, b3, e4, a3, c3);
            break a;
          case 11:
            b3 = gi(null, b3, e4, a3, c3);
            break a;
          case 14:
            b3 = ii(null, b3, e4, lg(e4.type, a3), d4, c3);
            break a;
        }
        throw Error(y(306, e4, ""));
      }
      return b3;
    case 0:
      return d4 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d4 ? e4 : lg(d4, e4), li(a3, b3, d4, e4, c3);
    case 1:
      return d4 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d4 ? e4 : lg(d4, e4), pi(a3, b3, d4, e4, c3);
    case 3:
      ri(b3);
      d4 = b3.updateQueue;
      if (a3 === null || d4 === null)
        throw Error(y(282));
      d4 = b3.pendingProps;
      e4 = b3.memoizedState;
      e4 = e4 !== null ? e4.element : null;
      yg(a3, b3);
      Cg(b3, d4, null, c3);
      d4 = b3.memoizedState.element;
      if (d4 === e4)
        sh(), b3 = hi(a3, b3, c3);
      else {
        e4 = b3.stateNode;
        if (f3 = e4.hydrate)
          kh = rf(b3.stateNode.containerInfo.firstChild), jh = b3, f3 = lh = true;
        if (f3) {
          a3 = e4.mutableSourceEagerHydrationData;
          if (a3 != null)
            for (e4 = 0; e4 < a3.length; e4 += 2)
              f3 = a3[e4], f3._workInProgressVersionPrimary = a3[e4 + 1], th.push(f3);
          c3 = Zg(b3, null, d4, c3);
          for (b3.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a3, b3, d4, c3), sh();
        b3 = b3.child;
      }
      return b3;
    case 5:
      return gh(b3), a3 === null && ph(b3), d4 = b3.type, e4 = b3.pendingProps, f3 = a3 !== null ? a3.memoizedProps : null, g2 = e4.children, nf(d4, e4) ? g2 = null : f3 !== null && nf(d4, f3) && (b3.flags |= 16), oi(a3, b3), fi(a3, b3, g2, c3), b3.child;
    case 6:
      return a3 === null && ph(b3), null;
    case 13:
      return ti(a3, b3, c3);
    case 4:
      return eh(b3, b3.stateNode.containerInfo), d4 = b3.pendingProps, a3 === null ? b3.child = Yg(b3, null, d4, c3) : fi(a3, b3, d4, c3), b3.child;
    case 11:
      return d4 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d4 ? e4 : lg(d4, e4), gi(a3, b3, d4, e4, c3);
    case 7:
      return fi(a3, b3, b3.pendingProps, c3), b3.child;
    case 8:
      return fi(a3, b3, b3.pendingProps.children, c3), b3.child;
    case 12:
      return fi(a3, b3, b3.pendingProps.children, c3), b3.child;
    case 10:
      a: {
        d4 = b3.type._context;
        e4 = b3.pendingProps;
        g2 = b3.memoizedProps;
        f3 = e4.value;
        var h4 = b3.type._context;
        I(mg, h4._currentValue);
        h4._currentValue = f3;
        if (g2 !== null)
          if (h4 = g2.value, f3 = He(h4, f3) ? 0 : (typeof d4._calculateChangedBits === "function" ? d4._calculateChangedBits(h4, f3) : 1073741823) | 0, f3 === 0) {
            if (g2.children === e4.children && !N.current) {
              b3 = hi(a3, b3, c3);
              break a;
            }
          } else
            for (h4 = b3.child, h4 !== null && (h4.return = b3); h4 !== null; ) {
              var k3 = h4.dependencies;
              if (k3 !== null) {
                g2 = h4.child;
                for (var l3 = k3.firstContext; l3 !== null; ) {
                  if (l3.context === d4 && (l3.observedBits & f3) !== 0) {
                    h4.tag === 1 && (l3 = zg(-1, c3 & -c3), l3.tag = 2, Ag(h4, l3));
                    h4.lanes |= c3;
                    l3 = h4.alternate;
                    l3 !== null && (l3.lanes |= c3);
                    sg(h4.return, c3);
                    k3.lanes |= c3;
                    break;
                  }
                  l3 = l3.next;
                }
              } else
                g2 = h4.tag === 10 ? h4.type === b3.type ? null : h4.child : h4.child;
              if (g2 !== null)
                g2.return = h4;
              else
                for (g2 = h4; g2 !== null; ) {
                  if (g2 === b3) {
                    g2 = null;
                    break;
                  }
                  h4 = g2.sibling;
                  if (h4 !== null) {
                    h4.return = g2.return;
                    g2 = h4;
                    break;
                  }
                  g2 = g2.return;
                }
              h4 = g2;
            }
        fi(a3, b3, e4.children, c3);
        b3 = b3.child;
      }
      return b3;
    case 9:
      return e4 = b3.type, f3 = b3.pendingProps, d4 = f3.children, tg(b3, c3), e4 = vg(e4, f3.unstable_observedBits), d4 = d4(e4), b3.flags |= 1, fi(a3, b3, d4, c3), b3.child;
    case 14:
      return e4 = b3.type, f3 = lg(e4, b3.pendingProps), f3 = lg(e4.type, f3), ii(a3, b3, e4, f3, d4, c3);
    case 15:
      return ki(a3, b3, b3.type, b3.pendingProps, d4, c3);
    case 17:
      return d4 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d4 ? e4 : lg(d4, e4), a3 !== null && (a3.alternate = null, b3.alternate = null, b3.flags |= 2), b3.tag = 1, Ff(d4) ? (a3 = true, Jf(b3)) : a3 = false, tg(b3, c3), Mg(b3, d4, e4), Og(b3, d4, e4, c3), qi(null, b3, d4, true, a3, c3);
    case 19:
      return Ai(a3, b3, c3);
    case 23:
      return mi(a3, b3, c3);
    case 24:
      return mi(a3, b3, c3);
  }
  throw Error(y(156, b3.tag));
};
function ik(a3, b3, c3, d4) {
  this.tag = a3;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b3;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d4;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a3, b3, c3, d4) {
  return new ik(a3, b3, c3, d4);
}
function ji(a3) {
  a3 = a3.prototype;
  return !(!a3 || !a3.isReactComponent);
}
function hk(a3) {
  if (typeof a3 === "function")
    return ji(a3) ? 1 : 0;
  if (a3 !== void 0 && a3 !== null) {
    a3 = a3.$$typeof;
    if (a3 === Aa)
      return 11;
    if (a3 === Da)
      return 14;
  }
  return 2;
}
function Tg(a3, b3) {
  var c3 = a3.alternate;
  c3 === null ? (c3 = nh(a3.tag, b3, a3.key, a3.mode), c3.elementType = a3.elementType, c3.type = a3.type, c3.stateNode = a3.stateNode, c3.alternate = a3, a3.alternate = c3) : (c3.pendingProps = b3, c3.type = a3.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a3.childLanes;
  c3.lanes = a3.lanes;
  c3.child = a3.child;
  c3.memoizedProps = a3.memoizedProps;
  c3.memoizedState = a3.memoizedState;
  c3.updateQueue = a3.updateQueue;
  b3 = a3.dependencies;
  c3.dependencies = b3 === null ? null : {lanes: b3.lanes, firstContext: b3.firstContext};
  c3.sibling = a3.sibling;
  c3.index = a3.index;
  c3.ref = a3.ref;
  return c3;
}
function Vg(a3, b3, c3, d4, e4, f3) {
  var g2 = 2;
  d4 = a3;
  if (typeof a3 === "function")
    ji(a3) && (g2 = 1);
  else if (typeof a3 === "string")
    g2 = 5;
  else
    a:
      switch (a3) {
        case ua:
          return Xg(c3.children, e4, f3, b3);
        case Ha:
          g2 = 8;
          e4 |= 16;
          break;
        case wa:
          g2 = 8;
          e4 |= 1;
          break;
        case xa:
          return a3 = nh(12, c3, b3, e4 | 8), a3.elementType = xa, a3.type = xa, a3.lanes = f3, a3;
        case Ba:
          return a3 = nh(13, c3, b3, e4), a3.type = Ba, a3.elementType = Ba, a3.lanes = f3, a3;
        case Ca:
          return a3 = nh(19, c3, b3, e4), a3.elementType = Ca, a3.lanes = f3, a3;
        case Ia:
          return vi(c3, e4, f3, b3);
        case Ja:
          return a3 = nh(24, c3, b3, e4), a3.elementType = Ja, a3.lanes = f3, a3;
        default:
          if (typeof a3 === "object" && a3 !== null)
            switch (a3.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d4 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a3 == null ? a3 : typeof a3, ""));
      }
  b3 = nh(g2, c3, b3, e4);
  b3.elementType = a3;
  b3.type = d4;
  b3.lanes = f3;
  return b3;
}
function Xg(a3, b3, c3, d4) {
  a3 = nh(7, a3, d4, b3);
  a3.lanes = c3;
  return a3;
}
function vi(a3, b3, c3, d4) {
  a3 = nh(23, a3, d4, b3);
  a3.elementType = Ia;
  a3.lanes = c3;
  return a3;
}
function Ug(a3, b3, c3) {
  a3 = nh(6, a3, null, b3);
  a3.lanes = c3;
  return a3;
}
function Wg(a3, b3, c3) {
  b3 = nh(4, a3.children !== null ? a3.children : [], a3.key, b3);
  b3.lanes = c3;
  b3.stateNode = {containerInfo: a3.containerInfo, pendingChildren: null, implementation: a3.implementation};
  return b3;
}
function jk(a3, b3, c3) {
  this.tag = b3;
  this.containerInfo = a3;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c3;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a3, b3, c3) {
  var d4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d4 == null ? null : "" + d4, children: a3, containerInfo: b3, implementation: c3};
}
function lk(a3, b3, c3, d4) {
  var e4 = b3.current, f3 = Hg(), g2 = Ig(e4);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h4 = c3;
        do {
          switch (h4.tag) {
            case 3:
              h4 = h4.stateNode.context;
              break b;
            case 1:
              if (Ff(h4.type)) {
                h4 = h4.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h4 = h4.return;
        } while (h4 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k3 = c3.type;
        if (Ff(k3)) {
          c3 = If(c3, k3, h4);
          break a;
        }
      }
      c3 = h4;
    } else
      c3 = Cf;
  b3.context === null ? b3.context = c3 : b3.pendingContext = c3;
  b3 = zg(f3, g2);
  b3.payload = {element: a3};
  d4 = d4 === void 0 ? null : d4;
  d4 !== null && (b3.callback = d4);
  Ag(e4, b3);
  Jg(e4, g2, f3);
  return g2;
}
function mk(a3) {
  a3 = a3.current;
  if (!a3.child)
    return null;
  switch (a3.child.tag) {
    case 5:
      return a3.child.stateNode;
    default:
      return a3.child.stateNode;
  }
}
function nk(a3, b3) {
  a3 = a3.memoizedState;
  if (a3 !== null && a3.dehydrated !== null) {
    var c3 = a3.retryLane;
    a3.retryLane = c3 !== 0 && c3 < b3 ? c3 : b3;
  }
}
function ok(a3, b3) {
  nk(a3, b3);
  (a3 = a3.alternate) && nk(a3, b3);
}
function pk() {
  return null;
}
function qk(a3, b3, c3) {
  var d4 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a3, b3, c3 != null && c3.hydrate === true);
  b3 = nh(3, null, null, b3 === 2 ? 7 : b3 === 1 ? 3 : 0);
  c3.current = b3;
  b3.stateNode = c3;
  xg(b3);
  a3[ff] = c3.current;
  cf(a3.nodeType === 8 ? a3.parentNode : a3);
  if (d4)
    for (a3 = 0; a3 < d4.length; a3++) {
      b3 = d4[a3];
      var e4 = b3._getVersion;
      e4 = e4(b3._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b3, e4] : c3.mutableSourceEagerHydrationData.push(b3, e4);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a3) {
  lk(a3, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a3 = this._internalRoot, b3 = a3.containerInfo;
  lk(null, a3, null, function() {
    b3[ff] = null;
  });
};
function rk(a3) {
  return !(!a3 || a3.nodeType !== 1 && a3.nodeType !== 9 && a3.nodeType !== 11 && (a3.nodeType !== 8 || a3.nodeValue !== " react-mount-point-unstable "));
}
function sk(a3, b3) {
  b3 || (b3 = a3 ? a3.nodeType === 9 ? a3.documentElement : a3.firstChild : null, b3 = !(!b3 || b3.nodeType !== 1 || !b3.hasAttribute("data-reactroot")));
  if (!b3)
    for (var c3; c3 = a3.lastChild; )
      a3.removeChild(c3);
  return new qk(a3, 0, b3 ? {hydrate: true} : void 0);
}
function tk(a3, b3, c3, d4, e4) {
  var f3 = c3._reactRootContainer;
  if (f3) {
    var g2 = f3._internalRoot;
    if (typeof e4 === "function") {
      var h4 = e4;
      e4 = function() {
        var a4 = mk(g2);
        h4.call(a4);
      };
    }
    lk(b3, g2, a3, e4);
  } else {
    f3 = c3._reactRootContainer = sk(c3, d4);
    g2 = f3._internalRoot;
    if (typeof e4 === "function") {
      var k3 = e4;
      e4 = function() {
        var a4 = mk(g2);
        k3.call(a4);
      };
    }
    Xj(function() {
      lk(b3, g2, a3, e4);
    });
  }
  return mk(g2);
}
ec = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg();
    Jg(a3, 4, b3);
    ok(a3, 4);
  }
};
fc = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg();
    Jg(a3, 67108864, b3);
    ok(a3, 67108864);
  }
};
gc = function(a3) {
  if (a3.tag === 13) {
    var b3 = Hg(), c3 = Ig(a3);
    Jg(a3, c3, b3);
    ok(a3, c3);
  }
};
hc = function(a3, b3) {
  return b3();
};
yb = function(a3, b3, c3) {
  switch (b3) {
    case "input":
      ab(a3, c3);
      b3 = c3.name;
      if (c3.type === "radio" && b3 != null) {
        for (c3 = a3; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
        for (b3 = 0; b3 < c3.length; b3++) {
          var d4 = c3[b3];
          if (d4 !== a3 && d4.form === a3.form) {
            var e4 = Db(d4);
            if (!e4)
              throw Error(y(90));
            Wa(d4);
            ab(d4, e4);
          }
        }
      }
      break;
    case "textarea":
      ib(a3, c3);
      break;
    case "select":
      b3 = c3.value, b3 != null && fb(a3, !!c3.multiple, b3, false);
  }
};
Gb = Wj;
Hb = function(a3, b3, c3, d4, e4) {
  var f3 = X;
  X |= 4;
  try {
    return gg(98, a3.bind(null, b3, c3, d4, e4));
  } finally {
    X = f3, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a3, b3) {
  var c3 = X;
  X |= 2;
  try {
    return a3(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a3, b3) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b3))
    throw Error(y(200));
  return kk(a3, b3, null, c3);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a3) {
  a3 = cc(a3);
  return a3 === null ? null : a3.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a3) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a3) {
  if (a3 == null)
    return null;
  if (a3.nodeType === 1)
    return a3;
  var b3 = a3._reactInternals;
  if (b3 === void 0) {
    if (typeof a3.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a3)));
  }
  a3 = cc(b3);
  a3 = a3 === null ? null : a3.stateNode;
  return a3;
};
var flushSync = function(a3, b3) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a3(b3);
  X |= 1;
  try {
    if (a3)
      return gg(99, a3.bind(null, b3));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a3, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a3, b3, true, c3);
};
var render = function(a3, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a3, b3, false, c3);
};
var unmountComponentAtNode = function(a3) {
  if (!rk(a3))
    throw Error(y(40));
  return a3._reactRootContainer ? (Xj(function() {
    tk(null, null, a3, false, function() {
      a3._reactRootContainer = null;
      a3[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a3, b3) {
  return uk(a3, b3, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a3, b3, c3, d4) {
  if (!rk(c3))
    throw Error(y(200));
  if (a3 == null || a3._reactInternals === void 0)
    throw Error(y(38));
  return tk(a3, b3, c3, false, d4);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// docs/snowpack/pkg/common/sort-d783cdb4-0d3f0afb.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i3 = 0; i3 < document.styleSheets.length; i3++) {
    if (document.styleSheets[i3].ownerNode === tag) {
      return document.styleSheets[i3];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e4) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var n = "comm";
var c = "rule";
var s = "decl";
var i = "@import";
var h = "@keyframes";
var $ = Math.abs;
var k = String.fromCharCode;
var g = Object.assign;
function m(e22, r22) {
  return C(e22, 0) ^ 45 ? (((r22 << 2 ^ C(e22, 0)) << 2 ^ C(e22, 1)) << 2 ^ C(e22, 2)) << 2 ^ C(e22, 3) : 0;
}
function x(e22) {
  return e22.trim();
}
function y2(e22, r22) {
  return (e22 = r22.exec(e22)) ? e22[0] : e22;
}
function j(e22, r22, a22) {
  return e22.replace(r22, a22);
}
function z(e22, r22) {
  return e22.indexOf(r22);
}
function C(e22, r22) {
  return e22.charCodeAt(r22) | 0;
}
function O2(e22, r22, a22) {
  return e22.slice(r22, a22);
}
function A(e22) {
  return e22.length;
}
function M2(e22) {
  return e22.length;
}
function S2(e22, r22) {
  return r22.push(e22), e22;
}
function q(e22, r22) {
  return e22.map(r22).join("");
}
var B2 = 1;
var D2 = 1;
var E = 0;
var F2 = 0;
var G2 = 0;
var H2 = "";
function I2(e22, r22, a22, n22, c22, s22, t22) {
  return {value: e22, root: r22, parent: a22, type: n22, props: c22, children: s22, line: B2, column: D2, length: t22, return: ""};
}
function J(e22, r22) {
  return g(I2("", null, null, "", null, null, 0), e22, {length: -e22.length}, r22);
}
function K() {
  return G2;
}
function L() {
  G2 = F2 > 0 ? C(H2, --F2) : 0;
  if (D2--, G2 === 10)
    D2 = 1, B2--;
  return G2;
}
function N2() {
  G2 = F2 < E ? C(H2, F2++) : 0;
  if (D2++, G2 === 10)
    D2 = 1, B2++;
  return G2;
}
function P2() {
  return C(H2, F2);
}
function Q() {
  return F2;
}
function R2(e22, r22) {
  return O2(H2, e22, r22);
}
function T2(e22) {
  switch (e22) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U2(e22) {
  return B2 = D2 = 1, E = A(H2 = e22), F2 = 0, [];
}
function V2(e22) {
  return H2 = "", e22;
}
function W2(e22) {
  return x(R2(F2 - 1, ee2(e22 === 91 ? e22 + 2 : e22 === 40 ? e22 + 1 : e22)));
}
function Y2(e22) {
  while (G2 = P2())
    if (G2 < 33)
      N2();
    else
      break;
  return T2(e22) > 2 || T2(G2) > 3 ? "" : " ";
}
function _(e22, r22) {
  while (--r22 && N2())
    if (G2 < 48 || G2 > 102 || G2 > 57 && G2 < 65 || G2 > 70 && G2 < 97)
      break;
  return R2(e22, Q() + (r22 < 6 && P2() == 32 && N2() == 32));
}
function ee2(e22) {
  while (N2())
    switch (G2) {
      case e22:
        return F2;
      case 34:
      case 39:
        if (e22 !== 34 && e22 !== 39)
          ee2(G2);
        break;
      case 40:
        if (e22 === 41)
          ee2(e22);
        break;
      case 92:
        N2();
        break;
    }
  return F2;
}
function re2(e22, r22) {
  while (N2())
    if (e22 + G2 === 47 + 10)
      break;
    else if (e22 + G2 === 42 + 42 && P2() === 47)
      break;
  return "/*" + R2(r22, F2 - 1) + "*" + k(e22 === 47 ? e22 : N2());
}
function ae2(e22) {
  while (!T2(P2()))
    N2();
  return R2(e22, F2);
}
function ne2(e22) {
  return V2(ce2("", null, null, null, [""], e22 = U2(e22), 0, [0], e22));
}
function ce2(e22, r22, a22, n22, c22, s22, t22, u22, i22) {
  var f22 = 0;
  var o22 = 0;
  var l22 = t22;
  var v22 = 0;
  var p22 = 0;
  var h22 = 0;
  var b22 = 1;
  var w22 = 1;
  var d22 = 1;
  var $2 = 0;
  var g2 = "";
  var m22 = c22;
  var x22 = s22;
  var y22 = n22;
  var O22 = g2;
  while (w22)
    switch (h22 = $2, $2 = N2()) {
      case 40:
        if (h22 != 108 && C(O22, l22 - 1) == 58) {
          if (z(O22 += j(W2($2), "&", "&\f"), "&\f") != -1)
            d22 = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        O22 += W2($2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O22 += Y2(h22);
        break;
      case 92:
        O22 += _(Q() - 1, 7);
        continue;
      case 47:
        switch (P2()) {
          case 42:
          case 47:
            S2(te2(re2(N2(), Q()), r22, a22), i22);
            break;
          default:
            O22 += "/";
        }
        break;
      case 123 * b22:
        u22[f22++] = A(O22) * d22;
      case 125 * b22:
      case 59:
      case 0:
        switch ($2) {
          case 0:
          case 125:
            w22 = 0;
          case 59 + o22:
            if (p22 > 0 && A(O22) - l22)
              S2(p22 > 32 ? ue2(O22 + ";", n22, a22, l22 - 1) : ue2(j(O22, " ", "") + ";", n22, a22, l22 - 2), i22);
            break;
          case 59:
            O22 += ";";
          default:
            S2(y22 = se2(O22, r22, a22, f22, o22, c22, u22, g2, m22 = [], x22 = [], l22), s22);
            if ($2 === 123)
              if (o22 === 0)
                ce2(O22, r22, y22, y22, m22, s22, l22, u22, x22);
              else
                switch (v22 === 99 && C(O22, 3) === 110 ? 100 : v22) {
                  case 100:
                  case 109:
                  case 115:
                    ce2(e22, y22, y22, n22 && S2(se2(e22, y22, y22, 0, 0, c22, u22, g2, c22, m22 = [], l22), x22), c22, x22, l22, u22, n22 ? m22 : x22);
                    break;
                  default:
                    ce2(O22, y22, y22, y22, [""], x22, 0, u22, x22);
                }
        }
        f22 = o22 = p22 = 0, b22 = d22 = 1, g2 = O22 = "", l22 = t22;
        break;
      case 58:
        l22 = 1 + A(O22), p22 = h22;
      default:
        if (b22 < 1) {
          if ($2 == 123)
            --b22;
          else if ($2 == 125 && b22++ == 0 && L() == 125)
            continue;
        }
        switch (O22 += k($2), $2 * b22) {
          case 38:
            d22 = o22 > 0 ? 1 : (O22 += "\f", -1);
            break;
          case 44:
            u22[f22++] = (A(O22) - 1) * d22, d22 = 1;
            break;
          case 64:
            if (P2() === 45)
              O22 += W2(N2());
            v22 = P2(), o22 = l22 = A(g2 = O22 += ae2(Q())), $2++;
            break;
          case 45:
            if (h22 === 45 && A(O22) == 2)
              b22 = 0;
        }
    }
  return s22;
}
function se2(e22, r22, a22, n22, s22, t22, u22, i22, f22, o22, l22) {
  var v22 = s22 - 1;
  var p22 = s22 === 0 ? t22 : [""];
  var h22 = M2(p22);
  for (var b22 = 0, w22 = 0, d22 = 0; b22 < n22; ++b22)
    for (var k22 = 0, g2 = O2(e22, v22 + 1, v22 = $(w22 = u22[b22])), m22 = e22; k22 < h22; ++k22)
      if (m22 = x(w22 > 0 ? p22[k22] + " " + g2 : j(g2, /&\f/g, p22[k22])))
        f22[d22++] = m22;
  return I2(e22, r22, a22, s22 === 0 ? c : i22, f22, o22, l22);
}
function te2(e22, r22, a22) {
  return I2(e22, r22, a22, n, k(K()), O2(e22, 2, -2), 0);
}
function ue2(e22, r22, a22, n22) {
  return I2(e22, r22, a22, s, O2(e22, 0, n22), O2(e22, n22 + 1, -1), n22);
}
function fe2(e22, r22) {
  var a22 = "";
  var n22 = M2(e22);
  for (var c22 = 0; c22 < n22; c22++)
    a22 += r22(e22[c22], c22, e22, r22) || "";
  return a22;
}
function oe2(e22, r22, a22, t22) {
  switch (e22.type) {
    case i:
    case s:
      return e22.return = e22.return || e22.value;
    case n:
      return "";
    case h:
      return e22.return = e22.value + "{" + fe2(e22.children, t22) + "}";
    case c:
      e22.value = e22.props.join(",");
  }
  return A(a22 = fe2(e22.children, t22)) ? e22.return = e22.value + "{" + a22 + "}" : "";
}
function le2(e22) {
  var r22 = M2(e22);
  return function(a22, n22, c22, s22) {
    var t22 = "";
    for (var u22 = 0; u22 < r22; u22++)
      t22 += e22[u22](a22, n22, c22, s22) || "";
    return t22;
  };
}
function ve2(e22) {
  return function(r22) {
    if (!r22.root) {
      if (r22 = r22.return)
        e22(r22);
    }
  };
}
function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = P2();
    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (T2(character)) {
      break;
    }
    N2();
  }
  return R2(begin, F2);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (T2(character)) {
      case 0:
        if (character === 38 && P2() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(F2 - 1, points, index);
        break;
      case 2:
        parsed[index] += W2(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = P2() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += k(character);
    }
  } while (character = N2());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return V2(toRules(U2(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i3 = 0, k3 = 0; i3 < rules.length; i3++) {
    for (var j4 = 0; j4 < parentRules.length; j4++, k3++) {
      element.props[k3] = points[i3] ? rules[i3].replace(/&\f/g, parentRules[j4]) : parentRules[j4] + " " + rules[i3];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length) {
  switch (m(value, length)) {
    case 5103:
      return a + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    case 6828:
    case 4268:
      return a + value + e + value + value;
    case 6165:
      return a + value + e + "flex-" + value + value;
    case 5187:
      return a + value + j(value, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + value;
    case 5443:
      return a + value + e + "flex-item-" + j(value, /flex-|-self/, "") + value;
    case 4675:
      return a + value + e + "flex-line-pack" + j(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return a + value + e + j(value, "shrink", "negative") + value;
    case 5292:
      return a + value + e + j(value, "basis", "preferred-size") + value;
    case 6060:
      return a + "box-" + j(value, "-grow", "") + a + value + e + j(value, "grow", "positive") + value;
    case 4554:
      return a + j(value, /([^-])(transform)/g, "$1" + a + "$2") + value;
    case 6187:
      return j(j(j(value, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return j(value, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return j(j(value, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(value, /(.+)-inline(.+)/, a + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(value) - 1 - length > 6)
        switch (C(value, length + 1)) {
          case 109:
            if (C(value, length + 4) !== 45)
              break;
          case 102:
            return j(value, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + (C(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~z(value, "stretch") ? prefix(j(value, "stretch", "fill-available"), length) + value : value;
        }
      break;
    case 4949:
      if (C(value, length + 1) !== 115)
        break;
    case 6444:
      switch (C(value, A(value) - 3 - (~z(value, "!important") && 10))) {
        case 107:
          return j(value, ":", ":" + a) + value;
        case 101:
          return j(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (C(value, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (C(value, length + 11)) {
        case 114:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return a + value + e + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case s:
          element["return"] = prefix(element.value, element.length);
          break;
        case h:
          return fe2([J(element, {
            value: j(element.value, "@", "@" + a)
          })], callback);
        case c:
          if (element.length)
            return q(element.props, function(value) {
              switch (y2(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return fe2([J(element, {
                    props: [j(value, /:(read-\w+)/, ":" + r + "$1")]
                  })], callback);
                case "::placeholder":
                  return fe2([J(element, {
                    props: [j(value, /:(plac\w+)/, ":" + a + "input-$1")]
                  }), J(element, {
                    props: [j(value, /:(plac\w+)/, ":" + r + "$1")]
                  }), J(element, {
                    props: [j(value, /:(plac\w+)/, e + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      for (var i3 = 1; i3 < attrib.length; i3++) {
        inserted[attrib[i3]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [oe2, ve2(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le2(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return fe2(ne2(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c$1 = b ? Symbol.for("react.element") : 60103;
var d = b ? Symbol.for("react.portal") : 60106;
var e$1 = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g$1 = b ? Symbol.for("react.profiler") : 60114;
var h$1 = b ? Symbol.for("react.provider") : 60109;
var k$1 = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m$1 = b ? Symbol.for("react.concurrent_mode") : 60111;
var n$1 = b ? Symbol.for("react.forward_ref") : 60112;
var p = b ? Symbol.for("react.suspense") : 60113;
var q$1 = b ? Symbol.for("react.suspense_list") : 60120;
var r$1 = b ? Symbol.for("react.memo") : 60115;
var t = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x$1 = b ? Symbol.for("react.responder") : 60118;
var y$1 = b ? Symbol.for("react.scope") : 60119;
function z$1(a3) {
  if (typeof a3 === "object" && a3 !== null) {
    var u4 = a3.$$typeof;
    switch (u4) {
      case c$1:
        switch (a3 = a3.type, a3) {
          case l:
          case m$1:
          case e$1:
          case g$1:
          case f:
          case p:
            return a3;
          default:
            switch (a3 = a3 && a3.$$typeof, a3) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a3;
              default:
                return u4;
            }
        }
      case d:
        return u4;
    }
  }
}
function A$1(a3) {
  return z$1(a3) === m$1;
}
var AsyncMode = l;
var ConcurrentMode = m$1;
var ContextConsumer = k$1;
var ContextProvider = h$1;
var Element = c$1;
var ForwardRef = n$1;
var Fragment = e$1;
var Lazy = t;
var Memo = r$1;
var Portal = d;
var Profiler = g$1;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function(a3) {
  return A$1(a3) || z$1(a3) === l;
};
var isConcurrentMode = A$1;
var isContextConsumer = function(a3) {
  return z$1(a3) === k$1;
};
var isContextProvider = function(a3) {
  return z$1(a3) === h$1;
};
var isElement = function(a3) {
  return typeof a3 === "object" && a3 !== null && a3.$$typeof === c$1;
};
var isForwardRef = function(a3) {
  return z$1(a3) === n$1;
};
var isFragment = function(a3) {
  return z$1(a3) === e$1;
};
var isLazy = function(a3) {
  return z$1(a3) === t;
};
var isMemo = function(a3) {
  return z$1(a3) === r$1;
};
var isPortal = function(a3) {
  return z$1(a3) === d;
};
var isProfiler = function(a3) {
  return z$1(a3) === g$1;
};
var isStrictMode = function(a3) {
  return z$1(a3) === f;
};
var isSuspense = function(a3) {
  return z$1(a3) === p;
};
var isValidElementType = function(a3) {
  return typeof a3 === "string" || typeof a3 === "function" || a3 === e$1 || a3 === m$1 || a3 === g$1 || a3 === f || a3 === p || a3 === q$1 || typeof a3 === "object" && a3 !== null && (a3.$$typeof === t || a3.$$typeof === r$1 || a3.$$typeof === h$1 || a3.$$typeof === k$1 || a3.$$typeof === n$1 || a3.$$typeof === w || a3.$$typeof === x$1 || a3.$$typeof === y$1 || a3.$$typeof === v);
};
var typeOf = z$1;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h4 = 0;
  var k3, i3 = 0, len = str.length;
  for (; len >= 4; ++i3, len -= 4) {
    k3 = str.charCodeAt(i3) & 255 | (str.charCodeAt(++i3) & 255) << 8 | (str.charCodeAt(++i3) & 255) << 16 | (str.charCodeAt(++i3) & 255) << 24;
    k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
    k3 ^= k3 >>> 24;
    h4 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h4 ^= (str.charCodeAt(i3 + 2) & 255) << 16;
    case 2:
      h4 ^= (str.charCodeAt(i3 + 1) & 255) << 8;
    case 1:
      h4 ^= str.charCodeAt(i3) & 255;
      h4 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  }
  h4 ^= h4 >>> 13;
  h4 = (h4 & 65535) * 1540483477 + ((h4 >>> 16) * 59797 << 16);
  return ((h4 ^ h4 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i3 = 0; i3 < obj.length; i3++) {
      string += handleInterpolation(mergedProps, registered, obj[i3]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i3 = 1; i3 < args.length; i3++) {
    styles += handleInterpolation(mergedProps, registered, args[i3]);
    if (stringMode) {
      styles += strings[i3];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var hasOwnProperty2 = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, react.useContext(ThemeContext));
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Insertion, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ react.createElement(WrappedComponent, newProps));
});
var _extends_1 = createCommonjsModule(function(module) {
  function _extends() {
    module.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
  }
  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty2.call(props, "css")) {
    return react.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i3 = 2; i3 < argsLength; i3++) {
    createElementArgArray[i3] = args[i3];
  }
  return react.createElement.apply(null, createElementArgArray);
};
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function t$1() {
  return l$1 = t$1 = Object.assign || function(g2) {
    for (var c3 = 1; c3 < arguments.length; c3++) {
      var I4 = arguments[c3];
      for (var t4 in I4)
        Object.prototype.hasOwnProperty.call(I4, t4) && (g2[t4] = I4[t4]);
    }
    return g2;
  }, t$1.apply(this, arguments);
}
var l$1 = t$1;
var n$2 = l$1;
var i$1 = function(g2, c3) {
  if (g2 == null)
    return {};
  var I4, t4, l3 = {}, n3 = Object.keys(g2);
  for (t4 = 0; t4 < n3.length; t4++)
    I4 = n3[t4], c3.indexOf(I4) >= 0 || (l3[I4] = g2[I4]);
  return l3;
};
var e$2 = function(g2, c3) {
  if (g2 == null)
    return {};
  var I4, t4, l3 = i$1(g2, c3);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(g2);
    for (t4 = 0; t4 < n3.length; t4++)
      I4 = n3[t4], c3.indexOf(I4) >= 0 || Object.prototype.propertyIsEnumerable.call(g2, I4) && (l3[I4] = g2[I4]);
  }
  return l3;
};
var b$1 = react.createContext(null);
var u = function(g2) {
  var c3 = g2.current.querySelector(".tr-header");
  return Array.from((c3 == null ? void 0 : c3.querySelectorAll(".th")) || []);
};
var C$1 = function(g2, c3, I4, t4) {
  return Array.from(g2.current.querySelectorAll(I4)).forEach(function(g3) {
    var I5 = Array.from(g3.querySelectorAll(t4)), l3 = I5.length;
    I5.forEach(function(g4, I6) {
      return c3(g4, I6, l3);
    });
  });
};
var o = function(g2, c3) {
  return C$1(g2, c3, ".tr-header", ".th");
};
var a$1 = function(g2, c3) {
  return C$1(g2, c3, ".tr-body", ".td");
};
var G$1 = function(g2, c3) {
  return {index: c3, minWidth: +g2.getAttribute("data-resize-min-width"), width: g2.getBoundingClientRect().width, isStiff: g2.classList.contains("stiff"), isHide: g2.getAttribute("data-hide") === "true", isColSpan: g2.classList.contains("colspan")};
};
var A$2 = react.createContext(null);
var X2 = function(I4) {
  var t4 = I4.tableElementRef, l3 = I4.tableMemoryRef, n3 = I4.layout, i3 = I4.children, e4 = react.useMemo(function() {
    return {layout: n3, tableElementRef: t4, tableMemoryRef: l3};
  }, [n3, t4, l3]);
  return jsx(A$2.Provider, {value: e4}, i3);
};
var d$1 = function(g2, c3) {
  var I4 = u(g2).map(G$1);
  c3.current.dataColumns = I4;
};
var r$2 = function(g2, c3, I4) {
  var t4 = c3.current.style.getPropertyValue("--data-table-library_grid-template-columns") !== g2;
  c3.current && g2 && t4 && (c3.current.style.setProperty("--data-table-library_grid-template-columns", g2), d$1(c3, I4));
};
var x$2 = function(g2, c3) {
  c3 != null && c3.onLayoutChange && g2 && c3.onLayoutChange(g2);
};
var y$2 = "\n  ".concat(function() {
}, "\n  padding: 0;\n  margin: 0;\n\n  ").concat(function() {
}, "\n  display: flex;\n  align-items: center;\n\n  ").concat(function() {
}, "\n  align-self: stretch;\n\n\n  & > div {\n    ").concat(function() {
}, "\n    flex: 1;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  &.hide {\n    display: none;\n  }\n\n  &.pin-left,\n  &.pin-right {\n    position: sticky;\n    z-index: 2;\n  }\n\n  ").concat(function() {
}, "\n  background-color: inherit;\n");
var s$1 = css(y$2, ";", "");
var p$1 = react.forwardRef(function(I4, t4) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var i3 = l3.layout, e4 = i3 != null && i3.isDiv ? "div" : "td";
  return jsx(e4, n$2({css: s$1, ref: t4}, I4));
});
var B$1 = css(y$2, " z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}", "");
var Z2 = react.forwardRef(function(I4, t4) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var i3 = l3.layout, e4 = i3 != null && i3.isDiv ? "div" : "th";
  return jsx(e4, n$2({css: B$1, ref: t4}, I4));
});
var W$1 = {name: "1k13m5t", styles: "z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"};
var m$2 = function(g2) {
  var c3 = typeof g2 == "boolean" || (g2 == null ? void 0 : g2.resizerWidth) == null ? 10 : g2.resizerWidth, t4 = typeof g2 == "boolean" || (g2 == null ? void 0 : g2.resizerHighlight) == null ? "transparent" : g2.resizerHighlight;
  return {handle: W$1, area: css("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:", c3, "px;height:100%;&:hover,&.active{background-color:", t4, ";}", "")};
};
var r$3 = function(r3, t4) {
  (t4 == null || t4 > r3.length) && (t4 = r3.length);
  for (var n3 = 0, e4 = new Array(t4); n3 < t4; n3++)
    e4[n3] = r3[n3];
  return e4;
};
var t$2 = r$3;
var n$3 = function(r3, n3) {
  if (r3) {
    if (typeof r3 == "string")
      return t$2(r3, n3);
    var e4 = Object.prototype.toString.call(r3).slice(8, -1);
    return e4 === "Object" && r3.constructor && (e4 = r3.constructor.name), e4 === "Map" || e4 === "Set" ? Array.from(r3) : e4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e4) ? t$2(r3, n3) : void 0;
  }
};
var t$3 = function(r3) {
  if (Array.isArray(r3))
    return r3;
};
var e$3 = function(r3, t4) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(r3)) {
    var e4 = [], n3 = true, o4 = false, a3 = void 0;
    try {
      for (var i3, u4 = r3[Symbol.iterator](); !(n3 = (i3 = u4.next()).done) && (e4.push(i3.value), !t4 || e4.length !== t4); n3 = true)
        ;
    } catch (r4) {
      o4 = true, a3 = r4;
    } finally {
      try {
        n3 || u4.return == null || u4.return();
      } finally {
        if (o4)
          throw a3;
      }
    }
    return e4;
  }
};
var n$4 = n$3;
var o$1 = function() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var a$2 = function(r3, a3) {
  return t$3(r3) || e$3(r3, a3) || n$4(r3, a3) || o$1();
};
function toVal(mix) {
  var k3, y4, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k3 = 0; k3 < mix.length; k3++) {
        if (mix[k3]) {
          if (y4 = toVal(mix[k3])) {
            str && (str += " ");
            str += y4;
          }
        }
      }
    } else {
      for (k3 in mix) {
        if (mix[k3]) {
          str && (str += " ");
          str += k3;
        }
      }
    }
  }
  return str;
}
function i$2() {
  var i3 = 0, tmp, x4, str = "";
  while (i3 < arguments.length) {
    if (tmp = arguments[i3++]) {
      if (x4 = toVal(tmp)) {
        str && (str += " ");
        str += x4;
      }
    }
  }
  return str;
}
var e$4 = function(e4, r3, n3) {
  return r3 in e4 ? Object.defineProperty(e4, r3, {value: n3, enumerable: true, configurable: true, writable: true}) : e4[r3] = n3, e4;
};
var e$5 = r$3;
var n$5 = function(r3) {
  if (Array.isArray(r3))
    return e$5(r3);
};
var o$2 = function(r3) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(r3))
    return Array.from(r3);
};
var a$3 = n$3;
var i$3 = function() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var u$1 = function(r3) {
  return n$5(r3) || o$2(r3) || a$3(r3) || i$3();
};
var Z$1 = react.createContext(null);
function A$3(e4, c3) {
  var l3 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var t4 = Object.getOwnPropertySymbols(e4);
    c3 && (t4 = t4.filter(function(c4) {
      return Object.getOwnPropertyDescriptor(e4, c4).enumerable;
    })), l3.push.apply(l3, t4);
  }
  return l3;
}
function W$2(e4) {
  for (var c3 = 1; c3 < arguments.length; c3++) {
    var l3 = arguments[c3] != null ? arguments[c3] : {};
    c3 % 2 ? A$3(Object(l3), true).forEach(function(c4) {
      e$4(e4, c4, l3[c4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(l3)) : A$3(Object(l3)).forEach(function(c4) {
      Object.defineProperty(e4, c4, Object.getOwnPropertyDescriptor(l3, c4));
    });
  }
  return e4;
}
var X$1 = function(i3, I4) {
  var d4 = react.useContext(A$2);
  if (!d4)
    throw new Error("No Layout Context.");
  var u$2 = d4.tableElementRef, C2 = d4.tableMemoryRef, a3 = d4.layout, s3 = react.useRef(null), o$13 = react.useRef(null), G3 = react.useRef(""), Z3 = react.useRef(null), A3 = react.useRef(false), X3 = react.useCallback(function(e4) {
    var c3;
    e4.preventDefault(), G3.current = u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns"), A3.current = true, Z3.current = s3.current.offsetWidth - e4.pageX, (c3 = s3.current) === null || c3 === void 0 || c3.querySelector(".resizer-area").classList.add("active");
  }, [u$2]), h4 = react.useCallback(function(e4) {
    if (A3.current) {
      e4.preventDefault();
      var c3 = Z3.current + e4.pageX, t4 = function(e5, c4, l3, t5) {
        var i4 = u(l3).map(G$1).filter(function(e6) {
          return !e6.isHide;
        }), I5 = i4.findIndex(function(c5) {
          return c5.index === e5;
        }), d5 = (i4 = i4.map(function(e6, c5) {
          return W$2(W$2({}, e6), {}, {index: c5});
        })).reduce(function(e6, c5, l4) {
          return e6 || (l4 > I5 && c5.width !== 0 ? c5 : e6);
        }, null), u$22 = i4.reduce(function(e6, c5) {
          return e6 + c5.width;
        }, 0), C3 = i4[I5].minWidth, a4 = t5 > C3 && t5 !== 0 ? t5 : C3, s4 = a4 - i4[I5].width, o$14 = i4.map(function(e6, c5) {
          if (d5 && I5 === c5)
            return d5.width - s4 > C3 ? a4 : e6.width;
          if ((d5 == null ? void 0 : d5.index) === c5) {
            var l4 = e6.width - s4;
            return l4 > C3 ? l4 : e6.width;
          }
          return e6.width;
        }), G4 = u$22 - o$14.reduce(function(e6, c5) {
          return e6 + c5;
        }, 0);
        o$14[I5] = o$14[I5] + G4;
        var Z4 = false, A4 = i4.slice(0).reverse().map(function(e6, l4) {
          var t6 = o$14.slice(0).reverse()[l4], n3 = t6 / u$22 * 100;
          return e6.isStiff || c4 != null && c4.horizontalScroll ? "".concat(t6, "px") : Z4 ? "minmax(0, ".concat(n3, "%)") : (Z4 = true, "minmax(0, 1fr)");
        }).slice(0).reverse().join(" "), X4 = function(e6, c5) {
          if (u$1(Array.from(e6.classList)).includes("pin-left")) {
            var l4 = o$14.reduce(function(e7, l5, t7) {
              return t7 >= c5 ? e7 : e7 + l5;
            }, 0);
            e6.style.left = "".concat(l4, "px");
          }
          if (u$1(Array.from(e6.classList)).includes("pin-right")) {
            var t6 = o$14.reduceRight(function(e7, l5, t7) {
              return t7 <= c5 ? e7 : e7 + l5;
            }, 0);
            e6.style.right = "".concat(t6, "px");
          }
        };
        return o(l3, X4), a$1(l3, X4), A4;
      }(i3, a3, u$2, c3);
      r$2(t4, u$2, C2);
    }
  }, [i3, a3, u$2, C2]), V3 = react.useCallback(function() {
    var e4;
    A3.current = false;
    var c3 = u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns");
    if (G3.current !== c3) {
      x$2(c3, a3);
      var l3 = u(u$2).map(G$1);
      C2.current.dataColumns = l3;
    }
    (e4 = s3.current) === null || e4 === void 0 || e4.querySelector(".resizer-area").classList.remove("active");
  }, [a3, u$2, C2]);
  return react.useEffect(function() {
    var e4 = o$13.current;
    return e4 && (e4.addEventListener("mousedown", X3), document.addEventListener("mousemove", h4), document.addEventListener("mouseup", V3)), function() {
      e4 && (e4.removeEventListener("mousedown", X3), document.removeEventListener("mousemove", h4), document.removeEventListener("mouseup", V3));
    };
  }, [I4, X3, h4, V3]), {cellRef: s3, resizeRef: o$13};
};
var h$2 = ["index", "className", "hide", "pinLeft", "pinRight", "stiff", "isFooter", "includePreviousColSpan", "previousColSpans", "gridColumnStart", "gridColumnEnd", "resize", "role", "children", "style"];
function V$1(e4, c3) {
  var l3 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var t4 = Object.getOwnPropertySymbols(e4);
    c3 && (t4 = t4.filter(function(c4) {
      return Object.getOwnPropertyDescriptor(e4, c4).enumerable;
    })), l3.push.apply(l3, t4);
  }
  return l3;
}
function y$3(e4) {
  for (var c3 = 1; c3 < arguments.length; c3++) {
    var l3 = arguments[c3] != null ? arguments[c3] : {};
    c3 % 2 ? V$1(Object(l3), true).forEach(function(c4) {
      e$4(e4, c4, l3[c4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(l3)) : V$1(Object(l3)).forEach(function(c4) {
      Object.defineProperty(e4, c4, Object.getOwnPropertyDescriptor(l3, c4));
    });
  }
  return e4;
}
var p$2 = function(e4, c3) {
  return c3.find(function(c4) {
    return c4.index === e4;
  });
};
var v$1 = function(r3) {
  var g2 = r3.index, a3 = r3.className, m3 = r3.hide, Z$12 = r3.pinLeft, A3 = r3.pinRight, W3 = r3.stiff, V3 = r3.isFooter, v3 = r3.includePreviousColSpan, x4 = r3.previousColSpans, R4 = r3.gridColumnStart, J2 = r3.gridColumnEnd, H4 = r3.resize, f3 = r3.role, Y3 = f3 === void 0 ? "columnheader" : f3, N4 = r3.children, B4 = r3.style, F4 = e$2(r3, h$2), S4 = react.useContext(b$1);
  !function(r4, g3) {
    var i3 = react.useContext(A$2);
    if (!i3)
      throw new Error("No Layout Context.");
    var I4 = i3.layout, d4 = i3.tableElementRef, u$12 = i3.tableMemoryRef;
    react.useLayoutEffect(function() {
      var e4 = u$12.current.dataColumns, c3 = u(d4).map(G$1), i4 = p$2(r4, e4), C2 = (i4 == null ? void 0 : i4.isHide) === !!g3;
      if (e4 != null && e4.length && !C2) {
        var a4 = c3.filter(function(e5) {
          return !e5.isHide;
        }).map(function(c4) {
          if (c4.isStiff || I4 != null && I4.horizontalScroll) {
            var l3 = p$2(c4.index, e4);
            return "".concat(l3.width || 2 * l3.minWidth, "px");
          }
          return "minmax(0px, 1fr)";
        }).join(" ");
        r$2(a4, d4, u$12), x$2(a4, I4);
        var s3 = u(d4).map(G$1);
        u$12.current.dataColumns = s3;
      }
    }, [r4, g3, I4, d4, u$12]);
  }(g2, m3);
  var z3 = X$1(g2, m3), Q3 = z3.cellRef, k3 = z3.resizeRef, D5 = R4 && J2, w4 = D5 ? J2 - R4 - 1 : 0, L3 = v3 ? R4 + x4 : R4, j4 = v3 ? J2 + x4 : J2;
  return jsx(react.Fragment, null, jsx(Z2, n$2({role: Y3, "data-table-library_th": "", "data-hide": !!m3, "data-resize-min-width": typeof H4 == "boolean" || (H4 == null ? void 0 : H4.minWidth) == null ? 75 : H4.minWidth, style: y$3(y$3({}, D5 ? {gridColumnStart: L3, gridColumnEnd: j4} : {}), B4), css: css(S4 == null ? void 0 : S4.BaseCell, " ", V3 ? S4 == null ? void 0 : S4.FooterCell : S4 == null ? void 0 : S4.HeaderCell, ";", ""), className: i$2("th", a3, {stiff: W3, hide: m3, resize: H4, "pin-left": Z$12, "pin-right": A3}), ref: Q3}, F4), jsx("div", null, N4), H4 && !m3 && jsx("div", {className: "resizer-area", ref: k3, css: m$2(H4).area}, jsx("span", {className: "resizer-handle", css: m$2(H4).handle}))), Array.from({length: w4}, function() {
    return jsx(Z2, {className: i$2("th", "hide", "colspan")});
  }));
};
var e$6;
var t$4;
!function(e4) {
  e4[e4.Prefix = 0] = "Prefix", e4[e4.Suffix = 1] = "Suffix";
}(e$6 || (e$6 = {})), function(e4) {
  e4[e4.Alternate = 0] = "Alternate", e4[e4.AlternateWithReset = 1] = "AlternateWithReset";
}(t$4 || (t$4 = {}));

// docs/snowpack/pkg/@table-library/react-table-library.js
var i2 = react.createContext(null);
var a2 = function(c3) {
  return c3.target.tagName === "svg" || c3.target.tagName === "path" || c3.target.tagName === "DIV" || c3.target.tagName === "SPAN" || c3.target.tagName === "TD";
};
var d2 = ["index", "className", "hide", "pinLeft", "pinRight", "stiff", "includePreviousColSpan", "previousColSpans", "gridColumnStart", "gridColumnEnd", "onClick", "children", "style"];
function r2(c3, g2) {
  var t4 = Object.keys(c3);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(c3);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(c3, g3).enumerable;
    })), t4.push.apply(t4, l3);
  }
  return t4;
}
function s2(c3) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var t4 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? r2(Object(t4), true).forEach(function(g3) {
      e$4(c3, g3, t4[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c3, Object.getOwnPropertyDescriptors(t4)) : r2(Object(t4)).forEach(function(g3) {
      Object.defineProperty(c3, g3, Object.getOwnPropertyDescriptor(t4, g3));
    });
  }
  return c3;
}
var A2 = function(C2) {
  C2.index;
  var i3 = C2.className, a3 = C2.hide, r3 = C2.pinLeft, A3 = C2.pinRight, u4 = C2.stiff, o4 = C2.includePreviousColSpan, m3 = C2.previousColSpans, G3 = C2.gridColumnStart, p3 = C2.gridColumnEnd, W3 = C2.onClick, N4 = C2.children, y4 = C2.style, x4 = e$2(C2, d2), H4 = react.useContext(b$1), Z3 = G3 && p3, J2 = Z3 ? p3 - G3 - 1 : 0, X3 = o4 ? G3 + m3 : G3, V3 = o4 ? p3 + m3 : p3;
  return jsx(react.Fragment, null, jsx(p$1, n$2({role: "gridcell", "data-table-library_td": "", style: s2(s2({}, Z3 ? {gridColumnStart: X3, gridColumnEnd: V3} : {}), y4), css: css(H4 == null ? void 0 : H4.BaseCell, " ", H4 == null ? void 0 : H4.Cell, ";", ""), className: i$2("td", i3, {stiff: u4, hide: a3, "pin-left": r3, "pin-right": A3}), onClick: W3}, x4), jsx("div", null, N4)), Array.from({length: J2}, function() {
    return jsx(p$1, {className: i$2("td", "hide", "colspan")});
  }));
};
var r$12 = react.createContext(null);
var s$12 = react.createContext(null);
var u2 = function() {
  var n3 = react.useState(false), o4 = a$2(n3, 2), r3 = o4[0], s3 = o4[1];
  return react.useEffect(function() {
    var e4 = function(e5) {
      e5.shiftKey ? s3(true) : r3 && s3(false);
    }, t4 = function() {
      r3 && s3(false);
    };
    return document && (document.addEventListener("keydown", e4), document.addEventListener("keyup", t4)), function() {
      document && (document.removeEventListener("keydown", e4), document.removeEventListener("keyup", t4));
    };
  }, [r3]), r3;
};
var a$12 = function() {
  return {select: react.useContext(r$12), tree: react.useContext(i2), sort: react.useContext(Z$1), pagination: react.useContext(s$12)};
};
var o2 = function(o4) {
  var i3 = o4.sort, t4 = o4.pagination, a3 = o4.tree;
  return function(o5) {
    var e4 = u$1(o5);
    return e4 = i3 ? i3.modifier(e4) : e4, e4 = t4 ? t4.modifier(e4) : e4, e4 = a3 ? a3.modifier(e4) : e4;
  };
};
var n2 = function(n3) {
  return n3.reduce(function(n4, r3) {
    return Object.keys(r3).forEach(function(c3) {
      n4[c3] || (n4[c3] = ""), n4[c3] = "\n        ".concat(n4[c3], "\n        ").concat(r3[c3], "\n      ");
    }), n4;
  }, {});
};
var r$22 = function(r3) {
  return Array.isArray(r3) ? n2(r3) : r3;
};
var n$12 = ["children"];
var o$12 = function(G3) {
  var o4 = G3.children, e4 = e$2(G3, n$12), i3 = react.useContext(b$1), t4 = react.useContext(A$2);
  if (!t4)
    throw new Error("No Layout Context.");
  var u4 = t4.layout, X3 = u4 != null && u4.isDiv ? "div" : "tbody";
  return jsx(X3, n$2({css: css(i3 == null ? void 0 : i3.Body, " display:contents;", ""), "data-table-library_body": "", className: "tbody"}, e4), o4);
};
var e2 = ["isFooter", "children"];
var i$12 = function(n3) {
  var o4 = n3.isFooter, i3 = n3.children, t4 = e$2(n3, e2), u4 = react.useContext(b$1), X3 = react.useContext(A$2);
  if (!X3)
    throw new Error("No Layout Context.");
  var y4 = X3.layout, a3 = y4 != null && y4.isDiv ? "div" : o4 ? "tfoot" : "thead";
  return jsx(a3, n$2({role: "rowgroup", className: i$2({tfoot: o4, thead: !o4}), css: css("\n  display: contents;\n", " ", o4 ? u4 == null ? void 0 : u4.Footer : u4 == null ? void 0 : u4.Header, ";", "")}, t4), react.Children.map(i3, function(I4) {
    if (react.isValidElement(I4))
      return react.cloneElement(I4);
  }));
};
var x2 = react.createContext(null);
var B3 = ["data", "theme", "layout", "sort", "pagination", "select", "tree", "onInit", "className", "children"];
var v2 = {Table: "\n    height: 100%;\n  "};
var h2 = react.forwardRef(function(b$12, C2) {
  var e4 = b$12.data, n3 = b$12.theme, A3 = b$12.layout, X$12 = b$12.sort, y4 = b$12.pagination, s3 = b$12.select, Y3 = b$12.tree, V3 = b$12.onInit, h4 = V3 === void 0 ? function() {
  } : V3, H4 = b$12.className, F4 = H4 === void 0 ? "table" : H4, p3 = b$12.children, N4 = e$2(b$12, B3), R4 = function(I4) {
    var g2 = react.useRef(null);
    return I4 && (g2 = I4), g2;
  }(C2), S4 = function(I4) {
    var g2 = react.useRef(null);
    return g2.current || (g2.current = {onlyOnce: false, dataColumns: []}), g2;
  }(), f3 = o2({sort: X$12, pagination: y4, tree: Y3, select: s3})(e4.nodes), U4 = function(I4, g2) {
    var c3 = react.useState(false), l3 = a$2(c3, 2), b3 = l3[0], C3 = l3[1];
    return [b3, function(c4) {
      c4 && (b3 || (C3(true), g2.current = c4, I4(c4)));
    }];
  }(h4, R4), Q3 = a$2(U4, 2), j4 = Q3[0], L3 = Q3[1], z3 = u2(), k3 = [];
  A3 != null && A3.fixedHeader && (k3 = k3.concat(v2)), n3 && (k3 = k3.concat(n3));
  var w4, D5 = r$22(k3), O4 = A3 != null && A3.isDiv ? "div" : "table";
  return jsx(O4, n$2({role: "grid", "data-table-library_table": "", css: css((w4 = {isShiftDown: z3}, "\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  overflow: auto;\n  position: relative;\n\n  border-collapse: collapse;\n\n  display: grid;\n\n  --data-table-library_grid-template-columns: '';\n  grid-template-columns: var(--data-table-library_grid-template-columns);\n\n  button * {\n    pointer-events: none;\n  }\n\n  ".concat(w4.isShiftDown ? "\n    user-select: none; /* standard syntax */\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\n    -moz-user-select: none; /* mozilla browsers */\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\n    -ms-user-select: none; /* IE10+ */\n    " : "", "\n  ")), " ", D5 == null ? void 0 : D5.Table, ";", ""), className: i$2(F4), ref: L3}, N4), j4 && jsx(x2.Provider, {value: e4}, jsx(b$1.Provider, {value: D5}, jsx(Z$1.Provider, {value: X$12}, jsx(r$12.Provider, {value: s3}, jsx(i2.Provider, {value: Y3}, jsx(s$12.Provider, {value: y4}, jsx(X2, {layout: A3, tableElementRef: R4, tableMemoryRef: S4}, p3 && p3(f3)))))))));
});
var H3 = function() {
  return "\n  display: contents;\n\n  ".concat(function() {
  }, "\n  background-color: #ffffff;\n");
};
var F3 = react.forwardRef(function(I4, c3) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var C2 = l3.layout, e4 = C2 != null && C2.isDiv ? "div" : "tr";
  return jsx(e4, n$2({css: css(H3(), ";", ""), ref: c3}, I4));
});
var p2 = react.forwardRef(function(I4, c3) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var C2 = l3.layout, e4 = C2 != null && C2.isDiv ? "div" : "tr";
  return jsx(e4, n$2({css: css(H3(), ";", ""), ref: c3}, I4));
});
var N3 = function(I4) {
  return I4.type ? I4.type === react.Fragment : I4 === react.Fragment;
};
var R3 = function(I4, g2) {
  return react.Children.toArray(I4).reduce(function(I5, c3, l3) {
    return react.isValidElement(c3) ? l3 >= g2 ? I5 : c3.props.gridColumnStart || c3.props.gridColumnEnd ? I5 + c3.props.gridColumnEnd - c3.props.gridColumnStart - 1 : I5 : I5;
  }, 0);
};
var S3 = ["className", "role", "isFooter", "children"];
function f2(I4, g2) {
  var c3 = Object.keys(I4);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(I4);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(I4, g3).enumerable;
    })), c3.push.apply(c3, l3);
  }
  return c3;
}
function U3(I4) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var c3 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? f2(Object(c3), true).forEach(function(g3) {
      e$4(I4, g3, c3[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I4, Object.getOwnPropertyDescriptors(c3)) : f2(Object(c3)).forEach(function(g3) {
      Object.defineProperty(I4, g3, Object.getOwnPropertyDescriptor(c3, g3));
    });
  }
  return I4;
}
var Q2 = function(l3) {
  var t4, u4 = l3.className, X3 = l3.role, W3 = X3 === void 0 ? "rowheader" : X3, J2 = l3.isFooter, a3 = l3.children, y4 = e$2(l3, S3), m3 = react.useContext(b$1), s3 = react.useRef(null);
  return t4 = react.useContext(A$2), react.useLayoutEffect(function() {
    var I4;
    if (!t4)
      throw new Error("No Layout Context.");
    var g2 = t4.layout, c3 = t4.tableElementRef, l4 = t4.tableMemoryRef, b3 = u(c3).map(G$1);
    if ((I4 = l4.current) === null || I4 === void 0 || !I4.onlyOnce)
      if (l4.current.onlyOnce = true, g2 != null && g2.resizedLayout) {
        var Z3 = g2 == null ? void 0 : g2.resizedLayout;
        r$2(Z3, c3, l4);
      } else if (g2 != null && g2.custom)
        d$1(c3, l4);
      else {
        var d4 = b3.filter(function(I5) {
          return !I5.isHide;
        }).map(function() {
          return "minmax(0px, 1fr)";
        }).join(" ");
        r$2(d4, c3, l4);
      }
  }, [t4]), jsx(p2, n$2({role: W3, "data-table-library_tr-header": "", css: css(m3 == null ? void 0 : m3.BaseRow, " ", J2 ? m3 == null ? void 0 : m3.FooterRow : m3 == null ? void 0 : m3.HeaderRow, ";", ""), className: i$2("tr", u4, {"tr-footer": J2, "tr-header": !J2}), ref: s3}, y4), react.Children.toArray(a3).filter(Boolean).map(function(I4, g2) {
    if (react.isValidElement(I4)) {
      var c3 = {};
      return N3(I4) || (c3 = U3(U3({}, c3), {}, {index: g2, previousColSpans: R3(a3, g2)})), react.cloneElement(I4, c3);
    }
  }));
};
var j2 = function() {
};
var L2 = function(I4, g2, c3, l3) {
  !function(I5) {
    var g3 = I5.onSingleClick, c4 = I5.onDoubleClick, l4 = I5.ref, b3 = react.useRef(0);
    react.useEffect(function() {
      var I6 = l4.current, C2 = function(I7) {
        c4 && (b3.current === 0 && g3(I7), b3.current += 1, setTimeout(function() {
          b3.current === 2 && c4(I7), b3.current = 0;
        }, 300));
      };
      return I6 == null || I6.addEventListener("click", C2), function() {
        I6 == null || I6.removeEventListener("click", C2);
      };
    });
  }({onSingleClick: g2 ? function(I5) {
    return g2(l3, I5);
  } : j2, onDoubleClick: c3 ? function(I5) {
    return c3(l3, I5);
  } : null, ref: I4});
};
var z2 = ["item", "className", "disabled", "onClick", "onDoubleClick", "children"];
function k2(I4, g2) {
  var c3 = Object.keys(I4);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(I4);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(I4, g3).enumerable;
    })), c3.push.apply(c3, l3);
  }
  return c3;
}
function w2(I4) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var c3 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? k2(Object(c3), true).forEach(function(g3) {
      e$4(I4, g3, c3[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I4, Object.getOwnPropertyDescriptors(c3)) : k2(Object(c3)).forEach(function(g3) {
      Object.defineProperty(I4, g3, Object.getOwnPropertyDescriptor(c3, g3));
    });
  }
  return I4;
}
var D3 = function(l3) {
  var b$12 = l3.item, C2 = l3.className, e4 = l3.disabled, n3 = l3.onClick, A3 = l3.onDoubleClick, t4 = l3.children, u4 = e$2(l3, z2), X3 = function(I4, g2) {
    return Object.values(I4).filter(Boolean).filter(function(I5) {
      return I5 == null ? void 0 : I5.hasOwnProperty("_getRowProps");
    }).map(function(c3) {
      return c3._getRowProps(g2, I4);
    });
  }(a$12(), l3), W3 = react.useContext(b$1), J2 = function(I4, g2) {
    var c3 = I4.reduce(function(I5, g3) {
      var c4 = g3.theme, l4 = g3.className, b3 = g3.onClick, C3 = "\n        ".concat(I5.themeByFeature, "\n        ").concat(c4, "\n      "), e5 = i$2(I5.classNamesByFeature, l4), n4 = I5.clickable || !!b3;
      return w2(w2({}, I5), {}, {themeByFeature: C3, classNamesByFeature: e5, clickable: n4, onClickByFeature: function(g4, c5) {
        b3(g4, c5), I5.onClickByFeature(g4, c5);
      }});
    }, {themeByFeature: "", classNamesByFeature: "", clickable: !!g2, onClickByFeature: function(I5, c4) {
      g2 && a2(c4) && g2(I5, c4);
    }});
    return {themeByFeature: c3.themeByFeature, classNamesByFeature: c3.classNamesByFeature, clickable: c3.clickable, onClickByFeature: c3.onClickByFeature};
  }(X3, n3), a$23 = J2.themeByFeature, m3 = J2.classNamesByFeature, o4 = J2.clickable, r3 = J2.onClickByFeature, Y3 = react.useRef(null);
  return L2(Y3, r3, A3, b$12), jsx(F3, n$2({role: "row", "data-table-library_tr-body": "", onClick: A3 ? function() {
  } : function(I4) {
    return r3(b$12, I4);
  }, css: css(a$23, " ", W3 == null ? void 0 : W3.BaseRow, " ", W3 == null ? void 0 : W3.Row, ";", ""), className: i$2("tr", "tr-body", m3, C2, {disabled: e4, clickable: o4 || !!A3}), ref: Y3}, u4), react.Children.toArray(t4).filter(Boolean).map(function(I4, g2) {
    if (react.isValidElement(I4)) {
      var c3 = {};
      return N3(I4) || (c3 = w2(w2({}, c3), {}, {index: g2, previousColSpans: R3(t4, g2)})), react.cloneElement(I4, c3);
    }
  }));
};
var t2;
var l2;
!function(t4) {
  t4[t4.RowClick = 0] = "RowClick", t4[t4.ButtonClick = 1] = "ButtonClick";
}(t2 || (t2 = {})), function(t4) {
  t4[t4.SingleSelect = 0] = "SingleSelect", t4[t4.MultiSelect = 1] = "MultiSelect";
}(l2 || (l2 = {}));
var o$22;
!function(o4) {
  o4[o4.RowClick = 0] = "RowClick", o4[o4.ButtonClick = 1] = "ButtonClick";
}(o$22 || (o$22 = {}));
var a$22 = Object.freeze({__proto__: null, get SelectClickTypes() {
  return t2;
}, get SelectTypes() {
  return l2;
}, get SortIconPositions() {
  return e$6;
}, get SortToggleType() {
  return t$4;
}, get TreeExpandClickTypes() {
  return o$22;
}});

// docs/snowpack/pkg/@table-library/react-table-library/sort.js
var t3 = function(n3, t4, u4) {
  react.useEffect(function() {
    t4 && (t4.current[n3] = {state: u4});
  }, [t4, n3, u4]);
};
var u3 = function(t4, u4, e4, c3, f3) {
  var o4 = react.useReducer(t4, u4), i3 = a$2(o4, 2), s3 = i3[0], a$13 = i3[1], l3 = react.useRef(null);
  return react.useEffect(function() {
    l3.current && (c3.forEach(function(r3) {
      return r3(l3.current, s3, f3 ? f3.current : void 0);
    }), l3.current = null);
  }, [f3, c3, s3]), [s3, function(r3) {
    e4.forEach(function(n3) {
      return n3(r3, s3, f3 ? f3.current : void 0);
    }), l3.current = r3, a$13(r3);
  }];
};
var e3 = function(r3, n3) {
  return JSON.stringify(r3) === JSON.stringify(n3);
};
var c2 = function(n3, t4, u4) {
  var c3 = react.useRef(n3), f3 = react.useRef(n3);
  react.useEffect(function() {
    e3(t4, f3.current) && (e3(n3, c3.current) || e3(n3, t4) || u4()), c3.current = n3, f3.current = t4;
  }, [t4, u4, n3]);
};
var o3 = function(i3) {
  var t4 = i3.margin;
  return css("display:flex;align-items:center;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:100%;height:100%;&.narrow{width:auto;}&.active{font-weight:bold;}span{display:flex;align-items:center;justify-content:center;}&.prefix{margin-right:", t4 || 0, ";}&.suffix{margin-left:", t4 || 0, ";}div{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}div:after{display:block;content:attr(title);font-weight:bold;height:0;overflow:hidden;visibility:hidden;}");
};
var c$12 = ["margin"];
var I3 = react.forwardRef(function(g2, n$13) {
  var I4 = g2.margin, d4 = e$2(g2, c$12);
  return jsx("button", n$2({type: "button", ref: n$13}, d4, {css: o3({margin: I4})}));
});
var d3 = function(i3) {
  var t4 = i3.width, g2 = i3.height, n3 = i3.viewBox, o4 = i3.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-down", "data-name": "svg-icon-chevron-single-down", "data-testid": "svg-icon-chevron-single-down", xmlns: "http://www.w3.org/2000/svg", width: t4 || "36rem", height: g2 || "36rem", viewBox: n3 || "0 0 36 36", strokeWidth: o4 || "0rem"}, jsx("polygon", {points: "0 15 0 12 18 21 36 12 36 15 18 24 0 15"}));
};
function y3(e4, r3) {
  var t4 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var o4 = Object.getOwnPropertySymbols(e4);
    r3 && (o4 = o4.filter(function(r4) {
      return Object.getOwnPropertyDescriptor(e4, r4).enumerable;
    })), t4.push.apply(t4, o4);
  }
  return t4;
}
function m2(e4) {
  for (var r3 = 1; r3 < arguments.length; r3++) {
    var t4 = arguments[r3] != null ? arguments[r3] : {};
    r3 % 2 ? y3(Object(t4), true).forEach(function(r4) {
      e$4(e4, r4, t4[r4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(t4)) : y3(Object(t4)).forEach(function(r4) {
      Object.defineProperty(e4, r4, Object.getOwnPropertyDescriptor(t4, r4));
    });
  }
  return e4;
}
var h3 = function(r3) {
  var t4 = r3.sort, n3 = r3.sortKey, s3 = r3.sortIcon, a3 = s3 === void 0 ? {} : s3, u4 = r3.children, p3 = t4.state, f3 = t4.fns, v3 = m2(m2({}, t4.options.sortIcon), a3), d4 = v3.position === e$6.Prefix, g2 = v3.position === e$6.Suffix, y4 = function(e4, r4, t5, n4, s4, i3) {
    var c3 = {height: "".concat(t5), width: "".concat(t5)};
    return e4.sortKey === r4 && e4.reverse ? i3 ? react.cloneElement(i3, m2({}, c3)) : null : e4.sortKey !== r4 || e4.reverse ? n4 ? react.cloneElement(n4, m2({}, c3)) : null : s4 ? react.cloneElement(s4, m2({}, c3)) : null;
  }(p3, n3, v3.size, v3.iconDefault, v3.iconUp, v3.iconDown);
  return jsx(I3, {className: i$2({active: p3.sortKey === n3}), onClick: function() {
    return f3.onToggleSort({sortKey: n3});
  }}, d4 && y4 && jsx("span", {style: {marginRight: v3.margin}}, y4), jsx("div", {title: typeof u4 == "string" ? u4 : ""}, u4), g2 && y4 && jsx("span", {style: {marginLeft: v3.margin}}, y4));
};
var w3 = ["sortKey", "sortIcon", "children"];
var O3 = react.memo(function(e4) {
  var r3 = e4.sortKey, i3 = e4.sortIcon, a3 = i3 === void 0 ? {} : i3, u4 = e4.children, l3 = e$2(e4, w3), p3 = react.useContext(Z$1);
  if (!p3)
    throw new Error("No Sort Context. No return value from useSort provided to Table component.");
  return jsx(v$1, l3, jsx(h3, {sort: p3, sortKey: r3, sortIcon: a3}, u4));
});
function b2(e4, r3) {
  var t4 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var o4 = Object.getOwnPropertySymbols(e4);
    r3 && (o4 = o4.filter(function(r4) {
      return Object.getOwnPropertyDescriptor(e4, r4).enumerable;
    })), t4.push.apply(t4, o4);
  }
  return t4;
}
function j3(e4) {
  for (var r3 = 1; r3 < arguments.length; r3++) {
    var t4 = arguments[r3] != null ? arguments[r3] : {};
    r3 % 2 ? b2(Object(t4), true).forEach(function(r4) {
      e$4(e4, r4, t4[r4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(t4)) : b2(Object(t4)).forEach(function(r4) {
      Object.defineProperty(e4, r4, Object.getOwnPropertyDescriptor(t4, r4));
    });
  }
  return e4;
}
var P3 = function(e4, t4) {
  switch (t4.type) {
    case "TOGGLE_SORT":
      return function(e5, t5) {
        var o4 = t5.payload.value.sortKey === e5.sortKey, n3 = e5.reverse;
        if (o4 && n3 && t5.payload.options.sortToggleType === t$4.AlternateWithReset)
          return {sortKey: "NONE", reverse: false};
        var s3 = o4 && !n3;
        return j3(j3({}, t5.payload.value), {}, {reverse: s3});
      }(e4, t4);
    case "SET":
      return function(e5, r3) {
        return j3(j3({}, e5), r3.payload);
      }(e4, t4);
    default:
      throw new Error();
  }
};
var T3 = {sortKey: "NONE", reverse: false};
var x3 = {position: e$6.Suffix, margin: "4px", size: "14px", iconDefault: jsx(function(e4) {
  var r3 = e4.width, t4 = e4.height, o4 = e4.viewBox, n3 = e4.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-up-down", "data-name": "svg-icon-chevron-single-up-down", "data-testid": "svg-icon-chevron-single-up-down", xmlns: "http://www.w3.org/2000/svg", width: r3 || "36rem", height: t4 || "36rem", viewBox: o4 || "0 0 36 36", strokeWidth: n3 || "0rem"}, jsx("polygon", {points: "36 12 36 15 18 6 0 15 0 12 18 3 36 12"}), jsx("polygon", {points: "0 24 0 21 18 30 36 21 36 24 18 33 0 24"}));
}, null), iconUp: jsx(function(e4) {
  var r3 = e4.width, t4 = e4.height, o4 = e4.viewBox, n3 = e4.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-up", "data-name": "svg-icon-chevron-single-up", "data-testid": "svg-icon-chevron-single-up", xmlns: "http://www.w3.org/2000/svg", width: r3 || "36rem", height: t4 || "36rem", viewBox: o4 || "0 0 36 36", strokeWidth: n3 || "0rem"}, jsx("polygon", {points: "36 21 36 24 18 15 0 24 0 21 18 12 36 21"}));
}, null), iconDown: jsx(d3, null)};
var E2 = {isServer: false, sortToggleType: t$4.Alternate, sortIcon: x3, isRecursive: true};
var D4 = function(e4, r3, t$12, n3) {
  var s3 = r3 != null && r3.state ? j3(j3({}, T3), r3.state) : j3({}, T3), i3 = r3 != null && r3.onChange ? r3.onChange : function() {
  }, c$13 = u3(P3, s3, [], [i3], n3), a$13 = a$2(c$13, 2), u$12 = a$13[0], l3 = a$13[1], p3 = react.useCallback(function(e5) {
    return l3({type: "TOGGLE_SORT", payload: {value: e5, options: t$12}});
  }, [t$12, l3]);
  c2(s3, u$12, function() {
    return l3({type: "SET", payload: s3});
  });
  var y4 = react.useCallback(function(e5, r4, t4) {
    var o4 = r4[u$12.sortKey] || function(e6) {
      return e6;
    };
    return (u$12.reverse ? function(e6) {
      return o4(e6).reverse();
    } : o4)(e5).reduce(function(e6, o5) {
      return t4 && o5.nodes ? e6.concat(j3(j3({}, o5), {}, {nodes: y4(o5.nodes, r4, t4)})) : e6.concat(o5);
    }, []);
  }, [u$12]), m3 = react.useMemo(function() {
    return {onToggleSort: p3};
  }, [p3]);
  t3("sort", n3, u$12);
  var h4 = j3(j3(j3({}, E2), t$12), {}, {sortIcon: j3(j3({}, x3), t$12 ? t$12.sortIcon : {})}), w4 = j3(j3({}, u$12), {}, {sortFn: y4});
  return {state: w4, fns: m3, options: h4, modifier: function(e5) {
    return h4.isServer ? e5 : w4.sortFn(e5, h4.sortFns, h4.isRecursive);
  }, components: {HeaderCellSort: O3}};
};

// docs/snowpack/pkg/dateformat.js
var token = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;
var timezone = /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g;
var timezoneClip = /[^-+\dA-Z]/g;
function dateFormat(date, mask, utc, gmt) {
  if (arguments.length === 1 && typeof date === "string" && !/\d/.test(date)) {
    mask = date;
    date = void 0;
  }
  date = date || date === 0 ? date : new Date();
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (isNaN(date)) {
    throw TypeError("Invalid date");
  }
  mask = String(masks[mask] || mask || masks["default"]);
  var maskSlice = mask.slice(0, 4);
  if (maskSlice === "UTC:" || maskSlice === "GMT:") {
    mask = mask.slice(4);
    utc = true;
    if (maskSlice === "GMT:") {
      gmt = true;
    }
  }
  var _2 = function _3() {
    return utc ? "getUTC" : "get";
  };
  var _d = function d4() {
    return date[_2() + "Date"]();
  };
  var D5 = function D6() {
    return date[_2() + "Day"]();
  };
  var _m = function m3() {
    return date[_2() + "Month"]();
  };
  var y4 = function y5() {
    return date[_2() + "FullYear"]();
  };
  var _H = function H4() {
    return date[_2() + "Hours"]();
  };
  var _M = function M3() {
    return date[_2() + "Minutes"]();
  };
  var _s = function s3() {
    return date[_2() + "Seconds"]();
  };
  var _L = function L3() {
    return date[_2() + "Milliseconds"]();
  };
  var _o = function o4() {
    return utc ? 0 : date.getTimezoneOffset();
  };
  var _W = function W3() {
    return getWeek(date);
  };
  var _N = function N4() {
    return getDayOfWeek(date);
  };
  var flags = {d: function d4() {
    return _d();
  }, dd: function dd2() {
    return pad(_d());
  }, ddd: function ddd() {
    return i18n.dayNames[D5()];
  }, DDD: function DDD() {
    return getDayName({y: y4(), m: _m(), d: _d(), _: _2(), dayName: i18n.dayNames[D5()], short: true});
  }, dddd: function dddd() {
    return i18n.dayNames[D5() + 7];
  }, DDDD: function DDDD() {
    return getDayName({y: y4(), m: _m(), d: _d(), _: _2(), dayName: i18n.dayNames[D5() + 7]});
  }, m: function m3() {
    return _m() + 1;
  }, mm: function mm() {
    return pad(_m() + 1);
  }, mmm: function mmm() {
    return i18n.monthNames[_m()];
  }, mmmm: function mmmm() {
    return i18n.monthNames[_m() + 12];
  }, yy: function yy() {
    return String(y4()).slice(2);
  }, yyyy: function yyyy() {
    return pad(y4(), 4);
  }, h: function h4() {
    return _H() % 12 || 12;
  }, hh: function hh2() {
    return pad(_H() % 12 || 12);
  }, H: function H4() {
    return _H();
  }, HH: function HH() {
    return pad(_H());
  }, M: function M3() {
    return _M();
  }, MM: function MM() {
    return pad(_M());
  }, s: function s3() {
    return _s();
  }, ss: function ss() {
    return pad(_s());
  }, l: function l3() {
    return pad(_L(), 3);
  }, L: function L3() {
    return pad(Math.floor(_L() / 10));
  }, t: function t4() {
    return _H() < 12 ? i18n.timeNames[0] : i18n.timeNames[1];
  }, tt: function tt() {
    return _H() < 12 ? i18n.timeNames[2] : i18n.timeNames[3];
  }, T: function T4() {
    return _H() < 12 ? i18n.timeNames[4] : i18n.timeNames[5];
  }, TT: function TT() {
    return _H() < 12 ? i18n.timeNames[6] : i18n.timeNames[7];
  }, Z: function Z3() {
    return gmt ? "GMT" : utc ? "UTC" : formatTimezone(date);
  }, o: function o4() {
    return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60) * 100 + Math.abs(_o()) % 60, 4);
  }, p: function p3() {
    return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60), 2) + ":" + pad(Math.floor(Math.abs(_o()) % 60), 2);
  }, S: function S4() {
    return ["th", "st", "nd", "rd"][_d() % 10 > 3 ? 0 : (_d() % 100 - _d() % 10 != 10) * _d() % 10];
  }, W: function W3() {
    return _W();
  }, WW: function WW() {
    return pad(_W());
  }, N: function N4() {
    return _N();
  }};
  return mask.replace(token, function(match) {
    if (match in flags) {
      return flags[match]();
    }
    return match.slice(1, match.length - 1);
  });
}
var masks = {default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", paddedShortDate: "mm/dd/yyyy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"};
var i18n = {dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]};
var pad = function pad2(val) {
  var len = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(val).padStart(len, "0");
};
var getDayName = function getDayName2(_ref) {
  var y4 = _ref.y, m3 = _ref.m, d4 = _ref.d, _2 = _ref._, dayName = _ref.dayName, _ref$short = _ref["short"], _short = _ref$short === void 0 ? false : _ref$short;
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(yesterday[_2 + "Date"]() - 1);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow[_2 + "Date"]() + 1);
  var today_d = function today_d2() {
    return today[_2 + "Date"]();
  };
  var today_m = function today_m2() {
    return today[_2 + "Month"]();
  };
  var today_y = function today_y2() {
    return today[_2 + "FullYear"]();
  };
  var yesterday_d = function yesterday_d2() {
    return yesterday[_2 + "Date"]();
  };
  var yesterday_m = function yesterday_m2() {
    return yesterday[_2 + "Month"]();
  };
  var yesterday_y = function yesterday_y2() {
    return yesterday[_2 + "FullYear"]();
  };
  var tomorrow_d = function tomorrow_d2() {
    return tomorrow[_2 + "Date"]();
  };
  var tomorrow_m = function tomorrow_m2() {
    return tomorrow[_2 + "Month"]();
  };
  var tomorrow_y = function tomorrow_y2() {
    return tomorrow[_2 + "FullYear"]();
  };
  if (today_y() === y4 && today_m() === m3 && today_d() === d4) {
    return _short ? "Tdy" : "Today";
  } else if (yesterday_y() === y4 && yesterday_m() === m3 && yesterday_d() === d4) {
    return _short ? "Ysd" : "Yesterday";
  } else if (tomorrow_y() === y4 && tomorrow_m() === m3 && tomorrow_d() === d4) {
    return _short ? "Tmw" : "Tomorrow";
  }
  return dayName;
};
var getWeek = function getWeek2(date) {
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);
  var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
  return 1 + Math.floor(weekDiff);
};
var getDayOfWeek = function getDayOfWeek2(date) {
  var dow = date.getDay();
  if (dow === 0) {
    dow = 7;
  }
  return dow;
};
var formatTimezone = function formatTimezone2(date) {
  return (String(date).match(timezone) || [""]).pop().replace(timezoneClip, "").replace(/GMT\+0000/g, "UTC");
};
var dateformat_default = dateFormat;

// docs/dist/Results/RequestsByUserTotals/index.js
var RequestsByUserTotals = class extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }
  render() {
    console.log("rendering RequestsByUserTotals");
    if (!this.props.data) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    return /* @__PURE__ */ react.createElement(RequestsByUserTotalsTable, {
      data: this.props.data
    });
  }
};
var RequestsByUserTotalsTable = (props) => {
  console.log("creating RequestsByUserTotalsTable");
  const sortOptions = {
    sortFns: {
      REQUESTER: (array) => array.sort((a3, b3) => a3.requester.localeCompare(b3.name)),
      FIRST_DATE: (array) => array.sort((a3, b3) => new Date(a3.firstDate).getTime() - new Date(b3.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a3, b3) => new Date(a3.lastDate).getTime() - new Date(b3.lastDate).getTime()),
      TOTAL_PLAYED: (array) => array.sort((a3, b3) => a3.total - b3.total)
    }
  };
  const sort = D4(props.data, {state: {sortKey: "TOTAL_PLAYED", reverse: true}}, sortOptions);
  return /* @__PURE__ */ react.createElement(h2, {
    data: props.data,
    sort
  }, (tableList) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(i$12, null, /* @__PURE__ */ react.createElement(Q2, null, /* @__PURE__ */ react.createElement(O3, {
    sortKey: "REQUESTER"
  }, "Name"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "FIRST_DATE"
  }, "First"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "LAST_DATE"
  }, "Last"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "TOTAL_PLAYED"
  }, "Total played"))), /* @__PURE__ */ react.createElement(o$12, null, tableList.map((item) => /* @__PURE__ */ react.createElement(D3, {
    key: item.id,
    item
  }, /* @__PURE__ */ react.createElement(A2, null, item.requester), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.firstDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.lastDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, item.total))))));
};
var RequestsByUserTotals_default = RequestsByUserTotals;

// docs/dist/Results/RequestsByUser/index.js
var RequestsByUser = ({
  data
}) => {
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a3, b3) => a3.song.localeCompare(b3.song)),
      PLAY_DATE: (array) => array.sort((a3, b3) => new Date(a3.firstDate).getTime() - new Date(b3.firstDate).getTime())
    }
  };
  const sort = D4(data, {state: {sortKey: "PLAY_DATE"}}, sortOptions);
  return /* @__PURE__ */ react.createElement(h2, {
    data,
    sort
  }, (tableList) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(i$12, null, /* @__PURE__ */ react.createElement(Q2, null, /* @__PURE__ */ react.createElement(O3, {
    sortKey: "SONG_NAME"
  }, "Song Name"), /* @__PURE__ */ react.createElement(v$1, null, "Song URI"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "PLAY_DATE"
  }, "Played"))), /* @__PURE__ */ react.createElement(o$12, null, tableList.map((item) => /* @__PURE__ */ react.createElement(D3, {
    key: item.id,
    item
  }, /* @__PURE__ */ react.createElement(A2, null, item.song), /* @__PURE__ */ react.createElement(A2, null, item.uri), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.playedAt), "yyyy-mm-dd HH:MM")))))));
};
var RequestsByUser_default = RequestsByUser;

// docs/dist/Results/RequestsBySong/index.js
var RequestsBySong = ({
  data,
  songName
}) => {
  const [crunched, setCrunched] = useState(null);
  useEffect(() => {
    const crunched2 = data.reduce((map, req) => {
      if (!req.song && !req.nonlistSong) {
        console.log(`req song is null! ${JSON.stringify(req)}`);
        return map;
      }
      let song;
      if (req.song) {
        song = `${req.song.artist} - ${req.song.title}`;
      } else {
        if (req.nonlistSong) {
          song = req.nonlistSong;
        } else {
          song = req.note;
        }
      }
      let lowercaseSong = song.toLowerCase();
      if (!lowercaseSong.includes(songName.toLowerCase())) {
        return map;
      }
      if (!map.has(lowercaseSong)) {
        map.set(lowercaseSong, {...req, actualSong: song, firstDate: req.createdAt, lastDate: req.createdAt, total: 1});
      } else {
        const existing = map.get(lowercaseSong);
        existing.total++;
        if (new Date(req.createdAt).getTime() < new Date(existing.firstDate).getTime()) {
          existing.firstDate = req.createdAt;
        }
        if (new Date(req.createdAt).getTime() > new Date(existing.lastDate).getTime()) {
          existing.lastDate = req.createdAt;
        }
      }
      return map;
    }, new Map());
    setCrunched({nodes: Array.from(crunched2.values())});
  }, [songName]);
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a3, b3) => a3.actualSong.localeCompare(b3.actualSong)),
      FIRST_DATE: (array) => array.sort((a3, b3) => new Date(a3.firstDate).getTime() - new Date(b3.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a3, b3) => new Date(a3.lastDate).getTime() - new Date(b3.lastDate).getTime()),
      TOTAL_PLAYED: (array) => array.sort((a3, b3) => a3.total - b3.total)
    }
  };
  const sort = D4(data, {state: {sortKey: "TOTAL_PLAYED", reverse: true}}, sortOptions);
  if (!data) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "missing data");
  } else if (!crunched) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "crunching data");
  }
  return /* @__PURE__ */ react.createElement(h2, {
    data: crunched,
    sort
  }, (tableList) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(i$12, null, /* @__PURE__ */ react.createElement(Q2, null, /* @__PURE__ */ react.createElement(O3, {
    sortKey: "SONG_NAME"
  }, "Name"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "FIRST_DATE"
  }, "First"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "LAST_DATE"
  }, "Last"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "TOTAL_PLAYED"
  }, "Total played"))), /* @__PURE__ */ react.createElement(o$12, null, tableList.map((item) => /* @__PURE__ */ react.createElement(D3, {
    key: item.id,
    item
  }, /* @__PURE__ */ react.createElement(A2, null, item.actualSong), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.firstDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.lastDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, item.total))))));
};
var RequestsBySong_default = RequestsBySong;

// docs/dist/Results/index.js
var Results = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "crunchData", () => {
      console.log("crunch");
      const reqsByUser = new Map();
      const data = this.props.data;
      if (!data) {
        return;
      }
      data.forEach((req) => {
        const info = req.requests[0];
        const name = info && info.name || "anonymous";
        const list = reqsByUser.has(name.toLowerCase()) ? reqsByUser.get(name.toLowerCase()) : [];
        let song;
        if (req.song) {
          song = `${req.song.artist} - ${req.song.title}`;
        } else {
          if (req.nonlistSong) {
            song = req.nonlistSong;
          } else {
            song = req.note;
          }
        }
        let uri;
        if (req.note && req.note.toLowerCase().startsWith("http")) {
          uri = req.note;
        } else if (req.nonlistSong && req.nonlistSong.toLowerCase().startsWith("http")) {
          uri = req.nonlistSong;
        }
        if (uri && uri.includes("youtube") && uri.includes("&")) {
          uri = uri.substring(0, uri.indexOf("&"));
        } else if (uri && uri.includes("spotify") && uri.includes("?")) {
          uri = uri.substring(0, uri.indexOf("?"));
        }
        list.push({
          id: req.id,
          uri,
          createdAt: req.createdAt,
          playedAt: req.playedAt,
          song,
          requester: name
        });
        reqsByUser.set(name.toLowerCase(), list);
      });
      const byUserTotalsTableRows = Array.from(reqsByUser, ([key, userReqs]) => {
        return {
          id: userReqs[0].id,
          requester: userReqs[0].requester,
          firstDate: userReqs[userReqs.length - 1].playedAt,
          lastDate: userReqs[0].playedAt,
          total: userReqs.length
        };
      });
      console.log(data);
      this.setState({crunched: reqsByUser, byUserTotalsTableRows});
    });
    __publicField(this, "updateRequesterName", (e4) => this.setState({requester: e4.target.value}));
    __publicField(this, "updateSongName", (e4) => this.setState({songName: e4.target.value}));
    __publicField(this, "filterByUser", () => this.setState({showFilterByUser: true}));
    __publicField(this, "filterBySongName", () => this.setState({actualSongName: this.state.songName, showFilterBySongName: true}));
    __publicField(this, "filterByUserTable", () => {
      if (!this.props.data || !this.state?.crunched || !this.state?.requester || !this.state?.showFilterByUser) {
        return /* @__PURE__ */ react.createElement(react.Fragment, null);
      }
      const byUser = this.state.crunched.get(this.state.requester.toLowerCase());
      if (!byUser) {
        return /* @__PURE__ */ react.createElement(react.Fragment, null);
      }
      return /* @__PURE__ */ react.createElement(RequestsByUser_default, {
        data: {nodes: byUser}
      });
    });
    __publicField(this, "filterBySongNameTable", () => {
      if (!this.props.data || !this.state?.crunched || !this.state?.actualSongName || !this.state?.showFilterBySongName) {
        return /* @__PURE__ */ react.createElement(react.Fragment, null);
      }
      return /* @__PURE__ */ react.createElement(RequestsBySong_default, {
        data: this.props.data,
        songName: this.state.actualSongName
      });
    });
  }
  componentDidMount() {
    this.crunchData();
  }
  requestsByUserTotals() {
    if (!this.props.data || !this.state.byUserTotalsTableRows) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "fetching & crunching data");
    }
    return /* @__PURE__ */ react.createElement(RequestsByUserTotals_default, {
      data: {nodes: this.state.byUserTotalsTableRows}
    });
  }
  render() {
    if (!this.state?.crunched) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Crunching data...");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, " Total: ", this.state.crunched.size, " requesters"), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("h5", null, "User leaderboard")), /* @__PURE__ */ react.createElement("div", null, this.requestsByUserTotals()), /* @__PURE__ */ react.createElement("div", null, " "), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("input", {
      type: "text",
      placeholder: "Requests by user",
      onChange: (e4) => {
        this.updateRequesterName(e4);
      }
    }), /* @__PURE__ */ react.createElement("button", {
      onClick: (e4) => {
        this.filterByUser();
      }
    }, "search"), this.filterByUserTable()), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("input", {
      type: "text",
      placeholder: "Requests by song name",
      onChange: (e4) => {
        this.updateSongName(e4);
      }
    }), /* @__PURE__ */ react.createElement("button", {
      onClick: (e4) => {
        this.filterBySongName();
      }
    }, "search by song name"), this.filterBySongNameTable())));
  }
};
var Results_default = Results;

// docs/snowpack/pkg/fetch-intercept.js
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
var global = getGlobal();
var whatwgFetch = global.fetch.bind(global);
var Headers = global.Headers;
var Request$1 = global.Request;
var Response = global.Response;
var whatwgFetch$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: whatwgFetch,
  Headers,
  Request: Request$1,
  Response
});
var require$$0 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(whatwgFetch$1);
var browser = function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId])
      return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      exports: {},
      id: moduleId,
      loaded: false
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.loaded = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.p = "";
  return __webpack_require__(0);
}([
  function(module, exports, __webpack_require__) {
    var attach = __webpack_require__(1);
    var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    module.exports = attach(ENVIRONMENT_IS_WORKER ? self : window);
  },
  function(module, exports, __webpack_require__) {
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i3 = 0, arr2 = Array(arr.length); i3 < arr.length; i3++) {
          arr2[i3] = arr[i3];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    var interceptors = [];
    function interceptor(fetch2) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var reversedInterceptors = interceptors.reduce(function(array, interceptor2) {
        return [interceptor2].concat(array);
      }, []);
      var promise = Promise.resolve(args);
      reversedInterceptors.forEach(function(_ref) {
        var request = _ref.request, requestError = _ref.requestError;
        if (request || requestError) {
          promise = promise.then(function(args2) {
            return request.apply(void 0, _toConsumableArray(args2));
          }, requestError);
        }
      });
      promise = promise.then(function(args2) {
        var request = new (Function.prototype.bind.apply(Request, [null].concat(_toConsumableArray(args2))))();
        return fetch2(request).then(function(response) {
          response.request = request;
          return response;
        }).catch(function(error) {
          error.request = request;
          return Promise.reject(error);
        });
      });
      reversedInterceptors.forEach(function(_ref2) {
        var response = _ref2.response, responseError = _ref2.responseError;
        if (response || responseError) {
          promise = promise.then(response, responseError);
        }
      });
      return promise;
    }
    module.exports = function attach(env) {
      if (!env.fetch) {
        try {
          __webpack_require__(2);
        } catch (err) {
          throw Error("No fetch available. Unable to register fetch-intercept");
        }
      }
      env.fetch = function(fetch2) {
        return function() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return interceptor.apply(void 0, [fetch2].concat(args));
        };
      }(env.fetch);
      return {
        register: function register(interceptor2) {
          interceptors.push(interceptor2);
          return function() {
            var index = interceptors.indexOf(interceptor2);
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
  },
  function(module, exports) {
    module.exports = require$$0;
  }
]);
var fetch_intercept_default = browser;

// docs/dist/api.js
var URL = "https://api.streamersonglist.com/v1/";
var getJson = (command) => fetch(`${URL}${command}`, {
  headers: {
    Accept: "application/json"
  }
});
var isJsonResponse = (response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("application/json");
};
var handleResponseError = (err) => Promise.reject(err);
fetch_intercept_default.register({
  request: (url, config) => {
    const defaultConfig = {
      credentials: "same-origin"
    };
    return [url, {...defaultConfig, ...config}];
  },
  response: (response) => {
    if (!response.ok && response.status !== 404) {
      return handleResponseError(response);
    }
    if (isJsonResponse(response)) {
      return response.json();
    }
    return response;
  }
});
var getUserDetails = (username) => getJson(`streamers/${username}`);
var getPlaylistHistory = (userId, position = 0) => getJson(`streamers/${userId}/playHistory?size=100000&current=${position}&type=playedAt&order=desc&period=all&songId=null`);

// docs/dist/Main/index.js
var Main = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "loadUserData", () => {
      if (!this.state.userId && this.state.username) {
        getUserDetails(this.state.username).then((result) => {
          this.setState({userId: result.id}, () => {
            this.search();
          });
        });
      } else {
        this.search();
      }
    });
    __publicField(this, "search", (data = [], max) => {
      if (this.state.username) {
        getPlaylistHistory(this.state.username).then((result) => {
          data.push(...result.items);
          if (!max) {
            max = result.total;
          }
          this.setState({data});
        });
      }
    });
    __publicField(this, "updateUsername", (e4) => {
      this.setState({username: e4.target.value});
    });
  }
  componentDidMount() {
    this.setState({initialized: true});
  }
  render() {
    if (!this.state?.initialized) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
      id: "search"
    }, /* @__PURE__ */ react.createElement("input", {
      type: "text",
      placeholder: "Streamer name",
      onChange: (e4) => {
        this.updateUsername(e4);
      }
    }), /* @__PURE__ */ react.createElement("button", {
      onClick: (e4) => {
        this.loadUserData(e4);
      }
    }, "Search")), /* @__PURE__ */ react.createElement("div", null, " "), /* @__PURE__ */ react.createElement("div", {
      id: "result-main"
    }, this.state.data && /* @__PURE__ */ react.createElement(Results_default, {
      data: this.state.data
    })));
  }
};
var Main_default = Main;

// docs/dist/index.js
import.meta.env = env_exports;
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("h1", null, "VERY NIFTY STREAMER SONG LIST HISTORY BROWSING TOOL"), /* @__PURE__ */ react.createElement("h4", null, "coded (poorly) by pirate_patch"), /* @__PURE__ */ react.createElement("h5", null, "version 0.01: search by song name included"), /* @__PURE__ */ react.createElement(Main_default, null))), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
