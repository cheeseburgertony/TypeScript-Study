// import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * class组件：
 * 
 * class组件状态(state)和事件
 */

type State = { count: number }

class Counter extends React.Component<{}, State> {
  state: State = {
    count: 1
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        计数器: {this.state.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}



const App = () => (
  <div>
    <Counter></Counter>
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
