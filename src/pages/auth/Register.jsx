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
} from "@mui/material";

import {authSelector, authAction} from "../../redux/authRedux";
import validate from '../../utils/validate';
import imgPerfil02 from "../../images/imgPerfil02.png";
import LoadingForm from "../../components/LoadingForm";
import AlertForm from "../../components/AlertForm";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => authSelector.isLoading(state));
  const isSuccessful = useSelector((state) => authSelector.isSuccessful(state));
  const isAuth = useSelector((state) => authSelector.isAuth(state));
  const error = useSelector((state) => authSelector.error(state));

  const initialData = {
    name: "",
    lastname: "",
    email: "",
    password: ""
  };

  const [data, setData] = useState(initialData);
  const [dataValidate, setDataValidate] = useState(initialData);

  useEffect(() => {
    dispatch(authAction.initial());
  }, [])

  useEffect(() => {
    if(isAuth){
      navigate('/');
    }
  }, [isAuth]);

  useEffect(() => {
    console.log(error)
    let validate= initialData;
    for(let err in error){
      validate= {
        ...validate,
        [err]: error[err][0]
      }
    }
    setDataValidate(validate);
  }, [error])

  const handleTarget = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleBlur = (ev) => {
    const name = ev.target.name;
    if(!data[name].length){
      setDataValidate({
        ...dataValidate,
        [name]: ''
      });
      return;
    }
    const val = validate(name, data[name])
    setDataValidate({
      ...dataValidate,
      [name]: val
    });
  }

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
    dispatch(authAction.register(data));
  };

  const close = () => {
    setData(initialData);
    dispatch(authAction.initial());
  }

  const form = () => (
    <>
    <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5">
                Crear cuenta
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Nombre"
                variant="outlined"
                type="text"
                fullWidth
                autoFocus
                value={data.name}
                onChange={handleTarget}
                onBlur={handleBlur}
                error={dataValidate.name !== ''}
                helperText={dataValidate.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastname"
                label="Apellido"
                variant="outlined"
                type="text"
                fullWidth
                value={data.lastname}
                onChange={handleTarget}
                onBlur={handleBlur}
                error={dataValidate.lastname !== ''}
                helperText={dataValidate.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Correo"
                variant="outlined"
                type="text"
                fullWidth
                value={data.email}
                onChange={handleTarget}
                onBlur={handleBlur}
                error={dataValidate.email !== ''}
                helperText={dataValidate.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={data.password}
                onChange={handleTarget}
                onBlur={handleBlur}
                error={dataValidate.password !== ''}
                helperText={dataValidate.password}
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
                onClick={() => navigate("/login")}
              >
                ¿Ya tienes cuenta?
              </Button>
            </Grid>
            <Grid item>
              <Button size="small" variant="contained" onClick={handleSubmit}>
                Registrarse
              </Button>
            </Grid>
          </Grid>
        </CardActions>
    </>
  )

  return (
    <Container maxWidth="xs" sx={{ marginTop: 10 }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={imgPerfil02}
          alt="Login image"
        />
        {
          isLoading ? <LoadingForm/> : ( isSuccessful ?  <AlertForm severity="success" text="Cuenta registrada con exíto" callback={close}/> : form() )
        }
      </Card>
    </Container>
  );
};

export default Register;
