import React from "react";
import mainImg from "../../assets/heart-rate.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
        <img className="" src={mainImg}></img>
        </div>
       <div>
       <h1 className="text-black font-bold text-4xl mt-5 text-justify">MAKING HEALTHCARE <br></br> MORE ACCESSIBLE</h1>
       </div>
       
      </div>
    </>
  );
}
