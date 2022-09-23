import React,{useState} from "react";
import {Grid, Typography, Button} from '@mui/material';


function UseStateExercise(){

const [ num, setNum ] = useState(0);

function handleDecrement(){
    setNum(num -1);
}
function handleIncrement(){
    setNum(num +1);
}

    return(
        <Grid container justifyContent="center" alignItems="center" lg={12} height="100vh" width='100vw'>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Typography>{num}</Typography>
            <Button onClick={handleIncrement}> Increment</Button>
        </Grid>
    );
}



export default UseStateExercise;