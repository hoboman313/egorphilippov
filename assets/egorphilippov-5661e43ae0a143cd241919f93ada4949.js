"use strict";define("egorphilippov/app",["exports","ember","egorphilippov/resolver","ember-load-initializers","egorphilippov/config/environment"],function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0});var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:r.default}),(0,n.default)(i,o.default.modulePrefix),e.default=i}),define("egorphilippov/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/header-navbar",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0});var r=t.default.Component;e.default=r.extend({actions:{emailMe:function(){window.open("mailto:philippovegor@gmail.com?subject=Hello Egor!","_blank")}}})}),define("egorphilippov/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("egorphilippov/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/components/site-footer",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({tagName:"footer",elementId:"footer"})}),define("egorphilippov/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.andHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.andHelper)),e.default=n}),define("egorphilippov/helpers/app-version",["exports","ember","egorphilippov/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r,n){function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.hideSha?i.match(n.versionRegExp)[0]:t.hideVersion?i.match(n.shaRegExp)[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o;var i=r.default.APP.version;e.default=t.default.Helper.helper(o)}),define("egorphilippov/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.equalHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.equalHelper)),e.default=n}),define("egorphilippov/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.gtHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.gtHelper)),e.default=n}),define("egorphilippov/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.gteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.gteHelper)),e.default=n}),define("egorphilippov/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.isArrayHelper)),e.default=n}),define("egorphilippov/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("egorphilippov/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("egorphilippov/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("egorphilippov/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.ltHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.ltHelper)),e.default=n}),define("egorphilippov/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.lteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.lteHelper)),e.default=n}),define("egorphilippov/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.notEqualHelper)),e.default=n}),define("egorphilippov/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.notHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.notHelper)),e.default=n}),define("egorphilippov/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.orHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.orHelper)),e.default=n}),define("egorphilippov/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=null;t.default.Helper?n=t.default.Helper.helper(r.xorHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.xorHelper)),e.default=n}),define("egorphilippov/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","egorphilippov/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=r.default.APP,o=n.name,i=n.version;e.default={name:"App Version",initialize:(0,t.default)(o,i)}}),define("egorphilippov/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("egorphilippov/initializers/export-application-global",["exports","ember","egorphilippov/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(!1!==r.default.exportApplicationGlobal){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var o,i=r.default.exportApplicationGlobal;o="string"==typeof i?i:t.default.String.classify(r.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("egorphilippov/initializers/liquid-fire",["exports","liquid-fire/ember-internals"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("egorphilippov/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,o,i,l,a,s,p,u,d,f){function c(){t.default.Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",o.orHelper),(0,r.registerHelper)("eq",i.equalHelper),(0,r.registerHelper)("not",l.notHelper),(0,r.registerHelper)("is-array",a.isArrayHelper),(0,r.registerHelper)("not-eq",s.notEqualHelper),(0,r.registerHelper)("gt",p.gtHelper),(0,r.registerHelper)("gte",u.gteHelper),(0,r.registerHelper)("lt",d.ltHelper),(0,r.registerHelper)("lte",f.lteHelper))}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=c,e.default={name:"truth-helpers",initialize:c}}),define("egorphilippov/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/router",["exports","ember","egorphilippov/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});n.map(function(){this.route("projects"),this.route("resume")}),e.default=n}),define("egorphilippov/routes/index",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({afterModel:function(){document.title="Egor Philippov"}})}),define("egorphilippov/routes/projects",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({afterModel:function(){document.title="Projects"}})}),define("egorphilippov/routes/resume",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({afterModel:function(){document.title="Resumé"}})}),define("egorphilippov/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("egorphilippov/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3g18XCL4",block:'{"statements":[[11,"div",[]],[15,"class","container"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","row"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","col-xs-10 col-xs-offset-1 initial-position"],[13],[0,"\\n      "],[1,[26,["header-navbar"]],false],[0,"\\n\\n      "],[1,[26,["liquid-outlet"]],false],[0,"\\n\\n      "],[1,[26,["site-footer"]],false],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"id","border-t"],[15,"class","site-border"],[13],[14],[0,"\\n"],[11,"div",[]],[15,"id","border-r"],[15,"class","site-border"],[13],[14],[0,"\\n"],[11,"div",[]],[15,"id","border-b"],[15,"class","site-border"],[13],[14],[0,"\\n"],[11,"div",[]],[15,"id","border-l"],[15,"class","site-border"],[13],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/application.hbs"}})}),define("egorphilippov/templates/components/header-navbar",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"0qsxeY8o",block:'{"statements":[[11,"nav",[]],[15,"class","navbar navbar-default navbar-static-top"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","navbar-header"],[13],[0,"\\n      "],[11,"button",[]],[15,"type","button"],[15,"class","navbar-toggle collapsed"],[15,"data-toggle","collapse"],[15,"data-target","#navbar"],[15,"aria-expanded","false"],[15,"aria-controls","navbar"],[13],[0,"\\n          "],[11,"span",[]],[15,"class","sr-only"],[13],[0,"Toggle navigation"],[14],[0,"\\n          "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n          "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n          "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n      "],[14],[0,"\\n      "],[6,["link-to"],["index"],null,{"statements":[[11,"img",[]],[15,"src","me-4d90fbcb6b4a8d0632d52ee6576047d8.jpg"],[15,"class","navbar-image"],[13],[14]],"locals":[]},null],[0,"\\n  "],[14],[0,"\\n  "],[11,"div",[]],[15,"id","navbar"],[15,"class","collapse navbar-collapse"],[13],[0,"\\n      "],[11,"ul",[]],[15,"class","nav navbar-nav navbar-right"],[13],[0,"\\n          "],[11,"li",[]],[13],[6,["link-to"],["index"],null,{"statements":[[0,"Home"]],"locals":[]},null],[14],[0,"\\n          "],[11,"li",[]],[13],[6,["link-to"],["projects"],null,{"statements":[[0,"Projects"]],"locals":[]},null],[14],[0,"\\n          "],[11,"li",[]],[13],[6,["link-to"],["resume"],null,{"statements":[[0,"Resumé"]],"locals":[]},null],[14],[0,"\\n          "],[11,"li",[]],[13],[11,"a",[]],[15,"href","#"],[15,"title","philippovegor@gmail.com"],[5,["action"],[[28,[null]],"emailMe"]],[13],[0,"Contact"],[14],[14],[0,"\\n      "],[14],[0,"\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/components/header-navbar.hbs"}})}),define("egorphilippov/templates/components/site-footer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"BBf2++Wu",block:'{"statements":[[11,"ul",[]],[15,"class","list-unstyled list-inline text-right"],[13],[0,"\\n    "],[11,"li",[]],[13],[0,"\\n        "],[11,"p",[]],[15,"id","findMeOnLabel"],[13],[0,"- Find me on"],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"li",[]],[13],[0,"\\n      "],[11,"a",[]],[15,"href","https://www.instagram.com/lifeofegor/"],[15,"target","_blank"],[15,"title","Instagram"],[13],[1,[33,["fa-icon"],null,[["icon","size"],["fa-instagram",2]]],false],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"li",[]],[13],[0,"\\n        "],[11,"a",[]],[15,"href","https://github.com/hoboman313"],[15,"target","_blank"],[15,"title","GitHub"],[13],[1,[33,["fa-icon"],null,[["icon","size"],["fa-github",2]]],false],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"li",[]],[13],[0,"\\n        "],[11,"a",[]],[15,"href","https://ca.linkedin.com/in/egor-philippov-1482207b"],[15,"target","_blank"],[15,"title","Linkedin"],[13],[1,[33,["fa-icon"],null,[["icon","size"],["fa-linkedin-workaround",2]]],false],[14],[0,"\\n    "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/components/site-footer.hbs"}})}),define("egorphilippov/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"RN+4oOLz",block:'{"statements":[[11,"p",[]],[15,"id","hello"],[13],[0,"- Hello"],[14],[0,"\\n"],[11,"h3",[]],[13],[0,"Is it me you\'re looking for? My name is "],[11,"span",[]],[15,"class","white"],[13],[0,"Egor Philippov"],[14],[0," and I\'m a passionate "],[11,"span",[]],[15,"class","white"],[13],[0,"Full Stack Software Engineer"],[14],[0," that specializes in "],[11,"span",[]],[15,"class","white"],[13],[0,"front end web development"],[14],[0,". You may have heard of me from "],[11,"a",[]],[15,"href","https://www.huegasm.com"],[15,"class","white"],[15,"target","_blank"],[13],[0,"Huegasm"],[14],[0," or "],[11,"a",[]],[15,"href","https://www.tomati.io"],[15,"class","white"],[15,"target","_blank"],[13],[0,"Tomati"],[14],[0," . I currently work full time and reside in "],[11,"span",[]],[15,"class","white"],[13],[0,"Vancouver"],[14],[0,", Canada."],[14],[0,"\\n\\n"],[11,"h3",[]],[13],[0,"I am always looking for exciting new opportunities. Feel free to contact me through the link in the top right corner."],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/index.hbs"}})}),define("egorphilippov/templates/projects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"UvRkctnz",block:'{"statements":[[11,"div",[]],[15,"class","container"],[15,"id","projects-page"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://www.tomati.io/"],[15,"target","_blank"],[13],[0,"Tomati"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://www.tomati.io/"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"Tomati"],[14],[0,"\\n            A web app for restaurant review aggregation with an emphasis on publicly available health inspection reports.\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://emberjs.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-ember"],[15,"title","Ember"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","http://aws.amazon.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-aws"],[15,"title","AWS"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://github.com/hoboman313/TomatiMobile"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-react"],[15,"title","React Native Client"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","http://getbootstrap.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-nodejs"],[15,"title","Node.js"],[13],[14],[14],[0,"\\n        "],[14],[0,"\\n    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://www.huegasm.com/"],[15,"target","_blank"],[13],[0,"Huegasm"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://www.huegasm.com/"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"Huegasm"],[14],[0,"\\n            A web app for managing and synchronizing your music with your Philips Hue lights. - "],[11,"a",[]],[15,"href","https://github.com/hoboman313/huegasm"],[15,"target","_blank"],[13],[0,"Source"],[14],[0,"\\n            "],[11,"br",[]],[13],[14],[0,"\\n            Android app up on the Play Store "],[11,"a",[]],[15,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[15,"target","_blank"],[15,"rel","noopener noreferrer"],[13],[0,"Here"],[14],[0,"\\n            "],[11,"br",[]],[13],[14],[0,"\\n            Chrome extension up on the Chrome Web Store "],[11,"a",[]],[15,"href","https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"],[15,"target","_blank"],[15,"rel","noopener noreferrer"],[13],[0,"Here"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://emberjs.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-ember"],[15,"title","Ember"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","http://getbootstrap.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-bootstrap"],[15,"title","Bootstrap"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-android"],[15,"title","Huegasm on the PlayStore"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://github.com/hoboman313/huegasm"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-github_badge"],[15,"title","Source on Github"],[13],[14],[14],[0,"\\n        "],[14],[0,"\\n    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","https://hoboman313.github.io/snakey"],[15,"target","_blank"],[13],[0,"Snakey"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","https://hoboman313.github.io/snakey"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"Snakey"],[14],[0,"\\n            A pure HTML/Javascript recreation of the old school Snake game. - "],[11,"a",[]],[15,"href","https://github.com/hoboman313/snakey"],[15,"target","_blank"],[13],[0,"Source"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://emberjs.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-ember"],[15,"title","Ember"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://github.com/hoboman313/snakey"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-github_badge"],[15,"title","Source on Github"],[13],[14],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","overlay"],[13],[14],[0,"\\n    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","https://tictacweep.herokuapp.com"],[15,"target","_blank"],[13],[0,"Tic Tac Weep"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","https://tictacweep.herokuapp.com"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"Tic Tac Weep"],[14],[0,"\\n            A game of tic tac toe where the user is matched a CPU player and will never win. - "],[11,"a",[]],[15,"href","https://github.com/hoboman313/tictacweep"],[15,"target","_blank"],[13],[0,"Source"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://emberjs.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-ember"],[15,"title","Ember"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://nodejs.org/en/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-nodejs"],[15,"title","Node.js"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://github.com/hoboman313/tictacweep"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-github_badge"],[15,"title","Source on Github"],[13],[14],[14],[0,"\\n        "],[14],[0,"\\n    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://chat-random.herokuapp.com/"],[15,"target","_blank"],[13],[0,"Chat Random"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://chat-random.herokuapp.com/"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"Chat Random"],[14],[0,"\\n            A simple, WebSocket based chat client. - "],[11,"a",[]],[15,"href","https://github.com/hoboman313/chat-random"],[15,"target","_blank"],[13],[0,"Source"],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n            "],[11,"a",[]],[15,"href","http://emberjs.com/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-ember"],[15,"title","Ember"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://nodejs.org/en/"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-nodejs"],[15,"title","Node.js"],[13],[14],[14],[0,"\\n            "],[11,"a",[]],[15,"href","https://github.com/hoboman313/chat-random"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-github_badge"],[15,"title","Source on Github"],[13],[14],[14],[0,"\\n        "],[14],[0,"\\n    "],[14],[0,"\\n\\n  "],[11,"div",[]],[15,"class","row vcenter"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","col-xs-2 hidden-xs"],[13],[0,"\\n      "],[11,"a",[]],[15,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[15,"target","_blank"],[13],[0,"AMXX CS 1.6 Modding"],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"div",[]],[15,"class","col-sm-4 col-xs-6"],[13],[0,"\\n      "],[11,"a",[]],[15,"href","http://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"],[15,"class","visible-xs project-title"],[15,"target","_blank"],[13],[0,"AMXX CS 1.6 Modding"],[14],[0,"\\n      Wrote a number of semi-popular plugins for Counter Strike 1.6.\\n    "],[14],[0,"\\n    "],[11,"div",[]],[15,"class","col-sm-6 col-xs-4"],[13],[0,"\\n      "],[11,"a",[]],[15,"href","http://www.compuphase.com/pawn/pawn.htm"],[15,"target","_blank"],[13],[11,"span",[]],[15,"class","devicons devicons-code"],[15,"title","PAWN"],[13],[14],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/projects.hbs"}})}),define("egorphilippov/templates/resume",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"b12sNyzF",block:'{"statements":[[11,"iframe",[]],[15,"width","100%"],[15,"id","resume-frame"],[15,"src","/resume.pdf"],[13],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"egorphilippov/templates/resume.hbs"}})}),define("egorphilippov/transitions",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.transition(this.fromRoute("index"),this.toRoute(["resume","projects"]),this.use("toRight"),this.reverse("toLeft")),this.transition(this.fromRoute("projects"),this.toRoute("resume"),this.use("toRight"),this.reverse("toLeft"))}}),define("egorphilippov/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),
define("egorphilippov/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("egorphilippov/config/environment",["ember"],function(e){try{var t="egorphilippov/config/environment",r=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(r)),o={default:n};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("egorphilippov/app").default.create({name:"egorphilippov",version:"0.0.0+c7f7ed5c"});