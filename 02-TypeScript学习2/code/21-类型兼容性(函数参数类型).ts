// 2.参数类型：相同位置的参数要相同(原始类型)或兼容(对象类型)

// 原始类型
// type F1 = (a: number) => void
// type F2 = (a: number) => void

// let f1: F1 = (a) => { }
// let f2: F2 = (a) => { }

// f1 = f2
// f2 = f1

// ---------

// 对象类型
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}

type F2 = (p: Point2D) => void  // 相当于有2个参数
type F3 = (p: Point3D) => void  // 相当于有3个参数
// 技巧：把对象拆开，把每个属性看做一个个参数，则参数少的可以赋值给参数多的 (这里不用对象兼容性那一套来判断)

let f2: F2 = (a) => { }
let f3: F3 = (a) => { }

f3 = f2

// 错误演示 不能将类型“(p: Point3D) => void”分配给类型“(p: Point2D) => void”。 参数“p”和“p” 的类型不兼容。类型 "Point2D" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。
// f2 = f3