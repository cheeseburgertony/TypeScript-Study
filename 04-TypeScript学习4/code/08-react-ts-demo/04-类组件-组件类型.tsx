// import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * class组件：
 * 组件的类型
 */

type State = { count: number }
type Props = { message?: string }

// 无props无state
class C1 extends React.Component { }
// 有props无state
class C2 extends React.Component<Props> { }
// 无props有state
class C3 extends React.Component<{}, State> { }
// 有props有state
class C4 extends React.Component<Props, State> { }


const App = () => (
  <div>
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
