import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        repudiandae dolorum suscipit voluptas fuga illum sunt enim ducimus, sit
        repellendus.
      </p>
      <p>
        <span>Visit the page of heroes 🦸</span>
        <Link to="heroes">Heroes</Link>
      </p>
    </div>
  );
};

export default Home;
