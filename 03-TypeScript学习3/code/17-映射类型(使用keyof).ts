type Props = { a: number; b: string; c: boolean }

// 先使用keyof获取Props中的所有属性(键)的联合类型 'a' | 'b' | 'c'
// 接着使用Key in ... 表示Key可以是Props中的所有的键的名称中('a' | 'b' | 'c')的任意一个 将所有的键都指定为number类型
type Type3 = { [Key in keyof Props]: number }