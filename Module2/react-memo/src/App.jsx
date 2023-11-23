import { useState } from "react";
import Movie from "./components/Movie";
import Review from "./components/Review";
import "./App.css";

function App() {
  const [score, setScore] = useState();

  return (
    <>
      <Movie
        title="Jurassic Park"
        poster="https://m.media-amazon.com/images/I/61iF3RSsLsL._AC_SY879_.jpg"
      />
      <input
        type="number"
        name="score"
        id="score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <hr /> <Review title="Jurassic Park" score={score} />
    </>
  );
}

export default App;
