---
title: Css-flex布局
icon: object-group
excerpt: 人生下来不是为了拖着锁链，而是为了展开双翼。-- 雨果（法国）
category:
  - Css
tag:
  - 基础
---

Flexible Box模型，简称flexbox。可以简便、完整、响应式地实现各种页面布局。它是一种一维的布局模型。

## flex布局使用

```css
.flex-wrapper {
  display: flex; // 或者是行业元素的 inline-flex
}
```
当使用flex布局后，子元素的float、clear和vertical-align属性将失效。

## flex概念

flex布局由容器和该容器内的子项目组成，当声明一个容器为flex布局时，在脑海中就该想到它的两根轴线。如下图所示：

![轴线示例图一](/assets/images/flex/flex001.png =500x300)
![轴线示例图二](/assets/images/flex/flex002.png =500x300)

## 容器的属性

当设置一个容器的<code>display</code>属性值为<code>flex</code>或<code>inline-flex</code>是，容器内的子元素会变成flex元素。
初始值为：
+ 元素水平排列（<code>flex-direction</code>属性的初始值是<code>row</code>）
+ 元素从主轴的起始线开始。
+ 元素不会在主维度方向拉伸，但是可以缩小
+ 元素被拉伸来填充交叉轴大小
+ <code>flex-basis</code>属性为<code>auto</code>。
+ <code>flex-wrap</code>属性为<code>nowrap</code>

容器有以下属性：
+ flex-direction：更改子元素的排列方向
  - <code>flex-direction: row</code>：子元素水平排列，从左至右，起始为左，终止为右。
  - <code>flex-direction: row-reverse</code>：子元素水平排列反转，从右至左，起始为右，终止为左。
  - <code>flex-direction: column</code>：子元素纵向排列，从上至下，起始为上，终止为下。
  - <code>flex-direction: column-reverse</code>：子元素纵向排列反转，从下至上，起始为下，终止为上。
+ flex-wrap：确定子元素的换行方式
  - <code>flex-wrap: nowrap</code>：默认不换行
  - <code>flex-wrap: wrap</code>：换行
+ flex-flow：<code>flex-direction</code> 和 <code>flex-wrap</code> 组合为简写属性
  - 第一个值为<code>flex-direction</code>
  - 第二个值为<code>flex-wrap</code>
+ justify-content：设置子元素的主轴对齐方式
  - <code>justify-content: stretch</code>：果元素沿主轴的组合尺寸小于对齐容器的尺寸，任何尺寸设置为 auto 的元素都会等比例地增加其尺寸（而不是按比例增加），同时仍然遵守由 max-height/max-width（或相应功能）施加的约束，以便沿主轴完全填充对齐容器的组合尺寸。
  - <code>justify-content: flex-start</code>：子元素紧密排列主轴的起始侧
  - <code>justify-content: flex-end</code>：子元素紧密排列主轴的终止侧
  - <code>justify-content: center</code>：伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
  - <code>justify-content: space-around</code>：在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
  - <code>justify-content: space-between</code>：在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
  - <code>justify-content: space-evenly</code>：flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间的间距，主轴起始位置到第一个 flex 项的间距，主轴结束位置到最后一个 flex 项的间距，都完全一样。
+ align-items：设置子元素的交叉轴对齐方式
  - <code>align-items: flex-start</code>：将元素与flex容器的交叉轴起始对齐
  - <code>align-items: flex-end</code>：将元素与flex容器的交叉轴终止对齐
  - <code>align-items: center</code>：将元素与flex容器的交叉轴居中对齐
  - <code>align-items: stretch</code>：子元素未设置高度或为auto，将占满整个容器
  - <code>align-items: baseline</code>：子元素基于第一个元素文字的基线对齐

## 子项目的属性

+ order：按照数字大小设置每个子元素的排列方式。
+ flex-grow: 定义子元素的放大比例，默认为0。即使存在剩余空间，也不放大
+ flex-shrink: 定义子元素的缩小比例，默认为1，如果空间不足，将缩小
+ flex-basis: 设置子元素原始所占主轴空间的大小（宽度）
+ flex：设置放大，缩小和原始大小的简写。
+ align-self：单独设置特定元素的对齐方式。会覆盖容器align-items，属性值align-items一致，除了auto。