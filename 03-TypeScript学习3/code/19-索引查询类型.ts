type Props = { a: number, b: string, c: boolean }

// 索引查询类型:用来查询属性的类型
// Props['a']表示查询类型Props中的a属性的对应的类型  所以这里TypeA的类型为number
type TypeA = Props['a']

// 模拟Partial类型
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type PartialProps = MyPartial<Props>