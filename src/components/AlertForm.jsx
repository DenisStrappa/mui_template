import React from 'react';
import {
  Alert,
  AlertTitle,
} from "@mui/material";

const AlertForm = ({severity, text="", callback}) => {
  const title = () => {
    switch(severity){
      case 'info':
        return <AlertTitle>Información</AlertTitle>;
      case 'error':
        return <AlertTitle>Error</AlertTitle>;
      case 'success':
        return <AlertTitle>Éxito</AlertTitle>;
      default:
        return '';
    }
  }
  return (
    <Alert severity={severity} onClose={callback}>
      { title() }
      { text }
    </Alert>
  )
}

export default AlertForm
