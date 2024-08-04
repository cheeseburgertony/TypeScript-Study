// 当你比ts更加明确一个值的类型的时候，可以使用类型断言来指定更具体的类型
// 通过as关键字实现类型断言
// as后面的类型是一个更加具体的类型 (HTMLAnchorElement是HTMLElement的子属性)
// 通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性和方法
const aLink = document.querySelector('#link') as HTMLAnchorElement

// 另外一种写法，但是会和jsx语法起冲突，所以不推荐使用
// const aLink = <HTMLAnchorElement>document.querySelector('#link')

aLink.href

// 一般选中某个元素后进行该元素会被命名为 $0 
// 在浏览器控制台中，通过console.dir()打印DOM元素，在属性列表的最后，可以看到该元素的类型