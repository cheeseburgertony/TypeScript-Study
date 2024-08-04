// 函数声明
// 如果参数给了默认值，ts也会认为这个参数是可选参数
// 可选参数后面不能再有必选参数，也就是说可选参数必须放在最后
// 必选参数不能位于可选参数后
// function add(x: number, y: number, z: number = 10) {
//   if (typeof z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }

// let result = add(1, 2, 3)
// let result2 = add(1, 2, 3)

// 函数表达式
const add = (x: number, y: number, z: number = 10) => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 在给函数得参数定义类型时候根据类型推断函数自己也会有一个类型
const add2: (x: number, y: number, z?: number) => number = add

// 类型推断  ts会在没有指定类型的时候根据值来推断出是什么类型
let str = 'string'
// str = 123  不能将类型“number”分配给类型“string”
