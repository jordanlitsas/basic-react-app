import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material'

const Counter = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond(second + 1);
    }, 1000)
    return () => clearTimeout(timer);
  }, [second])


  let view = (
    <Container>
      <Typography variant={'h3'}> You have been here for: {second} seconds </Typography>
    </Container>
  )
  return view;
}

export default Counter;