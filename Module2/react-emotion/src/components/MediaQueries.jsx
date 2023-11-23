import { css } from "@emotion/react";

const MediaQueries = ({ children }) => {
  const breakpoints = {
    mobile: "576px",
    tablet: "768px",
    desktop: "1024px",
  };

  const styles = css`
    background-color: #9bfafa;
    padding: 2rem;
    @media (min-width: ${breakpoints.tablet}) {
      background-color: #fd8787;
    }
  `;

  //   const objectStyles = {
  //     backgroundColor: "#9bfafa",
  //     padding: "2rem",
  //     [`@media (min-width: ${breakpoints.desktop})`]: {
  //       backgroundColor: "#fd8787",
  //     },
  //   };

  return <div css={styles}>{children}</div>;
};

export default MediaQueries;
