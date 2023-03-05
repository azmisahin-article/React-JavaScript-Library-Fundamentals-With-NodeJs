/**
 * @file reducers
 */

import { createStore } from 'redux'

/**
 * counter reducer
 * @param {JSON} state | { counter: 0 }
 * @param {String} action | 'counter/incremented' | 'counter/decremented'  
 * @returns 
 */
function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { counter: state.counter + 1 }
        case 'counter/decremented':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = {
    // create a counter store
    counterStore: createStore(counterReducer)
}