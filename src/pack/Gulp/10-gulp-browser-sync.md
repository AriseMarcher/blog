---
title: Gulp配置篇--gulp-watch
excerpt: 学而不思则罔，思而不学则殆。-- 孔子
sidebar: true
tag:
 - Gulp
category:
 - Gulp
---

当开发代码修改预期在打包后的代码中实现浏览器刷新，参考以下代码。

:::tip
这是独立的，与之前的gulp文档没有任何联系
:::

```js
const browserSync = require('browser-sync')

const bs = browserSync.create()
const serveStart = () => {
  bs.init({
    port: 8080,
    open: true,
    files: './dist/*',
    server: {
      baseDir: './dist'
    }
  })
}
```