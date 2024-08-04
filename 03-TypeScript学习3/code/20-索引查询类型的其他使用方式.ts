type Props = { x: number; y: string; z: boolean }

// 其他使用方式 查询多个属性类型
type TypeA = Props['x' | 'y']

// 查询所有属性类型 直接用keyof获取类型中所有的属性[键]
type TypeB = Props[keyof Props]