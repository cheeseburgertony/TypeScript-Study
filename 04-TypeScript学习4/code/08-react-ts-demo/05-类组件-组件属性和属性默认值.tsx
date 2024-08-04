// import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * class组件：
 * 
 * class组件属性和属性默认值
 */

type Props = { name: string; age?: number }

// class Hello extends React.Component<Props> {
//   // 提供属性默认值
//   static defaultProps: Partial<Props> = {
//     age: 18
//   }

//   render() {
//     const { name, age } = this.props
//     return (
//       <div > 您好，我叫: {name}, 我{age}岁了</div>
//     )
//   }
// }

class Hello extends React.Component<Props> {
  // 提供属性默认值 简化写法
  render() {
    const { name, age = 18 } = this.props
    return (
      <div > 您好，我叫: {name}, 我{age}岁了</div>
    )
  }
}



const App = () => (
  <div>
    <Hello name='tony'></Hello>
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
