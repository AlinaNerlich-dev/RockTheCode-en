// import {
//   AsymetricButton,
//   ColoredButton,
//   PropButton,
//   CustomizableButton,
// } from "./components/Button/Button.styles";
import { StyledDiv } from "./components/Div/DivComponent.styles";
import { theme } from "./components/Styles/Theme";
import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./components/Styles/GlobalStyles";

function App() {
  return (
    <>
      {/* <AsymetricButton>Press Me</AsymetricButton>
      <ColoredButton>Press Me</ColoredButton>
      <PropButton color="red" bg="green">
      Press Me
      </PropButton>
      <CustomizableButton primary>Press Me</CustomizableButton>
      <CustomizableButton warning>Press Me</CustomizableButton>
    <CustomizableButton disabled>Press Me</CustomizableButton> */}
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}

        <StyledDiv>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt maiores
          nobis nesciunt quo dolore dolorum culpa ipsa modi laborum consectetur!
        </StyledDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
