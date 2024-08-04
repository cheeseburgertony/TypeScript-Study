// 声明变量时并立即初始化，此时可以省略类型注解
let age = 18
// age = ''

// 注意：如果声明变量但没有立即初始化值，此时还需要手动添加类型注解，否则会失去类型保护机制
let a: number
a = 19
// a = ''

// 决定函数返回值时可以省略类型注解
function add(num1: number, num2: number) {
  return num1 + num2
}

add(1, 2)
// add(false, 2)

// 可以将鼠标放在变量名称上查看变量类型
console.log('hello');
