---
title: Gulp配置篇--03--压缩css
date: 2022/08/01 22:25
sidebar: auto
tags:
 - gulp
categories:
 -  gulp
---

## 插件介绍

+ gulp-load-plugins 为了更便捷的引入gulp相关插件 [传送门](https://github.com/jackfranklin/gulp-load-plugins)
+ gulp-clean-css：提供对css文件的压缩、美化等处理 [传送门](https://github.com/scniro/gulp-clean-css)
+ gulp-postcss：通过管道传递CSS，但是仅解析一次CSS [传送门](https://github.com/postcss/gulp-postcss)
+ gulp-sourcemaps：生成css代码映射，方便开发调试更快 [传送门](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
+ autoprefixer：提供对css文件的兼容性处理 [传送门](https://github.com/postcss/autoprefixer)

## 文件目录结构

```
├── code-origin // 原始入口文件
│   ├── css
│      ├── index.css 
│      ├── other.css 
│      ├── xxxxx.css
├── code-mini   // 经过Gulp处理打包后的文件
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```

## 相关依赖

```
npm install gulp@4 gulp-load-plugins@2 autoprefixer@7 gulp-clean-css@4 gulp-postcss@9 gulp-sourcemaps@3 -D
```

## gulpfile.js 配置

### 不需要对css文件做样式兼容或生成.map文件，只需要删除相应的pipe通道即可


```js
const { series, parallel, src, dest } = require('gulp');
// 为了插件更便捷的引入
const gulpLoadPlugins = require('gulp-load-plugins')();

const cleanCss = gulpLoadPlugins.cleanCss;

const enterFileName   = 'code-origin' // 入口文件名
const exportFileName  = 'code-mini'   // 输出文件名

// 对Css文件管道处理方式为
// 输入.css文件 ==> 开始sourcemaps初始化 ==> 通过 postcss解析css并对css文件做兼容性处理 ==>
// sourcemaps结束，生成.map.css文件 => 压缩该css文件 ==> 输出css文件
const miniCss = () => {
  return src(`${enterFileName}/**/*.css`)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions']
        cascade: true // 是否美化属性值
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(cleanCss({
      format: false, // 属性值：false|keep-breaks|beautify 默认false(压缩)
      inline: ['none'], // 当 css文件中有 @import 'xxx.css'语法时, 属性值为none则不将 xxx.css全部解析到当前的css文件
    }))
    .pipe(dest(`${exportFileName}`))
}

exports.miniCss = miniCss
```

## package.json 配置

```json
{
  "name": "gulp-es5-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tasks": "gulp --tasks",
    "build": "gulp",
    "miniCss": "gulp miniCss"
  },
  "author": "arisemarcher",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^7.2.6",
    "gulp": "^4.0.2",
    "gulp-clean-css": "^4.3.0",
    "gulp-load-plugins": "^2.0.7",
    "gulp-postcss": "^9.0.1",
    "gulp-sourcemaps": "^3.0.0"
  }
}

```

## 运行命令

```bash
npm run miniCss
```

## 效果展示
### 未压缩前css文件示例 （排版顺序故意写乱）

```css
.box {
  justify-content: center;
  width: 200px;
  align-items: center;
  display: flex;
  height: 200px;
}
```

### 压缩后css文件展开示例

```css
.box {
  width: 200px;
  height: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}
```