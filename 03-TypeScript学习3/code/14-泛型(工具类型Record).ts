type RecordObj = Record<'a' | 'b' | 'c', string[]>
// Record工具类型有两个类型变量：第一个变量表示类型(对象)有哪些属性。第二个变量表示这些属性的类型。
// 这里就相当于说创建一个新的类型，这个类型的属性有a,b,c，并且他们的类型都为字符串数组

// 相当于
// type RecordObj = {
//   a: string[]
//   b: string[]
//   c: string[]
// }

let obj: RecordObj = {
  a: ['1'],
  b: ['2'],
  c: ['3']
}