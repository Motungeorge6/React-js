import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 function Outlet() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Grid container justifyContent="center" alignItems="center" height="100vh" width="70vw">
          <Grid height="200px" width='100vw'>

          </Grid>
    <Box sx={{ width: '800px', height:"100vh", marginLeft: "200px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="FILM" {...a11yProps(0)} />
          <Tab label="TELEVISION" {...a11yProps(1)} />
          <Tab label="THEATRE" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <Grid container justifyContent="space-between" height="30px" width="500px">
                <Typography>Title</Typography>
                <Typography>Role</Typography>
                <Typography>Director</Typography>
                <Typography>Producer</Typography>
            </Grid>
            <Grid container justifyContent="space-between" height="30px" width="500px">
                <Typography fontSize = "20px">Horrible Histories: The Movie</Typography>
                <Typography>Severus</Typography>
                <Typography>Director</Typography>
                <Typography>Producer</Typography>
            </Grid>
            <Grid container justifyContent="space-between" height="30px" width="500px">
                <Typography>Title</Typography>
                <Typography>Role</Typography>
                <Typography>Director</Typography>
                <Typography>Producer</Typography>
            </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Grid>
  );
}
export default Outlet;