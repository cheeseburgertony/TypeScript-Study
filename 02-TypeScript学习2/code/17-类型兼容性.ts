// 演示类型兼容性

// let arr = ['a', 'b', 'c']


// // 无论传几个参都不会报错,原本里面是有三个参数
// // Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// arr.forEach(item => { })
// arr.forEach((item, index) => { })
// arr.forEach((item, index, array) => { })

// 两个类的兼容性演示
class Point {
  x: number
  y: number
}
class Point2D {
  x: number
  y: number
}

// TS采用的是结构化类型系统，鸭子类型，类型检查关注的是所具有的形状
// 也就是说在结构类型系统中，如果两个对象具有相同的形状，则认为他们属于同一类型  而在标明类型系统中则必须是属于同一个类才认为他们属于同一类型
const p: Point = new Point2D()
