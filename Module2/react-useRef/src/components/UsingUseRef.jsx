import { useState, useRef } from "react";

const UsingUseRef = () => {
  const [name, setName] = useState();
  const textInput = useRef();

  const printValue = () => {
    const inputValue = textInput.current?.value;
    if (inputValue) {
      setName(inputValue);
    }
    console.log("Printed Name: ", inputValue);
  };

  return (
    <div>
      <h3>Hello, my name is {name}</h3>
      <input type="text" placeholder="name" ref={textInput} />
      <button onClick={printValue}>Update</button>
    </div>
  );
};

export default UsingUseRef;
