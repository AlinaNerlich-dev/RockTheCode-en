import { useOutlet, Navigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import { useAuth } from "../hooks/useAuth";

const UnprotectedLayout = () => {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
        ]}
      />
      {outlet}
    </>
  );
};

export default UnprotectedLayout;
