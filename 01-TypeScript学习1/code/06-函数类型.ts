// 1.单独指定参数、返回值类型
// 使用函数声明生成的函数
// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// console.log(add(1, 2))

// 使用表达式生成的函数
// const add = (num1: number, num2: number): number => {
//   return num1 + num2
// }
// console.log(add(2, 3))


// 2.同时指定参数，返回值类型
const add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}