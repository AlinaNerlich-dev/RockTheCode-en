import styled from "styled-components";
import DivComponent from "./DivComponent";

export const StyledDiv = styled(DivComponent)`
  max-width: 300px;
  background-color: ${(props) => props.theme.dark.background.div};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.dark.color.primary};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  h3 {
    font-weight: 500;
    padding: 0;
    margin: 0.25rem 0;
    color: rgb(160, 180, 130);
  }

  p {
    margin: 0.25rem;
  }

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;
