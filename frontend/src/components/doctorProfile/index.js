import React, { useState } from 'react';
import ModalLabel from '../modal/modalLabel';
import ModalInput from '../modal/modalInput';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import axios from 'axios';

const DoctorProfile = () => {
    const { user } = useContext(Context);
    const userId = user ? user._id : '';
    const name = user ? user.name : '';
    const orgId = user ? user.supervisor : '';
    const [qualification, setQualification] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [experience, setExperience] = useState('');
    const [consultingLanguages, setConsultingLanguages] = useState('');
    const [specializedTreatments, setSpecializedTreatments] = useState('');
    const [hospitalData, setHospitalData] = useState();
    const [hospital, setHospital] = useState();
    const [photo, setPhoto] = useState('');
    const hospitalName = hospital ? hospital.name : ' ';
    const hospitalId = hospital ? hospital._id : ' ';
    // const [startTime, setStartTime] = useState('');
    // const [endTime, setEndTime] = useState('');
    // const [breakStart, setBreakStart] = useState('');
    // const [breakEnd, setBreakEnd] = useState('');
    const [addprofile, setAddProfile] = useState('');
    const [updateprofile, setUpdateProfile] = useState('');
    const [error, setError] = useState('');

    const fetchHospitalData = async () => {
        const response = await axios.get(
            '/hospital/getHospitals/?orgId=' + orgId
        );
        setHospitalData(response.data);
    };
    
    const handleSubmit = async (e) => {
        const status = await axios('/doctor/getDoctor/' + userId);

        console.log(status.data);

        if (!status.data) {
            handleNewProfile();
            setAddProfile(true);
            setUpdateProfile(false);
        } else {
            handleUpdate();
            setUpdateProfile(true);
            setAddProfile(false);
        }
    };

    const handleNewProfile = async (e) => {
        e.preventDefault();
        setError(false);

        const newProfile = {
            userId,
            name,
            qualification,
            speciality,
            experience,
            specializedTreatments,
            consultingLanguages,
            // startTime,
            // endTime,
            // breakStart,
            // breakEnd,
            hospitalName,
            hospitalId,
            photo,
        };

        newProfile.qualification = qualification.split(',');
        newProfile.speciality = speciality.split(',');
        newProfile.specializedTreatments = specializedTreatments.split(',');
        newProfile.consultingLanguages = consultingLanguages.split(',');
        newProfile.photo = ' ';

        try {
            const response = await axios.post('/doctor/addProfile', newProfile);

            if (response.data) {
                alert('Profile Added');
            }
        } catch (err) {
            setError(err);
        }
    };

    const handleUpdate = async () => {};

    return (
        <>
            <div>
                <div id="addNewProfile">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <ModalLabel>Qualification</ModalLabel>
                            <ModalInput
                                type="text"
                                name="qualification"
                                id="qualification"
                                placeholder="Your Qualifications"
                                onChange={(e) =>
                                    setQualification(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <ModalLabel>Speciality</ModalLabel>
                            <ModalInput
                                type="text"
                                name="speciality"
                                id="speciality"
                                placeholder="Your Speciality"
                                onChange={(e) => setSpeciality(e.target.value)}
                            />
                        </div>
                        <div>
                            <ModalLabel>Experience</ModalLabel>
                            <ModalInput
                                type="text"
                                name="experience"
                                id="experience"
                                placeholder="Your Experience in years"
                                onChange={(e) => setExperience(e.target.value)}
                            />
                        </div>

                        <div>
                            <ModalLabel>Specialized Treatments</ModalLabel>
                            <ModalInput
                                type="text"
                                name="specializedTreatments"
                                id="specializedTreatments"
                                placeholder="Your Speacialized Treatments"
                                onChange={(e) =>
                                    setSpecializedTreatments(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <ModalLabel>Consulting Language</ModalLabel>
                            <ModalInput
                                type="text"
                                name="consultingLanguages"
                                id="consultingLanguages"
                                placeholder="Languages you consult in"
                                onChange={(e) =>
                                    setConsultingLanguages(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <ModalLabel>
                                Hospitals You are Available at:
                            </ModalLabel>
                            <select
                                required
                                value={hospitalId}
                                onChange={(e) => setHospital(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                name="orgId"
                                id="orgId"
                                onClick={() => fetchHospitalData()}
                            >
                                <option value="" disabled selected>
                                    Select Hospital
                                </option>
                                {hospitalData ? (
                                    hospitalData.map((hospital) => (
                                        <option value={hospital}>
                                            {hospital.name}
                                        </option>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </select>
                        </div>
                        {error && <p>
                            There is an error. Please try again later.
                            </p>}
                        <button
                            type="submit"
                            className="inline-block px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-custom-yellow hover:shadow-lg focus:bg-custom-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-pink active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Save
                        </button>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    );
};

export default DoctorProfile;
