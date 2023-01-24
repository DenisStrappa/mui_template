import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import About from './about/About';
import Login from './auth/Login';
import Users from './users/Users';
import UserForm from './users/UserForm';
import Roles from './roles/Roles';
import Register from './auth/Register';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        { path: '', element: <Dashboard /> },
        { path: 'about', element: <About /> },
        { path: 'users', element: <Users /> },
        { path: 'users/create', element: <UserForm method="POST" /> },
        { path: 'users/edit', element: <UserForm method="PATCH" /> },
        { path: 'roles', element: <Roles /> },
        { path: 'bikes', element: <Users /> },
        { path: 'bikes/create', element: <UserForm method="POST" /> },
        { path: 'bikes/edit', element: <UserForm method="PATCH" /> },
      ]
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

export default Router;