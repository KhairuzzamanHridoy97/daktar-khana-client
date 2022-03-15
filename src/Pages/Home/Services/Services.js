import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from  '../../../images/whitening.png';
import Service from '../Service/Service';
import { fontWeight } from '@mui/lab/node_modules/@mui/system';



  const services = [
    {
        name: 'Fluoride Treatment',
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "On average, you can expect a metal filling to last for about 15 years before needing to be replaced, but the length of time can vary based on several factors, such as if you grind or clench your teeth. Tooth-colored fillings are made from a mixture of fine glass and plastic particle",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "The natural yellow and blue/grey tooth shades will whiten faster than a tooth with added stains from medication, tobacco, and food. Teeth with a natural yellow shade will generally whiten in about 1–2 weeks, whereas teeth with a blue/grey shade can take twice as long.",
        img: whitening
    }
]

const Services = () => {
    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h6' sx={{fontWeight:500,m:2,color:'success.main'}} component="div">
                    Our Services
                </Typography>
                <Typography variant='h4' sx={{fontWeight:600,m:4,color:'blue'}} component="div">
                    Services We Provide
                </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map(service=><Service
             service={service}
             key={service.name}
             >

             </Service>)
         }
        </Grid>
        </Container>
      </Box>
  
    );
};

export default Services;