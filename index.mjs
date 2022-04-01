// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcinv@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-cdf@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@esm/index.mjs";var f=i;var l={left:function(t,s,e){for(;;){if(0===t||f(t-1,e)<s)return t;t-=1}},right:function(t,s,e){for(;;)if(f(t+=1,e)>=s)return t}},j=s,p=e,h=r,c=n,u=i,v=d,b=m,g=l;var x=function(t,s){var e,r,n,i;return p(s)||s<0||p(t)||t<0||t>1?NaN:0===s||0===t?0:1===t?b:(e=1/(n=c(s)),i=t<.5?-j(2*t)*v:j(2*(1-t))*v,r=h(s+n*(i+e*(i*i-1)/6)),u(r,s)>=t?g.left(r,t,s):g.right(r,t,s))},N=o,y=a.factory,q=s,w=e,k=r,z=n,A=i,B=d,C=m,D=l;var E=x,F=function(t){var s,e;return w(t)||t<0?N(NaN):0===t?y(0):(e=z(t),s=1/e,function(r){var n,i;if(w(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return C;i=r<.5?-q(2*r)*B:q(2*(1-r))*B;return n=k(t+e*(i+s*(i*i-1)/6)),A(n,t)>=r?D.left(n,r,t):D.right(n,r,t)})};t(E,"factory",F);var G=E;export{G as default,F as factory};
//# sourceMappingURL=index.mjs.map
