interface ILength { length: number }

// 此处的extends不是继承的意思，而是说要有ILength类型的约束，就是说传进来的Type中要包含ILength指定的属性(例如可以是数组，字符串这些带有length属性的类型)
// 通过extends使用接口，为泛型（类型变量）添加约束
function id<Type extends ILength>(value: Type): Type {
  value.length
  return value
}

id('123')
id([1, 2, 3])
id({ length: 10 })

// 错误演示 类型“number”的参数不能赋给类型“ILength”的参数。
// id(123)