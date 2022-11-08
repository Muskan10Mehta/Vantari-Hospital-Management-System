import React from 'react';

const ModalBody = (props) => {
    return (
        <>
            <div>
                <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-custom-green text-white font-bold text-xs uppercase rounded hover:bg-custom-yellow hover:shadow-md transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target={props.target}
                >
                    {props.title}
                </button>

                <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id={props.targetId}
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
                                    {props.title}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body relative p-4">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalBody;
