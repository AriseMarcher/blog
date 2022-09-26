---
title: 服务端渲染
date: 2022-09-26 08:00:00
sidebar: auto
tags:
 - nuxtJs
categories:
 -  nuxtJs
---

### 介绍

+ 一个基于Vue.js生态的第三方开源服务端渲染应用框架
+ 它可以帮我们轻松的使用Vue.js技术栈构建同构应用
+ [官网](https://www.nuxtjs.cn/)

### 使用方式
+ 初始项目
+ 已有的Node.js服务端项目
  - 直接把Nuxt当作一个中间件集成到Node Web Server中
+ 现有的Vue.js项目
  - 非常熟悉Nuxt.js
  - 至少10%的代码改动

#### 初始化Nuxt.js应用的方式

[初始化地址](https://www.nuxtjs.cn/guide/installation)

#### 路由-基础路由

[路由](https://www.nuxtjs.cn/guide/routing)

```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

那么，Nuxt.js 自动生成的路由配置如下：
```js
router: 
----{
  routes
----: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

#### 路由-路由导航

+ a标签
  - 它会刷新整个页面，不要使用
+ nuxt-link组件
  - https://router.vuejs.org/zh/api/
+ 编程式导航
  - https://router.vuejs.org/zh/guide/essentials/navigation.html

```vue
<template>
  <div>
    <h1>
      Hello about.vue
    </h1>
    <!-- a链接，刷新导航，走服务端渲染 -->
    <h2>a 链接</h2>
    <a href="/">跳转到首页</a>

    <!-- router-link 导航链接组件 -->
    <h2>router-link</h2>
    <!-- <router-link to="/">去首页</router-link> -->
    <nuxt-link to="/">去首页</nuxt-link>


    <!-- 编程式导航 -->
    <h2>编程式导航</h2>
    <button @click="gotoHome">去首页</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    gotoHome () {
      console.log('hello')
      this.$router.push('/')
    }
  }
}
</script>

```

#### 路由-动态路由
+ Vue Router动态路由匹配
  - https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html
+ Nuxt.js动态路由
  - https://www.nuxtjs.cn/guide/routing

#### 路由-嵌套路由
[vue-router](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
[nuxt-router](https://www.nuxtjs.cn/guide/routing#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1)

#### 路由-路由配置
[参考地址](https://www.nuxtjs.cn/api/configuration-router)

```js
// nuxt.config.js
module.exports = {
  router: {
    base: '/app/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/other-about',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}
```

#### Nuxt.js视图--结构
[视图官网地址](https://www.nuxtjs.cn/guide/views)
<img :src="$withBase('/images/nuxtjs/shitu001.jpg')" alt="视图">

[布局](https://www.nuxtjs.cn/guide/views#%E5%B8%83%E5%B1%80)

默认的布局组件&自定义布局组件

一旦用了默认的布局组件，就会使用，不能取消。

```vue
<template>
  <div>
    <h1>
      Hello Nuxt.js!
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'foo'
}
</script>

```