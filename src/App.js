import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, CssBaseline} from "@mui/material"

import theme from "./styles/theme/index";

// import "./styles/style.scss";
import { authSelector, authAction } from "./redux/authRedux";
import LoadingPage from "./components/LoadingPage";

import Router from "./pages/routes";

import Navbar from "./components/Navbar";

import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import NotFound from "./pages/layouts/NotFound";
import User from "./pages/users/User";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import Admin from "./pages/admin/Admin";


import "simplebar/src/simplebar.css";

const PrivateElement= ({children}) => {
  const location= useLocation();
  console.log(location)
  return true ? children : <Navigate to="/login"/>
}

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => authSelector.isLoading(state));
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("auth"));

  useEffect(() => {
    if (isAuth) {
      dispatch(authAction.login());
    }
  }, []);

  if (isLoading && isAuth) {
    return <LoadingPage />;
  }

  // return (
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/users/:user_id" element={<User />} />
  //         <Route path="/profile" element={<User />} />
  //         <Route path="/users" element={<Users />} />
  //         <Route path="/dashboard/*" element={<Dashboard />} />
  //         <Route path="/admin/*" element={<PrivateElement><Admin/></PrivateElement>}>
  //           <Route path="welcome" element={<p>Welcome</p>}/>
  //           <Route path="goodbye" element={<p>Goodbye</p>}/>
  //           <Route path="*" element={<NotFound />} />
  //         </Route>
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </ThemeProvider>
  // );

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
