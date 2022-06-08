import React from 'react'
import { Grid, Box, Typography,Stack,Divider,Button,Tab } from '@mui/material' 
import Tabtoggle from "../toggle"

     
function login() {
  return (
   <Grid  container lg = {12} alignItems="center" height = "100px" width="100vw" backgroundColor = "#fff" display = "flex">
      <Grid item lg={2}>
         <Grid container lg ={12}
              justifyContent ="center"
              height ="120vh"
              width ="100vw"
              backgroundColor ="rgb(40,80,88,.92)"
              paddingBottom="10px"
        >
           <Grid container
                height ="140px"
                width ="100vw"
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
           <Divider color= "white" width="250px" marginTop="30px"></Divider>
           <Typography fontSize = "15px" >Writers and Directors</Typography>
           <Divider color= "white" width="250px" marginTop ="20px"></Divider>
           <Typography fontSize = "15px">Casting Directors</Typography>
           <Divider color= "white" width="250px" marginTop = "20px"></Divider>
           <Typography fontSize = "15px">Book to Film</Typography>
           <Divider color= "white" width="250px" marginTop ="20px"></Divider>
           <Typography fontSize = "15px">Creative and Digital</Typography>
           <Divider color= "white" width="250px" marginTop = "20px"></Divider>
           <Typography fontSize ="15px">Commercial</Typography>
           <Divider color= "white" width="250px" marginTop = "20px"></Divider>
           <Typography fontSize="15px">Be heard Voices</Typography>
           </Stack>
         </Grid>
         <Grid container
         height = "270px"
         width ="100vw"
         marginTop="100px"
         justifyContent="left"
         alignItems="center"
         paddingTop ="90px">
           <Stack gap={2} color = "white" direction = "column" justifyContent = "space-evenly">
           <Divider color= "white" width="250px"></Divider>
           <Typography fontSize = "15px">Heritage</Typography>
           <Divider color= "white" width="250px" ></Divider>
           <Typography fontSize = "15px">About Us</Typography>
           <Divider color= "white" width="250px"></Divider>
           <Typography fontSize = "15px">Contact Us</Typography>
           <Divider color= "white" width="250px"></Divider>
           <Typography fontSize = "15px">Becoming a Client</Typography>
           <Divider color= "white" width="250px"></Divider>
           </Stack>
         </Grid>
       </Grid>
       </Grid>
      <Typography color = "rgb(100,114,136)" fontSize = "30px" fontWeight="bold" marginBottom="20%" marginLeft="59px">TOBI BAMFETA</Typography>
      <Box  backgroundColor = "white"  marginBottom = "20%" marginLeft="25%" height = "40px" fontSize = "10px">
      <Button variant="contained">
  Contact Us
</Button >
<Button variant="contained">
  Download Cv
</Button>
</Box>
  return (
    <Box sx={{ width: '100%' }}>
      <Tab
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tab>
    </Box>
  );

  
  

     </Grid>
  )
}

export default login

