import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [role, setRole] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const response = await axios.post('/auth/signup', {
                name,
                email,
                password,
                phoneNumber,
                role,
            });

            if (response.data) {
                window.location.replace('/login');
                alert('Your account is registered, please login');
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <section className="bg-lime-200 w-full h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-custom-green md:text-2xl dark:text-white">
                            Sign up for your account
                        </h1>
                        <form
                            className="grid grid-cols-2 gap-2 items-center space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your name"
                                    required={true}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phonenumber"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    id="phonenumber"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="10 digit phone number"
                                    required={true}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                />
                            </div>
                            {/* <div>
                                <label
                                    htmlFor="Gender"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Gender
                                </label>
                                <select required value={gender} onChange={(e) => setGender(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' name="gender" id="gender">
                                    <option value="" disabled selected>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Transgender">Transgender</option>
                                    <option value="Non Binary">Non Binary</option>
                                    <option value="Intersex">Intersex</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="bloodgroup"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Bloogroup
                                </label>
                                <input
                                    type="text"
                                    name="bloodgroup"
                                    id="bloodgroup"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="bloodgroup"
                                    required={true}
                                />
                            </div> */}
                            <div className="col-span-2">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm  text-left font-medium text-custom-green dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required={true}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="role"
                                    className="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Sign up as:
                                </label>
                                <select
                                    required
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    name="gender"
                                    id="gender"
                                >
                                    <option value="" disabled selected>
                                        Select Role
                                    </option>
                                    <option value="Patient">Patient</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                            {error && (
                                <p className="text-custom-yellow">
                                    Username/email is already registered.
                                </p>
                            )}

                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="w-full text-white bg-custom-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign up
                                </button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Have an account?{' '}
                                    <Link
                                        to="/login"
                                        className="font-medium text-custom-green hover:underline dark:text-primary-500"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
