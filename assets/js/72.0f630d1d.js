(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{307:function(o,n,t){},381:function(o,n,t){"use strict";var e=t(307);t.n(e).a},502:function(o,n,t){"use strict";t.r(n);var e={data:function(){return{colorLoading:"#7d0c3f"}},methods:{openLoadingColor:function(){var o=this;this.$vs.loading({color:this.colorLoading}),setTimeout(function(){o.$vs.loading.close()},2e3)}}},a=(t(381),t(0)),i=Object(a.a)(e,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"centerx"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.colorLoading,expression:"colorLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:o.colorLoading},on:{input:function(n){n.target.composing||(o.colorLoading=n.target.value)}}}),t("vs-button",{attrs:{"vs-type":"danger-gradient"},on:{click:o.openLoadingColor}},[o._v("Primary")])],1)},[],!1,null,null,null);n.default=i.exports}}]);