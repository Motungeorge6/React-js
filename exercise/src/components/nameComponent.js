import React,{ useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

function NameComponent( {name, age, gender }) {
  return (
    <> 
        <Grid>
            <Grid height="100px" width="100px" justifyContent="center" alignItems="center" backgroundColor="pink" margin="20px">
                <Typography font="16px" fontWeight="500">{name}</Typography>
                <Typography font="16px" fontWeight="500">{age}</Typography>
                <Typography font="16px" fontWeight="500">{gender}</Typography>
            </Grid>
            <Grid>
                <Button>cancel</Button>
            </Grid>
        </Grid>
    </>
  )
}

export default NameComponent