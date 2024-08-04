interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

// 使用泛型接口时，需要显示指定具体的类型
let obj: IdFunc<number> = {
  // id(value) {
  //   return value
  // },
  id: (value) => value,
  ids() {
    return [1, 2, 3]
  },
}