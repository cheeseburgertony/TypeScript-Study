// 数组类型
/*
let numbers: number[] = [1, 2, 3, 4]

let numbers1: Array<number> = [1, 2, 3, 4]

let booleans: boolean[] = [true, false]
*/

// 联合类型
// 添加小括号，表示首先是数组，然后这个数组中可以出现number或者string类型的元素
let arr: (number | string)[] = [1, 2, 3, 'tony', 'cool']

// 不添加小括号，表示arr1既可以是number类型，又可以是string[]
let arr1: number | string[] = ['1', '2']
let arr2: number | string[] = 123