(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),a=(n(0),n(103)),o={title:"FAQ",description:"FAQ | Transloco Angular translations (i18n)"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"FAQ | Transloco Angular translations (i18n)",source:"@site/docs/faq.mdx",permalink:"/transloco/docs/faq",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/faq.mdx",sidebar:"docs",previous:{title:"Blog Posts",permalink:"/transloco/docs/blog-posts"},next:{title:"Validation Translation files",permalink:"/transloco/docs/tools/validator"}},c=[{value:"I&#39;m calling the <code>translate</code> function inside <code>ngOnInit</code> but it says the translation is missing and when I use the structural directive it works fine, why?",id:"im-calling-the-translate-function-inside-ngoninit-but-it-says-the-translation-is-missing-and-when-i-use-the-structural-directive-it-works-fine-why",children:[]},{value:"Is it possible to use an Angular component inside my translation string?",id:"is-it-possible-to-use-an-angular-component-inside-my-translation-string",children:[]},{value:"<code>getBrowserLang</code> in SSR?",id:"getbrowserlang-in-ssr",children:[]},{value:"Can I use HTML markings inside a translation?",id:"can-i-use-html-markings-inside-a-translation",children:[]},{value:"I want to use the structural directive in my app, but isn&#39;t calling a function from the template a bad practice?",id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A collection of common questions and their answers."),Object(a.b)("h3",{id:"im-calling-the-translate-function-inside-ngoninit-but-it-says-the-translation-is-missing-and-when-i-use-the-structural-directive-it-works-fine-why"},"I'm calling the ",Object(a.b)("inlineCode",{parentName:"h3"},"translate")," function inside ",Object(a.b)("inlineCode",{parentName:"h3"},"ngOnInit")," but it says the translation is missing and when I use the structural directive it works fine, why?"),Object(a.b)("p",null,"Loading the translations is an asynchronous task while ",Object(a.b)("inlineCode",{parentName:"p"},"translate")," is a synchronous function.\nYou have 2 options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Subscribe to the transloco service events and use ",Object(a.b)("inlineCode",{parentName:"li"},"translate")," inside the subscription."),Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"selectTranslate")," instead.")),Object(a.b)("p",null,"The structural directive is waiting for the translation to load on its own, that's why it's working in the template."),Object(a.b)("h3",{id:"is-it-possible-to-use-an-angular-component-inside-my-translation-string"},"Is it possible to use an Angular component inside my translation string?"),Object(a.b)("p",null,"You can't do it using while AOT compilation, but there are 2 alternatives:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transform your component into a web component using ",Object(a.b)("inlineCode",{parentName:"li"},"@angular/elements")," and use the HTML tag in your translation."),Object(a.b)("li",{parentName:"ul"},"Separate your translation into 2 parts and insert the desired component between.")),Object(a.b)("h3",{id:"getbrowserlang-in-ssr"},Object(a.b)("inlineCode",{parentName:"h3"},"getBrowserLang")," in SSR?"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"getBrowserLang")," function will only returns a value when executed in browser context, if you are using SSR you should add a desired default value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"const defaultLang = getBrowserLang() || 'en';\n")),Object(a.b)("h3",{id:"can-i-use-html-markings-inside-a-translation"},"Can I use HTML markings inside a translation?"),Object(a.b)("p",null,"Yes, you can! Pass the translated string in an ",Object(a.b)("inlineCode",{parentName:"p"},"innerHTML")," binding."),Object(a.b)("h3",{id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice"},"I want to use the structural directive in my app, but isn't calling a function from the template a bad practice?"),Object(a.b)("p",null,"Using a structural directive is the recommended approach. It\u2019s DRY and efficient, as it creates one subscription per template."),Object(a.b)("p",null,"Moreover, the t function is ",Object(a.b)("inlineCode",{parentName:"p"},"memoized"),", It means that given the same key, it will return the result directly from the cache."),Object(a.b)("p",null,"Furthermore, when using on push change detection strategy (which is recommended) the change detection cycles should greatly reduce."))}u.isMDXComponent=!0}}]);