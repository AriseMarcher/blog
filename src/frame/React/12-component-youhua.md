---
title: React-- 组件性能优化
sidebar: true
excerpt: 天生我材必有用。-- 李白
tag:
 - react
category:
 - react
---

## React组件性能优化

React组件性能优化的核心是减少渲染真实DOM节点的频率，减少Virtual DOM对比的效率

### 1 组件卸载前进行清理操作

在组件中为 window 注册的全局事件，以及定时器，在组件卸载前要清理掉，防止组件卸载后继续执行影响应用性能。

```js
// Test.js
import { useEffect } from "react";

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行中')
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return <div>Test</div>
}

export default Test;
```

```js
// App.js
import { useState } from "react";
import Test from "./Test";

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      App
      <button onClick={() => setFlag(prev => !prev)}>
        销毁Test组件
      </button>
      {
        flag && <Test />
      }
    </div>
  );
}

export default App;
```

### 2 PureComponent

+ 什么是纯组件：纯组件是对组件输入数据进行浅层比较，如果当前输入数据和上次输入数据相同，组件不会重新渲染。
+ 浅层比较：比较引用类型在内存中的引用地址是否相同，比较基本数据类型的值是否相同
+ 如何实现纯组件：类组件继承PureComponent类，函数组件使用memo方法
+ 为什么不直接进行diff操作，而是要先进行浅层比较，浅层比较难道没有性能消耗吗？和进行diff比较操作相比，浅层比较将消耗更少的性能。diff操作会重新遍历整顿virtualDOM树，而浅层比较只操作当前组件的state和props

现在假设，在状态对象中存储name值为张三，组件挂载完成后将name属性的值再次更改为张三，然后分别将name传递给纯组件和非纯组件，查看结果。

```js
import { Component, PureComponent } from "react";

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '张三'
    }
  }
  updateName () {
    setInterval(() => {
      this.setState({
        name: '张三'
      })
    }, 1000)
  }
  componentDidMount () {
    this.updateName()
  }
  render () {
    return <div>
      <ReguarComponent name={this.state.name} />
      <PureComponentDemo name={this.state.name} />
    </div>
  }
}

// 普通组件 即使每次state的值没改变 还是会重新渲染
class ReguarComponent extends Component {
  render () {
    console.log('ReguarComponent')
    return <div>{this.props.name}</div>
  }
}

// 纯组件 state中值未改变不重新渲染
class PureComponentDemo extends PureComponent {
  render () {
    console.log('PureComponents')
    return <div>{this.props.name}</div>
  }
}

export default App
```

### 3 shouldComponentUpdate

+ 纯组件只能进行浅层比较，要进行深层比较，使用shouldComponentUpdate，它用于编写自定义比较逻辑
+ 返回 true 重新渲染组件，返回 false 阻止重新渲染
+ 函数的第一个参数为 nextProps，第二个参数为 nextState

现假设：页面中展示员工信息，包含姓名，年龄，职位，但在页面中只展示姓名和年龄，只有这二者变化才有必要重新渲染组件，如果员工的其他信息发生了变化也没有必要重新渲染组件

```js
import { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      person: {
        name: '张三',
        age: 20,
        job: 'waiter'
      }
    }
  }
  componentDidMount () {
    setTimeout(() => {
      console.log('123')
      this.setState({
        person: {
          ...this.state.person,
          job: 'teacher'
        }
      })
    })
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (
      nextState.person.name !== this.state.person.name ||
      nextState.person.age !== this.state.person.age
    ) {
      return true
    }
    return false
  }
  render () {
    console.log('this is render')
    return <div>
      { this.state.person.name }
      { this.state.person.age }
    </div>
  }
}

export default App
```
### 4 纯组件提升组件性能（函数组件）

1. memo基本使用
将函数组件变为纯组件，将当前 props 和上一次的 props进行浅层比较，如果相同就阻止组件重新渲染。

现假设：父组件维护两个状态，index和name，开启定时器让index不断变化，name传递给子组件，查看父组件更新子组件是否也会更新

```js
import { useEffect, useState, memo } from 'react'

const ShowName = memo(function ({name}) {
  console.log('is Update?')
  return <div>{name}</div>
})

function App() {
  const [name] = useState('张三')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setIndex(prev => prev + 1)
    }, 1000)
  }, [])

  return <div>
    <ShowName name={name} />
  </div>
}

export default App;
```

2. memo处理引用类型

```js
import { useEffect, useState, memo } from 'react'

function compare (prevProps, nextProps) {
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    // false 表示需要重新渲染
    return false
  }
  // true 表示不需要重新渲染 跟 shouldComponentUpdate相反
  return true
}

const ShowName = memo(function ({person}) {
  console.log('is Update?')
  return <div>{person.name} -- {person.age}</div>
}, compare)

function App() {
  const [person, setPerson] = useState(({
    name: '张三',
    age: 20,
    job: 'waiter'
  }))

  useEffect(() => {
    setInterval(() => {
      setPerson({...person, job: 'teacher'})
    }, 1000)
  }, [])

  return <div>
    <ShowName person={person} />
  </div>
}

export default App;
```

### 使用组件懒加载

使用组件懒加载可以减少 bundle 文件大小，加快组件层递速度

1. 路由组件懒加载

```js
import { lazy, Suspense } from 'react';
// react-router-dom'是 5 的版本
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Suspense 需要和 lazy配合使用
const Home = lazy(() => import(/* webpackChunkName "Home" */'./Home'))
const List = lazy(() => import(/* webpackChunkName "List" */'./List'))

function App() {
  return <BrowserRouter>
    <Link to="/">首页</Link>
    <Link to="/list">列表页面</Link>

    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <Route path="/" component={Home} exact />
        <Route patc="/list" component={List} />
      </Suspense>
    </Switch>
  </BrowserRouter>
}

export default App;
```

2. 根据条件进行组件懒加载

适用于组件不会随条件频繁切换

```js
import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Switch, Link } from 'react-router-dom'

function App() {
  let LazyComponent = null
  const [flag, setFlag] = useState(true)

  if (flag) {
    LazyComponent = lazy(() => import(/* webpackChunkName "Home" */'./Home'))
  } else {
    LazyComponent = lazy(() => import(/* webpackChunkName "List" */'./List'))
  }

  return <BrowserRouter>
    <Link to="/">首页</Link>
    <Link to="/list">列表页面</Link>
    <button onClick={() => setFlag(flag => !flag)}>简单改变页面</button>


    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </Switch>
  </BrowserRouter>
}

export default App;
```

### 使用Fragment避免额外标记

React组件中返回的jsx如果有多个同级元素，通过同级元素必须要有一个共同的父级

```js
function App () {
  return (
    <div>
      <div>message a</div>
      <div>message b</div>
    <div>
  )
}
```

为了满足这个条件，通常需要在最外层添加一个div，但是这样的话就会多出一个无意义的标记，如果每个组件都多出这样一个无意义的标记，浏览器渲染引擎的负担就会加剧

为了解决这个问题，React推出了fragment占位符标记，使用占位符标记既满足了拥有共同父级的要求又不会多出额外的无意义标记

```js
import { Fragment } from 'react'

function App() {
  return <Fragment>
    <div>message a</div>
    <div>message a</div>
  </Fragment>
}

export default App;
```

简化写法

```js
function App() {
  return <>
    <div>message a</div>
    <div>message a</div>
  </>
}

export default App;
```

### 不要使用内联函数定义

在使用内联函数后，render方法每次运行时都会创建该函数的新实例，导致React在进行Virtual DOM对比时，新旧函数对比不相等，导致React总是为元素绑定新的函数实例，而旧的函数实例又要交给垃圾回收器处理

修改前
```js
import { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  render () {
    return (
      <input
        value={this.state.inputValue}
        onChange={e => this.setState({ inputValue: e.target.value })}
      />
    )
  }
}

export default App;
```

修改后
```js
import { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  setInputValue = e => {
    this.setState({ inputValue: e.target.value })
  }

  render () {
    return (
      <input
        value={this.state.inputValue}
        onChange={this.setInputValue}
      />
    )
  }
}

export default App;
```

### 在构造函数中进行函数this绑定

在类组件中如果使用`fn(){}`这种方式定义函数，函数this默认执行`undefined`，也就是说函数内部的`this`指向需要被更正。
可以在构造函数中对函数的`this`进行更正，也可以在行内进行更正，两者看起来没有太大区别，但是对性能的影响是不同的

```js
import { Component } from 'react'
class App extends Component {
  constructor () {
    super()

    // 方式一
    // 构造函数只执行一次，所以函数 this 指向更正的代码也至执行一次
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log(this)
  }

  render () {
    // 方式二
    // 问题：render方法每次执行时都会调用 bind 方法生成新的函数实例
    return <button onClick={this.handleClick.bind(this)}>按钮</button>
  }
}

export default App;
```

### 类组件中的箭头函数

在类组件中使用箭头函数不会存在`this`指向问题，因为箭头函数本身不绑定`this`

```js
import { Component } from 'react'
class App extends Component {
  handleClick = () => console.log(this)

  render () {
    return <button onClick={this.handleClick}>按钮</button>
  }
}

export default App;
```

+ 箭头函数在`this`指向问题上占据优势，但是同时也有不利的一面。
+ 当使用箭头函数时，该函数被添加为类的实例对象属性，而不是原型对象属性。如果组件被多次重用，每个组件实例对象中都将会有一个相同的函数实例，降低了函数实例的可重用性造成了资源浪费
+ 综上所述，更正函数内部的`this`指向的最佳做法就是在构造函数中使用`bind`方法进行绑定

### 避免使用内联样式属性

当使用内联`style`为元素添加样式时，内联`style`会编译为`JavaScript`代码，通过`JavaScript`代码将样式规则映射到元素的身上，浏览器就会花费更多的时间执行脚本和渲染UI，从而增加了组件的渲染时间。
```js
function App () {
  return <div style={{background: 'blue'}}>App works</div>
}
```

在上面的组件中，为元素附加了内联样式，添加的内联样式为`JavaScript`对象，`backgroundColor`需要被转换为等效的CSS样式规则，然后将其应用到元素，这样涉及到脚本的执行

更好的办法是将CSS文件导入样式组件，能通过CSS直接做的事情就不要通过`JavaScript`去做，因为`JavaScript`操作DOM非常慢

### 优化条件渲染

频繁的挂载和卸载组件是一项耗费性能的操作，为了确保应用程序的性能，应该减少组件挂载和卸载的次数。

```js
function App () {
  is (true) {
    return (
      <>
        <AdminHeader />
        <Header />
        <Content />
      </>
    )
  } else {
    return (
      <>
        <Header />
        <Content />
      </>
    )
  }
}
```

在上面的代码中，当渲染条件发生变化时，React内部在做Virtual DOM对比时发现，刚刚第一个组件是`AdminHeader`，现在第一个组件是`Header`，第二个组件是`Header`,现在是`Content`，组件发生了变化，React就会卸载`AdminHeader`、`Header`、`Content`，重新挂载`Header`、`Content`,这种挂载和卸载就是没有必要的

```js
function App () {
  return (
    <>
      (true && <AdminHeader />)
      <Header />
      <Content />
    </>
  )
}
```

### 避免重复的无限渲染

当应用程序状态发生更改时，React会调用`render`方法，如果在`render`方法中继续更改应用程序状态，就会发生`render`方法递归调用导致应用报错，`componentWillUpdate` or `componentDidUpdate`也不要这样操作

```js
export default class App extends Component {
  constructor() {
    super()
    this.state = {name: '张三'}
  }
  render () {
    this.setState({name: '李四'})
    return <div>{this.state.name}</div>
  }
}
```

与其他生命周期函数不同，`render`方法应该被作为纯函数，这意味着，在`render`方法中不要做以下事情

+ 不要调用`setState`方法
+ 不要使用其他手段查询或更改原生DOM元素，以及其他更改应用程序的任何操作

`render`方法的执行要根据状态的改变，这样可以保持组件的行为和渲染方式一致

### 为应用程序创建错误边界

+ 默认情况下，组件渲染错误会导致整个应用程序中断，创建错误边界可以确保在特定组件发生错误时应用程序不会中断
+ 错误边界是一个React组件，可以捕获子组件在渲染时发生的错误，当错误发生时，可以将错误纪录下来，可以显示备用UI界面
+ 错误边界涉及到两个生命周期函数，分别为`getDerivedStateFromError`和`componentDidCatch`
+ `getDerivedStateFromError`为静态方法，方法中需要返回一个对象，该对象会和state对象进行合并，用于更改应用程序状态
+ `componentDidCatch`方法用于记录应用程序错误信息，该方法的参数就是错误对象

```js
// ErrorBoundaries.js
import { Component } from 'react'
import App from './App'

export default class ErrorBoundaries extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch (error) {
    // 应用程序发生错误了
    console.log('componentDidCatch')
  }
  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError')
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>错误</div>
    }
    return (
      <App />
    );
  }
}
```

```js
// App.js
export default class App extends Component {
  render () {
    // throw new Error('some error')
    return <div>App</div>
  }
}
```

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundaries from './ErrorBoundaries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundaries />
);

```

:::warning
错误边界不能捕获异步错误，比如点击按钮时发生的错误。
:::

### 避免数据结构突变

组件中props和state的数据结构应该保持一致，数据结构突变会导致输出不一致

```js
import { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      employee: {
        name: '张三',
        age: 20
      }
    }
  }

  render () {
    const { name, age } = this.state.employee
    return (
      <div>
        {name} -- {age}
        <button onClick={() => this.setState({
          ...this.state,
          employee: {
            ...this.state.employee, // 防止数据突变
            age: 30
          }
        })}>change age</button>
      </div>
    )
  }
}

export default App;
```

### 优化依赖项大小

在应用程序中经常会依赖第三方包，但并不想引用包中的代码，想用到哪些代码就包含哪些代码。此时可以使用插件对依赖项进行优化

1. 依赖下载 `npm install react-app-rewired customize-cra lodash babel-plugin-lodash`

1. `react-app-rewired` 覆盖 `create-react-app`的默认配置

```js
module.exports = function (oldConfig) {
  return newConfig
}
// 参数中的 oldConfig就是默认的webpack config
```

2. `customize-cra`：导出了一些辅助方法，可以让以上写法更加简洁

```js
const { override, useBabelRc } = require('customize-cra')

module.exports = override(
  (oldConfig) => newConfig,
  (oldConfig) => newConfig,
)
```

+ override：可以接收多个参数，每个参数都是一个配置函数，函数接受oldConfig，返回newConfig
+ useBabelRc：允许使用.babelrc文件进行babel配置

3. babel-plugin-lodash：对应用中的lodash进行精简

2. 在项目的根目录下新建`config-overrides.js`并加入配置代码

```js
const {override, useBabelRc} = require('customize-cra')

module.exports = override(useBabelRc)
```

3. 修改`package.json`文件中的构建命令

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env-jsdom"
},
```

4. 创建`.babelrc`文件并加入配置

```json
{
  "plugins": ["lodash"]
}
```

5. 生产环境下的三种JS文件
+ main.[hash].chunk.js：应用代码
+ 1.[hash].chunk.js：第三方库的代码，包含在node_modules中导入的模块
+ runtime~main.[hash].js webpack运行时的代码

6. App组件

```js
import _ from 'lodash'

function App () {
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
  return <div>App</div>
}

export default App;
```
