import React from 'react';
import DoctorProfile from '../../components/doctorProfile';
import Sidebar from '../../components/sidebar';

export default function Doctor(props) {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <Sidebar doctor={props.isDoctor} />
                </div>
                <div className="col-span-3 h-screen overflow-scroll">
                    <div className="grid grid-cols-2 gap-4 auto-rows-auto mr-10">
                        <div className="ml-40 w-full" id="profile">
                            <h3 className="text-2xl font-bold text-custom-green">
                                Profile
                            </h3>
                            <DoctorProfile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
