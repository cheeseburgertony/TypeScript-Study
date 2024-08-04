// 枚举 可以用来声明一定范围内的一系列常量(例如一周七天,方位,三原色等等)
// 使用常量枚举可以提升性能((比如下面调用Direction.Up他会直接把这值翻译成一个结果也就是'Up')它会内联枚举的任何用法,并且不会把这些枚举编译成任何js代码)
// 只有枚举的值是常量值才可以使用常量枚举(另一种值是计算值)
const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// 默认枚举项会从0开始递增,如果给他一个number类型的初始值就会从该初始值进行递增
// console.log(Direction.Up);
// console.log(Direction[0]);

// 也可以对每一项枚举项添加变成字符串变成字符串枚举
const value = 'Up'
if (value === Direction.Up) {
  console.log('go to');
}