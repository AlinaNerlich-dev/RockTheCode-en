import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Mounted!");

    return () => {
      console.log("Unounted!!");
    };
  }, []);

  return <h4>Hello!</h4>;
};

export default Message;
