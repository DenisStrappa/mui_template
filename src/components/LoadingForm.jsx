import React from 'react'
import {
  Grid,
  CircularProgress,
  CardContent
} from "@mui/material";

const LoadingForm = () => {
  return (
    <CardContent>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item>
          <CircularProgress sx={{marginTop: 10, marginBottom: 10}}/>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default LoadingForm
