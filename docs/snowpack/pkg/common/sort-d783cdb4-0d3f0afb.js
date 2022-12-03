import { R as React, r as react } from './index-448fcd18.js';
import { c as createCommonjsModule } from './_commonjsHelpers-79ede638.js';

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
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

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
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
function m(e2, r2) {
  return C(e2, 0) ^ 45 ? (((r2 << 2 ^ C(e2, 0)) << 2 ^ C(e2, 1)) << 2 ^ C(e2, 2)) << 2 ^ C(e2, 3) : 0;
}
function x(e2) {
  return e2.trim();
}
function y(e2, r2) {
  return (e2 = r2.exec(e2)) ? e2[0] : e2;
}
function j(e2, r2, a2) {
  return e2.replace(r2, a2);
}
function z(e2, r2) {
  return e2.indexOf(r2);
}
function C(e2, r2) {
  return e2.charCodeAt(r2) | 0;
}
function O(e2, r2, a2) {
  return e2.slice(r2, a2);
}
function A(e2) {
  return e2.length;
}
function M(e2) {
  return e2.length;
}
function S(e2, r2) {
  return r2.push(e2), e2;
}
function q(e2, r2) {
  return e2.map(r2).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e2, r2, a2, n2, c2, s2, t2) {
  return {value: e2, root: r2, parent: a2, type: n2, props: c2, children: s2, line: B, column: D, length: t2, return: ""};
}
function J(e2, r2) {
  return g(I("", null, null, "", null, null, 0), e2, {length: -e2.length}, r2);
}
function K() {
  return G;
}
function L() {
  G = F > 0 ? C(H, --F) : 0;
  if (D--, G === 10)
    D = 1, B--;
  return G;
}
function N() {
  G = F < E ? C(H, F++) : 0;
  if (D++, G === 10)
    D = 1, B++;
  return G;
}
function P() {
  return C(H, F);
}
function Q() {
  return F;
}
function R(e2, r2) {
  return O(H, e2, r2);
}
function T(e2) {
  switch (e2) {
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
function U(e2) {
  return B = D = 1, E = A(H = e2), F = 0, [];
}
function V(e2) {
  return H = "", e2;
}
function W(e2) {
  return x(R(F - 1, ee(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Y(e2) {
  while (G = P())
    if (G < 33)
      N();
    else
      break;
  return T(e2) > 2 || T(G) > 3 ? "" : " ";
}
function _(e2, r2) {
  while (--r2 && N())
    if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97)
      break;
  return R(e2, Q() + (r2 < 6 && P() == 32 && N() == 32));
}
function ee(e2) {
  while (N())
    switch (G) {
      case e2:
        return F;
      case 34:
      case 39:
        if (e2 !== 34 && e2 !== 39)
          ee(G);
        break;
      case 40:
        if (e2 === 41)
          ee(e2);
        break;
      case 92:
        N();
        break;
    }
  return F;
}
function re(e2, r2) {
  while (N())
    if (e2 + G === 47 + 10)
      break;
    else if (e2 + G === 42 + 42 && P() === 47)
      break;
  return "/*" + R(r2, F - 1) + "*" + k(e2 === 47 ? e2 : N());
}
function ae(e2) {
  while (!T(P()))
    N();
  return R(e2, F);
}
function ne(e2) {
  return V(ce("", null, null, null, [""], e2 = U(e2), 0, [0], e2));
}
function ce(e2, r2, a2, n2, c2, s2, t2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l2 = t2;
  var v2 = 0;
  var p2 = 0;
  var h2 = 0;
  var b2 = 1;
  var w2 = 1;
  var d2 = 1;
  var $2 = 0;
  var g2 = "";
  var m2 = c2;
  var x2 = s2;
  var y2 = n2;
  var O2 = g2;
  while (w2)
    switch (h2 = $2, $2 = N()) {
      case 40:
        if (h2 != 108 && C(O2, l2 - 1) == 58) {
          if (z(O2 += j(W($2), "&", "&\f"), "&\f") != -1)
            d2 = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        O2 += W($2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O2 += Y(h2);
        break;
      case 92:
        O2 += _(Q() - 1, 7);
        continue;
      case 47:
        switch (P()) {
          case 42:
          case 47:
            S(te(re(N(), Q()), r2, a2), i2);
            break;
          default:
            O2 += "/";
        }
        break;
      case 123 * b2:
        u2[f2++] = A(O2) * d2;
      case 125 * b2:
      case 59:
      case 0:
        switch ($2) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o2:
            if (p2 > 0 && A(O2) - l2)
              S(p2 > 32 ? ue(O2 + ";", n2, a2, l2 - 1) : ue(j(O2, " ", "") + ";", n2, a2, l2 - 2), i2);
            break;
          case 59:
            O2 += ";";
          default:
            S(y2 = se(O2, r2, a2, f2, o2, c2, u2, g2, m2 = [], x2 = [], l2), s2);
            if ($2 === 123)
              if (o2 === 0)
                ce(O2, r2, y2, y2, m2, s2, l2, u2, x2);
              else
                switch (v2 === 99 && C(O2, 3) === 110 ? 100 : v2) {
                  case 100:
                  case 109:
                  case 115:
                    ce(e2, y2, y2, n2 && S(se(e2, y2, y2, 0, 0, c2, u2, g2, c2, m2 = [], l2), x2), c2, x2, l2, u2, n2 ? m2 : x2);
                    break;
                  default:
                    ce(O2, y2, y2, y2, [""], x2, 0, u2, x2);
                }
        }
        f2 = o2 = p2 = 0, b2 = d2 = 1, g2 = O2 = "", l2 = t2;
        break;
      case 58:
        l2 = 1 + A(O2), p2 = h2;
      default:
        if (b2 < 1) {
          if ($2 == 123)
            --b2;
          else if ($2 == 125 && b2++ == 0 && L() == 125)
            continue;
        }
        switch (O2 += k($2), $2 * b2) {
          case 38:
            d2 = o2 > 0 ? 1 : (O2 += "\f", -1);
            break;
          case 44:
            u2[f2++] = (A(O2) - 1) * d2, d2 = 1;
            break;
          case 64:
            if (P() === 45)
              O2 += W(N());
            v2 = P(), o2 = l2 = A(g2 = O2 += ae(Q())), $2++;
            break;
          case 45:
            if (h2 === 45 && A(O2) == 2)
              b2 = 0;
        }
    }
  return s2;
}
function se(e2, r2, a2, n2, s2, t2, u2, i2, f2, o2, l2) {
  var v2 = s2 - 1;
  var p2 = s2 === 0 ? t2 : [""];
  var h2 = M(p2);
  for (var b2 = 0, w2 = 0, d2 = 0; b2 < n2; ++b2)
    for (var k2 = 0, g2 = O(e2, v2 + 1, v2 = $(w2 = u2[b2])), m2 = e2; k2 < h2; ++k2)
      if (m2 = x(w2 > 0 ? p2[k2] + " " + g2 : j(g2, /&\f/g, p2[k2])))
        f2[d2++] = m2;
  return I(e2, r2, a2, s2 === 0 ? c : i2, f2, o2, l2);
}
function te(e2, r2, a2) {
  return I(e2, r2, a2, n, k(K()), O(e2, 2, -2), 0);
}
function ue(e2, r2, a2, n2) {
  return I(e2, r2, a2, s, O(e2, 0, n2), O(e2, n2 + 1, -1), n2);
}
function fe(e2, r2) {
  var a2 = "";
  var n2 = M(e2);
  for (var c2 = 0; c2 < n2; c2++)
    a2 += r2(e2[c2], c2, e2, r2) || "";
  return a2;
}
function oe(e2, r2, a2, t2) {
  switch (e2.type) {
    case i:
    case s:
      return e2.return = e2.return || e2.value;
    case n:
      return "";
    case h:
      return e2.return = e2.value + "{" + fe(e2.children, t2) + "}";
    case c:
      e2.value = e2.props.join(",");
  }
  return A(a2 = fe(e2.children, t2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
}
function le(e2) {
  var r2 = M(e2);
  return function(a2, n2, c2, s2) {
    var t2 = "";
    for (var u2 = 0; u2 < r2; u2++)
      t2 += e2[u2](a2, n2, c2, s2) || "";
    return t2;
  };
}
function ve(e2) {
  return function(r2) {
    if (!r2.root) {
      if (r2 = r2.return)
        e2(r2);
    }
  };
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (T(character)) {
      break;
    }

    N();
  }

  return R(begin, F);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(F - 1, points, index);
        break;

      case 2:
        parsed[index] += W(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += k(character);
    }
  } while (character = N());

  return parsed;
};

var getRules = function getRules(value, points) {
  return V(toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (m(value, length)) {
    // color-adjust
    case 5103:
      return a + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return a + value + e + value + value;
    // order

    case 6165:
      return a + value + e + 'flex-' + value + value;
    // align-items

    case 5187:
      return a + value + j(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return a + value + e + 'flex-item-' + j(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return a + value + e + 'flex-line-pack' + j(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return a + value + e + j(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return a + value + e + j(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return a + 'box-' + j(value, '-grow', '') + a + value + e + j(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return a + j(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    // cursor

    case 6187:
      return j(j(j(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return j(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    // justify-content

    case 4968:
      return j(j(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

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
      // stretch, max-content, min-content, fill-available
      if (A(value) - 1 - length > 6) switch (C(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (C(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return j(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (C(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~z(value, 'stretch') ? prefix(j(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (C(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (C(value, A(value) - 3 - (~z(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return j(value, ':', ':' + a) + value;
        // (inline-)?fl(e)x

        case 101:
          return j(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (C(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (C(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return a + value + e + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;

    case h:
      return fe([J(element, {
        value: j(element.value, '@', '@' + a)
      })], callback);

    case c:
      if (element.length) return q(element.props, function (value) {
        switch (y(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return fe([J(element, {
              props: [j(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return fe([J(element, {
              props: [j(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, ':' + r + '$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [oe,  ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return fe(ne(styles), serializer);
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
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
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
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h$1=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t:case r$1:case h$1:return a;default:return u}}case d:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h$1;var Element=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t;var Memo=r$1;var Portal=d;
var Profiler=g$1;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h$1};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t};
var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
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
  // SVG-related properties
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

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
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

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

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
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;

var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/react.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react.createContext({});

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, react.useContext(ThemeContext));

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' )) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/react.createElement(WrappedComponent, newProps));
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react.createElement.apply(null, createElementArgArray);
};

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

function t$1(){return l$1=t$1=Object.assign||function(g){for(var c=1;c<arguments.length;c++){var I=arguments[c];for(var t in I)Object.prototype.hasOwnProperty.call(I,t)&&(g[t]=I[t]);}return g},t$1.apply(this,arguments)}var l$1=t$1,n$2=l$1;var i$1=function(g,c){if(null==g)return {};var I,t,l={},n=Object.keys(g);for(t=0;t<n.length;t++)I=n[t],c.indexOf(I)>=0||(l[I]=g[I]);return l};var e$2=function(g,c){if(null==g)return {};var I,t,l=i$1(g,c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(g);for(t=0;t<n.length;t++)I=n[t],c.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(g,I)&&(l[I]=g[I]);}return l},b$1=react.createContext(null),u=function(g){var c=g.current.querySelector(".tr-header");return Array.from((null==c?void 0:c.querySelectorAll(".th"))||[])},C$1=function(g,c,I,t){return Array.from(g.current.querySelectorAll(I)).forEach((function(g){var I=Array.from(g.querySelectorAll(t)),l=I.length;I.forEach((function(g,I){return c(g,I,l)}));}))},o=function(g,c){return C$1(g,c,".tr-header",".th")},a$1=function(g,c){return C$1(g,c,".tr-body",".td")},G$1=function(g,c){return {index:c,minWidth:+g.getAttribute("data-resize-min-width"),width:g.getBoundingClientRect().width,isStiff:g.classList.contains("stiff"),isHide:"true"===g.getAttribute("data-hide"),isColSpan:g.classList.contains("colspan")}},A$2=react.createContext(null),X=function(I){var t=I.tableElementRef,l=I.tableMemoryRef,n=I.layout,i=I.children,e=react.useMemo((function(){return {layout:n,tableElementRef:t,tableMemoryRef:l}}),[n,t,l]);return jsx(A$2.Provider,{value:e},i)},d$1=function(g,c){var I=u(g).map(G$1);c.current.dataColumns=I;},r$2=function(g,c,I){var t=c.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==g;c.current&&g&&t&&(c.current.style.setProperty("--data-table-library_grid-template-columns",g),d$1(c,I));},x$2=function(g,c){null!=c&&c.onLayoutChange&&g&&c.onLayoutChange(g);},y$2="\n  ".concat((function(){}),"\n  padding: 0;\n  margin: 0;\n\n  ").concat((function(){}),"\n  display: flex;\n  align-items: center;\n\n  ").concat((function(){}),"\n  align-self: stretch;\n\n\n  & > div {\n    ").concat((function(){}),"\n    flex: 1;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  &.hide {\n    display: none;\n  }\n\n  &.pin-left,\n  &.pin-right {\n    position: sticky;\n    z-index: 2;\n  }\n\n  ").concat((function(){}),"\n  background-color: inherit;\n"),s$1=css(y$2,";"+(""),""),p$1=react.forwardRef((function(I,t){var l=react.useContext(A$2);if(!l)throw new Error("No Layout Context.");var i=l.layout,e=null!=i&&i.isDiv?"div":"td";return jsx(e,n$2({css:s$1,ref:t},I))})),B$1=css(y$2," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}"+(""),""),Z=react.forwardRef((function(I,t){var l=react.useContext(A$2);if(!l)throw new Error("No Layout Context.");var i=l.layout,e=null!=i&&i.isDiv?"div":"th";return jsx(e,n$2({css:B$1,ref:t},I))}));var W$1={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},m$2=function(g){var c="boolean"==typeof g||null==(null==g?void 0:g.resizerWidth)?10:g.resizerWidth,t="boolean"==typeof g||null==(null==g?void 0:g.resizerHighlight)?"transparent":g.resizerHighlight;return {handle:W$1,area:css("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",c,"px;height:100%;&:hover,&.active{background-color:",t,";}"+(""),"")}};

var r$3=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e},t$2=r$3;var n$3=function(r,n){if(r){if("string"==typeof r)return t$2(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return "Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t$2(r,n):void 0}};

var t$3=function(r){if(Array.isArray(r))return r},e$3=function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,a=r;}finally{try{n||null==u.return||u.return();}finally{if(o)throw a}}return e}},n$4=n$3,o$1=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var a$2=function(r,a){return t$3(r)||e$3(r,a)||n$4(r,a)||o$1()};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function i$2 () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var e$4=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e};

var e$5=r$3;var n$5=function(r){if(Array.isArray(r))return e$5(r)},o$2=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)},a$3=n$3,i$3=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var u$1=function(r){return n$5(r)||o$2(r)||a$3(r)||i$3()};

var Z$1=react.createContext(null);function A$3(e,c){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),l.push.apply(l,t);}return l}function W$2(e){for(var c=1;c<arguments.length;c++){var l=null!=arguments[c]?arguments[c]:{};c%2?A$3(Object(l),!0).forEach((function(c){e$4(e,c,l[c]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):A$3(Object(l)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(l,c));}));}return e}var X$1=function(i,I){var d=react.useContext(A$2);if(!d)throw new Error("No Layout Context.");var u$2=d.tableElementRef,C=d.tableMemoryRef,a=d.layout,s=react.useRef(null),o$1=react.useRef(null),G=react.useRef(""),Z=react.useRef(null),A=react.useRef(!1),X=react.useCallback((function(e){var c;e.preventDefault(),G.current=u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns"),A.current=!0,Z.current=s.current.offsetWidth-e.pageX,null===(c=s.current)||void 0===c||c.querySelector(".resizer-area").classList.add("active");}),[u$2]),h=react.useCallback((function(e){if(A.current){e.preventDefault();var c=Z.current+e.pageX,t=function(e,c,l,t){var i=u(l).map(G$1).filter((function(e){return !e.isHide})),I=i.findIndex((function(c){return c.index===e})),d=(i=i.map((function(e,c){return W$2(W$2({},e),{},{index:c})}))).reduce((function(e,c,l){return e||(l>I&&0!==c.width?c:e)}),null),u$2=i.reduce((function(e,c){return e+c.width}),0),C=i[I].minWidth,a=t>C&&0!==t?t:C,s=a-i[I].width,o$1=i.map((function(e,c){if(d&&I===c)return d.width-s>C?a:e.width;if((null==d?void 0:d.index)===c){var l=e.width-s;return l>C?l:e.width}return e.width})),G=u$2-o$1.reduce((function(e,c){return e+c}),0);o$1[I]=o$1[I]+G;var Z=!1,A=i.slice(0).reverse().map((function(e,l){var t=o$1.slice(0).reverse()[l],n=t/u$2*100;return e.isStiff||null!=c&&c.horizontalScroll?"".concat(t,"px"):Z?"minmax(0, ".concat(n,"%)"):(Z=!0,"minmax(0, 1fr)")})).slice(0).reverse().join(" "),X=function(e,c){if(u$1(Array.from(e.classList)).includes("pin-left")){var l=o$1.reduce((function(e,l,t){return t>=c?e:e+l}),0);e.style.left="".concat(l,"px");}if(u$1(Array.from(e.classList)).includes("pin-right")){var t=o$1.reduceRight((function(e,l,t){return t<=c?e:e+l}),0);e.style.right="".concat(t,"px");}};return o(l,X),a$1(l,X),A}(i,a,u$2,c);r$2(t,u$2,C);}}),[i,a,u$2,C]),V=react.useCallback((function(){var e;A.current=!1;var c=u$2.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(G.current!==c){x$2(c,a);var l=u(u$2).map(G$1);C.current.dataColumns=l;}null===(e=s.current)||void 0===e||e.querySelector(".resizer-area").classList.remove("active");}),[a,u$2,C]);return react.useEffect((function(){var e=o$1.current;return e&&(e.addEventListener("mousedown",X),document.addEventListener("mousemove",h),document.addEventListener("mouseup",V)),function(){e&&(e.removeEventListener("mousedown",X),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",V));}}),[I,X,h,V]),{cellRef:s,resizeRef:o$1}},h$2=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function V$1(e,c){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),l.push.apply(l,t);}return l}function y$3(e){for(var c=1;c<arguments.length;c++){var l=null!=arguments[c]?arguments[c]:{};c%2?V$1(Object(l),!0).forEach((function(c){e$4(e,c,l[c]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):V$1(Object(l)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(l,c));}));}return e}var p$2=function(e,c){return c.find((function(c){return c.index===e}))},v$1=function(r){var g=r.index,a=r.className,m=r.hide,Z$1=r.pinLeft,A=r.pinRight,W=r.stiff,V=r.isFooter,v=r.includePreviousColSpan,x=r.previousColSpans,R=r.gridColumnStart,J=r.gridColumnEnd,H=r.resize,f=r.role,Y=void 0===f?"columnheader":f,N=r.children,B=r.style,F=e$2(r,h$2),S=react.useContext(b$1);!function(r,g){var i=react.useContext(A$2);if(!i)throw new Error("No Layout Context.");var I=i.layout,d=i.tableElementRef,u$1=i.tableMemoryRef;react.useLayoutEffect((function(){var e=u$1.current.dataColumns,c=u(d).map(G$1),i=p$2(r,e),C=(null==i?void 0:i.isHide)===!!g;if(null!=e&&e.length&&!C){var a=c.filter((function(e){return !e.isHide})).map((function(c){if(c.isStiff||null!=I&&I.horizontalScroll){var l=p$2(c.index,e);return "".concat(l.width||2*l.minWidth,"px")}return "minmax(0px, 1fr)"})).join(" ");r$2(a,d,u$1),x$2(a,I);var s=u(d).map(G$1);u$1.current.dataColumns=s;}}),[r,g,I,d,u$1]);}(g,m);var z=X$1(g,m),Q=z.cellRef,k=z.resizeRef,D=R&&J,w=D?J-R-1:0,L=v?R+x:R,j=v?J+x:J;return jsx(react.Fragment,null,jsx(Z,n$2({role:Y,"data-table-library_th":"","data-hide":!!m,"data-resize-min-width":"boolean"==typeof H||null==(null==H?void 0:H.minWidth)?75:H.minWidth,style:y$3(y$3({},D?{gridColumnStart:L,gridColumnEnd:j}:{}),B),css:css(null==S?void 0:S.BaseCell," ",V?null==S?void 0:S.FooterCell:null==S?void 0:S.HeaderCell,";"+(""),""),className:i$2("th",a,{stiff:W,hide:m,resize:H,"pin-left":Z$1,"pin-right":A}),ref:Q},F),jsx("div",null,N),H&&!m&&jsx("div",{className:"resizer-area",ref:k,css:m$2(H).area},jsx("span",{className:"resizer-handle",css:m$2(H).handle}))),Array.from({length:w},(function(){return jsx(Z,{className:i$2("th","hide","colspan")})})))};

var e$6,t$4;!function(e){e[e.Prefix=0]="Prefix",e[e.Suffix=1]="Suffix";}(e$6||(e$6={})),function(e){e[e.Alternate=0]="Alternate",e[e.AlternateWithReset=1]="AlternateWithReset";}(t$4||(t$4={}));

export { A$2 as A, G$1 as G, X, Z$1 as Z, e$4 as a, b$1 as b, css as c, a$2 as d, e$2 as e, u as f, d$1 as g, e$6 as h, i$2 as i, jsx as j, n$2 as n, p$1 as p, r$2 as r, t$4 as t, u$1 as u, v$1 as v };
