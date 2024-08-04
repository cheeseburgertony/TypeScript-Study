// build-in-types 原生内置类型
// 使用接口interface或者类class多次定义会合并在一起
// global object  全局对象
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getDate()
const reg = /abc/
reg.test('abc')

// build-in-object 原生内置对象
Math.pow(2, 2)


// DOM/BOM
const body = document.body
const allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
  e.preventDefault()
})

// Utility Types  工具类
interface IPerson {
  name: string
  age: number
}
let tony: IPerson = { name: 'tony', age: 20 }

// Partial 将原本类型所有的类型变为可选类型
type IPartial = Partial<IPerson>
let obj: IPartial = { name: 'tony' }

// Omit 忽略传入类型的某个属性  Omit<传入的类型, 要忽略的属性>
type IOmit = Omit<IPerson, 'name'>
let obj2: IOmit = { age: 18 }

