import { styled } from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "blue" : "black"};
  color: ${(props) => (props.text === "primary" ? "whitesmoke" : "red")};
  padding: 10px 16px;
`;

export default Button;
