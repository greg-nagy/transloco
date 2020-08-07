(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(103)),c={id:"structural-directive",title:"Structural Directive",description:"Structural Directive | Transloco Angular translations (i18n)"},i={unversionedId:"structural-directive",id:"structural-directive",isDocsHomePage:!1,title:"Structural Directive",description:"Structural Directive | Transloco Angular translations (i18n)",source:"@site/docs/structural-directive.mdx",permalink:"/transloco/docs/structural-directive",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/structural-directive.mdx"},l=[{value:"Utilizing the read input",id:"utilizing-the-read-input",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using a structural directive is the ",Object(o.b)("strong",{parentName:"p"},"recommended")," approach. It's DRY and efficient, as it creates one subscription per template:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'}),"<ng-container *transloco=\"let t\">\n  <p>{{ t('title') }}</p>\n\n  <comp [title]=\"t('title')\"></comp>\n</ng-container>\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"t")," function is ",Object(o.b)("strong",{parentName:"p"},"memoized"),". It means that given the same key it will return the result directly from the cache."),Object(o.b)("p",null,"We can pass a ",Object(o.b)("inlineCode",{parentName:"p"},"params")," object as the second parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'}),"<ng-container *transloco=\"let t\">\n  <p>{{ t('name', { name: 'Transloco' }) }}</p>\n</ng-container>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "name": "My name is {{name}}"\n}\n')),Object(o.b)("p",null,"We can instruct the directive to use a ",Object(o.b)("inlineCode",{parentName:"p"},"different")," language in our template:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'}),"<ng-container *transloco=\"let t; lang: 'es'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),Object(o.b)("p",null,"This will translate each key based on the ",Object(o.b)("inlineCode",{parentName:"p"},"Spanish")," language translation file."),Object(o.b)("h2",{id:"utilizing-the-read-input"},"Utilizing the read input"),Object(o.b)("p",null,"We can use the ",Object(o.b)("inlineCode",{parentName:"p"},"read")," input in the structural directive to get translations of a particular nested (including deeply nested) property."),Object(o.b)("p",null,"Let's say we need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"dashboard")," scope all over the template. Given this translation file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "foo": "Foo",\n  "bar": "Bar"\n  "dashboard": {\n    "title": "Dashboard Title",\n    "desc": "Dashboard Desc"\n  }\n}\n')),Object(o.b)("p",null,"we can write:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'}),"<ng-container *transloco=\"let t; read: 'dashboard'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),Object(o.b)("p",null,"without having to repeat the ",Object(o.b)("inlineCode",{parentName:"p"},"dashboard")," key in each translation. Under the hood, it will do the following for you:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<ng-container *transloco=\"let t;\">\n  <h1>{{ t('dashboard.title') }}</h1>\n  <p>{{ t('dashboard.desc') }}</p>\n</ng-container>\n")))}s.isMDXComponent=!0}}]);