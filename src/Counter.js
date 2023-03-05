/**
 * @file Counter
 */

// other modules on which the component depends.
import { useState } from 'react';
import CounterButton from './component/CounterButton';
import Timer from './component/Timer';
import Timer2 from './component/Timer2';
import { store } from './reducers';

/**
 * this is react component
 */
function Counter() {

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

    // html content to display when rendering the component
    return (
        <div>
            <CounterButton></CounterButton>
            <Timer></Timer>
            <Timer increment={10} ></Timer>
            <Timer2></Timer2>
            <button onClick={increment}>+</button><button onClick={decrement}>-</button>
            <p>{state.counter}</p>
        </div>
    );
}

// export
// when importing this module, named exports must be referenced by the exact same name
export default Counter;