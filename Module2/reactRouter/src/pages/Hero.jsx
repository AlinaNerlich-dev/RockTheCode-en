import { useParams, useNavigate } from "react-router-dom";
import { getHero, deleteHero } from "../DATA/heroes";

import HeroDetail from "../components/HeroDetail";

const Hero = () => {
  const params = useParams();
  const hero = getHero(params.id);
  const navigate = useNavigate();
  return (
    <div>
      <h2>Hero Page</h2>
      <HeroDetail hero={hero} />
      <button
        onClick={() => {
          deleteHero(hero.id).then(() => {
            navigate("/heroes");
          });
        }}
      >
        Delete {hero.name}
      </button>
    </div>
  );
};

export default Hero;
