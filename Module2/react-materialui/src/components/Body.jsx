import { Container, Box } from "@mui/material";
import Post from "./Post";

const postData = [
  {
    title: "How I like to style my react apps: a review of multiple methods",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus asperiores incidunt recusandae commodi natus ratione dolor quae assumenda.",
  },
  {
    title: "Mapping through data: a simple guide.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus asperiores incidunt recusandae commodi natus ratione dolor quae assumenda.",
  },
  {
    title: "Welcome to my Material-UI Webpage!",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus asperiores incidunt recusandae commodi natus ratione dolor quae assumenda.",
  },
];

const Body = () => {
  return (
    <Container>
      <Box pt={10}>
        {postData.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </Box>
    </Container>
  );
};

export default Body;
