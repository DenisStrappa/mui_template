import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


const Admin = () => {
  return (
    <div>
      <Outlet/>
      <h1>Admin</h1>
    </div>
  )
}

export default Admin
