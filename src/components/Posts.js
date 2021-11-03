import React, { useEffect, useState } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://3.25.141.10:8000/api/posts");

      if (response.status === 200) {
        setPosts(response.data.data);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  let view = (
    <Container>
      {posts.map(post => (
        <Card key={post._id} style={{ marginTop: 5 }}>
          <CardContent>
            <Typography style={{ fontSize: 14 }} gutterBottom>{post.user}</Typography>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
  return view;
}

export default Posts;