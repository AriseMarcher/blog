---
title: TypeScript工具类型
tags:
 - TypeScript
categories:
 -  TypeScript
---

TypeScript提供了数种应用程序类型来促进常用类型转换。这些应用程序适用于全局。

[英文地址](https://www.typescriptlang.org/docs/handbook/utility-types.html)

```
npm install typescript -g
tsc your-file.ts
```

### `Awaited<Type>`

这种类型旨在模拟异步函数中的await或是Promise上的`.then()`方法，特别是他们递归解包Promise的方式

```ts
// the Promise then resolve is string
type A = Awaited<Promise<string>>;

// the Promise then the promise resolve is number
type B = Awaited<Promise<Promise<number>>>;

// the Promise is boolean or then resolve number
type C = Awaited<boolean | Promise<number>>;
```

### `Partial<Type>`

Partial：部分的意思

构建一个类型，其中Type的所有属性都设置为可选。此应用程序将返回一个表示给定类型的所有子集的类型。

可以理解为你需要其中的一部分就可以使用该类型

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

/**
 * {
 *  description: "throw out trash",
 *  title: "organize desk"
 * }
 */
const todo2 = updateTodo(todo1, {
  description: "throw out trash"
})

// warning this is error
// 'other' does not exist in type 'Partial<Todo>'
// const todo3 = updateTodo(todo1, {
//   description: "throw out trash",
//   other: 'the other message'
// })
```
### `Required<Type>`

构造一个类型，该类型由type设置为required的所有属性组成。与Partial相反

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// error
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'
const obj2: Required<Props> = { a: 5 };
```

### `Readonly<Type>`

构造一个将type的所有属性设置为只读的类型，这意味着不能重新分配构造类型的属性

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users"
};

// error!!!
// Cannot assign to 'title' because it is a read-only property.ts(2540)
todo.title = "hello"
```

这个应用程序用于表示在运行时将失败的赋值表达式（即当试图重新分配冻结对象的属性）

```ts
// Object.freezz

function freeze<Type>(obj: Type): Readonly<Type>;
```

### `Record<Keys, Type>`

构造一个对象类型，其属性值为keys，属性值为type。此应用程序可用于将类型的属性映射到另一类型。

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CartName = "miffy" | "boris" | "mordred";

const cats: Record<CartName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  boris: { age: 5, breed: "Main Coon" },
  mordred: { age: 16, breed: "British Shorthair" }
}

// const cats: Record<CartName, CatInfo>
cats.boris;
```

### `Pick<Type, Keys>`

通过type中选择一组属性key(字符串字面量或字符串字面量的并集)来构造类型

```ts
interface TodoA {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<TodoA, "title" | "completed">;

const todoA: TodoPreview = {
  title: "Clean room",
  completed: false
}

// const todoA: TodoPreview
todoA;
```

### `Omit<Type, Keys>`

通过type中选择所有属性，然后删除键（字符串字面值或字符串字面值的并集）来构造类型。

```ts
interface TodoB {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoBPreview = Omit<TodoB, "description">;

const todoB: TodoBPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770
};

type TodoCPreview = Omit<TodoB, "description" | "createdAt">;
const todoC: TodoCPreview = {
  title: 'Go to school',
  completed: false
}

// const todoB: TodoBPreview
todoB;

// const todoC: TodoCPreview
todoC;
```

### `Exclude<UnionType, ExcludeMembers>`

通过从UnionType中排除所有可赋值给excludeMembers的联合成员来构造一个类型。可以理解为“非”

```ts
type To = Exclude<"a" | "b" | "c", "a">;
// type To = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number
```

### `Extract<Type, Union>`

通过从type中提取可赋值给union的所有联合成员来构造一个类型。可以理解为交集合、“与”。

```ts
type E0 = Extract<"a" | "b" | "c", "a" | "f">;
// type E0 = "a"

type E1 = Extract<string | number | (() => void), Function>;
// type E1 = () => void
```

### `NonNullable<Type>`

通过从type中排除null和undefined来构造类型

```ts
type N0 = NonNullable<string | number | undefined>
// type N0 = string | number

type N1 = NonNullable<string[] | null | undefined>
// type N1 = string[]

// 一下演示方法不标准 不推荐这样
interface nObj1 {
  n1: string;
  n2: undefined
}

interface nObj2 {
  n3: null
}

type N2 = NonNullable<nObj1 | nObj2>;
// type N2 = nObj1 | nObj2
const the_n2: N2 = {
  n1: 'hello typescript',
  n2: undefined,
  n3: null,
}
```

### `Parameters<Type>`

从函数类型type的形参中使用的类型构造元组类型。


```ts
declare function  f1(arg: { a: number; b: string }): void;

// arg 代表只是一个对象 为了方便书写 a 和 b的类型而已
const Fn1: typeof f1 = (arg: { a: number; b: string }) => {
  console.log('it works')
  console.log(arg)
}
// This is OK!
Fn1({a:1, b: '2'})

// 返回值无论是 boolean | string | number | null | undefined
// 都是 type P0 = []
type P0 = Parameters<() => boolean>;
// type P0 = []

type P1 = Parameters<(s: string) => void>;
// type P1 = [s: string]

type P2 = Parameters<<T>(arg: T) => T>;
// type P2 = [arg: unknown]

type P3 = Parameters<typeof f1>;
// type P3 = [arg: {
//   a: number;
//   b: string;
// }]

const p3: P3 = [
  { a: 1, b: '2'}, // This is Ok
  // { a: 3, b: '4'} this is error only for on Arguments
]

type P4 = Parameters<any>;
// type P4 = unknown[]

type P5 = Parameters<never>;
// type P5 = never

// type P6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.ts

type P7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
```

### `ConstructorParameters<Type>`

从构造函数类型的类型构造元组或数组类型。它生成一个包含所有参数类型的元组类型（如果type不是函数，则生成类型never）

```ts
type C0 = ConstructorParameters<ErrorConstructor>;
// type C0 = [message?: string | undefined]

type C1 = ConstructorParameters<FunctionConstructor>;
// type C1 = string[]

type C2 = ConstructorParameters<RegExpConstructor>;
// type C2 = [pattern: string | RegExp, flags?: string | undefined]

type C3 = ConstructorParameters<any>;
// type C3 = unknown[]

type C4 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  // Type 'Function' provides no match for the signature 'new (...args: any): any'
```

### `ReturnType<Type>`

构造由函数type的返回类型组成的类型

```ts
declare function Rf1(): { a: number; b: string};

type R0 = ReturnType<() => string>;
// type R0 = string

type R1 = ReturnType<(s: string) => void>;
// type R1 = void

type R2 = ReturnType<<T>() => T>;
// type R2 = unknown

type R3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type R3 = number[]

type R4 = ReturnType<typeof Rf1>;
// type R4 = {
//   a: number;
//   b: string;
// }

type R5 = ReturnType<any>;
// type R5 = any

type R6 = ReturnType<never>;
// type R6 = never

type R7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.ts

type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  // Type 'Function' provides no match for the signature '(...args: any): any'.
```

### `InstanceType<Type>`

构造由type中的构造函数的实例类型组成的类型

如此看来只是为了声明之后的类跟原有的保持一致？

```ts
class I {
  x = 0;
  y = 0;
}

type I0 = InstanceType<typeof I>;
// type I0 = I;

type I1 = InstanceType<any>;
// type I1 = any

type I2 = InstanceType<never>;
// type I2 = never

type I3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'

type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  // Type 'Function' provides no match for the signature 'new (...args: any): any'
```

### `ThisParameterType<Type>`

提取函数类型的this参数的类型，如果函数类型没有this参数则为未知。

```js
function toHex(this: number) {
  console.log(this)
  return this.toString(16)
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}

console.log(toHex(999)); // [object Window]
// this 为 Window 而且还报错
// Expected 0 arguments, but got 1

console.log(numberToString(12345)) // 3039
//  this 为 Number {12345}
```

### `OmitThisParameter<Type>`

从Type中移除this参数。如果Type没有显式声明此参数，则结果只是Type。否则，将从type创建一个不带此参数的新函数类型。泛型被擦除，只有最后一个重载签名被传播到新函数类型中。

```ts
function toHex(this: Number) {
  return this.toString(16);
}
 
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(99);
 
console.log(fiveToHex()); // 63
```

### `ThisType<Type>`

此实用程序不返回转换后的类型。相反，它作为上下文这类类型的标记。注意，必须启用noImplicitThis标志才能使用这个实用程序。

```ts
type ObjectDescription<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>
}

function makeObject<D, M>(desc: ObjectDescription<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj1 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj1.x = 10;
obj1.y = 20;
obj1.moveBy(5, 5);
```

### 固有的字符串操作类型

#### `Uppercase<StringType>`

将字符串中的每个字符转换为大写

```ts
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
           
// type ShoutyGreeting = "HELLO, WORLD"
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">

// type MainID = "ID-MY_APP"
```

### `Lowercase<StringType>`

将字符串中的每个字符转换为大写

```ts
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"
 
type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID id-my_app
```

#### `Capitalize<StringType>`

将字符串中的第一个字符转换为等效的大写字母。

```ts
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"
```

#### `Uncapitalize<StringType>`

将字符串中的第一个字符转换为等效的小写字符

```ts
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"
```