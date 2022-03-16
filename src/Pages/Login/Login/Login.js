import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';

const Login = () => {

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)

    }

    const handleLoginSubmit =(e)=>{
        alert('Login Done');
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{mt:5}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'75%',m:1}}
                id="standard-basic" 
                label="Email" 
                type="email"
                name="email"
                onChange={handleOnChange}
                variant="standard" 
                />
                <TextField 
                sx={{width:'75%',m:1}}
                id="standard-basic" 
                label="Password" 
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard" 
                />
                <Button type="submit" sx={{width:'75%',m:1}} variant='contained'>
                    Login
                </Button>
                </form>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <img src={login}  style={{width:'100%'}} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;