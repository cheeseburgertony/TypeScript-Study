import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 事件绑定和事件对象
 */

type Props = { name: string; age?: number }

const Hello: FC<Props> = ({ name, age }) => {

  // 如果没有事件对象参数则和普通JS一样
  // const onClick = () =>{ console.log('赞') }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => console.log('赞', e.currentTarget)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)


  return (
    <div>
      您好，我叫:{name},我{age}岁了
      <button onClick={onClick}>点赞</button>
      <input onChange={onChange} />
    </div>
  )
}

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
