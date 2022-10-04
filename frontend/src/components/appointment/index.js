import React from 'react';

const Appointment = () => {
    return (
        <>
        <div>
            <form>
                <label> Select a date: </label>
                <input type='date'>
                </input>
                <label> Select a time: </label>
                <input type='time'>
                </input>
                <label> Appointment description: </label>
                <input type='text'>
                </input> 

            </form>
        </div>
        
        </>
    );
};

export default Appointment;
