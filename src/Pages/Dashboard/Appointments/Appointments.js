import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2> Appointments</h2>
        </div>
    );
};

export default Appointments;