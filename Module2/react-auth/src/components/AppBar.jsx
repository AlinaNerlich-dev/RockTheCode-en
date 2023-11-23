import { useNavigate } from "react-router-dom";

const AppBar = ({ pages }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };
  return (
    <>
      <header>
        <h1>React Router Auth</h1>
      </header>
      <nav>
        {pages?.map((page) => (
          <button key={page.label} onClick={() => handleNavigate(page.path)}>
            {page.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default AppBar;
