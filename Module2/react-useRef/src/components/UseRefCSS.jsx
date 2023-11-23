import { useRef } from "react";

const UseRefCSS = () => {
  const colorRef = useRef();
  const chgColor = () => {
    colorRef.current.className === "box"
      ? (colorRef.current.className = "box-modify")
      : (colorRef.current.className = "box");
    console.log(colorRef.current.className);
  };
  return (
    <>
      <div className="box" ref={colorRef}>
        Update my Color!
      </div>
      <button onClick={chgColor}>Switch Color</button>
    </>
  );
};

export default UseRefCSS;
