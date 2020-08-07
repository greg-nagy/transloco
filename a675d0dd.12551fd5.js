(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,O=d["".concat(r,".").concat(m)]||d[m]||s[m]||l;return n?i.a.createElement(O,b(b({ref:t},p),{},{components:n})):i.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<l;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),l=(n(0),n(103)),r={title:"Schematics",description:"Schematics | Transloco Angular translations (i18n)"},b={unversionedId:"schematics",id:"schematics",isDocsHomePage:!1,title:"Schematics",description:"Schematics | Transloco Angular translations (i18n)",source:"@site/docs/schematics.mdx",permalink:"/transloco/docs/schematics",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/schematics.mdx",sidebar:"docs",previous:{title:"3rd Party",permalink:"/transloco/docs/plugins/third-party"},next:{title:"ngx-translate",permalink:"/transloco/docs/migration/ngx"}},o=[{value:"Ng-add",id:"ng-add",children:[{value:"Overview",id:"overview",children:[]},{value:"Command",id:"command",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Scope",id:"scope",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Command",id:"command-1",children:[]},{value:"Options",id:"options-1",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Component",id:"component",children:[{value:"Overview",id:"overview-2",children:[]},{value:"Command",id:"command-2",children:[]},{value:"Options",id:"options-2",children:[]}]},{value:"Join",id:"join",children:[{value:"Overview",id:"overview-3",children:[]},{value:"Command",id:"command-3",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Options",id:"options-3",children:[]}]},{value:"Split",id:"split",children:[{value:"Overview",id:"overview-4",children:[]},{value:"Command",id:"command-4",children:[]},{value:"Options",id:"options-4",children:[]}]},{value:"Upgrade",id:"upgrade",children:[{value:"Overview",id:"overview-5",children:[]},{value:"Command",id:"command-5",children:[]},{value:"Options",id:"options-5",children:[]}]}],p={rightToc:o};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"ng-add"},"Ng-add"),Object(l.b)("h3",{id:"overview"},"Overview"),Object(l.b)("p",null,"Creates boilerplate translation files for the given languages, and adds Transloco configuration for the project's root module."),Object(l.b)("h3",{id:"command"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"  ng add @ngneat/transloco\n")),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("h4",{id:"create-the-translation-files-along-with-the-required-configuration"},"Create the translation files along with the required configuration."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--langs")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"en, es")))),Object(l.b)("h4",{id:"provide-the-translation-files-loader"},"Provide the translation files loader."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--loader")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"Http")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("inlineCode",{parentName:"p"},"Http"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Webpack")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"lo")))),Object(l.b)("h4",{id:"define-the-translation-files-format"},"Define the translation files format."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--translate-type")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"JSON")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("inlineCode",{parentName:"p"},"JSON"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Typescript")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"t")))),Object(l.b)("h4",{id:"provide-the-configuration-that-is-needed-for-a-project-using-server-side-rendering"},"Provide the configuration that is needed for a project using server side rendering."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--ssr")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),","),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"false")))),Object(l.b)("h4",{id:"define-the-location-of-the-translation-files"},"Define the location of the translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--path")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"assets/i18n/")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"p")))),Object(l.b)("h4",{id:"provide-the-name-of-the-project-where-transloco-should-be-installed-to"},"Provide the name of the project where Transloco should be installed to."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--project")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")))),Object(l.b)("h4",{id:"provide-the-path-to-a-root-module-and-import-translocomodule-along-with-the-modules-required-configuration-defined-by-previous-flags"},"Provide the path to a root ",Object(l.b)("inlineCode",{parentName:"h4"},"Module")," and import ",Object(l.b)("inlineCode",{parentName:"h4"},"TranslocoModule")," along with the module's required configuration defined by previous flags."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--module")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"app")))),Object(l.b)("h2",{id:"scope"},"Scope"),Object(l.b)("h3",{id:"overview-1"},"Overview"),Object(l.b)("p",null,"Add new Transloco scope to a new/existing Angular ",Object(l.b)("inlineCode",{parentName:"p"},"module"),", and create the scope's translation files."),Object(l.b)("h3",{id:"command-1"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng generate @ngneat/transloco:scope [name]\n")),Object(l.b)("h3",{id:"options-1"},"Options"),Object(l.b)("p",null,"Define the name of the new scope."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--name"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Define the path at which module to add scope to, relative to the workspace root."),Object(l.b)("p",null,"Note if this flag won't be provide a new Module should be created."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--module"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Define the languages of the scope, default is the root languages."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--langs"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"la")),Object(l.b)("p",null,"Skip the creation of the translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--skip-creation"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Define the format of the translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--translate-type"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"JSON")),Object(l.b)("p",null,"Define the location of the translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--translation-path"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng g @ngneat/transloco:scope my-scope\nng g @ngneat/transloco:scope my-scope --module path/to/my-scope\nng g @ngneat/transloco:scope my-scope --inline-loader\n")),Object(l.b)("h2",{id:"component"},"Component"),Object(l.b)("h3",{id:"overview-2"},"Overview"),Object(l.b)("p",null,"Creates boilerplate files for Angular ",Object(l.b)("inlineCode",{parentName:"p"},"component")," with a simple translation"),Object(l.b)("h3",{id:"command-2"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"ng generate @ngneat/transloco:component [name]\n")),Object(l.b)("h3",{id:"options-2"},"Options"),Object(l.b)("h4",{id:"define-the-components-name"},"Define the component's name."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--name")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")))),Object(l.b)("h2",{id:"join"},"Join"),Object(l.b)("h3",{id:"overview-3"},"Overview"),Object(l.b)("p",null,"Merge all our translation files into one piece for each language."),Object(l.b)("h3",{id:"command-3"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng generate @ngneat/transloco:join\n")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you have more then one entry folder for your translation files, you will have to add a mapping for each folder entry and the scope name. It could be done using scopePathMap property in your ",Object(l.b)("inlineCode",{parentName:"p"},"transloco.config.js")," file."))),Object(l.b)("p",null,"By default the build script will go over the root translation file directory and will refer every sub directory as scope."),Object(l.b)("p",null,"Let's say we have the following translations folder:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u251c\u2500 src/assets/i18n/\n   \u251c\u2500 en.json\n   \u251c\u2500 fr.json\n   \u251c\u2500 es.json\n   \u251c\u2500 todos/\n      \u251c\u2500 en.json\n      \u251c\u2500 fr.json\n      \u251c\u2500 es.json\n")),Object(l.b)("p",null,"The script will run over all the directory files (minus the default language) and will merge the scope files to the main translation files."),Object(l.b)("p",null,"Say our project's default language is English,  if we run the script the expected output would be:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="dist-i18n/es.json"',title:'"dist-i18n/es.json"'}),'{\n  "hello": "transloco es",\n  "todos": {\n    "todos-translation": "todos es"\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="dist-i18n/fr.json"',title:'"dist-i18n/fr.json"'}),'{\n  "hello": "transloco fr",\n  "todos": {\n    "todos-translation": "todos fr"\n  }\n}\n')),Object(l.b)("p",null,"If we have more then one entry folder for a ",Object(l.b)("inlineCode",{parentName:"p"},"scope")," we can specify a map between the ",Object(l.b)("inlineCode",{parentName:"p"},"scope")," name and the path to the translations using scopePathMap property in your ",Object(l.b)("inlineCode",{parentName:"p"},"transloco.config.js")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="transloco.config.js"',title:'"transloco.config.js"'}),'{\n  "scopePathMap": {\n    "my-scope": "src/app/path-to-scope",\n    "my-project-scope": "projects/my-project/i18n"\n  }\n}\n')),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Once you specify the scopePathMap the script will automatically use it"))),Object(l.b)("h3",{id:"examples-1"},"Examples"),Object(l.b)("p",null,"Merge translations files to a specific output directory:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng g @ngneat/transloco:build --default-lang en\n")),Object(l.b)("h3",{id:"options-3"},"Options"),Object(l.b)("p",null,"The folder that contains the root translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--translation-path")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"src/assets/i18n")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"root")))),Object(l.b)("p",null,"The output directory path"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--out-dir")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"dist-i18n")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"o")))),Object(l.b)("p",null,"The default language of the project"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--default-lang")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"o")))),Object(l.b)("p",null,"Determine rather to join also the default language"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--include-defaultLang")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"false")))),Object(l.b)("h2",{id:"split"},"Split"),Object(l.b)("h3",{id:"overview-4"},"Overview"),Object(l.b)("p",null,"Does the opposite process of ",Object(l.b)("inlineCode",{parentName:"p"},"join")," command. It splits the translated files between the project's translation files."),Object(l.b)("h3",{id:"command-4"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng generate @ngneat/transloco:split\n")),Object(l.b)("h3",{id:"options-4"},"Options"),Object(l.b)("p",null,"The folder that contains the root translation files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--translation-path")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"src/assets/i18n")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"root")))),Object(l.b)("p",null,"The path of the source directory that contains the translated files."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"source")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"dist-i18n")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"o")))),Object(l.b)("h2",{id:"upgrade"},"Upgrade"),Object(l.b)("h3",{id:"overview-5"},"Overview"),Object(l.b)("p",null,"The Library's upgrade script from lower versions. For more information about the script see:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ngneat/transloco/tree/master/schematics/src/upgrade/v2-upgrade.md"}),"v2-upgrade.md")),Object(l.b)("h3",{id:"command-5"},"Command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," ng generate @ngneat/transloco:upgrade\n")),Object(l.b)("h3",{id:"options-5"},"Options"),Object(l.b)("h4",{id:"define-the-entry-path-of-the-upgrade-script"},"Define the entry path of the upgrade script."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"--path")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"type"),": ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"default"),": ",Object(l.b)("inlineCode",{parentName:"p"},"./src/app")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(l.b)("inlineCode",{parentName:"p"},"p")))))}c.isMDXComponent=!0}}]);