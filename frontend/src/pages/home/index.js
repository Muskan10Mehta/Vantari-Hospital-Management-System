import React from "react";
import mainImg from "../../assets/heart-rate.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-custom-yellow h-screen">
        <div>
        <img className="ml-32" src={mainImg} alt="a hand holding a device with hearbeat recordings"></img>
        </div>
       <div>
       <h1 className="text-white font-extrabold text-5xl mt-64 text-justify">MAKING HEALTHCARE <br></br> MORE ACCESSIBLE</h1>
       </div>
       
      </div>
    </>
  );
}
