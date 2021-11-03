import React, { useState } from 'react';

import { Container, Button, Card, CardContent, Typography, TextField, Grid } from '@mui/material';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const add = () => {
    const _result = parseFloat(x) + parseFloat(y);
    setResult(_result);
  }

  return (
    <Container>
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <TextField onChange={(value) => setX(value.target.value)} id="x" sx={{ mt: 5 }} />
        </Grid>
        <Grid item>
          <TextField onChange={(value) => setY(value.target.value)} id="y" sx={{ mt: 5 }} />

        </Grid>
        <Grid item>
          <Button onClick={add} sx={{ mt: 5, bgcolor: "black", fontWeight: "bold" }}> Add </Button>

        </Grid>
        <Grid item>
          <Card sx={{ mt: 5 }}>
            <CardContent>
              <Typography variant={"h4"}>
                {result.toString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>



    </Container>
  )
}

export default Calculator;
