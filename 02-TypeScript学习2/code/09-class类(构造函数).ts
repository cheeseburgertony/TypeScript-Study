class Person {
  age: number
  gender: string
  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }
}
// 不能手动指定构造函数的返回值
const p = new Person(18, '男')
console.log(p.age, p.gender)
