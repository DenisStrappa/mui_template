import React from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container } from "@mui/material";
import main from "../../styles/main";
import notFound from "../../styles/notFound";
import img404 from "../../images/404.png";
import Root from "../../components/Root";

const NotFound = () => {
  const navigate= useNavigate();
  return (
    <Root title="Página no encontrada"  sx={main.rootPageCenter}>
      <Box sx={notFound.content}>
        <Typography variant="h3" paragraph>
          Lo sentimos, página no encontrada!
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Lo sentimos, no pudimos encontrar la página que estás buscando.
          ¿Quizás has escrito mal la URL? Asegúrese de revisar su ortografía.
        </Typography>
        <Box component="img" src={img404} sx={notFound.img404} />
        <Button to="/" size="large" variant="contained" color="info" onClick={() => navigate('/')}>
          Ir al Inicio
        </Button>
      </Box>
    </Root>
  );
};

export default NotFound;
