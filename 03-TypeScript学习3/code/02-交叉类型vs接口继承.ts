// interface A{
//   fn: (value: string) => string
// }

// // 使用接口继承，如果存在同名属性，且类型不同，会报错
// interface B extends A{
//   fn: (value: number) => string
// }

interface A {
  fn: (value: string) => string
}

interface B {
  fn: (value: number) => string
}

// 使用交叉类型，如果存在同名属性且类型不同，会将其类型全部集合起来
// 例如下面的C就相当于 fn: (value: string | number) => string
// 交叉类型和接口继承的区别：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同
type C = A & B

let c: C = {
  fn(value: string | number) {
    return ''
  }
}
c.fn(1)
c.fn('1')