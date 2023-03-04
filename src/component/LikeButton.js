import React from "react";

// this is react element
const e = React.createElement;

/**
 * this is react component
 */
export default class LikeButton extends React.Component {
    // run when the component is created
    constructor(props) {
        // assigning values to the variable of its superclass ( React.Component )
        super(props);
        // an object to hold the state information of this component
        this.state = { liked: false };
    }

    // render is run once
    render() {
        // javascript expression to check if conditions are true 
        if (this.state.liked) {
            return 'You liked this.';
        }

        // html content to display when rendering the component
        return e(
            // type | we create a button element
            'button',
            // props | run when the component is created like constractor
            { onClick: () => this.setState({ liked: true }) },
            // conntent or other elements
            'Like'
        );
    }
}