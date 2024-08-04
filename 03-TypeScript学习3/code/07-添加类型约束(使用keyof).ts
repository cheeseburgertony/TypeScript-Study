// 泛型变量可以有多个，并且泛型变量之间可以约束，比如这里就是Key受到了Type的约束
// keyof关键字接收一个对象类型，生成其类型的键名称的联合类型(比如Type的类型是{name: string; age: number}),那么通过keyof Type就会生成一个联合类型 ('name' | 'age')
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

getProp({ name: 'tony', age: 20 }, 'age')
getProp({ name: 'tony', age: 20 }, 'name')

getProp(18, 'toFixed')
getProp('abc', 'split')
getProp('abc', 1)  // 此处的1表示索引  因为string类型中也可以通过索引来获取字符
getProp(['a','b'], 'length')

console.log('object'[1]);  // b


// 错误演示  类型“"name1"”的参数不能赋给类型“"age" | "name"”的参数 对象中没有该键
// getProp({ name: 'tony', age: 20 }, 'name1')