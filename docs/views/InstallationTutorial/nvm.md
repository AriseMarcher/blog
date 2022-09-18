---
title: Nvm安装教程
date: 2021/11/11
sidebar: false
tags:
 - InstallationTutorial
categories:
 -  InstallationTutorial
---

下载地址：[nvm安装包](https://github.com/coreybutler/nvm-windows/releases)

### 安装流程

```text
nvm安装路径如：
D:\arise-dev-env\nvm

nodeJs存放路径如：
D:\arise-dev-env\nodejs
```

### nvm指令

```bash
nvm ：可查看当前版本和其他指令信息
nvm version ：查看当前版本
nvm arch ：显示node是运行在32位还是64位。
nvm install <version> [arch] ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。
nvm list [available] ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
nvm on ：开启node.js版本管理
nvm off ：关闭node.js版本管理
nvm proxy [url] ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
nvm node_mirror [url] ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm npm_mirror [url] ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm uninstall <version> ：卸载指定版本node。
nvm use [version] [arch] ：使用制定版本node。可指定32/64位。
nvm root [path] ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
nvm version ：显示nvm版本。version可简化为v。
```

### 注意点
#### 如果nvm use不成功，需要清除之前Node版本安装的东西，一般在C盘下的Program Files下的nodejs还有一个办法就是把nvm安装的路径和nodejs的不要跟之前保持一致就可以

### 安装Yarn

#### 值得注意的是yarn是跟npm,nrm不是会互相影响的

##### 推荐用nvm安装的nodejs安装yarn

```bash
// 每次使用nvm切换npm后都需要重新安装yarn但是下面的yarn配置只是执行一遍就可以了
nrm use 14.14.0
npm install yarn -g
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

配置系统变量用于可以支持yarn
PATH : D:\NodeJs\NodeCache\node_global\node_modules\yarn\bin\

yarn global bin => D:\NodeJs\NodeCache\node_global\bin\ (配置到环境变量path中，并重新启动)

// 1:改变 yarn 全局安装位置
yarn config set global-folder "D:\Program Files (x86)\Yarn\global"

yarn config set prefix "D:\RTE\Yarn\global\"		# 会自动设置成*\global\bin 

2:改变 yarn 缓存位置
yarn config set cache-folder "D:\Program Files (x86)\Yarn\cache"

```

### npm相关指令

```bash
npm config set registry https://registry.npm.taobao.org

// node-sass优化，很有用的
npm set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

// 这是验证是否是registry.npm.taobao.org
npm config get registry
```