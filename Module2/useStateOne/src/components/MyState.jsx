import { useState } from "react";

const MyState = () => {
  const [name, setName] = useState("Stranger");

  return (
    <>
      <h1>Hello, {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </>
  );
};

export default MyState;
