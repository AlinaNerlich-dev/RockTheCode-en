import { useRef, useEffect } from "react";

const UseRefFocus = () => {
  const focusInputRef = useRef();

  useEffect(() => {
    if (focusInputRef) {
      console.log(focusInputRef.current)
      focusInputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form action="">
        <fieldset>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id="username"
              ref={focusInputRef}
            />
          </label>
          <br />
          <label htmlFor="password">
            <input type="text" name="password" id="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default UseRefFocus;
