import { useState } from "react";
import Message from "./Message";

const EffectOnUnmount = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <Message />}
      <button
        onClick={() => {
          setVisible(!visible);
          //   console.log(visible);
        }}
      >
        Toggle Visibility
      </button>
    </>
  );
};

export default EffectOnUnmount;
