type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number }

// 映射类型：基于旧类型创建新类型(对象类型)，减少重复，提升开发效率
// 映射类型  Key in PropKeys表示Key可以是PropsKey联合类型中的任意一个  这样创建的类型和Type1创建的类型是等价的
type Type2 = { [Key in PropKeys]: number }


// 映射类型只能在类型别名中使用，不能在接口中使用
// interface Type3 { [Key in PropKeys]: number }