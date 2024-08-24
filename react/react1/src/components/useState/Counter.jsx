import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // increment handler
    const incrementHandler = () => {
        console.log(count);
        return setCount(count + 1);
    };
    // decrement handler
    const decrementhandler = () => {
        console.log(count);
        return setCount(count - 1);
    };
    return (
        <div>
            <h1>Counter</h1>
            <hr />
            <h2>Counter: {count}</h2>
            <button onClick={incrementHandler}>Increase</button>
            <button onClick={decrementhandler}>Decrement</button>
        </div>
    );
};

export default Counter;
