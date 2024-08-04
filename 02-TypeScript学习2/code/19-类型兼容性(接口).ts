interface Point {
  x: number
  y: number
}

interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

let p1: Point = { x: 1, y: 2 }
let p2: Point2D = { x: 1, y: 2 }
let p3: Point3D = { x: 1, y: 2, z: 3 }

// 正确演示 成员多的可以赋值给少的
// p1 = p2
// p2 = p1
// p1 = p3

// 错误演示  成员变量少的不能赋值给多的
// p3 = p1


// class与interface之间也可以相互兼容 同样要遵循 成员多的可以赋值给成员少的
class Point4D {
  x: number
  y: number
  z: number
}

let p4: Point2D = new Point4D()