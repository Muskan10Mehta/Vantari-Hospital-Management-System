import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

    const[gender, setGender] = useState();
    
    return (
        <section class="bg-lime-200 w-full h-screen">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6  space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-custom-green md:text-2xl dark:text-white">
                            Sign up for your account
                        </h1>
                        <form class="grid grid-cols-2 gap-2 items-center space-y-4 md:space-y-6" action="#">
                        <div className='col-span-2'>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required={true}
                                />
                            </div>
                            
                            <div>
                                <label
                                    for="name"
                                    class="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="your name"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    for="phonenumber"
                                    class="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    id="phonenumber"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="10 digit phone number"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    for="Gender"
                                    class="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
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
                                    for="bloodgroup"
                                    class="block mb-2 text-sm text-left font-medium text-custom-green dark:text-white"
                                >
                                    Bloogroup
                                </label>
                                <input
                                    type="text"
                                    name="bloodgroup"
                                    id="bloodgroup"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="bloodgroup"
                                    required={true}
                                />
                            </div>
                            <div className='col-span-2'>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm  text-left font-medium text-custom-green dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required={true}
                                />
                            </div>

                            {/* <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div> 
                                    <div class="ml-3 text-sm">
                                        <label
                                            for="remember"
                                            class="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div> */}
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    class="w-full text-white bg-custom-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign up
                                </button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Have an account? {' '}
                                    <Link
                                        to="/login"
                                        class="font-medium text-custom-green hover:underline dark:text-primary-500"
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
