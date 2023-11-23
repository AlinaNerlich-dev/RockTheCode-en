import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect called. Count is: ", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Count;
