import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import UnprotectedLayout from "./layouts/UnprotectedLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* UNPROTECTED ROUTES */}
      <Route element={<UnprotectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* PROTECTED ROUTES */}
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
