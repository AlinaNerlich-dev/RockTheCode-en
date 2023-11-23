import { useState } from "react";

const ObjectState = () => {
  const [superhero, setSuperhero] = useState({
    name: "Tony Stark",
    superheroName: "Ironman",
    age: 45,
  });
  return (
    <div>
      <h4>
        {superhero.name} || {superhero.superheroName} || {superhero.age}
      </h4>

      <input
        type="text"
        value={superhero.name}
        onChange={(event) =>
          setSuperhero({ ...superhero, name: event.target.value })
        }
      />

      <input
        type="text"
        value={superhero.superheroName}
        onChange={(event) =>
          setSuperhero({ ...superhero, superheroName: event.target.value })
        }
      />

      <input
        type="number"
        value={superhero.age}
        onChange={(event) =>
          setSuperhero({ ...superhero, age: event.target.value })
        }
      />
    </div>
  );
};

export default ObjectState;
