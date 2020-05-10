"use strict"
define("egorphilippov/app",["exports","egorphilippov/resolver","ember-load-initializers","egorphilippov/config/environment"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(o,n.default.modulePrefix)
var i=o
e.default=i})),define("egorphilippov/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/header-navbar",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t})),define("egorphilippov/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-child",["exports","liquid-fire/components/liquid-child"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-container",["exports","liquid-fire/components/liquid-container"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-if",["exports","liquid-fire/components/liquid-if"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})})),define("egorphilippov/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/components/site-footer",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"footer",elementId:"footer"})
e.default=t})),define("egorphilippov/controllers/contact",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({submitEnabled:Ember.computed("email","message",(function(){return this.get("email.length")>=3&&this.get("message.length")>=3}))})
e.default=t})),define("egorphilippov/helpers/and",["exports","ember-truth-helpers/helpers/and"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})})),define("egorphilippov/helpers/app-version",["exports","egorphilippov/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,l=null
return i&&(n.showExtended&&(l=o.match(r.versionExtendedRegExp)),l||(l=o.match(r.versionRegExp))),a&&(l=o.match(r.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("egorphilippov/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})})),define("egorphilippov/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})})),define("egorphilippov/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})})),define("egorphilippov/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})})),define("egorphilippov/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})})),define("egorphilippov/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})})),define("egorphilippov/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})})),define("egorphilippov/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})})),define("egorphilippov/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})})),define("egorphilippov/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})})),define("egorphilippov/helpers/not",["exports","ember-truth-helpers/helpers/not"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}))
define("egorphilippov/helpers/or",["exports","ember-truth-helpers/helpers/or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})),define("egorphilippov/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})),define("egorphilippov/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","egorphilippov/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("egorphilippov/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("egorphilippov/initializers/export-application-global",["exports","egorphilippov/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("egorphilippov/initializers/liquid-fire",["exports","liquid-fire/velocity-ext"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"liquid-fire",initialize:function(){}}})),define("egorphilippov/resolver",["exports","ember-resolver"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("egorphilippov/router",["exports","egorphilippov/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map((function(){this.route("projects"),this.route("resume"),this.route("contact"),this.route("thanks")}))
var n=r
e.default=n})),define("egorphilippov/routes/contact",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({afterModel:function(){document.title="Contact"}})
e.default=t})),define("egorphilippov/routes/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({afterModel:function(){document.title="Egor Philippov"}})
e.default=t})),define("egorphilippov/routes/projects",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({afterModel:function(){document.title="Projects"}})
e.default=t})),define("egorphilippov/routes/resume",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({afterModel:function(){document.title="Resumé"}})
e.default=t})),define("egorphilippov/routes/thanks",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({afterModel:function(){document.title="Success!"}})
e.default=t})),define("egorphilippov/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("egorphilippov/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rBEa9p6I",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","liquid-container"],[8],[0,"\\n  "],[7,"div",true],[10,"class","row"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-xs-10 col-xs-offset-1 initial-position"],[8],[0,"\\n      "],[1,[22,"header-navbar"],false],[0,"\\n\\n      "],[1,[22,"liquid-outlet"],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[1,[22,"site-footer"],false],[0,"\\n\\n"],[7,"div",true],[10,"id","border-t"],[10,"class","site-border"],[8],[9],[0,"\\n"],[7,"div",true],[10,"id","border-r"],[10,"class","site-border"],[8],[9],[0,"\\n"],[7,"div",true],[10,"id","border-b"],[10,"class","site-border"],[8],[9],[0,"\\n"],[7,"div",true],[10,"id","border-l"],[10,"class","site-border"],[8],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/application.hbs"}})
e.default=t})),define("egorphilippov/templates/components/header-navbar",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7nXVYtR+",block:'{"symbols":[],"statements":[[7,"nav",true],[10,"class","navbar navbar-default navbar-static-top"],[8],[0,"\\n  "],[7,"div",true],[10,"class","navbar-header"],[8],[0,"\\n    "],[7,"button",true],[10,"class","navbar-toggle collapsed"],[10,"data-toggle","collapse"],[10,"data-target","#navbar"],[10,"aria-expanded","false"],[10,"aria-controls","navbar"],[10,"type","button"],[8],[0,"\\n      "],[7,"span",true],[10,"class","sr-only"],[8],[0,"Toggle navigation"],[9],[0,"\\n      "],[7,"span",true],[10,"class","icon-bar"],[8],[9],[0,"\\n      "],[7,"span",true],[10,"class","icon-bar"],[8],[9],[0,"\\n      "],[7,"span",true],[10,"class","icon-bar"],[8],[9],[0,"\\n    "],[9],[0,"\\n    "],[4,"link-to",null,[["route"],["index"]],{"statements":[[7,"img",true],[10,"src","images/me-4d90fbcb6b4a8d0632d52ee6576047d8.jpg"],[10,"class","navbar-image"],[8],[9]],"parameters":[]},null],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"id","navbar"],[10,"class","collapse navbar-collapse"],[8],[0,"\\n    "],[7,"ul",true],[10,"class","nav navbar-nav navbar-right"],[8],[0,"\\n      "],[7,"li",true],[8],[4,"link-to",null,[["route"],["index"]],{"statements":[[0,"Home"]],"parameters":[]},null],[9],[0,"\\n      "],[7,"li",true],[8],[4,"link-to",null,[["route"],["projects"]],{"statements":[[0,"Projects"]],"parameters":[]},null],[9],[0,"\\n      "],[7,"li",true],[8],[4,"link-to",null,[["route"],["resume"]],{"statements":[[0,"Resumé"]],"parameters":[]},null],[9],[0,"\\n      "],[7,"li",true],[8],[4,"link-to",null,[["route"],["contact"]],{"statements":[[0,"Contact"]],"parameters":[]},null],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/header-navbar.hbs"}})
e.default=t})),define("egorphilippov/templates/components/site-footer",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"g2Ob4+Xk",block:'{"symbols":[],"statements":[[7,"ul",true],[10,"class","list-unstyled list-inline text-right"],[8],[0,"\\n  "],[7,"li",true],[8],[0,"\\n    "],[7,"p",true],[10,"id","find-me-on-label"],[8],[0,"- Find me on"],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"li",true],[8],[0,"\\n    "],[7,"a",true],[10,"href","https://github.com/lone-cloud"],[10,"target","_blank"],[8],[7,"i",true],[10,"class","fa fa-2x fa-github"],[10,"aria-hidden","true"],[8],[9],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"li",true],[8],[0,"\\n    "],[7,"a",true],[10,"href","https://ca.linkedin.com/in/egor-philippov-1482207b"],[10,"target","_blank"],[8],[7,"i",true],[10,"class","fa fa-2x fa-linkedin"],[10,"aria-hidden","true"],[8],[9],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/site-footer.hbs"}})
e.default=t})),define("egorphilippov/templates/contact",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7UcGs8dL",block:'{"symbols":[],"statements":[[7,"form",true],[10,"action","https://formspree.io/philippovegor@gmail.com"],[10,"method","POST"],[8],[0,"\\n  "],[7,"div",true],[10,"class","form-group"],[8],[0,"\\n    "],[7,"label",true],[8],[0,"Email"],[9],[0,"\\n    "],[1,[28,"input",null,[["value","name","type","class"],[[24,["email"]],"email","email","form-control"]]],false],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","form-group"],[8],[0,"\\n    "],[7,"label",true],[8],[0,"Message"],[9],[0,"\\n    "],[1,[28,"textarea",null,[["value","name","class","rows"],[[24,["message"]],"message","form-control","3"]]],false],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"input",true],[10,"name","_next"],[10,"value","https://www.egorphilippov.me/thanks"],[10,"type","hidden"],[8],[9],[0,"\\n\\n  "],[7,"button",true],[11,"disabled",[28,"not",[[24,["submitEnabled"]]],null]],[10,"class","btn btn-default"],[10,"type","submit"],[8],[0,"Submit"],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/contact.hbs"}})
e.default=t})),define("egorphilippov/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"+veqtmkm",block:'{"symbols":[],"statements":[[7,"p",true],[10,"id","hello"],[8],[0,"\\n  - Hello\\n"],[9],[0,"\\n\\n"],[7,"h3",true],[8],[0,"\\n  Is it me you\'re looking for?\\n  My name is\\n  "],[7,"span",true],[10,"class","white"],[8],[0,"Egor Philippov"],[9],[0," and I\'m a passionate\\n  "],[7,"span",true],[10,"class","white"],[8],[0,"Full Stack Software Engineer"],[9],[0,".\\n  I am comfortable working on the server, browser or mobile.\\n  You may have heard of me from\\n  "],[7,"a",true],[10,"href","https://www.tomati.io"],[10,"class","white"],[10,"target","_blank"],[8],[0,"Tomati"],[9],[0,"\\n  or\\n  "],[7,"a",true],[10,"href","http://www.huegasm.com"],[10,"class","white"],[10,"target","_blank"],[8],[0,"Huegasm"],[9],[0,".\\n"],[9],[0,"\\n\\n"],[7,"h3",true],[8],[0,"\\n  I am always looking for exciting new opportunities (👌remote 👌contract ⛔recruiters/agencies)."],[7,"br",true],[8],[9],[0,"\\n  Feel free to "],[4,"link-to",null,[["class","route"],["white","contact"]],{"statements":[[0,"contact me"]],"parameters":[]},null],[0,".\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/index.hbs"}})
e.default=t})),define("egorphilippov/templates/projects",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"4N6CcK3S",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","fluid-container"],[10,"id","projects-page"],[8],[0,"\\n  "],[7,"div",true],[10,"class","highlighted-row"],[8],[0,"\\n    "],[7,"div",true],[10,"class","row vcenter"],[8],[0,"\\n      "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n        "],[7,"a",true],[10,"href","http://www.huegasm.com/"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"Huegasm"],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n        "],[7,"a",true],[10,"href","http://www.huegasm.com/"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"Huegasm"],[9],[0,"\\n        "],[7,"p",true],[8],[0,"An app for managing and synchronizing your music with your Philips Hue lights."],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n        "],[7,"a",true],[10,"href","http://emberjs.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-ember"],[10,"title","Ember"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","http://getbootstrap.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-bootstrap"],[10,"title","Bootstrap"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-android"],[10,"title","Huegasm on the Google Play Store"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-apple"],[10,"title","Huegasm on the App Store"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","https://github.com/hoboman313/huegasm"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-github_badge"],[10,"title","Source on Github"],[8],[9],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","store-badges"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"],[10,"class","chrome-store-icon"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/chrome-store-badge-d554d50717e1911ec4a4d561feec8eeb.png"],[10,"title","Chrome extension"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"a",true],[10,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[10,"class","play-store-icon"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/android-play-badge-db9b21a1c41f3dcd9731e1e7acfdbb57.png"],[10,"title","Android app"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"a",true],[10,"href","https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485"],[10,"class","app-store-icon"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/app-store-badge.svg"],[10,"alt","iOS app"],[8],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","project-screens"],[8],[0,"\\n      "],[7,"div",true],[10,"class","col-sm-4 col-xs-12"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/huegasm-1-60e4aa494d3e6f940af3341ed21a80f4.jpg"],[10,"alt","Huegasm screenshot #1"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-4 col-xs-12"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/huegasm-2-b7b26597989f54a25127332ae5e48e01.jpg"],[10,"alt","Huegasm screenshot #2"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-4 col-xs-12"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/huegasm-3-c3ee68307bc797c71ac4bd9990b68099.jpg"],[10,"alt","Huegasm screenshot #3"],[8],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","highlighted-row"],[8],[0,"\\n    "],[7,"div",true],[10,"class","row vcenter"],[8],[0,"\\n      "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n        "],[7,"a",true],[10,"href","http://www.tomati.io/"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"Tomati"],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n        "],[7,"a",true],[10,"href","http://www.tomati.io/"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"Tomati"],[9],[0,"\\n        A mobile app that aggregates health inspections reports with restaurant reviews.\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n        "],[7,"a",true],[10,"href","https://facebook.github.io/react-native/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-react"],[10,"title","React Native"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","https://nodejs.org/en/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-nodejs"],[10,"title","Node.js"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","http://aws.amazon.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-aws"],[10,"title","AWS"],[8],[9],[9],[0,"\\n        "],[7,"a",true],[10,"href","https://play.google.com/store/apps/details?id=com.nidratech.tomati"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-android"],[10,"title","Huegasm on the Google Play Store"],[8],[9],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","store-badges"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://play.google.com/store/apps/details?id=com.nidratech.tomati"],[10,"class","play-store-icon"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/android-play-badge-db9b21a1c41f3dcd9731e1e7acfdbb57.png"],[10,"title","Android app"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"a",true],[10,"href","https://itunes.apple.com/us/app/tomati-restaurant-inspector/id1440846554"],[10,"class","app-store-icon"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/app-store-badge.svg"],[10,"alt","iOS app"],[8],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","project-screens"],[8],[0,"\\n      "],[7,"div",true],[10,"class","col-sm-4"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/tomati-1-3a9e5945daa7a93aaeb43a3325ad769b.jpg"],[10,"alt","Tomati screenshot #1"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-4"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/tomati-4-98e8eb14028f38ee8dff0c6433556e32.jpg"],[10,"alt","Tomati screenshot #2"],[8],[9],[0,"\\n      "],[9],[0,"\\n\\n      "],[7,"div",true],[10,"class","col-sm-4"],[8],[0,"\\n        "],[7,"img",true],[10,"src","images/tomati-2-778dc3e08d0677d47ceae08911ba3d56.jpg"],[10,"alt","Tomati screenshot #3"],[8],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","highlighted-row row vcenter"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://hoboman313.github.io/snakey"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"Snakey"],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://hoboman313.github.io/snakey"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"Snakey"],[9],[0,"\\n      A pure HTML/Javascript recreation of the old school Snake game.\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://emberjs.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-ember"],[10,"title","Ember"],[8],[9],[9],[0,"\\n      "],[7,"a",true],[10,"href","https://github.com/hoboman313/snakey"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-github_badge"],[10,"title","Source on Github"],[8],[9],[9],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[10,"class","overlay"],[8],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","highlighted-row row vcenter"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://tictacweep.herokuapp.com"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"Tic Tac Weep"],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n      "],[7,"a",true],[10,"href","https://tictacweep.herokuapp.com"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"Tic Tac Weep"],[9],[0,"\\n      A game of tic tac toe where the user is matched a CPU player and will never win.\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://emberjs.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-ember"],[10,"title","Ember"],[8],[9],[9],[0,"\\n      "],[7,"a",true],[10,"href","https://nodejs.org/en/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-nodejs"],[10,"title","Node.js"],[8],[9],[9],[0,"\\n      "],[7,"a",true],[10,"href","https://github.com/hoboman313/tictacweep"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-github_badge"],[10,"title","Source on Github"],[8],[9],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","highlighted-row row vcenter"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://chat-random.herokuapp.com/"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"Chat Random"],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://chat-random.herokuapp.com/"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"Chat Random"],[9],[0,"\\n      A simple, WebSocket based chat client.\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://emberjs.com/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-ember"],[10,"title","Ember"],[8],[9],[9],[0,"\\n      "],[7,"a",true],[10,"href","https://nodejs.org/en/"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-nodejs"],[10,"title","Node.js"],[8],[9],[9],[0,"\\n      "],[7,"a",true],[10,"href","https://github.com/hoboman313/chat-random"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-github_badge"],[10,"title","Source on Github"],[8],[9],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","highlighted-row row vcenter"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-xs-2 hidden-xs"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[10,"target","_blank"],[10,"class","project-title"],[8],[0,"\\n        AMXX CS 1.6 Modding\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-8"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[10,"class","visible-xs project-desc"],[10,"target","_blank"],[8],[0,"AMXX CS 1.6 Modding"],[9],[0,"\\n      Wrote a number of plugins for Counter Strike 1.6.\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","col-sm-5 col-xs-4 text-center"],[8],[0,"\\n      "],[7,"a",true],[10,"href","http://www.compuphase.com/pawn/pawn.htm"],[10,"target","_blank"],[8],[7,"span",true],[10,"class","devicons devicons-code"],[10,"title","PAWN"],[8],[9],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/projects.hbs"}})
e.default=t})),define("egorphilippov/templates/resume",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"pjBMFnKz",block:'{"symbols":[],"statements":[[7,"object",true],[10,"data","/resume.pdf"],[10,"width","100%"],[10,"class","resume-frame"],[10,"type","application/pdf"],[8],[0,"\\n  "],[7,"iframe",true],[10,"width","100%"],[10,"class","resume-frame"],[10,"src","https://docs.google.com/viewer?url=https://www.egorphilippov.me/resume.pdf&embedded=true"],[8],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/resume.hbs"}})
e.default=t})),define("egorphilippov/templates/thanks",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"9WVh+oMV",block:'{"symbols":[],"statements":[[7,"p",true],[10,"class","text-center success-sent"],[8],[0,"\\n  Your email has been successfuly sent.\\n"],[9]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/thanks.hbs"}})
e.default=t})),define("egorphilippov/transitions",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.transition(this.fromRoute("index"),this.toRoute(["resume","projects","contact"]),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight")),this.transition(this.fromRoute("projects"),this.toRoute(["resume","contact"]),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight")),this.transition(this.fromRoute("resume"),this.toRoute("contact"),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight"))}})),define("egorphilippov/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/default",["exports","liquid-fire/transitions/default"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/explode",["exports","liquid-fire/transitions/explode"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/fade",["exports","liquid-fire/transitions/fade"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/move-over",["exports","liquid-fire/transitions/move-over"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("egorphilippov/transitions/scale",["exports","liquid-fire/transitions/scale"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/to-down",["exports","liquid-fire/transitions/to-down"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/to-left",["exports","liquid-fire/transitions/to-left"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/to-right",["exports","liquid-fire/transitions/to-right"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/to-up",["exports","liquid-fire/transitions/to-up"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/transitions/wait",["exports","liquid-fire/transitions/wait"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("egorphilippov/config/environment",[],(function(){try{var e="egorphilippov/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("egorphilippov/app").default.create({name:"egorphilippov",version:"0.0.0+295db698"})