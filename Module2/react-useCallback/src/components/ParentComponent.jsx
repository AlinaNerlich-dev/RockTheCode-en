import ChildComponent from "./ChildComponent";
import { useState, useCallback } from "react";

const ParentComponent = () => {
  console.log("Parent Component Rendering");
  const [count, setCount] = useState(0);

  // useCallback Syntax:
  // useCallback(()=>{}, [])

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={handleClick} />
    </div>
  );
};

export default ParentComponent;
