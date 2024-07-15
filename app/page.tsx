'use client'
import axios from 'axios';
import Link from 'next/link';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea, CardHeader } from '@mui/material';
import ResponsiveAppBar from './Navbar';
import Footer from './Footer';


interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

const HomePage = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h2" gutterBottom>
          Blogs
        </Typography>
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                <CardActionArea component={Link} href={`/posts/${post.id}`}>
                  <CardMedia
                    component="img"
                    alt={post.title}
                    height="150"
                    image="https://via.placeholder.com/150" // Placeholder image URL
                    title={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer/>
      </Container>
      
      
      
    </div>
    
    
  );
};

export default HomePage;