import styled, { css } from "styled-components";
import Button from "./Button";

export const AsymetricButton = styled(Button)`
  color: black;
  padding: 1rem 1.5rem;
  border: 0.25rem solid #555;
  border-radius: 90% 5% 90% 5% / 5% 90% 5% 90%;
  cursor: pointer;
  margin-top: 1rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  transition: all 0.2s linear;

  &:hover {
    border-radius: 5% 90% 5% 90% / 90% 5% 90% 5%;
    border: 0.25rem dotted #555;
  }
`;

export const ColoredButton = styled(AsymetricButton)`
  color: white;
  background-color: #88357b;

  &:hover {
    background-color: coral;
  }
`;

export const PropButton = styled(ColoredButton)`
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.bg ? props.bg : "#88357b")};
`;

export const CustomizableButton = styled(Button)`
  color: black;
  min-width: 100px;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background-color: white;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #5959ff;
      &:hover {
        background-color: #8484fb;
      }
    `}
  ${(props) =>
    props.warning &&
    css`
      background-color: #ff7259;
      &:hover {
        background-color: #fb8484;
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #ccc;
      background-color: #9e9e9e;
    `}
`;
