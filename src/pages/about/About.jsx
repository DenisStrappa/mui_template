import React from 'react';
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  CardContent,
  Typography,
  FormControlLabel,
  Stack,
  IconButton,
  AppBar,
  Toolbar,
  Button
} from '@mui/material';

const About = () => {
  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{margin: 50}}>
      <Card sx={{width: 500}}>
        <CardHeader title="Tasks"/>
        <CardContent>
          hola
          hola
          hola
        </CardContent>
      </Card>
    </div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  )
}

export default About
