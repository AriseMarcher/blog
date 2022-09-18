(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{422:function(a,s,t){"use strict";t.r(s);var n=t(1),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.gulpjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gulp官网"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("基于流的自动化构建工具，在开发过程中实现任务自动化，提高效率，创造更大的价值。")]),a._v(" "),s("h3",{attrs:{id:"基本使用-gulp4-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用-gulp4-x"}},[a._v("#")]),a._v(" 基本使用（gulp4.x）")]),a._v(" "),s("p",[a._v("检查node、npm和npx是否OK，如我使用的node版本为 16.12.0")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n")])])]),s("h3",{attrs:{id:"创建项目目标并进入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目目标并进入"}},[a._v("#")]),a._v(" 创建项目目标并进入")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"创建package-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建package-json文件"}},[a._v("#")]),a._v(" 创建package.json文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init\n")])])]),s("h3",{attrs:{id:"创建gulpfile-js文件-根目录下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建gulpfile-js文件-根目录下"}},[a._v("#")]),a._v(" 创建gulpfile.js文件（根目录下）")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" 这是一些最简单的gulp task示例 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 创建任务方式一")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("defaultTask")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 创建任务方式二")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 该方式不需要exports导出就能实现gulp任务导出")]),a._v("\ngulp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("done")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// todo something")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" defaultTask\n")])])]),s("h3",{attrs:{id:"gulp任务测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp任务测试"}},[a._v("#")]),a._v(" gulp任务测试")]),a._v(" "),s("p",[a._v("gulp4.x依赖本身自带gulp-cli，因此不需要再全局安装gulp-cli")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("npx gulp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tasks")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("PS D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("arise-codes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("gulp-es5-example"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" npx gulp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tasks")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":27:13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Tasks "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("arise-codes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("gulp-es5-example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("gulpfile.js\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":27:13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" ├── bar\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":27:13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" └── default\n")])])]),s("p",[a._v("需要执行相应的task任务在后面加上已经定义好的任务名称就行。如果是执行默认default（默认任务则可以省略），即 "),s("code",[a._v("npx gulp")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("npx gulp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("task-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);