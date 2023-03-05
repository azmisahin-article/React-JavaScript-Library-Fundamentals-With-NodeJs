/**
 * @file app
 */

import React, { useState } from 'react';
import CounterButton from './component/CounterButton';
import LikeButton from './component/LikeButton';
import Timer from './component/Timer';
import Timer2 from './component/Timer2';
import { store } from './reducers';

function App() {

  // an object to hold the state information of this component
  const [state, setState] = useState({ counter: 0, increment: increment })

  // Can still subscribe to the store
  store
    .counterStore
    .subscribe(() => {
      // Arrow function expressions is similar
      setState(() => (
        store
          .counterStore
          .getState()
      ));

    })

  // create actions
  const incrementAction = { type: 'counter/incremented' };
  const decrementAction = { type: 'counter/decremented' };


  // counter store increment
  function increment() {
    // change state
    store.counterStore.dispatch(incrementAction)
  }

  // counter store decrement
  function decrement() {
    // change state
    store.counterStore.dispatch(decrementAction)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my React app.</p>
      <LikeButton></LikeButton>
      <CounterButton></CounterButton>
      <Timer></Timer>
      <Timer increment={10} ></Timer>
      <Timer2></Timer2>
      <button onClick={increment}>+</button><button onClick={decrement}>-</button>
      <p>{state.counter}</p>
    </div>
  );
}

export default App;