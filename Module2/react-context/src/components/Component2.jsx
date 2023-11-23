import Component3 from "./Component3";
import React from "react";

const Component2 = () => {
  return (
    <div>
      <h2>C2 does not access State</h2>
      <Component3 />
    </div>
  );
};

export default Component2;
