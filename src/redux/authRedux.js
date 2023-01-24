import { put, call, takeLatest } from "redux-saga/effects";
import api from "../services/api";

// CONSTANTS
const AUTH_INITIAL= 'AUTH_INITIAL';
const AUTH_LOGIN_START= 'AUTH_LOGIN_START';
const AUTH_LOGIN_SUCCESSFUL= 'AUTH_LOGIN_SUCCESSFUL';
const AUTH_LOGIN_ERROR= 'AUTH_LOGIN_ERROR';
const AUTH_LOGOUT_START= 'AUTH_LOGOUT_START';
const AUTH_REGISTER_START= 'AUTH_REGISTER_START';
const AUTH_REGISTER_SUCCESSFUL= 'AUTH_REGISTER_SUCCESSFUL';
const AUTH_REGISTER_ERROR= 'AUTH_REGISTER_ERROR';

const stateInitial = {
  isLoading: false,
  isAuth: false,
  isSuccessful: false,
  user: null,
  error: null,
};

// SELECTORS
export const authSelector= {
  isLoading: (state) => state.auth.isLoading,
  isSuccessful: (state) => state.auth.isSuccessful,
  isAuth: (state) => state.auth.isAuth,
  user: (state) => state.auth.user,
  error: (state) => state.auth.error,
};

// ACTIONS
export const authAction= {
  initial: payload => ({
    type: AUTH_INITIAL
  }),
  login: payload => ({
    type: AUTH_LOGIN_START,
    payload
  }),
  register: payload => ({
    type: AUTH_REGISTER_START,
    payload
  }),
  logout: payload => ({
    type: AUTH_LOGOUT_START
  }),
}

// REDUCERS

export const authReducer = (state = stateInitial, action) => {
  console.log("reducer auth", action);
  switch (action.type) {
    case AUTH_INITIAL:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };

    case AUTH_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        user: null,
        error: null,
      };

    case AUTH_LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isAuth: true,
        user: action.payload,
      };

    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        error: action.payload,
      };

    case AUTH_REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_REGISTER_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
      };

    case AUTH_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AUTH_LOGOUT_START:
      return {
        isLoading: false,
        isAuth: false,
        isSuccessful: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

// REDUCERS
function* loginReducer({ payload }) {
  try {
    let res;
    if(localStorage.getItem('auth')){
      res = yield call(api.GET, api.authValidateToken);
      res= res.data;
    }
    else {
      res = yield call(api.POSTH, api.authLogin, {
        email: payload.email,
        password: payload.password,
      });
      localStorage.setItem('auth', JSON.stringify({
        token: res.headers['access-token'],
        client: res.headers.client,
        uid: res.headers.uid
      }));
      res= res.data.data;
    }
    console.log('login res', res)
    yield put({
      type: AUTH_LOGIN_SUCCESSFUL,
      payload: res
    });
  } catch (error) {
    console.log('login error', error)
    if(localStorage.getItem('auth')){
      localStorage.removeItem('auth');
    }    
    yield put({
      type: AUTH_LOGIN_ERROR,
      payload: error
    });
  }
}

function* registerReducer({payload}){
  try{
    const res= yield call(api.POST, api.authRegister, {
      name: payload.name,
      lastname: payload.lastname,
      email: payload.email,
      password: payload.password
    });
    console.log('register res', res)
    yield put({
      type: AUTH_REGISTER_SUCCESSFUL
    })
  } catch(error){
    yield put({
      type: AUTH_REGISTER_ERROR,
      payload: error
    });
  }
}

function* logoutReducer(){
  try {
    const res= yield call(api.DELETE, api.authLogout);
    console.log('logout res', res)
    localStorage.removeItem('auth');
  } catch (error) {
    console.log('logout', error)
  }
}

export function* authSagas() {
  yield takeLatest(AUTH_LOGIN_START, loginReducer);
  yield takeLatest(AUTH_REGISTER_START, registerReducer);
  yield takeLatest(AUTH_LOGOUT_START, logoutReducer);
}


