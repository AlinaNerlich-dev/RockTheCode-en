import { useState } from "react";
import Component2 from "./Component2";
import UserContext from "../context/user-context";

const Component1 = () => {
  const [user, setUser] = useState("Mark Bodenchak");
  return (
    <div>
      <h2>Welcome, {user}</h2>
      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component1;
