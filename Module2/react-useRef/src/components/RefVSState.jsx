// import { useState, useRef } from "react";

const RefVSState = () => {
  // USING USESTATE
  // const [name, setName] = useState("Mark");
  // const updateName = (e) => {
  //   setName(e.target.value);
  //   console.log(name);
  // };
  // const logName = () => {
  //   console.log(name);
  // };

  // USING USEREF
  // const nameRef = useRef();
  // const logName = () => {
  //   console.log(nameRef.current?.value);
  // };

  return (
    <>
      {/* <label htmlFor="name">Your Name: </label>
    <input type="text" id="name" ref={nameRef} />
    <button onClick={logName}>Log Name</button> */}
    </>
  );
};

export default RefVSState;
