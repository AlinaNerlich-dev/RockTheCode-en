import { css } from "@emotion/react";

const style = css`
  color: #6f45f2;
  font-size: 1.5rem;

  &:hover {
    color: #ff0000;
  }
`;

const Text = ({ children }) => {
  return <p css={style}>{children}</p>;
};

export default Text;
