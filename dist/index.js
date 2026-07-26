"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=n(function(p,a){
var t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist');function o(e,r){var i;return t(e)||e<=0||t(r)||r<=4?NaN:(i=2*r*r*(e+r-2),i/=e*s(r-2,2)*(r-4),i)}a.exports=o
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
