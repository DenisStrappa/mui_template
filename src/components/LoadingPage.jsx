import React from 'react'
import {
  Box,
  Typography,
  LinearProgress 
} from "@mui/material";

const LoadingPage = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <Typography variant='h2'>DOM</Typography>
        <LinearProgress sx={{marginTop: 5}} />
      </Box>
    </Box>
  )
}

export default LoadingPage
