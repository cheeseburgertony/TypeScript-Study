// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// 成员设置初始值

// 枚举成员是有值的，默认为：从0开始自增的数值
// 枚举成员的值为数字的枚举称为数字枚举
// 可以为枚举中的成员初始化值

// enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right
// }

enum Direction {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16
}

function changeDirection(direction: Direction) { }

changeDirection(Direction.Up)