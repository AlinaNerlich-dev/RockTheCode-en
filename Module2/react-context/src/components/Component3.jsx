import { useContext } from "react";
import UserContext from "../context/user-context";

const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Hello again, {user}</h2>
    </div>
  );
};

export default Component3;
