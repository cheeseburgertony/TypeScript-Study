interface Props {
  id: string,
  titel: string,
  children: number[]
}

// 使用 Pick<Type, Key> 工具类型可以从一个已有的类型Type来选择一组属性Key来创建一个新的类型 并且创建后的的类型的每个属性的类型和原来的类型Type中的属性的类型是一样的
// 第二个变量传入的属性只能是第一个变量中存在的是属性

// 这样通过Pick<Props, 'id' | 'children'>构造出来的类型就只有id和children两个属性
type PcikProps = Pick<Props, 'id' | 'children'>


