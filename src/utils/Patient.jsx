import React from "react";
import Prof from "../assets/images/profile.jpeg";

const Patient = props => {
  return (
    <div className="flex py-2 justify-between">
      <div className="flex">
        <div>
          <img className="h-12 w-12 rounded-full" src={Prof} alt="patient" />
        </div>
        <div className="ml-2">
          <p className="font-medium font-Roboto">{props.name}</p>
          <span className="text-xs font-serif italic font-bold text-gray-400">{props.age+ " "}Years</span>
        </div>
      </div>
      <p className={`${props.style} capitalize  font-serif self-center text-sm cursor-pointer`}>{props.status}</p>
    </div>
  );
};

export default Patient;
