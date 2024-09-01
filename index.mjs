// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcinv@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-cdf@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@v0.2.2-esm/index.mjs";var f={left:function(t,s,e){for(;;){if(0===t||i(t-1,e)<s)return t;t-=1}},right:function(t,s,e){for(;;)if(i(t+=1,e)>=s)return t}};function l(t,o){var a,l,j,p;return e(o)||o<0||e(t)||t<0||t>1?NaN:0===o||0===t?0:1===t?m:(a=1/(j=r(o)),p=t<.5?-s(2*t)*d:s(2*(1-t))*d,l=n(o+j*(p+a*(p*p-1)/6)),i(l,o)>=t?f.left(l,t,o):f.right(l,t,o))}function j(t){var l,j;return e(t)||t<0?o(NaN):0===t?a(0):(j=r(t),l=1/j,function(r){var o,a;if(e(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return m;a=r<.5?-s(2*r)*d:s(2*(1-r))*d;return o=n(t+j*(a+l*(a*a-1)/6)),i(o,t)>=r?f.left(o,r,t):f.right(o,r,t)})}t(l,"factory",j);export{l as default,j as factory};
//# sourceMappingURL=index.mjs.map
