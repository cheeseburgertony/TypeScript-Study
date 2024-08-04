// let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
//   name: 'tony',
//   age: 18,
//   sayHi() { },
//   greet(name) { }
// }


// 如果一行只指定一个属性类型（通过换行来分隔多个属性类型），可以去掉;(分号)
let person: {
  name: string
  age: number
  sayHi(): void
  greet: (name: string) => void
} = {
  name: 'tony',
  age: 18,
  sayHi() { },
  greet(name) { }
}