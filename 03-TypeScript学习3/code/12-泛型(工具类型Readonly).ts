interface Props {
  id: string,
  children: number[]
}

// 使用 Readonly<Type> 工具类型可以通过一个已有的类型创建一个新的类型，这个类型的所有属性都是 只读 的
type ReadonlyProps = Readonly<Props>

let p1: ReadonlyProps = {
  id: '111',
  children: [1, 2]
}

// 无法为“id”赋值，因为它是只读属性 
// p1.id = '11'
