import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({date,setDate}) => {

    return (
       <Container >
           <Grid container spacing={2}>

           <Grid item xs={12} md={6}>
                <Calendar date={date} setDate={setDate}></Calendar>
           </Grid>
           <Grid item xs={12} md={6}>
                <img src={chair} style={{width:'100%'}} alt="" />
           </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentHeader;