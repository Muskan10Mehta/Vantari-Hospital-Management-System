import React from 'react';
import ManageAdmin from '../../components/manageAdmin';
import Sidebar from '../../components/sidebar';

export default function Admin(props) {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <Sidebar admin={props.isAdmin} />
                </div>
                <div className="col-span-3 h-screen overflow-scroll">
                    <div className='mt-10 mx-5'>
                        <ManageAdmin />
                    </div>
                </div>
            </div>
        </>
    );
}
