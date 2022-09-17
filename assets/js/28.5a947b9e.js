(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{436:function(t,e,a){"use strict";a.r(e);var v=a(1),n=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方指南"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("全局文件（文件名固定）")]),t._v(" "),e("ul",[e("li",[t._v("app.js 小程序入口文件")]),t._v(" "),e("li",[t._v("app.json 小程序全局配置")]),t._v(" "),e("li",[t._v("app.wxss 小程序全局样式")])]),t._v(" "),e("p",[t._v("页面文件 （每个文件必须有这四个文件，固定文件名称）")]),t._v(" "),e("ul",[e("li",[t._v("index.js 页面入口")]),t._v(" "),e("li",[t._v("index.json 页面配置")]),t._v(" "),e("li",[t._v("index.wxml 页面内容")]),t._v(" "),e("li",[t._v("index.wxss 页面样式")])]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("app.json")]),t._v("中pages配置入口文件即可自动创建相应的页面文件")]),t._v(" "),e("h3",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("小程序的生命周期")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("页面的生命周期")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("app.js")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("pagename.js")])])])]),t._v(" "),e("p",[t._v("小程序生命周期（app.js）")]),t._v(" "),e("ul",[e("li",[t._v("onLaunch：小程序启动（全局只调用一次）")]),t._v(" "),e("li",[t._v("onShow: 初始化完成，从后台切换到前台")]),t._v(" "),e("li",[t._v("onHide: 从前台切换到后台")])]),t._v(" "),e("p",[t._v("页面的生命周期（pagename.js）")]),t._v(" "),e("ul",[e("li",[t._v("onLoad 页面加载（一次）")]),t._v(" "),e("li",[t._v("onShow 页面显示（切前台）")]),t._v(" "),e("li",[t._v("onReady 页面就绪（一次）")]),t._v(" "),e("li",[t._v("onHide 页面隐藏（切后台）")]),t._v(" "),e("li",[t._v("onUnload 页面卸载（一次）")])]),t._v(" "),e("p",[t._v("onLoad => onShow => onReady")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/weixin/page.jpg",alt:"生命周期"}})]),t._v(" "),e("h3",{attrs:{id:"app代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app代码"}},[t._v("#")]),t._v(" app代码")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("云API")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("全局配置")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("弹性布局")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("app.js")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("app.json")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("app.wxss")])])])]),t._v(" "),e("p",[t._v("云API")]),t._v(" "),e("ul",[e("li",[t._v("官方推出的，供小程序调用的，云端API\n"),e("ul",[e("li",[t._v("不需要自己开发")]),t._v(" "),e("li",[t._v("不需要自己部署")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口地址"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"index页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index页面"}},[t._v("#")]),t._v(" index页面")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("数据绑定")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("页面配置")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("组件+条件渲染")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("页面样式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("index.js")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("index.json")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("index.wxml")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("index.wxss")])])])]),t._v(" "),e("p",[t._v("WXML")]),t._v(" "),e("ul",[e("li",[t._v("WXML(weixin markup language)是框架设计的一套标签语言")]),t._v(" "),e("li",[t._v("WXML中展示内容的具体标签，称为组件")]),t._v(" "),e("li",[t._v("WXML相当于小程序中的模板引擎\n"),e("ul",[e("li",[t._v("数据绑定")]),t._v(" "),e("li",[t._v("数据展示（条件渲染、列表渲染）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WXML"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("组件")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("小程序组件")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("HTML标签")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("展示区块")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("view")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("div")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("展示图片")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("image")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("img")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("展示文本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("p")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("链接导航")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("navigator")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("a")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("h3",{attrs:{id:"logs页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logs页面"}},[t._v("#")]),t._v(" logs页面")]),t._v(" "),e("ul",[e("li",[t._v("模块化开发\n"),e("ul",[e("li",[t._v("小程序中的模块化开发遵循COMMONJs规范")])])]),t._v(" "),e("li",[t._v("WXML的列表渲染")]),t._v(" "),e("li",[t._v("页面级别的配置")])])])}),[],!1,null,null,null);e.default=n.exports}}]);