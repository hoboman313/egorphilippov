"use strict"
define("egorphilippov/app",["exports","egorphilippov/resolver","ember-load-initializers","egorphilippov/config/environment"],function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,o.default.modulePrefix),e.default=i}),define("egorphilippov/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/header-navbar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("egorphilippov/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("egorphilippov/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/site-footer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"footer",elementId:"footer"})}),define("egorphilippov/controllers/contact",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({submitEnabled:Ember.computed("email","message",function(){return this.get("email.length")>=3&&this.get("message.length")>=3})})}),define("egorphilippov/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("egorphilippov/helpers/app-version",["exports","egorphilippov/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function o(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,r=o.versionOnly||o.hideSha,a=o.shaOnly||o.hideVersion,l=null
return r&&(o.showExtended&&(l=i.match(n.versionExtendedRegExp)),l||(l=i.match(n.versionRegExp))),a&&(l=i.match(n.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=Ember.Helper.helper(o)}),define("egorphilippov/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("egorphilippov/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("egorphilippov/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("egorphilippov/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("egorphilippov/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("egorphilippov/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("egorphilippov/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("egorphilippov/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("egorphilippov/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("egorphilippov/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("egorphilippov/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("egorphilippov/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})
define("egorphilippov/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("egorphilippov/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","egorphilippov/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=void 0,i=void 0
n.default.APP&&(o=n.default.APP.name,i=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(o,i)}}),define("egorphilippov/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("egorphilippov/initializers/export-application-global",["exports","egorphilippov/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,i=t.default.exportApplicationGlobal
o="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("egorphilippov/initializers/liquid-fire",["exports","liquid-fire/ember-internals","liquid-fire/velocity-ext"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("egorphilippov/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/router",["exports","egorphilippov/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("projects"),this.route("resume"),this.route("contact"),this.route("thanks")}),e.default=n}),define("egorphilippov/routes/contact",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Contact"}})}),define("egorphilippov/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Egor Philippov"}})}),define("egorphilippov/routes/projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Projects"}})}),define("egorphilippov/routes/resume",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Resumé"}})}),define("egorphilippov/routes/thanks",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({afterModel:function(){document.title="Success!"}})}),define("egorphilippov/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wTv5wAtX",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","container"],[9],[0,"\\n  "],[7,"div"],[11,"class","row"],[9],[0,"\\n    "],[7,"div"],[11,"class","col-xs-10 col-xs-offset-1 initial-position"],[9],[0,"\\n      "],[1,[21,"header-navbar"],false],[0,"\\n\\n      "],[1,[21,"liquid-outlet"],false],[0,"\\n\\n      "],[1,[21,"site-footer"],false],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"id","border-t"],[11,"class","site-border"],[9],[10],[0,"\\n"],[7,"div"],[11,"id","border-r"],[11,"class","site-border"],[9],[10],[0,"\\n"],[7,"div"],[11,"id","border-b"],[11,"class","site-border"],[9],[10],[0,"\\n"],[7,"div"],[11,"id","border-l"],[11,"class","site-border"],[9],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/application.hbs"}})}),define("egorphilippov/templates/components/contact-form",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"n3IH/1TL",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/contact-form.hbs"}})}),define("egorphilippov/templates/components/header-navbar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Zyfj0wa/",block:'{"symbols":[],"statements":[[7,"nav"],[11,"class","navbar navbar-default navbar-static-top"],[9],[0,"\\n  "],[7,"div"],[11,"class","navbar-header"],[9],[0,"\\n      "],[7,"button"],[11,"class","navbar-toggle collapsed"],[11,"data-toggle","collapse"],[11,"data-target","#navbar"],[11,"aria-expanded","false"],[11,"aria-controls","navbar"],[11,"type","button"],[9],[0,"\\n          "],[7,"span"],[11,"class","sr-only"],[9],[0,"Toggle navigation"],[10],[0,"\\n          "],[7,"span"],[11,"class","icon-bar"],[9],[10],[0,"\\n          "],[7,"span"],[11,"class","icon-bar"],[9],[10],[0,"\\n          "],[7,"span"],[11,"class","icon-bar"],[9],[10],[0,"\\n      "],[10],[0,"\\n      "],[4,"link-to",["index"],null,{"statements":[[7,"img"],[11,"src","me-4d90fbcb6b4a8d0632d52ee6576047d8.jpg"],[11,"class","navbar-image"],[9],[10]],"parameters":[]},null],[0,"\\n  "],[10],[0,"\\n  "],[7,"div"],[11,"id","navbar"],[11,"class","collapse navbar-collapse"],[9],[0,"\\n      "],[7,"ul"],[11,"class","nav navbar-nav navbar-right"],[9],[0,"\\n          "],[7,"li"],[9],[4,"link-to",["index"],null,{"statements":[[0,"Home"]],"parameters":[]},null],[10],[0,"\\n          "],[7,"li"],[9],[4,"link-to",["projects"],null,{"statements":[[0,"Projects"]],"parameters":[]},null],[10],[0,"\\n          "],[7,"li"],[9],[4,"link-to",["resume"],null,{"statements":[[0,"Resumé"]],"parameters":[]},null],[10],[0,"\\n          "],[7,"li"],[9],[4,"link-to",["contact"],null,{"statements":[[0,"Contact"]],"parameters":[]},null],[10],[0,"\\n      "],[10],[0,"\\n  "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/header-navbar.hbs"}})}),define("egorphilippov/templates/components/site-footer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"A7auKKkp",block:'{"symbols":[],"statements":[[7,"ul"],[11,"class","list-unstyled list-inline text-right"],[9],[0,"\\n    "],[7,"li"],[9],[0,"\\n        "],[7,"p"],[11,"id","findMeOnLabel"],[9],[0,"- Find me on"],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"li"],[9],[0,"\\n        "],[7,"a"],[11,"href","https://www.instagram.com/lifeofegor/"],[11,"target","_blank"],[11,"title","Instagram"],[9],[7,"i"],[11,"class","fa fa-2x fa-instagram"],[11,"aria-hidden","true"],[9],[10],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"li"],[9],[0,"\\n        "],[7,"a"],[11,"href","https://github.com/hoboman313"],[11,"target","_blank"],[11,"title","GitHub"],[9],[7,"i"],[11,"class","fa fa-2x fa-github"],[11,"aria-hidden","true"],[9],[10],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"li"],[9],[0,"\\n        "],[7,"a"],[11,"href","https://ca.linkedin.com/in/egor-philippov-1482207b"],[11,"target","_blank"],[11,"title","Linkedin"],[9],[7,"i"],[11,"class","fa fa-2x fa-linkedin-workaround"],[11,"aria-hidden","true"],[9],[10],[10],[0,"\\n    "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/components/site-footer.hbs"}})}),define("egorphilippov/templates/contact",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"0IkFgcBp",block:'{"symbols":[],"statements":[[7,"form"],[11,"action","https://formspree.io/philippovegor@gmail.com"],[11,"method","POST"],[9],[0,"\\n  "],[7,"div"],[11,"class","form-group"],[9],[0,"\\n    "],[7,"label"],[9],[0,"Email"],[10],[0,"\\n    "],[1,[27,"input",null,[["value","name","type","class"],[[23,["email"]],"email","email","form-control"]]],false],[0,"\\n  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","form-group"],[9],[0,"\\n    "],[7,"label"],[9],[0,"Message"],[10],[0,"\\n    "],[1,[27,"textarea",null,[["value","name","class","rows"],[[23,["message"]],"message","form-control","3"]]],false],[0,"\\n  "],[10],[0,"\\n\\n  "],[7,"input"],[11,"name","_next"],[11,"value","https://www.egorphilippov.me/thanks"],[11,"type","hidden"],[9],[10],[0,"\\n\\n  "],[7,"button"],[12,"disabled",[27,"not",[[23,["submitEnabled"]]],null]],[11,"class","btn btn-default"],[11,"type","submit"],[9],[0,"Submit"],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/contact.hbs"}})}),define("egorphilippov/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"TBnD0C0F",block:'{"symbols":[],"statements":[[7,"p"],[11,"id","hello"],[9],[0,"\\n    - Hello\\n"],[10],[0,"\\n\\n"],[7,"h3"],[9],[0,"\\n    Is it me you\'re looking for? My name is\\n    "],[7,"span"],[11,"class","white"],[9],[0,"Egor Philippov"],[10],[0," and I\'m a passionate\\n    "],[7,"span"],[11,"class","white"],[9],[0,"Full Stack Software Engineer"],[10],[0," that specializes in\\n    "],[7,"span"],[11,"class","white"],[9],[0,"front end web development"],[10],[0,". You may have heard of me from\\n    "],[7,"a"],[11,"href","http://www.huegasm.com"],[11,"class","white"],[11,"target","_blank"],[9],[0,"Huegasm"],[10],[0," or\\n    "],[7,"a"],[11,"href","https://www.tomati.io"],[11,"class","white"],[11,"target","_blank"],[9],[0,"Tomati"],[10],[0," . I currently work remotely from the beautiful\\n    "],[7,"span"],[11,"class","white"],[9],[0,"Vancouver"],[10],[0,", Canada.\\n"],[10],[0,"\\n\\n"],[7,"h3"],[9],[0,"\\n    I am always looking for exciting new opportunities. Currently I\'m only consider contract work, preferably done remotely.\\n    Feel free to contact me through the link in the top right corner.\\n"],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/index.hbs"}})}),define("egorphilippov/templates/projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+eMCaOQt",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","container"],[11,"id","projects-page"],[9],[0,"\\n    "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n        "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://www.huegasm.com/"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"Huegasm"],[10],[0,"\\n        "],[10],[0,"\\n        \\n        "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://www.huegasm.com/"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"Huegasm"],[10],[0,"\\n            A web, Chrome and mobile app for managing and synchronizing your music with your Philips Hue lights. \\n            - "],[7,"a"],[11,"href","https://github.com/hoboman313/huegasm"],[11,"target","_blank"],[9],[0,"Source"],[10],[0,"\\n            "],[7,"br"],[9],[10],[0,"\\n            "],[7,"a"],[11,"href","https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"],[11,"target","_blank"],[11,"rel","noopener noreferrer"],[9],[0,"\\n                Chrome extension\\n            "],[10],[0,"\\n            "],[7,"br"],[9],[10],[0,"\\n            "],[7,"a"],[11,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[11,"target","_blank"],[11,"rel","noopener noreferrer"],[9],[0,"\\n                Android app\\n            "],[10],[0,"\\n            "],[7,"br"],[9],[10],[0,"\\n            "],[7,"a"],[11,"href","https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485"],[11,"target","_blank"],[11,"rel","noopener noreferrer"],[9],[0,"\\n                iOS app\\n            "],[10],[0,"\\n        "],[10],[0,"\\n\\n        "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://emberjs.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-ember"],[11,"title","Ember"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","http://getbootstrap.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-bootstrap"],[11,"title","Bootstrap"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-android"],[11,"title","Huegasm on the Google Play Store"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-apple"],[11,"title","Huegasm on the App Store"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://github.com/hoboman313/huegasm"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-github_badge"],[11,"title","Source on Github"],[9],[10],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n        "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n           "],[7,"a"],[11,"href","http://www.tomati.io/"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"Tomati"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://www.tomati.io/"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"Tomati"],[10],[0,"\\n            An upcoming mobile app for restaurant review aggregation with an emphasis on publicly available health inspection reports.\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n            "],[7,"a"],[11,"href","https://facebook.github.io/react-native/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-react"],[11,"title","React Native"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://nodejs.org/en/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-nodejs"],[11,"title","Node.js"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","http://aws.amazon.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-aws"],[11,"title","AWS"],[9],[10],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n        "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n            "],[7,"a"],[11,"href","https://hoboman313.github.io/snakey"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"Snakey"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n            "],[7,"a"],[11,"href","https://hoboman313.github.io/snakey"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"Snakey"],[10],[0,"\\n            A pure HTML/Javascript recreation of the old school Snake game. - "],[7,"a"],[11,"href","https://github.com/hoboman313/snakey"],[11,"target","_blank"],[9],[0,"Source"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://emberjs.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-ember"],[11,"title","Ember"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://github.com/hoboman313/snakey"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-github_badge"],[11,"title","Source on Github"],[9],[10],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","overlay"],[9],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n        "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n            "],[7,"a"],[11,"href","https://tictacweep.herokuapp.com"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"Tic Tac Weep"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n            "],[7,"a"],[11,"href","https://tictacweep.herokuapp.com"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"Tic Tac Weep"],[10],[0,"\\n            A game of tic tac toe where the user is matched a CPU player and will never win. - "],[7,"a"],[11,"href","https://github.com/hoboman313/tictacweep"],[11,"target","_blank"],[9],[0,"Source"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://emberjs.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-ember"],[11,"title","Ember"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://nodejs.org/en/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-nodejs"],[11,"title","Node.js"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://github.com/hoboman313/tictacweep"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-github_badge"],[11,"title","Source on Github"],[9],[10],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n        "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://chat-random.herokuapp.com/"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"Chat Random"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://chat-random.herokuapp.com/"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"Chat Random"],[10],[0,"\\n            A simple, WebSocket based chat client. - "],[7,"a"],[11,"href","https://github.com/hoboman313/chat-random"],[11,"target","_blank"],[9],[0,"Source"],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n            "],[7,"a"],[11,"href","http://emberjs.com/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-ember"],[11,"title","Ember"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://nodejs.org/en/"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-nodejs"],[11,"title","Node.js"],[9],[10],[10],[0,"\\n            "],[7,"a"],[11,"href","https://github.com/hoboman313/chat-random"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-github_badge"],[11,"title","Source on Github"],[9],[10],[10],[0,"\\n        "],[10],[0,"\\n    "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","row vcenter"],[9],[0,"\\n    "],[7,"div"],[11,"class","col-xs-2 hidden-xs"],[9],[0,"\\n      "],[7,"a"],[11,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[11,"target","_blank"],[11,"class","project-title"],[9],[0,"AMXX CS 1.6 Modding"],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","col-sm-4 col-xs-8"],[9],[0,"\\n      "],[7,"a"],[11,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[11,"class","visible-xs project-desc"],[11,"target","_blank"],[9],[0,"AMXX CS 1.6 Modding"],[10],[0,"\\n      Wrote a number of plugins for Counter Strike 1.6.\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","col-sm-6 col-xs-4"],[9],[0,"\\n      "],[7,"a"],[11,"href","http://www.compuphase.com/pawn/pawn.htm"],[11,"target","_blank"],[9],[7,"span"],[11,"class","devicons devicons-code"],[11,"title","PAWN"],[9],[10],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/projects.hbs"}})}),define("egorphilippov/templates/resume",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"MFXgBSFk",block:'{"symbols":[],"statements":[[7,"iframe"],[11,"width","100%"],[11,"id","resume-frame"],[11,"src","/resume.pdf"],[9],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/resume.hbs"}})}),define("egorphilippov/templates/thanks",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Wpv2mQr3",block:'{"symbols":[],"statements":[[7,"p"],[11,"class","text-center success-sent"],[9],[0,"\\n    Your email has been successfuly sent.\\n"],[10]],"hasEval":false}',meta:{moduleName:"egorphilippov/templates/thanks.hbs"}})}),define("egorphilippov/transitions",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.transition(this.fromRoute("index"),this.toRoute(["resume","projects","contact"]),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight")),this.transition(this.fromRoute("projects"),this.toRoute(["resume","contact"]),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight")),this.transition(this.fromRoute("resume"),this.toRoute("contact"),this.media("(min-width: 768px)"),this.use("toLeft"),this.reverse("toRight"))}}),define("egorphilippov/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("egorphilippov/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/config/environment",[],function(){try{var e="egorphilippov/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("egorphilippov/app").default.create({name:"egorphilippov",version:"0.0.0+3f0d6596"})
