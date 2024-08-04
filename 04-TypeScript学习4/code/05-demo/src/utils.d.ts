// 为util.js文件提供类型声明

// declare关键字:用于类型声明,为其他地方(比如,.js文件)已存在的变量声明类型,而不是创建一个新变量
// 1.对于type,interface等这些明确就是TS类型的(只能在TS中使用的),可以省略declare关键字
// 2.对于let.function等具有双重含义(在JS,TS中都能用),应该使用declare关键字,明确指定此处用于类型声明
declare let count: number
declare let songName: string
interface Point {
  x: number
  y: number
}

declare let position: Point

declare function add(x: number, y: number): number

declare function changeDirection(direction: 'up' | 'down' | 'left' | 'right'): void

type FomartPoint = (point: Point) => void

declare const fomartPoint: FomartPoint

// 注意:类型提供好以后,需要使用模块化方案中提供的模块化语法,来导出声明好的类型.然后,才能在其他的.ts文件中使用
// 不仅仅是js中的变量的类型可以导出,在.d.ts自己的类型也可以导出给其他.ts使用
export { count, songName, position, add, changeDirection, fomartPoint, Point }