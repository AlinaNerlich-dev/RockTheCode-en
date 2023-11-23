import React, { useState, useEffect } from "react";
import Card from "./Card";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      ).then((response) => response.json());
      setCharacterList(response.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </>
  );
};
export default CharacterList;
