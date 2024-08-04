interface AnyObject {
  [key: string]: number
}

// 当无法确定对象中有哪些属性时（或者说对象中可以出现任意多个属性），就可以使用索引签名类型
// [key: string]用来约束该接口中允许出现的属性名称。这里表示只要是字符串类型的属性名称，就可以出现在对象中 key只是一个占位符，实际上可以是任何合法名称
let obj: AnyObject = {
  a: 1,
  abc: 123
}

// ------------
// const arr = [1,2,3]
// arr.forEach()

// JS中数组是一种特殊的对象，特殊在数组的键(索引)是数值类型的
// 并且数组也可能出现任意多个元素，所以在数组对于的泛型接口中，也用到了索引类型签名
interface MyArray<Type>{
  [index: number]: Type
}

const arr: MyArray<number> = [1,2,3]
arr[0]