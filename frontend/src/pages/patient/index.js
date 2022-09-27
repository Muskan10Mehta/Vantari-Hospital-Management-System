import React from 'react';
import Sidebar from '../../components/sidebar';
import InfoCard from '../../components/infocard';

export default function Patient(props) {
    return (
        <>
            <Sidebar patient={props.isPatient} />
            <InfoCard />
        </>
    );
}
