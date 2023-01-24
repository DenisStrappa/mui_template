import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from "@mui/material";

const Root = ({children, title, ...other}) => {
  return (
    <Box {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  )
};

export default Root;
