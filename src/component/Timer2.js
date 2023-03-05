import React, { useEffect, useState } from "react";

/**
 * this is react component
 * @param {*} props component default probs
 * @returns Component 
 */
export default function Timer2(props) {
    // run when the component is created

    // assigning values to the variable of its superclass ( React.Component )
    const { increment } = props

    // an object to hold the state information of this component
    const [state, setState] = useState({ counter: 0, increment: increment })

    // invoked immediately after a component is mounted
    useEffect(() => {

        const timerID = setInterval(
            () => tick(),
            1000
        );

        // invoked just before a component is dissembled and destroyed
        return () => {
            clearInterval(timerID)
        }
    })

    // main function of this component
    function tick() {
        // set current state

        // normal function expressions
        // this.setState(function (state, props) {
        //     return {
        //         counter: state.counter + props.increment
        //     }
        // });

        // Arrow function expressions is similar
        setState((state) => ({
            counter: state.counter + increment
        }));

    }

    // html content to display when rendering the component
    return (
        // conntent or other elements
        <div>
            <p>Timer {state.counter}</p>
        </div>
    );
}

/**
 * component default probs
 */
Timer2.defaultProps = {
    increment: 1
};