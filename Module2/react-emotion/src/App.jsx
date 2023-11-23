import Text from "./components/Text";
import { Button } from "./components/Button";
import MediaQueries from "./components/MediaQueries";
import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro
          nemo aspernatur aliquid ullam commodi.
        </Text>
        <Button>Start!</Button>
        <MediaQueries>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          doloribus?
        </MediaQueries>
        <div
          css={(theme) => ({
            backgroundColor: theme.backgroundColors.dark,
            color: theme.colors.light,
          })}
        >
          lorem10
        </div>
        <Title>TEST</Title>
      </ThemeProvider>
    </>
  );
}

export default App;
