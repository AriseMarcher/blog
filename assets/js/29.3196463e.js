(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{442:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"自定义组件概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件概念"}},[t._v("#")]),t._v(" 自定义组件概念")]),t._v(" "),s("blockquote",[s("p",[t._v("组件是 "),s("code",[t._v("vue")]),t._v(" 技术中非常重要的部分，组件使得与ui相关的轮子可以方便的制造和共享，进而使得vue使用者的开发效率大幅提升，在项目的"),s("code",[t._v("component")]),t._v("目录下存放组件，"),s("code",[t._v("uni-app")]),t._v(" 只支持 "),s("code",[t._v("vue")]),t._v(" 单文件组件（.vue 组件）")])]),t._v(" "),s("blockquote",[s("p",[t._v("组件可以使用「全局注册」和「页面引入」两种方式进行使用，使用分为三步：")]),t._v(" "),s("p",[t._v("导入 "),s("code",[t._v("import xxx from 'xxx'")])]),t._v(" "),s("p",[t._v("注册 "),s("code",[t._v("Vue.use('xx',xx)")]),t._v(" "),s("code",[t._v("components:{ xxx }")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("<xx />")])])]),t._v(" "),s("h3",{attrs:{id:"父子组件通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子组件通信"}},[t._v("#")]),t._v(" 父子组件通信")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://uniapp.dcloud.net.cn/tutorial/page.html#on",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("父组件通过自定义属性向子组件传递数据")])]),t._v(" "),s("li",[s("p",[t._v("子组件通过 "),s("code",[t._v("props")]),t._v(" 接收父组件传递的数据")])])])]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("父组件通过自定义事件标签向子组件传递事件")]),t._v(" "),s("li",[t._v("子组件通过触发父组件定义事件方式修改父组件数据")])])]),t._v(" "),s("p",[t._v("页面通信可以用this.$emit()通信，但还是推荐使用uni.$on()、uni.$emit()")]),t._v(" "),s("h3",{attrs:{id:"slot-数据分发与作用域插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot-数据分发与作用域插槽"}},[t._v("#")]),t._v(" slot 数据分发与作用域插槽")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("父组件通过调用子组件内部嵌套 html 内容作为"),s("code",[t._v("slot")]),t._v("分发给子组件")]),t._v(" "),s("li",[t._v("子组件通过在 "),s("code",[t._v("slot")]),t._v(" 标签上添加属性，向父组件通信数据，作用域插槽")])])]),t._v(" "),s("h3",{attrs:{id:"全局事件定义及通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局事件定义及通信"}},[t._v("#")]),t._v(" 全局事件定义及通信")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("在整个应用的任何地方均可以使用"),s("code",[t._v("uni.$on")]),t._v("创建一个全局事件")]),t._v(" "),s("li",[t._v("在整个应用的任何地方也均可以使用 "),s("code",[t._v("uni.$emit")]),t._v(" 来触发全局事件，实现多组件见的数据通信")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("uni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'监听到事件来自 update ，携带参数 msg 为：'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("uni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我新传的数据'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);