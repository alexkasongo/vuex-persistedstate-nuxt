(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(t,n,e){"use strict";var r=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("nav",{staticClass:"navbar header has-shadow is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item",attrs:{href:"/"}},[r("img",{attrs:{src:e(202),alt:"Alex Kasongo logo",height:"28"}})]),t._v(" "),r("div",{staticClass:"navbar-burger"},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])])])}],c={data:function(){return{items:[{title:"Home",icon:"home",to:{name:"index"}},{title:"Inspire",icon:"lightbulb",to:{name:"inspire"}}]}}},o=e(33),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"main-content columns"},[e("aside",{staticClass:"column is-2 section"},[e("p",{staticClass:"menu-label is-hidden-touch"},[t._v("General")]),t._v(" "),e("ul",{staticClass:"menu-list"},t._l(t.items,(function(n,r){return e("li",{key:r},[e("nuxt-link",{attrs:{to:n.to,"exact-active-class":"is-active"}},[e("b-icon",{attrs:{icon:n.icon}}),t._v(" "+t._s(n.title)+"\n          ")],1)],1)})),0)]),t._v(" "),e("div",{staticClass:"container column is-10"},[e("nuxt")],1)])])}),r,!1,null,null,null);n.a=component.exports},152:function(t,n,e){e(153),t.exports=e(154)},202:function(t,n,e){t.exports=e.p+"img/alexlogo.c424a93.png"},203:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"getters",(function(){return c})),e.d(n,"actions",(function(){return o})),e.d(n,"mutations",(function(){return l}));var r=function(){return{persistedState:null,alertState:!1}},c={},o={switchPersistanceState:function(t,n){var e=t.commit;e("SET_STATE",n),e("SET_ALERT",!0),null===n&&e("SET_ALERT",!1)}},l={SET_STATE:function(t,n){t.persistedState=n},SET_ALERT:function(t,n){t.alertState=n}}},90:function(t,n,e){"use strict";var r=e(148);n.a=function(t){var n=t.store;Object(r.a)({key:"vuex",paths:["persistedState"]})(n)}}},[[152,5,1,6]]]);