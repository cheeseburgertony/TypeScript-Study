/**
 * interface 
 * 1.对对象的形状进行约束
 * 2.对类进行抽象
 * 3.Duck Typing(鸭子类型)
 **/ 
interface Person {
  // 在属性名称前加上readonly表示该属性是只读的，只有在一开始创建时允许进行赋值
  readonly id: number;
  name: string;
  // 在属性名称后面加上?表示该字段是可选属性
  age?: number
}

let tony: Person = {
  id:100,
  name: 'tony',
  age: 18
}
// 无法为“id”赋值，因为它是只读属性
// tony.id = 11