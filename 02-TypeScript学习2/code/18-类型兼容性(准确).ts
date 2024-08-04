// 演示类型兼容性

// 两个类的兼容性演示
class Point {
  x: number
  y: number
}
class Point2D {
  x: number
  y: number
}

// 成员一样多的可以进行赋值
const p: Point = new Point2D()

// 类型兼容性准确说法：对于对象类型来说y的成员至少与x相同，则x兼容y (可以理解为：成员多的可以赋值给少的)
class Point3D {
  x: number
  y: number
  z: number
}

const p1: Point = new Point3D()

// 错误写法："Point" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。 成员少的不能给成员多的赋值
// const p2: Point3D = new Point()