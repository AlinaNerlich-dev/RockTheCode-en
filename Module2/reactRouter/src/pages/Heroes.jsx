import { getHeroes } from "../DATA/heroes";
import { Link, Outlet } from "react-router-dom";
import HeroDetail from "../components/HeroDetail";

const Heroes = () => {
  const heroes = getHeroes();
  return (
    <div>
      <h2>All Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/hero/${hero.id}`}>
              <HeroDetail hero={hero} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Heroes;
