(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e13cf70"],{6738:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{staticClass:"address"},[t("div",{staticClass:"wrapper address-content "},[t("h1",{staticClass:"inform-title"},[e._v("寄送地址")]),t("div",{staticClass:"address-form"},[t("div",{staticClass:"form-container"},[t("div",{staticClass:"form-row row-1 "},[t("span",{staticClass:"form-name"},[e._v("稱謂")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newData.gender,expression:"newData.gender"}],staticClass:"form-space1",attrs:{name:"salutation",id:"form-space"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.newData,"gender",a.target.multiple?t:t[0])}}},[t("option",{staticClass:"option-1",attrs:{selected:"",value:"先生"}},[e._v("先生")]),t("option",{attrs:{value:"小姐"}},[e._v("小姐")])])]),t("div",{staticClass:"form-row row-2"},[t("span",{staticClass:"form-name"},[e._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newData.name,expression:"newData.name"}],staticClass:"form-space2",attrs:{type:"text",placeholder:"請輸入姓名"},domProps:{value:e.newData.name},on:{input:function(a){a.target.composing||e.$set(e.newData,"name",a.target.value)}}})]),t("div",{staticClass:"form-row row-3"},[t("span",{staticClass:"form-name"},[e._v("電話")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newData.phoneNumber,expression:"newData.phoneNumber"}],staticClass:"form-space",attrs:{type:"text",placeholder:"請輸入行動電話"},domProps:{value:e.newData.phoneNumber},on:{input:function(a){a.target.composing||e.$set(e.newData,"phoneNumber",a.target.value)}}})]),t("div",{staticClass:"form-row row-4"},[t("span",{staticClass:"form-name"},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newData.email,expression:"newData.email"}],staticClass:"form-space",attrs:{type:"text",placeholder:"請輸入電子郵件"},domProps:{value:e.newData.email},on:{input:function(a){a.target.composing||e.$set(e.newData,"email",a.target.value)}}})]),t("div",{staticClass:"form-row row-5"},[t("span",{staticClass:"form-name"},[e._v("縣市")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newData.city,expression:"newData.city"}],staticClass:"form-space",attrs:{name:"living-place",id:"form-space",required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.newData,"city",a.target.multiple?t:t[0])}}},[e._m(0),t("option",{attrs:{value:"台北市"}},[e._v("台北市")]),t("option",{attrs:{value:"台中市"}},[e._v("台中市")]),t("option",{attrs:{value:"台南市"}},[e._v("台南市")]),t("option",{attrs:{value:"高雄市"}},[e._v("高雄市")]),t("option",{attrs:{value:"屏東縣"}},[e._v("屏東縣")])])]),t("div",{staticClass:"form-row row-6"},[t("span",{staticClass:"form-name"},[e._v("地址")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newData.address,expression:"newData.address"}],staticClass:"form-space",attrs:{type:"text",placeholder:"請輸入地址"},domProps:{value:e.newData.address},on:{input:function(a){a.target.composing||e.$set(e.newData,"address",a.target.value)}}})])])])])])},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("option",{attrs:{selected:"",value:"請選擇縣市"}},[t("span",[e._v("請選擇縣市")])])}],r=(t("b0c0"),{name:"Address",props:{initialUserInform:{type:Object,default:function(){return{gender:"先生",name:"",phoneNumber:"",email:"",city:"請選擇縣市",address:""}}}},data:function(){return{newData:{gender:this.initialUserInform.gender,name:this.initialUserInform.name,phoneNumber:this.initialUserInform.phoneNumber,email:this.initialUserInform.email,city:this.initialUserInform.city,address:this.initialUserInform.address}}},watch:{newData:{handler:function(){this.$emit("render-new-data",this.newData)},deep:!0}}}),i=r,o=(t("b895"),t("2877")),l=Object(o["a"])(i,s,n,!1,null,"6733d8d9",null);a["default"]=l.exports},9363:function(e,a,t){},b895:function(e,a,t){"use strict";t("9363")}}]);
//# sourceMappingURL=chunk-9e13cf70.74159105.js.map