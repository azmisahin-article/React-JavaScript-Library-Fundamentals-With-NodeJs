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
        this.state = { time: 0 };
    }

    // render is run once
    render() {
        // html content to display when rendering the component
        return (

            // conntent or other elements
            <div>
                <p>Time {this.state.time} seconds</p>
            </div>
        );
    }
}