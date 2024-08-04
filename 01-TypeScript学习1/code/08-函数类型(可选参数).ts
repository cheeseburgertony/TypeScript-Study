// 可选参数只能出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数
// 可选参数只能位于必选参数后
function mySlice(start?: number, end?: number): void {
  console.log('起始索引：', start, '结束索引：', end)
}

mySlice()
mySlice(1)
mySlice(1, 2)