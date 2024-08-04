// 交叉类型(&)：功能类似于接口继承(extends)，用于组合多个类型为一个类型（常用于对象类型）
interface Person {
  name: string
}

interface Contact {
  phone: string
  say(): number
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'tony',
  phone: '1111',
  say() { return 1 },
}