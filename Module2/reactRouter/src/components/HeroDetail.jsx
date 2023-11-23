const HeroDetail = ({ hero }) => {
  return (
    <div>
      <h3>name: {hero.name}</h3>
      <p>alias: {hero.alias}</p>
      <p>age: {hero.age}</p>
    </div>
  );
};

export default HeroDetail;
