// 使用泛型来创建一个函数

function id<Type>(value: Type): Type {
  return value
}

// 调用泛型函数
// 1.以number类型调用泛型函数
const num = id<number>(1)

// 2.以string类型调用泛型函数
const str = id<string>('id')

const bool = id<boolean>(false)

// 泛型简化使用方式 在调用的时候可以不用传入尖括号中的类型 ts会使用类型推断机制进行推断
let num1 = id(100)
let str1 = id('100')