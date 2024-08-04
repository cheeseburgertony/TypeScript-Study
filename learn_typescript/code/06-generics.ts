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


// 在类中使用泛型
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.shift()
  }
}
// 在实例化创建对象的时候传入类型进行类型定义 这样可以保证不会将不符合条件的类型的数据传入
const queue = new Queue<number>()
queue.push(123)
// queue.push('string')
console.log(queue.pop()?.toFixed());

const queue2 = new Queue<string>()
queue2.push('string')
// 并且在使用相对应的类型时还有对应的提示
console.log(queue2.pop()?.length);

// 在接口中使用泛型(让接口interface更加灵活)
interface KeyPair<T, U> {
  key: T;
  value: U
}
// 这样使得interface更加灵活,里面的数据类型不是一开始就写死的,可以更加自己的需求闯入对应的数据类型
let kp1: KeyPair<string, number> = { key: 'sting', value: 1 }
let kp2: KeyPair<number, string> = { key: 1, value: 'string' }

// 类似的像Array这个ts原始定义好的接口,只要我们在泛型中传递指定的类型即可,就可以使用同种类型的数据
let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<number> = [1, 2, 3, 4]

// interface还能描述一个函数的类型 这里配合泛型一起使用,更加灵活
interface IPlus<T> {
  (a: T, b: T): T
}
const plus = (a: number, b: number) => {
  return a + b
}
const conect = (a: string, b: string) => {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = conect
