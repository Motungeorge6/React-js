import React from 'react';
import Sidebar from './SideBar';
import Outlet from './Outlet';
import { Grid } from '@mui/material';
import TableLayout from './TableLayout';

function mainLayout() {
  return (
    <Grid container lg={12} display="flex">
        <Sidebar />
        <Outlet />
        <TableLayout/>
    </Grid>
  )
}

export default mainLayout;