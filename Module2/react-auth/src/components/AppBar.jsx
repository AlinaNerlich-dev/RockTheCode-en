import { useNavigate } from "react-router-dom";

const AppBar = ({ pages }) => {
  const navigate = useNavigate();


  return (
    <>
      <header>
        <h1>React Router Auth</h1>
      </header>
      <nav>
        {pages?.map((page) => (
          <button key={page.label} onClick={() => navigate(page.path)}>
            {page.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default AppBar;
