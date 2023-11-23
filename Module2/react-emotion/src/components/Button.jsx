import styled from "@emotion/styled";

export const Button = styled.button`
  background: #fff;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-15deg);
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    color: #fff;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    transition: all 0.3s;
    opacity: 0;
    background: #111;
    z-index: -1;
  }
  &:hover:before {
    left: 0;
    right: 0;
    opacity: 1;
  }
`;
