type Props = { x: number, y: number }

export { Props }

// 创建自己的类型声明文件 - 1.项目内共享类型
// 项目类型共享:如果多个.ts文件都用到同一个类型,此时可以创建.d.ts文件提供该类型,实现类型共享
// 创建要共享的类型使用export导出,在需要使用到该类型的.ts文件中使用import导入