import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import {Box} from '@mui/material'
import main from "../../styles/main";
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={main.dashboardLayout.root}>
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}/>
      <Box sx={main.dashboardLayout.content}>
        <Navbar onOpenSidebar={() => setOpen(true)} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default DashboardLayout
