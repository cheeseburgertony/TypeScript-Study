"use strict";
let p = {
    name: 'tony',
    age: 20
};
// 除了在tsconfig.json文件中使用编译配置外，还可以通过命令行来使用 例如：tsc hello.ts --target es6
/**
 * 注意：
 * 1.tsc后 带有输入文件 时（比如，tsc hello.ts），将忽略tsconfig.json文件
 * 2.tsc后 不带输入文件 时（比如，tsc），才会启用tsconfig.json
 * 推荐使用：tsconfig.json配置文件
 */ 
