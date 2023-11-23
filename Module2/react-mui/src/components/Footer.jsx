import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" align="center" color="textSecondary">
        &copy; 2023 Mark Bodenchak{" "}
        <Link href="http://www.mui.com" target="_blank">
          MUI Documentation
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
