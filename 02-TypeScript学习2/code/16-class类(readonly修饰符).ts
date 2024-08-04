// class Person {
//   // readonly修饰符表示只读，用来防止在构造函数之外对属性进行赋值
//   readonly age: number = 18

//   constructor(age: number) {
//     this.age = age
//   }

//   // readonly只能修饰属性不能修饰方法
//   // readonly setAge() {
//   //   // this.age = 20
//   // }
// }


class Person {
  // 如果没有加类型会直接使用字面量类型 例如这里直接 readonly age = 18 age的类型就是18，然后在 constructor中无法继续修改
  // 所以不论有无默认值都应该加上类型
  // 只要是readonly来修饰的属性，必须手动提供明确的类型
  readonly age: number = 18

  constructor(age: number) {
    this.age = age
  }
}

// --------------------------、
// readonly也可以用在接口中或者{}表示的对象的类型
// interface IPerosn{
//   readonly name: string
// }

// let obj: IPerosn ={
//   name: 'tony'
// }

let obj: { readonly name: string } ={
  name: 'tony'
}

// obj.name = ''   // 无法为“name”赋值，因为它是只读属性