interface Props {
  id: string,
  children: number[]
}

// 使用 Partial<Type> 工具类型可以通过一个已有的类型创建一个新的类型，这个类型的所有属性都是 可选 的
type PartialProps = Partial<Props>

let p1: Props = {
  id: '',
  children: [1, 2]
}

// 转换后这个类型的属性都是可选的
let p2: PartialProps = {
  id: '',
  children: []
}