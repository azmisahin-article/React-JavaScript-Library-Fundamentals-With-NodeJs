import React from 'react';
import CounterButton from './component/CounterButton';
import LikeButton from './component/LikeButton';
import Timer from './component/Timer';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my React app.</p>
      <LikeButton></LikeButton>
      <CounterButton></CounterButton>
      <Timer></Timer>
      <Timer increment={10} ></Timer>
    </div>
  );
}

export default App;