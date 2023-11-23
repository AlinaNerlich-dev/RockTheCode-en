import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const NewTitle = styled.h1`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
`;

const Title = ({ children }) => {
  const theme = useTheme();

  return <NewTitle theme={theme}>{children}</NewTitle>;
};

export default Title;
