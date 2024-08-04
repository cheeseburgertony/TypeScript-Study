// axios('url')
// axios.get('url')
// axios.post('url', { name: 'tony' })

import axios from 'axios'
// 安装时自带类型声明文件
// axios.get

// 安装时不自带类型声明文件,需要根据提示再安装第三方类型声明文件
import jquery from 'jquery'
// jquery.get


// 给caculator写类型声明文件
// import caculator from './caculator'
// 将caculator复制到node_modules/@types/caculator/index.d.ts下让其变成一个第三方模块
import caculator from 'caculator'
caculator('minus', [1, 2, 3])
caculator.plus([1, 2])
