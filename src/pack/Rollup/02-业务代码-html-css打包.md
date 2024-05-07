---
title: 02-业务代码-html-css打包
sidebar: true
excerpt: 深窥自己的心，而后发觉一切的奇迹在你自己。-- 培根
tag:
 - Rollup
category:
 - Rollup
---

[rollup插件传送门](https://github.com/rollup/awesome)

找到相应的插件应用即可，很简单的

postcss，自动加浏览器前缀，新的语法转成低语法兼容，
html、css、插件应用

::: code-tabs#language

@tab pnpm
```bash
# 处理html
pnpm add @rollup/plugin-html -D
pnpm add postcss rollup-plugin-postcss postcss-preset-env -D
# 使用vue
pnpm add rollup-plugin-vue -D
# 解决vue打包变量process.env.NODE_ENV
pnpm add @rollup/plugin-replace -D
# 搭建本地服务器
pnpm add rollup-plugin-serve -D
# 刷新功能
pnpm add rollup-plugin-livereload -D
```
:::

文件目录应该是这样的
```
my-project
  src
    css
      index.css
    vue
      App.vue
    index.js
  babel.config.js
  package.json
  postcss.config.js
  rollup.config.js
```

命令运行`npx rollup -c`打开生成的html即可验证

[rollup插件传送门](https://github.com/rollup/awesome)

::: code-tabs#language

@tab rollup.config.js
```js  
// 默认lodash没有被打包是因为它使用的是commonjs

const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')

// 使用代码压缩和转换
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

const html = require('@rollup/plugin-html')

const postcss = require('rollup-plugin-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const vue = require('rollup-plugin-vue')
const replace = require('@rollup/plugin-replace')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

module.exports = {
  // 入口
  input: "./src/index.js",
  output: [
    {
      format: "iife", // 打包格式
      name: "theUtils", // 只有umd和iife需要
      file: "./build/bundle.iife.js", // 输出文件名称
      globals: {
        lodash: "_"
      }
    }
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/
    }),
    terser(),
    html(),
    // postcss({ plugins: [postcssPresetEnv] })
    postcss(),
    vue(),
    replace({
      "process.env.NODE_ENV": `"production"`
    }),
    serve({
      port: 8888,
      open: true,
      // 如果生成的index.html在根目录，写 . 即可
      contentBase: "build"
    }),
    livereload()
  ]
}
```

@tab babel.config.js
```js
module.exports = {
  presets: [
    ['@babel/preset-env']
  ]
}
```

@tab postcss.config.js
```js
module.exports = {
  plugins: [require('postcss-preset-env')]
}
```

@tab src/index.js

```js
import './css/index.css'

const titleEl = document.createElement('h2')
titleEl.textContent = '这是h1的标题'
titleEl.className = "title"
document.body.append(titleEl)

```

@tab src/css/index.css
```css
body {
  background-color: skyblue;
}

.title {
  color: red;
  user-select: none;
  display: flex;
}
```

:::

区分开发和生产环境

::: code-tabs
@tab package.json
```json
{
  "name": "rollup_library",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build:": "rollup-c --environment NODE_ENV:production",
    "serve": "rollup -c --environment NODE_ENV:development -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@babel/preset-env": "^7.24.0",
    "@rollup/plugin-babel": "^6.0.4",
    "@rollup/plugin-commonjs": "^25.0.7",
    "@rollup/plugin-html": "^1.0.3",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@rollup/plugin-replace": "^5.0.5",
    "@rollup/plugin-terser": "^0.4.4",
    "postcss": "^8.4.38",
    "postcss-preset-env": "^9.5.4",
    "rollup": "^4.13.0",
    "rollup-plugin-livereload": "^2.0.5",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-serve": "^1.1.1",
    "rollup-plugin-vue": "^6.0.0"
  },
  "dependencies": {
    "lodash": "^4.17.21",
    "vue": "^3.4.21"
  }
}

```

@tab rollup.config.js
```js
// 默认lodash没有被打包是因为它使用的是commonjs

const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')

// 使用代码压缩和转换
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

const html = require('@rollup/plugin-html')

const postcss = require('rollup-plugin-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const vue = require('rollup-plugin-vue')
const replace = require('@rollup/plugin-replace')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

const isProduction = process.env.NODE_ENV === 'production'

console.log('process.env', process.env)

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({
    babelHelpers: 'bundled',
    exclude: /node_modules/
  }),
  html(),
  // postcss({ plugins: [postcssPresetEnv] })
  postcss(),
  vue(),
  replace({
    "process.env.NODE_ENV": `"production"`,
    preventAssignment: true
  }),
  
]

if (isProduction) {
  plugins.push(terser())
} else {
  const devPlugins = [
    serve({
      port: 8888,
      open: true,
      // 如果生成的index.html在根目录，写 . 即可
      contentBase: "build"
    }),
    livereload()
  ]
  plugins.push(...devPlugins)
}

module.exports = {
  // 入口
  input: "./src/index.js",
  output: [
    {
      format: "iife", // 打包格式
      name: "theUtils", // 只有umd和iife需要
      file: "./build/bundle.iife.js", // 输出文件名称
      globals: {
        lodash: "_"
      }
    }
  ],
  plugins: plugins
}
```
:::