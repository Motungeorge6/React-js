import React from 'react';
import Sidebar from './SideBar';
import Outlet from './Outlet';
import { Grid } from '@mui/material';

function mainLayout() {
  return (
    <Grid container lg={12} display="flex">
        <Sidebar />
        <Outlet />
    </Grid>
  )
}

export default mainLayout