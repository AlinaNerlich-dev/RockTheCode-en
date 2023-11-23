import { memo } from "react";

const Movie = memo(({ title, poster }) => {
  console.log("Rendering Movie Component");
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} height="200px" width="150px" />
    </div>
  );
});

export default Movie;
