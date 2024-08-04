// let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
//   name: 'tony',
//   age: 18,
//   sayHi() { },
//   greet(name) { }
// }

// let person1: { name: string; age: number; sayHi(): void; greet(name: string): void }

// 接口
interface IPerson {
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

let person1: IPerson = {
  name: 'tom',
  age: 20,
  sayHi() { },
  greet(name) { }
}