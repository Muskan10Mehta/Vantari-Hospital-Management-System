import React from "react";
import InfoCard from "../../components/infocard";
import Sidebar from "../../components/sidebar";

export default function Doctor(props) {
    return (
        <>
        <div className="grid grid-cols-4 gap-4">
            <div>
                <Sidebar doctor={props.isDoctor}/>  
            </div>
            <div className="col-span-3 h-screen overflow-scroll">
               <div className="grid grid-cols-2 gap-4 auto-rows-auto mr-10">
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                <div>
                    <InfoCard/>
                </div>
                    
               </div>

            </div>
        </div>
        
        </>
    );
}