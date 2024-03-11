---
title: React-- CSS-IN-JS
sidebar: true
excerpt: 我们热爱这个世界时，才真正活在这个世界上。 -- 泰戈尔
tag:
 - react
category:
 - react
---

## CSS-IN-JS Why?

CSS-IN-JS是WEB项目中将CSS代码捆绑在JavaScript代码中的解决方案。这种方案旨在解决CSS的局限性，例如缺乏动态功能，作用域和可移植性。

+ 组件为单位，希望CSS代码只在组件类的范围生效
+ 增加组件的独立性和可移植性
+ CSS本身缺乏动态功能，不能根据条件给某一个元素添加相应的样式

## CSS-IN-JS介绍

CSS-IN-JS的优点：

+ 让CSS代码拥有独立的作用域，阻止CSS代码泄漏到组件外部，防止样式冲突。
+ 让组件更具可移植性，实现开箱即用，轻松创建松耦合的应用程序
+ 让组件更具有重用性，只需编写一次即可，可以在任何地方运行，不仅可以在同一应用程序中重用组件，而且可以在使用相同框架构建的其他应用程序中重用组件。
+ 让样式具有动态功能，可以将复杂的逻辑应用于样式规则，如果要创建需要动态功能的复杂UI，它是理想的解决方案。

CSS-IN-JS的缺点：

+ 为项目增加了复杂的复杂性
+ 自动生成的选择器大大降低了代码的可读性

## Emotion库
[传送门](https://gitee.com/mirrors/emotion?utm_source=alading&utm_campaign=repo#emotion)

### 介绍

Emotion是一个旨在使用JavaScript编写CSS样式的库

`npm install --save @emotion/react`

### css属性支持

1. JSX Pragma

通知babel,不再需要将jsx语法转换为React.createElement方法，而是需要转换为jsx方法。

||Input|OutPut|
|---|---|---|
|Before|`<img scr="avatar.png" />`|`React.createElement(img, {src: 'avatar.png'})`|
|After|`<img src="avatar.pgn" />`|`jsx('img', {src: 'avatar.png'})`|

```js
/** @jsx jsx */
import { jsx } from '@emotion/react'
```

2. Babel Preset【推荐】

+ npm run eject
+ npm install @emotion/babel-preset-css-prop
+ 在package.json文件中找到babel属性，加入
```json
"presets": [
  "react-app",
  "@emotion/babel-preset-css-prop"
]
```

```js
function App() {
  return (
    <div css={{color: 'blue'}}>
      App Page
    </div>
  );
}

export default App;
```

### css方法

1. String Styles【推荐】

```js
import { css } from '@emotion/react'

const style = css`
  width: 100px;
  height: 100px;
  background: red;
`

<div css={style}>App pages</div>
```

2. Object Styles
```js
import { css } from '@emotion/react'

const style = css({
  width: 100px;
  height: 100px;
  background: red;
})

function App () {
  return <div css={style}>App</div>
}
```

### css属性优先级

props对象中的css属性优先级高于组件内部的css属性。在带哦用组件时可以覆盖组件默认样式。

```js
import React from "react";
import { css } from '@emotion/react'

const styleDemo = css`
  width: 200px;
  height: 200px;
  background: skyblue;
`

const styleApp = css`
  background: red;
`

function Demo (props) {
  return <div css={style} {...props}>Demo</div>
}

function App() {
  return (
    <div>
      <Css css={styleApp} />
    </div>
  );
}

export default App;
```

### styled Components样式化组件

样式化组件就是用来构建用户界面的，是emotion库提供的另一种为元素添加样式的方式

1. 基本写法

+ String Styles
+ Object Styles

```js
import styled from '@emotion/styled'

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #fff;
`

const Container = styled.div({
  width: 1000,
  height: 500,
  border: '1px solid #eee',
  margin: '0 auto',
  background: '#eee',
})

function App() {
  return (
    <div>
      <Container>
        <Button>按钮</Button>

      </Container>
    </div>
  );
}

export default App;
```

2. 根据props属性覆盖样式

1. String Styles
```js
// 声明
const Button = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => props.bgColor || 'skyblue'}
`

// 使用
<Button bgColor="blue">按钮</Button>
```

2. Object Styles
```js
// 声明1
const Container = styled.div(props => ({
  width: props.w || 1000,
  height: 500,
  border: '1px solid #eee',
  margin: '0 auto',
  background: '#eee',
}))
// 声明二
const ContainerDemo = styled.div({
  width: 500,
  height: 300,
  background: 'skyblue',
}, props => ({
  background: props.bgColor
}))


// 使用
<Container w={300}>
  <Button bgColor="blue">按钮</Button>
</Container>
```

### 为任何组件添加样式

1. String Styles

```js
const Demo = ({className}) => <div className={className}>Demo</div>

const Fancy = styled(Demo)`
  color: red
`
```

2. Object Styles

```js
const Demo = ({className}) => <div className={className}>Demo</div>

const Orange = styled(Demo)({
  background: 'orange',
  color: 'white'
})
```

### 通过父组件设置子组件样式

1. String Styles

```js
const Child = styled.div`
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: blue;
  }
`
```

2. Object Styles

```js
const Child = styled.div({
  color: 'red'
})

const Parent = styled.div({
  [Child]: {
    color: 'blue'
  }
})
```

### 嵌套选择器 &

& 表示组件本身

```js
const Container = styled.div`
  color: red;
  & > a {
    color: #333;
  }
`
```

### as属性

要使用组件中的样式，但要更改呈现的元素，可以使用as属性

```js
const Button = style.button`
  color: red
`

// 这个会被转换成 a 标签
<Button as="a" href="#"></Button>
```

### 样式组合

后调用的样式优先级高于先调用的样式

```js
import { css } from '@emotion/react'

const base = css`
  color: blue;
  font-size: 12px;
`

const danger = css`
  color: red;
  font-size: 16px;
`
function App() {
  return (
    <div>
      <button css={[base, danger]}>button</button>
    </div>
  );
}

export default App;
```

### 全局样式

```js
import { css, Global } from '@emotion/react'
import Demo from './Demo';

const styles = css`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`

// Demo 和 a标签中也会应用全局样式
function App() {
  return (
    <div>
      <Global styles={styles} />
      <a href="#">a标签</a>
      <Demo />
    </div>
  );
}

export default App;
```

### 关键帧动画

```js
import { css, keyframes } from '@emotion/react'

const move = keyframes`
  0% {
    background: skyblue;
    left: 0;
    top: 0
  }
  100% {
    background: red;
    left: 500px;
    top: 200px;
  }
`

const box = css`
  width: 50px;
  height: 50px;
  position: absolute;
  animation: ${move} 2s ease infinite;
`

function App() {
  return (
    <div css={box}>
      Go
    </div>
  );
}

export default App;
```

### 创建主题

1. 下载主题模块

<!-- theme-emoting已经集成在了@emotion/react -->
`npm install @emotion/react`

```js
// 2 引入 ThemeProvider 组件
import { ThemeProvider } from '@emotion/react'

// 4. 添加主题内容
const theme = {
  colors: {
    primary: 'hotpink'
  }
}

// 3. 将ThemeProvider放置在视图的最外层
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
```

获取主题内容一

```js
const getPrimaryColor = props => css`
  color: ${props.colors.primary}
`

<div css={getPrimaryColor}></div>
```

获取主题内容二

```js
import { useTheme } from '@emotion/react'

function Demo () {
  const theme = useTheme()
}
```
