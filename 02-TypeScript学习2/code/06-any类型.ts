let obj: any = { x: 0 }

// 访问不存在的属性或者赋值 都不报错
obj.aaa
obj.aaa = 123

// 当作函数调用 不报错
obj()

// 赋值给其他类型的变量 不报错
let n: number = obj


// 声明变量但不赋值 隐式为any
// let a
// a = 1
// a = ''
// a()

// 函数参数不加类型 隐式any类型
// function add(num1, num2) { }
// add(1, 2)
// add(1, '')
// add(1, false)