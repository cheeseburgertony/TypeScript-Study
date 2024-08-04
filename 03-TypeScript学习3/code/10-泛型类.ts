// class GenericNumber<NumType> {
//   defaultValue: NumType
//   add: (x: NumType, y: NumType) => NumType
// }

// 这种情况下推荐明确指定<类型>
// const obj = new GenericNumber<number>()
// obj.defaultValue = 10

// ----------------------------
class GenericNumber<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType

  constructor(value: NumType){
    this.defaultValue = value
  }
}

// 这里可以不用加类型，ts更具有参构造自动进行类型推断
// 此时，可以省略<类型>不写
const obj = new GenericNumber(100)
obj.defaultValue = 10