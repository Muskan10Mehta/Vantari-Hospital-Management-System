import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import ModalBody from '../modal/modalBody';
import ModalInput from '../modal/modalInput';
import ModalLabel from '../modal/modalLabel';
import ModalFooter from '../modal/modalFooter';
import axios from 'axios';

const ManageHospital = () => { 

    const { user } = useContext(Context);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orgId, setOrgId] = useState('');
    const adminId = user ? user._id : '';
    const [adminData, setAdminData] = useState();
    const [error, setError] = useState('');

    const fetchAdminData = async () => {
        const response = await axios.get('/users/getAdmins/' + adminId);
        setAdminData(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const response = await axios.post('/hospital/addnew', {
                name,
                address,
                phoneNumber,
                orgId,
                adminId,
            });

            if (response.data) {
                alert('Hospital Added');
                setName('');
                setAddress('');
                setPhoneNumber('');
                setOrgId(''); 
            }
        } catch (err) {
            setError(err);
        }

    };

    return (
        <>
            <ModalBody title="Add New Hospital" target="#staticBackdrop" targetId="staticBackdrop">
                <form
                    className="grid grid-cols-2 gap-2 items-center"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <ModalLabel for="name"> Name </ModalLabel>
                        <ModalInput
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Hospital Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <ModalLabel for="address"> Address </ModalLabel>
                        <ModalInput
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Hospital Address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div>
                        <ModalLabel for="phoneNumber">
                            {' '}
                            Phone Number{' '}
                        </ModalLabel>
                        <ModalInput
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="10 digit phone number"
                            required={true}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <ModalLabel for="orgId"> Hospital Admin </ModalLabel>
                        <select
                            required
                            value={orgId}
                            onChange={(e) => setOrgId(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            name="orgId"
                            id="orgId"
                            onClick={() => fetchAdminData()}
                        >
                            <option value="" disabled selected>
                                Select Hospital Admin
                            </option>
                            {adminData ? (
                                adminData.map((orgAdmin) => (
                                    <option value={orgAdmin._id}>
                                        {orgAdmin.name}
                                    </option>
                                ))
                            ) : (
                                <></>
                            )}
                        </select>
                    </div>

                    {error && (
                        <p className="text-custom-yellow">
                            error adding hospital try again later
                        </p>
                    )}
                    <ModalFooter/>
                </form>
            </ModalBody>
        </>
    );
};

export default ManageHospital;
