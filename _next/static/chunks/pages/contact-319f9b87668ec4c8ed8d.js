_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{BMua:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=n("vOnD").d.div.withConfig({displayName:"Container",componentId:"ocf5f0-0"})(["max-width:60rem;margin:auto;margin-top:",";padding:",";@media (max-width:","){max-width:auto;margin:0 ",";padding:",";}"],(function(e){return e.theme.spacing.medium}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.large)}),(function(e){return e.theme.breakpoints.mobile}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.medium)}),(function(e){var t=e.theme;return"0 ".concat(t.spacing.small)}))},QLSJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("qARc")}])},cpVT:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},qARc:function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),r=n("q1tI"),i=n("vOnD"),c=n("ufqH"),a=n("9ixD"),s=n("BMua"),u=n("cpVT");function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){var n=e.children,r=e.onClick,i=e.isDisabled,c=e.isLoading,a=l(e,["children","onClick","isDisabled","isLoading"]);return Object(o.jsx)(p,m(m({ref:t,onClick:function(e){"function"===typeof r&&(!i&&!c)&&r(e)},disabled:i||c},a),{},{children:n}))}var p=i.d.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-1niftg9-0"})(["min-width:8rem;background-color:",";font-size:1.1em;color:",";text-align:center;user-select:none;border:1px solid transparent;padding:0.25rem 0.5rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:",";}:disabled{cursor:not-allowed;background-color:",";}"],(function(e){return e.theme.colors.brand}),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(c.a)(.05,t.colors.brand)}),(function(e){var t=e.theme;return Object(c.b)(.2,t.colors.brand)})),h=Object(r.forwardRef)(b);const g=i.d.form.withConfig({displayName:"contact__ContactForm",componentId:"umux2u-0"})(["margin:0 10vw;@media (max-width:","){margin:0 3vw;}"],(({theme:e})=>e.breakpoints.mobile)),f=Object(i.c)(["display:block;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:",";background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus{color:#495057;background-color:",";border-color:",";outline:0;box-shadow:0 0 0 0.1rem ",";}"],(({theme:e})=>Object(c.b)(.3,e.colors.white)),(({theme:e})=>Object(c.b)(.3,e.colors.white)),(({theme:e})=>Object(c.b)(.3,e.colors.brand)),(({theme:e})=>Object(c.b)(.3,e.colors.brand))),O=i.d.label.withConfig({displayName:"contact__FormLabel",componentId:"umux2u-1"})(["display:block;margin-bottom:",";margin-top:",";"],(({theme:e})=>e.spacing.medium),(({theme:e})=>e.spacing.small)),j=i.d.textarea.withConfig({displayName:"contact__MessageInput",componentId:"umux2u-2"})([""," height:auto;"],f),w=i.d.input.withConfig({displayName:"contact__EmailInput",componentId:"umux2u-3"})(["",""],f),x=i.d.div.withConfig({displayName:"contact__FormGroup",componentId:"umux2u-4"})(["display:grid;margin-bottom:",";"],(({theme:e})=>e.spacing.medium));t.default=()=>{const{0:e,1:t}=Object(r.useState)(""),{0:n,1:i}=Object(r.useState)(""),c=e.length>2&&n.length>2;return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(a.a,{title:"Contact | Egor Philippov",description:"A contact form for Egor Philippov.",canonical:"https://www.egorphilippov.me/contact"}),Object(o.jsxs)(g,{action:"https://formspree.io/philippovegor@gmail.com",method:"POST",children:[Object(o.jsxs)(x,{children:[Object(o.jsx)(O,{htmlFor:"email",children:"Email"}),Object(o.jsx)(w,{id:"email",name:"email",type:"email",onChange:e=>t(e.target.value)})]}),Object(o.jsxs)(x,{children:[Object(o.jsx)(O,{htmlFor:"message",children:"Message"}),Object(o.jsx)(j,{id:"message",name:"message",rows:3,onChange:e=>i(e.target.value)})]}),Object(o.jsx)("input",{type:"hidden",name:"_next",value:"https://www.egorphilippov.me/success"}),Object(o.jsx)(h,{isDisabled:!c,type:"submit",children:"Submit"})]})]})}}},[["QLSJ",0,1,2,3,5]]]);