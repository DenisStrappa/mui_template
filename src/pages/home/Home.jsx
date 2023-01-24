import React from "react";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Paper,
  Box,
  Rating,
  createTheme,
  ThemeProvider
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import imgCover1 from "../../images/covers/cover_1.jpg";
import imgCover2 from "../../images/covers/cover_2.jpg";
import imgCover3 from "../../images/covers/cover_3.jpg";
import imgCover4 from "../../images/covers/cover_4.jpg";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: { fontSize: 12 }
        },
        {
          props: { variant: "body3" },
          style: { fontSize: 9 }
        }
      ]
    }
  }
})

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={imgCover1} className="card-image" />
        <Box className="card-box">
          <Typography variant="subtitle1" component="h1">
            Immerse into the Falls
          </Typography>
          <Box className="card-time">
            <AccessTimeIcon className="card-time-icon"/>
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
          <Box className="card-rating">
            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
            <Typography variant="body2" component="span" marginLeft={1}>
              4.5
            </Typography>
            <Typography variant="body3" component="span" marginLeft={1.5}>
              (655 views)
            </Typography>
          </Box>
          <Typography variant="h6" component="h3">
            From $150
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
