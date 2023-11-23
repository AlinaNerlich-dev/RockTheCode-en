import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <header>
        <h2>React Lazy and Suspense</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense>
              <ProfilePage />
            </Suspense>
          }
        />

        <Route />
      </Routes>
    </>
  );
}

export default App;
