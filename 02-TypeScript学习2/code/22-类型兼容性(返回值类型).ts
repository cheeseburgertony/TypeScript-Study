// 3.返回值类型，只需要关注返回值本身即可
// 返回值是原始数组类型的，只要类型相同就兼容
// 返回值是对象类型的，遵循对象兼容的原则，对象成员多的可以赋值给成员少的

// 原始类型
type F5 = () => string
type F6 = () => string

let f5: F5 = () => { return '' }
let f6: F6 = () => { return '' }

f5 = f6
f6 = f5

// 对象类型
type F7 = () => { name: string }
type F8 = () => { name: string, age: number }

let f7: F7 = () => { return { name: 'tony' } }
let f8: F8 = () => { return { name: 'tony', age: 20 } }

// 对象成员多的可以赋值给成员少的
f7 = f8

// 错误演示
// f8 = f7