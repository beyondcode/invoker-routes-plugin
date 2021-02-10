!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=6)}([function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:()=>({includeVendorRoutes:!0,appNamespace:"App\\",routes:[]}),computed:{filteredRoutes(){return this.routes.filter(t=>!!this.includeVendorRoutes||(0===t.action.indexOf(this.appNamespace)||0===t.action.indexOf("Illuminate\\")))}},methods:{fetchRoutes(){return r(this,void 0,void 0,(function*(){try{let t=yield invoker.evaluate("\n            return app()->getNamespace();\n          ");this.appNamespace=t.data.output;let{data:e}=yield invoker.evaluate("\n            \\Artisan::call('route:list', [\n              '--json' => true,\n            ]);\n\n            return \\Artisan::output();\n          ");this.routes=JSON.parse(e.output)}catch(t){console.log(t),this.output=t}}))}},mounted(){this.fetchRoutes()},activated(){this.fetchRoutes()}}},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-full flex flex-col"},[n("div",{staticClass:"w-full p-4 flex flex-col overflow-scroll"},[n("div",{staticClass:"p-4 flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.includeVendorRoutes,expression:"includeVendorRoutes"}],staticClass:"form-checkbox",attrs:{type:"checkbox",id:"includeVendorRoutes"},domProps:{checked:Array.isArray(t.includeVendorRoutes)?t._i(t.includeVendorRoutes,null)>-1:t.includeVendorRoutes},on:{change:function(e){var n=t.includeVendorRoutes,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.includeVendorRoutes=n.concat([null])):i>-1&&(t.includeVendorRoutes=n.slice(0,i).concat(n.slice(i+1)))}else t.includeVendorRoutes=o}}}),t._v(" "),n("label",{staticClass:"pl-2 text-sm",attrs:{for:"includeVendorRoutes"}},[t._v("Include vendor routes")])]),t._v(" "),n("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[n("div",{staticClass:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},[n("div",{staticClass:"shadow overflow-scroll border-b border-gray-200 sm:rounded-lg"},[n("table",{staticClass:"w-full divide-y divide-gray-200"},[t._m(0),t._v(" "),n("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.filteredRoutes,(function(e,r){return n("tr",{key:"route_"+r},[n("td",{staticClass:"px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"},[t._v("\n                  "+t._s(e.uri)+"\n                ")]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},[n("pre",{domProps:{textContent:t._s(e.method.split("|").join("\n"))}})]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},[t._v("\n                  "+t._s(e.action)+"\n                ")]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},[t._v("\n                  "+t._s(e.name)+"\n                ")])])})),0)])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v("\n                  URI\n                ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v("\n                  Method\n                ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v("\n                  Action\n                ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v("\n                  Name\n                ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 bg-gray-50"})])])}]},,,function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(8),o=n(10),i=n(9);e.default=t=>{i.default.plugin=t,t.router.addRoutes([{name:"routes",path:"/routes",component:r.default}]),t.navigation.add(o.default)}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(0);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var a=n(2),s=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);e.default=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={}},function(t,e,n){"use strict";n.r(e);var r={computed:{projectOpened:function(){return!!this.$store.state.project.id}}},o=n(2),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.projectOpened?e("router-link",{staticClass:"mt-2 group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-500 hover:text-invoker-purple hover:bg-invoker-purple hover:bg-opacity-25 focus:outline-none transition ease-in-out duration-150",attrs:{title:"Routes",to:{name:"routes"},"active-class":"bg-invoker-purple bg-opacity-25 text-invoker-purple"}},[e("svg",{staticClass:"h-5 w-5 transition ease-in-out duration-150",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])]):this._e()}),[],!1,null,null,null);e.default=i.exports}])}));