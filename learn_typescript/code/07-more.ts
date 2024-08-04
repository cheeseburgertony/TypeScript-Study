// 类型别名  type alias
// 1.方便将类型抽象出来
type PlusType = (x: number, t: number) => number
const sum = (x: number, y: number): number => {
  return x + y
}
const sum2: PlusType = sum

// 2.用于联合类型(先用type将复杂的类型抽取,再进行联合) 
type NameResolve = () => string
type NameOrNameResolve = string | NameResolve
const getName = (n: string | NameOrNameResolve) => {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}


// 类型断言  type assertion
// 当ts不确定一个联合类型的变量到底是哪个类型时,只能访问此联合类型中所有类型的共用的属性和方法
// 如果需要在还不确定准确类型的时候就访问其中一个类型的属性和方法就可以使用类型断言
// 1.可以使用as关键字,在变量后使用as关键字,as后为要使用的类型的interface
// 2.可以在使用的变量前加入<>在<>内写入指定的类型
// 注意：类型断言不是类型转换,断言成联合类型中不存在的类型会报错
const getLength = (input: string | number): number => {
  // 使用类型断言获取准确的类型
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as number
  //   return number.toString().length
  // }

  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return (<number>input.toString().length)
  }
}



