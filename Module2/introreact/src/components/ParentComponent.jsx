import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [status, setStatus] = useState("Sorry, I'm Offline");

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <ChildComponent onUpdateStatus={updateStatus} />
      <p>{status}</p>
    </div>
  );
};

export default ParentComponent;
