import React, { useState } from "react";

/**
 * this is react component
 */
export default function CounterButton() {
    // run when the component is created

    // we used state and default value = 0
    const [count, setCount] = useState(0)

    // an increment function
    function increment() {
        setCount(count + 1);
    }

    // html content to display when rendering the component
    return (
        // conntent or other elements
        <div>
            <p>Count {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}