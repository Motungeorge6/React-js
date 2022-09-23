import React,{useState} from 'react';
import { Grid, Typography, Button} from '@mui/material';
import NameComponents from './nameComponent';

function useStateExercise2() {
    
  return (
    <Grid container lg={12} justifyContent="center" alignItems="center" flexDirection="column">
        <NameComponents name="Motun" age="12" gender="female" />
        <NameComponents name="Israel" age="10" gender="male" />
        <NameComponents name="Gideon" age="8" gender="female" />
        <NameComponents name="Teslim" age="9" gender="male" />
        <NameComponents name="Dolapo" age="9" gender="male" />
    </Grid>
  )
}

export default useStateExercise2