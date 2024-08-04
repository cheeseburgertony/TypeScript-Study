// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// 字符串枚举：枚举成员的值是字符串
// 字符串枚举没有自增长行为，因此字符串枚举的每个成员必须有初始值

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

function changeDirection(direction: Direction) { }

changeDirection(Direction.Up)