type Props = { a: number; b: string; c: boolean }

type PartialProps = Partial<Props>

// keyof T就是从传入的类型中获取类型的键的联合类型
// 在[]后添加?表示可选
// T[P] 表示获取T中每个键对应的类型
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }; 