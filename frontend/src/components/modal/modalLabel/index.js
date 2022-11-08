import React from 'react';

const ModalLabel = (props) => {
    return (
        <>
            <label
                htmlFor={props.for}
                className="block mb-2 text-sm text-left font-medium text-custom-green"
            >
                {props.children}
            </label>
        </>
    );
};

export default ModalLabel;