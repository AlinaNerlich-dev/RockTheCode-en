import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [user, setUser] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(user);
  };

  return (
    <div>
      <h2>This is the login page</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={user?.name}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleInput}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
      <Link to="/register">Don't have an account? Sign up</Link>
    </div>
  );
};

export default Login;
