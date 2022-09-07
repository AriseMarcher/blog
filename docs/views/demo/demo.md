---
title: vuepress 使用vue组件基本使用
date: 2021/12/5
tags:
 - vuepress
categories:
 -  vuepress
---

## 基本使用

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/.vuepress/demo/extract-code.vue?template
  </template>
  <template slot="code-script">
    <<< @/.vuepress/demo/extract-code.vue?script
  </template>
  <template slot="code-style">
    <<< @/.vuepress/demo/extract-code.vue?style
  </template>
  <extract-code slot="demo"></extract-code>
</RecoDemo>