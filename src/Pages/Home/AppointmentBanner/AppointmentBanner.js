import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode:'darken,luminosity',
    marginTop:'150px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={doctor} style={{width:400,marginTop:"-120px"}} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display:'flex',justifyContent:'flex-start',textAlign:'left',alignItems:'center'
        }}>
            <Box>
                <Typography variant='h6' sx={{color:'aqua',mb:5}}>
                    APPOINTMENT
                </Typography>
                <Typography variant='h6' style={{mt:3}}>
                    Make An Appointment Today
                </Typography>
                <Typography variant='h6' sx={{color:'whitesmoke',fontSize:14,fontWeight:300,my:4}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas dolore. Tempore sapiente explicabo ea totam quam qui debitis pariatur dolore corporis nesciunt earum, delectus sint aut provident. Corrupti, aut.
                </Typography>
                <Button variant='contained'>
                    Learn More  
                </Button>
            </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;