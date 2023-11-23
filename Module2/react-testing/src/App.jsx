import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <img
        data-testid="giphy"
        src="https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif"
        alt="giphy"
      />

      <div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Enter your name"
        />
        <h2>Hello, {name}</h2>
      </div>
    </>
  );
}

export default App;
