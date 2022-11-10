import React from 'react';
import ManageAdmin from '../../components/manageAdmin';
import ManageHospital from '../../components/manageHospital';
import Sidebar from '../../components/sidebar';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';

export default function Admin(props) {
    const [hospitalData, setHospitalData] = useState();
    const [adminData, setAdminData] = useState();
    const { user } = useContext(Context);
    const adminId = user ? user._id : '';

    const fetchHospitalData = async () => {
        const response = await axios.get(
            '/hospital/getHospitals/?adminId=' + adminId
        );
        setHospitalData(response.data);
    };

    const fetchAdminData = async () => {
        const response = await axios.get('/users/getUsers/' + adminId);
        setAdminData(response.data);
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <Sidebar admin={props.isAdmin} />
                </div>
                <div className="col-span-3 h-screen overflow-scroll">
                    <div className="mt-10 mx-5" id="organizationAdmins">
                        <ManageAdmin />
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-custom-green text-white font-bold text-xs uppercase rounded hover:bg-custom-yellow hover:shadow-md transition duration-150 ease-in-out"
                            onClick={fetchAdminData}
                        >
                            Refresh
                        </button>
                        <table className="w-5/6 text-gray-800 mt-6 mx-auto border-1 border-black">
                            <tr className="text-center text-black border divide-x divide-black border-black">
                            <th className="break-all px-4 py-3">ID</th>
                                <th className="break-all px-4 py-3">Name</th>
                                <th className="break-all px-4 py-3">
                                    Phone Number
                                </th>
                                <th className="break-all px-4 py-3">Actions</th>
                            </tr>
                            {adminData ? (
                                adminData.map((data) => (
                                    <tr className="text-left text-black border divide-x divide-black border-black">
                                        
                                        <td className="break-all px-4 py-3">
                                            {data._id}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                            {data.name}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                            {data.phoneNumber}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                            <div className="bg-custom-green text-custom-yellow w-1/2 rounded-md text-bold mx-5">
                                                Edit
                                            </div>
                                            <div className="bg-custom-green text-custom-yellow w-1/2 rounded-md text-bold mx-5">
                                                Delete
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <></>
                            )}
                        </table>
                    </div>
                    <div className="mt-10 mx-5" id="hospitals">
                        <ManageHospital />
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-custom-green text-white font-bold text-xs uppercase rounded hover:bg-custom-yellow hover:shadow-md transition duration-150 ease-in-out"
                            onClick={fetchHospitalData}
                        >
                            Refresh
                        </button>
                        <table className="w-5/6 text-gray-800 mt-6 mx-auto border-1 border-black">
                            <tr className="text-center text-black border divide-x divide-black border-black">
                                <th className="break-all px-4 py-3">Name</th>
                                <th className="break-all px-4 py-3">Address</th>
                                <th className="break-all px-4 py-3">
                                    Phone Number
                                </th>
                                <th className="break-all px-4 py-3"> Hospital Admin</th>
                                <th className="break-all px-4 py-3">Actions</th>
                            </tr>
                            {hospitalData ? (
                                hospitalData.map((data) => (
                                    <tr className="text-left text-black border divide-x divide-black border-black">
                                        <td className="break-all px-4 py-3">
                                            {data.name}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                            {data.address}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                            {data.phoneNumber}
                                        </td>
                                        <td>
                                            {data.orgId}
                                        </td>
                                        <td className="break-all px-4 py-3">
                                        <div className="bg-custom-green text-custom-yellow w-1/2 rounded-md text-bold mx-5">
                                                Edit
                                            </div>
                                            <div className="bg-custom-green text-custom-yellow w-1/2 rounded-md text-bold mx-5">
                                                Delete
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <></>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
