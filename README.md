
npx create-react-app frontend

npm install:
  sass: css mejorado
  axios: fetch
  redux
  react-redux
  redux-thunk

# Rutas
  react-router-dom

# Redux
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const dataInicial= {
  data: []
}
const OBTENER_POKEMONES_EXITO= 'OBTENER_POKEMONES_EXITO';
// reducer
const pokeReducer= (state=dataInicial, action) => {
  switch(action.type){
    case OBTENER_POKEMONES_EXITO:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
// aciones
export const obtenerPokemonesAccion= () => async (dispatch, getState) => {
  try{
    const payload= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: payload.data.results
    })
  } catch(error){
    console.log(error)
  }
}

const rootReducer = combineReducers({
    pokemones: pokesReducer
})
// thunk, permite trabajar con promesas
const store = createStore(rootReducer, applyMiddleware(thunk));
-------------------
import {useDispatch, useSelector} from 'react-redux';

useDispatch -> realizar una accion
useSelector -> consumir información del store

# MUI
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

# Rutas
https://reactrouter.com/docs/en/v6/upgrading/v5

ROUTES

1. Public -> Todos
  - Home page
  - About page
2. Private -> Usuarios autentificados
  - Profile
  - Dashboard
3. Restringido -> Usuarios no autentificados
  - Signin
  - Signup


## Validaciones con JOI
https://joi.dev/api/?v=17.5.0
npm i joi

## Diseño
https://marmelab.com/react-admin/Tutorial.html

https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard

## Navegacion
import { useNavigate } from 'react-router-dom';
const navigate= useNavigate();
<Button variant="text" onClick={click}>Inicio</Button>  

## Título
import { HelmetProvider } from 'react-helmet-async';
<HelmetProvider>...</HelmetProvider>

import { Helmet } from 'react-helmet-async';
<Helmet>
  <title>{title}</title>
</Helmet>
