import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(count),[]
    })
    
return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
)
}


export default Counter;