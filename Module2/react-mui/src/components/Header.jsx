import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./styles.css";

const Header = () => {
  return (
    <AppBar>
      <Toolbar className="toolbar">
        <Typography variant="h6">Material-UI Demo Webpage</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
