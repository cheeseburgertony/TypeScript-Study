interface Point2D { x: number, y: number }
// interface Point3D { x: number, y: number, z: number }

interface Point3D extends Point2D { z: number }

let person: Point3D = {
  x: 1,
  y: 0,
  z: 1
}
