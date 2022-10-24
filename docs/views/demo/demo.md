---
title: vuepress 使用vue组件基本使用
date: 2021/12/5
sidebar: false
tags:
 - vuepress
categories:
 -  vuepress
---

## 基本使用

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/extract-code.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/extract-code.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/extract-code.vue?style
  </template>
  <extract-code slot="demo"></extract-code>
</RecoDemo>