import PropTypes from "prop-types";
const Card = ({ character }) => {
  //   console.log(props);

  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.id}</p>
    </div>
  );
};

export default Card;
