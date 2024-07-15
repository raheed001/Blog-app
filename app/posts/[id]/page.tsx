import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import ResponsiveAppBar from '@/app/Navbar';
import {  Avatar, Grid, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Navbar from '../../Footer'


interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchPost(id: number) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
}

async function fetchCommentsByPostId(postId: number) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.data;
}
const imgLink =
  "https://via.placeholder.com/150";

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const post: Post = await fetchPost(Number(params.id));
  const comments: Comment[] = await fetchCommentsByPostId(post.id);

  return (
    <div>
    <ResponsiveAppBar/>
    <Card>
    <Container>
    <CardContent>
       
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="h5">{post.body}</Typography>

      <Typography variant="h2">Comments</Typography>
      <List>
        {/* {comments.map(comment => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.body} secondary={`Comment by: ${comment.name} (${comment.email})`} />
          </ListItem>
        ))} */}

<Paper style={{ padding: "40px 20px", marginTop: 10 }}>
        <Grid container wrap="nowrap" spacing={2}>
         
          <Grid justifyContent="left" item xs zeroMinWidth>
            
            <p style={{ textAlign: "left" }}>
              {comments.map(comment => (
          <ListItem key={comment.id}>
            
             <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          
            <ListItemText primary={comment.body} secondary={`Commented by: ${comment.name} (${comment.email})`} />
            <ListItem>
            
            </ListItem>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </ListItem>
          
        ))}
            </p>
            
          </Grid>
        </Grid>
      </Paper>    




      </List>
      </CardContent>
      </Container>
    </Card>
    <Navbar/>
    </div>
  );
};

export default PostDetailPage;