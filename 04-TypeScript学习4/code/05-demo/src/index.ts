// 为已有JS文件提供类型声明
// 在导入.js文件时,TS会自动加载与.js同名的.d.ts文件,以提供类型声明
import { count, songName, position, add, fomartPoint, Point } from './utils'

type Person = {
  name: string
  age: number
}

let p: Partial<Person> = {
  name: 'tony'
}

console.log('Hello')
console.log(count)
console.log(songName)
console.log(position)
console.log(add(1, 2))
fomartPoint({ x: 1, y: 2 })

let p1: Point = {
  x: 1,
  y: 2
}


