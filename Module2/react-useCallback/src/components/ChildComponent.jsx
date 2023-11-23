import { memo } from "react";

const ChildComponent = memo(({ increment }) => {
  console.log("Child Component Rendering");
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default ChildComponent;
