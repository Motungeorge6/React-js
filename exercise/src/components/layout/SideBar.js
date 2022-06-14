import React from 'react';
import { Grid, Typography,Stack,Divider } from '@mui/material';

const sideBar = () => {
  return (
    <Grid container height="100vh" width="300px" backgroundColor='rgba(40,80,88,.92)'>
           <Grid container
                height ="140px"
                width ="300px"
                marginBottom="30px"
                justifyContent="center"
                alignItems ="center"> 
              <img  src = "https://theartistspartnership.co.uk/wp-content/uploads/2021/06/tap-logo-white.svg"/>
            </Grid>
         <Grid container
         height ="100px"
         width ="100vw"
         marginBottom="50px"
         justifyContent="left"
         alignItems="center"
         paddingTop = "5px"
        >
           <Stack gap={2} color = "white" direction = "column" justifyContent = "space-evenly" >
           <Typography fontSize = "15px" >Actors</Typography>
           <Divider color= "white" width="300px" marginTop="30px"></Divider>
           <Typography fontSize = "15px" >Writers and Directors</Typography>
           <Divider color= "white" width="300px" marginTop ="20px"></Divider>
           <Typography fontSize = "15px">Casting Directors</Typography>
           <Divider color= "white" width="300px" marginTop = "20px"></Divider>
           <Typography fontSize = "15px">Book to Film</Typography>
           <Divider color= "white" width="300px" marginTop ="20px"></Divider>
           <Typography fontSize = "15px">Creative and Digital</Typography>
           <Divider color= "white" width="300px" marginTop = "20px"></Divider>
           <Typography fontSize ="15px">Commercial</Typography>
           <Divider color= "white" width="300px" marginTop = "20px"></Divider>
           <Typography fontSize="15px">Be heard Voices</Typography>
           </Stack>
         </Grid>
         <Grid container
         height = "270px"
         width ="100vw"
         marginTop="100px"
         justifyContent="left"
         alignItems="center"
         paddingTop ="90px"
         >
           <Stack gap={2} color = "white" direction = "column" justifyContent = "space-evenly">
           <Divider color= "white" width="250px"></Divider>
           <Typography fontSize = "15px">Heritage</Typography>
           <Divider color= "white" width="300px" ></Divider>
           <Typography fontSize = "15px">About Us</Typography>
           <Divider color= "white" width="300px"></Divider>
           <Typography fontSize = "15px">Contact Us</Typography>
           <Divider color= "white" width="300px"></Divider>
           <Typography fontSize = "15px">Becoming a Client</Typography>
           <Divider color= "white" width="300px"></Divider>
           </Stack>
         </Grid>
       </Grid>

  )
}

export default sideBar