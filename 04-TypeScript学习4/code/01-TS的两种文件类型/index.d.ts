// 类型声明文件

// 类型
type Props1 = { x: number; y: number; c:boolean }

// 错误演示:因为.d.ts文件中,不能出现可执行代码(代码实现)
// // 可执行代码
// function add(num1: number, num2: number) {
//   return num1 + num2
// }

// console.log(add(1, 2))

/**
 * .d.ts文件
 * 1.只包含类型信息的类型声明文件
 * 2.不会生成.js文件,仅仅用于提供类型信息
 * 3.用途:为js提供类型信息
 */