import React, { useState } from 'react';
import {PersonData} from './personData';
import { Grid, Box, Button } from '@mui/material';

function useStateMapping() {
    const [ people, setPeople ] = useState(PersonData)
    

    function handleClear(){
        setPeople([]);
    }

  return (
    <Grid container lg={12} justifyContent="center" alignItems='center' height="100vh" width="100vw" flexDirection="column">
    <Grid container height="300px" width="300px" flexDirection="column">
        {people.map((person)=>{
            const {id,name,age,gender} = person
            return(
                <>
                    <Box  key={id} margin='20px' >
                        {name}
                        {age}
                        {gender}
                    </Box>
                   
                </>
                
            )
        }
        )}
        </Grid>
         <Box>
                        <Button onClick = {handleClear}>
                            Clear All
                        </Button>
                    </Box>
        
        </Grid>
  )
}

export default useStateMapping