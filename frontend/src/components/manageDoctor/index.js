import React, { useState } from 'react';
import axios from 'axios';
import ModalBody from '../modal/modalBody';
import ModalInput from '../modal/modalInput';
import ModalLabel from '../modal/modalLabel';
import ModalFooter from '../modal/modalFooter';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const ManageDoctor = () => {
    
    const { user } = useContext(Context);
    const supervisor = user ? user._id : '';
    const role = "Doctor";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const response = await axios.post('/auth/signup', {
                name,
                email,
                password,
                phone_number,
                role,
                supervisor,
            });

            if (response.data) {
                setName(' ');
                setEmail(' ');
                setPassword(' ');
                setPhonenumber(' ');
                alert('Doctor Profile Added');
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <>
            <ModalBody title="Add New Doctor" target="#staticBackdrop2" targetId="staticBackdrop2">
                <form
                    className="grid grid-cols-2 gap-2 items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="col-span-2">
                        <ModalLabel for="email"> Email </ModalLabel>
                        <ModalInput
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@company.com"
                            onChange={(e) => setEmail(e.target.value)}
                        ></ModalInput>
                    </div>

                    <div>
                        <ModalLabel for="orgname"> Name </ModalLabel>
                        <ModalInput
                            type="text"
                            name="orgname"
                            id="orgname"
                            placeholder="Doctor Name"
                            onChange={(e) => setName(e.target.value)}
                        ></ModalInput>
                    </div>

                    <div>
                        <ModalLabel for="phonenumber">Phone Number</ModalLabel>
                        <ModalInput
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="10 digit phone number"
                            onChange={(e) => setPhonenumber(e.target.value)}
                        ></ModalInput>
                    </div>

                    <div>
                        <ModalLabel for="password">Password</ModalLabel>
                        <ModalInput
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        ></ModalInput>
                    </div>

                    {error && (
                        <p className="text-custom-yellow">
                            Username/email is already registered
                        </p>
                    )}

                    <ModalFooter />
                </form>
            </ModalBody>
        </>
    );
};

export default ManageDoctor;
