import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Toggleable from "./components/Toggleable";
import useWindowSize from "./hooks/useWindowSize";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Increment />

      <Decrement />
      <Toggleable />
      <div>
        <h1>Window Size:</h1>
        <h3>width: {width}</h3>
        <h3>height: {height}</h3>
      </div>
    </>
  );
}

export default App;
