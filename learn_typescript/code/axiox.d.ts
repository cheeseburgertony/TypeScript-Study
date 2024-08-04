// 类型声明文件
// 里面没有任何的实际实现代码,只有类型声明
// 只有类型 - 比如 interface, function类型或者class类型等等
// 使用declare+变量的名称来声明具体变量的类型
// declare function axios(url: string): string
// 或者函数表达式的写法
// declare const axios: (url: string) => string
// 定义成一个类型,里面有自己的一些方法
interface IAxios {
  get: (url: string) => string,
  post: (url: string, data: any) => string
}
declare const axios: IAxios
