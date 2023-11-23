import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>RockTheCode Hero Router</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home 🏠</NavLink>
          <NavLink to="heroes">Heroes 🦸</NavLink>
          <NavLink to="about">About ℹ</NavLink>
        </nav>
      </div>
      <main>
        {/* <h2>This is the outlet:</h2> */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
