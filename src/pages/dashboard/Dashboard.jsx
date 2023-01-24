import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'


const Dashboard = () => {
  const navigate= useNavigate();
  const click= () => {
    navigate('/')
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="text" onClick={click}>
        Inicio
      </Button>  
    </div>
  )
}

export default Dashboard
