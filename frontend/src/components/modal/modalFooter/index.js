import React from 'react';

const ModalFooter = (props) => {
    return (
        <>
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
                    Add
                </button>
            </div>
        </>
    );
};

export default ModalFooter;
