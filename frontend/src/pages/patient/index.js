import React from 'react';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import InfoCard from '../../components/infocard';
import axios from 'axios';
import ManageAppointment from '../../components/manageAppointment';

export default function Patient(props) {

    const [doctors, setDoctors] = useState([]);
    const [hospital, setHospital] = useState('');
    const { search } = useLocation();

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await axios.get('/doctor/getAllDoctors' + search);
            setDoctors(response.data);
        };
        fetchDoctors();
    }, [search]);

    const fetchHospital = async(id) => {
        const hospitalResponse = await axios.get('/hospital/getHospital/' + id);
        setHospital(hospitalResponse.data);
    }
    
    function hospitalName(id){
        fetchHospital(id);
        return hospital.name;
    };
     
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
            <div>
            <Sidebar patient={props.isPatient} />  
            </div>
            <div className="col-span-3 h-screen overflow-scroll">
               <div className="grid grid-cols-2 gap-4 auto-rows-auto mr-10">
                {doctors.map((doctor) => (
                    <InfoCard
                    name = {doctor.name}
                    qualification = {doctor.qualification}
                    experience = {doctor.experience}
                    speciality = {doctor.speciality}
                    specializedTreatments = {doctor.specializedTreatments}
                   // hospital = {hospitalName(doctor.hospitalId)}
                    consultingLanguages = {doctor.consultingLanguages}
                    />
                ))} 

                <ManageAppointment/>
               </div>
            </div>
        </div>
        </>
    );
}
