_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{BMua:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=n("vOnD").d.div.withConfig({displayName:"Container",componentId:"ocf5f0-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},QLSJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("qARc")}])},qARc:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),i=n("g4pe"),c=n.n(i),a=n("vOnD"),u=n("ufqH"),s=n("BMua"),d=n("cpVT");function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){var n=e.children,o=e.onClick,i=e.isDisabled,c=e.isLoading,a=l(e,["children","onClick","isDisabled","isLoading"]);return Object(r.jsx)(h,b(b({ref:t,onClick:function(e){"function"===typeof o&&(!i&&!c)&&o(e)},disabled:i||c},a),{},{children:n}))}var h=a.d.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-1niftg9-0"})(["min-width:8rem;background-color:",";font-size:1.1em;color:",";text-align:center;user-select:none;border:1px solid transparent;padding:0.25rem 0.5rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:",";}:disabled{cursor:not-allowed;background-color:",";}"],(function(e){return e.theme.colors.brand}),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(u.a)(.05,t.colors.brand)}),(function(e){var t=e.theme;return Object(u.b)(.2,t.colors.brand)})),g=Object(o.forwardRef)(p),f=a.d.form.withConfig({displayName:"contact__ContactForm",componentId:"umux2u-0"})(["margin:0 10vw;@media (max-width:","){margin:0 3vw;}"],(function(e){return e.theme.breakpoints.mobile})),j=Object(a.c)(["display:block;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:",";background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus{color:#495057;background-color:",";border-color:",";outline:0;box-shadow:0 0 0 0.1rem ",";}"],(function(e){var t=e.theme;return Object(u.b)(.3,t.colors.white)}),(function(e){var t=e.theme;return Object(u.b)(.3,t.colors.white)}),(function(e){var t=e.theme;return Object(u.b)(.3,t.colors.brand)}),(function(e){var t=e.theme;return Object(u.b)(.3,t.colors.brand)})),O=a.d.label.withConfig({displayName:"contact__FormLabel",componentId:"umux2u-1"})(["display:block;margin-bottom:",";margin-top:",";"],(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.small})),w=a.d.textarea.withConfig({displayName:"contact__MessageInput",componentId:"umux2u-2"})([""," height:auto;"],j),v=a.d.input.withConfig({displayName:"contact__EmailInput",componentId:"umux2u-3"})(["",""],j),x=a.d.div.withConfig({displayName:"contact__FormGroup",componentId:"umux2u-4"})(["display:grid;margin-bottom:",";"],(function(e){return e.theme.spacing.medium}));t.default=function(){var e=Object(o.useState)(""),t=e[0],n=e[1],i=Object(o.useState)(""),a=i[0],u=i[1],d=t.length>2&&a.length>2;return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"Contact | Egor Philippov"})}),Object(r.jsxs)(f,{action:"https://formspree.io/philippovegor@gmail.com",method:"POST",children:[Object(r.jsxs)(x,{children:[Object(r.jsx)(O,{htmlFor:"email",children:"Email"}),Object(r.jsx)(v,{id:"email",name:"email",type:"email",onChange:function(e){return n(e.target.value)}})]}),Object(r.jsxs)(x,{children:[Object(r.jsx)(O,{htmlFor:"message",children:"Message"}),Object(r.jsx)(w,{id:"message",name:"message",rows:3,onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)("input",{type:"hidden",name:"_next",value:"https://www.egorphilippov.me/success"}),Object(r.jsx)(g,{isDisabled:!d,type:"submit",children:"Submit"})]})]})}}},[["QLSJ",0,1,2,4]]]);