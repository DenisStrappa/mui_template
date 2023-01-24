import axios from "axios";

// const URL = "http://127.0.0.1:8000/api";
const URL = "http://192.168.0.111:3000";

const headers = () => {
  const auth = localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')) || null;
  console.log('HEADERS',auth)
  const token = auth && auth.token || '';
  const client = auth && auth.client || '';
  const uid = auth && auth.uid || '';

  const headers = {
    headers: {
      'access-token': token,
      'client': client,
      'uid': uid,
    }
  };
  return headers;
}

const POST = async (url, payload) => {
  try {
    const res = await axios.post(url, payload, headers());
    console.log('POST', res)
    return res?.data;
  } catch (error) {
    throw error?.response?.data?.error || "Error server";
  }
};

const POSTH = async (url, payload) => {
  try {
    const res = await axios.post(url, payload, headers());
    console.log('POSTH', res)
    return {data: res?.data, headers: res?.headers};
  } catch (error) {
    throw error?.response?.data?.error || "Error server";
  }
};

const GET = async (url) => {
  try {
    const res = await axios.get(url, headers());
    return res?.data;
  } catch (error) {
    console.log(error?.response)
    throw error?.response?.data?.error || "Error server";
  }
};

const DELETE = async (url) => {
  try {
    const res = await axios.delete(url, headers());
    return res?.data;
  } catch (error) {
    console.log(error?.response)
    throw error?.response?.data?.error || "Error server";
  }
};

export default {
  POST,
  POSTH,
  GET,
  DELETE,
  authLogin: `${URL}/auth/sign_in`,
  authRegister: `${URL}/auth`,
  authLogout: `${URL}/auth/sign_out`,
  authValidateToken: `${URL}/auth/validate_token`,
  users: `${URL}/users`,
  posts: `${URL}/posts`,
};
