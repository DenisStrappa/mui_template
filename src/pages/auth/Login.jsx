import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  Stack,
  InputAdornment,
  IconButton,
  Icon,
  Box,
} from "@mui/material";
import main from "../../styles/main";
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {authSelector, authAction} from "../../redux/authRedux";

import imgLogin from "../../images/login.png";
import validate from "../../utils/validate";
import LoadingForm from "../../components/LoadingForm";
import AlertForm from "../../components/AlertForm";
import Root from "../../components/Root";
import MHidden from "../../components/MHidden";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => authSelector.isLoading(state));
  const isAuth = useSelector((state) => authSelector.isAuth(state));
  const error = useSelector((state) => authSelector.error(state));

  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [dataValidate, setDataValidate] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(authAction.initial());
  }, []);

  useEffect(() => {
    if(isAuth){
      navigate('/');
    }
  }, [isAuth]);

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleTarget = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleBlur = (ev) => {
    const name = ev.target.name;
    if (!data[name].length) {
      setDataValidate({
        ...dataValidate,
        [name]: "",
      });
      return;
    }
    const val = validate(name, data[name]);
    console.log(name, val);
    setDataValidate({
      ...dataValidate,
      [name]: val,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let error = false;
    let validates = {};
    Object.keys(data).forEach(key => {
      validates[key] = validate(key, data[key]);
      if(validates[key]){
        error = true;
      }
    });
    if(error){
      return setDataValidate(validates);
    }
    dispatch(authAction.login(data));
  };

  const close = () => {
    dispatch(authAction.initial());
  }

  const form = () => (
    <>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5">
              Inciar sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Correo"
              variant="outlined"
              type="text"
              fullWidth
              autoFocus
              value={data.email}
              onChange={handleTarget}
              onBlur={handleBlur}
              error={!!dataValidate.email}
              helperText={dataValidate.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Contraseña"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={data.password}
              onChange={handleTarget}
              onBlur={handleBlur}
              error={!!dataValidate.password}
              helperText={dataValidate.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {
                        showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>
                      }
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button
              size="small"
              variant="text"
              onClick={() => navigate("/register")}
            >
              ¿No tienes cuenta?
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" variant="contained" onClick={handleSubmit}>
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </>
  );

  return (
    <Root title="Iniciar sesión" sx={{display: 'flex'}}>
      <MHidden width="mdDown">
        <Card sx={main.auth.card}>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src={imgLogin}/>
        </Card>
      </MHidden>
      <Box sx={main.auth.content}>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Sign in to Minimal
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
        </Stack>

        <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              
            </Typography>
          </MHidden>
      </Box>
    </Root>
  );
};
export default Login;


/*

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => authSelector.isLoading(state));
  const isAuth = useSelector((state) => authSelector.isAuth(state));
  const error = useSelector((state) => authSelector.error(state));

  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [dataValidate, setDataValidate] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(authAction.initial());
  }, []);

  useEffect(() => {
    if(isAuth){
      navigate('/');
    }
  }, [isAuth]);

  const handleShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleTarget = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleBlur = (ev) => {
    const name = ev.target.name;
    if (!data[name].length) {
      setDataValidate({
        ...dataValidate,
        [name]: "",
      });
      return;
    }
    const val = validate(name, data[name]);
    console.log(name, val);
    setDataValidate({
      ...dataValidate,
      [name]: val,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let error = false;
    let validates = {};
    Object.keys(data).forEach(key => {
      validates[key] = validate(key, data[key]);
      if(validates[key]){
        error = true;
      }
    });
    if(error){
      return setDataValidate(validates);
    }
    dispatch(authAction.login(data));
  };

  const close = () => {
    dispatch(authAction.initial());
  }

  const form = () => (
    <>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5">
              Inciar sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Correo"
              variant="outlined"
              type="text"
              fullWidth
              autoFocus
              value={data.email}
              onChange={handleTarget}
              onBlur={handleBlur}
              error={!!dataValidate.email}
              helperText={dataValidate.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Contraseña"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={data.password}
              onChange={handleTarget}
              onBlur={handleBlur}
              error={!!dataValidate.password}
              helperText={dataValidate.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {
                        showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>
                      }
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button
              size="small"
              variant="text"
              onClick={() => navigate("/register")}
            >
              ¿No tienes cuenta?
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" variant="contained" onClick={handleSubmit}>
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </>
  );

  return (
    <Root title="Iniciar sesión">
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
      <Typography sx={{ color: 'text.secondary' }}>Ingrese su información.</Typography>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={imgPerfil01}
          alt="Login image"
        />
        {
          isLoading ? <LoadingForm/> : ( error ? <AlertForm severity="error" text="Las credenciales son incorrectas" callback={close}/> : form() )
        }
      </Card>
    </Root>
  );
};

*/