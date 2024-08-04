// 使用泛型来创建一个函数
// 泛型：在保证类型安全的前提下能实现多种不同类型共同工作
// 创建时在将括号<>内添加类型变量，比如此处的Type （创建时用Type占个坑，等到调用时传入的什么类型再确定）
// 调用时指定尖括号中的类型变量，比如下面的number
function id<Type>(value: Type): Type {
  return value
}

// 调用泛型函数
// 1.以number类型调用泛型函数
const num = id<number>(1)

// 2.以string类型调用泛型函数
const str = id<string>('id')

const bool = id<boolean>(false)