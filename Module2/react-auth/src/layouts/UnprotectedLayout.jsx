import { useOutlet, Navigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import { useAuth } from "../hooks/useAuth";

const UnprotectedLayout = () => {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (user) return <Navigate to="/dashboard/profile" replace />;
  return (
    <>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "login" },
          { label: "Register", path: "register" },
        ]}
      />
      {outlet}
    </>
  );
};

export default UnprotectedLayout;
