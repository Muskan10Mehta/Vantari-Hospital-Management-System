import React, { useEffect, useState } from 'react';
import ManageDoctor from '../../components/manageDoctor';
import Sidebar from '../../components/sidebar';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
// import Table from '../../components/table/table';
// import TableHeading from '../../components/table/tableHeading';
// import TableRow from '../../components/table/tableRow';
// import TableData from '../../components/table/tableData';

export default function Organization(props) {
    const [hospitalData, setHospitalData] = useState();
    const { user } = useContext(Context);
    const orgId = user ? user._id : '';

    const fetchHospitalData = async () => {
        const response = await axios.get('/hospital/getHospitals/' + orgId);
        setHospitalData(response.data);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <div>
                <Sidebar organization={props.isOrganization} />
            </div>
            <div className="col-span-3 h-screen overflow-scroll">
                <div className="mt-10 mx-5">
                    <ManageDoctor />
                    <div
                        onClick={() => fetchHospitalData()}
                        className="w-24 h-24 bg-custom-green rounded-md text-white font-bold cursor-pointer"
                    >
                        Get hospital data
                    </div>
                    <div>
                        <table className="w-5/6 text-gray-800 mt-6 mx-auto border-1 border-black">
                            <tr className="text-center text-black border divide-x divide-black border-black">
                                <th className="break-all px-4 py-3">
                                    Hospital Name
                                </th>
                                <th className="break-all px-4 py-3">
                                    Hospital address
                                </th>
                                <th className="break-all px-4 py-3">
                                    Hospital Phone Number
                                </th>
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
                                        <td className="break-all px-4 py-3">
                                            edit
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
        </div>
    );
}
