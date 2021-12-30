!function(){"use strict";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=o(n);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(this,r?(e=o(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}var k,w,i,t,n,f,d={text:"Agora",style:"background: #526d78; border-rounded: 6px; padding: 4px; text-weight: semibold;"},p=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Info";return console.info("%c".concat(d.text,"(").concat(t,")"),d.style,e)},e=new Event("ConfigApplyEvent"),h={init:function(){var e={loader:!0,redesign:!0,theme:"default",hideSignatures:!0,hideStats:!1,sidebar:!0};if(window.localStorage.getItem("rumctheme")){var t=JSON.parse(window.localStorage.getItem("rumctheme"));if(t===e)return;p("Found modified config, merging with default...","Config"),window.localStorage.setItem("rumctheme",JSON.stringify(l(l({},e),t)))}else p("No config found, created new record in localStorage.","Config"),window.localStorage.setItem("rumctheme",JSON.stringify(e));return this},get store(){return JSON.parse(window.localStorage.getItem("rumctheme"))},doChangelogMatch:function(){return this.store.changelogV===(0<arguments.length&&void 0!==arguments[0]?arguments[0]:0)},set:function(e){window.localStorage.setItem("rumctheme",JSON.stringify(e)),p("New values should be applied.","Config"),this.apply()},apply:function(){p("Applying changes to config","Config"),document.body.setAttribute("class",""),this.store.redesign?(document.body.classList.add("ruminetheme_1"),document.head.querySelector('link[href="https://raw.githack.com/rogi27/agora/main/dist/theme.css"]')||document.head.insertAdjacentHTML("beforeend",'<link href="https://raw.githack.com/rogi27/agora/main/dist/theme.css" type="text/css" rel="stylesheet">')):document.head.querySelector('link[href="https://raw.githack.com/rogi27/agora/main/dist/theme.css"]')&&document.head.querySelector('link[href="https://raw.githack.com/rogi27/agora/main/dist/theme.css"]').remove(),this.store.theme&&"orange"===this.store.theme&&document.body.classList.add("orange"),this.store.hideSignatures&&document.body.classList.add("hideSignatures"),this.store.hideStats&&document.body.classList.add("hideStats"),this.store.sidebar&&document.body.classList.add("enableSidebar"),document.dispatchEvent(e)}},S={},v=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,t){for(var n in t)e[n]=t[n];return e}function O(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(2<arguments.length&&(l.children=3<arguments.length?k.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return b(e,l,r,o,null)}function b(e,t,n,r,o){r={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++i:o};return null==o&&null!=w.vnode&&w.vnode(r),r}function P(e){return e.children}function C(e,t){this.props=e,this.context=t}function N(e,t){if(null==t)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?N(e):null}function m(e){(!e.__d&&(e.__d=!0)&&t.push(e)&&!j.__r++||f!==w.debounceRendering)&&((f=w.debounceRendering)||n)(j)}function j(){for(var e;j.__r=t.length;)e=t.sort(function(e,t){return e.__v.__b-t.__v.__b}),t=[],e.some(function(e){var t,n,r,o,i;e.__d&&(o=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(e=x({},r)).__v=r.__v+1,M(i,r,e,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?N(r):o,r.__h),q(n,r),r.__e!=o&&function e(t){var n,r;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(r=t.__k[n])&&null!=r.__e){t.__e=t.__c.base=r.__e;break}return e(t)}}(r)))})}function E(e,t,n,r,o,i,l,a,c,s){var u,_,f,d,p,h,g,y=r&&r.__k||v,m=y.length;for(n.__k=[],u=0;u<t.length;u++)if(null!=(d=n.__k[u]=null==(d=t[u])||"boolean"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?b(null,d,null,null,d):Array.isArray(d)?b(P,{children:d},null,null,null):0<d.__b?b(d.type,d.props,d.key,null,d.__v):d)){if(d.__=n,d.__b=n.__b+1,null===(f=y[u])||f&&d.key==f.key&&d.type===f.type)y[u]=void 0;else for(_=0;_<m;_++){if((f=y[_])&&d.key==f.key&&d.type===f.type){y[_]=void 0;break}f=null}M(e,d,f=f||S,o,i,l,a,c,s),p=d.__e,(_=d.ref)&&f.ref!=_&&(g=g||[],f.ref&&g.push(f.ref,null,d),g.push(_,d.__c||p,d)),null!=p?(null==h&&(h=p),"function"==typeof d.type&&d.__k===f.__k?d.__d=c=function e(t,n,r){for(var o,i=t.__k,l=0;i&&l<i.length;l++)(o=i[l])&&(o.__=t,n="function"==typeof o.type?e(o,n,r):L(r,o,o,i,o.__e,n));return n}(d,c,e):c=L(e,d,f,y,p,c),"function"==typeof n.type&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=N(f))}for(n.__e=h,u=m;u--;)null!=y[u]&&("function"==typeof n.type&&null!=y[u].__e&&y[u].__e==n.__d&&(n.__d=N(r,u+1)),function e(t,n,r){var o,i;if(w.unmount&&w.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||B(o,null,n)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){w.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&e(o[i],n,"function"!=typeof t.type);r||null==t.__e||O(t.__e),t.__e=t.__d=void 0}(y[u],y[u]));if(g)for(u=0;u<g.length;u++)B(g[u],g[++u],g[++u])}function L(e,t,n,r,o,i){var l,a,c;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<r.length;c+=2)if(a==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function D(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||g.test(t)?n:n+"px"}function T(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||D(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||D(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=(t.toLowerCase()in e?t.toLowerCase():t).slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?I:A,i):e.removeEventListener(t,i?I:A,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function A(e){this.l[e.type+!1](w.event?w.event(e):e)}function I(e){this.l[e.type+!0](w.event?w.event(e):e)}function M(e,t,n,r,o,i,l,a,c){var s,u,_,f,d,p,h,g,y,m,v,b=t.type;if(void 0===t.constructor){null!=n.__h&&(c=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(s=w.__b)&&s(t);try{e:if("function"==typeof b){if(g=t.props,y=(s=b.contextType)&&r[s.__c],m=s?y?y.props.value:s.__:r,n.__c?h=(u=t.__c=n.__c).__=u.__E:("prototype"in b&&b.prototype.render?t.__c=u=new b(g,m):(t.__c=u=new C(g,m),u.constructor=b,u.render=U),y&&y.sub(u),u.props=g,u.state||(u.state={}),u.context=m,u.__n=r,_=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=b.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=x({},u.__s)),x(u.__s,b.getDerivedStateFromProps(g,u.__s))),f=u.props,d=u.state,_)null==b.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&u.__h.push(u.componentDidMount);else{if(null==b.getDerivedStateFromProps&&g!==f&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(g,m),!u.__e&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(g,u.__s,m)||t.__v===n.__v){u.props=g,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),(u.__v=t).__e=n.__e,t.__k=n.__k,t.__k.forEach(function(e){e&&(e.__=t)}),u.__h.length&&l.push(u);break e}null!=u.componentWillUpdate&&u.componentWillUpdate(g,u.__s,m),null!=u.componentDidUpdate&&u.__h.push(function(){u.componentDidUpdate(f,d,p)})}u.context=m,u.props=g,u.state=u.__s,(s=w.__r)&&s(t),u.__d=!1,u.__v=t,u.__P=e,s=u.render(u.props,u.state,u.context),u.state=u.__s,null!=u.getChildContext&&(r=x(x({},r),u.getChildContext())),_||null==u.getSnapshotBeforeUpdate||(p=u.getSnapshotBeforeUpdate(f,d)),v=null!=s&&s.type===P&&null==s.key?s.props.children:s,E(e,Array.isArray(v)?v:[v],t,n,r,o,i,l,a,c),u.base=t.__e,t.__h=null,u.__h.length&&l.push(u),h&&(u.__E=u.__=null),u.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,o,i,l,a){var c,s,u,_=n.props,f=t.props,d=t.type,p=0;if("svg"===d&&(o=!0),null!=i)for(;p<i.length;p++)if((c=i[p])&&"setAttribute"in c==!!d&&(d?c.localName===d:3===c.nodeType)){e=c,i[p]=null;break}if(null==e){if(null===d)return document.createTextNode(f);e=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),i=null,a=!1}if(null===d)_===f||a&&e.data===f||(e.data=f);else{if(i=i&&k.call(e.childNodes),s=(_=n.props||S).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!a){if(null!=i)for(_={},p=0;p<e.attributes.length;p++)_[e.attributes[p].name]=e.attributes[p].value;(u||s)&&(u&&(s&&u.__html==s.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(function(e,t,n,r,o){for(var i in n)"children"===i||"key"===i||i in t||T(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||T(e,i,t[i],n[i],r)}(e,f,_,o,a),u)t.__k=[];else if(p=t.props.children,E(e,Array.isArray(p)?p:[p],t,n,r,o&&"foreignObject"!==d,i,l,i?i[0]:n.__k&&N(n,0),a),null!=i)for(p=i.length;p--;)null!=i[p]&&O(i[p]);a||("value"in f&&void 0!==(p=f.value)&&(p!==_.value||p!==e.value||"progress"===d&&!p)&&T(e,"value",p,_.value,!1),"checked"in f&&void 0!==(p=f.checked)&&p!==e.checked&&T(e,"checked",p,_.checked,!1))}return e}(n.__e,t,n,r,o,i,l,c);(s=w.diffed)&&s(t)}catch(e){t.__v=null,!c&&null==i||(t.__e=a,t.__h=!!c,i[i.indexOf(a)]=null),w.__e(e,t,n)}}}function q(e,t){w.__c&&w.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){w.__e(e,t.__v)}})}function B(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){w.__e(e,n)}}function U(e,t,n){return this.constructor(e,n)}function R(e,t,n){var r,o,i;w.__&&w.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],M(t,e=(!r&&n||t).__k=y(P,null,[e]),o||S,S,void 0!==t.ownerSVGElement,!r&&n?[n]:!o&&t.firstChild?k.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),q(i,e)}k=v.slice,w={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},i=0,C.prototype.setState=function(e,t){var n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=x({},this.state);(e="function"==typeof e?e(x({},n),this.props):e)&&x(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},C.prototype.render=P,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j.__r=0;function F(e,t,n,r){t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],l=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];3===i?r[0]=l:4===i?r[1]=Object.assign(r[1]||{},l):5===i?(r[1]=r[1]||{})[t[++o]]=l:6===i?r[1][t[++o]]+=l+"":i?(i=e.apply(l,F(e,l,n,["",null])),r.push(i),l[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(l)}return r}var W=new Map;function H(){var e={new:{text:"🟢 новое",class:"new"},fix:{text:"🟠 исправлено",class:"fix"},breaking:{text:"🔴 ВАЖНОЕ",class:"breaking"}},e=[{type:e.new,text:"Теперь это не просто скрипт для стилей, это комбайн для различных улучшений, новвоведений и исправлений."},{type:e.new,text:"Переделана структура стилей, теперь она модульная, в дальнейшем поможет оптимизировать размер файлов и поможет при конфликтах с расширениями."},{type:e.fix,text:"Поправил (надеюсь) работу расширения от Саба для скрытия сообщений."},{type:e.breaking,text:"Настройки из прошлой версии будут сброшены!"}];return y("div",{className:"changelog"},y("p",{className:"changelog__title"},"Список изменений от 30.12.2021"),y("ul",null,e.map(function(e,t){return y("li",{key:t},y("p",{className:"badge badge_".concat(e.type.class)},e.type.text),y("p",null,e.text))})))}!function(e){var t=W.get(this);return t||(t=new Map,W.set(this,t)),1<(t=F(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",i="",l=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,o):3===r&&(e||o)?(l.push(3,e,o),r=2):2===r&&"..."===o&&e?l.push(4,e,0):2===r&&o&&!e?l.push(5,0,!0,o):5<=r&&((o||!e&&5===r)&&(l.push(r,0,o,n),r=6),e&&(l.push(r,e,0,n),r=6)),o=""},c=0;c<e.length;c++){c&&(1===r&&a(),a(c));for(var s=0;s<e[c].length;s++)t=e[c][s],1===r?"<"===t?(a(),l=[l],r=3):o+=t:4===r?o="--"===o&&">"===t?(r=1,""):t+o[0]:i?t===i?i="":o+=t:'"'===t||"'"===t?i=t:">"===t?(a(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[c][s+1])?(a(),3===r&&(l=l[0]),(l=(r=l)[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(),r=2):o+=t),3===r&&"!--"===o&&(r=4,l=l[0])}return a(),l}(e)),t),arguments,[])).length?t:t[0]}.bind(y);var V=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&s(e,t)}(i,C);var e,t,n,o=_(i);function i(){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c(u(r=o.call(this)),"setConfigValue",function(e,t){var n=h.store;r.setState(c({},e,t)),n[e]=t,h.set(n),p("Value ".concat(r.state[e]," is changed to ").concat(t,"..."),"Settings")}),c(u(r),"toggleChangelog",function(){r.setState({changelogIsOpen:!r.state.changelogIsOpen})}),r.state=l(l({},h.store),{},{changelogIsOpen:!1}),r}return e=i,(t=[{key:"render",value:function(){function e(e){return y("button",{className:n.state.theme===e.theme?"active":null,onClick:function(){return n.setConfigValue("theme",e.theme)}},r[e.theme])}function t(e){return y("button",{className:n.state[e.option]?"active":null,onClick:function(){return n.setConfigValue(e.option,!n.state[e.option])}},e.title)}var n=this,r={default:"Стандартная",orange:"Классическая"};return y("div",{className:"rumc-screen"},y("div",{className:"screen__section"},y("div",{className:"screen__title"},y("h2",null,y("b",null,"Project Agora")," ",y("span",null,"(Настройки)")),y("div",{className:"title__controls"},y("a",{href:"javascript:void(0);",onClick:this.toggleChangelog},y("i",{class:"fa fa-th-list fa-2x"})),y("a",{href:"javascript:void(0);",onClick:function(){return $.toggleSettingsScreen()}},y("i",{class:"fa fa-times-circle fa-2x"})))),this.state.changelogIsOpen?y("div",{className:"screen__changelog"},y(H,null)):null,y("div",{className:"screen__options"},this.state.redesign?y("div",{className:"screen__option"},y("p",null,"Текущая тема"),y(e,{theme:"default"}),y(e,{theme:"orange"})):null,y("div",{className:"screen__option"},y("p",null,"Дополнения"),y(t,{title:"Ожидать загрузки страницы",option:"loader"}),y(t,{title:"Использовать новую тему",option:"redesign"}),y(t,{title:"Сворачивать подписи",option:"hideSignatures"}),y(t,{title:"Скрывать статистику пользователей",option:"hideStats"}),y(t,{title:"Показывать сайдбар",option:"sidebar"})))))}}])&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(),J={duration:200,iterations:1};function X(){if(!document.body.querySelector("#script-config-screen")){var e=document.createElement("div");return e.id="script-config-screen",document.body.insertBefore(e,document.body.querySelector(".topmenu-wrapper")).animate([{opacity:0,transform:"translateX(300px)"},{opacity:100,transform:"translateX(0)"}],J),R(y(V,null),e),e}var t=document.body.querySelector("#script-config-screen");t.animate([{opacity:100,transform:"translateX(0)"},{opacity:0,transform:"translateX(300px)"}],J).finished.then(function(){R(null,t),t.remove()})}var $={renderSettingsButton:function(){var e=document.createElement("div");return e.id="script-config",document.body.querySelector(".topmenu").insertBefore(e,document.body.querySelector(".topmenu-msg")),R(y("a",{href:"javascript:void(0);",onClick:X,class:"topmenu-msg"},y("i",{class:"fa fa-cog"})),e),e},toggleSettingsScreen:X,toggleLoader:function(){if(!document.body.querySelector("#agora-loader")){var e=document.createElement("div");e.id="agora-loader",document.body.insertBefore(e,document.body.querySelector(".topmenu-wrapper")).animate([{opacity:0},{opacity:100}],{duration:50,iterations:1});var t={wrapper:{display:"flex","z-index":999,position:"fixed",width:"100%",height:"100%",bottom:"0px",background:"linear-gradient(0deg, rgba(24,32,41,1) 0%, rgba(24,32,41,0.9) 100%)",WebkitBackdropFilter:"blur(12px)",backdropFilter:"blur(12px)"},loader:{display:"flex",margin:"auto"},heading:{"font-size":"16px",color:"white"}};return R(y("div",{id:"agora-loader",style:t.wrapper},y("div",{className:"loader",style:t.loader},y("h1",{style:t.heading},"Выполняется загрузка страницы..."))),document.body,e),e}var n=document.body.querySelector("#agora-loader");n.animate([{opacity:100},{opacity:0}],J).finished.then(function(){R(null,document.body,n),n.remove()})},animationTimings:J};!function(){document.head.insertAdjacentHTML("beforeend",'<link href="https://raw.githack.com/rogi27/agora/main/dist/base.css" type="text/css" rel="stylesheet">');var e=h.init();e.store.loader&&($.toggleLoader(),window.addEventListener("load",function(){$.toggleLoader()})),e.apply(),$.renderSettingsButton()}()}();