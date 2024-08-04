// 类型
type Props = { x: number; y: number; c: boolean }

// 可执行代码
function add(num1: number, num2: number) {
  return num1 + num2
}

console.log(add(1, 2))

/**
 * .ts文件
 * 1.既包含类型信息又包含可执行代码
 * 2.可以被编译成.js文件,任何执行代码
 * 3.用途:编写程序代码的地方
 */

// .ts是implementation(代码实现文件); .d.t是declaration(类型声明文件)