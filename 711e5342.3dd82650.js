(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(6),a=(t(0),t(103)),c={title:"Unit Testing",description:"Unit Testing | Transloco Angular translations (i18n)"},s={unversionedId:"unit-testing",id:"unit-testing",isDocsHomePage:!1,title:"Unit Testing",description:"Unit Testing | Transloco Angular translations (i18n)",source:"@site/docs/unit-testing.mdx",permalink:"/transloco/docs/unit-testing",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/unit-testing.mdx",sidebar:"docs",previous:{title:"Inline Loaders",permalink:"/transloco/docs/inline-loaders"},next:{title:"SSR Support",permalink:"/transloco/docs/ssr-support"}},i=[],l={rightToc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When running specs, we want to have the languages available immediately, in a synchronous fashion. Transloco provides you with a ",Object(a.b)("inlineCode",{parentName:"p"},"TranslocoTestingModule"),", where you can pass the languages you need in your specs, and the config."),Object(a.b)("p",null,"We recommend to be DRY and create a module factory function that we can use in each spec, For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="transloco-module.spec.ts"',title:'"transloco-module.spec.ts"'}),"\nimport { TranslocoTestingModule } from '@ngneat/transloco';\nimport en from '../assets/i18n/en.json';\nimport es from '../assets/i18n/es.json';\n\nexport function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {\n  return TranslocoTestingModule.withLangs(\n    { en, es },\n    {\n      availableLangs: ['en', 'es'],\n      defaultLang: 'en',\n      ...config\n    }\n  );\n}\n")),Object(a.b)("p",null,"Now we can use it in each ",Object(a.b)("inlineCode",{parentName:"p"},"spec")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'{4} title="app.component.spec.ts"',"{4}":!0,title:'"app.component.spec.ts"'}),"describe('AppComponent', () => {\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      imports: [getTranslocoModule()],\n      declarations: [AppComponent]\n    }).compileComponents();\n  }));\n\n  it('should work', () => {\n    const fixture = TestBed.createComponent(AppComponent);\n    fixture.detectChanges();\n    expect(fixture.debugElement.query(By.css('h1'))\n               .nativeElement.innerText).toBe('hello');\n  });\n});\n")),Object(a.b)("p",null,"You can find an example ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ngneat/transloco/blob/master/src/app/on-push/on-push.component.spec.ts"}),"here"),"."),Object(a.b)("p",null,"If you need to test ",Object(a.b)("inlineCode",{parentName:"p"},"scopes"),", you should add them as ",Object(a.b)("inlineCode",{parentName:"p"},"languages"),", for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'{6,7} title="transloco-module.spec.ts"',"{6,7}":!0,title:'"transloco-module.spec.ts"'}),"export function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {\n  return TranslocoTestingModule.withLangs(\n    {\n      en,\n      es,\n      'admin-page/en': admin,\n      'admin-page/es': adminSpanish\n    },\n    {\n      availableLangs: ['en', 'es'],\n      defaultLang: 'en',\n      ...config\n    }\n  );\n}\n")),Object(a.b)("p",null,"You can find an example ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ngneat/transloco/blob/master/src/app/lazy/lazy.component.spec.ts"}),"here"),"."),Object(a.b)("p",null,"Note that in order to import JSON files, you need to configure the TypeScript compiler by adding the following properties in ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resolveJsonModule": true,\n  "esModuleInterop": true\n}\n')))}p.isMDXComponent=!0}}]);