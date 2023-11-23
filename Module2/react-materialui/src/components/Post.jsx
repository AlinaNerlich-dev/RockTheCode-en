import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Post = ({ post }) => {
  return (
    <Card sx={{ marginTop: 2 }} elevation={4}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" align="justify">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
