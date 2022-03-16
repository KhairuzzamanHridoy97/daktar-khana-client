import { Grid } from '@mui/material';
import React from 'react';

const Booking = (booking) => {
    const{name,time,space} = booking;
    return (
        <Grid item xs={12} sm={6} md={4} >
                <h1>{name}</h1>
        </Grid>
    );
};

export default Booking;