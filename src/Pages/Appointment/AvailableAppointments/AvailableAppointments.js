import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h3>Available Appointments {date.toDateString()}</h3>
        </div>
    );
};

export default AvailableAppointments;