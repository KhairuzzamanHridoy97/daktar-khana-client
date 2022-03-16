import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData,setLoginData] = useState({});

    const {registerUser,isLoading} = useAuth();

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
        // console.log(field,value)

    }

    const handleLoginSubmit =(e)=>{
        if(loginData.password!==loginData.password2){
            alert("Password Not Match")
            return
        } 
        registerUser(loginData.email,loginData.password)
        e.preventDefault()
    }
    return (
        <Container>
        <Grid container spacing={2}>

            <Grid item sx={{mt:5}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                Register
            </Typography>
           {!isLoading && <form onSubmit={handleLoginSubmit}>
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
             <TextField 
                sx={{width:'75%',m:1}}
                id="standard-basic" 
                label="Retype Password" 
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard" 
                />
            <Button type="submit" sx={{width:'75%',m:1}} variant='contained'>
                Register
            </Button>
            <NavLink to='/login' style={{textDecoration:"none"}}> 
            <Button type="submit" variant='text'  >
                Already Registered ? Please Login
            </Button>
             </NavLink>
            </form>}
            { isLoading &&  <CircularProgress /> }
            </Grid>
            
            <Grid item xs={12} md={6}>
                <img src={login}  style={{width:'100%'}} alt="" />
            </Grid>

        </Grid>
    </Container>
    );
};

export default Register;