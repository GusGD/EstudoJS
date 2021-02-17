(()=>{"use strict";var r={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(15),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([r.id,":root {\r\n    --primary-color: rgb(17, 86, 102);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.calculadora {\r\n    width: 400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 1em;\r\n    border: none;\r\n    background: #dfdfdf;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: #9e9e9e;\r\n}\r\ninput.btnGeraCpf {\r\n    padding: 8px 20px;\r\n    border-radius: 100px;\r\n    border: none;\r\n    font-size: 16px;\r\n    background-color: #0fec0f;\r\n    font-weight: 700;\r\n    color: white;\r\n    margin-top: 10px;\r\n}\r\ninput.btnGeraCpf:hover {\r\n    cursor: pointer;\r\n    color: #11663b;\r\n}\r\n.resultadoCPF {\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,iCAAiC;IACjC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\r\n:root {\r\n    --primary-color: rgb(17, 86, 102);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.calculadora {\r\n    width: 400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 1em;\r\n    border: none;\r\n    background: #dfdfdf;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background: #9e9e9e;\r\n}\r\ninput.btnGeraCpf {\r\n    padding: 8px 20px;\r\n    border-radius: 100px;\r\n    border: none;\r\n    font-size: 16px;\r\n    background-color: #0fec0f;\r\n    font-weight: 700;\r\n    color: white;\r\n    margin-top: 10px;\r\n}\r\ninput.btnGeraCpf:hover {\r\n    cursor: pointer;\r\n    color: #11663b;\r\n}\r\n.resultadoCPF {\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}"],sourceRoot:""}]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<r.length;c++){var A=[].concat(r[c]);t&&o[A[0]]||(e&&(A[2]?A[2]="".concat(e," and ").concat(A[2]):A[2]=e),n.push(A))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,o=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);t=!0);}catch(r){o=!0,i=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(A," */"),f=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[i].concat(f).concat([u]).join("\n")}return[i].join("\n")}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},t=[],o=0;o<r.length;o++){var c=r[o],A=n.base?c[0]+n.base:c[0],u=e[A]||0,f="".concat(A," ").concat(u);e[A]=u+1;var s=a(f),l={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(l)):i.push({identifier:f,updater:g(l,n),references:1}),t.push(f)}return t}function A(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,f=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function s(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function l(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,d=0;function g(r,n){var e,t,o;if(n.singleton){var i=d++;e=p||(p=A(n)),t=s.bind(null,e,i,!1),o=s.bind(null,e,i,!0)}else e=A(n),t=l.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var A=c(r,n),u=0;u<e.length;u++){var f=a(e[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}e=A}}}}},n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return r[t](o,o.exports,e),o.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{function r(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function n(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var t=function(){function e(r){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!1,configurable:!1,value:r.replace(/\D+/g,"")})}var t,o,i;return t=e,i=[{key:"geraDigito",value:function(n){var e,t=0,o=n.length+1,i=function(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,A=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var r=t.next();return c=r.done,r},e:function(r){A=!0,a=r},f:function(){try{c||null==t.return||t.return()}finally{if(A)throw a}}}}(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;t+=o*Number(a),o--}}catch(r){i.e(r)}finally{i.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(o=[{key:"sequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),n=e.geraDigito(r),t=e.geraDigito(r+n);this.novoCPF=r+n+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.sequencia()&&(this.geraNovoCpf(),console.log(this.novoCPF),this.novoCPF===this.cpfLimpo)}}])&&n(t.prototype,o),i&&n(t,i),e}();function o(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var i,a=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e;return n=r,(e=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(n-r)+r))}},{key:"formatado",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}},{key:"geraNovoCpf",value:function(){var r=this.rand(),n=t.geraDigito(r),e=r+n+t.geraDigito(r+n);return this.formatado(e)}}])&&o(n.prototype,e),r}(),c=e(379),A=e.n(c),u=e(122);A()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,i=new a,document.querySelector(".resultadoCPF").innerHTML=i.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map