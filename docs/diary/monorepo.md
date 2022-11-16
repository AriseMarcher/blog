---
title: monorepo-pnpm跨项目组件复用
date: 2022-10-08 13:06:00
sidebar: auto
tags:
 - react
categories:
 - react
---

[pnpm](https://www.pnpm.cn/)

### 实战

+ npm install pnpm -g
+ pnpm init
+ 根目录下创建<code>pnpm-workspace.yaml</code>
  其中的内容为
  ```
    packages:
    # all packages in direct subdirs of packages/
    - 'packages/*'
    # 公共的，给所有我的项目使用的公开组件
    # all packages in subdirs of components/
    - 'components/**'
    # 公共的方法 api axios
    - "api/*"
    # exclude packages that are inside test directories
    - '!**/test/**'
  ```
+ 新建packages

```bash
npm install pnpm -g
mkdir monorepo-demo
pnpm init
```

在根目录下创建<code>pnpm-workspace.yaml</code>文件，其内部内容为：
```yaml
packages:
  - 'packages/**'
```

继续在根目录下创建文件夹 packages
创建相应的vue文件，之后用pnpm i 进行安装

安装之后使用 pnpm add @arise/api (其他包取得别名)


使用组件的方式

packages下利用vue脚手架新建项目 取名为components 该项目存放公共组件，
需要安装依赖，不然其他打包会失败

packages:
  -'packages/*'

  -'components/**'
