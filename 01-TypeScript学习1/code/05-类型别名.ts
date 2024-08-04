/* let arr: (number | string)[] = [1, 2, 3, 'tony', 'cool']
let arr1: (number | string)[] = [1, 2, 3, 'tony', 'cool'] */

// 类型别名
type CustomArray = (number | string)[]
let arr: CustomArray = [1, 2, 3, 'tony', 'cool']
let arr1: CustomArray = [1, 2, 3, 'tony', 'cool']