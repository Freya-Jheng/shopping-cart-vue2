(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a16dd76"],{"1dcd":function(e,t,a){"use strict";a("275b")},"275b":function(e,t,a){},e50b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"shipping"},[a("div",{staticClass:"wrapper shipping-content"},[a("h2",{staticClass:"inform-title"},[e._v("運送方式")]),a("div",{staticClass:"methods"},[a("div",{staticClass:"method"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.delivery,expression:"delivery"}],staticClass:"way",attrs:{type:"radio",id:"general",name:"general",value:"general"},domProps:{checked:e._q(e.delivery,"general")},on:{change:function(t){e.delivery="general"}}}),e._m(0)]),a("div",{staticClass:"method"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.delivery,expression:"delivery"}],staticClass:"way",attrs:{type:"radio",id:"DHL",value:"DHL"},domProps:{checked:e._q(e.delivery,"DHL")},on:{change:function(t){e.delivery="DHL"}}}),e._m(1)])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"way-label",attrs:{for:"general"}},[a("div",{staticClass:"top-content"},[a("span",{staticClass:"title"},[e._v("標準運送")]),a("span",{staticClass:"fee"},[e._v("免費")])]),a("span",{staticClass:"period"},[e._v("約3~7個工作天")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"way-label",attrs:{for:"DHL"}},[a("div",{staticClass:"top-content"},[a("span",{staticClass:"DHL-title"},[e._v("DHL 貨運")]),a("span",{staticClass:"fee"},[a("span",[e._v("$")]),e._v("500")])]),a("span",{staticClass:"period"},[e._v("48小時內送達")])])}],n={name:"shipping",props:{initialUserInform:{type:Object,default:function(){return{delivery:"general"}}}},data:function(){return{delivery:this.initialUserInform.delivery}},watch:{delivery:{handler:function(){this.$emit("change-delivery",this.delivery)},deep:!0}}},l=n,r=(a("1dcd"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,"357e765d",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5a16dd76.3c306407.js.map