import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({openBooking,handleBookingClose,booking,date}) => {
    const {name,time}=booking;

    const {user} = useAuth();

    const intialInfo = {patientName: user.displayName,email:user.email,phone:" "}
    const [bookingInfo,setBookingInfo] = useState(intialInfo);

    const handleOnBlur=e=>{
      const field = e.target.name 
      const value = e.target.value 
      const newInfo = {...bookingInfo }; 
      newInfo[field] = value;
      setBookingInfo(newInfo);
      // console.log(newInfo)
    }

    const handleBookingSubmit =(e)=>{ 
        //collect data
        const appointment ={
          ...bookingInfo,
          time,
          serviceName:name,
          date: date.toLocaleDateString()
        }

        // send data to the server 
        console.log(appointment)

        handleBookingClose();
        e.preventDefault();
    }
    

    return (
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
                {name}
            </Typography>
            <form onSubmit={handleBookingSubmit} >
            <TextField
            disabled // eta dile edit kora jayna
                id="outlined-size-small"
                sx={{width:"90%",m:1}}
                defaultValue={time}
                size="small"
            />
            <TextField
                id="outlined-size-small"
                sx={{width:"90%",m:1}}
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
            />
            <TextField
                id="outlined-size-small"
                sx={{width:"90%",m:1}}
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
            />
            <TextField
                id="outlined-size-small"
                sx={{width:"90%",m:1}}
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Your Phone"
                size="small"
            />
            <TextField
            disabled
                id="outlined-size-small"
                sx={{width:"90%",m:1}}
                defaultValue={date.toDateString()}
                size="small"
            />
            <Button type='submit'  variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;