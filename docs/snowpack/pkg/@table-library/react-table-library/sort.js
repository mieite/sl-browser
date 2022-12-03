import { d as a, e as e$1, j as jsx, n, c as css, Z, v, h as e$2, t as t$1, i, a as e$3 } from '../../common/sort-d783cdb4-0d3f0afb.js';
import { r as react } from '../../common/index-448fcd18.js';
import '../../common/_commonjsHelpers-79ede638.js';

var t=function(n,t,u){react.useEffect((function(){t&&(t.current[n]={state:u});}),[t,n,u]);},u=function(t,u,e,c,f){var o=react.useReducer(t,u),i=a(o,2),s=i[0],a$1=i[1],l=react.useRef(null);return react.useEffect((function(){l.current&&(c.forEach((function(r){return r(l.current,s,f?f.current:void 0)})),l.current=null);}),[f,c,s]),[s,function(r){e.forEach((function(n){return n(r,s,f?f.current:void 0)})),l.current=r,a$1(r);}]},e=function(r,n){return JSON.stringify(r)===JSON.stringify(n)},c=function(n,t,u){var c=react.useRef(n),f=react.useRef(n);react.useEffect((function(){e(t,f.current)&&(e(n,c.current)||e(n,t)||u()),c.current=n,f.current=t;}),[t,u,n]);};

var o=function(i){var t=i.margin;return css("display:flex;align-items:center;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:100%;height:100%;&.narrow{width:auto;}&.active{font-weight:bold;}span{display:flex;align-items:center;justify-content:center;}&.prefix{margin-right:",t||0,";}&.suffix{margin-left:",t||0,";}div{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}div:after{display:block;content:attr(title);font-weight:bold;height:0;overflow:hidden;visibility:hidden;}"+(""))},c$1=["margin"],I=react.forwardRef((function(g,n$1){var I=g.margin,d=e$1(g,c$1);return jsx("button",n({type:"button",ref:n$1},d,{css:o({margin:I})}))})),d=function(i){var t=i.width,g=i.height,n=i.viewBox,o=i.strokeWidth;return jsx("svg",{id:"svg-icon-chevron-single-down","data-name":"svg-icon-chevron-single-down","data-testid":"svg-icon-chevron-single-down",xmlns:"http://www.w3.org/2000/svg",width:t||"36rem",height:g||"36rem",viewBox:n||"0 0 36 36",strokeWidth:o||"0rem"},jsx("polygon",{points:"0 15 0 12 18 21 36 12 36 15 18 24 0 15"}))};

function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o);}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){e$3(e,r,t[r]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));}));}return e}var h=function(r){var t=r.sort,n=r.sortKey,s=r.sortIcon,a=void 0===s?{}:s,u=r.children,p=t.state,f=t.fns,v=m(m({},t.options.sortIcon),a),d=v.position===e$2.Prefix,g=v.position===e$2.Suffix,y=function(e,r,t,n,s,i){var c={height:"".concat(t),width:"".concat(t)};return e.sortKey===r&&e.reverse?i?react.cloneElement(i,m({},c)):null:e.sortKey!==r||e.reverse?n?react.cloneElement(n,m({},c)):null:s?react.cloneElement(s,m({},c)):null}(p,n,v.size,v.iconDefault,v.iconUp,v.iconDown);return jsx(I,{className:i({active:p.sortKey===n}),onClick:function(){return f.onToggleSort({sortKey:n})}},d&&y&&jsx("span",{style:{marginRight:v.margin}},y),jsx("div",{title:"string"==typeof u?u:""},u),g&&y&&jsx("span",{style:{marginLeft:v.margin}},y))},w=["sortKey","sortIcon","children"],O=react.memo((function(e){var r=e.sortKey,i=e.sortIcon,a=void 0===i?{}:i,u=e.children,l=e$1(e,w),p=react.useContext(Z);if(!p)throw new Error("No Sort Context. No return value from useSort provided to Table component.");return jsx(v,l,jsx(h,{sort:p,sortKey:r,sortIcon:a},u))}));function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o);}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){e$3(e,r,t[r]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));}));}return e}var P=function(e,t){switch(t.type){case"TOGGLE_SORT":return function(e,t){var o=t.payload.value.sortKey===e.sortKey,n=e.reverse;if(o&&n&&t.payload.options.sortToggleType===t$1.AlternateWithReset)return {sortKey:"NONE",reverse:!1};var s=o&&!n;return j(j({},t.payload.value),{},{reverse:s})}(e,t);case"SET":return function(e,r){return j(j({},e),r.payload)}(e,t);default:throw new Error}},T={sortKey:"NONE",reverse:!1},x={position:e$2.Suffix,margin:"4px",size:"14px",iconDefault:jsx((function(e){var r=e.width,t=e.height,o=e.viewBox,n=e.strokeWidth;return jsx("svg",{id:"svg-icon-chevron-single-up-down","data-name":"svg-icon-chevron-single-up-down","data-testid":"svg-icon-chevron-single-up-down",xmlns:"http://www.w3.org/2000/svg",width:r||"36rem",height:t||"36rem",viewBox:o||"0 0 36 36",strokeWidth:n||"0rem"},jsx("polygon",{points:"36 12 36 15 18 6 0 15 0 12 18 3 36 12"}),jsx("polygon",{points:"0 24 0 21 18 30 36 21 36 24 18 33 0 24"}))}),null),iconUp:jsx((function(e){var r=e.width,t=e.height,o=e.viewBox,n=e.strokeWidth;return jsx("svg",{id:"svg-icon-chevron-single-up","data-name":"svg-icon-chevron-single-up","data-testid":"svg-icon-chevron-single-up",xmlns:"http://www.w3.org/2000/svg",width:r||"36rem",height:t||"36rem",viewBox:o||"0 0 36 36",strokeWidth:n||"0rem"},jsx("polygon",{points:"36 21 36 24 18 15 0 24 0 21 18 12 36 21"}))}),null),iconDown:jsx(d,null)},E={isServer:!1,sortToggleType:t$1.Alternate,sortIcon:x,isRecursive:!0},D=function(e,r,t$1,n){var s=null!=r&&r.state?j(j({},T),r.state):j({},T),i=null!=r&&r.onChange?r.onChange:function(){},c$1=u(P,s,[],[i],n),a$1=a(c$1,2),u$1=a$1[0],l=a$1[1],p=react.useCallback((function(e){return l({type:"TOGGLE_SORT",payload:{value:e,options:t$1}})}),[t$1,l]);c(s,u$1,(function(){return l({type:"SET",payload:s})}));var y=react.useCallback((function(e,r,t){var o=r[u$1.sortKey]||function(e){return e};return (u$1.reverse?function(e){return o(e).reverse()}:o)(e).reduce((function(e,o){return t&&o.nodes?e.concat(j(j({},o),{},{nodes:y(o.nodes,r,t)})):e.concat(o)}),[])}),[u$1]),m=react.useMemo((function(){return {onToggleSort:p}}),[p]);t("sort",n,u$1);var h=j(j(j({},E),t$1),{},{sortIcon:j(j({},x),t$1?t$1.sortIcon:{})}),w=j(j({},u$1),{},{sortFn:y});return {state:w,fns:m,options:h,modifier:function(e){return h.isServer?e:w.sortFn(e,h.sortFns,h.isRecursive)},components:{HeaderCellSort:O}}};

export { O as HeaderCellSort, D as useSort };
