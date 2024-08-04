// 泛型 generics 
// 是指再定义函数接口或类的时候我们不预先指定具体类型而是再使用的时候再指定类型
// 它就像一个占位符或者变量,在使用的时候可以把定义好的类型像参数一样传入,之前占位的就都会变成传入的类型,从而来实现类型的指定
// function echo<T>(arg: T): T {
//   return arg
// }
// 函数表达式写法
const echo = <T>(arg: T): T => {
  return arg
}

// const string: string = '123'
// 也可以不指定类型,根据类型推论来推断类型
const result = echo(true)

// 泛型也可以传入多个值
// 这里举一个交换函数为例子
const swap = <T, U>(tuple: [T, U]): [U, T] => {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])
