import {
  Flex,
  Heading,
  Box,
  Button,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex wrap="wrap" alignItems="center" p="1rem">
        <Heading>Chakra User Profile</Heading>
        <Spacer />
        <Box bg="blue.500" p=".5rem" mr="1rem" borderRadius="md">
          Mark
        </Box>
        <Button bg="gray.400">Logout</Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" bg="gray.200">
        <GridItem as="section">
          <Box h="100px" border="1px solid" bg="purple.300">
            Box
          </Box>
        </GridItem>
        <GridItem as="section">
          <Box h="100px" border="1px solid" bg="purple.300">
            Box
          </Box>
        </GridItem>
        <GridItem as="section">
          <Box h="100px" border="1px solid" bg="purple.300">
            Box
          </Box>
        </GridItem>
        <GridItem as="section">
          <Box h="100px" border="1px solid" bg="purple.300">
            Box
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
