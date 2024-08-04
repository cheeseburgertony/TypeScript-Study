// 像'up' 18 ...这样的可以叫字面量 在ts中字面量可以当作类型使用
// 字面量类型一般配合联合类型使用，用来表示一组明确的可选值列表
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') { }

changeDirection('up')