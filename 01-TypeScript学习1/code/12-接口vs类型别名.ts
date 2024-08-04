// 接口
// interface IPerson {
//   name: string
//   age: number
//   sayHi(): void
//   greet(name: string): void
// }

// 类型别名 需要使用 = 等号
// 因为类型别名相当于是一个变量，将对象结构的类型赋值给一个变量，所以需要等号

// 接口：只能为对象指定类型
// 类型别名：不仅可以为对象指定类型，实现上可以为任意类型指定别名
type IPerson = {
  name: string
  age: number
  sayHi(): void
  greet(name: string): void
}


let person: IPerson = {
  name: 'tony',
  age: 18,
  sayHi() { },
  greet(name) { }
}