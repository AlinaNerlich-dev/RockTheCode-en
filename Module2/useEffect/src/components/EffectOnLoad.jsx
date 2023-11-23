import { useState, useEffect } from "react";
const EffectOnLoad = ({ name }) => {
  const [nameState, setNameState] = useState(name);
  console.log("State: ", nameState);

  useEffect(() => {
    setTimeout(() => {
      setNameState("Michael");
    }, 1500);
  }, []);

  return (
    <div>
      <h4>{nameState}</h4>
      <input
        type="text"
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
      />
    </div>
  );
};

export default EffectOnLoad;
