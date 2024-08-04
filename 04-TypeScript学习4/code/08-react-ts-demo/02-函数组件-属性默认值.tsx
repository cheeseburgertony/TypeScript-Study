// import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 函数组件：
 * 
 * 组件的类型
 * 组件的属性（props），包含可选属性
 */

type Props = { name: string; age?: number }

// const Hello: FC<Props> = ({ name, age }) => (
//   <div>
//     您好，我叫:{name},我{age}岁了
//   </div>
// )
// // 设置参数默认值
// Hello.defaultProps = {
//   age: 18
// }

// 说明：完全利用JS(TS)自身的能力来编写组件  设置默认值简化写法
const Hello = ({ name, age = 18 }: Props) => (
  <div>
    您好，我叫:{name},我{age}岁了
  </div>
)

const App = () => (
  <div>
    <Hello name='tony' ></Hello>
  </div>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
