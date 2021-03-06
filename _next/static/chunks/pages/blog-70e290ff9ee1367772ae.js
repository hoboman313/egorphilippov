(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{8078:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var o=n(9163).ZP.div.withConfig({displayName:"Container",componentId:"ocf5f0-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},3367:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var o,r=(o=n(7294))&&o.__esModule?o:{default:o},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,i=e.hasQuery,a=void 0!==i&&i;return n||r&&a}},4287:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},7947:function(e,t,n){"use strict";n(1682);t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(o=n(617))&&o.__esModule?o:{default:o},a=n(3367),s=n(4287),u=n(7845);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var i=!0,a=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){a=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var d=h[u];if(r.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var l=r.props[d],f=o[d]||new Set;"name"===d&&a||!f.has(l)?(f.add(l),o[d]=f):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(a.AmpStateContext),o=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,u.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},617:function(e,t,n){"use strict";var o=n(3115),r=n(2553),i=n(2012),a=(n(450),n(9807)),s=n(7690),u=n(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){a(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},7821:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(9008),i=n(9163),a=n(8078),s=i.ZP.a.withConfig({displayName:"blog__BlogEntryLink",componentId:"sc-11pogob-0"})(["display:block;margin-bottom:",";"],(function(e){return e.theme.spacing.small})),u=i.ZP.div.withConfig({displayName:"blog__BlogIndex",componentId:"sc-11pogob-1"})(["border:1px solid ",";border-radius:0.25rem;padding:",";margin-bottom:",";"],(function(e){return e.theme.colors.brand}),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.large})),c=i.ZP.div.withConfig({displayName:"blog__BlogIndexYear",componentId:"sc-11pogob-2"})(["font-size:0.9em;"]),d=i.ZP.div.withConfig({displayName:"blog__YearTitle",componentId:"sc-11pogob-3"})(["margin-bottom:",";"],(function(e){return e.theme.spacing.small})),l=i.ZP.span.withConfig({displayName:"blog__Italic",componentId:"sc-11pogob-4"})(["font-style:italic;"]),h=i.ZP.div.withConfig({displayName:"blog__Spacer",componentId:"sc-11pogob-5"})(["height:",";"],(function(e){return e.theme.spacing.small})),f=i.ZP.p.withConfig({displayName:"blog__EntryBody",componentId:"sc-11pogob-6"})(["margin-top:",";line-height:1.5;ul li{list-style-type:disc;margin-left:2.5rem;}"],(function(e){return e.theme.spacing.medium})),p=i.ZP.h2.withConfig({displayName:"blog__EntryTitle",componentId:"sc-11pogob-7"})(["color:",";font-size:1.2em;"],(function(e){return e.theme.colors.brand})),m=i.ZP.p.withConfig({displayName:"blog__EntryDate",componentId:"sc-11pogob-8"})(["margin-top:",";font-size:0.9em;"],(function(e){return e.theme.spacing.small})),g=i.ZP.div.withConfig({displayName:"blog__BlogContainer",componentId:"sc-11pogob-9"})(["font-size:1.25em;margin:0 10vw;@media (max-width:","){margin:0 3vw;}"],(function(e){return e.theme.breakpoints.mobile})),b=i.ZP.div.withConfig({displayName:"blog__BlogEntry",componentId:"sc-11pogob-10"})(["margin-top:-80px;padding-top:80px;:after{margin:"," 0;width:100%;content:'';display:block;border-bottom:2px solid ",";}"],(function(e){return e.theme.spacing.large}),(function(e){return e.theme.colors.brand}));t.default=function(){return(0,o.jsxs)(a.W,{children:[(0,o.jsx)(r.default,{children:(0,o.jsx)("title",{children:"Blog | Egor Philippov"})}),(0,o.jsxs)(g,{children:[(0,o.jsx)(u,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)(d,{children:"2021"}),(0,o.jsx)(s,{href:"#huegasm-is-free",children:"Huegasm is now free and a look into the future..."}),(0,o.jsx)(s,{href:"#good-night-sweet-tomati",children:"Good night, sweet Tomati"})]})}),(0,o.jsxs)(b,{id:"huegasm-is-free",children:[(0,o.jsx)(p,{children:"Huegasm is now free and a look into the future..."}),(0,o.jsx)(m,{children:"Feb. 2, 2021"}),(0,o.jsxs)(f,{children:["About 5 years ago I moved to a new apartment and wanted to synchronize my music to the smart light bulbs in my living room."," ",(0,o.jsx)("a",{target:"blank",href:"http://www.huegasm.com/",children:"And so Huegasm was born."})," ","Originally developed solely as a web app for synchronizing music to Philips Hue lights, its best iteration came in the form of a"," ",(0,o.jsx)("a",{target:"blank",href:"https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj",children:"Chrome browser extension"})," ","that, as of today, I am offering for free!",(0,o.jsx)(h,{}),"Why the sudden generosity? The Chrome browser"," ",(0,o.jsx)("a",{target:"blank",href:"https://developer.chrome.com/docs/webstore/cws-payments-deprecation/",children:"team announced that they'll be removing the billing API"}),". The $ that the extension brings in monthly is not worth the trouble of trying to migrate users to a new payment system, especially given that Chrome will not allow exporting of its licensing data. The other big benefit for the user is that they'll now be able to load Huegasm from any other browser that supports extension. Chromium-based browsers like Brave should now start working with Huegasm which is awesome.",(0,o.jsx)(h,{}),"Huegasm was my first real software engineering project outside of my usual client projects and it it has been a fantastic learning experience. It has shown me the importance of a need for a more thought-out business model which would encourage me to provide more updates and support for the future. A one time fee, which was the case with Huegasm, is just not a worthwhile time investment. Of course, all mistakes can be forgiven in the world of business with a stellar marketing execution.",(0,o.jsx)(h,{}),'As I continue to move forward, I want to explore the benefits of creating "long tail" web sites. I must minimize the time spent working on platforms (ex. iOS, Android, Hue) which tend to end up restricting, monetizing and controlling me.']})]}),(0,o.jsxs)(b,{id:"good-night-sweet-tomati",children:[(0,o.jsx)(p,{children:"Good night, sweet Tomati"}),(0,o.jsx)(m,{children:"Jan. 3, 2021"}),(0,o.jsxs)(f,{children:["Four years ago, my team and I started a in-house project called Tomati with a goal to aggregate the health inspection data and use it to rate restaurants across Canada and US. Today we officially calling it quits.",(0,o.jsx)(h,{}),"While it started out as a passion project to try to expose naughty restaurants, I've come to realize that maintaining over a dozen scrappers for crappy government sites was not a good use of our team's time and resources. Getting exposure through Reddit and getting interviewed by the news was cool, but getting harassed by restaurant owners for minimal gain is just not worth it. In the end, we failed to find a way to keep users to coming back and also, don't want to be in the business of selling negativity.",(0,o.jsx)(h,{}),"Lessons Learned:",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["Never cheap out on server auto-scaling in case you accidentally blow up. Getting hugged to death when it's time to shine and getting angry emails and 1 \u2b50 reviews is a very ",(0,o.jsx)(l,{children:"feelsbadman"})," moment."]}),(0,o.jsx)("li",{children:"Reddit is fantastic for marketing and getting feedback. Just need to find the appropriate subreddits and be prepared to engage with its inhabitants."}),(0,o.jsx)("li",{children:"Figure out how the business will be monetized right away. How will you keep the users coming back? This is where the network effect is most powerful."})]}),(0,o.jsx)(h,{}),"On to the next one."]})]})]})]})}},2912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(7821)}])},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var o=n(4360);e.exports=function(e){if(Array.isArray(e))return o(e)}},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var o=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:function(e,t,n){var o=n(7917),r=n(450);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},3115:function(e,t,n){var o=n(8164),r=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return o(e)||r(e)||i(e)||a()}}},0,[[2912,272,774,346]]]);