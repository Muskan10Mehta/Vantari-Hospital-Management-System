import React, { useState } from 'react';
import axios from 'axios';

const ManageAdmin = () => {
    const role = 'Organization';
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
            });

            if (response.data) {
                alert('Hospital Admin Profile Added');
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <>
            <div>
                <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-custom-green text-white font-bold text-xs uppercase rounded hover:bg-custom-yellow hover:shadow-md transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                >
                    + Add Hospital Admin
                </button>

                <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-gray-200 rounded-t-md">
                                <h5
                                    className="text-xl font-medium leading-normal text-gray-800"
                                    id="exampleModalLabel"
                                >
                                    Add Hospital Admin
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body relative p-4">
                                <form
                                    className="grid grid-cols-2 gap-2 items-center"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm text-left font-medium text-custom-green"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="name@company.com"
                                            required={true}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm text-left font-medium text-custom-green"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
                                            placeholder="your name"
                                            required={true}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phonenumber"
                                            className="block mb-2 text-sm text-left font-medium text-custom-green "
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phonenumber"
                                            id="phonenumber"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="10 digit phone number"
                                            required={true}
                                            onChange={(e) =>
                                                setPhonenumber(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm  text-left font-medium text-custom-green "
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                                            required={true}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-custom-yellow">
                                            Username/email is already registered
                                        </p>
                                    )}

                                    <div className="modal-footer col-span-2 flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                        <button
                                            type="button"
                                            className="inline-block px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-custom-pink hover:shadow-lg focus:bg-custom-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-pink active:shadow-lg transition duration-150 ease-in-out"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <span className="w-2"></span>
                                        <button
                                            type="submit"
                                            className="inline-block px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-custom-yellow hover:shadow-lg focus:bg-custom-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-pink active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Add Admin Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageAdmin;
