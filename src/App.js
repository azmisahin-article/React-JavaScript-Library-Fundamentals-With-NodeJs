import React from 'react';
import CounterButton from './component/CounterButton';
import LikeButton from './component/LikeButton';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my React app.</p>
      <LikeButton></LikeButton>
      <CounterButton></CounterButton>
    </div>
  );
}

export default App;