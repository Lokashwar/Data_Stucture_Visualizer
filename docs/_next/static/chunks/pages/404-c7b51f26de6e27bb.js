(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9094:function(e,n,r){"use strict";r.d(n,{M:function(){return g}});var t=r(67294),i=r(64761),o=r(97818),a=r(48427),l=r(74459),s=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const p=(0,t.forwardRef)(((e,n)=>{const r=(0,i.N4)("Center",{},e),{inline:a,sx:s}=r,p=((e,n)=>{var r={};for(var t in e)f.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))n.indexOf(t)<0&&u.call(e,t)&&(r[t]=e[t]);return r})(r,["inline","sx"]);return t.createElement(l.x,((e,n)=>{for(var r in n||(n={}))f.call(n,r)&&d(e,r,n[r]);if(c)for(var r of c(n))u.call(n,r)&&d(e,r,n[r]);return e})({ref:n,sx:[{display:a?"inline-flex":"flex",alignItems:"center",justifyContent:"center"},...(0,o.R)(s)]},p))}));p.displayName="@mantine/core/Center";const g=(0,a.F)(p)},72445:function(e,n,r){"use strict";r.d(n,{W:function(){return p}});var t=r(67294),i=r(64761),o=(0,r(56817).k)(((e,{fluid:n,size:r,sizes:t})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:n?"100%":e.fn.size({size:r,sizes:t}),marginLeft:"auto",marginRight:"auto"}}))),a=r(74459),l=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const d={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},p=(0,t.forwardRef)(((e,n)=>{const r=(0,i.N4)("Container",d,e),{className:l,fluid:p,size:g,unstyled:h,sizes:m}=r,y=((e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&f.call(e,t)&&(r[t]=e[t]);return r})(r,["className","fluid","size","unstyled","sizes"]),{classes:b,cx:v}=o({fluid:p,size:g,sizes:m},{unstyled:h,name:"Container"});return t.createElement(a.x,((e,n)=>{for(var r in n||(n={}))c.call(n,r)&&u(e,r,n[r]);if(s)for(var r of s(n))f.call(n,r)&&u(e,r,n[r]);return e})({className:v(b.root,l),ref:n},y))}));p.displayName="@mantine/core/Container"},95117:function(e,n,r){"use strict";r.d(n,{x:function(){return P}});var t=r(67294),i=r(64761),o=r(48427),a=r(56817),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,g=(e,n)=>{for(var r in n||(n={}))u.call(n,r)&&p(e,r,n[r]);if(f)for(var r of f(n))d.call(n,r)&&p(e,r,n[r]);return e};function h({underline:e,strikethrough:n}){const r=[];return e&&r.push("underline"),n&&r.push("line-through"),r.length>0?r.join(" "):"none"}function m({theme:e,color:n,variant:r}){return"dimmed"===n?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"===typeof n&&(n in e.colors||n.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:n}).background:"link"===r?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:n||"inherit"}function y(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}var b=(0,a.k)(((e,{color:n,variant:r,size:t,lineClamp:i,inline:o,inherit:a,underline:l,gradient:f,weight:u,transform:d,align:p,strikethrough:b,italic:v})=>{const O=e.fn.variant({variant:"gradient",gradient:f});return{root:g((w=g(g(g({},e.fn.fontStyles()),e.fn.focusStyles()),y(i)),x={color:m({color:n,theme:e,variant:r}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===t?"inherit":e.fn.size({size:t,sizes:e.fontSizes}),lineHeight:a?"inherit":o?1:e.lineHeight,textDecoration:h({underline:l,strikethrough:b}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":u,textTransform:d,textAlign:p,fontStyle:v?"italic":void 0},s(w,c(x))),e.fn.hover("link"===r&&void 0===l?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:O.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var w,x})),v=r(74459),O=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,j=(e,n,r)=>n in e?O(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const k={variant:"text"},N=(0,t.forwardRef)(((e,n)=>{const r=(0,i.N4)("Text",k,e),{className:o,size:a,weight:l,transform:s,color:c,align:f,variant:u,lineClamp:d,gradient:p,inline:g,inherit:h,underline:m,strikethrough:y,italic:O,classNames:N,styles:P,unstyled:C,span:S}=r,E=((e,n)=>{var r={};for(var t in e)x.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&w)for(var t of w(e))n.indexOf(t)<0&&z.call(e,t)&&(r[t]=e[t]);return r})(r,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:W,cx:_}=b({variant:u,color:c,size:a,lineClamp:d,inline:g,inherit:h,underline:m,strikethrough:y,italic:O,weight:l,transform:s,align:f,gradient:p},{unstyled:C,name:"Text"});return t.createElement(v.x,((e,n)=>{for(var r in n||(n={}))x.call(n,r)&&j(e,r,n[r]);if(w)for(var r of w(n))z.call(n,r)&&j(e,r,n[r]);return e})({ref:n,className:_(W.root,{[W.gradient]:"gradient"===u},o),component:S?"span":"div"},E))}));N.displayName="@mantine/core/Text";const P=(0,o.F)(N)},19236:function(e,n,r){"use strict";r.d(n,{D:function(){return j}});var t=r(67294),i=r(64761),o=r(56817),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&d(e,r,n[r]);if(c)for(var r of c(n))u.call(n,r)&&d(e,r,n[r]);return e};function g(e,n,r){return"undefined"!==typeof e?e in r.headings.sizes?r.headings.sizes[e].fontSize:e:r.headings.sizes[n].fontSize}function h(e,n,r){return"undefined"!==typeof e&&e in r.headings.sizes?r.headings.sizes[e].lineHeight:r.headings.sizes[n].lineHeight}var m=(0,o.k)(((e,{element:n,weight:r,size:t,inline:i})=>{return{root:(o=p({},e.fn.fontStyles()),a={fontFamily:e.headings.fontFamily,fontWeight:r||e.headings.sizes[n].fontWeight||e.headings.fontWeight,fontSize:g(t,n,e),lineHeight:i?1:h(t,n,e),margin:0},l(o,s(a)))};var o,a})),y=r(95117),b=Object.defineProperty,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const z={order:1},j=(0,t.forwardRef)(((e,n)=>{const r=(0,i.N4)("Title",z,e),{className:o,order:a,children:l,unstyled:s,size:c,weight:f,inline:u}=r,d=((e,n)=>{var r={};for(var t in e)O.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&v)for(var t of v(e))n.indexOf(t)<0&&w.call(e,t)&&(r[t]=e[t]);return r})(r,["className","order","children","unstyled","size","weight","inline"]),{classes:p,cx:g}=m({element:`h${a}`,weight:f,size:c,inline:u},{name:"Title",unstyled:s});return[1,2,3,4,5,6].includes(a)?t.createElement(y.x,((e,n)=>{for(var r in n||(n={}))O.call(n,r)&&x(e,r,n[r]);if(v)for(var r of v(n))w.call(n,r)&&x(e,r,n[r]);return e})({component:`h${a}`,ref:n,className:g(p.root,o)},d),l):null}));j.displayName="@mantine/core/Title"},72448:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(90614)}])},90614:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return s}});var t=r(85893),i=r(9094),o=r(72445),a=r(19236),l=r(95117);function s(){return(0,t.jsx)(i.M,{className:"full-width-height",children:(0,t.jsxs)(o.W,{children:[(0,t.jsx)(a.D,{align:"center",order:1,children:"404 - Page Not Found"}),(0,t.jsx)(l.x,{align:"center",children:"Nothing here. Use the navigation panel on the left to continue browsing on our site."})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=72448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);