console.log(typeof 'Hello Ts')

let p = { x: 1, y: 2 }


// 类型上下文：就是在类型注解的区域，也就是:冒号后面的区域
// ts中typeof在普通情况下可以获取变量的类型，在类型上下文中已用变量或者属性的类型 （更加详细的类型）
// 这里的typeof p 表示根据已有变量的值，获取该值的类型，来简化书写
function formatPoint(point: typeof p) { }
// 和下面的函数是等同的
// function formatPoint(point: { x: number, y: number }) { }

formatPoint({ x: 1, y: 100 })

let num: typeof p.x

function add(num1: number, num2: number) {
  return num1 + num2
}

// typeof只能查询变量或者属性的类型，无法查询其他形式的类型（比如，函数调用的类型）
// let res: typeof add(1, 2)