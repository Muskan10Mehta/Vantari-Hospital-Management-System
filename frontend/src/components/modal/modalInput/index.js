import React from 'react';

const ModalInput = (props) => {
    return (
        <>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500"
                required={true}
                {...props}
            />
        </>
    );
};

export default ModalInput;
