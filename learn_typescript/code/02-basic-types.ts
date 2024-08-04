let isDone: boolean = false

let age: number = 18

let firstName: string = 'tony'
let message: string = `Hello I'm${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

// 不能将类型“undefined”分配给其他类型
// let num: number = undefined

// 不能将类型“null”分配给其他类型
// let num: number = null

// any类型(在明确类型的情况下不推荐使用)
let notSure: any
notSure = 2
notSure = 'string'
notSure = true
notSure.name
notSure.getName()

// 联合类型  可以是多种类型(由自己规定可以是那些类型)
let numberOrString: number | string
numberOrString = 123
numberOrString = 'string'
// numberOrString = true  只能是number或则string类型


// 数组类型  
// 数组类型(且里面每一个元素都是number类型)
const arrOfNumber: number[] = [1, 2, 3, 4]
arrOfNumber.push(1)
// 类数组(拥有数组一定的属性)
function test() {
  // 这个arguments就是类数组，它拥有一定的属性，但他并不是真正的数组
  console.log(arguments);
  arguments.length
  arguments[0]
}

// 元组
// 元组是另一种类型的数组，他确切知道包含多少个元素，以及特定索引对应的类型（以及每个元素所对应的类型）
let user: [string, number] = ['tony', 18]
