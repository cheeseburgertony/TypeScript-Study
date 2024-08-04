type IOperator = 'plus' | 'minus'
// type ICaculator = (operator: IOperator, numbers: number[]) => number
// 使用interface既能定义是一个函数,又能为其定义属性和方法
interface ICaculator {
  (operator: IOperator, numbers: number[]): number
  plus: (numbers: number[]) => number
  minus: (numbers: number[]) => number
}

declare const caculator: ICaculator

// 使用ES6export导出语法将其导出变成一个模块
export default caculator
