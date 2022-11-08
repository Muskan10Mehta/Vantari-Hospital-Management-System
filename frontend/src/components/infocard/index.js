import React from 'react';

const InfoCard = (props) => {
    return (
        <>
            <div className='mt-20'>
                <div className="w-full h-96 border-2 border-solid border-custom-blue rounded grid auto-cols-auto auto-rows-auto gap-2">
                    <div>
                        <img
                            alt="profile face"
                            className="object-center object-cover w-24 h-24 border-2 border-solid border-custom-blue rounded -mt-8 ml-5"
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                        />
                    </div>
                    <div className="pt-1">
                        <p className="font-bold uppercase text-left text-xl">
                            {props.name}
                        </p>
                        <p className="text-custom-blue uppercase text-left text-sm">
                           {props.qualification}
                        </p>
                    </div>
                    <div className="text-right pt-3 px-5">
                        <p className="font-bold uppercase text-left text-sm">
                            Experience
                        </p>
                        <p className="font-semibold text-custom-blue uppercase text-xs">
                            {props.experience}
                        </p>
                    </div>
                    <div className="col-span-3 px-5">
                        <p className="font-bold uppercase text-left text-sm">
                            Specialities
                        </p>
                        <p className="font-semibold text-custom-blue uppercase text-left text-xs">
                        {props.speciality}
                        </p>
                    </div>
                    <div className="col-span-3 px-5">
                        <p className="font-bold uppercase text-left text-sm">
                            Specialitzed treatments
                        </p>
                        <p className="font-semibold text-custom-blue uppercase text-left text-xs">
                            {props.specializedTreatments}
                        </p>
                    </div>
                    <div className="col-span-2 px-5">
                        <p className="font-bold uppercase text-left text-sm">
                            Hospital
                        </p>
                        <p className="font-semibold text-custom-blue uppercase text-left text-xs">
                            {props.hospital}
                        </p>
                    </div>

                    <div className="col-span-2 px-5">
                        <p className="font-bold uppercase text-left text-sm">
                            Languages
                        </p>
                        <p className="font-semibold text-custom-blue uppercase text-left text-xs">
                            {props.consultingLanguages}
                        </p>
                    </div>

                    <div className="px-5">
                        <button className="bg-custom-blue font-bold text-white rounded py-2 px-3">
                            Consult
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoCard;
