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
function getDefaultExportFromNamespaceIfNotNamed(n4) {
  return n4 && Object.prototype.hasOwnProperty.call(n4, "default") && Object.keys(n4).length === 1 ? n4["default"] : n4;
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
    var order2 = Object.getOwnPropertyNames(test2).map(function(n4) {
      return test2[n4];
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
  for (var s4 = 1; s4 < arguments.length; s4++) {
    from = Object(arguments[s4]);
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
  var n4 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q2 = 60109, r4 = 60110, t4 = 60112;
  exports.Suspense = 60113;
  var u4 = 60115, v3 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w4 = Symbol.for;
    n4 = w4("react.element");
    p3 = w4("react.portal");
    exports.Fragment = w4("react.fragment");
    exports.StrictMode = w4("react.strict_mode");
    exports.Profiler = w4("react.profiler");
    q2 = w4("react.provider");
    r4 = w4("react.context");
    t4 = w4("react.forward_ref");
    exports.Suspense = w4("react.suspense");
    u4 = w4("react.memo");
    v3 = w4("react.lazy");
  }
  var x4 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a4) {
    if (a4 === null || typeof a4 !== "object")
      return null;
    a4 = x4 && a4[x4] || a4["@@iterator"];
    return typeof a4 === "function" ? a4 : null;
  }
  function z3(a4) {
    for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c4 = 1; c4 < arguments.length; c4++)
      b3 += "&args[]=" + encodeURIComponent(arguments[c4]);
    return "Minified React error #" + a4 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B4 = {};
  function C2(a4, b3, c4) {
    this.props = a4;
    this.context = b3;
    this.refs = B4;
    this.updater = c4 || A3;
  }
  C2.prototype.isReactComponent = {};
  C2.prototype.setState = function(a4, b3) {
    if (typeof a4 !== "object" && typeof a4 !== "function" && a4 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a4, b3, "setState");
  };
  C2.prototype.forceUpdate = function(a4) {
    this.updater.enqueueForceUpdate(this, a4, "forceUpdate");
  };
  function D5() {
  }
  D5.prototype = C2.prototype;
  function E3(a4, b3, c4) {
    this.props = a4;
    this.context = b3;
    this.refs = B4;
    this.updater = c4 || A3;
  }
  var F4 = E3.prototype = new D5();
  F4.constructor = E3;
  objectAssign(F4, C2.prototype);
  F4.isPureReactComponent = true;
  var G3 = {current: null}, H4 = Object.prototype.hasOwnProperty, I4 = {key: true, ref: true, __self: true, __source: true};
  function J2(a4, b3, c4) {
    var e5, d5 = {}, k3 = null, h4 = null;
    if (b3 != null)
      for (e5 in b3.ref !== void 0 && (h4 = b3.ref), b3.key !== void 0 && (k3 = "" + b3.key), b3)
        H4.call(b3, e5) && !I4.hasOwnProperty(e5) && (d5[e5] = b3[e5]);
    var g2 = arguments.length - 2;
    if (g2 === 1)
      d5.children = c4;
    else if (1 < g2) {
      for (var f3 = Array(g2), m3 = 0; m3 < g2; m3++)
        f3[m3] = arguments[m3 + 2];
      d5.children = f3;
    }
    if (a4 && a4.defaultProps)
      for (e5 in g2 = a4.defaultProps, g2)
        d5[e5] === void 0 && (d5[e5] = g2[e5]);
    return {$$typeof: n4, type: a4, key: k3, ref: h4, props: d5, _owner: G3.current};
  }
  function K2(a4, b3) {
    return {$$typeof: n4, type: a4.type, key: b3, ref: a4.ref, props: a4.props, _owner: a4._owner};
  }
  function L3(a4) {
    return typeof a4 === "object" && a4 !== null && a4.$$typeof === n4;
  }
  function escape(a4) {
    var b3 = {"=": "=0", ":": "=2"};
    return "$" + a4.replace(/[=:]/g, function(a5) {
      return b3[a5];
    });
  }
  var M3 = /\/+/g;
  function N4(a4, b3) {
    return typeof a4 === "object" && a4 !== null && a4.key != null ? escape("" + a4.key) : b3.toString(36);
  }
  function O4(a4, b3, c4, e5, d5) {
    var k3 = typeof a4;
    if (k3 === "undefined" || k3 === "boolean")
      a4 = null;
    var h4 = false;
    if (a4 === null)
      h4 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h4 = true;
          break;
        case "object":
          switch (a4.$$typeof) {
            case n4:
            case p3:
              h4 = true;
          }
      }
    if (h4)
      return h4 = a4, d5 = d5(h4), a4 = e5 === "" ? "." + N4(h4, 0) : e5, Array.isArray(d5) ? (c4 = "", a4 != null && (c4 = a4.replace(M3, "$&/") + "/"), O4(d5, b3, c4, "", function(a5) {
        return a5;
      })) : d5 != null && (L3(d5) && (d5 = K2(d5, c4 + (!d5.key || h4 && h4.key === d5.key ? "" : ("" + d5.key).replace(M3, "$&/") + "/") + a4)), b3.push(d5)), 1;
    h4 = 0;
    e5 = e5 === "" ? "." : e5 + ":";
    if (Array.isArray(a4))
      for (var g2 = 0; g2 < a4.length; g2++) {
        k3 = a4[g2];
        var f3 = e5 + N4(k3, g2);
        h4 += O4(k3, b3, c4, f3, d5);
      }
    else if (f3 = y4(a4), typeof f3 === "function")
      for (a4 = f3.call(a4), g2 = 0; !(k3 = a4.next()).done; )
        k3 = k3.value, f3 = e5 + N4(k3, g2++), h4 += O4(k3, b3, c4, f3, d5);
    else if (k3 === "object")
      throw b3 = "" + a4, Error(z3(31, b3 === "[object Object]" ? "object with keys {" + Object.keys(a4).join(", ") + "}" : b3));
    return h4;
  }
  function P4(a4, b3, c4) {
    if (a4 == null)
      return a4;
    var e5 = [], d5 = 0;
    O4(a4, e5, "", "", function(a5) {
      return b3.call(c4, a5, d5++);
    });
    return e5;
  }
  function Q3(a4) {
    if (a4._status === -1) {
      var b3 = a4._result;
      b3 = b3();
      a4._status = 0;
      a4._result = b3;
      b3.then(function(b4) {
        a4._status === 0 && (b4 = b4.default, a4._status = 1, a4._result = b4);
      }, function(b4) {
        a4._status === 0 && (a4._status = 2, a4._result = b4);
      });
    }
    if (a4._status === 1)
      return a4._result;
    throw a4._result;
  }
  var R4 = {current: null};
  function S4() {
    var a4 = R4.current;
    if (a4 === null)
      throw Error(z3(321));
    return a4;
  }
  var T4 = {ReactCurrentDispatcher: R4, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G3, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P4, forEach: function(a4, b3, c4) {
    P4(a4, function() {
      b3.apply(this, arguments);
    }, c4);
  }, count: function(a4) {
    var b3 = 0;
    P4(a4, function() {
      b3++;
    });
    return b3;
  }, toArray: function(a4) {
    return P4(a4, function(a5) {
      return a5;
    }) || [];
  }, only: function(a4) {
    if (!L3(a4))
      throw Error(z3(143));
    return a4;
  }};
  exports.Component = C2;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T4;
  exports.cloneElement = function(a4, b3, c4) {
    if (a4 === null || a4 === void 0)
      throw Error(z3(267, a4));
    var e5 = objectAssign({}, a4.props), d5 = a4.key, k3 = a4.ref, h4 = a4._owner;
    if (b3 != null) {
      b3.ref !== void 0 && (k3 = b3.ref, h4 = G3.current);
      b3.key !== void 0 && (d5 = "" + b3.key);
      if (a4.type && a4.type.defaultProps)
        var g2 = a4.type.defaultProps;
      for (f3 in b3)
        H4.call(b3, f3) && !I4.hasOwnProperty(f3) && (e5[f3] = b3[f3] === void 0 && g2 !== void 0 ? g2[f3] : b3[f3]);
    }
    var f3 = arguments.length - 2;
    if (f3 === 1)
      e5.children = c4;
    else if (1 < f3) {
      g2 = Array(f3);
      for (var m3 = 0; m3 < f3; m3++)
        g2[m3] = arguments[m3 + 2];
      e5.children = g2;
    }
    return {
      $$typeof: n4,
      type: a4.type,
      key: d5,
      ref: k3,
      props: e5,
      _owner: h4
    };
  };
  exports.createContext = function(a4, b3) {
    b3 === void 0 && (b3 = null);
    a4 = {$$typeof: r4, _calculateChangedBits: b3, _currentValue: a4, _currentValue2: a4, _threadCount: 0, Provider: null, Consumer: null};
    a4.Provider = {$$typeof: q2, _context: a4};
    return a4.Consumer = a4;
  };
  exports.createElement = J2;
  exports.createFactory = function(a4) {
    var b3 = J2.bind(null, a4);
    b3.type = a4;
    return b3;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a4) {
    return {$$typeof: t4, render: a4};
  };
  exports.isValidElement = L3;
  exports.lazy = function(a4) {
    return {$$typeof: v3, _payload: {_status: -1, _result: a4}, _init: Q3};
  };
  exports.memo = function(a4, b3) {
    return {$$typeof: u4, type: a4, compare: b3 === void 0 ? null : b3};
  };
  exports.useCallback = function(a4, b3) {
    return S4().useCallback(a4, b3);
  };
  exports.useContext = function(a4, b3) {
    return S4().useContext(a4, b3);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a4, b3) {
    return S4().useEffect(a4, b3);
  };
  exports.useImperativeHandle = function(a4, b3, c4) {
    return S4().useImperativeHandle(a4, b3, c4);
  };
  exports.useLayoutEffect = function(a4, b3) {
    return S4().useLayoutEffect(a4, b3);
  };
  exports.useMemo = function(a4, b3) {
    return S4().useMemo(a4, b3);
  };
  exports.useReducer = function(a4, b3, c4) {
    return S4().useReducer(a4, b3, c4);
  };
  exports.useRef = function(a4) {
    return S4().useRef(a4);
  };
  exports.useState = function(a4) {
    return S4().useState(a4);
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
var useRef = react.useRef;
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
          var a4 = exports.unstable_now();
          t4(true, a4);
          t4 = null;
        } catch (b3) {
          throw setTimeout(w4, 0), b3;
        }
    };
    f3 = function(a4) {
      t4 !== null ? setTimeout(f3, 0, a4) : (t4 = a4, setTimeout(w4, 0));
    };
    g2 = function(a4, b3) {
      u4 = setTimeout(a4, b3);
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
    exports.unstable_forceFrameRate = function(a4) {
      0 > a4 || 125 < a4 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D5 = 0 < a4 ? Math.floor(1e3 / a4) : 5;
    };
    var F4 = new MessageChannel(), G3 = F4.port2;
    F4.port1.onmessage = function() {
      if (B4 !== null) {
        var a4 = exports.unstable_now();
        E3 = a4 + D5;
        try {
          B4(true, a4) ? G3.postMessage(null) : (A3 = false, B4 = null);
        } catch (b3) {
          throw G3.postMessage(null), b3;
        }
      } else
        A3 = false;
    };
    f3 = function(a4) {
      B4 = a4;
      A3 || (A3 = true, G3.postMessage(null));
    };
    g2 = function(a4, b3) {
      C2 = x4(function() {
        a4(exports.unstable_now());
      }, b3);
    };
    h4 = function() {
      y4(C2);
      C2 = -1;
    };
  }
  function H4(a4, b3) {
    var c4 = a4.length;
    a4.push(b3);
    a:
      for (; ; ) {
        var d5 = c4 - 1 >>> 1, e5 = a4[d5];
        if (e5 !== void 0 && 0 < I4(e5, b3))
          a4[d5] = b3, a4[c4] = e5, c4 = d5;
        else
          break a;
      }
  }
  function J2(a4) {
    a4 = a4[0];
    return a4 === void 0 ? null : a4;
  }
  function K2(a4) {
    var b3 = a4[0];
    if (b3 !== void 0) {
      var c4 = a4.pop();
      if (c4 !== b3) {
        a4[0] = c4;
        a:
          for (var d5 = 0, e5 = a4.length; d5 < e5; ) {
            var m3 = 2 * (d5 + 1) - 1, n4 = a4[m3], v3 = m3 + 1, r4 = a4[v3];
            if (n4 !== void 0 && 0 > I4(n4, c4))
              r4 !== void 0 && 0 > I4(r4, n4) ? (a4[d5] = r4, a4[v3] = c4, d5 = v3) : (a4[d5] = n4, a4[m3] = c4, d5 = m3);
            else if (r4 !== void 0 && 0 > I4(r4, c4))
              a4[d5] = r4, a4[v3] = c4, d5 = v3;
            else
              break a;
          }
      }
      return b3;
    }
    return null;
  }
  function I4(a4, b3) {
    var c4 = a4.sortIndex - b3.sortIndex;
    return c4 !== 0 ? c4 : a4.id - b3.id;
  }
  var L3 = [], M3 = [], N4 = 1, O4 = null, P4 = 3, Q3 = false, R4 = false, S4 = false;
  function T4(a4) {
    for (var b3 = J2(M3); b3 !== null; ) {
      if (b3.callback === null)
        K2(M3);
      else if (b3.startTime <= a4)
        K2(M3), b3.sortIndex = b3.expirationTime, H4(L3, b3);
      else
        break;
      b3 = J2(M3);
    }
  }
  function U4(a4) {
    S4 = false;
    T4(a4);
    if (!R4)
      if (J2(L3) !== null)
        R4 = true, f3(V3);
      else {
        var b3 = J2(M3);
        b3 !== null && g2(U4, b3.startTime - a4);
      }
  }
  function V3(a4, b3) {
    R4 = false;
    S4 && (S4 = false, h4());
    Q3 = true;
    var c4 = P4;
    try {
      T4(b3);
      for (O4 = J2(L3); O4 !== null && (!(O4.expirationTime > b3) || a4 && !exports.unstable_shouldYield()); ) {
        var d5 = O4.callback;
        if (typeof d5 === "function") {
          O4.callback = null;
          P4 = O4.priorityLevel;
          var e5 = d5(O4.expirationTime <= b3);
          b3 = exports.unstable_now();
          typeof e5 === "function" ? O4.callback = e5 : O4 === J2(L3) && K2(L3);
          T4(b3);
        } else
          K2(L3);
        O4 = J2(L3);
      }
      if (O4 !== null)
        var m3 = true;
      else {
        var n4 = J2(M3);
        n4 !== null && g2(U4, n4.startTime - b3);
        m3 = false;
      }
      return m3;
    } finally {
      O4 = null, P4 = c4, Q3 = false;
    }
  }
  var W3 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a4) {
    a4.callback = null;
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
  exports.unstable_next = function(a4) {
    switch (P4) {
      case 1:
      case 2:
      case 3:
        var b3 = 3;
        break;
      default:
        b3 = P4;
    }
    var c4 = P4;
    P4 = b3;
    try {
      return a4();
    } finally {
      P4 = c4;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W3;
  exports.unstable_runWithPriority = function(a4, b3) {
    switch (a4) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a4 = 3;
    }
    var c4 = P4;
    P4 = a4;
    try {
      return b3();
    } finally {
      P4 = c4;
    }
  };
  exports.unstable_scheduleCallback = function(a4, b3, c4) {
    var d5 = exports.unstable_now();
    typeof c4 === "object" && c4 !== null ? (c4 = c4.delay, c4 = typeof c4 === "number" && 0 < c4 ? d5 + c4 : d5) : c4 = d5;
    switch (a4) {
      case 1:
        var e5 = -1;
        break;
      case 2:
        e5 = 250;
        break;
      case 5:
        e5 = 1073741823;
        break;
      case 4:
        e5 = 1e4;
        break;
      default:
        e5 = 5e3;
    }
    e5 = c4 + e5;
    a4 = {id: N4++, callback: b3, priorityLevel: a4, startTime: c4, expirationTime: e5, sortIndex: -1};
    c4 > d5 ? (a4.sortIndex = c4, H4(M3, a4), J2(L3) === null && a4 === J2(M3) && (S4 ? h4() : S4 = true, g2(U4, c4 - d5))) : (a4.sortIndex = e5, H4(L3, a4), R4 || Q3 || (R4 = true, f3(V3)));
    return a4;
  };
  exports.unstable_wrapCallback = function(a4) {
    var b3 = P4;
    return function() {
      var c4 = P4;
      P4 = b3;
      try {
        return a4.apply(this, arguments);
      } finally {
        P4 = c4;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a4) {
  for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a4, c4 = 1; c4 < arguments.length; c4++)
    b3 += "&args[]=" + encodeURIComponent(arguments[c4]);
  return "Minified React error #" + a4 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a4, b3) {
  ea(a4, b3);
  ea(a4 + "Capture", b3);
}
function ea(a4, b3) {
  ca[a4] = b3;
  for (a4 = 0; a4 < b3.length; a4++)
    ba.add(b3[a4]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a4) {
  if (ia.call(ka, a4))
    return true;
  if (ia.call(ja, a4))
    return false;
  if (ha.test(a4))
    return ka[a4] = true;
  ja[a4] = true;
  return false;
}
function ma(a4, b3, c4, d5) {
  if (c4 !== null && c4.type === 0)
    return false;
  switch (typeof b3) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d5)
        return false;
      if (c4 !== null)
        return !c4.acceptsBooleans;
      a4 = a4.toLowerCase().slice(0, 5);
      return a4 !== "data-" && a4 !== "aria-";
    default:
      return false;
  }
}
function na(a4, b3, c4, d5) {
  if (b3 === null || typeof b3 === "undefined" || ma(a4, b3, c4, d5))
    return true;
  if (d5)
    return false;
  if (c4 !== null)
    switch (c4.type) {
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
function B(a4, b3, c4, d5, e5, f3, g2) {
  this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
  this.attributeName = d5;
  this.attributeNamespace = e5;
  this.mustUseProperty = c4;
  this.propertyName = a4;
  this.type = b3;
  this.sanitizeURL = f3;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a4) {
  D[a4] = new B(a4, 0, false, a4, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a4) {
  var b3 = a4[0];
  D[b3] = new B(b3, 1, false, a4[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a4) {
  D[a4] = new B(a4, 2, false, a4.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a4) {
  D[a4] = new B(a4, 2, false, a4, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a4) {
  D[a4] = new B(a4, 3, false, a4.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a4) {
  D[a4] = new B(a4, 3, true, a4, null, false, false);
});
["capture", "download"].forEach(function(a4) {
  D[a4] = new B(a4, 4, false, a4, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a4) {
  D[a4] = new B(a4, 6, false, a4, null, false, false);
});
["rowSpan", "start"].forEach(function(a4) {
  D[a4] = new B(a4, 5, false, a4.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a4) {
  return a4[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a4) {
  var b3 = a4.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a4, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a4) {
  var b3 = a4.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a4, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a4) {
  var b3 = a4.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a4, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a4) {
  D[a4] = new B(a4, 1, false, a4.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a4) {
  D[a4] = new B(a4, 1, false, a4.toLowerCase(), null, true, true);
});
function qa(a4, b3, c4, d5) {
  var e5 = D.hasOwnProperty(b3) ? D[b3] : null;
  var f3 = e5 !== null ? e5.type === 0 : d5 ? false : !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N" ? false : true;
  f3 || (na(b3, c4, e5, d5) && (c4 = null), d5 || e5 === null ? la(b3) && (c4 === null ? a4.removeAttribute(b3) : a4.setAttribute(b3, "" + c4)) : e5.mustUseProperty ? a4[e5.propertyName] = c4 === null ? e5.type === 3 ? false : "" : c4 : (b3 = e5.attributeName, d5 = e5.attributeNamespace, c4 === null ? a4.removeAttribute(b3) : (e5 = e5.type, c4 = e5 === 3 || e5 === 4 && c4 === true ? "" : "" + c4, d5 ? a4.setAttributeNS(d5, b3, c4) : a4.setAttribute(b3, c4))));
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
function La(a4) {
  if (a4 === null || typeof a4 !== "object")
    return null;
  a4 = Ka && a4[Ka] || a4["@@iterator"];
  return typeof a4 === "function" ? a4 : null;
}
var Ma;
function Na(a4) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c4) {
      var b3 = c4.stack.trim().match(/\n( *(at )?)/);
      Ma = b3 && b3[1] || "";
    }
  return "\n" + Ma + a4;
}
var Oa = false;
function Pa(a4, b3) {
  if (!a4 || Oa)
    return "";
  Oa = true;
  var c4 = Error.prepareStackTrace;
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
          var d5 = k3;
        }
        Reflect.construct(a4, [], b3);
      } else {
        try {
          b3.call();
        } catch (k3) {
          d5 = k3;
        }
        a4.call(b3.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d5 = k3;
      }
      a4();
    }
  } catch (k3) {
    if (k3 && d5 && typeof k3.stack === "string") {
      for (var e5 = k3.stack.split("\n"), f3 = d5.stack.split("\n"), g2 = e5.length - 1, h4 = f3.length - 1; 1 <= g2 && 0 <= h4 && e5[g2] !== f3[h4]; )
        h4--;
      for (; 1 <= g2 && 0 <= h4; g2--, h4--)
        if (e5[g2] !== f3[h4]) {
          if (g2 !== 1 || h4 !== 1) {
            do
              if (g2--, h4--, 0 > h4 || e5[g2] !== f3[h4])
                return "\n" + e5[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h4);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c4;
  }
  return (a4 = a4 ? a4.displayName || a4.name : "") ? Na(a4) : "";
}
function Qa(a4) {
  switch (a4.tag) {
    case 5:
      return Na(a4.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a4 = Pa(a4.type, false), a4;
    case 11:
      return a4 = Pa(a4.type.render, false), a4;
    case 22:
      return a4 = Pa(a4.type._render, false), a4;
    case 1:
      return a4 = Pa(a4.type, true), a4;
    default:
      return "";
  }
}
function Ra(a4) {
  if (a4 == null)
    return null;
  if (typeof a4 === "function")
    return a4.displayName || a4.name || null;
  if (typeof a4 === "string")
    return a4;
  switch (a4) {
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
  if (typeof a4 === "object")
    switch (a4.$$typeof) {
      case za:
        return (a4.displayName || "Context") + ".Consumer";
      case ya:
        return (a4._context.displayName || "Context") + ".Provider";
      case Aa:
        var b3 = a4.render;
        b3 = b3.displayName || b3.name || "";
        return a4.displayName || (b3 !== "" ? "ForwardRef(" + b3 + ")" : "ForwardRef");
      case Da:
        return Ra(a4.type);
      case Fa:
        return Ra(a4._render);
      case Ea:
        b3 = a4._payload;
        a4 = a4._init;
        try {
          return Ra(a4(b3));
        } catch (c4) {
        }
    }
  return null;
}
function Sa(a4) {
  switch (typeof a4) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a4;
    default:
      return "";
  }
}
function Ta(a4) {
  var b3 = a4.type;
  return (a4 = a4.nodeName) && a4.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
}
function Ua(a4) {
  var b3 = Ta(a4) ? "checked" : "value", c4 = Object.getOwnPropertyDescriptor(a4.constructor.prototype, b3), d5 = "" + a4[b3];
  if (!a4.hasOwnProperty(b3) && typeof c4 !== "undefined" && typeof c4.get === "function" && typeof c4.set === "function") {
    var e5 = c4.get, f3 = c4.set;
    Object.defineProperty(a4, b3, {configurable: true, get: function() {
      return e5.call(this);
    }, set: function(a5) {
      d5 = "" + a5;
      f3.call(this, a5);
    }});
    Object.defineProperty(a4, b3, {enumerable: c4.enumerable});
    return {getValue: function() {
      return d5;
    }, setValue: function(a5) {
      d5 = "" + a5;
    }, stopTracking: function() {
      a4._valueTracker = null;
      delete a4[b3];
    }};
  }
}
function Va(a4) {
  a4._valueTracker || (a4._valueTracker = Ua(a4));
}
function Wa(a4) {
  if (!a4)
    return false;
  var b3 = a4._valueTracker;
  if (!b3)
    return true;
  var c4 = b3.getValue();
  var d5 = "";
  a4 && (d5 = Ta(a4) ? a4.checked ? "true" : "false" : a4.value);
  a4 = d5;
  return a4 !== c4 ? (b3.setValue(a4), true) : false;
}
function Xa(a4) {
  a4 = a4 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a4 === "undefined")
    return null;
  try {
    return a4.activeElement || a4.body;
  } catch (b3) {
    return a4.body;
  }
}
function Ya(a4, b3) {
  var c4 = b3.checked;
  return objectAssign({}, b3, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c4 != null ? c4 : a4._wrapperState.initialChecked});
}
function Za(a4, b3) {
  var c4 = b3.defaultValue == null ? "" : b3.defaultValue, d5 = b3.checked != null ? b3.checked : b3.defaultChecked;
  c4 = Sa(b3.value != null ? b3.value : c4);
  a4._wrapperState = {initialChecked: d5, initialValue: c4, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null};
}
function $a(a4, b3) {
  b3 = b3.checked;
  b3 != null && qa(a4, "checked", b3, false);
}
function ab(a4, b3) {
  $a(a4, b3);
  var c4 = Sa(b3.value), d5 = b3.type;
  if (c4 != null)
    if (d5 === "number") {
      if (c4 === 0 && a4.value === "" || a4.value != c4)
        a4.value = "" + c4;
    } else
      a4.value !== "" + c4 && (a4.value = "" + c4);
  else if (d5 === "submit" || d5 === "reset") {
    a4.removeAttribute("value");
    return;
  }
  b3.hasOwnProperty("value") ? bb(a4, b3.type, c4) : b3.hasOwnProperty("defaultValue") && bb(a4, b3.type, Sa(b3.defaultValue));
  b3.checked == null && b3.defaultChecked != null && (a4.defaultChecked = !!b3.defaultChecked);
}
function cb(a4, b3, c4) {
  if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
    var d5 = b3.type;
    if (!(d5 !== "submit" && d5 !== "reset" || b3.value !== void 0 && b3.value !== null))
      return;
    b3 = "" + a4._wrapperState.initialValue;
    c4 || b3 === a4.value || (a4.value = b3);
    a4.defaultValue = b3;
  }
  c4 = a4.name;
  c4 !== "" && (a4.name = "");
  a4.defaultChecked = !!a4._wrapperState.initialChecked;
  c4 !== "" && (a4.name = c4);
}
function bb(a4, b3, c4) {
  if (b3 !== "number" || Xa(a4.ownerDocument) !== a4)
    c4 == null ? a4.defaultValue = "" + a4._wrapperState.initialValue : a4.defaultValue !== "" + c4 && (a4.defaultValue = "" + c4);
}
function db(a4) {
  var b3 = "";
  react.Children.forEach(a4, function(a5) {
    a5 != null && (b3 += a5);
  });
  return b3;
}
function eb(a4, b3) {
  a4 = objectAssign({children: void 0}, b3);
  if (b3 = db(b3.children))
    a4.children = b3;
  return a4;
}
function fb(a4, b3, c4, d5) {
  a4 = a4.options;
  if (b3) {
    b3 = {};
    for (var e5 = 0; e5 < c4.length; e5++)
      b3["$" + c4[e5]] = true;
    for (c4 = 0; c4 < a4.length; c4++)
      e5 = b3.hasOwnProperty("$" + a4[c4].value), a4[c4].selected !== e5 && (a4[c4].selected = e5), e5 && d5 && (a4[c4].defaultSelected = true);
  } else {
    c4 = "" + Sa(c4);
    b3 = null;
    for (e5 = 0; e5 < a4.length; e5++) {
      if (a4[e5].value === c4) {
        a4[e5].selected = true;
        d5 && (a4[e5].defaultSelected = true);
        return;
      }
      b3 !== null || a4[e5].disabled || (b3 = a4[e5]);
    }
    b3 !== null && (b3.selected = true);
  }
}
function gb(a4, b3) {
  if (b3.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b3, {value: void 0, defaultValue: void 0, children: "" + a4._wrapperState.initialValue});
}
function hb(a4, b3) {
  var c4 = b3.value;
  if (c4 == null) {
    c4 = b3.children;
    b3 = b3.defaultValue;
    if (c4 != null) {
      if (b3 != null)
        throw Error(y(92));
      if (Array.isArray(c4)) {
        if (!(1 >= c4.length))
          throw Error(y(93));
        c4 = c4[0];
      }
      b3 = c4;
    }
    b3 == null && (b3 = "");
    c4 = b3;
  }
  a4._wrapperState = {initialValue: Sa(c4)};
}
function ib(a4, b3) {
  var c4 = Sa(b3.value), d5 = Sa(b3.defaultValue);
  c4 != null && (c4 = "" + c4, c4 !== a4.value && (a4.value = c4), b3.defaultValue == null && a4.defaultValue !== c4 && (a4.defaultValue = c4));
  d5 != null && (a4.defaultValue = "" + d5);
}
function jb(a4) {
  var b3 = a4.textContent;
  b3 === a4._wrapperState.initialValue && b3 !== "" && b3 !== null && (a4.value = b3);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a4) {
  switch (a4) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a4, b3) {
  return a4 == null || a4 === "http://www.w3.org/1999/xhtml" ? lb(b3) : a4 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a4;
}
var nb;
var ob = function(a4) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c4, d5, e5) {
    MSApp.execUnsafeLocalFunction(function() {
      return a4(b3, c4, d5, e5);
    });
  } : a4;
}(function(a4, b3) {
  if (a4.namespaceURI !== kb.svg || "innerHTML" in a4)
    a4.innerHTML = b3;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
    for (b3 = nb.firstChild; a4.firstChild; )
      a4.removeChild(a4.firstChild);
    for (; b3.firstChild; )
      a4.appendChild(b3.firstChild);
  }
});
function pb(a4, b3) {
  if (b3) {
    var c4 = a4.firstChild;
    if (c4 && c4 === a4.lastChild && c4.nodeType === 3) {
      c4.nodeValue = b3;
      return;
    }
  }
  a4.textContent = b3;
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
Object.keys(qb).forEach(function(a4) {
  rb.forEach(function(b3) {
    b3 = b3 + a4.charAt(0).toUpperCase() + a4.substring(1);
    qb[b3] = qb[a4];
  });
});
function sb(a4, b3, c4) {
  return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c4 || typeof b3 !== "number" || b3 === 0 || qb.hasOwnProperty(a4) && qb[a4] ? ("" + b3).trim() : b3 + "px";
}
function tb(a4, b3) {
  a4 = a4.style;
  for (var c4 in b3)
    if (b3.hasOwnProperty(c4)) {
      var d5 = c4.indexOf("--") === 0, e5 = sb(c4, b3[c4], d5);
      c4 === "float" && (c4 = "cssFloat");
      d5 ? a4.setProperty(c4, e5) : a4[c4] = e5;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a4, b3) {
  if (b3) {
    if (ub[a4] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
      throw Error(y(137, a4));
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
function wb(a4, b3) {
  if (a4.indexOf("-") === -1)
    return typeof b3.is === "string";
  switch (a4) {
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
function xb(a4) {
  a4 = a4.target || a4.srcElement || window;
  a4.correspondingUseElement && (a4 = a4.correspondingUseElement);
  return a4.nodeType === 3 ? a4.parentNode : a4;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a4) {
  if (a4 = Cb(a4)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b3 = a4.stateNode;
    b3 && (b3 = Db(b3), yb(a4.stateNode, a4.type, b3));
  }
}
function Eb(a4) {
  zb ? Ab ? Ab.push(a4) : Ab = [a4] : zb = a4;
}
function Fb() {
  if (zb) {
    var a4 = zb, b3 = Ab;
    Ab = zb = null;
    Bb(a4);
    if (b3)
      for (a4 = 0; a4 < b3.length; a4++)
        Bb(b3[a4]);
  }
}
function Gb(a4, b3) {
  return a4(b3);
}
function Hb(a4, b3, c4, d5, e5) {
  return a4(b3, c4, d5, e5);
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
function Nb(a4, b3, c4) {
  if (Lb)
    return a4(b3, c4);
  Lb = true;
  try {
    return Jb(a4, b3, c4);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a4, b3) {
  var c4 = a4.stateNode;
  if (c4 === null)
    return null;
  var d5 = Db(c4);
  if (d5 === null)
    return null;
  c4 = d5[b3];
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
        (d5 = !d5.disabled) || (a4 = a4.type, d5 = !(a4 === "button" || a4 === "input" || a4 === "select" || a4 === "textarea"));
        a4 = !d5;
        break a;
      default:
        a4 = false;
    }
  if (a4)
    return null;
  if (c4 && typeof c4 !== "function")
    throw Error(y(231, b3, typeof c4));
  return c4;
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
  } catch (a4) {
    Pb = false;
  }
var Qb;
function Rb(a4, b3, c4, d5, e5, f3, g2, h4, k3) {
  var l3 = Array.prototype.slice.call(arguments, 3);
  try {
    b3.apply(c4, l3);
  } catch (n4) {
    this.onError(n4);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a4) {
  Sb = true;
  Tb = a4;
}};
function Xb(a4, b3, c4, d5, e5, f3, g2, h4, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a4, b3, c4, d5, e5, f3, g2, h4, k3) {
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
function Zb(a4) {
  var b3 = a4, c4 = a4;
  if (a4.alternate)
    for (; b3.return; )
      b3 = b3.return;
  else {
    a4 = b3;
    do
      b3 = a4, (b3.flags & 1026) !== 0 && (c4 = b3.return), a4 = b3.return;
    while (a4);
  }
  return b3.tag === 3 ? c4 : null;
}
function $b(a4) {
  if (a4.tag === 13) {
    var b3 = a4.memoizedState;
    b3 === null && (a4 = a4.alternate, a4 !== null && (b3 = a4.memoizedState));
    if (b3 !== null)
      return b3.dehydrated;
  }
  return null;
}
function ac(a4) {
  if (Zb(a4) !== a4)
    throw Error(y(188));
}
function bc(a4) {
  var b3 = a4.alternate;
  if (!b3) {
    b3 = Zb(a4);
    if (b3 === null)
      throw Error(y(188));
    return b3 !== a4 ? null : a4;
  }
  for (var c4 = a4, d5 = b3; ; ) {
    var e5 = c4.return;
    if (e5 === null)
      break;
    var f3 = e5.alternate;
    if (f3 === null) {
      d5 = e5.return;
      if (d5 !== null) {
        c4 = d5;
        continue;
      }
      break;
    }
    if (e5.child === f3.child) {
      for (f3 = e5.child; f3; ) {
        if (f3 === c4)
          return ac(e5), a4;
        if (f3 === d5)
          return ac(e5), b3;
        f3 = f3.sibling;
      }
      throw Error(y(188));
    }
    if (c4.return !== d5.return)
      c4 = e5, d5 = f3;
    else {
      for (var g2 = false, h4 = e5.child; h4; ) {
        if (h4 === c4) {
          g2 = true;
          c4 = e5;
          d5 = f3;
          break;
        }
        if (h4 === d5) {
          g2 = true;
          d5 = e5;
          c4 = f3;
          break;
        }
        h4 = h4.sibling;
      }
      if (!g2) {
        for (h4 = f3.child; h4; ) {
          if (h4 === c4) {
            g2 = true;
            c4 = f3;
            d5 = e5;
            break;
          }
          if (h4 === d5) {
            g2 = true;
            d5 = f3;
            c4 = e5;
            break;
          }
          h4 = h4.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c4.alternate !== d5)
      throw Error(y(190));
  }
  if (c4.tag !== 3)
    throw Error(y(188));
  return c4.stateNode.current === c4 ? a4 : b3;
}
function cc(a4) {
  a4 = bc(a4);
  if (!a4)
    return null;
  for (var b3 = a4; ; ) {
    if (b3.tag === 5 || b3.tag === 6)
      return b3;
    if (b3.child)
      b3.child.return = b3, b3 = b3.child;
    else {
      if (b3 === a4)
        break;
      for (; !b3.sibling; ) {
        if (!b3.return || b3.return === a4)
          return null;
        b3 = b3.return;
      }
      b3.sibling.return = b3.return;
      b3 = b3.sibling;
    }
  }
  return null;
}
function dc(a4, b3) {
  for (var c4 = a4.alternate; b3 !== null; ) {
    if (b3 === a4 || b3 === c4)
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
function rc(a4, b3, c4, d5, e5) {
  return {blockedOn: a4, domEventName: b3, eventSystemFlags: c4 | 16, nativeEvent: e5, targetContainers: [d5]};
}
function sc(a4, b3) {
  switch (a4) {
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
function tc(a4, b3, c4, d5, e5, f3) {
  if (a4 === null || a4.nativeEvent !== f3)
    return a4 = rc(b3, c4, d5, e5, f3), b3 !== null && (b3 = Cb(b3), b3 !== null && fc(b3)), a4;
  a4.eventSystemFlags |= d5;
  b3 = a4.targetContainers;
  e5 !== null && b3.indexOf(e5) === -1 && b3.push(e5);
  return a4;
}
function uc(a4, b3, c4, d5, e5) {
  switch (b3) {
    case "focusin":
      return kc = tc(kc, a4, b3, c4, d5, e5), true;
    case "dragenter":
      return lc = tc(lc, a4, b3, c4, d5, e5), true;
    case "mouseover":
      return mc = tc(mc, a4, b3, c4, d5, e5), true;
    case "pointerover":
      var f3 = e5.pointerId;
      nc.set(f3, tc(nc.get(f3) || null, a4, b3, c4, d5, e5));
      return true;
    case "gotpointercapture":
      return f3 = e5.pointerId, oc.set(f3, tc(oc.get(f3) || null, a4, b3, c4, d5, e5)), true;
  }
  return false;
}
function vc(a4) {
  var b3 = wc(a4.target);
  if (b3 !== null) {
    var c4 = Zb(b3);
    if (c4 !== null) {
      if (b3 = c4.tag, b3 === 13) {
        if (b3 = $b(c4), b3 !== null) {
          a4.blockedOn = b3;
          hc(a4.lanePriority, function() {
            scheduler.unstable_runWithPriority(a4.priority, function() {
              gc(c4);
            });
          });
          return;
        }
      } else if (b3 === 3 && c4.stateNode.hydrate) {
        a4.blockedOn = c4.tag === 3 ? c4.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a4.blockedOn = null;
}
function xc(a4) {
  if (a4.blockedOn !== null)
    return false;
  for (var b3 = a4.targetContainers; 0 < b3.length; ) {
    var c4 = yc(a4.domEventName, a4.eventSystemFlags, b3[0], a4.nativeEvent);
    if (c4 !== null)
      return b3 = Cb(c4), b3 !== null && fc(b3), a4.blockedOn = c4, false;
    b3.shift();
  }
  return true;
}
function zc(a4, b3, c4) {
  xc(a4) && c4.delete(b3);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a4 = jc[0];
    if (a4.blockedOn !== null) {
      a4 = Cb(a4.blockedOn);
      a4 !== null && ec(a4);
      break;
    }
    for (var b3 = a4.targetContainers; 0 < b3.length; ) {
      var c4 = yc(a4.domEventName, a4.eventSystemFlags, b3[0], a4.nativeEvent);
      if (c4 !== null) {
        a4.blockedOn = c4;
        break;
      }
      b3.shift();
    }
    a4.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a4, b3) {
  a4.blockedOn === b3 && (a4.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a4) {
  function b3(b4) {
    return Bc(b4, a4);
  }
  if (0 < jc.length) {
    Bc(jc[0], a4);
    for (var c4 = 1; c4 < jc.length; c4++) {
      var d5 = jc[c4];
      d5.blockedOn === a4 && (d5.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a4);
  lc !== null && Bc(lc, a4);
  mc !== null && Bc(mc, a4);
  nc.forEach(b3);
  oc.forEach(b3);
  for (c4 = 0; c4 < pc.length; c4++)
    d5 = pc[c4], d5.blockedOn === a4 && (d5.blockedOn = null);
  for (; 0 < pc.length && (c4 = pc[0], c4.blockedOn === null); )
    vc(c4), c4.blockedOn === null && pc.shift();
}
function Dc(a4, b3) {
  var c4 = {};
  c4[a4.toLowerCase()] = b3.toLowerCase();
  c4["Webkit" + a4] = "webkit" + b3;
  c4["Moz" + a4] = "moz" + b3;
  return c4;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a4) {
  if (Fc[a4])
    return Fc[a4];
  if (!Ec[a4])
    return a4;
  var b3 = Ec[a4], c4;
  for (c4 in b3)
    if (b3.hasOwnProperty(c4) && c4 in Gc)
      return Fc[a4] = b3[c4];
  return a4;
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
function Pc(a4, b3) {
  for (var c4 = 0; c4 < a4.length; c4 += 2) {
    var d5 = a4[c4], e5 = a4[c4 + 1];
    e5 = "on" + (e5[0].toUpperCase() + e5.slice(1));
    Nc.set(d5, b3);
    Mc.set(d5, e5);
    da(e5, [d5]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a4) {
  if ((1 & a4) !== 0)
    return F = 15, 1;
  if ((2 & a4) !== 0)
    return F = 14, 2;
  if ((4 & a4) !== 0)
    return F = 13, 4;
  var b3 = 24 & a4;
  if (b3 !== 0)
    return F = 12, b3;
  if ((a4 & 32) !== 0)
    return F = 11, 32;
  b3 = 192 & a4;
  if (b3 !== 0)
    return F = 10, b3;
  if ((a4 & 256) !== 0)
    return F = 9, 256;
  b3 = 3584 & a4;
  if (b3 !== 0)
    return F = 8, b3;
  if ((a4 & 4096) !== 0)
    return F = 7, 4096;
  b3 = 4186112 & a4;
  if (b3 !== 0)
    return F = 6, b3;
  b3 = 62914560 & a4;
  if (b3 !== 0)
    return F = 5, b3;
  if (a4 & 67108864)
    return F = 4, 67108864;
  if ((a4 & 134217728) !== 0)
    return F = 3, 134217728;
  b3 = 805306368 & a4;
  if (b3 !== 0)
    return F = 2, b3;
  if ((1073741824 & a4) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a4;
}
function Sc(a4) {
  switch (a4) {
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
function Tc(a4) {
  switch (a4) {
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
      throw Error(y(358, a4));
  }
}
function Uc(a4, b3) {
  var c4 = a4.pendingLanes;
  if (c4 === 0)
    return F = 0;
  var d5 = 0, e5 = 0, f3 = a4.expiredLanes, g2 = a4.suspendedLanes, h4 = a4.pingedLanes;
  if (f3 !== 0)
    d5 = f3, e5 = F = 15;
  else if (f3 = c4 & 134217727, f3 !== 0) {
    var k3 = f3 & ~g2;
    k3 !== 0 ? (d5 = Rc(k3), e5 = F) : (h4 &= f3, h4 !== 0 && (d5 = Rc(h4), e5 = F));
  } else
    f3 = c4 & ~g2, f3 !== 0 ? (d5 = Rc(f3), e5 = F) : h4 !== 0 && (d5 = Rc(h4), e5 = F);
  if (d5 === 0)
    return 0;
  d5 = 31 - Vc(d5);
  d5 = c4 & ((0 > d5 ? 0 : 1 << d5) << 1) - 1;
  if (b3 !== 0 && b3 !== d5 && (b3 & g2) === 0) {
    Rc(b3);
    if (e5 <= F)
      return b3;
    F = e5;
  }
  b3 = a4.entangledLanes;
  if (b3 !== 0)
    for (a4 = a4.entanglements, b3 &= d5; 0 < b3; )
      c4 = 31 - Vc(b3), e5 = 1 << c4, d5 |= a4[c4], b3 &= ~e5;
  return d5;
}
function Wc(a4) {
  a4 = a4.pendingLanes & -1073741825;
  return a4 !== 0 ? a4 : a4 & 1073741824 ? 1073741824 : 0;
}
function Xc(a4, b3) {
  switch (a4) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a4 = Yc(24 & ~b3), a4 === 0 ? Xc(10, b3) : a4;
    case 10:
      return a4 = Yc(192 & ~b3), a4 === 0 ? Xc(8, b3) : a4;
    case 8:
      return a4 = Yc(3584 & ~b3), a4 === 0 && (a4 = Yc(4186112 & ~b3), a4 === 0 && (a4 = 512)), a4;
    case 2:
      return b3 = Yc(805306368 & ~b3), b3 === 0 && (b3 = 268435456), b3;
  }
  throw Error(y(358, a4));
}
function Yc(a4) {
  return a4 & -a4;
}
function Zc(a4) {
  for (var b3 = [], c4 = 0; 31 > c4; c4++)
    b3.push(a4);
  return b3;
}
function $c(a4, b3, c4) {
  a4.pendingLanes |= b3;
  var d5 = b3 - 1;
  a4.suspendedLanes &= d5;
  a4.pingedLanes &= d5;
  a4 = a4.eventTimes;
  b3 = 31 - Vc(b3);
  a4[b3] = c4;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a4) {
  return a4 === 0 ? 32 : 31 - (bd(a4) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a4, b3, c4, d5) {
  Kb || Ib();
  var e5 = hd, f3 = Kb;
  Kb = true;
  try {
    Hb(e5, a4, b3, c4, d5);
  } finally {
    (Kb = f3) || Mb();
  }
}
function id(a4, b3, c4, d5) {
  ed(dd, hd.bind(null, a4, b3, c4, d5));
}
function hd(a4, b3, c4, d5) {
  if (fd) {
    var e5;
    if ((e5 = (b3 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a4))
      a4 = rc(null, a4, b3, c4, d5), jc.push(a4);
    else {
      var f3 = yc(a4, b3, c4, d5);
      if (f3 === null)
        e5 && sc(a4, d5);
      else {
        if (e5) {
          if (-1 < qc.indexOf(a4)) {
            a4 = rc(f3, a4, b3, c4, d5);
            jc.push(a4);
            return;
          }
          if (uc(f3, a4, b3, c4, d5))
            return;
          sc(a4, d5);
        }
        jd(a4, b3, d5, null, c4);
      }
    }
  }
}
function yc(a4, b3, c4, d5) {
  var e5 = xb(d5);
  e5 = wc(e5);
  if (e5 !== null) {
    var f3 = Zb(e5);
    if (f3 === null)
      e5 = null;
    else {
      var g2 = f3.tag;
      if (g2 === 13) {
        e5 = $b(f3);
        if (e5 !== null)
          return e5;
        e5 = null;
      } else if (g2 === 3) {
        if (f3.stateNode.hydrate)
          return f3.tag === 3 ? f3.stateNode.containerInfo : null;
        e5 = null;
      } else
        f3 !== e5 && (e5 = null);
    }
  }
  jd(a4, b3, d5, e5, c4);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a4, b3 = ld, c4 = b3.length, d5, e5 = "value" in kd ? kd.value : kd.textContent, f3 = e5.length;
  for (a4 = 0; a4 < c4 && b3[a4] === e5[a4]; a4++)
    ;
  var g2 = c4 - a4;
  for (d5 = 1; d5 <= g2 && b3[c4 - d5] === e5[f3 - d5]; d5++)
    ;
  return md = e5.slice(a4, 1 < d5 ? 1 - d5 : void 0);
}
function od(a4) {
  var b3 = a4.keyCode;
  "charCode" in a4 ? (a4 = a4.charCode, a4 === 0 && b3 === 13 && (a4 = 13)) : a4 = b3;
  a4 === 10 && (a4 = 13);
  return 32 <= a4 || a4 === 13 ? a4 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a4) {
  function b3(b4, d5, e5, f3, g2) {
    this._reactName = b4;
    this._targetInst = e5;
    this.type = d5;
    this.nativeEvent = f3;
    this.target = g2;
    this.currentTarget = null;
    for (var c4 in a4)
      a4.hasOwnProperty(c4) && (b4 = a4[c4], this[c4] = b4 ? b4(f3) : f3[c4]);
    this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b3.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a5 = this.nativeEvent;
    a5 && (a5.preventDefault ? a5.preventDefault() : typeof a5.returnValue !== "unknown" && (a5.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a5 = this.nativeEvent;
    a5 && (a5.stopPropagation ? a5.stopPropagation() : typeof a5.cancelBubble !== "unknown" && (a5.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b3;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a4) {
  return a4.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a4) {
  return a4.relatedTarget === void 0 ? a4.fromElement === a4.srcElement ? a4.toElement : a4.fromElement : a4.relatedTarget;
}, movementX: function(a4) {
  if ("movementX" in a4)
    return a4.movementX;
  a4 !== yd && (yd && a4.type === "mousemove" ? (wd = a4.screenX - yd.screenX, xd = a4.screenY - yd.screenY) : xd = wd = 0, yd = a4);
  return wd;
}, movementY: function(a4) {
  return "movementY" in a4 ? a4.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a4) {
  return "clipboardData" in a4 ? a4.clipboardData : window.clipboardData;
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
function Pd(a4) {
  var b3 = this.nativeEvent;
  return b3.getModifierState ? b3.getModifierState(a4) : (a4 = Od[a4]) ? !!b3[a4] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a4) {
  if (a4.key) {
    var b3 = Md[a4.key] || a4.key;
    if (b3 !== "Unidentified")
      return b3;
  }
  return a4.type === "keypress" ? (a4 = od(a4), a4 === 13 ? "Enter" : String.fromCharCode(a4)) : a4.type === "keydown" || a4.type === "keyup" ? Nd[a4.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a4) {
  return a4.type === "keypress" ? od(a4) : 0;
}, keyCode: function(a4) {
  return a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
}, which: function(a4) {
  return a4.type === "keypress" ? od(a4) : a4.type === "keydown" || a4.type === "keyup" ? a4.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a4) {
    return "deltaX" in a4 ? a4.deltaX : "wheelDeltaX" in a4 ? -a4.wheelDeltaX : 0;
  },
  deltaY: function(a4) {
    return "deltaY" in a4 ? a4.deltaY : "wheelDeltaY" in a4 ? -a4.wheelDeltaY : "wheelDelta" in a4 ? -a4.wheelDelta : 0;
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
function ge(a4, b3) {
  switch (a4) {
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
function he(a4) {
  a4 = a4.detail;
  return typeof a4 === "object" && "data" in a4 ? a4.data : null;
}
var ie = false;
function je(a4, b3) {
  switch (a4) {
    case "compositionend":
      return he(b3);
    case "keypress":
      if (b3.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a4 = b3.data, a4 === ee && fe ? null : a4;
    default:
      return null;
  }
}
function ke(a4, b3) {
  if (ie)
    return a4 === "compositionend" || !ae && ge(a4, b3) ? (a4 = nd(), md = ld = kd = null, ie = false, a4) : null;
  switch (a4) {
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
function me(a4) {
  var b3 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
  return b3 === "input" ? !!le[a4.type] : b3 === "textarea" ? true : false;
}
function ne(a4, b3, c4, d5) {
  Eb(d5);
  b3 = oe(b3, "onChange");
  0 < b3.length && (c4 = new td("onChange", "change", null, c4, d5), a4.push({event: c4, listeners: b3}));
}
var pe = null;
var qe = null;
function re(a4) {
  se(a4, 0);
}
function te(a4) {
  var b3 = ue(a4);
  if (Wa(b3))
    return a4;
}
function ve(a4, b3) {
  if (a4 === "change")
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
function Be(a4) {
  if (a4.propertyName === "value" && te(qe)) {
    var b3 = [];
    ne(b3, qe, a4, xb(a4));
    a4 = re;
    if (Kb)
      a4(b3);
    else {
      Kb = true;
      try {
        Gb(a4, b3);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a4, b3, c4) {
  a4 === "focusin" ? (Ae(), pe = b3, qe = c4, pe.attachEvent("onpropertychange", Be)) : a4 === "focusout" && Ae();
}
function De(a4) {
  if (a4 === "selectionchange" || a4 === "keyup" || a4 === "keydown")
    return te(qe);
}
function Ee(a4, b3) {
  if (a4 === "click")
    return te(b3);
}
function Fe(a4, b3) {
  if (a4 === "input" || a4 === "change")
    return te(b3);
}
function Ge(a4, b3) {
  return a4 === b3 && (a4 !== 0 || 1 / a4 === 1 / b3) || a4 !== a4 && b3 !== b3;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a4, b3) {
  if (He(a4, b3))
    return true;
  if (typeof a4 !== "object" || a4 === null || typeof b3 !== "object" || b3 === null)
    return false;
  var c4 = Object.keys(a4), d5 = Object.keys(b3);
  if (c4.length !== d5.length)
    return false;
  for (d5 = 0; d5 < c4.length; d5++)
    if (!Ie.call(b3, c4[d5]) || !He(a4[c4[d5]], b3[c4[d5]]))
      return false;
  return true;
}
function Ke(a4) {
  for (; a4 && a4.firstChild; )
    a4 = a4.firstChild;
  return a4;
}
function Le(a4, b3) {
  var c4 = Ke(a4);
  a4 = 0;
  for (var d5; c4; ) {
    if (c4.nodeType === 3) {
      d5 = a4 + c4.textContent.length;
      if (a4 <= b3 && d5 >= b3)
        return {node: c4, offset: b3 - a4};
      a4 = d5;
    }
    a: {
      for (; c4; ) {
        if (c4.nextSibling) {
          c4 = c4.nextSibling;
          break a;
        }
        c4 = c4.parentNode;
      }
      c4 = void 0;
    }
    c4 = Ke(c4);
  }
}
function Me(a4, b3) {
  return a4 && b3 ? a4 === b3 ? true : a4 && a4.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Me(a4, b3.parentNode) : "contains" in a4 ? a4.contains(b3) : a4.compareDocumentPosition ? !!(a4.compareDocumentPosition(b3) & 16) : false : false;
}
function Ne() {
  for (var a4 = window, b3 = Xa(); b3 instanceof a4.HTMLIFrameElement; ) {
    try {
      var c4 = typeof b3.contentWindow.location.href === "string";
    } catch (d5) {
      c4 = false;
    }
    if (c4)
      a4 = b3.contentWindow;
    else
      break;
    b3 = Xa(a4.document);
  }
  return b3;
}
function Oe(a4) {
  var b3 = a4 && a4.nodeName && a4.nodeName.toLowerCase();
  return b3 && (b3 === "input" && (a4.type === "text" || a4.type === "search" || a4.type === "tel" || a4.type === "url" || a4.type === "password") || b3 === "textarea" || a4.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a4, b3, c4) {
  var d5 = c4.window === c4 ? c4.document : c4.nodeType === 9 ? c4 : c4.ownerDocument;
  Te || Qe == null || Qe !== Xa(d5) || (d5 = Qe, "selectionStart" in d5 && Oe(d5) ? d5 = {start: d5.selectionStart, end: d5.selectionEnd} : (d5 = (d5.ownerDocument && d5.ownerDocument.defaultView || window).getSelection(), d5 = {anchorNode: d5.anchorNode, anchorOffset: d5.anchorOffset, focusNode: d5.focusNode, focusOffset: d5.focusOffset}), Se && Je(Se, d5) || (Se = d5, d5 = oe(Re, "onSelect"), 0 < d5.length && (b3 = new td("onSelect", "select", null, b3, c4), a4.push({event: b3, listeners: d5}), b3.target = Qe)));
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
function Ze(a4, b3, c4) {
  var d5 = a4.type || "unknown-event";
  a4.currentTarget = c4;
  Yb(d5, b3, void 0, a4);
  a4.currentTarget = null;
}
function se(a4, b3) {
  b3 = (b3 & 4) !== 0;
  for (var c4 = 0; c4 < a4.length; c4++) {
    var d5 = a4[c4], e5 = d5.event;
    d5 = d5.listeners;
    a: {
      var f3 = void 0;
      if (b3)
        for (var g2 = d5.length - 1; 0 <= g2; g2--) {
          var h4 = d5[g2], k3 = h4.instance, l3 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f3 && e5.isPropagationStopped())
            break a;
          Ze(e5, h4, l3);
          f3 = k3;
        }
      else
        for (g2 = 0; g2 < d5.length; g2++) {
          h4 = d5[g2];
          k3 = h4.instance;
          l3 = h4.currentTarget;
          h4 = h4.listener;
          if (k3 !== f3 && e5.isPropagationStopped())
            break a;
          Ze(e5, h4, l3);
          f3 = k3;
        }
    }
  }
  if (Ub)
    throw a4 = Vb, Ub = false, Vb = null, a4;
}
function G(a4, b3) {
  var c4 = $e(b3), d5 = a4 + "__bubble";
  c4.has(d5) || (af(b3, a4, 2, false), c4.add(d5));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a4) {
  a4[bf] || (a4[bf] = true, ba.forEach(function(b3) {
    Ye.has(b3) || df(b3, false, a4, null);
    df(b3, true, a4, null);
  }));
}
function df(a4, b3, c4, d5) {
  var e5 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f3 = c4;
  a4 === "selectionchange" && c4.nodeType !== 9 && (f3 = c4.ownerDocument);
  if (d5 !== null && !b3 && Ye.has(a4)) {
    if (a4 !== "scroll")
      return;
    e5 |= 2;
    f3 = d5;
  }
  var g2 = $e(f3), h4 = a4 + "__" + (b3 ? "capture" : "bubble");
  g2.has(h4) || (b3 && (e5 |= 4), af(f3, a4, e5, b3), g2.add(h4));
}
function af(a4, b3, c4, d5) {
  var e5 = Nc.get(b3);
  switch (e5 === void 0 ? 2 : e5) {
    case 0:
      e5 = gd;
      break;
    case 1:
      e5 = id;
      break;
    default:
      e5 = hd;
  }
  c4 = e5.bind(null, b3, c4, a4);
  e5 = void 0;
  !Pb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e5 = true);
  d5 ? e5 !== void 0 ? a4.addEventListener(b3, c4, {capture: true, passive: e5}) : a4.addEventListener(b3, c4, true) : e5 !== void 0 ? a4.addEventListener(b3, c4, {passive: e5}) : a4.addEventListener(b3, c4, false);
}
function jd(a4, b3, c4, d5, e5) {
  var f3 = d5;
  if ((b3 & 1) === 0 && (b3 & 2) === 0 && d5 !== null)
    a:
      for (; ; ) {
        if (d5 === null)
          return;
        var g2 = d5.tag;
        if (g2 === 3 || g2 === 4) {
          var h4 = d5.stateNode.containerInfo;
          if (h4 === e5 || h4.nodeType === 8 && h4.parentNode === e5)
            break;
          if (g2 === 4)
            for (g2 = d5.return; g2 !== null; ) {
              var k3 = g2.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g2.stateNode.containerInfo, k3 === e5 || k3.nodeType === 8 && k3.parentNode === e5)
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
              d5 = f3 = g2;
              continue a;
            }
            h4 = h4.parentNode;
          }
        }
        d5 = d5.return;
      }
  Nb(function() {
    var d6 = f3, e6 = xb(c4), g3 = [];
    a: {
      var h5 = Mc.get(a4);
      if (h5 !== void 0) {
        var k4 = td, x4 = a4;
        switch (a4) {
          case "keypress":
            if (od(c4) === 0)
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
            if (c4.button === 2)
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
        var w4 = (b3 & 4) !== 0, z3 = !w4 && a4 === "scroll", u4 = w4 ? h5 !== null ? h5 + "Capture" : null : h5;
        w4 = [];
        for (var t4 = d6, q2; t4 !== null; ) {
          q2 = t4;
          var v3 = q2.stateNode;
          q2.tag === 5 && v3 !== null && (q2 = v3, u4 !== null && (v3 = Ob(t4, u4), v3 != null && w4.push(ef(t4, v3, q2))));
          if (z3)
            break;
          t4 = t4.return;
        }
        0 < w4.length && (h5 = new k4(h5, x4, null, c4, e6), g3.push({event: h5, listeners: w4}));
      }
    }
    if ((b3 & 7) === 0) {
      a: {
        h5 = a4 === "mouseover" || a4 === "pointerover";
        k4 = a4 === "mouseout" || a4 === "pointerout";
        if (h5 && (b3 & 16) === 0 && (x4 = c4.relatedTarget || c4.fromElement) && (wc(x4) || x4[ff]))
          break a;
        if (k4 || h5) {
          h5 = e6.window === e6 ? e6 : (h5 = e6.ownerDocument) ? h5.defaultView || h5.parentWindow : window;
          if (k4) {
            if (x4 = c4.relatedTarget || c4.toElement, k4 = d6, x4 = x4 ? wc(x4) : null, x4 !== null && (z3 = Zb(x4), x4 !== z3 || x4.tag !== 5 && x4.tag !== 6))
              x4 = null;
          } else
            k4 = null, x4 = d6;
          if (k4 !== x4) {
            w4 = Bd;
            v3 = "onMouseLeave";
            u4 = "onMouseEnter";
            t4 = "mouse";
            if (a4 === "pointerout" || a4 === "pointerover")
              w4 = Td, v3 = "onPointerLeave", u4 = "onPointerEnter", t4 = "pointer";
            z3 = k4 == null ? h5 : ue(k4);
            q2 = x4 == null ? h5 : ue(x4);
            h5 = new w4(v3, t4 + "leave", k4, c4, e6);
            h5.target = z3;
            h5.relatedTarget = q2;
            v3 = null;
            wc(e6) === d6 && (w4 = new w4(u4, t4 + "enter", x4, c4, e6), w4.target = q2, w4.relatedTarget = z3, v3 = w4);
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
        h5 = d6 ? ue(d6) : window;
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
        if (J2 && (J2 = J2(a4, d6))) {
          ne(g3, J2, c4, e6);
          break a;
        }
        K2 && K2(a4, h5, d6);
        a4 === "focusout" && (K2 = h5._wrapperState) && K2.controlled && h5.type === "number" && bb(h5, "number", h5.value);
      }
      K2 = d6 ? ue(d6) : window;
      switch (a4) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d6, Se = null;
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
          Ue(g3, c4, e6);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c4, e6);
      }
      var Q3;
      if (ae)
        b: {
          switch (a4) {
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
        ie ? ge(a4, c4) && (L3 = "onCompositionEnd") : a4 === "keydown" && c4.keyCode === 229 && (L3 = "onCompositionStart");
      L3 && (de && c4.locale !== "ko" && (ie || L3 !== "onCompositionStart" ? L3 === "onCompositionEnd" && ie && (Q3 = nd()) : (kd = e6, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d6, L3), 0 < K2.length && (L3 = new Ld(L3, a4, null, c4, e6), g3.push({event: L3, listeners: K2}), Q3 ? L3.data = Q3 : (Q3 = he(c4), Q3 !== null && (L3.data = Q3))));
      if (Q3 = ce ? je(a4, c4) : ke(a4, c4))
        d6 = oe(d6, "onBeforeInput"), 0 < d6.length && (e6 = new Ld("onBeforeInput", "beforeinput", null, c4, e6), g3.push({event: e6, listeners: d6}), e6.data = Q3);
    }
    se(g3, b3);
  });
}
function ef(a4, b3, c4) {
  return {instance: a4, listener: b3, currentTarget: c4};
}
function oe(a4, b3) {
  for (var c4 = b3 + "Capture", d5 = []; a4 !== null; ) {
    var e5 = a4, f3 = e5.stateNode;
    e5.tag === 5 && f3 !== null && (e5 = f3, f3 = Ob(a4, c4), f3 != null && d5.unshift(ef(a4, f3, e5)), f3 = Ob(a4, b3), f3 != null && d5.push(ef(a4, f3, e5)));
    a4 = a4.return;
  }
  return d5;
}
function gf(a4) {
  if (a4 === null)
    return null;
  do
    a4 = a4.return;
  while (a4 && a4.tag !== 5);
  return a4 ? a4 : null;
}
function hf(a4, b3, c4, d5, e5) {
  for (var f3 = b3._reactName, g2 = []; c4 !== null && c4 !== d5; ) {
    var h4 = c4, k3 = h4.alternate, l3 = h4.stateNode;
    if (k3 !== null && k3 === d5)
      break;
    h4.tag === 5 && l3 !== null && (h4 = l3, e5 ? (k3 = Ob(c4, f3), k3 != null && g2.unshift(ef(c4, k3, h4))) : e5 || (k3 = Ob(c4, f3), k3 != null && g2.push(ef(c4, k3, h4))));
    c4 = c4.return;
  }
  g2.length !== 0 && a4.push({event: b3, listeners: g2});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a4, b3) {
  switch (a4) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b3.autoFocus;
  }
  return false;
}
function nf(a4, b3) {
  return a4 === "textarea" || a4 === "option" || a4 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a4) {
  a4.nodeType === 1 ? a4.textContent = "" : a4.nodeType === 9 && (a4 = a4.body, a4 != null && (a4.textContent = ""));
}
function rf(a4) {
  for (; a4 != null; a4 = a4.nextSibling) {
    var b3 = a4.nodeType;
    if (b3 === 1 || b3 === 3)
      break;
  }
  return a4;
}
function sf(a4) {
  a4 = a4.previousSibling;
  for (var b3 = 0; a4; ) {
    if (a4.nodeType === 8) {
      var c4 = a4.data;
      if (c4 === "$" || c4 === "$!" || c4 === "$?") {
        if (b3 === 0)
          return a4;
        b3--;
      } else
        c4 === "/$" && b3++;
    }
    a4 = a4.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a4) {
  return {$$typeof: Ga, toString: a4, valueOf: a4};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a4) {
  var b3 = a4[wf];
  if (b3)
    return b3;
  for (var c4 = a4.parentNode; c4; ) {
    if (b3 = c4[ff] || c4[wf]) {
      c4 = b3.alternate;
      if (b3.child !== null || c4 !== null && c4.child !== null)
        for (a4 = sf(a4); a4 !== null; ) {
          if (c4 = a4[wf])
            return c4;
          a4 = sf(a4);
        }
      return b3;
    }
    a4 = c4;
    c4 = a4.parentNode;
  }
  return null;
}
function Cb(a4) {
  a4 = a4[wf] || a4[ff];
  return !a4 || a4.tag !== 5 && a4.tag !== 6 && a4.tag !== 13 && a4.tag !== 3 ? null : a4;
}
function ue(a4) {
  if (a4.tag === 5 || a4.tag === 6)
    return a4.stateNode;
  throw Error(y(33));
}
function Db(a4) {
  return a4[xf] || null;
}
function $e(a4) {
  var b3 = a4[yf];
  b3 === void 0 && (b3 = a4[yf] = new Set());
  return b3;
}
var zf = [];
var Af = -1;
function Bf(a4) {
  return {current: a4};
}
function H(a4) {
  0 > Af || (a4.current = zf[Af], zf[Af] = null, Af--);
}
function I(a4, b3) {
  Af++;
  zf[Af] = a4.current;
  a4.current = b3;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a4, b3) {
  var c4 = a4.type.contextTypes;
  if (!c4)
    return Cf;
  var d5 = a4.stateNode;
  if (d5 && d5.__reactInternalMemoizedUnmaskedChildContext === b3)
    return d5.__reactInternalMemoizedMaskedChildContext;
  var e5 = {}, f3;
  for (f3 in c4)
    e5[f3] = b3[f3];
  d5 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = b3, a4.__reactInternalMemoizedMaskedChildContext = e5);
  return e5;
}
function Ff(a4) {
  a4 = a4.childContextTypes;
  return a4 !== null && a4 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a4, b3, c4) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b3);
  I(N, c4);
}
function If(a4, b3, c4) {
  var d5 = a4.stateNode;
  a4 = b3.childContextTypes;
  if (typeof d5.getChildContext !== "function")
    return c4;
  d5 = d5.getChildContext();
  for (var e5 in d5)
    if (!(e5 in a4))
      throw Error(y(108, Ra(b3) || "Unknown", e5));
  return objectAssign({}, c4, d5);
}
function Jf(a4) {
  a4 = (a4 = a4.stateNode) && a4.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a4);
  I(N, N.current);
  return true;
}
function Kf(a4, b3, c4) {
  var d5 = a4.stateNode;
  if (!d5)
    throw Error(y(169));
  c4 ? (a4 = If(a4, b3, Df), d5.__reactInternalMemoizedMergedChildContext = a4, H(N), H(M), I(M, a4)) : H(N);
  I(N, c4);
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
function fg(a4) {
  switch (a4) {
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
function gg(a4, b3) {
  a4 = fg(a4);
  return Nf(a4, b3);
}
function hg(a4, b3, c4) {
  a4 = fg(a4);
  return Of(a4, b3, c4);
}
function ig() {
  if (bg !== null) {
    var a4 = bg;
    bg = null;
    Pf(a4);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a4 = 0;
    try {
      var b3 = ag;
      gg(99, function() {
        for (; a4 < b3.length; a4++) {
          var c4 = b3[a4];
          do
            c4 = c4(true);
          while (c4 !== null);
        }
      });
      ag = null;
    } catch (c4) {
      throw ag !== null && (ag = ag.slice(a4 + 1)), Of(Uf, ig), c4;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a4, b3) {
  if (a4 && a4.defaultProps) {
    b3 = objectAssign({}, b3);
    a4 = a4.defaultProps;
    for (var c4 in a4)
      b3[c4] === void 0 && (b3[c4] = a4[c4]);
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
function rg(a4) {
  var b3 = mg.current;
  H(mg);
  a4.type._context._currentValue = b3;
}
function sg(a4, b3) {
  for (; a4 !== null; ) {
    var c4 = a4.alternate;
    if ((a4.childLanes & b3) === b3)
      if (c4 === null || (c4.childLanes & b3) === b3)
        break;
      else
        c4.childLanes |= b3;
    else
      a4.childLanes |= b3, c4 !== null && (c4.childLanes |= b3);
    a4 = a4.return;
  }
}
function tg(a4, b3) {
  ng = a4;
  pg = og = null;
  a4 = a4.dependencies;
  a4 !== null && a4.firstContext !== null && ((a4.lanes & b3) !== 0 && (ug = true), a4.firstContext = null);
}
function vg(a4, b3) {
  if (pg !== a4 && b3 !== false && b3 !== 0) {
    if (typeof b3 !== "number" || b3 === 1073741823)
      pg = a4, b3 = 1073741823;
    b3 = {context: a4, observedBits: b3, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b3;
      ng.dependencies = {lanes: 0, firstContext: b3, responders: null};
    } else
      og = og.next = b3;
  }
  return a4._currentValue;
}
var wg = false;
function xg(a4) {
  a4.updateQueue = {baseState: a4.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a4, b3) {
  a4 = a4.updateQueue;
  b3.updateQueue === a4 && (b3.updateQueue = {baseState: a4.baseState, firstBaseUpdate: a4.firstBaseUpdate, lastBaseUpdate: a4.lastBaseUpdate, shared: a4.shared, effects: a4.effects});
}
function zg(a4, b3) {
  return {eventTime: a4, lane: b3, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a4, b3) {
  a4 = a4.updateQueue;
  if (a4 !== null) {
    a4 = a4.shared;
    var c4 = a4.pending;
    c4 === null ? b3.next = b3 : (b3.next = c4.next, c4.next = b3);
    a4.pending = b3;
  }
}
function Bg(a4, b3) {
  var c4 = a4.updateQueue, d5 = a4.alternate;
  if (d5 !== null && (d5 = d5.updateQueue, c4 === d5)) {
    var e5 = null, f3 = null;
    c4 = c4.firstBaseUpdate;
    if (c4 !== null) {
      do {
        var g2 = {eventTime: c4.eventTime, lane: c4.lane, tag: c4.tag, payload: c4.payload, callback: c4.callback, next: null};
        f3 === null ? e5 = f3 = g2 : f3 = f3.next = g2;
        c4 = c4.next;
      } while (c4 !== null);
      f3 === null ? e5 = f3 = b3 : f3 = f3.next = b3;
    } else
      e5 = f3 = b3;
    c4 = {baseState: d5.baseState, firstBaseUpdate: e5, lastBaseUpdate: f3, shared: d5.shared, effects: d5.effects};
    a4.updateQueue = c4;
    return;
  }
  a4 = c4.lastBaseUpdate;
  a4 === null ? c4.firstBaseUpdate = b3 : a4.next = b3;
  c4.lastBaseUpdate = b3;
}
function Cg(a4, b3, c4, d5) {
  var e5 = a4.updateQueue;
  wg = false;
  var f3 = e5.firstBaseUpdate, g2 = e5.lastBaseUpdate, h4 = e5.shared.pending;
  if (h4 !== null) {
    e5.shared.pending = null;
    var k3 = h4, l3 = k3.next;
    k3.next = null;
    g2 === null ? f3 = l3 : g2.next = l3;
    g2 = k3;
    var n4 = a4.alternate;
    if (n4 !== null) {
      n4 = n4.updateQueue;
      var A3 = n4.lastBaseUpdate;
      A3 !== g2 && (A3 === null ? n4.firstBaseUpdate = l3 : A3.next = l3, n4.lastBaseUpdate = k3);
    }
  }
  if (f3 !== null) {
    A3 = e5.baseState;
    g2 = 0;
    n4 = l3 = k3 = null;
    do {
      h4 = f3.lane;
      var p3 = f3.eventTime;
      if ((d5 & h4) === h4) {
        n4 !== null && (n4 = n4.next = {
          eventTime: p3,
          lane: 0,
          tag: f3.tag,
          payload: f3.payload,
          callback: f3.callback,
          next: null
        });
        a: {
          var C2 = a4, x4 = f3;
          h4 = b3;
          p3 = c4;
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
        f3.callback !== null && (a4.flags |= 32, h4 = e5.effects, h4 === null ? e5.effects = [f3] : h4.push(f3));
      } else
        p3 = {eventTime: p3, lane: h4, tag: f3.tag, payload: f3.payload, callback: f3.callback, next: null}, n4 === null ? (l3 = n4 = p3, k3 = A3) : n4 = n4.next = p3, g2 |= h4;
      f3 = f3.next;
      if (f3 === null)
        if (h4 = e5.shared.pending, h4 === null)
          break;
        else
          f3 = h4.next, h4.next = null, e5.lastBaseUpdate = h4, e5.shared.pending = null;
    } while (1);
    n4 === null && (k3 = A3);
    e5.baseState = k3;
    e5.firstBaseUpdate = l3;
    e5.lastBaseUpdate = n4;
    Dg |= g2;
    a4.lanes = g2;
    a4.memoizedState = A3;
  }
}
function Eg(a4, b3, c4) {
  a4 = b3.effects;
  b3.effects = null;
  if (a4 !== null)
    for (b3 = 0; b3 < a4.length; b3++) {
      var d5 = a4[b3], e5 = d5.callback;
      if (e5 !== null) {
        d5.callback = null;
        d5 = c4;
        if (typeof e5 !== "function")
          throw Error(y(191, e5));
        e5.call(d5);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a4, b3, c4, d5) {
  b3 = a4.memoizedState;
  c4 = c4(d5, b3);
  c4 = c4 === null || c4 === void 0 ? b3 : objectAssign({}, b3, c4);
  a4.memoizedState = c4;
  a4.lanes === 0 && (a4.updateQueue.baseState = c4);
}
var Kg = {isMounted: function(a4) {
  return (a4 = a4._reactInternals) ? Zb(a4) === a4 : false;
}, enqueueSetState: function(a4, b3, c4) {
  a4 = a4._reactInternals;
  var d5 = Hg(), e5 = Ig(a4), f3 = zg(d5, e5);
  f3.payload = b3;
  c4 !== void 0 && c4 !== null && (f3.callback = c4);
  Ag(a4, f3);
  Jg(a4, e5, d5);
}, enqueueReplaceState: function(a4, b3, c4) {
  a4 = a4._reactInternals;
  var d5 = Hg(), e5 = Ig(a4), f3 = zg(d5, e5);
  f3.tag = 1;
  f3.payload = b3;
  c4 !== void 0 && c4 !== null && (f3.callback = c4);
  Ag(a4, f3);
  Jg(a4, e5, d5);
}, enqueueForceUpdate: function(a4, b3) {
  a4 = a4._reactInternals;
  var c4 = Hg(), d5 = Ig(a4), e5 = zg(c4, d5);
  e5.tag = 2;
  b3 !== void 0 && b3 !== null && (e5.callback = b3);
  Ag(a4, e5);
  Jg(a4, d5, c4);
}};
function Lg(a4, b3, c4, d5, e5, f3, g2) {
  a4 = a4.stateNode;
  return typeof a4.shouldComponentUpdate === "function" ? a4.shouldComponentUpdate(d5, f3, g2) : b3.prototype && b3.prototype.isPureReactComponent ? !Je(c4, d5) || !Je(e5, f3) : true;
}
function Mg(a4, b3, c4) {
  var d5 = false, e5 = Cf;
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? f3 = vg(f3) : (e5 = Ff(b3) ? Df : M.current, d5 = b3.contextTypes, f3 = (d5 = d5 !== null && d5 !== void 0) ? Ef(a4, e5) : Cf);
  b3 = new b3(c4, f3);
  a4.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
  b3.updater = Kg;
  a4.stateNode = b3;
  b3._reactInternals = a4;
  d5 && (a4 = a4.stateNode, a4.__reactInternalMemoizedUnmaskedChildContext = e5, a4.__reactInternalMemoizedMaskedChildContext = f3);
  return b3;
}
function Ng(a4, b3, c4, d5) {
  a4 = b3.state;
  typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c4, d5);
  typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c4, d5);
  b3.state !== a4 && Kg.enqueueReplaceState(b3, b3.state, null);
}
function Og(a4, b3, c4, d5) {
  var e5 = a4.stateNode;
  e5.props = c4;
  e5.state = a4.memoizedState;
  e5.refs = Fg;
  xg(a4);
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? e5.context = vg(f3) : (f3 = Ff(b3) ? Df : M.current, e5.context = Ef(a4, f3));
  Cg(a4, c4, e5, d5);
  e5.state = a4.memoizedState;
  f3 = b3.getDerivedStateFromProps;
  typeof f3 === "function" && (Gg(a4, b3, f3, c4), e5.state = a4.memoizedState);
  typeof b3.getDerivedStateFromProps === "function" || typeof e5.getSnapshotBeforeUpdate === "function" || typeof e5.UNSAFE_componentWillMount !== "function" && typeof e5.componentWillMount !== "function" || (b3 = e5.state, typeof e5.componentWillMount === "function" && e5.componentWillMount(), typeof e5.UNSAFE_componentWillMount === "function" && e5.UNSAFE_componentWillMount(), b3 !== e5.state && Kg.enqueueReplaceState(e5, e5.state, null), Cg(a4, c4, e5, d5), e5.state = a4.memoizedState);
  typeof e5.componentDidMount === "function" && (a4.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a4, b3, c4) {
  a4 = c4.ref;
  if (a4 !== null && typeof a4 !== "function" && typeof a4 !== "object") {
    if (c4._owner) {
      c4 = c4._owner;
      if (c4) {
        if (c4.tag !== 1)
          throw Error(y(309));
        var d5 = c4.stateNode;
      }
      if (!d5)
        throw Error(y(147, a4));
      var e5 = "" + a4;
      if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === e5)
        return b3.ref;
      b3 = function(a5) {
        var b4 = d5.refs;
        b4 === Fg && (b4 = d5.refs = {});
        a5 === null ? delete b4[e5] : b4[e5] = a5;
      };
      b3._stringRef = e5;
      return b3;
    }
    if (typeof a4 !== "string")
      throw Error(y(284));
    if (!c4._owner)
      throw Error(y(290, a4));
  }
  return a4;
}
function Rg(a4, b3) {
  if (a4.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b3) === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : b3));
}
function Sg(a4) {
  function b3(b4, c5) {
    if (a4) {
      var d6 = b4.lastEffect;
      d6 !== null ? (d6.nextEffect = c5, b4.lastEffect = c5) : b4.firstEffect = b4.lastEffect = c5;
      c5.nextEffect = null;
      c5.flags = 8;
    }
  }
  function c4(c5, d6) {
    if (!a4)
      return null;
    for (; d6 !== null; )
      b3(c5, d6), d6 = d6.sibling;
    return null;
  }
  function d5(a5, b4) {
    for (a5 = new Map(); b4 !== null; )
      b4.key !== null ? a5.set(b4.key, b4) : a5.set(b4.index, b4), b4 = b4.sibling;
    return a5;
  }
  function e5(a5, b4) {
    a5 = Tg(a5, b4);
    a5.index = 0;
    a5.sibling = null;
    return a5;
  }
  function f3(b4, c5, d6) {
    b4.index = d6;
    if (!a4)
      return c5;
    d6 = b4.alternate;
    if (d6 !== null)
      return d6 = d6.index, d6 < c5 ? (b4.flags = 2, c5) : d6;
    b4.flags = 2;
    return c5;
  }
  function g2(b4) {
    a4 && b4.alternate === null && (b4.flags = 2);
    return b4;
  }
  function h4(a5, b4, c5, d6) {
    if (b4 === null || b4.tag !== 6)
      return b4 = Ug(c5, a5.mode, d6), b4.return = a5, b4;
    b4 = e5(b4, c5);
    b4.return = a5;
    return b4;
  }
  function k3(a5, b4, c5, d6) {
    if (b4 !== null && b4.elementType === c5.type)
      return d6 = e5(b4, c5.props), d6.ref = Qg(a5, b4, c5), d6.return = a5, d6;
    d6 = Vg(c5.type, c5.key, c5.props, null, a5.mode, d6);
    d6.ref = Qg(a5, b4, c5);
    d6.return = a5;
    return d6;
  }
  function l3(a5, b4, c5, d6) {
    if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c5.containerInfo || b4.stateNode.implementation !== c5.implementation)
      return b4 = Wg(c5, a5.mode, d6), b4.return = a5, b4;
    b4 = e5(b4, c5.children || []);
    b4.return = a5;
    return b4;
  }
  function n4(a5, b4, c5, d6, f4) {
    if (b4 === null || b4.tag !== 7)
      return b4 = Xg(c5, a5.mode, d6, f4), b4.return = a5, b4;
    b4 = e5(b4, c5);
    b4.return = a5;
    return b4;
  }
  function A3(a5, b4, c5) {
    if (typeof b4 === "string" || typeof b4 === "number")
      return b4 = Ug("" + b4, a5.mode, c5), b4.return = a5, b4;
    if (typeof b4 === "object" && b4 !== null) {
      switch (b4.$$typeof) {
        case sa:
          return c5 = Vg(b4.type, b4.key, b4.props, null, a5.mode, c5), c5.ref = Qg(a5, null, b4), c5.return = a5, c5;
        case ta:
          return b4 = Wg(b4, a5.mode, c5), b4.return = a5, b4;
      }
      if (Pg(b4) || La(b4))
        return b4 = Xg(b4, a5.mode, c5, null), b4.return = a5, b4;
      Rg(a5, b4);
    }
    return null;
  }
  function p3(a5, b4, c5, d6) {
    var e6 = b4 !== null ? b4.key : null;
    if (typeof c5 === "string" || typeof c5 === "number")
      return e6 !== null ? null : h4(a5, b4, "" + c5, d6);
    if (typeof c5 === "object" && c5 !== null) {
      switch (c5.$$typeof) {
        case sa:
          return c5.key === e6 ? c5.type === ua ? n4(a5, b4, c5.props.children, d6, e6) : k3(a5, b4, c5, d6) : null;
        case ta:
          return c5.key === e6 ? l3(a5, b4, c5, d6) : null;
      }
      if (Pg(c5) || La(c5))
        return e6 !== null ? null : n4(a5, b4, c5, d6, null);
      Rg(a5, c5);
    }
    return null;
  }
  function C2(a5, b4, c5, d6, e6) {
    if (typeof d6 === "string" || typeof d6 === "number")
      return a5 = a5.get(c5) || null, h4(b4, a5, "" + d6, e6);
    if (typeof d6 === "object" && d6 !== null) {
      switch (d6.$$typeof) {
        case sa:
          return a5 = a5.get(d6.key === null ? c5 : d6.key) || null, d6.type === ua ? n4(b4, a5, d6.props.children, e6, d6.key) : k3(b4, a5, d6, e6);
        case ta:
          return a5 = a5.get(d6.key === null ? c5 : d6.key) || null, l3(b4, a5, d6, e6);
      }
      if (Pg(d6) || La(d6))
        return a5 = a5.get(c5) || null, n4(b4, a5, d6, e6, null);
      Rg(b4, d6);
    }
    return null;
  }
  function x4(e6, g3, h5, k4) {
    for (var l4 = null, t4 = null, u4 = g3, z3 = g3 = 0, q2 = null; u4 !== null && z3 < h5.length; z3++) {
      u4.index > z3 ? (q2 = u4, u4 = null) : q2 = u4.sibling;
      var n5 = p3(e6, u4, h5[z3], k4);
      if (n5 === null) {
        u4 === null && (u4 = q2);
        break;
      }
      a4 && u4 && n5.alternate === null && b3(e6, u4);
      g3 = f3(n5, g3, z3);
      t4 === null ? l4 = n5 : t4.sibling = n5;
      t4 = n5;
      u4 = q2;
    }
    if (z3 === h5.length)
      return c4(e6, u4), l4;
    if (u4 === null) {
      for (; z3 < h5.length; z3++)
        u4 = A3(e6, h5[z3], k4), u4 !== null && (g3 = f3(u4, g3, z3), t4 === null ? l4 = u4 : t4.sibling = u4, t4 = u4);
      return l4;
    }
    for (u4 = d5(e6, u4); z3 < h5.length; z3++)
      q2 = C2(u4, e6, z3, h5[z3], k4), q2 !== null && (a4 && q2.alternate !== null && u4.delete(q2.key === null ? z3 : q2.key), g3 = f3(q2, g3, z3), t4 === null ? l4 = q2 : t4.sibling = q2, t4 = q2);
    a4 && u4.forEach(function(a5) {
      return b3(e6, a5);
    });
    return l4;
  }
  function w4(e6, g3, h5, k4) {
    var l4 = La(h5);
    if (typeof l4 !== "function")
      throw Error(y(150));
    h5 = l4.call(h5);
    if (h5 == null)
      throw Error(y(151));
    for (var t4 = l4 = null, u4 = g3, z3 = g3 = 0, q2 = null, n5 = h5.next(); u4 !== null && !n5.done; z3++, n5 = h5.next()) {
      u4.index > z3 ? (q2 = u4, u4 = null) : q2 = u4.sibling;
      var w5 = p3(e6, u4, n5.value, k4);
      if (w5 === null) {
        u4 === null && (u4 = q2);
        break;
      }
      a4 && u4 && w5.alternate === null && b3(e6, u4);
      g3 = f3(w5, g3, z3);
      t4 === null ? l4 = w5 : t4.sibling = w5;
      t4 = w5;
      u4 = q2;
    }
    if (n5.done)
      return c4(e6, u4), l4;
    if (u4 === null) {
      for (; !n5.done; z3++, n5 = h5.next())
        n5 = A3(e6, n5.value, k4), n5 !== null && (g3 = f3(n5, g3, z3), t4 === null ? l4 = n5 : t4.sibling = n5, t4 = n5);
      return l4;
    }
    for (u4 = d5(e6, u4); !n5.done; z3++, n5 = h5.next())
      n5 = C2(u4, e6, z3, n5.value, k4), n5 !== null && (a4 && n5.alternate !== null && u4.delete(n5.key === null ? z3 : n5.key), g3 = f3(n5, g3, z3), t4 === null ? l4 = n5 : t4.sibling = n5, t4 = n5);
    a4 && u4.forEach(function(a5) {
      return b3(e6, a5);
    });
    return l4;
  }
  return function(a5, d6, f4, h5) {
    var k4 = typeof f4 === "object" && f4 !== null && f4.type === ua && f4.key === null;
    k4 && (f4 = f4.props.children);
    var l4 = typeof f4 === "object" && f4 !== null;
    if (l4)
      switch (f4.$$typeof) {
        case sa:
          a: {
            l4 = f4.key;
            for (k4 = d6; k4 !== null; ) {
              if (k4.key === l4) {
                switch (k4.tag) {
                  case 7:
                    if (f4.type === ua) {
                      c4(a5, k4.sibling);
                      d6 = e5(k4, f4.props.children);
                      d6.return = a5;
                      a5 = d6;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f4.type) {
                      c4(a5, k4.sibling);
                      d6 = e5(k4, f4.props);
                      d6.ref = Qg(a5, k4, f4);
                      d6.return = a5;
                      a5 = d6;
                      break a;
                    }
                }
                c4(a5, k4);
                break;
              } else
                b3(a5, k4);
              k4 = k4.sibling;
            }
            f4.type === ua ? (d6 = Xg(f4.props.children, a5.mode, h5, f4.key), d6.return = a5, a5 = d6) : (h5 = Vg(f4.type, f4.key, f4.props, null, a5.mode, h5), h5.ref = Qg(a5, d6, f4), h5.return = a5, a5 = h5);
          }
          return g2(a5);
        case ta:
          a: {
            for (k4 = f4.key; d6 !== null; ) {
              if (d6.key === k4)
                if (d6.tag === 4 && d6.stateNode.containerInfo === f4.containerInfo && d6.stateNode.implementation === f4.implementation) {
                  c4(a5, d6.sibling);
                  d6 = e5(d6, f4.children || []);
                  d6.return = a5;
                  a5 = d6;
                  break a;
                } else {
                  c4(a5, d6);
                  break;
                }
              else
                b3(a5, d6);
              d6 = d6.sibling;
            }
            d6 = Wg(f4, a5.mode, h5);
            d6.return = a5;
            a5 = d6;
          }
          return g2(a5);
      }
    if (typeof f4 === "string" || typeof f4 === "number")
      return f4 = "" + f4, d6 !== null && d6.tag === 6 ? (c4(a5, d6.sibling), d6 = e5(d6, f4), d6.return = a5, a5 = d6) : (c4(a5, d6), d6 = Ug(f4, a5.mode, h5), d6.return = a5, a5 = d6), g2(a5);
    if (Pg(f4))
      return x4(a5, d6, f4, h5);
    if (La(f4))
      return w4(a5, d6, f4, h5);
    l4 && Rg(a5, f4);
    if (typeof f4 === "undefined" && !k4)
      switch (a5.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a5.type) || "Component"));
      }
    return c4(a5, d6);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a4) {
  if (a4 === $g)
    throw Error(y(174));
  return a4;
}
function eh(a4, b3) {
  I(ch, b3);
  I(bh, a4);
  I(ah, $g);
  a4 = b3.nodeType;
  switch (a4) {
    case 9:
    case 11:
      b3 = (b3 = b3.documentElement) ? b3.namespaceURI : mb(null, "");
      break;
    default:
      a4 = a4 === 8 ? b3.parentNode : b3, b3 = a4.namespaceURI || null, a4 = a4.tagName, b3 = mb(b3, a4);
  }
  H(ah);
  I(ah, b3);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a4) {
  dh(ch.current);
  var b3 = dh(ah.current);
  var c4 = mb(b3, a4.type);
  b3 !== c4 && (I(bh, a4), I(ah, c4));
}
function hh(a4) {
  bh.current === a4 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a4) {
  for (var b3 = a4; b3 !== null; ) {
    if (b3.tag === 13) {
      var c4 = b3.memoizedState;
      if (c4 !== null && (c4 = c4.dehydrated, c4 === null || c4.data === "$?" || c4.data === "$!"))
        return b3;
    } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
      if ((b3.flags & 64) !== 0)
        return b3;
    } else if (b3.child !== null) {
      b3.child.return = b3;
      b3 = b3.child;
      continue;
    }
    if (b3 === a4)
      break;
    for (; b3.sibling === null; ) {
      if (b3.return === null || b3.return === a4)
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
function mh(a4, b3) {
  var c4 = nh(5, null, null, 0);
  c4.elementType = "DELETED";
  c4.type = "DELETED";
  c4.stateNode = b3;
  c4.return = a4;
  c4.flags = 8;
  a4.lastEffect !== null ? (a4.lastEffect.nextEffect = c4, a4.lastEffect = c4) : a4.firstEffect = a4.lastEffect = c4;
}
function oh(a4, b3) {
  switch (a4.tag) {
    case 5:
      var c4 = a4.type;
      b3 = b3.nodeType !== 1 || c4.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
      return b3 !== null ? (a4.stateNode = b3, true) : false;
    case 6:
      return b3 = a4.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a4.stateNode = b3, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a4) {
  if (lh) {
    var b3 = kh;
    if (b3) {
      var c4 = b3;
      if (!oh(a4, b3)) {
        b3 = rf(c4.nextSibling);
        if (!b3 || !oh(a4, b3)) {
          a4.flags = a4.flags & -1025 | 2;
          lh = false;
          jh = a4;
          return;
        }
        mh(jh, c4);
      }
      jh = a4;
      kh = rf(b3.firstChild);
    } else
      a4.flags = a4.flags & -1025 | 2, lh = false, jh = a4;
  }
}
function qh(a4) {
  for (a4 = a4.return; a4 !== null && a4.tag !== 5 && a4.tag !== 3 && a4.tag !== 13; )
    a4 = a4.return;
  jh = a4;
}
function rh(a4) {
  if (a4 !== jh)
    return false;
  if (!lh)
    return qh(a4), lh = true, false;
  var b3 = a4.type;
  if (a4.tag !== 5 || b3 !== "head" && b3 !== "body" && !nf(b3, a4.memoizedProps))
    for (b3 = kh; b3; )
      mh(a4, b3), b3 = rf(b3.nextSibling);
  qh(a4);
  if (a4.tag === 13) {
    a4 = a4.memoizedState;
    a4 = a4 !== null ? a4.dehydrated : null;
    if (!a4)
      throw Error(y(317));
    a: {
      a4 = a4.nextSibling;
      for (b3 = 0; a4; ) {
        if (a4.nodeType === 8) {
          var c4 = a4.data;
          if (c4 === "/$") {
            if (b3 === 0) {
              kh = rf(a4.nextSibling);
              break a;
            }
            b3--;
          } else
            c4 !== "$" && c4 !== "$!" && c4 !== "$?" || b3++;
        }
        a4 = a4.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a4.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a4 = 0; a4 < th.length; a4++)
    th[a4]._workInProgressVersionPrimary = null;
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
function Bh(a4, b3) {
  if (b3 === null)
    return false;
  for (var c4 = 0; c4 < b3.length && c4 < a4.length; c4++)
    if (!He(a4[c4], b3[c4]))
      return false;
  return true;
}
function Ch(a4, b3, c4, d5, e5, f3) {
  xh = f3;
  R = b3;
  b3.memoizedState = null;
  b3.updateQueue = null;
  b3.lanes = 0;
  vh.current = a4 === null || a4.memoizedState === null ? Dh : Eh;
  a4 = c4(d5, e5);
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
      a4 = c4(d5, e5);
    } while (zh);
  }
  vh.current = Gh;
  b3 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b3)
    throw Error(y(300));
  return a4;
}
function Hh() {
  var a4 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a4 : T = T.next = a4;
  return T;
}
function Ih() {
  if (S === null) {
    var a4 = R.alternate;
    a4 = a4 !== null ? a4.memoizedState : null;
  } else
    a4 = S.next;
  var b3 = T === null ? R.memoizedState : T.next;
  if (b3 !== null)
    T = b3, S = a4;
  else {
    if (a4 === null)
      throw Error(y(310));
    S = a4;
    a4 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a4 : T = T.next = a4;
  }
  return T;
}
function Jh(a4, b3) {
  return typeof b3 === "function" ? b3(a4) : b3;
}
function Kh(a4) {
  var b3 = Ih(), c4 = b3.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a4;
  var d5 = S, e5 = d5.baseQueue, f3 = c4.pending;
  if (f3 !== null) {
    if (e5 !== null) {
      var g2 = e5.next;
      e5.next = f3.next;
      f3.next = g2;
    }
    d5.baseQueue = e5 = f3;
    c4.pending = null;
  }
  if (e5 !== null) {
    e5 = e5.next;
    d5 = d5.baseState;
    var h4 = g2 = f3 = null, k3 = e5;
    do {
      var l3 = k3.lane;
      if ((xh & l3) === l3)
        h4 !== null && (h4 = h4.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d5 = k3.eagerReducer === a4 ? k3.eagerState : a4(d5, k3.action);
      else {
        var n4 = {
          lane: l3,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h4 === null ? (g2 = h4 = n4, f3 = d5) : h4 = h4.next = n4;
        R.lanes |= l3;
        Dg |= l3;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e5);
    h4 === null ? f3 = d5 : h4.next = g2;
    He(d5, b3.memoizedState) || (ug = true);
    b3.memoizedState = d5;
    b3.baseState = f3;
    b3.baseQueue = h4;
    c4.lastRenderedState = d5;
  }
  return [b3.memoizedState, c4.dispatch];
}
function Lh(a4) {
  var b3 = Ih(), c4 = b3.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a4;
  var d5 = c4.dispatch, e5 = c4.pending, f3 = b3.memoizedState;
  if (e5 !== null) {
    c4.pending = null;
    var g2 = e5 = e5.next;
    do
      f3 = a4(f3, g2.action), g2 = g2.next;
    while (g2 !== e5);
    He(f3, b3.memoizedState) || (ug = true);
    b3.memoizedState = f3;
    b3.baseQueue === null && (b3.baseState = f3);
    c4.lastRenderedState = f3;
  }
  return [f3, d5];
}
function Mh(a4, b3, c4) {
  var d5 = b3._getVersion;
  d5 = d5(b3._source);
  var e5 = b3._workInProgressVersionPrimary;
  if (e5 !== null)
    a4 = e5 === d5;
  else if (a4 = a4.mutableReadLanes, a4 = (xh & a4) === a4)
    b3._workInProgressVersionPrimary = d5, th.push(b3);
  if (a4)
    return c4(b3._source);
  th.push(b3);
  throw Error(y(350));
}
function Nh(a4, b3, c4, d5) {
  var e5 = U;
  if (e5 === null)
    throw Error(y(349));
  var f3 = b3._getVersion, g2 = f3(b3._source), h4 = vh.current, k3 = h4.useState(function() {
    return Mh(e5, b3, c4);
  }), l3 = k3[1], n4 = k3[0];
  k3 = T;
  var A3 = a4.memoizedState, p3 = A3.refs, C2 = p3.getSnapshot, x4 = A3.source;
  A3 = A3.subscribe;
  var w4 = R;
  a4.memoizedState = {refs: p3, source: b3, subscribe: d5};
  h4.useEffect(function() {
    p3.getSnapshot = c4;
    p3.setSnapshot = l3;
    var a5 = f3(b3._source);
    if (!He(g2, a5)) {
      a5 = c4(b3._source);
      He(n4, a5) || (l3(a5), a5 = Ig(w4), e5.mutableReadLanes |= a5 & e5.pendingLanes);
      a5 = e5.mutableReadLanes;
      e5.entangledLanes |= a5;
      for (var d6 = e5.entanglements, h5 = a5; 0 < h5; ) {
        var k4 = 31 - Vc(h5), v3 = 1 << k4;
        d6[k4] |= a5;
        h5 &= ~v3;
      }
    }
  }, [c4, b3, d5]);
  h4.useEffect(function() {
    return d5(b3._source, function() {
      var a5 = p3.getSnapshot, c5 = p3.setSnapshot;
      try {
        c5(a5(b3._source));
        var d6 = Ig(w4);
        e5.mutableReadLanes |= d6 & e5.pendingLanes;
      } catch (q2) {
        c5(function() {
          throw q2;
        });
      }
    });
  }, [b3, d5]);
  He(C2, c4) && He(x4, b3) && He(A3, d5) || (a4 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n4}, a4.dispatch = l3 = Oh.bind(null, R, a4), k3.queue = a4, k3.baseQueue = null, n4 = Mh(e5, b3, c4), k3.memoizedState = k3.baseState = n4);
  return n4;
}
function Ph(a4, b3, c4) {
  var d5 = Ih();
  return Nh(d5, a4, b3, c4);
}
function Qh(a4) {
  var b3 = Hh();
  typeof a4 === "function" && (a4 = a4());
  b3.memoizedState = b3.baseState = a4;
  a4 = b3.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a4};
  a4 = a4.dispatch = Oh.bind(null, R, a4);
  return [b3.memoizedState, a4];
}
function Rh(a4, b3, c4, d5) {
  a4 = {tag: a4, create: b3, destroy: c4, deps: d5, next: null};
  b3 = R.updateQueue;
  b3 === null ? (b3 = {lastEffect: null}, R.updateQueue = b3, b3.lastEffect = a4.next = a4) : (c4 = b3.lastEffect, c4 === null ? b3.lastEffect = a4.next = a4 : (d5 = c4.next, c4.next = a4, a4.next = d5, b3.lastEffect = a4));
  return a4;
}
function Sh(a4) {
  var b3 = Hh();
  a4 = {current: a4};
  return b3.memoizedState = a4;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a4, b3, c4, d5) {
  var e5 = Hh();
  R.flags |= a4;
  e5.memoizedState = Rh(1 | b3, c4, void 0, d5 === void 0 ? null : d5);
}
function Vh(a4, b3, c4, d5) {
  var e5 = Ih();
  d5 = d5 === void 0 ? null : d5;
  var f3 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f3 = g2.destroy;
    if (d5 !== null && Bh(d5, g2.deps)) {
      Rh(b3, c4, f3, d5);
      return;
    }
  }
  R.flags |= a4;
  e5.memoizedState = Rh(1 | b3, c4, f3, d5);
}
function Wh(a4, b3) {
  return Uh(516, 4, a4, b3);
}
function Xh(a4, b3) {
  return Vh(516, 4, a4, b3);
}
function Yh(a4, b3) {
  return Vh(4, 2, a4, b3);
}
function Zh(a4, b3) {
  if (typeof b3 === "function")
    return a4 = a4(), b3(a4), function() {
      b3(null);
    };
  if (b3 !== null && b3 !== void 0)
    return a4 = a4(), b3.current = a4, function() {
      b3.current = null;
    };
}
function $h(a4, b3, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a4]) : null;
  return Vh(4, 2, Zh.bind(null, b3, a4), c4);
}
function ai() {
}
function bi(a4, b3) {
  var c4 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d5 = c4.memoizedState;
  if (d5 !== null && b3 !== null && Bh(b3, d5[1]))
    return d5[0];
  c4.memoizedState = [a4, b3];
  return a4;
}
function ci(a4, b3) {
  var c4 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d5 = c4.memoizedState;
  if (d5 !== null && b3 !== null && Bh(b3, d5[1]))
    return d5[0];
  a4 = a4();
  c4.memoizedState = [a4, b3];
  return a4;
}
function di(a4, b3) {
  var c4 = eg();
  gg(98 > c4 ? 98 : c4, function() {
    a4(true);
  });
  gg(97 < c4 ? 97 : c4, function() {
    var c5 = wh.transition;
    wh.transition = 1;
    try {
      a4(false), b3();
    } finally {
      wh.transition = c5;
    }
  });
}
function Oh(a4, b3, c4) {
  var d5 = Hg(), e5 = Ig(a4), f3 = {lane: e5, action: c4, eagerReducer: null, eagerState: null, next: null}, g2 = b3.pending;
  g2 === null ? f3.next = f3 : (f3.next = g2.next, g2.next = f3);
  b3.pending = f3;
  g2 = a4.alternate;
  if (a4 === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a4.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b3.lastRenderedReducer, g2 !== null))
      try {
        var h4 = b3.lastRenderedState, k3 = g2(h4, c4);
        f3.eagerReducer = g2;
        f3.eagerState = k3;
        if (He(k3, h4))
          return;
      } catch (l3) {
      } finally {
      }
    Jg(a4, e5, d5);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a4, b3) {
  Hh().memoizedState = [a4, b3 === void 0 ? null : b3];
  return a4;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a4, b3, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a4]) : null;
  return Uh(4, 2, Zh.bind(null, b3, a4), c4);
}, useLayoutEffect: function(a4, b3) {
  return Uh(4, 2, a4, b3);
}, useMemo: function(a4, b3) {
  var c4 = Hh();
  b3 = b3 === void 0 ? null : b3;
  a4 = a4();
  c4.memoizedState = [a4, b3];
  return a4;
}, useReducer: function(a4, b3, c4) {
  var d5 = Hh();
  b3 = c4 !== void 0 ? c4(b3) : b3;
  d5.memoizedState = d5.baseState = b3;
  a4 = d5.queue = {pending: null, dispatch: null, lastRenderedReducer: a4, lastRenderedState: b3};
  a4 = a4.dispatch = Oh.bind(null, R, a4);
  return [d5.memoizedState, a4];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a4) {
  var b3 = Qh(a4), c4 = b3[0], d5 = b3[1];
  Wh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d5(a4);
    } finally {
      wh.transition = b4;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Qh(false), b3 = a4[0];
  a4 = di.bind(null, a4[1]);
  Sh(a4);
  return [a4, b3];
}, useMutableSource: function(a4, b3, c4) {
  var d5 = Hh();
  d5.memoizedState = {refs: {getSnapshot: b3, setSnapshot: null}, source: a4, subscribe: c4};
  return Nh(d5, a4, b3, c4);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a4 = false, b3 = uf(function() {
      a4 || (a4 = true, c4("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c4 = Qh(b3)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c4("r:" + (tf++).toString(36));
    }, void 0, null));
    return b3;
  }
  b3 = "r:" + (tf++).toString(36);
  Qh(b3);
  return b3;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a4) {
  var b3 = Kh(Jh), c4 = b3[0], d5 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d5(a4);
    } finally {
      wh.transition = b4;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Kh(Jh)[0];
  return [
    Th().current,
    a4
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a4) {
  var b3 = Lh(Jh), c4 = b3[0], d5 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d5(a4);
    } finally {
      wh.transition = b4;
    }
  }, [a4]);
  return c4;
}, useTransition: function() {
  var a4 = Lh(Jh)[0];
  return [
    Th().current,
    a4
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a4, b3, c4, d5) {
  b3.child = a4 === null ? Zg(b3, null, c4, d5) : Yg(b3, a4.child, c4, d5);
}
function gi(a4, b3, c4, d5, e5) {
  c4 = c4.render;
  var f3 = b3.ref;
  tg(b3, e5);
  d5 = Ch(a4, b3, c4, d5, f3, e5);
  if (a4 !== null && !ug)
    return b3.updateQueue = a4.updateQueue, b3.flags &= -517, a4.lanes &= ~e5, hi(a4, b3, e5);
  b3.flags |= 1;
  fi(a4, b3, d5, e5);
  return b3.child;
}
function ii(a4, b3, c4, d5, e5, f3) {
  if (a4 === null) {
    var g2 = c4.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c4.compare === null && c4.defaultProps === void 0)
      return b3.tag = 15, b3.type = g2, ki(a4, b3, g2, d5, e5, f3);
    a4 = Vg(c4.type, null, d5, b3, b3.mode, f3);
    a4.ref = b3.ref;
    a4.return = b3;
    return b3.child = a4;
  }
  g2 = a4.child;
  if ((e5 & f3) === 0 && (e5 = g2.memoizedProps, c4 = c4.compare, c4 = c4 !== null ? c4 : Je, c4(e5, d5) && a4.ref === b3.ref))
    return hi(a4, b3, f3);
  b3.flags |= 1;
  a4 = Tg(g2, d5);
  a4.ref = b3.ref;
  a4.return = b3;
  return b3.child = a4;
}
function ki(a4, b3, c4, d5, e5, f3) {
  if (a4 !== null && Je(a4.memoizedProps, d5) && a4.ref === b3.ref)
    if (ug = false, (f3 & e5) !== 0)
      (a4.flags & 16384) !== 0 && (ug = true);
    else
      return b3.lanes = a4.lanes, hi(a4, b3, f3);
  return li(a4, b3, c4, d5, f3);
}
function mi(a4, b3, c4) {
  var d5 = b3.pendingProps, e5 = d5.children, f3 = a4 !== null ? a4.memoizedState : null;
  if (d5.mode === "hidden" || d5.mode === "unstable-defer-without-hiding")
    if ((b3.mode & 4) === 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, c4);
    else if ((c4 & 1073741824) !== 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, f3 !== null ? f3.baseLanes : c4);
    else
      return a4 = f3 !== null ? f3.baseLanes | c4 : c4, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = {baseLanes: a4}, ni(b3, a4), null;
  else
    f3 !== null ? (d5 = f3.baseLanes | c4, b3.memoizedState = null) : d5 = c4, ni(b3, d5);
  fi(a4, b3, e5, c4);
  return b3.child;
}
function oi(a4, b3) {
  var c4 = b3.ref;
  if (a4 === null && c4 !== null || a4 !== null && a4.ref !== c4)
    b3.flags |= 128;
}
function li(a4, b3, c4, d5, e5) {
  var f3 = Ff(c4) ? Df : M.current;
  f3 = Ef(b3, f3);
  tg(b3, e5);
  c4 = Ch(a4, b3, c4, d5, f3, e5);
  if (a4 !== null && !ug)
    return b3.updateQueue = a4.updateQueue, b3.flags &= -517, a4.lanes &= ~e5, hi(a4, b3, e5);
  b3.flags |= 1;
  fi(a4, b3, c4, e5);
  return b3.child;
}
function pi(a4, b3, c4, d5, e5) {
  if (Ff(c4)) {
    var f3 = true;
    Jf(b3);
  } else
    f3 = false;
  tg(b3, e5);
  if (b3.stateNode === null)
    a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2), Mg(b3, c4, d5), Og(b3, c4, d5, e5), d5 = true;
  else if (a4 === null) {
    var g2 = b3.stateNode, h4 = b3.memoizedProps;
    g2.props = h4;
    var k3 = g2.context, l3 = c4.contextType;
    typeof l3 === "object" && l3 !== null ? l3 = vg(l3) : (l3 = Ff(c4) ? Df : M.current, l3 = Ef(b3, l3));
    var n4 = c4.getDerivedStateFromProps, A3 = typeof n4 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A3 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h4 !== d5 || k3 !== l3) && Ng(b3, g2, d5, l3);
    wg = false;
    var p3 = b3.memoizedState;
    g2.state = p3;
    Cg(b3, d5, g2, e5);
    k3 = b3.memoizedState;
    h4 !== d5 || p3 !== k3 || N.current || wg ? (typeof n4 === "function" && (Gg(b3, c4, n4, d5), k3 = b3.memoizedState), (h4 = wg || Lg(b3, c4, h4, d5, p3, k3, l3)) ? (A3 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b3.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b3.flags |= 4), b3.memoizedProps = d5, b3.memoizedState = k3), g2.props = d5, g2.state = k3, g2.context = l3, d5 = h4) : (typeof g2.componentDidMount === "function" && (b3.flags |= 4), d5 = false);
  } else {
    g2 = b3.stateNode;
    yg(a4, b3);
    h4 = b3.memoizedProps;
    l3 = b3.type === b3.elementType ? h4 : lg(b3.type, h4);
    g2.props = l3;
    A3 = b3.pendingProps;
    p3 = g2.context;
    k3 = c4.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c4) ? Df : M.current, k3 = Ef(b3, k3));
    var C2 = c4.getDerivedStateFromProps;
    (n4 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h4 !== A3 || p3 !== k3) && Ng(b3, g2, d5, k3);
    wg = false;
    p3 = b3.memoizedState;
    g2.state = p3;
    Cg(b3, d5, g2, e5);
    var x4 = b3.memoizedState;
    h4 !== A3 || p3 !== x4 || N.current || wg ? (typeof C2 === "function" && (Gg(b3, c4, C2, d5), x4 = b3.memoizedState), (l3 = wg || Lg(b3, c4, l3, d5, p3, x4, k3)) ? (n4 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d5, x4, k3), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d5, x4, k3)), typeof g2.componentDidUpdate === "function" && (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b3.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h4 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h4 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 256), b3.memoizedProps = d5, b3.memoizedState = x4), g2.props = d5, g2.state = x4, g2.context = k3, d5 = l3) : (typeof g2.componentDidUpdate !== "function" || h4 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h4 === a4.memoizedProps && p3 === a4.memoizedState || (b3.flags |= 256), d5 = false);
  }
  return qi(a4, b3, c4, d5, f3, e5);
}
function qi(a4, b3, c4, d5, e5, f3) {
  oi(a4, b3);
  var g2 = (b3.flags & 64) !== 0;
  if (!d5 && !g2)
    return e5 && Kf(b3, c4, false), hi(a4, b3, f3);
  d5 = b3.stateNode;
  ei.current = b3;
  var h4 = g2 && typeof c4.getDerivedStateFromError !== "function" ? null : d5.render();
  b3.flags |= 1;
  a4 !== null && g2 ? (b3.child = Yg(b3, a4.child, null, f3), b3.child = Yg(b3, null, h4, f3)) : fi(a4, b3, h4, f3);
  b3.memoizedState = d5.state;
  e5 && Kf(b3, c4, true);
  return b3.child;
}
function ri(a4) {
  var b3 = a4.stateNode;
  b3.pendingContext ? Hf(a4, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && Hf(a4, b3.context, false);
  eh(a4, b3.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a4, b3, c4) {
  var d5 = b3.pendingProps, e5 = P.current, f3 = false, g2;
  (g2 = (b3.flags & 64) !== 0) || (g2 = a4 !== null && a4.memoizedState === null ? false : (e5 & 2) !== 0);
  g2 ? (f3 = true, b3.flags &= -65) : a4 !== null && a4.memoizedState === null || d5.fallback === void 0 || d5.unstable_avoidThisFallback === true || (e5 |= 1);
  I(P, e5 & 1);
  if (a4 === null) {
    d5.fallback !== void 0 && ph(b3);
    a4 = d5.children;
    e5 = d5.fallback;
    if (f3)
      return a4 = ui(b3, a4, e5, c4), b3.child.memoizedState = {baseLanes: c4}, b3.memoizedState = si, a4;
    if (typeof d5.unstable_expectedLoadTime === "number")
      return a4 = ui(b3, a4, e5, c4), b3.child.memoizedState = {baseLanes: c4}, b3.memoizedState = si, b3.lanes = 33554432, a4;
    c4 = vi({mode: "visible", children: a4}, b3.mode, c4, null);
    c4.return = b3;
    return b3.child = c4;
  }
  if (a4.memoizedState !== null) {
    if (f3)
      return d5 = wi(a4, b3, d5.children, d5.fallback, c4), f3 = b3.child, e5 = a4.child.memoizedState, f3.memoizedState = e5 === null ? {baseLanes: c4} : {baseLanes: e5.baseLanes | c4}, f3.childLanes = a4.childLanes & ~c4, b3.memoizedState = si, d5;
    c4 = xi(a4, b3, d5.children, c4);
    b3.memoizedState = null;
    return c4;
  }
  if (f3)
    return d5 = wi(a4, b3, d5.children, d5.fallback, c4), f3 = b3.child, e5 = a4.child.memoizedState, f3.memoizedState = e5 === null ? {baseLanes: c4} : {baseLanes: e5.baseLanes | c4}, f3.childLanes = a4.childLanes & ~c4, b3.memoizedState = si, d5;
  c4 = xi(a4, b3, d5.children, c4);
  b3.memoizedState = null;
  return c4;
}
function ui(a4, b3, c4, d5) {
  var e5 = a4.mode, f3 = a4.child;
  b3 = {mode: "hidden", children: b3};
  (e5 & 2) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = b3) : f3 = vi(b3, e5, 0, null);
  c4 = Xg(c4, e5, d5, null);
  f3.return = a4;
  c4.return = a4;
  f3.sibling = c4;
  a4.child = f3;
  return c4;
}
function xi(a4, b3, c4, d5) {
  var e5 = a4.child;
  a4 = e5.sibling;
  c4 = Tg(e5, {mode: "visible", children: c4});
  (b3.mode & 2) === 0 && (c4.lanes = d5);
  c4.return = b3;
  c4.sibling = null;
  a4 !== null && (a4.nextEffect = null, a4.flags = 8, b3.firstEffect = b3.lastEffect = a4);
  return b3.child = c4;
}
function wi(a4, b3, c4, d5, e5) {
  var f3 = b3.mode, g2 = a4.child;
  a4 = g2.sibling;
  var h4 = {mode: "hidden", children: c4};
  (f3 & 2) === 0 && b3.child !== g2 ? (c4 = b3.child, c4.childLanes = 0, c4.pendingProps = h4, g2 = c4.lastEffect, g2 !== null ? (b3.firstEffect = c4.firstEffect, b3.lastEffect = g2, g2.nextEffect = null) : b3.firstEffect = b3.lastEffect = null) : c4 = Tg(g2, h4);
  a4 !== null ? d5 = Tg(a4, d5) : (d5 = Xg(d5, f3, e5, null), d5.flags |= 2);
  d5.return = b3;
  c4.return = b3;
  c4.sibling = d5;
  b3.child = c4;
  return d5;
}
function yi(a4, b3) {
  a4.lanes |= b3;
  var c4 = a4.alternate;
  c4 !== null && (c4.lanes |= b3);
  sg(a4.return, b3);
}
function zi(a4, b3, c4, d5, e5, f3) {
  var g2 = a4.memoizedState;
  g2 === null ? a4.memoizedState = {isBackwards: b3, rendering: null, renderingStartTime: 0, last: d5, tail: c4, tailMode: e5, lastEffect: f3} : (g2.isBackwards = b3, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d5, g2.tail = c4, g2.tailMode = e5, g2.lastEffect = f3);
}
function Ai(a4, b3, c4) {
  var d5 = b3.pendingProps, e5 = d5.revealOrder, f3 = d5.tail;
  fi(a4, b3, d5.children, c4);
  d5 = P.current;
  if ((d5 & 2) !== 0)
    d5 = d5 & 1 | 2, b3.flags |= 64;
  else {
    if (a4 !== null && (a4.flags & 64) !== 0)
      a:
        for (a4 = b3.child; a4 !== null; ) {
          if (a4.tag === 13)
            a4.memoizedState !== null && yi(a4, c4);
          else if (a4.tag === 19)
            yi(a4, c4);
          else if (a4.child !== null) {
            a4.child.return = a4;
            a4 = a4.child;
            continue;
          }
          if (a4 === b3)
            break a;
          for (; a4.sibling === null; ) {
            if (a4.return === null || a4.return === b3)
              break a;
            a4 = a4.return;
          }
          a4.sibling.return = a4.return;
          a4 = a4.sibling;
        }
    d5 &= 1;
  }
  I(P, d5);
  if ((b3.mode & 2) === 0)
    b3.memoizedState = null;
  else
    switch (e5) {
      case "forwards":
        c4 = b3.child;
        for (e5 = null; c4 !== null; )
          a4 = c4.alternate, a4 !== null && ih(a4) === null && (e5 = c4), c4 = c4.sibling;
        c4 = e5;
        c4 === null ? (e5 = b3.child, b3.child = null) : (e5 = c4.sibling, c4.sibling = null);
        zi(b3, false, e5, c4, f3, b3.lastEffect);
        break;
      case "backwards":
        c4 = null;
        e5 = b3.child;
        for (b3.child = null; e5 !== null; ) {
          a4 = e5.alternate;
          if (a4 !== null && ih(a4) === null) {
            b3.child = e5;
            break;
          }
          a4 = e5.sibling;
          e5.sibling = c4;
          c4 = e5;
          e5 = a4;
        }
        zi(b3, true, c4, null, f3, b3.lastEffect);
        break;
      case "together":
        zi(b3, false, null, null, void 0, b3.lastEffect);
        break;
      default:
        b3.memoizedState = null;
    }
  return b3.child;
}
function hi(a4, b3, c4) {
  a4 !== null && (b3.dependencies = a4.dependencies);
  Dg |= b3.lanes;
  if ((c4 & b3.childLanes) !== 0) {
    if (a4 !== null && b3.child !== a4.child)
      throw Error(y(153));
    if (b3.child !== null) {
      a4 = b3.child;
      c4 = Tg(a4, a4.pendingProps);
      b3.child = c4;
      for (c4.return = b3; a4.sibling !== null; )
        a4 = a4.sibling, c4 = c4.sibling = Tg(a4, a4.pendingProps), c4.return = b3;
      c4.sibling = null;
    }
    return b3.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a4, b3) {
  for (var c4 = b3.child; c4 !== null; ) {
    if (c4.tag === 5 || c4.tag === 6)
      a4.appendChild(c4.stateNode);
    else if (c4.tag !== 4 && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b3)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b3)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
};
Ci = function() {
};
Di = function(a4, b3, c4, d5) {
  var e5 = a4.memoizedProps;
  if (e5 !== d5) {
    a4 = b3.stateNode;
    dh(ah.current);
    var f3 = null;
    switch (c4) {
      case "input":
        e5 = Ya(a4, e5);
        d5 = Ya(a4, d5);
        f3 = [];
        break;
      case "option":
        e5 = eb(a4, e5);
        d5 = eb(a4, d5);
        f3 = [];
        break;
      case "select":
        e5 = objectAssign({}, e5, {value: void 0});
        d5 = objectAssign({}, d5, {value: void 0});
        f3 = [];
        break;
      case "textarea":
        e5 = gb(a4, e5);
        d5 = gb(a4, d5);
        f3 = [];
        break;
      default:
        typeof e5.onClick !== "function" && typeof d5.onClick === "function" && (a4.onclick = jf);
    }
    vb(c4, d5);
    var g2;
    c4 = null;
    for (l3 in e5)
      if (!d5.hasOwnProperty(l3) && e5.hasOwnProperty(l3) && e5[l3] != null)
        if (l3 === "style") {
          var h4 = e5[l3];
          for (g2 in h4)
            h4.hasOwnProperty(g2) && (c4 || (c4 = {}), c4[g2] = "");
        } else
          l3 !== "dangerouslySetInnerHTML" && l3 !== "children" && l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && l3 !== "autoFocus" && (ca.hasOwnProperty(l3) ? f3 || (f3 = []) : (f3 = f3 || []).push(l3, null));
    for (l3 in d5) {
      var k3 = d5[l3];
      h4 = e5 != null ? e5[l3] : void 0;
      if (d5.hasOwnProperty(l3) && k3 !== h4 && (k3 != null || h4 != null))
        if (l3 === "style")
          if (h4) {
            for (g2 in h4)
              !h4.hasOwnProperty(g2) || k3 && k3.hasOwnProperty(g2) || (c4 || (c4 = {}), c4[g2] = "");
            for (g2 in k3)
              k3.hasOwnProperty(g2) && h4[g2] !== k3[g2] && (c4 || (c4 = {}), c4[g2] = k3[g2]);
          } else
            c4 || (f3 || (f3 = []), f3.push(l3, c4)), c4 = k3;
        else
          l3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h4 = h4 ? h4.__html : void 0, k3 != null && h4 !== k3 && (f3 = f3 || []).push(l3, k3)) : l3 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f3 = f3 || []).push(l3, "" + k3) : l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l3) ? (k3 != null && l3 === "onScroll" && G("scroll", a4), f3 || h4 === k3 || (f3 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f3 = f3 || []).push(l3, k3));
    }
    c4 && (f3 = f3 || []).push("style", c4);
    var l3 = f3;
    if (b3.updateQueue = l3)
      b3.flags |= 4;
  }
};
Ei = function(a4, b3, c4, d5) {
  c4 !== d5 && (b3.flags |= 4);
};
function Fi(a4, b3) {
  if (!lh)
    switch (a4.tailMode) {
      case "hidden":
        b3 = a4.tail;
        for (var c4 = null; b3 !== null; )
          b3.alternate !== null && (c4 = b3), b3 = b3.sibling;
        c4 === null ? a4.tail = null : c4.sibling = null;
        break;
      case "collapsed":
        c4 = a4.tail;
        for (var d5 = null; c4 !== null; )
          c4.alternate !== null && (d5 = c4), c4 = c4.sibling;
        d5 === null ? b3 || a4.tail === null ? a4.tail = null : a4.tail.sibling = null : d5.sibling = null;
    }
}
function Gi(a4, b3, c4) {
  var d5 = b3.pendingProps;
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
      d5 = b3.stateNode;
      d5.pendingContext && (d5.context = d5.pendingContext, d5.pendingContext = null);
      if (a4 === null || a4.child === null)
        rh(b3) ? b3.flags |= 4 : d5.hydrate || (b3.flags |= 256);
      Ci(b3);
      return null;
    case 5:
      hh(b3);
      var e5 = dh(ch.current);
      c4 = b3.type;
      if (a4 !== null && b3.stateNode != null)
        Di(a4, b3, c4, d5, e5), a4.ref !== b3.ref && (b3.flags |= 128);
      else {
        if (!d5) {
          if (b3.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a4 = dh(ah.current);
        if (rh(b3)) {
          d5 = b3.stateNode;
          c4 = b3.type;
          var f3 = b3.memoizedProps;
          d5[wf] = b3;
          d5[xf] = f3;
          switch (c4) {
            case "dialog":
              G("cancel", d5);
              G("close", d5);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d5);
              break;
            case "video":
            case "audio":
              for (a4 = 0; a4 < Xe.length; a4++)
                G(Xe[a4], d5);
              break;
            case "source":
              G("error", d5);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d5);
              G("load", d5);
              break;
            case "details":
              G("toggle", d5);
              break;
            case "input":
              Za(d5, f3);
              G("invalid", d5);
              break;
            case "select":
              d5._wrapperState = {wasMultiple: !!f3.multiple};
              G("invalid", d5);
              break;
            case "textarea":
              hb(d5, f3), G("invalid", d5);
          }
          vb(c4, f3);
          a4 = null;
          for (var g2 in f3)
            f3.hasOwnProperty(g2) && (e5 = f3[g2], g2 === "children" ? typeof e5 === "string" ? d5.textContent !== e5 && (a4 = ["children", e5]) : typeof e5 === "number" && d5.textContent !== "" + e5 && (a4 = ["children", "" + e5]) : ca.hasOwnProperty(g2) && e5 != null && g2 === "onScroll" && G("scroll", d5));
          switch (c4) {
            case "input":
              Va(d5);
              cb(d5, f3, true);
              break;
            case "textarea":
              Va(d5);
              jb(d5);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f3.onClick === "function" && (d5.onclick = jf);
          }
          d5 = a4;
          b3.updateQueue = d5;
          d5 !== null && (b3.flags |= 4);
        } else {
          g2 = e5.nodeType === 9 ? e5 : e5.ownerDocument;
          a4 === kb.html && (a4 = lb(c4));
          a4 === kb.html ? c4 === "script" ? (a4 = g2.createElement("div"), a4.innerHTML = "<script></script>", a4 = a4.removeChild(a4.firstChild)) : typeof d5.is === "string" ? a4 = g2.createElement(c4, {is: d5.is}) : (a4 = g2.createElement(c4), c4 === "select" && (g2 = a4, d5.multiple ? g2.multiple = true : d5.size && (g2.size = d5.size))) : a4 = g2.createElementNS(a4, c4);
          a4[wf] = b3;
          a4[xf] = d5;
          Bi(a4, b3, false, false);
          b3.stateNode = a4;
          g2 = wb(c4, d5);
          switch (c4) {
            case "dialog":
              G("cancel", a4);
              G("close", a4);
              e5 = d5;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a4);
              e5 = d5;
              break;
            case "video":
            case "audio":
              for (e5 = 0; e5 < Xe.length; e5++)
                G(Xe[e5], a4);
              e5 = d5;
              break;
            case "source":
              G("error", a4);
              e5 = d5;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a4);
              G("load", a4);
              e5 = d5;
              break;
            case "details":
              G("toggle", a4);
              e5 = d5;
              break;
            case "input":
              Za(a4, d5);
              e5 = Ya(a4, d5);
              G("invalid", a4);
              break;
            case "option":
              e5 = eb(a4, d5);
              break;
            case "select":
              a4._wrapperState = {wasMultiple: !!d5.multiple};
              e5 = objectAssign({}, d5, {value: void 0});
              G("invalid", a4);
              break;
            case "textarea":
              hb(a4, d5);
              e5 = gb(a4, d5);
              G("invalid", a4);
              break;
            default:
              e5 = d5;
          }
          vb(c4, e5);
          var h4 = e5;
          for (f3 in h4)
            if (h4.hasOwnProperty(f3)) {
              var k3 = h4[f3];
              f3 === "style" ? tb(a4, k3) : f3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a4, k3)) : f3 === "children" ? typeof k3 === "string" ? (c4 !== "textarea" || k3 !== "") && pb(a4, k3) : typeof k3 === "number" && pb(a4, "" + k3) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ca.hasOwnProperty(f3) ? k3 != null && f3 === "onScroll" && G("scroll", a4) : k3 != null && qa(a4, f3, k3, g2));
            }
          switch (c4) {
            case "input":
              Va(a4);
              cb(a4, d5, false);
              break;
            case "textarea":
              Va(a4);
              jb(a4);
              break;
            case "option":
              d5.value != null && a4.setAttribute("value", "" + Sa(d5.value));
              break;
            case "select":
              a4.multiple = !!d5.multiple;
              f3 = d5.value;
              f3 != null ? fb(a4, !!d5.multiple, f3, false) : d5.defaultValue != null && fb(a4, !!d5.multiple, d5.defaultValue, true);
              break;
            default:
              typeof e5.onClick === "function" && (a4.onclick = jf);
          }
          mf(c4, d5) && (b3.flags |= 4);
        }
        b3.ref !== null && (b3.flags |= 128);
      }
      return null;
    case 6:
      if (a4 && b3.stateNode != null)
        Ei(a4, b3, a4.memoizedProps, d5);
      else {
        if (typeof d5 !== "string" && b3.stateNode === null)
          throw Error(y(166));
        c4 = dh(ch.current);
        dh(ah.current);
        rh(b3) ? (d5 = b3.stateNode, c4 = b3.memoizedProps, d5[wf] = b3, d5.nodeValue !== c4 && (b3.flags |= 4)) : (d5 = (c4.nodeType === 9 ? c4 : c4.ownerDocument).createTextNode(d5), d5[wf] = b3, b3.stateNode = d5);
      }
      return null;
    case 13:
      H(P);
      d5 = b3.memoizedState;
      if ((b3.flags & 64) !== 0)
        return b3.lanes = c4, b3;
      d5 = d5 !== null;
      c4 = false;
      a4 === null ? b3.memoizedProps.fallback !== void 0 && rh(b3) : c4 = a4.memoizedState !== null;
      if (d5 && !c4 && (b3.mode & 2) !== 0)
        if (a4 === null && b3.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d5 || c4)
        b3.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b3), a4 === null && cf(b3.stateNode.containerInfo), null;
    case 10:
      return rg(b3), null;
    case 17:
      return Ff(b3.type) && Gf(), null;
    case 19:
      H(P);
      d5 = b3.memoizedState;
      if (d5 === null)
        return null;
      f3 = (b3.flags & 64) !== 0;
      g2 = d5.rendering;
      if (g2 === null)
        if (f3)
          Fi(d5, false);
        else {
          if (V !== 0 || a4 !== null && (a4.flags & 64) !== 0)
            for (a4 = b3.child; a4 !== null; ) {
              g2 = ih(a4);
              if (g2 !== null) {
                b3.flags |= 64;
                Fi(d5, false);
                f3 = g2.updateQueue;
                f3 !== null && (b3.updateQueue = f3, b3.flags |= 4);
                d5.lastEffect === null && (b3.firstEffect = null);
                b3.lastEffect = d5.lastEffect;
                d5 = c4;
                for (c4 = b3.child; c4 !== null; )
                  f3 = c4, a4 = d5, f3.flags &= 2, f3.nextEffect = null, f3.firstEffect = null, f3.lastEffect = null, g2 = f3.alternate, g2 === null ? (f3.childLanes = 0, f3.lanes = a4, f3.child = null, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g2.childLanes, f3.lanes = g2.lanes, f3.child = g2.child, f3.memoizedProps = g2.memoizedProps, f3.memoizedState = g2.memoizedState, f3.updateQueue = g2.updateQueue, f3.type = g2.type, a4 = g2.dependencies, f3.dependencies = a4 === null ? null : {lanes: a4.lanes, firstContext: a4.firstContext}), c4 = c4.sibling;
                I(P, P.current & 1 | 2);
                return b3.child;
              }
              a4 = a4.sibling;
            }
          d5.tail !== null && O() > Ji && (b3.flags |= 64, f3 = true, Fi(d5, false), b3.lanes = 33554432);
        }
      else {
        if (!f3)
          if (a4 = ih(g2), a4 !== null) {
            if (b3.flags |= 64, f3 = true, c4 = a4.updateQueue, c4 !== null && (b3.updateQueue = c4, b3.flags |= 4), Fi(d5, true), d5.tail === null && d5.tailMode === "hidden" && !g2.alternate && !lh)
              return b3 = b3.lastEffect = d5.lastEffect, b3 !== null && (b3.nextEffect = null), null;
          } else
            2 * O() - d5.renderingStartTime > Ji && c4 !== 1073741824 && (b3.flags |= 64, f3 = true, Fi(d5, false), b3.lanes = 33554432);
        d5.isBackwards ? (g2.sibling = b3.child, b3.child = g2) : (c4 = d5.last, c4 !== null ? c4.sibling = g2 : b3.child = g2, d5.last = g2);
      }
      return d5.tail !== null ? (c4 = d5.tail, d5.rendering = c4, d5.tail = c4.sibling, d5.lastEffect = b3.lastEffect, d5.renderingStartTime = O(), c4.sibling = null, b3 = P.current, I(P, f3 ? b3 & 1 | 2 : b3 & 1), c4) : null;
    case 23:
    case 24:
      return Ki(), a4 !== null && a4.memoizedState !== null !== (b3.memoizedState !== null) && d5.mode !== "unstable-defer-without-hiding" && (b3.flags |= 4), null;
  }
  throw Error(y(156, b3.tag));
}
function Li(a4) {
  switch (a4.tag) {
    case 1:
      Ff(a4.type) && Gf();
      var b3 = a4.flags;
      return b3 & 4096 ? (a4.flags = b3 & -4097 | 64, a4) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b3 = a4.flags;
      if ((b3 & 64) !== 0)
        throw Error(y(285));
      a4.flags = b3 & -4097 | 64;
      return a4;
    case 5:
      return hh(a4), null;
    case 13:
      return H(P), b3 = a4.flags, b3 & 4096 ? (a4.flags = b3 & -4097 | 64, a4) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a4), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a4, b3) {
  try {
    var c4 = "", d5 = b3;
    do
      c4 += Qa(d5), d5 = d5.return;
    while (d5);
    var e5 = c4;
  } catch (f3) {
    e5 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
  }
  return {value: a4, source: b3, stack: e5};
}
function Ni(a4, b3) {
  try {
    console.error(b3.value);
  } catch (c4) {
    setTimeout(function() {
      throw c4;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a4, b3, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  c4.payload = {element: null};
  var d5 = b3.value;
  c4.callback = function() {
    Qi || (Qi = true, Ri = d5);
    Ni(a4, b3);
  };
  return c4;
}
function Si(a4, b3, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  var d5 = a4.type.getDerivedStateFromError;
  if (typeof d5 === "function") {
    var e5 = b3.value;
    c4.payload = function() {
      Ni(a4, b3);
      return d5(e5);
    };
  }
  var f3 = a4.stateNode;
  f3 !== null && typeof f3.componentDidCatch === "function" && (c4.callback = function() {
    typeof d5 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a4, b3));
    var c5 = b3.stack;
    this.componentDidCatch(b3.value, {componentStack: c5 !== null ? c5 : ""});
  });
  return c4;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a4) {
  var b3 = a4.ref;
  if (b3 !== null)
    if (typeof b3 === "function")
      try {
        b3(null);
      } catch (c4) {
        Wi(a4, c4);
      }
    else
      b3.current = null;
}
function Xi(a4, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b3.flags & 256 && a4 !== null) {
        var c4 = a4.memoizedProps, d5 = a4.memoizedState;
        a4 = b3.stateNode;
        b3 = a4.getSnapshotBeforeUpdate(b3.elementType === b3.type ? c4 : lg(b3.type, c4), d5);
        a4.__reactInternalSnapshotBeforeUpdate = b3;
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
function Yi(a4, b3, c4) {
  switch (c4.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b3 = c4.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a4 = b3 = b3.next;
        do {
          if ((a4.tag & 3) === 3) {
            var d5 = a4.create;
            a4.destroy = d5();
          }
          a4 = a4.next;
        } while (a4 !== b3);
      }
      b3 = c4.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a4 = b3 = b3.next;
        do {
          var e5 = a4;
          d5 = e5.next;
          e5 = e5.tag;
          (e5 & 4) !== 0 && (e5 & 1) !== 0 && (Zi(c4, a4), $i(c4, a4));
          a4 = d5;
        } while (a4 !== b3);
      }
      return;
    case 1:
      a4 = c4.stateNode;
      c4.flags & 4 && (b3 === null ? a4.componentDidMount() : (d5 = c4.elementType === c4.type ? b3.memoizedProps : lg(c4.type, b3.memoizedProps), a4.componentDidUpdate(d5, b3.memoizedState, a4.__reactInternalSnapshotBeforeUpdate)));
      b3 = c4.updateQueue;
      b3 !== null && Eg(c4, b3, a4);
      return;
    case 3:
      b3 = c4.updateQueue;
      if (b3 !== null) {
        a4 = null;
        if (c4.child !== null)
          switch (c4.child.tag) {
            case 5:
              a4 = c4.child.stateNode;
              break;
            case 1:
              a4 = c4.child.stateNode;
          }
        Eg(c4, b3, a4);
      }
      return;
    case 5:
      a4 = c4.stateNode;
      b3 === null && c4.flags & 4 && mf(c4.type, c4.memoizedProps) && a4.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c4.memoizedState === null && (c4 = c4.alternate, c4 !== null && (c4 = c4.memoizedState, c4 !== null && (c4 = c4.dehydrated, c4 !== null && Cc(c4))));
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
function aj(a4, b3) {
  for (var c4 = a4; ; ) {
    if (c4.tag === 5) {
      var d5 = c4.stateNode;
      if (b3)
        d5 = d5.style, typeof d5.setProperty === "function" ? d5.setProperty("display", "none", "important") : d5.display = "none";
      else {
        d5 = c4.stateNode;
        var e5 = c4.memoizedProps.style;
        e5 = e5 !== void 0 && e5 !== null && e5.hasOwnProperty("display") ? e5.display : null;
        d5.style.display = sb("display", e5);
      }
    } else if (c4.tag === 6)
      c4.stateNode.nodeValue = b3 ? "" : c4.memoizedProps;
    else if ((c4.tag !== 23 && c4.tag !== 24 || c4.memoizedState === null || c4 === a4) && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === a4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === a4)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function bj(a4, b3) {
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
      a4 = b3.updateQueue;
      if (a4 !== null && (a4 = a4.lastEffect, a4 !== null)) {
        var c4 = a4 = a4.next;
        do {
          var d5 = c4, e5 = d5.destroy;
          d5 = d5.tag;
          if (e5 !== void 0)
            if ((d5 & 4) !== 0)
              Zi(b3, c4);
            else {
              d5 = b3;
              try {
                e5();
              } catch (f3) {
                Wi(d5, f3);
              }
            }
          c4 = c4.next;
        } while (c4 !== a4);
      }
      break;
    case 1:
      Vi(b3);
      a4 = b3.stateNode;
      if (typeof a4.componentWillUnmount === "function")
        try {
          a4.props = b3.memoizedProps, a4.state = b3.memoizedState, a4.componentWillUnmount();
        } catch (f3) {
          Wi(b3, f3);
        }
      break;
    case 5:
      Vi(b3);
      break;
    case 4:
      cj(a4, b3);
  }
}
function dj(a4) {
  a4.alternate = null;
  a4.child = null;
  a4.dependencies = null;
  a4.firstEffect = null;
  a4.lastEffect = null;
  a4.memoizedProps = null;
  a4.memoizedState = null;
  a4.pendingProps = null;
  a4.return = null;
  a4.updateQueue = null;
}
function ej(a4) {
  return a4.tag === 5 || a4.tag === 3 || a4.tag === 4;
}
function fj(a4) {
  a: {
    for (var b3 = a4.return; b3 !== null; ) {
      if (ej(b3))
        break a;
      b3 = b3.return;
    }
    throw Error(y(160));
  }
  var c4 = b3;
  b3 = c4.stateNode;
  switch (c4.tag) {
    case 5:
      var d5 = false;
      break;
    case 3:
      b3 = b3.containerInfo;
      d5 = true;
      break;
    case 4:
      b3 = b3.containerInfo;
      d5 = true;
      break;
    default:
      throw Error(y(161));
  }
  c4.flags & 16 && (pb(b3, ""), c4.flags &= -17);
  a:
    b:
      for (c4 = a4; ; ) {
        for (; c4.sibling === null; ) {
          if (c4.return === null || ej(c4.return)) {
            c4 = null;
            break a;
          }
          c4 = c4.return;
        }
        c4.sibling.return = c4.return;
        for (c4 = c4.sibling; c4.tag !== 5 && c4.tag !== 6 && c4.tag !== 18; ) {
          if (c4.flags & 2)
            continue b;
          if (c4.child === null || c4.tag === 4)
            continue b;
          else
            c4.child.return = c4, c4 = c4.child;
        }
        if (!(c4.flags & 2)) {
          c4 = c4.stateNode;
          break a;
        }
      }
  d5 ? gj(a4, c4, b3) : hj(a4, c4, b3);
}
function gj(a4, b3, c4) {
  var d5 = a4.tag, e5 = d5 === 5 || d5 === 6;
  if (e5)
    a4 = e5 ? a4.stateNode : a4.stateNode.instance, b3 ? c4.nodeType === 8 ? c4.parentNode.insertBefore(a4, b3) : c4.insertBefore(a4, b3) : (c4.nodeType === 8 ? (b3 = c4.parentNode, b3.insertBefore(a4, c4)) : (b3 = c4, b3.appendChild(a4)), c4 = c4._reactRootContainer, c4 !== null && c4 !== void 0 || b3.onclick !== null || (b3.onclick = jf));
  else if (d5 !== 4 && (a4 = a4.child, a4 !== null))
    for (gj(a4, b3, c4), a4 = a4.sibling; a4 !== null; )
      gj(a4, b3, c4), a4 = a4.sibling;
}
function hj(a4, b3, c4) {
  var d5 = a4.tag, e5 = d5 === 5 || d5 === 6;
  if (e5)
    a4 = e5 ? a4.stateNode : a4.stateNode.instance, b3 ? c4.insertBefore(a4, b3) : c4.appendChild(a4);
  else if (d5 !== 4 && (a4 = a4.child, a4 !== null))
    for (hj(a4, b3, c4), a4 = a4.sibling; a4 !== null; )
      hj(a4, b3, c4), a4 = a4.sibling;
}
function cj(a4, b3) {
  for (var c4 = b3, d5 = false, e5, f3; ; ) {
    if (!d5) {
      d5 = c4.return;
      a:
        for (; ; ) {
          if (d5 === null)
            throw Error(y(160));
          e5 = d5.stateNode;
          switch (d5.tag) {
            case 5:
              f3 = false;
              break a;
            case 3:
              e5 = e5.containerInfo;
              f3 = true;
              break a;
            case 4:
              e5 = e5.containerInfo;
              f3 = true;
              break a;
          }
          d5 = d5.return;
        }
      d5 = true;
    }
    if (c4.tag === 5 || c4.tag === 6) {
      a:
        for (var g2 = a4, h4 = c4, k3 = h4; ; )
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
      f3 ? (g2 = e5, h4 = c4.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h4) : g2.removeChild(h4)) : e5.removeChild(c4.stateNode);
    } else if (c4.tag === 4) {
      if (c4.child !== null) {
        e5 = c4.stateNode.containerInfo;
        f3 = true;
        c4.child.return = c4;
        c4 = c4.child;
        continue;
      }
    } else if (bj(a4, c4), c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b3)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b3)
        return;
      c4 = c4.return;
      c4.tag === 4 && (d5 = false);
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function ij(a4, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c4 = b3.updateQueue;
      c4 = c4 !== null ? c4.lastEffect : null;
      if (c4 !== null) {
        var d5 = c4 = c4.next;
        do
          (d5.tag & 3) === 3 && (a4 = d5.destroy, d5.destroy = void 0, a4 !== void 0 && a4()), d5 = d5.next;
        while (d5 !== c4);
      }
      return;
    case 1:
      return;
    case 5:
      c4 = b3.stateNode;
      if (c4 != null) {
        d5 = b3.memoizedProps;
        var e5 = a4 !== null ? a4.memoizedProps : d5;
        a4 = b3.type;
        var f3 = b3.updateQueue;
        b3.updateQueue = null;
        if (f3 !== null) {
          c4[xf] = d5;
          a4 === "input" && d5.type === "radio" && d5.name != null && $a(c4, d5);
          wb(a4, e5);
          b3 = wb(a4, d5);
          for (e5 = 0; e5 < f3.length; e5 += 2) {
            var g2 = f3[e5], h4 = f3[e5 + 1];
            g2 === "style" ? tb(c4, h4) : g2 === "dangerouslySetInnerHTML" ? ob(c4, h4) : g2 === "children" ? pb(c4, h4) : qa(c4, g2, h4, b3);
          }
          switch (a4) {
            case "input":
              ab(c4, d5);
              break;
            case "textarea":
              ib(c4, d5);
              break;
            case "select":
              a4 = c4._wrapperState.wasMultiple, c4._wrapperState.wasMultiple = !!d5.multiple, f3 = d5.value, f3 != null ? fb(c4, !!d5.multiple, f3, false) : a4 !== !!d5.multiple && (d5.defaultValue != null ? fb(c4, !!d5.multiple, d5.defaultValue, true) : fb(c4, !!d5.multiple, d5.multiple ? [] : "", false));
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
      c4 = b3.stateNode;
      c4.hydrate && (c4.hydrate = false, Cc(c4.containerInfo));
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
function kj(a4) {
  var b3 = a4.updateQueue;
  if (b3 !== null) {
    a4.updateQueue = null;
    var c4 = a4.stateNode;
    c4 === null && (c4 = a4.stateNode = new Ui());
    b3.forEach(function(b4) {
      var d5 = lj.bind(null, a4, b4);
      c4.has(b4) || (c4.add(b4), b4.then(d5, d5));
    });
  }
}
function mj(a4, b3) {
  return a4 !== null && (a4 = a4.memoizedState, a4 === null || a4.dehydrated !== null) ? (b3 = b3.memoizedState, b3 !== null && b3.dehydrated === null) : false;
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
function Ig(a4) {
  a4 = a4.mode;
  if ((a4 & 2) === 0)
    return 1;
  if ((a4 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a4 = Gj;
    var b3 = 4186112 & ~Hj;
    b3 &= -b3;
    b3 === 0 && (a4 = 4186112 & ~a4, b3 = a4 & -a4, b3 === 0 && (b3 = 8192));
    return b3;
  }
  a4 = eg();
  (X & 4) !== 0 && a4 === 98 ? a4 = Xc(12, Gj) : (a4 = Sc(a4), a4 = Xc(a4, Gj));
  return a4;
}
function Jg(a4, b3, c4) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a4 = Kj(a4, b3);
  if (a4 === null)
    return null;
  $c(a4, b3, c4);
  a4 === U && (Hi |= b3, V === 4 && Ii(a4, W));
  var d5 = eg();
  b3 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a4) : (Mj(a4, c4), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d5 !== 98 && d5 !== 99 || (Cj === null ? Cj = new Set([a4]) : Cj.add(a4)), Mj(a4, c4));
  vj = a4;
}
function Kj(a4, b3) {
  a4.lanes |= b3;
  var c4 = a4.alternate;
  c4 !== null && (c4.lanes |= b3);
  c4 = a4;
  for (a4 = a4.return; a4 !== null; )
    a4.childLanes |= b3, c4 = a4.alternate, c4 !== null && (c4.childLanes |= b3), c4 = a4, a4 = a4.return;
  return c4.tag === 3 ? c4.stateNode : null;
}
function Mj(a4, b3) {
  for (var c4 = a4.callbackNode, d5 = a4.suspendedLanes, e5 = a4.pingedLanes, f3 = a4.expirationTimes, g2 = a4.pendingLanes; 0 < g2; ) {
    var h4 = 31 - Vc(g2), k3 = 1 << h4, l3 = f3[h4];
    if (l3 === -1) {
      if ((k3 & d5) === 0 || (k3 & e5) !== 0) {
        l3 = b3;
        Rc(k3);
        var n4 = F;
        f3[h4] = 10 <= n4 ? l3 + 250 : 6 <= n4 ? l3 + 5e3 : -1;
      }
    } else
      l3 <= b3 && (a4.expiredLanes |= k3);
    g2 &= ~k3;
  }
  d5 = Uc(a4, a4 === U ? W : 0);
  b3 = F;
  if (d5 === 0)
    c4 !== null && (c4 !== Zf && Pf(c4), a4.callbackNode = null, a4.callbackPriority = 0);
  else {
    if (c4 !== null) {
      if (a4.callbackPriority === b3)
        return;
      c4 !== Zf && Pf(c4);
    }
    b3 === 15 ? (c4 = Lj.bind(null, a4), ag === null ? (ag = [c4], bg = Of(Uf, jg)) : ag.push(c4), c4 = Zf) : b3 === 14 ? c4 = hg(99, Lj.bind(null, a4)) : (c4 = Tc(b3), c4 = hg(c4, Nj.bind(null, a4)));
    a4.callbackPriority = b3;
    a4.callbackNode = c4;
  }
}
function Nj(a4) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b3 = a4.callbackNode;
  if (Oj() && a4.callbackNode !== b3)
    return null;
  var c4 = Uc(a4, a4 === U ? W : 0);
  if (c4 === 0)
    return null;
  var d5 = c4;
  var e5 = X;
  X |= 16;
  var f3 = Pj();
  if (U !== a4 || W !== d5)
    wj(), Qj(a4, d5);
  do
    try {
      Rj();
      break;
    } catch (h4) {
      Sj(a4, h4);
    }
  while (1);
  qg();
  oj.current = f3;
  X = e5;
  Y !== null ? d5 = 0 : (U = null, W = 0, d5 = V);
  if ((tj & Hi) !== 0)
    Qj(a4, 0);
  else if (d5 !== 0) {
    d5 === 2 && (X |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), c4 = Wc(a4), c4 !== 0 && (d5 = Tj(a4, c4)));
    if (d5 === 1)
      throw b3 = sj, Qj(a4, 0), Ii(a4, c4), Mj(a4, O()), b3;
    a4.finishedWork = a4.current.alternate;
    a4.finishedLanes = c4;
    switch (d5) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a4);
        break;
      case 3:
        Ii(a4, c4);
        if ((c4 & 62914560) === c4 && (d5 = jj + 500 - O(), 10 < d5)) {
          if (Uc(a4, 0) !== 0)
            break;
          e5 = a4.suspendedLanes;
          if ((e5 & c4) !== c4) {
            Hg();
            a4.pingedLanes |= a4.suspendedLanes & e5;
            break;
          }
          a4.timeoutHandle = of(Uj.bind(null, a4), d5);
          break;
        }
        Uj(a4);
        break;
      case 4:
        Ii(a4, c4);
        if ((c4 & 4186112) === c4)
          break;
        d5 = a4.eventTimes;
        for (e5 = -1; 0 < c4; ) {
          var g2 = 31 - Vc(c4);
          f3 = 1 << g2;
          g2 = d5[g2];
          g2 > e5 && (e5 = g2);
          c4 &= ~f3;
        }
        c4 = e5;
        c4 = O() - c4;
        c4 = (120 > c4 ? 120 : 480 > c4 ? 480 : 1080 > c4 ? 1080 : 1920 > c4 ? 1920 : 3e3 > c4 ? 3e3 : 4320 > c4 ? 4320 : 1960 * nj(c4 / 1960)) - c4;
        if (10 < c4) {
          a4.timeoutHandle = of(Uj.bind(null, a4), c4);
          break;
        }
        Uj(a4);
        break;
      case 5:
        Uj(a4);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a4, O());
  return a4.callbackNode === b3 ? Nj.bind(null, a4) : null;
}
function Ii(a4, b3) {
  b3 &= ~uj;
  b3 &= ~Hi;
  a4.suspendedLanes |= b3;
  a4.pingedLanes &= ~b3;
  for (a4 = a4.expirationTimes; 0 < b3; ) {
    var c4 = 31 - Vc(b3), d5 = 1 << c4;
    a4[c4] = -1;
    b3 &= ~d5;
  }
}
function Lj(a4) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a4 === U && (a4.expiredLanes & W) !== 0) {
    var b3 = W;
    var c4 = Tj(a4, b3);
    (tj & Hi) !== 0 && (b3 = Uc(a4, b3), c4 = Tj(a4, b3));
  } else
    b3 = Uc(a4, 0), c4 = Tj(a4, b3);
  a4.tag !== 0 && c4 === 2 && (X |= 64, a4.hydrate && (a4.hydrate = false, qf(a4.containerInfo)), b3 = Wc(a4), b3 !== 0 && (c4 = Tj(a4, b3)));
  if (c4 === 1)
    throw c4 = sj, Qj(a4, 0), Ii(a4, b3), Mj(a4, O()), c4;
  a4.finishedWork = a4.current.alternate;
  a4.finishedLanes = b3;
  Uj(a4);
  Mj(a4, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a4 = Cj;
    Cj = null;
    a4.forEach(function(a5) {
      a5.expiredLanes |= 24 & a5.pendingLanes;
      Mj(a5, O());
    });
  }
  ig();
}
function Wj(a4, b3) {
  var c4 = X;
  X |= 1;
  try {
    return a4(b3);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function Xj(a4, b3) {
  var c4 = X;
  X &= -2;
  X |= 8;
  try {
    return a4(b3);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function ni(a4, b3) {
  I(rj, qj);
  qj |= b3;
  tj |= b3;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a4, b3) {
  a4.finishedWork = null;
  a4.finishedLanes = 0;
  var c4 = a4.timeoutHandle;
  c4 !== -1 && (a4.timeoutHandle = -1, pf(c4));
  if (Y !== null)
    for (c4 = Y.return; c4 !== null; ) {
      var d5 = c4;
      switch (d5.tag) {
        case 1:
          d5 = d5.type.childContextTypes;
          d5 !== null && d5 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d5);
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
          rg(d5);
          break;
        case 23:
        case 24:
          Ki();
      }
      c4 = c4.return;
    }
  U = a4;
  Y = Tg(a4.current, null);
  W = qj = tj = b3;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a4, b3) {
  do {
    var c4 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d5 = R.memoizedState; d5 !== null; ) {
          var e5 = d5.queue;
          e5 !== null && (e5.pending = null);
          d5 = d5.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c4 === null || c4.return === null) {
        V = 1;
        sj = b3;
        Y = null;
        break;
      }
      a: {
        var f3 = a4, g2 = c4.return, h4 = c4, k3 = b3;
        b3 = W;
        h4.flags |= 2048;
        h4.firstEffect = h4.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l3 = k3;
          if ((h4.mode & 2) === 0) {
            var n4 = h4.alternate;
            n4 ? (h4.updateQueue = n4.updateQueue, h4.memoizedState = n4.memoizedState, h4.lanes = n4.lanes) : (h4.updateQueue = null, h4.memoizedState = null);
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
      Zj(c4);
    } catch (va) {
      b3 = va;
      Y === c4 && c4 !== null && (Y = c4 = c4.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a4 = oj.current;
  oj.current = Gh;
  return a4 === null ? Gh : a4;
}
function Tj(a4, b3) {
  var c4 = X;
  X |= 16;
  var d5 = Pj();
  U === a4 && W === b3 || Qj(a4, b3);
  do
    try {
      ak();
      break;
    } catch (e5) {
      Sj(a4, e5);
    }
  while (1);
  qg();
  X = c4;
  oj.current = d5;
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
function bk(a4) {
  var b3 = ck(a4.alternate, a4, qj);
  a4.memoizedProps = a4.pendingProps;
  b3 === null ? Zj(a4) : Y = b3;
  pj.current = null;
}
function Zj(a4) {
  var b3 = a4;
  do {
    var c4 = b3.alternate;
    a4 = b3.return;
    if ((b3.flags & 2048) === 0) {
      c4 = Gi(c4, b3, qj);
      if (c4 !== null) {
        Y = c4;
        return;
      }
      c4 = b3;
      if (c4.tag !== 24 && c4.tag !== 23 || c4.memoizedState === null || (qj & 1073741824) !== 0 || (c4.mode & 4) === 0) {
        for (var d5 = 0, e5 = c4.child; e5 !== null; )
          d5 |= e5.lanes | e5.childLanes, e5 = e5.sibling;
        c4.childLanes = d5;
      }
      a4 !== null && (a4.flags & 2048) === 0 && (a4.firstEffect === null && (a4.firstEffect = b3.firstEffect), b3.lastEffect !== null && (a4.lastEffect !== null && (a4.lastEffect.nextEffect = b3.firstEffect), a4.lastEffect = b3.lastEffect), 1 < b3.flags && (a4.lastEffect !== null ? a4.lastEffect.nextEffect = b3 : a4.firstEffect = b3, a4.lastEffect = b3));
    } else {
      c4 = Li(b3);
      if (c4 !== null) {
        c4.flags &= 2047;
        Y = c4;
        return;
      }
      a4 !== null && (a4.firstEffect = a4.lastEffect = null, a4.flags |= 2048);
    }
    b3 = b3.sibling;
    if (b3 !== null) {
      Y = b3;
      return;
    }
    Y = b3 = a4;
  } while (b3 !== null);
  V === 0 && (V = 5);
}
function Uj(a4) {
  var b3 = eg();
  gg(99, dk.bind(null, a4, b3));
  return null;
}
function dk(a4, b3) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c4 = a4.finishedWork;
  if (c4 === null)
    return null;
  a4.finishedWork = null;
  a4.finishedLanes = 0;
  if (c4 === a4.current)
    throw Error(y(177));
  a4.callbackNode = null;
  var d5 = c4.lanes | c4.childLanes, e5 = d5, f3 = a4.pendingLanes & ~e5;
  a4.pendingLanes = e5;
  a4.suspendedLanes = 0;
  a4.pingedLanes = 0;
  a4.expiredLanes &= e5;
  a4.mutableReadLanes &= e5;
  a4.entangledLanes &= e5;
  e5 = a4.entanglements;
  for (var g2 = a4.eventTimes, h4 = a4.expirationTimes; 0 < f3; ) {
    var k3 = 31 - Vc(f3), l3 = 1 << k3;
    e5[k3] = 0;
    g2[k3] = -1;
    h4[k3] = -1;
    f3 &= ~l3;
  }
  Cj !== null && (d5 & 24) === 0 && Cj.has(a4) && Cj.delete(a4);
  a4 === U && (Y = U = null, W = 0);
  1 < c4.flags ? c4.lastEffect !== null ? (c4.lastEffect.nextEffect = c4, d5 = c4.firstEffect) : d5 = c4 : d5 = c4.firstEffect;
  if (d5 !== null) {
    e5 = X;
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
            var n4 = 0, A3 = -1, p3 = -1, C2 = 0, x4 = 0, w4 = g2, z3 = null;
            b:
              for (; ; ) {
                for (var u4; ; ) {
                  w4 !== h4 || f3 !== 0 && w4.nodeType !== 3 || (A3 = n4 + f3);
                  w4 !== k3 || l3 !== 0 && w4.nodeType !== 3 || (p3 = n4 + l3);
                  w4.nodeType === 3 && (n4 += w4.nodeValue.length);
                  if ((u4 = w4.firstChild) === null)
                    break;
                  z3 = w4;
                  w4 = u4;
                }
                for (; ; ) {
                  if (w4 === g2)
                    break b;
                  z3 === h4 && ++C2 === f3 && (A3 = n4);
                  z3 === k3 && ++x4 === l3 && (p3 = n4);
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
    Z = d5;
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
    Z = d5;
    do
      try {
        for (g2 = a4; Z !== null; ) {
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
    a4.current = c4;
    Z = d5;
    do
      try {
        for (t4 = a4; Z !== null; ) {
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
    X = e5;
  } else
    a4.current = c4;
  if (xj)
    xj = false, yj = a4, zj = b3;
  else
    for (Z = d5; Z !== null; )
      b3 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b3;
  d5 = a4.pendingLanes;
  d5 === 0 && (Ti = null);
  d5 === 1 ? a4 === Ej ? Dj++ : (Dj = 0, Ej = a4) : Dj = 0;
  c4 = c4.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c4, void 0, (c4.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a4, O());
  if (Qi)
    throw Qi = false, a4 = Ri, Ri = null, a4;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a4 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a4, Z) && dc(Z, Ij) && (Jj = true));
    var b3 = Z.flags;
    (b3 & 256) !== 0 && Xi(a4, Z);
    (b3 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a4 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a4, fk);
  }
  return false;
}
function $i(a4, b3) {
  Aj.push(b3, a4);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a4, b3) {
  Bj.push(b3, a4);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a4 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b3 = X;
  X |= 32;
  var c4 = Bj;
  Bj = [];
  for (var d5 = 0; d5 < c4.length; d5 += 2) {
    var e5 = c4[d5], f3 = c4[d5 + 1], g2 = e5.destroy;
    e5.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k3) {
        if (f3 === null)
          throw Error(y(330));
        Wi(f3, k3);
      }
  }
  c4 = Aj;
  Aj = [];
  for (d5 = 0; d5 < c4.length; d5 += 2) {
    e5 = c4[d5];
    f3 = c4[d5 + 1];
    try {
      var h4 = e5.create;
      e5.destroy = h4();
    } catch (k3) {
      if (f3 === null)
        throw Error(y(330));
      Wi(f3, k3);
    }
  }
  for (h4 = a4.current.firstEffect; h4 !== null; )
    a4 = h4.nextEffect, h4.nextEffect = null, h4.flags & 8 && (h4.sibling = null, h4.stateNode = null), h4 = a4;
  X = b3;
  ig();
  return true;
}
function gk(a4, b3, c4) {
  b3 = Mi(c4, b3);
  b3 = Pi(a4, b3, 1);
  Ag(a4, b3);
  b3 = Hg();
  a4 = Kj(a4, 1);
  a4 !== null && ($c(a4, 1, b3), Mj(a4, b3));
}
function Wi(a4, b3) {
  if (a4.tag === 3)
    gk(a4, a4, b3);
  else
    for (var c4 = a4.return; c4 !== null; ) {
      if (c4.tag === 3) {
        gk(c4, a4, b3);
        break;
      } else if (c4.tag === 1) {
        var d5 = c4.stateNode;
        if (typeof c4.type.getDerivedStateFromError === "function" || typeof d5.componentDidCatch === "function" && (Ti === null || !Ti.has(d5))) {
          a4 = Mi(b3, a4);
          var e5 = Si(c4, a4, 1);
          Ag(c4, e5);
          e5 = Hg();
          c4 = Kj(c4, 1);
          if (c4 !== null)
            $c(c4, 1, e5), Mj(c4, e5);
          else if (typeof d5.componentDidCatch === "function" && (Ti === null || !Ti.has(d5)))
            try {
              d5.componentDidCatch(b3, a4);
            } catch (f3) {
            }
          break;
        }
      }
      c4 = c4.return;
    }
}
function Yj(a4, b3, c4) {
  var d5 = a4.pingCache;
  d5 !== null && d5.delete(b3);
  b3 = Hg();
  a4.pingedLanes |= a4.suspendedLanes & c4;
  U === a4 && (W & c4) === c4 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a4, 0) : uj |= c4);
  Mj(a4, b3);
}
function lj(a4, b3) {
  var c4 = a4.stateNode;
  c4 !== null && c4.delete(b3);
  b3 = 0;
  b3 === 0 && (b3 = a4.mode, (b3 & 2) === 0 ? b3 = 1 : (b3 & 4) === 0 ? b3 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b3 = Yc(62914560 & ~Gj), b3 === 0 && (b3 = 4194304)));
  c4 = Hg();
  a4 = Kj(a4, b3);
  a4 !== null && ($c(a4, b3, c4), Mj(a4, c4));
}
var ck;
ck = function(a4, b3, c4) {
  var d5 = b3.lanes;
  if (a4 !== null)
    if (a4.memoizedProps !== b3.pendingProps || N.current)
      ug = true;
    else if ((c4 & d5) !== 0)
      ug = (a4.flags & 16384) !== 0 ? true : false;
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
          d5 = b3.memoizedProps.value;
          var e5 = b3.type._context;
          I(mg, e5._currentValue);
          e5._currentValue = d5;
          break;
        case 13:
          if (b3.memoizedState !== null) {
            if ((c4 & b3.child.childLanes) !== 0)
              return ti(a4, b3, c4);
            I(P, P.current & 1);
            b3 = hi(a4, b3, c4);
            return b3 !== null ? b3.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d5 = (c4 & b3.childLanes) !== 0;
          if ((a4.flags & 64) !== 0) {
            if (d5)
              return Ai(a4, b3, c4);
            b3.flags |= 64;
          }
          e5 = b3.memoizedState;
          e5 !== null && (e5.rendering = null, e5.tail = null, e5.lastEffect = null);
          I(P, P.current);
          if (d5)
            break;
          else
            return null;
        case 23:
        case 24:
          return b3.lanes = 0, mi(a4, b3, c4);
      }
      return hi(a4, b3, c4);
    }
  else
    ug = false;
  b3.lanes = 0;
  switch (b3.tag) {
    case 2:
      d5 = b3.type;
      a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2);
      a4 = b3.pendingProps;
      e5 = Ef(b3, M.current);
      tg(b3, c4);
      e5 = Ch(null, b3, d5, a4, e5, c4);
      b3.flags |= 1;
      if (typeof e5 === "object" && e5 !== null && typeof e5.render === "function" && e5.$$typeof === void 0) {
        b3.tag = 1;
        b3.memoizedState = null;
        b3.updateQueue = null;
        if (Ff(d5)) {
          var f3 = true;
          Jf(b3);
        } else
          f3 = false;
        b3.memoizedState = e5.state !== null && e5.state !== void 0 ? e5.state : null;
        xg(b3);
        var g2 = d5.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b3, d5, g2, a4);
        e5.updater = Kg;
        b3.stateNode = e5;
        e5._reactInternals = b3;
        Og(b3, d5, a4, c4);
        b3 = qi(null, b3, d5, true, f3, c4);
      } else
        b3.tag = 0, fi(null, b3, e5, c4), b3 = b3.child;
      return b3;
    case 16:
      e5 = b3.elementType;
      a: {
        a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2);
        a4 = b3.pendingProps;
        f3 = e5._init;
        e5 = f3(e5._payload);
        b3.type = e5;
        f3 = b3.tag = hk(e5);
        a4 = lg(e5, a4);
        switch (f3) {
          case 0:
            b3 = li(null, b3, e5, a4, c4);
            break a;
          case 1:
            b3 = pi(null, b3, e5, a4, c4);
            break a;
          case 11:
            b3 = gi(null, b3, e5, a4, c4);
            break a;
          case 14:
            b3 = ii(null, b3, e5, lg(e5.type, a4), d5, c4);
            break a;
        }
        throw Error(y(306, e5, ""));
      }
      return b3;
    case 0:
      return d5 = b3.type, e5 = b3.pendingProps, e5 = b3.elementType === d5 ? e5 : lg(d5, e5), li(a4, b3, d5, e5, c4);
    case 1:
      return d5 = b3.type, e5 = b3.pendingProps, e5 = b3.elementType === d5 ? e5 : lg(d5, e5), pi(a4, b3, d5, e5, c4);
    case 3:
      ri(b3);
      d5 = b3.updateQueue;
      if (a4 === null || d5 === null)
        throw Error(y(282));
      d5 = b3.pendingProps;
      e5 = b3.memoizedState;
      e5 = e5 !== null ? e5.element : null;
      yg(a4, b3);
      Cg(b3, d5, null, c4);
      d5 = b3.memoizedState.element;
      if (d5 === e5)
        sh(), b3 = hi(a4, b3, c4);
      else {
        e5 = b3.stateNode;
        if (f3 = e5.hydrate)
          kh = rf(b3.stateNode.containerInfo.firstChild), jh = b3, f3 = lh = true;
        if (f3) {
          a4 = e5.mutableSourceEagerHydrationData;
          if (a4 != null)
            for (e5 = 0; e5 < a4.length; e5 += 2)
              f3 = a4[e5], f3._workInProgressVersionPrimary = a4[e5 + 1], th.push(f3);
          c4 = Zg(b3, null, d5, c4);
          for (b3.child = c4; c4; )
            c4.flags = c4.flags & -3 | 1024, c4 = c4.sibling;
        } else
          fi(a4, b3, d5, c4), sh();
        b3 = b3.child;
      }
      return b3;
    case 5:
      return gh(b3), a4 === null && ph(b3), d5 = b3.type, e5 = b3.pendingProps, f3 = a4 !== null ? a4.memoizedProps : null, g2 = e5.children, nf(d5, e5) ? g2 = null : f3 !== null && nf(d5, f3) && (b3.flags |= 16), oi(a4, b3), fi(a4, b3, g2, c4), b3.child;
    case 6:
      return a4 === null && ph(b3), null;
    case 13:
      return ti(a4, b3, c4);
    case 4:
      return eh(b3, b3.stateNode.containerInfo), d5 = b3.pendingProps, a4 === null ? b3.child = Yg(b3, null, d5, c4) : fi(a4, b3, d5, c4), b3.child;
    case 11:
      return d5 = b3.type, e5 = b3.pendingProps, e5 = b3.elementType === d5 ? e5 : lg(d5, e5), gi(a4, b3, d5, e5, c4);
    case 7:
      return fi(a4, b3, b3.pendingProps, c4), b3.child;
    case 8:
      return fi(a4, b3, b3.pendingProps.children, c4), b3.child;
    case 12:
      return fi(a4, b3, b3.pendingProps.children, c4), b3.child;
    case 10:
      a: {
        d5 = b3.type._context;
        e5 = b3.pendingProps;
        g2 = b3.memoizedProps;
        f3 = e5.value;
        var h4 = b3.type._context;
        I(mg, h4._currentValue);
        h4._currentValue = f3;
        if (g2 !== null)
          if (h4 = g2.value, f3 = He(h4, f3) ? 0 : (typeof d5._calculateChangedBits === "function" ? d5._calculateChangedBits(h4, f3) : 1073741823) | 0, f3 === 0) {
            if (g2.children === e5.children && !N.current) {
              b3 = hi(a4, b3, c4);
              break a;
            }
          } else
            for (h4 = b3.child, h4 !== null && (h4.return = b3); h4 !== null; ) {
              var k3 = h4.dependencies;
              if (k3 !== null) {
                g2 = h4.child;
                for (var l3 = k3.firstContext; l3 !== null; ) {
                  if (l3.context === d5 && (l3.observedBits & f3) !== 0) {
                    h4.tag === 1 && (l3 = zg(-1, c4 & -c4), l3.tag = 2, Ag(h4, l3));
                    h4.lanes |= c4;
                    l3 = h4.alternate;
                    l3 !== null && (l3.lanes |= c4);
                    sg(h4.return, c4);
                    k3.lanes |= c4;
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
        fi(a4, b3, e5.children, c4);
        b3 = b3.child;
      }
      return b3;
    case 9:
      return e5 = b3.type, f3 = b3.pendingProps, d5 = f3.children, tg(b3, c4), e5 = vg(e5, f3.unstable_observedBits), d5 = d5(e5), b3.flags |= 1, fi(a4, b3, d5, c4), b3.child;
    case 14:
      return e5 = b3.type, f3 = lg(e5, b3.pendingProps), f3 = lg(e5.type, f3), ii(a4, b3, e5, f3, d5, c4);
    case 15:
      return ki(a4, b3, b3.type, b3.pendingProps, d5, c4);
    case 17:
      return d5 = b3.type, e5 = b3.pendingProps, e5 = b3.elementType === d5 ? e5 : lg(d5, e5), a4 !== null && (a4.alternate = null, b3.alternate = null, b3.flags |= 2), b3.tag = 1, Ff(d5) ? (a4 = true, Jf(b3)) : a4 = false, tg(b3, c4), Mg(b3, d5, e5), Og(b3, d5, e5, c4), qi(null, b3, d5, true, a4, c4);
    case 19:
      return Ai(a4, b3, c4);
    case 23:
      return mi(a4, b3, c4);
    case 24:
      return mi(a4, b3, c4);
  }
  throw Error(y(156, b3.tag));
};
function ik(a4, b3, c4, d5) {
  this.tag = a4;
  this.key = c4;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b3;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d5;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a4, b3, c4, d5) {
  return new ik(a4, b3, c4, d5);
}
function ji(a4) {
  a4 = a4.prototype;
  return !(!a4 || !a4.isReactComponent);
}
function hk(a4) {
  if (typeof a4 === "function")
    return ji(a4) ? 1 : 0;
  if (a4 !== void 0 && a4 !== null) {
    a4 = a4.$$typeof;
    if (a4 === Aa)
      return 11;
    if (a4 === Da)
      return 14;
  }
  return 2;
}
function Tg(a4, b3) {
  var c4 = a4.alternate;
  c4 === null ? (c4 = nh(a4.tag, b3, a4.key, a4.mode), c4.elementType = a4.elementType, c4.type = a4.type, c4.stateNode = a4.stateNode, c4.alternate = a4, a4.alternate = c4) : (c4.pendingProps = b3, c4.type = a4.type, c4.flags = 0, c4.nextEffect = null, c4.firstEffect = null, c4.lastEffect = null);
  c4.childLanes = a4.childLanes;
  c4.lanes = a4.lanes;
  c4.child = a4.child;
  c4.memoizedProps = a4.memoizedProps;
  c4.memoizedState = a4.memoizedState;
  c4.updateQueue = a4.updateQueue;
  b3 = a4.dependencies;
  c4.dependencies = b3 === null ? null : {lanes: b3.lanes, firstContext: b3.firstContext};
  c4.sibling = a4.sibling;
  c4.index = a4.index;
  c4.ref = a4.ref;
  return c4;
}
function Vg(a4, b3, c4, d5, e5, f3) {
  var g2 = 2;
  d5 = a4;
  if (typeof a4 === "function")
    ji(a4) && (g2 = 1);
  else if (typeof a4 === "string")
    g2 = 5;
  else
    a:
      switch (a4) {
        case ua:
          return Xg(c4.children, e5, f3, b3);
        case Ha:
          g2 = 8;
          e5 |= 16;
          break;
        case wa:
          g2 = 8;
          e5 |= 1;
          break;
        case xa:
          return a4 = nh(12, c4, b3, e5 | 8), a4.elementType = xa, a4.type = xa, a4.lanes = f3, a4;
        case Ba:
          return a4 = nh(13, c4, b3, e5), a4.type = Ba, a4.elementType = Ba, a4.lanes = f3, a4;
        case Ca:
          return a4 = nh(19, c4, b3, e5), a4.elementType = Ca, a4.lanes = f3, a4;
        case Ia:
          return vi(c4, e5, f3, b3);
        case Ja:
          return a4 = nh(24, c4, b3, e5), a4.elementType = Ja, a4.lanes = f3, a4;
        default:
          if (typeof a4 === "object" && a4 !== null)
            switch (a4.$$typeof) {
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
                d5 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a4 == null ? a4 : typeof a4, ""));
      }
  b3 = nh(g2, c4, b3, e5);
  b3.elementType = a4;
  b3.type = d5;
  b3.lanes = f3;
  return b3;
}
function Xg(a4, b3, c4, d5) {
  a4 = nh(7, a4, d5, b3);
  a4.lanes = c4;
  return a4;
}
function vi(a4, b3, c4, d5) {
  a4 = nh(23, a4, d5, b3);
  a4.elementType = Ia;
  a4.lanes = c4;
  return a4;
}
function Ug(a4, b3, c4) {
  a4 = nh(6, a4, null, b3);
  a4.lanes = c4;
  return a4;
}
function Wg(a4, b3, c4) {
  b3 = nh(4, a4.children !== null ? a4.children : [], a4.key, b3);
  b3.lanes = c4;
  b3.stateNode = {containerInfo: a4.containerInfo, pendingChildren: null, implementation: a4.implementation};
  return b3;
}
function jk(a4, b3, c4) {
  this.tag = b3;
  this.containerInfo = a4;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c4;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a4, b3, c4) {
  var d5 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d5 == null ? null : "" + d5, children: a4, containerInfo: b3, implementation: c4};
}
function lk(a4, b3, c4, d5) {
  var e5 = b3.current, f3 = Hg(), g2 = Ig(e5);
  a:
    if (c4) {
      c4 = c4._reactInternals;
      b: {
        if (Zb(c4) !== c4 || c4.tag !== 1)
          throw Error(y(170));
        var h4 = c4;
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
      if (c4.tag === 1) {
        var k3 = c4.type;
        if (Ff(k3)) {
          c4 = If(c4, k3, h4);
          break a;
        }
      }
      c4 = h4;
    } else
      c4 = Cf;
  b3.context === null ? b3.context = c4 : b3.pendingContext = c4;
  b3 = zg(f3, g2);
  b3.payload = {element: a4};
  d5 = d5 === void 0 ? null : d5;
  d5 !== null && (b3.callback = d5);
  Ag(e5, b3);
  Jg(e5, g2, f3);
  return g2;
}
function mk(a4) {
  a4 = a4.current;
  if (!a4.child)
    return null;
  switch (a4.child.tag) {
    case 5:
      return a4.child.stateNode;
    default:
      return a4.child.stateNode;
  }
}
function nk(a4, b3) {
  a4 = a4.memoizedState;
  if (a4 !== null && a4.dehydrated !== null) {
    var c4 = a4.retryLane;
    a4.retryLane = c4 !== 0 && c4 < b3 ? c4 : b3;
  }
}
function ok(a4, b3) {
  nk(a4, b3);
  (a4 = a4.alternate) && nk(a4, b3);
}
function pk() {
  return null;
}
function qk(a4, b3, c4) {
  var d5 = c4 != null && c4.hydrationOptions != null && c4.hydrationOptions.mutableSources || null;
  c4 = new jk(a4, b3, c4 != null && c4.hydrate === true);
  b3 = nh(3, null, null, b3 === 2 ? 7 : b3 === 1 ? 3 : 0);
  c4.current = b3;
  b3.stateNode = c4;
  xg(b3);
  a4[ff] = c4.current;
  cf(a4.nodeType === 8 ? a4.parentNode : a4);
  if (d5)
    for (a4 = 0; a4 < d5.length; a4++) {
      b3 = d5[a4];
      var e5 = b3._getVersion;
      e5 = e5(b3._source);
      c4.mutableSourceEagerHydrationData == null ? c4.mutableSourceEagerHydrationData = [b3, e5] : c4.mutableSourceEagerHydrationData.push(b3, e5);
    }
  this._internalRoot = c4;
}
qk.prototype.render = function(a4) {
  lk(a4, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a4 = this._internalRoot, b3 = a4.containerInfo;
  lk(null, a4, null, function() {
    b3[ff] = null;
  });
};
function rk(a4) {
  return !(!a4 || a4.nodeType !== 1 && a4.nodeType !== 9 && a4.nodeType !== 11 && (a4.nodeType !== 8 || a4.nodeValue !== " react-mount-point-unstable "));
}
function sk(a4, b3) {
  b3 || (b3 = a4 ? a4.nodeType === 9 ? a4.documentElement : a4.firstChild : null, b3 = !(!b3 || b3.nodeType !== 1 || !b3.hasAttribute("data-reactroot")));
  if (!b3)
    for (var c4; c4 = a4.lastChild; )
      a4.removeChild(c4);
  return new qk(a4, 0, b3 ? {hydrate: true} : void 0);
}
function tk(a4, b3, c4, d5, e5) {
  var f3 = c4._reactRootContainer;
  if (f3) {
    var g2 = f3._internalRoot;
    if (typeof e5 === "function") {
      var h4 = e5;
      e5 = function() {
        var a5 = mk(g2);
        h4.call(a5);
      };
    }
    lk(b3, g2, a4, e5);
  } else {
    f3 = c4._reactRootContainer = sk(c4, d5);
    g2 = f3._internalRoot;
    if (typeof e5 === "function") {
      var k3 = e5;
      e5 = function() {
        var a5 = mk(g2);
        k3.call(a5);
      };
    }
    Xj(function() {
      lk(b3, g2, a4, e5);
    });
  }
  return mk(g2);
}
ec = function(a4) {
  if (a4.tag === 13) {
    var b3 = Hg();
    Jg(a4, 4, b3);
    ok(a4, 4);
  }
};
fc = function(a4) {
  if (a4.tag === 13) {
    var b3 = Hg();
    Jg(a4, 67108864, b3);
    ok(a4, 67108864);
  }
};
gc = function(a4) {
  if (a4.tag === 13) {
    var b3 = Hg(), c4 = Ig(a4);
    Jg(a4, c4, b3);
    ok(a4, c4);
  }
};
hc = function(a4, b3) {
  return b3();
};
yb = function(a4, b3, c4) {
  switch (b3) {
    case "input":
      ab(a4, c4);
      b3 = c4.name;
      if (c4.type === "radio" && b3 != null) {
        for (c4 = a4; c4.parentNode; )
          c4 = c4.parentNode;
        c4 = c4.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
        for (b3 = 0; b3 < c4.length; b3++) {
          var d5 = c4[b3];
          if (d5 !== a4 && d5.form === a4.form) {
            var e5 = Db(d5);
            if (!e5)
              throw Error(y(90));
            Wa(d5);
            ab(d5, e5);
          }
        }
      }
      break;
    case "textarea":
      ib(a4, c4);
      break;
    case "select":
      b3 = c4.value, b3 != null && fb(a4, !!c4.multiple, b3, false);
  }
};
Gb = Wj;
Hb = function(a4, b3, c4, d5, e5) {
  var f3 = X;
  X |= 4;
  try {
    return gg(98, a4.bind(null, b3, c4, d5, e5));
  } finally {
    X = f3, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a4, b3) {
  var c4 = X;
  X |= 2;
  try {
    return a4(b3);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
};
function uk(a4, b3) {
  var c4 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b3))
    throw Error(y(200));
  return kk(a4, b3, null, c4);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a4) {
  a4 = cc(a4);
  return a4 === null ? null : a4.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a4) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a4) {
  if (a4 == null)
    return null;
  if (a4.nodeType === 1)
    return a4;
  var b3 = a4._reactInternals;
  if (b3 === void 0) {
    if (typeof a4.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a4)));
  }
  a4 = cc(b3);
  a4 = a4 === null ? null : a4.stateNode;
  return a4;
};
var flushSync = function(a4, b3) {
  var c4 = X;
  if ((c4 & 48) !== 0)
    return a4(b3);
  X |= 1;
  try {
    if (a4)
      return gg(99, a4.bind(null, b3));
  } finally {
    X = c4, ig();
  }
};
var hydrate = function(a4, b3, c4) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a4, b3, true, c4);
};
var render = function(a4, b3, c4) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a4, b3, false, c4);
};
var unmountComponentAtNode = function(a4) {
  if (!rk(a4))
    throw Error(y(40));
  return a4._reactRootContainer ? (Xj(function() {
    tk(null, null, a4, false, function() {
      a4._reactRootContainer = null;
      a4[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a4, b3) {
  return uk(a4, b3, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a4, b3, c4, d5) {
  if (!rk(c4))
    throw Error(y(200));
  if (a4 == null || a4._reactInternals === void 0)
    throw Error(y(38));
  return tk(a4, b3, c4, false, d5);
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
      } catch (e5) {
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
function z$1(a4) {
  if (typeof a4 === "object" && a4 !== null) {
    var u4 = a4.$$typeof;
    switch (u4) {
      case c$1:
        switch (a4 = a4.type, a4) {
          case l:
          case m$1:
          case e$1:
          case g$1:
          case f:
          case p:
            return a4;
          default:
            switch (a4 = a4 && a4.$$typeof, a4) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a4;
              default:
                return u4;
            }
        }
      case d:
        return u4;
    }
  }
}
function A$1(a4) {
  return z$1(a4) === m$1;
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
var isAsyncMode = function(a4) {
  return A$1(a4) || z$1(a4) === l;
};
var isConcurrentMode = A$1;
var isContextConsumer = function(a4) {
  return z$1(a4) === k$1;
};
var isContextProvider = function(a4) {
  return z$1(a4) === h$1;
};
var isElement = function(a4) {
  return typeof a4 === "object" && a4 !== null && a4.$$typeof === c$1;
};
var isForwardRef = function(a4) {
  return z$1(a4) === n$1;
};
var isFragment = function(a4) {
  return z$1(a4) === e$1;
};
var isLazy = function(a4) {
  return z$1(a4) === t;
};
var isMemo = function(a4) {
  return z$1(a4) === r$1;
};
var isPortal = function(a4) {
  return z$1(a4) === d;
};
var isProfiler = function(a4) {
  return z$1(a4) === g$1;
};
var isStrictMode = function(a4) {
  return z$1(a4) === f;
};
var isSuspense = function(a4) {
  return z$1(a4) === p;
};
var isValidElementType = function(a4) {
  return typeof a4 === "string" || typeof a4 === "function" || a4 === e$1 || a4 === m$1 || a4 === g$1 || a4 === f || a4 === p || a4 === q$1 || typeof a4 === "object" && a4 !== null && (a4.$$typeof === t || a4.$$typeof === r$1 || a4.$$typeof === h$1 || a4.$$typeof === k$1 || a4.$$typeof === n$1 || a4.$$typeof === w || a4.$$typeof === x$1 || a4.$$typeof === y$1 || a4.$$typeof === v);
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
    for (var c4 = 1; c4 < arguments.length; c4++) {
      var I4 = arguments[c4];
      for (var t4 in I4)
        Object.prototype.hasOwnProperty.call(I4, t4) && (g2[t4] = I4[t4]);
    }
    return g2;
  }, t$1.apply(this, arguments);
}
var l$1 = t$1;
var n$2 = l$1;
var i$1 = function(g2, c4) {
  if (g2 == null)
    return {};
  var I4, t4, l3 = {}, n4 = Object.keys(g2);
  for (t4 = 0; t4 < n4.length; t4++)
    I4 = n4[t4], c4.indexOf(I4) >= 0 || (l3[I4] = g2[I4]);
  return l3;
};
var e$2 = function(g2, c4) {
  if (g2 == null)
    return {};
  var I4, t4, l3 = i$1(g2, c4);
  if (Object.getOwnPropertySymbols) {
    var n4 = Object.getOwnPropertySymbols(g2);
    for (t4 = 0; t4 < n4.length; t4++)
      I4 = n4[t4], c4.indexOf(I4) >= 0 || Object.prototype.propertyIsEnumerable.call(g2, I4) && (l3[I4] = g2[I4]);
  }
  return l3;
};
var b$1 = react.createContext(null);
var u = function(g2) {
  var c4 = g2.current.querySelector(".tr-header");
  return Array.from((c4 == null ? void 0 : c4.querySelectorAll(".th")) || []);
};
var C$1 = function(g2, c4, I4, t4) {
  return Array.from(g2.current.querySelectorAll(I4)).forEach(function(g3) {
    var I5 = Array.from(g3.querySelectorAll(t4)), l3 = I5.length;
    I5.forEach(function(g4, I6) {
      return c4(g4, I6, l3);
    });
  });
};
var o = function(g2, c4) {
  return C$1(g2, c4, ".tr-header", ".th");
};
var a$1 = function(g2, c4) {
  return C$1(g2, c4, ".tr-body", ".td");
};
var G$1 = function(g2, c4) {
  return {index: c4, minWidth: +g2.getAttribute("data-resize-min-width"), width: g2.getBoundingClientRect().width, isStiff: g2.classList.contains("stiff"), isHide: g2.getAttribute("data-hide") === "true", isColSpan: g2.classList.contains("colspan")};
};
var A$2 = react.createContext(null);
var X2 = function(I4) {
  var t4 = I4.tableElementRef, l3 = I4.tableMemoryRef, n4 = I4.layout, i3 = I4.children, e5 = react.useMemo(function() {
    return {layout: n4, tableElementRef: t4, tableMemoryRef: l3};
  }, [n4, t4, l3]);
  return jsx(A$2.Provider, {value: e5}, i3);
};
var d$1 = function(g2, c4) {
  var I4 = u(g2).map(G$1);
  c4.current.dataColumns = I4;
};
var r$2 = function(g2, c4, I4) {
  var t4 = c4.current.style.getPropertyValue("--data-table-library_grid-template-columns") !== g2;
  c4.current && g2 && t4 && (c4.current.style.setProperty("--data-table-library_grid-template-columns", g2), d$1(c4, I4));
};
var x$2 = function(g2, c4) {
  c4 != null && c4.onLayoutChange && g2 && c4.onLayoutChange(g2);
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
  var i3 = l3.layout, e5 = i3 != null && i3.isDiv ? "div" : "td";
  return jsx(e5, n$2({css: s$1, ref: t4}, I4));
});
var B$1 = css(y$2, " z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}", "");
var Z2 = react.forwardRef(function(I4, t4) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var i3 = l3.layout, e5 = i3 != null && i3.isDiv ? "div" : "th";
  return jsx(e5, n$2({css: B$1, ref: t4}, I4));
});
var W$1 = {name: "1k13m5t", styles: "z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"};
var m$2 = function(g2) {
  var c4 = typeof g2 == "boolean" || (g2 == null ? void 0 : g2.resizerWidth) == null ? 10 : g2.resizerWidth, t4 = typeof g2 == "boolean" || (g2 == null ? void 0 : g2.resizerHighlight) == null ? "transparent" : g2.resizerHighlight;
  return {handle: W$1, area: css("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:", c4, "px;height:100%;&:hover,&.active{background-color:", t4, ";}", "")};
};
var r$3 = function(r4, t4) {
  (t4 == null || t4 > r4.length) && (t4 = r4.length);
  for (var n4 = 0, e5 = new Array(t4); n4 < t4; n4++)
    e5[n4] = r4[n4];
  return e5;
};
var t$2 = r$3;
var n$3 = function(r4, n4) {
  if (r4) {
    if (typeof r4 == "string")
      return t$2(r4, n4);
    var e5 = Object.prototype.toString.call(r4).slice(8, -1);
    return e5 === "Object" && r4.constructor && (e5 = r4.constructor.name), e5 === "Map" || e5 === "Set" ? Array.from(r4) : e5 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e5) ? t$2(r4, n4) : void 0;
  }
};
var t$3 = function(r4) {
  if (Array.isArray(r4))
    return r4;
};
var e$3 = function(r4, t4) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(r4)) {
    var e5 = [], n4 = true, o4 = false, a4 = void 0;
    try {
      for (var i3, u4 = r4[Symbol.iterator](); !(n4 = (i3 = u4.next()).done) && (e5.push(i3.value), !t4 || e5.length !== t4); n4 = true)
        ;
    } catch (r5) {
      o4 = true, a4 = r5;
    } finally {
      try {
        n4 || u4.return == null || u4.return();
      } finally {
        if (o4)
          throw a4;
      }
    }
    return e5;
  }
};
var n$4 = n$3;
var o$1 = function() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var a$2 = function(r4, a4) {
  return t$3(r4) || e$3(r4, a4) || n$4(r4, a4) || o$1();
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
var e$4 = function(e5, r4, n4) {
  return r4 in e5 ? Object.defineProperty(e5, r4, {value: n4, enumerable: true, configurable: true, writable: true}) : e5[r4] = n4, e5;
};
var e$5 = r$3;
var n$5 = function(r4) {
  if (Array.isArray(r4))
    return e$5(r4);
};
var o$2 = function(r4) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(r4))
    return Array.from(r4);
};
var a$3 = n$3;
var i$3 = function() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var u$1 = function(r4) {
  return n$5(r4) || o$2(r4) || a$3(r4) || i$3();
};
var Z$1 = react.createContext(null);
function A$3(e5, c4) {
  var l3 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var t4 = Object.getOwnPropertySymbols(e5);
    c4 && (t4 = t4.filter(function(c5) {
      return Object.getOwnPropertyDescriptor(e5, c5).enumerable;
    })), l3.push.apply(l3, t4);
  }
  return l3;
}
function W$2(e5) {
  for (var c4 = 1; c4 < arguments.length; c4++) {
    var l3 = arguments[c4] != null ? arguments[c4] : {};
    c4 % 2 ? A$3(Object(l3), true).forEach(function(c5) {
      e$4(e5, c5, l3[c5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(l3)) : A$3(Object(l3)).forEach(function(c5) {
      Object.defineProperty(e5, c5, Object.getOwnPropertyDescriptor(l3, c5));
    });
  }
  return e5;
}
var X$1 = function(i3, I4) {
  var d5 = react.useContext(A$2);
  if (!d5)
    throw new Error("No Layout Context.");
  var u$2 = d5.tableElementRef, C2 = d5.tableMemoryRef, a4 = d5.layout, s4 = react.useRef(null), o$13 = react.useRef(null), G3 = react.useRef(""), Z3 = react.useRef(null), A3 = react.useRef(false), X3 = react.useCallback(function(e5) {
    var c4;
    e5.preventDefault(), G3.current = u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns"), A3.current = true, Z3.current = s4.current.offsetWidth - e5.pageX, (c4 = s4.current) === null || c4 === void 0 || c4.querySelector(".resizer-area").classList.add("active");
  }, [u$2]), h4 = react.useCallback(function(e5) {
    if (A3.current) {
      e5.preventDefault();
      var c4 = Z3.current + e5.pageX, t4 = function(e6, c5, l3, t5) {
        var i4 = u(l3).map(G$1).filter(function(e7) {
          return !e7.isHide;
        }), I5 = i4.findIndex(function(c6) {
          return c6.index === e6;
        }), d6 = (i4 = i4.map(function(e7, c6) {
          return W$2(W$2({}, e7), {}, {index: c6});
        })).reduce(function(e7, c6, l4) {
          return e7 || (l4 > I5 && c6.width !== 0 ? c6 : e7);
        }, null), u$22 = i4.reduce(function(e7, c6) {
          return e7 + c6.width;
        }, 0), C3 = i4[I5].minWidth, a5 = t5 > C3 && t5 !== 0 ? t5 : C3, s5 = a5 - i4[I5].width, o$14 = i4.map(function(e7, c6) {
          if (d6 && I5 === c6)
            return d6.width - s5 > C3 ? a5 : e7.width;
          if ((d6 == null ? void 0 : d6.index) === c6) {
            var l4 = e7.width - s5;
            return l4 > C3 ? l4 : e7.width;
          }
          return e7.width;
        }), G4 = u$22 - o$14.reduce(function(e7, c6) {
          return e7 + c6;
        }, 0);
        o$14[I5] = o$14[I5] + G4;
        var Z4 = false, A4 = i4.slice(0).reverse().map(function(e7, l4) {
          var t6 = o$14.slice(0).reverse()[l4], n4 = t6 / u$22 * 100;
          return e7.isStiff || c5 != null && c5.horizontalScroll ? "".concat(t6, "px") : Z4 ? "minmax(0, ".concat(n4, "%)") : (Z4 = true, "minmax(0, 1fr)");
        }).slice(0).reverse().join(" "), X4 = function(e7, c6) {
          if (u$1(Array.from(e7.classList)).includes("pin-left")) {
            var l4 = o$14.reduce(function(e8, l5, t7) {
              return t7 >= c6 ? e8 : e8 + l5;
            }, 0);
            e7.style.left = "".concat(l4, "px");
          }
          if (u$1(Array.from(e7.classList)).includes("pin-right")) {
            var t6 = o$14.reduceRight(function(e8, l5, t7) {
              return t7 <= c6 ? e8 : e8 + l5;
            }, 0);
            e7.style.right = "".concat(t6, "px");
          }
        };
        return o(l3, X4), a$1(l3, X4), A4;
      }(i3, a4, u$2, c4);
      r$2(t4, u$2, C2);
    }
  }, [i3, a4, u$2, C2]), V3 = react.useCallback(function() {
    var e5;
    A3.current = false;
    var c4 = u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns");
    if (G3.current !== c4) {
      x$2(c4, a4);
      var l3 = u(u$2).map(G$1);
      C2.current.dataColumns = l3;
    }
    (e5 = s4.current) === null || e5 === void 0 || e5.querySelector(".resizer-area").classList.remove("active");
  }, [a4, u$2, C2]);
  return react.useEffect(function() {
    var e5 = o$13.current;
    return e5 && (e5.addEventListener("mousedown", X3), document.addEventListener("mousemove", h4), document.addEventListener("mouseup", V3)), function() {
      e5 && (e5.removeEventListener("mousedown", X3), document.removeEventListener("mousemove", h4), document.removeEventListener("mouseup", V3));
    };
  }, [I4, X3, h4, V3]), {cellRef: s4, resizeRef: o$13};
};
var h$2 = ["index", "className", "hide", "pinLeft", "pinRight", "stiff", "isFooter", "includePreviousColSpan", "previousColSpans", "gridColumnStart", "gridColumnEnd", "resize", "role", "children", "style"];
function V$1(e5, c4) {
  var l3 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var t4 = Object.getOwnPropertySymbols(e5);
    c4 && (t4 = t4.filter(function(c5) {
      return Object.getOwnPropertyDescriptor(e5, c5).enumerable;
    })), l3.push.apply(l3, t4);
  }
  return l3;
}
function y$3(e5) {
  for (var c4 = 1; c4 < arguments.length; c4++) {
    var l3 = arguments[c4] != null ? arguments[c4] : {};
    c4 % 2 ? V$1(Object(l3), true).forEach(function(c5) {
      e$4(e5, c5, l3[c5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(l3)) : V$1(Object(l3)).forEach(function(c5) {
      Object.defineProperty(e5, c5, Object.getOwnPropertyDescriptor(l3, c5));
    });
  }
  return e5;
}
var p$2 = function(e5, c4) {
  return c4.find(function(c5) {
    return c5.index === e5;
  });
};
var v$1 = function(r4) {
  var g2 = r4.index, a4 = r4.className, m3 = r4.hide, Z$12 = r4.pinLeft, A3 = r4.pinRight, W3 = r4.stiff, V3 = r4.isFooter, v3 = r4.includePreviousColSpan, x4 = r4.previousColSpans, R4 = r4.gridColumnStart, J2 = r4.gridColumnEnd, H4 = r4.resize, f3 = r4.role, Y3 = f3 === void 0 ? "columnheader" : f3, N4 = r4.children, B4 = r4.style, F4 = e$2(r4, h$2), S4 = react.useContext(b$1);
  !function(r5, g3) {
    var i3 = react.useContext(A$2);
    if (!i3)
      throw new Error("No Layout Context.");
    var I4 = i3.layout, d5 = i3.tableElementRef, u$12 = i3.tableMemoryRef;
    react.useLayoutEffect(function() {
      var e5 = u$12.current.dataColumns, c4 = u(d5).map(G$1), i4 = p$2(r5, e5), C2 = (i4 == null ? void 0 : i4.isHide) === !!g3;
      if (e5 != null && e5.length && !C2) {
        var a5 = c4.filter(function(e6) {
          return !e6.isHide;
        }).map(function(c5) {
          if (c5.isStiff || I4 != null && I4.horizontalScroll) {
            var l3 = p$2(c5.index, e5);
            return "".concat(l3.width || 2 * l3.minWidth, "px");
          }
          return "minmax(0px, 1fr)";
        }).join(" ");
        r$2(a5, d5, u$12), x$2(a5, I4);
        var s4 = u(d5).map(G$1);
        u$12.current.dataColumns = s4;
      }
    }, [r5, g3, I4, d5, u$12]);
  }(g2, m3);
  var z3 = X$1(g2, m3), Q3 = z3.cellRef, k3 = z3.resizeRef, D5 = R4 && J2, w4 = D5 ? J2 - R4 - 1 : 0, L3 = v3 ? R4 + x4 : R4, j4 = v3 ? J2 + x4 : J2;
  return jsx(react.Fragment, null, jsx(Z2, n$2({role: Y3, "data-table-library_th": "", "data-hide": !!m3, "data-resize-min-width": typeof H4 == "boolean" || (H4 == null ? void 0 : H4.minWidth) == null ? 75 : H4.minWidth, style: y$3(y$3({}, D5 ? {gridColumnStart: L3, gridColumnEnd: j4} : {}), B4), css: css(S4 == null ? void 0 : S4.BaseCell, " ", V3 ? S4 == null ? void 0 : S4.FooterCell : S4 == null ? void 0 : S4.HeaderCell, ";", ""), className: i$2("th", a4, {stiff: W3, hide: m3, resize: H4, "pin-left": Z$12, "pin-right": A3}), ref: Q3}, F4), jsx("div", null, N4), H4 && !m3 && jsx("div", {className: "resizer-area", ref: k3, css: m$2(H4).area}, jsx("span", {className: "resizer-handle", css: m$2(H4).handle}))), Array.from({length: w4}, function() {
    return jsx(Z2, {className: i$2("th", "hide", "colspan")});
  }));
};
var e$6;
var t$4;
!function(e5) {
  e5[e5.Prefix = 0] = "Prefix", e5[e5.Suffix = 1] = "Suffix";
}(e$6 || (e$6 = {})), function(e5) {
  e5[e5.Alternate = 0] = "Alternate", e5[e5.AlternateWithReset = 1] = "AlternateWithReset";
}(t$4 || (t$4 = {}));

// docs/snowpack/pkg/common/useTheme-76ff76fc-69e2cf05.js
var n2 = function(n4) {
  return n4.reduce(function(n5, r4) {
    return Object.keys(r4).forEach(function(c4) {
      n5[c4] || (n5[c4] = ""), n5[c4] = "\n        ".concat(n5[c4], "\n        ").concat(r4[c4], "\n      ");
    }), n5;
  }, {});
};
var r2 = function(r4) {
  return Array.isArray(r4) ? n2(r4) : r4;
};

// docs/snowpack/pkg/@table-library/react-table-library.js
var i2 = react.createContext(null);
var a2 = function(c4) {
  return c4.target.tagName === "svg" || c4.target.tagName === "path" || c4.target.tagName === "DIV" || c4.target.tagName === "SPAN" || c4.target.tagName === "TD";
};
var d2 = ["index", "className", "hide", "pinLeft", "pinRight", "stiff", "includePreviousColSpan", "previousColSpans", "gridColumnStart", "gridColumnEnd", "onClick", "children", "style"];
function r3(c4, g2) {
  var t4 = Object.keys(c4);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(c4);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(c4, g3).enumerable;
    })), t4.push.apply(t4, l3);
  }
  return t4;
}
function s2(c4) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var t4 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? r3(Object(t4), true).forEach(function(g3) {
      e$4(c4, g3, t4[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c4, Object.getOwnPropertyDescriptors(t4)) : r3(Object(t4)).forEach(function(g3) {
      Object.defineProperty(c4, g3, Object.getOwnPropertyDescriptor(t4, g3));
    });
  }
  return c4;
}
var A2 = function(C2) {
  C2.index;
  var i3 = C2.className, a4 = C2.hide, r4 = C2.pinLeft, A3 = C2.pinRight, u4 = C2.stiff, o4 = C2.includePreviousColSpan, m3 = C2.previousColSpans, G3 = C2.gridColumnStart, p3 = C2.gridColumnEnd, W3 = C2.onClick, N4 = C2.children, y4 = C2.style, x4 = e$2(C2, d2), H4 = react.useContext(b$1), Z3 = G3 && p3, J2 = Z3 ? p3 - G3 - 1 : 0, X3 = o4 ? G3 + m3 : G3, V3 = o4 ? p3 + m3 : p3;
  return jsx(react.Fragment, null, jsx(p$1, n$2({role: "gridcell", "data-table-library_td": "", style: s2(s2({}, Z3 ? {gridColumnStart: X3, gridColumnEnd: V3} : {}), y4), css: css(H4 == null ? void 0 : H4.BaseCell, " ", H4 == null ? void 0 : H4.Cell, ";", ""), className: i$2("td", i3, {stiff: u4, hide: a4, "pin-left": r4, "pin-right": A3}), onClick: W3}, x4), jsx("div", null, N4)), Array.from({length: J2}, function() {
    return jsx(p$1, {className: i$2("td", "hide", "colspan")});
  }));
};
var r$12 = react.createContext(null);
var s$12 = react.createContext(null);
var u2 = function() {
  var n4 = react.useState(false), o4 = a$2(n4, 2), r4 = o4[0], s4 = o4[1];
  return react.useEffect(function() {
    var e5 = function(e6) {
      e6.shiftKey ? s4(true) : r4 && s4(false);
    }, t4 = function() {
      r4 && s4(false);
    };
    return document && (document.addEventListener("keydown", e5), document.addEventListener("keyup", t4)), function() {
      document && (document.removeEventListener("keydown", e5), document.removeEventListener("keyup", t4));
    };
  }, [r4]), r4;
};
var a$12 = function() {
  return {select: react.useContext(r$12), tree: react.useContext(i2), sort: react.useContext(Z$1), pagination: react.useContext(s$12)};
};
var o2 = function(o4) {
  var i3 = o4.sort, t4 = o4.pagination, a4 = o4.tree;
  return function(o5) {
    var e5 = u$1(o5);
    return e5 = i3 ? i3.modifier(e5) : e5, e5 = t4 ? t4.modifier(e5) : e5, e5 = a4 ? a4.modifier(e5) : e5;
  };
};
var n3 = ["children"];
var o$12 = function(G3) {
  var o4 = G3.children, e5 = e$2(G3, n3), i3 = react.useContext(b$1), t4 = react.useContext(A$2);
  if (!t4)
    throw new Error("No Layout Context.");
  var u4 = t4.layout, X3 = u4 != null && u4.isDiv ? "div" : "tbody";
  return jsx(X3, n$2({css: css(i3 == null ? void 0 : i3.Body, " display:contents;", ""), "data-table-library_body": "", className: "tbody"}, e5), o4);
};
var e2 = ["isFooter", "children"];
var i$12 = function(n4) {
  var o4 = n4.isFooter, i3 = n4.children, t4 = e$2(n4, e2), u4 = react.useContext(b$1), X3 = react.useContext(A$2);
  if (!X3)
    throw new Error("No Layout Context.");
  var y4 = X3.layout, a4 = y4 != null && y4.isDiv ? "div" : o4 ? "tfoot" : "thead";
  return jsx(a4, n$2({role: "rowgroup", className: i$2({tfoot: o4, thead: !o4}), css: css("\n  display: contents;\n", " ", o4 ? u4 == null ? void 0 : u4.Footer : u4 == null ? void 0 : u4.Header, ";", "")}, t4), react.Children.map(i3, function(I4) {
    if (react.isValidElement(I4))
      return react.cloneElement(I4);
  }));
};
var x2 = react.createContext(null);
var B3 = ["data", "theme", "layout", "sort", "pagination", "select", "tree", "onInit", "className", "children"];
var v2 = {Table: "\n    height: 100%;\n  "};
var h2 = react.forwardRef(function(b$12, C2) {
  var e5 = b$12.data, n4 = b$12.theme, A3 = b$12.layout, X$12 = b$12.sort, y4 = b$12.pagination, s4 = b$12.select, Y3 = b$12.tree, V3 = b$12.onInit, h4 = V3 === void 0 ? function() {
  } : V3, H4 = b$12.className, F4 = H4 === void 0 ? "table" : H4, p3 = b$12.children, N4 = e$2(b$12, B3), R4 = function(I4) {
    var g2 = react.useRef(null);
    return I4 && (g2 = I4), g2;
  }(C2), S4 = function(I4) {
    var g2 = react.useRef(null);
    return g2.current || (g2.current = {onlyOnce: false, dataColumns: []}), g2;
  }(), f3 = o2({sort: X$12, pagination: y4, tree: Y3, select: s4})(e5.nodes), U4 = function(I4, g2) {
    var c4 = react.useState(false), l3 = a$2(c4, 2), b3 = l3[0], C3 = l3[1];
    return [b3, function(c5) {
      c5 && (b3 || (C3(true), g2.current = c5, I4(c5)));
    }];
  }(h4, R4), Q3 = a$2(U4, 2), j4 = Q3[0], L3 = Q3[1], z3 = u2(), k3 = [];
  A3 != null && A3.fixedHeader && (k3 = k3.concat(v2)), n4 && (k3 = k3.concat(n4));
  var w4, D5 = r2(k3), O4 = A3 != null && A3.isDiv ? "div" : "table";
  return jsx(O4, n$2({role: "grid", "data-table-library_table": "", css: css((w4 = {isShiftDown: z3}, "\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  overflow: auto;\n  position: relative;\n\n  border-collapse: collapse;\n\n  display: grid;\n\n  --data-table-library_grid-template-columns: '';\n  grid-template-columns: var(--data-table-library_grid-template-columns);\n\n  button * {\n    pointer-events: none;\n  }\n\n  ".concat(w4.isShiftDown ? "\n    user-select: none; /* standard syntax */\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\n    -moz-user-select: none; /* mozilla browsers */\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\n    -ms-user-select: none; /* IE10+ */\n    " : "", "\n  ")), " ", D5 == null ? void 0 : D5.Table, ";", ""), className: i$2(F4), ref: L3}, N4), j4 && jsx(x2.Provider, {value: e5}, jsx(b$1.Provider, {value: D5}, jsx(Z$1.Provider, {value: X$12}, jsx(r$12.Provider, {value: s4}, jsx(i2.Provider, {value: Y3}, jsx(s$12.Provider, {value: y4}, jsx(X2, {layout: A3, tableElementRef: R4, tableMemoryRef: S4}, p3 && p3(f3)))))))));
});
var H3 = function() {
  return "\n  display: contents;\n\n  ".concat(function() {
  }, "\n  background-color: #ffffff;\n");
};
var F3 = react.forwardRef(function(I4, c4) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var C2 = l3.layout, e5 = C2 != null && C2.isDiv ? "div" : "tr";
  return jsx(e5, n$2({css: css(H3(), ";", ""), ref: c4}, I4));
});
var p2 = react.forwardRef(function(I4, c4) {
  var l3 = react.useContext(A$2);
  if (!l3)
    throw new Error("No Layout Context.");
  var C2 = l3.layout, e5 = C2 != null && C2.isDiv ? "div" : "tr";
  return jsx(e5, n$2({css: css(H3(), ";", ""), ref: c4}, I4));
});
var N3 = function(I4) {
  return I4.type ? I4.type === react.Fragment : I4 === react.Fragment;
};
var R3 = function(I4, g2) {
  return react.Children.toArray(I4).reduce(function(I5, c4, l3) {
    return react.isValidElement(c4) ? l3 >= g2 ? I5 : c4.props.gridColumnStart || c4.props.gridColumnEnd ? I5 + c4.props.gridColumnEnd - c4.props.gridColumnStart - 1 : I5 : I5;
  }, 0);
};
var S3 = ["className", "role", "isFooter", "children"];
function f2(I4, g2) {
  var c4 = Object.keys(I4);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(I4);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(I4, g3).enumerable;
    })), c4.push.apply(c4, l3);
  }
  return c4;
}
function U3(I4) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var c4 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? f2(Object(c4), true).forEach(function(g3) {
      e$4(I4, g3, c4[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I4, Object.getOwnPropertyDescriptors(c4)) : f2(Object(c4)).forEach(function(g3) {
      Object.defineProperty(I4, g3, Object.getOwnPropertyDescriptor(c4, g3));
    });
  }
  return I4;
}
var Q2 = function(l3) {
  var t4, u4 = l3.className, X3 = l3.role, W3 = X3 === void 0 ? "rowheader" : X3, J2 = l3.isFooter, a4 = l3.children, y4 = e$2(l3, S3), m3 = react.useContext(b$1), s4 = react.useRef(null);
  return t4 = react.useContext(A$2), react.useLayoutEffect(function() {
    var I4;
    if (!t4)
      throw new Error("No Layout Context.");
    var g2 = t4.layout, c4 = t4.tableElementRef, l4 = t4.tableMemoryRef, b3 = u(c4).map(G$1);
    if ((I4 = l4.current) === null || I4 === void 0 || !I4.onlyOnce)
      if (l4.current.onlyOnce = true, g2 != null && g2.resizedLayout) {
        var Z3 = g2 == null ? void 0 : g2.resizedLayout;
        r$2(Z3, c4, l4);
      } else if (g2 != null && g2.custom)
        d$1(c4, l4);
      else {
        var d5 = b3.filter(function(I5) {
          return !I5.isHide;
        }).map(function() {
          return "minmax(0px, 1fr)";
        }).join(" ");
        r$2(d5, c4, l4);
      }
  }, [t4]), jsx(p2, n$2({role: W3, "data-table-library_tr-header": "", css: css(m3 == null ? void 0 : m3.BaseRow, " ", J2 ? m3 == null ? void 0 : m3.FooterRow : m3 == null ? void 0 : m3.HeaderRow, ";", ""), className: i$2("tr", u4, {"tr-footer": J2, "tr-header": !J2}), ref: s4}, y4), react.Children.toArray(a4).filter(Boolean).map(function(I4, g2) {
    if (react.isValidElement(I4)) {
      var c4 = {};
      return N3(I4) || (c4 = U3(U3({}, c4), {}, {index: g2, previousColSpans: R3(a4, g2)})), react.cloneElement(I4, c4);
    }
  }));
};
var j2 = function() {
};
var L2 = function(I4, g2, c4, l3) {
  !function(I5) {
    var g3 = I5.onSingleClick, c5 = I5.onDoubleClick, l4 = I5.ref, b3 = react.useRef(0);
    react.useEffect(function() {
      var I6 = l4.current, C2 = function(I7) {
        c5 && (b3.current === 0 && g3(I7), b3.current += 1, setTimeout(function() {
          b3.current === 2 && c5(I7), b3.current = 0;
        }, 300));
      };
      return I6 == null || I6.addEventListener("click", C2), function() {
        I6 == null || I6.removeEventListener("click", C2);
      };
    });
  }({onSingleClick: g2 ? function(I5) {
    return g2(l3, I5);
  } : j2, onDoubleClick: c4 ? function(I5) {
    return c4(l3, I5);
  } : null, ref: I4});
};
var z2 = ["item", "className", "disabled", "onClick", "onDoubleClick", "children"];
function k2(I4, g2) {
  var c4 = Object.keys(I4);
  if (Object.getOwnPropertySymbols) {
    var l3 = Object.getOwnPropertySymbols(I4);
    g2 && (l3 = l3.filter(function(g3) {
      return Object.getOwnPropertyDescriptor(I4, g3).enumerable;
    })), c4.push.apply(c4, l3);
  }
  return c4;
}
function w2(I4) {
  for (var g2 = 1; g2 < arguments.length; g2++) {
    var c4 = arguments[g2] != null ? arguments[g2] : {};
    g2 % 2 ? k2(Object(c4), true).forEach(function(g3) {
      e$4(I4, g3, c4[g3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I4, Object.getOwnPropertyDescriptors(c4)) : k2(Object(c4)).forEach(function(g3) {
      Object.defineProperty(I4, g3, Object.getOwnPropertyDescriptor(c4, g3));
    });
  }
  return I4;
}
var D3 = function(l3) {
  var b$12 = l3.item, C2 = l3.className, e5 = l3.disabled, n4 = l3.onClick, A3 = l3.onDoubleClick, t4 = l3.children, u4 = e$2(l3, z2), X3 = function(I4, g2) {
    return Object.values(I4).filter(Boolean).filter(function(I5) {
      return I5 == null ? void 0 : I5.hasOwnProperty("_getRowProps");
    }).map(function(c4) {
      return c4._getRowProps(g2, I4);
    });
  }(a$12(), l3), W3 = react.useContext(b$1), J2 = function(I4, g2) {
    var c4 = I4.reduce(function(I5, g3) {
      var c5 = g3.theme, l4 = g3.className, b3 = g3.onClick, C3 = "\n        ".concat(I5.themeByFeature, "\n        ").concat(c5, "\n      "), e6 = i$2(I5.classNamesByFeature, l4), n5 = I5.clickable || !!b3;
      return w2(w2({}, I5), {}, {themeByFeature: C3, classNamesByFeature: e6, clickable: n5, onClickByFeature: function(g4, c6) {
        b3(g4, c6), I5.onClickByFeature(g4, c6);
      }});
    }, {themeByFeature: "", classNamesByFeature: "", clickable: !!g2, onClickByFeature: function(I5, c5) {
      g2 && a2(c5) && g2(I5, c5);
    }});
    return {themeByFeature: c4.themeByFeature, classNamesByFeature: c4.classNamesByFeature, clickable: c4.clickable, onClickByFeature: c4.onClickByFeature};
  }(X3, n4), a$23 = J2.themeByFeature, m3 = J2.classNamesByFeature, o4 = J2.clickable, r4 = J2.onClickByFeature, Y3 = react.useRef(null);
  return L2(Y3, r4, A3, b$12), jsx(F3, n$2({role: "row", "data-table-library_tr-body": "", onClick: A3 ? function() {
  } : function(I4) {
    return r4(b$12, I4);
  }, css: css(a$23, " ", W3 == null ? void 0 : W3.BaseRow, " ", W3 == null ? void 0 : W3.Row, ";", ""), className: i$2("tr", "tr-body", m3, C2, {disabled: e5, clickable: o4 || !!A3}), ref: Y3}, u4), react.Children.toArray(t4).filter(Boolean).map(function(I4, g2) {
    if (react.isValidElement(I4)) {
      var c4 = {};
      return N3(I4) || (c4 = w2(w2({}, c4), {}, {index: g2, previousColSpans: R3(t4, g2)})), react.cloneElement(I4, c4);
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
var t3 = function(n4, t4, u4) {
  react.useEffect(function() {
    t4 && (t4.current[n4] = {state: u4});
  }, [t4, n4, u4]);
};
var u3 = function(t4, u4, e5, c4, f3) {
  var o4 = react.useReducer(t4, u4), i3 = a$2(o4, 2), s4 = i3[0], a$14 = i3[1], l3 = react.useRef(null);
  return react.useEffect(function() {
    l3.current && (c4.forEach(function(r4) {
      return r4(l3.current, s4, f3 ? f3.current : void 0);
    }), l3.current = null);
  }, [f3, c4, s4]), [s4, function(r4) {
    e5.forEach(function(n4) {
      return n4(r4, s4, f3 ? f3.current : void 0);
    }), l3.current = r4, a$14(r4);
  }];
};
var e3 = function(r4, n4) {
  return JSON.stringify(r4) === JSON.stringify(n4);
};
var c2 = function(n4, t4, u4) {
  var c4 = react.useRef(n4), f3 = react.useRef(n4);
  react.useEffect(function() {
    e3(t4, f3.current) && (e3(n4, c4.current) || e3(n4, t4) || u4()), c4.current = n4, f3.current = t4;
  }, [t4, u4, n4]);
};
var o3 = function(i3) {
  var t4 = i3.margin;
  return css("display:flex;align-items:center;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:100%;height:100%;&.narrow{width:auto;}&.active{font-weight:bold;}span{display:flex;align-items:center;justify-content:center;}&.prefix{margin-right:", t4 || 0, ";}&.suffix{margin-left:", t4 || 0, ";}div{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}div:after{display:block;content:attr(title);font-weight:bold;height:0;overflow:hidden;visibility:hidden;}");
};
var c$12 = ["margin"];
var I3 = react.forwardRef(function(g2, n$12) {
  var I4 = g2.margin, d5 = e$2(g2, c$12);
  return jsx("button", n$2({type: "button", ref: n$12}, d5, {css: o3({margin: I4})}));
});
var d3 = function(i3) {
  var t4 = i3.width, g2 = i3.height, n4 = i3.viewBox, o4 = i3.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-down", "data-name": "svg-icon-chevron-single-down", "data-testid": "svg-icon-chevron-single-down", xmlns: "http://www.w3.org/2000/svg", width: t4 || "36rem", height: g2 || "36rem", viewBox: n4 || "0 0 36 36", strokeWidth: o4 || "0rem"}, jsx("polygon", {points: "0 15 0 12 18 21 36 12 36 15 18 24 0 15"}));
};
function y3(e5, r4) {
  var t4 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var o4 = Object.getOwnPropertySymbols(e5);
    r4 && (o4 = o4.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e5, r5).enumerable;
    })), t4.push.apply(t4, o4);
  }
  return t4;
}
function m2(e5) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t4 = arguments[r4] != null ? arguments[r4] : {};
    r4 % 2 ? y3(Object(t4), true).forEach(function(r5) {
      e$4(e5, r5, t4[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(t4)) : y3(Object(t4)).forEach(function(r5) {
      Object.defineProperty(e5, r5, Object.getOwnPropertyDescriptor(t4, r5));
    });
  }
  return e5;
}
var h3 = function(r4) {
  var t4 = r4.sort, n4 = r4.sortKey, s4 = r4.sortIcon, a4 = s4 === void 0 ? {} : s4, u4 = r4.children, p3 = t4.state, f3 = t4.fns, v3 = m2(m2({}, t4.options.sortIcon), a4), d5 = v3.position === e$6.Prefix, g2 = v3.position === e$6.Suffix, y4 = function(e5, r5, t5, n5, s5, i3) {
    var c4 = {height: "".concat(t5), width: "".concat(t5)};
    return e5.sortKey === r5 && e5.reverse ? i3 ? react.cloneElement(i3, m2({}, c4)) : null : e5.sortKey !== r5 || e5.reverse ? n5 ? react.cloneElement(n5, m2({}, c4)) : null : s5 ? react.cloneElement(s5, m2({}, c4)) : null;
  }(p3, n4, v3.size, v3.iconDefault, v3.iconUp, v3.iconDown);
  return jsx(I3, {className: i$2({active: p3.sortKey === n4}), onClick: function() {
    return f3.onToggleSort({sortKey: n4});
  }}, d5 && y4 && jsx("span", {style: {marginRight: v3.margin}}, y4), jsx("div", {title: typeof u4 == "string" ? u4 : ""}, u4), g2 && y4 && jsx("span", {style: {marginLeft: v3.margin}}, y4));
};
var w3 = ["sortKey", "sortIcon", "children"];
var O3 = react.memo(function(e5) {
  var r4 = e5.sortKey, i3 = e5.sortIcon, a4 = i3 === void 0 ? {} : i3, u4 = e5.children, l3 = e$2(e5, w3), p3 = react.useContext(Z$1);
  if (!p3)
    throw new Error("No Sort Context. No return value from useSort provided to Table component.");
  return jsx(v$1, l3, jsx(h3, {sort: p3, sortKey: r4, sortIcon: a4}, u4));
});
function b2(e5, r4) {
  var t4 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var o4 = Object.getOwnPropertySymbols(e5);
    r4 && (o4 = o4.filter(function(r5) {
      return Object.getOwnPropertyDescriptor(e5, r5).enumerable;
    })), t4.push.apply(t4, o4);
  }
  return t4;
}
function j3(e5) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t4 = arguments[r4] != null ? arguments[r4] : {};
    r4 % 2 ? b2(Object(t4), true).forEach(function(r5) {
      e$4(e5, r5, t4[r5]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(t4)) : b2(Object(t4)).forEach(function(r5) {
      Object.defineProperty(e5, r5, Object.getOwnPropertyDescriptor(t4, r5));
    });
  }
  return e5;
}
var P3 = function(e5, t4) {
  switch (t4.type) {
    case "TOGGLE_SORT":
      return function(e6, t5) {
        var o4 = t5.payload.value.sortKey === e6.sortKey, n4 = e6.reverse;
        if (o4 && n4 && t5.payload.options.sortToggleType === t$4.AlternateWithReset)
          return {sortKey: "NONE", reverse: false};
        var s4 = o4 && !n4;
        return j3(j3({}, t5.payload.value), {}, {reverse: s4});
      }(e5, t4);
    case "SET":
      return function(e6, r4) {
        return j3(j3({}, e6), r4.payload);
      }(e5, t4);
    default:
      throw new Error();
  }
};
var T3 = {sortKey: "NONE", reverse: false};
var x3 = {position: e$6.Suffix, margin: "4px", size: "14px", iconDefault: jsx(function(e5) {
  var r4 = e5.width, t4 = e5.height, o4 = e5.viewBox, n4 = e5.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-up-down", "data-name": "svg-icon-chevron-single-up-down", "data-testid": "svg-icon-chevron-single-up-down", xmlns: "http://www.w3.org/2000/svg", width: r4 || "36rem", height: t4 || "36rem", viewBox: o4 || "0 0 36 36", strokeWidth: n4 || "0rem"}, jsx("polygon", {points: "36 12 36 15 18 6 0 15 0 12 18 3 36 12"}), jsx("polygon", {points: "0 24 0 21 18 30 36 21 36 24 18 33 0 24"}));
}, null), iconUp: jsx(function(e5) {
  var r4 = e5.width, t4 = e5.height, o4 = e5.viewBox, n4 = e5.strokeWidth;
  return jsx("svg", {id: "svg-icon-chevron-single-up", "data-name": "svg-icon-chevron-single-up", "data-testid": "svg-icon-chevron-single-up", xmlns: "http://www.w3.org/2000/svg", width: r4 || "36rem", height: t4 || "36rem", viewBox: o4 || "0 0 36 36", strokeWidth: n4 || "0rem"}, jsx("polygon", {points: "36 21 36 24 18 15 0 24 0 21 18 12 36 21"}));
}, null), iconDown: jsx(d3, null)};
var E2 = {isServer: false, sortToggleType: t$4.Alternate, sortIcon: x3, isRecursive: true};
var D4 = function(e5, r4, t$12, n4) {
  var s4 = r4 != null && r4.state ? j3(j3({}, T3), r4.state) : j3({}, T3), i3 = r4 != null && r4.onChange ? r4.onChange : function() {
  }, c$13 = u3(P3, s4, [], [i3], n4), a$14 = a$2(c$13, 2), u$12 = a$14[0], l3 = a$14[1], p3 = react.useCallback(function(e6) {
    return l3({type: "TOGGLE_SORT", payload: {value: e6, options: t$12}});
  }, [t$12, l3]);
  c2(s4, u$12, function() {
    return l3({type: "SET", payload: s4});
  });
  var y4 = react.useCallback(function(e6, r5, t4) {
    var o4 = r5[u$12.sortKey] || function(e7) {
      return e7;
    };
    return (u$12.reverse ? function(e7) {
      return o4(e7).reverse();
    } : o4)(e6).reduce(function(e7, o5) {
      return t4 && o5.nodes ? e7.concat(j3(j3({}, o5), {}, {nodes: y4(o5.nodes, r5, t4)})) : e7.concat(o5);
    }, []);
  }, [u$12]), m3 = react.useMemo(function() {
    return {onToggleSort: p3};
  }, [p3]);
  t3("sort", n4, u$12);
  var h4 = j3(j3(j3({}, E2), t$12), {}, {sortIcon: j3(j3({}, x3), t$12 ? t$12.sortIcon : {})}), w4 = j3(j3({}, u$12), {}, {sortFn: y4});
  return {state: w4, fns: m3, options: h4, modifier: function(e6) {
    return h4.isServer ? e6 : w4.sortFn(e6, h4.sortFns, h4.isRecursive);
  }, components: {HeaderCellSort: O3}};
};

// docs/snowpack/pkg/@table-library/react-table-library/baseline.js
var e4 = "#141414";
var a3 = "#757575";
var s3 = "#9e9e9e";
var d4 = "#dde2eb";
var a$13 = {Table: "", Header: "", Body: "", BaseRow: "\n    font-size: 16px;\n  ", HeaderRow: "\n    color: ".concat(e4, ";\n  "), Row: "\n    color: ".concat(a3, ";\n\n    &.disabled {\n      color: ").concat(s3, ";\n    }\n\n    &:hover {\n      color: ").concat(e4, ";\n    }\n\n    &:not(:last-of-type) > .td {\n      border-bottom: 1px solid ").concat(d4, ";\n    }\n  "), BaseCell: "\n    padding: 6px 12px;\n  ", HeaderCell: "\n    font-weight: bold;\n    border-bottom: 1px solid ".concat(d4, ";\n\n    .resizer-handle {\n      background-color: ").concat(d4, ";\n    }\n\n    svg,\n    path {\n      fill: currentColor;\n    }\n  "), Cell: "\n    &:focus {\n      outline: dotted;\n      outline-width: 1px;\n      outline-offset: -1px;\n    }\n  "};
var c3 = function() {
  return n2([a$13]);
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
  var _d = function d5() {
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
  var _s = function s4() {
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
  var flags = {d: function d5() {
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
  }, s: function s4() {
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
  var y4 = _ref.y, m3 = _ref.m, d5 = _ref.d, _2 = _ref._, dayName = _ref.dayName, _ref$short = _ref["short"], _short = _ref$short === void 0 ? false : _ref$short;
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
  if (today_y() === y4 && today_m() === m3 && today_d() === d5) {
    return _short ? "Tdy" : "Today";
  } else if (yesterday_y() === y4 && yesterday_m() === m3 && yesterday_d() === d5) {
    return _short ? "Ysd" : "Yesterday";
  } else if (tomorrow_y() === y4 && tomorrow_m() === m3 && tomorrow_d() === d5) {
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
var RequestsByUserTotals = ({
  data
}) => {
  const theme = r2(c3());
  console.log("rendering RequestsByUserTotals");
  if (!data) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
  console.log("creating RequestsByUserTotalsTable");
  const sortOptions = {
    sortFns: {
      REQUESTER: (array) => array.sort((a4, b3) => a4.requester.localeCompare(b3.requester)),
      FIRST_DATE: (array) => array.sort((a4, b3) => new Date(a4.firstDate).getTime() - new Date(b3.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a4, b3) => new Date(a4.lastDate).getTime() - new Date(b3.lastDate).getTime()),
      TOTAL_PLAYED: (array) => array.sort((a4, b3) => a4.total - b3.total)
    }
  };
  const sort = D4(data, {state: {sortKey: "TOTAL_PLAYED", reverse: true}}, sortOptions);
  return /* @__PURE__ */ react.createElement(h2, {
    data,
    sort,
    theme
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
  data,
  showUser
}) => {
  const theme = r2(c3());
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a4, b3) => a4.song.localeCompare(b3.song)),
      REQUESTER: (array) => array.sort((a4, b3) => a4.requester.localeCompare(b3.requester)),
      PLAY_DATE: (array) => array.sort((a4, b3) => new Date(a4.firstDate).getTime() - new Date(b3.firstDate).getTime())
    }
  };
  const sort = D4(data, {state: {sortKey: "PLAY_DATE"}}, sortOptions);
  console.log("rendering RequestsByUser");
  return /* @__PURE__ */ react.createElement("div", {
    className: "paragraph"
  }, /* @__PURE__ */ react.createElement(h2, {
    data,
    sort,
    theme
  }, (tableList) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(i$12, null, /* @__PURE__ */ react.createElement(Q2, null, showUser && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(O3, {
    sortKey: "REQUESTER"
  }, "Name")), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "SONG_NAME"
  }, "Song Name"), /* @__PURE__ */ react.createElement(v$1, null, "Song URI"), /* @__PURE__ */ react.createElement(O3, {
    sortKey: "PLAY_DATE"
  }, "Played"))), /* @__PURE__ */ react.createElement(o$12, null, tableList.map((item) => /* @__PURE__ */ react.createElement(D3, {
    key: item.id,
    item
  }, showUser && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(A2, null, item.requester)), /* @__PURE__ */ react.createElement(A2, null, item.song), /* @__PURE__ */ react.createElement(A2, null, /* @__PURE__ */ react.createElement("div", {
    className: "wrap"
  }, item.uri)), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.playedAt), "yyyy-mm-dd HH:MM"))))))));
};
var RequestsByUser_default = RequestsByUser;

// docs/dist/utils.js
var parseUri = (req) => {
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
  return uri;
};
var requestToDefaultTableRow = (req) => {
  const info = req.requests[0];
  const name = info && info.name || "anonymous";
  const song = parseSong(req);
  const uri = parseUri(req);
  return {
    id: req.id,
    uri,
    createdAt: req.createdAt,
    playedAt: req.playedAt,
    song,
    requester: name
  };
};
var parseSong = (req) => {
  let song;
  if (req.song) {
    song = `${req.song.artist} - ${req.song.title}`;
  } else {
    if (req.nonlistSong) {
      if (req.note && req.note.includes("spotify.com")) {
        song = req.note.split("?")[0];
      } else if (req.nonlistSong.includes("spotify.com")) {
        song = req.nonlistSong.split("?")[0];
      } else {
        song = req.nonlistSong;
      }
    } else {
      song = req.note;
    }
  }
  return song;
};

// docs/dist/Results/RequestsBySong/AggregateBySong/index.js
var AggregateBySong = ({
  data
}) => {
  const theme = r2(c3());
  console.log(`data: ${data.nodes.length}`);
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a4, b3) => a4.actualSong.localeCompare(b3.actualSong)),
      FIRST_DATE: (array) => array.sort((a4, b3) => new Date(a4.firstDate).getTime() - new Date(b3.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a4, b3) => new Date(a4.lastDate).getTime() - new Date(b3.lastDate).getTime()),
      TOTAL_PLAYED: (array) => array.sort((a4, b3) => a4.total - b3.total)
    }
  };
  const sort = D4(data, {state: {sortKey: "TOTAL_PLAYED", reverse: true}}, sortOptions);
  return /* @__PURE__ */ react.createElement("div", {
    className: "paragraph"
  }, /* @__PURE__ */ react.createElement(h2, {
    data,
    sort,
    theme
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
  }, /* @__PURE__ */ react.createElement(A2, null, /* @__PURE__ */ react.createElement("div", {
    className: "wrap"
  }, item.actualSong)), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.firstDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, dateformat_default(new Date(item.lastDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ react.createElement(A2, null, item.total)))))));
};
var AggregateBySong_default = AggregateBySong;

// docs/dist/Results/RequestsBySong/index.js
var RequestsBySong = ({
  data,
  songName,
  aggregate
}) => {
  const [crunched, setCrunched] = useState(null);
  useEffect(() => {
    console.log(`effect called with songName ${songName}`);
    const crunched2 = aggregate ? crunchAggregated() : crunch();
    setCrunched({nodes: Array.from(crunched2.values())});
  }, [songName, aggregate]);
  const crunch = () => {
    return data.map((req) => {
      const parsed = requestToDefaultTableRow(req);
      if (parsed.song.toLowerCase().includes(songName)) {
        return parsed;
      }
      return null;
    }).filter((x4) => x4);
  };
  const crunchAggregated = () => {
    console.log(`crunching aggregated with songName ${songName}`);
    return data.reduce((map, req) => {
      if (!req.song && !req.nonlistSong) {
        console.log(`req song is null! ${JSON.stringify(req)}`);
        return map;
      }
      const song = parseSong(req);
      let lowercaseSong = song.toLowerCase();
      if (songName && !lowercaseSong.includes(songName.toLowerCase())) {
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
  };
  if (!data) {
    return /* @__PURE__ */ react.createElement("div", {
      className: "paragraph"
    }, "missing data");
  }
  if (!crunched) {
    return /* @__PURE__ */ react.createElement("div", {
      className: "paragraph"
    }, "crunching");
  }
  if (aggregate) {
    return /* @__PURE__ */ react.createElement(AggregateBySong_default, {
      data: crunched
    });
  } else {
    return /* @__PURE__ */ react.createElement(RequestsByUser_default, {
      data: crunched,
      showUser: true
    });
  }
};
var RequestsBySong_default = RequestsBySong;

// docs/dist/Results/index.js
var Results = ({
  data
}) => {
  const [crunched, setCrunched] = useState(null);
  const [byUserTotalsTableRows, setByUserTotalsTableRows] = useState([]);
  const requesterName = useRef(null);
  const [actualRequesterName, setActualRequesterName] = useState(null);
  const [showFilterByUser, setShowFilterByUser] = useState(false);
  const [showFilterBySongName, setShowFilterBySongName] = useState(false);
  const songName = useRef(null);
  const [actualSongName, setActualSongName] = useState(null);
  const [aggregateSongResults, setAggregateSongResults] = useState(false);
  useEffect(() => {
    crunchData();
  }, []);
  const crunchData = () => {
    console.log(data);
    const reqsByUser = new Map();
    if (!data) {
      return;
    }
    data.forEach((req) => {
      const parsedReq = requestToDefaultTableRow(req);
      let name = parsedReq.requester;
      const list = reqsByUser.has(name.toLowerCase()) ? reqsByUser.get(name.toLowerCase()) : [];
      list.push(parsedReq);
      reqsByUser.set(name.toLowerCase(), list);
    });
    const byUserTotalsTableRows2 = Array.from(reqsByUser, ([key, userReqs]) => {
      return {
        id: userReqs[0].id,
        requester: userReqs[0].requester,
        firstDate: userReqs[userReqs.length - 1].playedAt,
        lastDate: userReqs[0].playedAt,
        total: userReqs.length
      };
    });
    setCrunched(reqsByUser);
    setByUserTotalsTableRows(byUserTotalsTableRows2);
  };
  const requestsByUserTotals = () => {
    if (!data || !byUserTotalsTableRows) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "fetching & crunching data");
    }
    return /* @__PURE__ */ react.createElement(RequestsByUserTotals_default, {
      data: {nodes: byUserTotalsTableRows}
    });
  };
  const filterByUserTable = () => {
    if (!data || !crunched || !requesterName || !showFilterByUser) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    const byUser = crunched.get(actualRequesterName.toLowerCase());
    if (!byUser) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    console.log(`getting to do byUser`);
    return /* @__PURE__ */ react.createElement(RequestsByUser_default, {
      data: {nodes: byUser}
    });
  };
  const filterBySongNameTable = () => {
    if (!data || !crunched || !aggregateSongResults && !actualSongName || !showFilterBySongName) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    return /* @__PURE__ */ react.createElement(RequestsBySong_default, {
      data,
      songName: actualSongName,
      aggregate: aggregateSongResults
    });
  };
  if (!crunched) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Crunching data...");
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, " Total: ", crunched.size, " requesters"), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("h5", null, "User leaderboard")), /* @__PURE__ */ react.createElement("div", null, requestsByUserTotals()), /* @__PURE__ */ react.createElement("div", null, " "), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", {
    className: "segment"
  }, /* @__PURE__ */ react.createElement("input", {
    type: "text",
    placeholder: "Requests by user",
    onChange: (e5) => {
      requesterName.current = e5.target.value;
    }
  }), /* @__PURE__ */ react.createElement("button", {
    onClick: () => {
      setShowFilterByUser(true);
      setActualRequesterName(requesterName.current);
    }
  }, "search"), filterByUserTable()), /* @__PURE__ */ react.createElement("div", {
    className: "segment"
  }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("input", {
    type: "text",
    placeholder: "Requests by song name",
    onChange: (e5) => {
      songName.current = e5.target.value;
    }
  }), /* @__PURE__ */ react.createElement("input", {
    type: "checkbox",
    onInput: (e5) => {
      setAggregateSongResults(e5.target.checked);
    }
  }), " aggregate results"), /* @__PURE__ */ react.createElement("button", {
    onClick: (e5) => {
      setShowFilterBySongName(true);
      setActualSongName(songName.current);
    }
  }, "search by song name"), filterBySongNameTable())));
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
    __publicField(this, "updateUsername", (e5) => {
      this.setState({username: e5.target.value});
    });
  }
  componentDidMount() {
    this.setState({initialized: true});
  }
  render() {
    if (!this.state?.initialized) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", {
      id: "search"
    }, /* @__PURE__ */ react.createElement("input", {
      type: "text",
      placeholder: "Streamer name",
      onChange: (e5) => {
        this.updateUsername(e5);
      }
    }), /* @__PURE__ */ react.createElement("button", {
      onClick: (e5) => {
        this.loadUserData(e5);
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
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement("div", {
  className: "main"
}, /* @__PURE__ */ react.createElement("h1", null, "VERY NIFTY STREAMER SONG LIST HISTORY BROWSING TOOL"), /* @__PURE__ */ react.createElement("h4", null, "coded (poorly) by pirate_patch"), /* @__PURE__ */ react.createElement("h5", null, "version 0.01: search by song name included"), /* @__PURE__ */ react.createElement(Main_default, null))), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
