import { Container, Box } from "@mui/material";
import { Post } from "./Post";

const postData = [
  {
    title: "How I like to style my react apps - a review of multiple methods",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis provident sequi atque quod sed recusandae doloribus, rem reprehenderit est quae impedit ea esse possimus unde eveniet dolorum voluptas? Officiis necessitatibus quasi veniam placeat iste ipsam exercitationem consequuntur atque asperiores laboriosam modi mollitia illo est sequi inventore, similique obcaecati illum.",
  },
  {
    title: "Mapping through data, a simple guide",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis provident sequi atque quod sed recusandae doloribus, rem reprehenderit est quae impedit ea esse possimus unde eveniet dolorum voluptas? Officiis necessitatibus quasi veniam placeat iste ipsam exercitationem consequuntur atque asperiores laboriosam modi mollitia illo est sequi inventore, similique obcaecati illum.",
  },
  {
    title: "Welcome to my Material-UI Webpage!",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore perspiciatis provident sequi atque quod sed recusandae doloribus, rem reprehenderit est quae impedit ea esse possimus unde eveniet dolorum voluptas? Officiis necessitatibus quasi veniam placeat iste ipsam exercitationem consequuntur atque asperiores laboriosam modi mollitia illo est sequi inventore, similique obcaecati illum.",
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
