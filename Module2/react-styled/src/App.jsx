import Title from "./components/Title";
import Button from "./components/Button";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Flex>
        <Title>This is a title</Title>
        <Button text="primary">Press me!</Button>
        <Button variant="primary">Press me!</Button>
      </Flex>
    </>
  );
}

export default App;
