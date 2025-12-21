import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count !== 0 && count % 3 === 0) {
            alert(`Count is a multiple of 3: ${count}`);
        }   

    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
export default Counter;