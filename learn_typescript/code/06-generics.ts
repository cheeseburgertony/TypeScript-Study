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


// 泛型约束
// 传入的只能是个数组(因为要使用其中的length属性(缺点:例如string或者object类型也可能会有length属性))
const echoWithArr = <T>(arg: T[]): T[] => {
  console.log(arg.length);
  return arg
}
const arrs = echoWithArr([1, 2, 3, 4])

// 传入的只要有包含length属性就可以(duck typing 鸭子类型(有什么的特征就是什么)) 
// 通过extends关键字来对泛型传入值进行约束(传入值必须满足特定的约束条件),这里是必须包含length属性
interface IWithLenght {
  length: number
}
const echoWithLength = <T extends IWithLenght>(arg: T): T => {
  console.log(arg.length);
  return arg
}
const str = echoWithLength('string')
const obj = echoWithLength({ length: 1, width: 1 })
const arr = echoWithLength([1, 2, 3, 4])
// const number = echoWithLength(1)  类型“number”的参数不能赋给类型“IWithLenght”的参数
