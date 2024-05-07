---
title: this指向
icon: object-group
excerptLength: 100
excerpt: 人生天地之间，若白驹过隙，忽然而已。——庄子
date: 2024-05-07 12:43:00
category:
  - JavaScript
tag:
  - 基础
---

## 函数中的 this 指向

- 函数在调用时，JavaScript 会默认给 this 绑定一个值
- this 的绑定和定义的位置（编写的位置）没有关系
- this 的绑定和调用方式以及调用的位置有关系
- this 是运行时被绑定的

::: code-tabs#language

@tab 独立函数调用

```js
// 1. 普通函数被独立调用
// 指向Window
function foo() {
  console.log("foo", this);
}

// 2.函数定义在对象中，但是独立调用
// 指向Window
var obj = {
  name: "xiaoming",
  bar: function () {
    console.log("bar:", this);
  },
};

var baz = obj.bar;
baz();

// 3.高阶函数 指向依旧是Window
function test(fn) {
  fn();
}
test(obj.bar);

// 4. 严格模式下，独立调用的函数中的this指向的是undefined
// 'use strict' 即如果this指向的应该是window,在严格模式下反而是undefined
```

@tab 隐式绑定

```js
// 隐式绑定
function foo() {
  console.log("foo", this);
}

var obj = {
  bar: foo,
};
// this指向为obj
console.log(obj.bar);
```

@tab 显式绑定

```js
let obj = {
  name: "小明",
};
function foo() {
  console.log("foo", this);
}
// 执行函数，并且强制this就是obj对象
// fn.apply(whatThis, [arg1, arg2])
// call(thatThis, arg1, arg2)
// fn.bind(whatThis, arg1, arg2)
// foo.apply(obj)
foo.call(obj);
// foo.bind(obj)

// 这个则是指向window
foo.call(null)
foo.call(undefined)
```

@tab new 绑定

```js
/**
 * 1. 创建新的空对象
 * 2. 将this指向这个空对象
 * 3. 执行函数中的代码
 * 4. 没有显示返回非空对象时，默认返回这个对象
 */
function foo() {
  console.log("foo:", this);
  console.log("foo:", this.name);

  this.name = "xiaoming";
}
new foo();
```


其他的一些例子

::: code-tabs#language

@tab 获取内部this的值
```js
// 打印的this是属于隐式范围，故this指向obj
// this.color, 即obj.color: skyblue
// 如果obj下不存在color属性, this.color为undefined
window.color = 'red'
let color = 'green'
let obj = {
  name : 'xiaoming',
  color: 'skyblue',
  foo: function () {
    console.log('foo', this, this.color)
  }
}
obj.foo()
```

@tab 箭头函数调用

```js
// 箭头函数调用，次数this指向为window
// color则为green,如果没有let color，则是window.color: red
window.color = 'red'
let color = 'green'
let obj = {
  name : 'xiaoming',
  // color: 'skyblue',
  foo: () => {
    // console.log('foo', this, this.color)
    console.log('foo', this, color)
  }
}
obj.foo()
```

@tab 内置函数调用

```js
const btnEl = document.querySelector('button')
setTimeout(function() {
  // this指向window
  console.log('setTimeout:', this)
}, 1000)
btnEl.addEventListener('click', function() {
  // this指向点击的按钮
  console.log('btn点击', this)
})
let names = ['abc', 'cba']
names.forEach(function(item) {
  // this指向window
  console.log('forEach', this)
})

names.forEach(function(item) {
  // this指向 whatThis
  console.log('forEach', this)
}, 'whatThis')
```

### 规则优先级

+ 默认规则的优先级最低
+ 显示的优先级高于隐式绑定
+ new绑定的优先级高于隐式绑定（new不会和apply,call使用，但是可以和bind使用，但是new的优先级高于bind）
+ bind/apply优先级

```js
// apply和bind互换也是aaa,则说明两者同时存在，取最内部的指向
function foo() {
  console.log('foo:', this)
}
var bindFn = foo.apply('aaa')
var applyFn = bindFn.bind('ccc')
applyFn()
```

### 箭头函数

箭头函数是Es6之后新增的一种方法
+ 箭头函数不会绑定this，arguments属性
+ 箭头函数不能作为构造函数来使用（不能和new 一起来使用，会抛出错误）

::: code-tabs#language

@tab 有作用域

```js
const obj = {
  name: 'obj',
  foo: function() {
    let bar = () => {
      console.log('bar:', this)
    }
    return bar
  }
}
var fn = obj.foo()
// fn为箭头函数，箭头函数不会绑定this，apply直接无视
// 此时this往上层寻找，foo有作用域，则找到了obj对象
fn.apply('bbb')
```

@tab 无作用域

```js
const obj = {
  name: 'obj',
  foo: () => {
    console.log('foo:', this)
  }
}
var fn = obj.foo
// fn为箭头函数，箭头函数不会绑定this，apply直接无视
// 此时this往上层寻找，obj对象是没有作用域的，所以此时是window
fn.apply('bbb')
```