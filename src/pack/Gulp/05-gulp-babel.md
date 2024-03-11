---
title: Gulp配置篇--05--js-babel
excerpt: 穷且益坚，不坠青云之志。-- 王勃
sidebar: true
tag:
 - Gulp
category:
 - Gulp
---

## 插件介绍

+ gulp-babel [传送门](https://github.com/babel/gulp-babel)
+ @babel/preset-env [传送门](https://www.babeljs.cn/docs/babel-preset-env)
+ @babel/core [传送门](https://www.babeljs.cn/docs/babel-core)
+ @babel/plugin-transform-runtime [传送门](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)
+ @babel/runtime-corejs2 corejs版本2，支持Promise等 [传送门](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)
+ @babel/runtime-corejs3 corejs版本，支持数组includes等 [传送门](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)

## 文件目录结构

```
├── code-origin // 原始入口文件
│   ├── css
│      ├── index.css 
│      ├── other.css 
│      ├── xxxxx.css
│   ├── js
│      ├── index.js 
│      ├── other.js 
│      ├── xxxxx.js
├── code-mini   // 经过Gulp处理打包后的文件
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```

## 相关依赖

```
npm install gulp-babel@8 @babel/core@7 @babel/preset-env@7 @babel/plugin-transform-runtime@7 -D
npm install @babel/runtime-corejs2 @babel/runtime-corejs3 --save
```

## gulpfile.js 配置

::: tip

:::

### babel配置有在gulpfile.js中配置、或在package.json配置，还有创建.babelrc.json文件配置（推荐）

### 如在gulpfile.js中配置、如下：
```js
const miniJs = () => {
  return src(`${enterFileName}/**/*.js`)
    .pipe(babel({
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "version": "7.0.0-beta.0"
          }
        ]
      ]
    }))
    .pipe(dest(`${exportFileName}`))
}
```

### 如在package.json中配置、如下 babel选项：
```json
{
  "name": "gulp-es5-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tasks": "gulp --tasks",
    "build": "gulp",
    "miniHtml": "gulp miniHtml",
    "miniJs": "gulp miniJs"
  },
  "homepage": "https://github.com/AriseMarcher/gulp-example#readme",
  "devDependencies": {
    "@babel/core": "^7.18.10",
    "@babel/plugin-transform-runtime": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-load-plugins": "^2.0.7",
  },
  "dependencies": {
    "@babel/runtime-corejs2": "^7.18.9",
    "@babel/runtime-corejs3": "^7.18.9"
  },
  "babel": {
    "presets": ["@babel/preset-env"],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "absoluteRuntime": false,
          "corejs": 3,
          "helpers": true,
          "regenerator": true,
          "version": "7.0.0-beta.0"
        }
      ]
    ]
  }
}

```
### .babelrc.json中配置（推荐）
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3, // 用于指定corejs版本 false：不应用 2：需要安装@babel/runtime-corejs2 3：需要@babel/runtime-corejs3
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}
```

#### gulpfile.js的配置为

```js
const { series, parallel, src, dest } = require('gulp');
// 为了插件更便捷的引入
const gulpLoadPlugins = require('gulp-load-plugins')();

const babel = gulpLoadPlugins.babel;

const enterFileName   = 'code-origin' // 入口文件名
const exportFileName  = 'code-mini'   // 输出文件名

const miniJs = () => {
  return src(`${enterFileName}/**/*.js`)
    .pipe(babel())
    .pipe(dest(`${exportFileName}`))
}

exports.miniJs = miniJs
```

## 运行命令

```bash
npm run miniJs
```

## 效果展示

### 未压缩前Js文件示例

```js
// 验证 Class语法
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  sayHello () {
    const value = `hello, my name is ${this.name}`
    console.log(value)
  }
}

const aBoy = new Person('Steven', 18)
aBoy.sayHello()

// 验证数组的 includes方法
const arr = ['apple', 'origin', 'other']
let fruitName = 'banner'

console.log(arr.includes(fruitName))

let loadData = new Promise((res, err) => {
  if (res) {
    resolve(res)
  } else {
    reject('error')
  }
})
loadData('123').then(res => {
  console.log(res)
})

```

### babel后js文件展开示例（美化展开）

```js
"use strict";
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault"),
  _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes")),
  _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise")),
  _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck")),
  _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass")),
  Person = function () {
    function a(e, r) {
      (0, _classCallCheck2.default)(this, a), this.name = e, this.age = r
    }
    return (0, _createClass2.default)(a, [{
      key: "sayHello",
      value: function () {
        var e = "hello, my name is ".concat(this.name);
        console.log(e)
      }
    }]), a
  }(),
  aBoy = new Person("Steven", 18);
aBoy.sayHello();
var arr = ["apple", "origin", "other"],
  fruitName = "banner";
console.log((0, _includes.default)(arr).call(arr, fruitName));
var loadData = new _promise.default(function (e, r) {
  e ? resolve(e) : reject("error")
});
loadData("123").then(function (e) {
  console.log(e)
});
```

## 总结

经过 uglify、stripDebug对ES5代码可以实现压缩处理，但不支持ES6语法向ES5兼容。
经过 gulp-babel和相关的babel插件可以实现js兼容，但又碰到了新的问题，那就是<code>require</code>语法在浏览器中并不兼容

好，继续优化解决！！！