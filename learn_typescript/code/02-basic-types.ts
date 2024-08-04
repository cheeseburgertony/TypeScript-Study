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



