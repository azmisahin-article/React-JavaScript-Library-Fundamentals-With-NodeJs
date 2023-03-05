import React, { Component } from "react";

/**
 * this is react component
 */
export default class Timer extends Component {
    // run when the component is created
    constructor(props) {
        // assigning values to the variable of its superclass ( React.Component )
        super(props);
        // an object to hold the state information of this component
        this.state = { counter: 0, increment: props.increment };
        console.log(this.state)
    }

    // invoked immediately after a component is mounted
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // invoked just before a component is dissembled and destroyed
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // main function of this component
    tick() {
        // set current state

        // normal function expressions
        // this.setState(function (state, props) {
        //     return {
        //         counter: state.counter + props.increment
        //     }
        // });

        // Arrow function expressions is similar
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));

    }

    // render is run once
    render() {
        // html content to display when rendering the component
        return (
            // conntent or other elements
            <div>
                <p>Timer {this.state.counter}</p>
            </div>
        );
    }
}

/**
 * component default probs
 */
Timer.defaultProps = {
    increment: 1
};