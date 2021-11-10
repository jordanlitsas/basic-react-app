import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Card, CardContent, Container, Grid, TextField, Typography, Button } from '@mui/material'
import { LoginContext } from '../providers';
import axios from 'axios';

const MIDDLEWARE_URL = "http://localhost:8000/posts";

const Posts = () => {
  const { accessToken } = useContext(LoginContext);
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');

  const getPosts = useCallback(async () => {
    try {
      const response = await axios({
        method: 'get',
        url: MIDDLEWARE_URL,
        headers: {
          "authorization": accessToken
        },
      });

      if (response.status === 200) {
        setPosts(response.data.data);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }, [accessToken]);

  const handleCreatePost = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: `${MIDDLEWARE_URL}/create`,
        headers: {
          "authorization": accessToken
        },
        data: {
          content: postContent,
        }
      });

      if (response.status === 200) {
        alert("Post created successfully");
      } else {
        alert(response);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, [getPosts]);


  let view = (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="postContent"
            placeholder="What are you thinking?"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleCreatePost}> Create Post </Button>
        </Grid>
      </Grid>
      {posts.map(post => (
        <Card key={Math.random()} style={{ marginTop: 5 }}>
          <CardContent>
            <Typography style={{ fontSize: 14 }} gutterBottom>{post.userId}</Typography>
            <Typography variant="h5">{post.content}</Typography>
            <Typography variant="body2">{post.time}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
  return view;
}

export default Posts;