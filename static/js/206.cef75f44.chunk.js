/*! For license information please see 206.cef75f44.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{206:function(t,n,r){r.r(n),r.d(n,{FindeItem:function(){return q},Movies:function(){return j},MoviesList:function(){return T},SearchButton:function(){return Z},SearchForm:function(){return P},SearchInput:function(){return U},StyledNotFoundIMG:function(){return b},Title:function(){return S},Wrapper:function(){return M},default:function(){return k}});var e,o,i,a,c,u,s,l,p=r(168),A=r(413),f=r(861),h=r(439),d=r(835),g=r(818),v=r(791),y=r(134),E=r(87),m=r(689),x=r(85),B=r(867),w=r(651),I=r(184);function R(){R=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new T(e||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var A="suspendedStart",f="executing",h="completed",d={};function g(){}function v(){}function y(){}var E={};s(E,a,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(q([])));x&&x!==r&&e.call(x,a)&&(E=x);var B=y.prototype=g.prototype=Object.create(E);function w(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function I(t,n){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function j(n,r,e){var o=A;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=P(c,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===A)throw o=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=f;var s=p(n,r,e);if("normal"===s.type){if(o=e.done?h:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=h,e.method="throw",e.arg=s.arg)}}}function P(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,P(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var i=p(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function U(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(U,this),this.reset(!0)}function q(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=y,o(B,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(B),t},n.awrap=function(t){return{__await:t}},w(I.prototype),s(I.prototype,c,(function(){return this})),n.AsyncIterator=I,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new I(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(B),s(B,u,"Generator"),s(B,a,(function(){return this})),s(B,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=q,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:q(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),d}},n}var j=function(){var t,n=(0,v.useState)([]),r=(0,h.Z)(n,2),e=r[0],o=r[1],i=(0,v.useState)(!1),a=(0,h.Z)(i,2),c=a[0],u=a[1],s=(0,v.useState)(!0),l=(0,h.Z)(s,2),p=l[0],B=l[1],j=(0,E.lr)(),k=(0,h.Z)(j,2),V=k[0],D=k[1],G=(0,y.cI)(),L=G.register,z=G.handleSubmit,Y=G.reset,H=(0,m.TH)(),N=V.get("query");return(0,v.useEffect)((function(){var t;N&&function(){(t=t||(0,f.Z)(R().mark((function t(){var n;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,(0,g.V0)(w.IA,{query:N});case 4:n=t.sent,Array.isArray(n.results)?o(n.results):o([]),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),o([]),u(!1),x.Am.error("Something went wrong. Please, try again");case 13:return t.prev=13,u(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,8,13,16]])})))).apply(this,arguments)}()}),[N]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(P,{onSubmit:z((function(n){return(t=t||(0,f.Z)(R().mark((function t(n){return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D({query:n.queryValue}),n.queryValue?B(!1):B(!0),Y();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)})),children:[(0,I.jsx)(U,(0,A.Z)((0,A.Z)({},L("queryValue")),{},{type:"text"})),(0,I.jsx)(Z,{children:"Search"})]}),c&&(0,I.jsx)(d.Z,{}),!p&&(0,I.jsx)(T,{children:e.length?e.map((function(t){return(0,I.jsx)(q,{children:(0,I.jsxs)(E.rU,{state:{from:H},to:"/movies/".concat(t.id),children:[t.title," (",t.release_date?t.release_date.slice(0,4):"unknown",")"]},t.id)},t.id)})):(0,I.jsxs)(M,{children:[(0,I.jsx)(b,{src:"data:image/jpeg;base64,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",alt:"Oops! Page not found"}),(0,I.jsx)(S,{children:"Enter another query!"})]})})]})},P=B.ZP.form(e||(e=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 400px;\n  margin: 0 auto;\n"]))),U=B.ZP.input(o||(o=(0,p.Z)(["\n  padding: 10px;\n  font-size: 1rem;\n  border: 2px solid #3ca1d9;\n  border-radius: 5px;\n  flex: 1;\n"]))),Z=B.ZP.button(i||(i=(0,p.Z)(["\n  padding: 10px 20px;\n  background-color: #3ca1d9;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #023047;\n  }\n"]))),T=B.ZP.ol(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 30px 50px;\n  padding: 0;\n  list-style: none;\n\n  font-family: 'Poppins', sans-serif;\n"]))),q=B.ZP.li(c||(c=(0,p.Z)(["\n  font-size: 1.2rem;\n  color: #023047;\n  position: relative;\n\n  &:before {\n    content: '\u2192';\n    color: #3ca1d9;\n    font-size: 1.2em;\n    margin-right: 10px;\n    position: absolute;\n    left: -40px;\n  }\n  a {\n    text-decoration: none;\n    color: #023047;\n    transition: color 0.3s ease;\n  }\n\n  a:hover {\n    color: #3ca1d9;\n  }\n"]))),b=B.ZP.img(u||(u=(0,p.Z)(["\n  width: 35vw;\n"]))),M=B.ZP.div(s||(s=(0,p.Z)(["\n  display: grid;\n  place-items: center;\n  min-height: 50vh;\n"]))),S=B.ZP.p(l||(l=(0,p.Z)(["\n  font-family: 'Righteous', cursive;\n  position: relative;\n  color: #0b2f00;\n  display: inline-block;\n  font-size: 3em;\n  padding: 11px 60px;\n  margin: 0;\n  line-height: 1;\n  border-top: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transition: all 0.3s ease;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n"]))),k=j}}]);
//# sourceMappingURL=206.cef75f44.chunk.js.map