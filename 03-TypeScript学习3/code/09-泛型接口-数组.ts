const strs = ['a', 'b', 'c', 'd']

strs.forEach(item => { })

// 当我们在使用数组时，TS会根据数组的不同类型，来自动将类型变量数值为相应的类型
const nums = [1, 2, 3, 4]
nums.forEach(item => { })