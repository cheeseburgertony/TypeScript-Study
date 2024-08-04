// 1.参数个数：参数少的可以赋值给参数多的
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

// 在JS中省略用不到的函数参数实际上是很常见的，这样的方式，促成了TS中函数类型之中的兼容性
let f1: F1 = (a) => { }
let f2: F2 = (a, b) => { }

f2 = f1

// 错误的演示
// f1 = f2