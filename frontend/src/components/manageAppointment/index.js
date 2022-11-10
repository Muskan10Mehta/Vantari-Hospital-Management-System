import React from 'react';
import ModalBody from '../modal/modalBody';
import ModalLabel from '../modal/modalLabel';
import ModalInput from '../modal/modalInput';


const ManageAppointment = () => {
    return (
        <>
        <div>
            <form>
                <ModalLabel>Select Date</ModalLabel>
                <ModalInput type='date'/>
                <ModalLabel> Select a time: </ModalLabel>
                
                <ModalLabel> Describe your consultation reasons: </ModalLabel>
                <ModalInput type='text' />  

            </form>
        </div>
        
        </>
    );
};

export default ManageAppointment;
