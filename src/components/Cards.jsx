import React from "react";
import {  FaDonate, FaHandsHelping, FaHeartbeat, FaRegCalendarAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className=" px-1 grid sm:grid-cols-2 md:grid-cols-4 items-center gap-4 py-3">
      <div className=" bg-gradient-to-l hover:scale-105 duration-200 cursor-pointer from-red-600 to-red-400 rounded-md flex justify-between items-center gap-x-2 p-2 px-4">
        <div>
          <p className="font-medium text-white text-sm">Total Patient</p>
          <p className="text-3xl text-white">
            874K
          </p>
        </div>
        <div className="border-2 h-16 w-16 p-2 flex justify-center items-center rounded-full">
          <FaHeartbeat className="h-14 w-14 text-white" />
        </div>
      </div>
      <div className=" bg-gradient-to-l hover:scale-105 duration-200 cursor-pointer from-green-600 to-green-400 rounded-md flex justify-between items-center gap-x-2 p-2 px-4">
        <div>
          <p className="font-medium text-white text-sm">Doctor</p>
          <p className="text-3xl text-white">
            76
          </p>
        </div>
        <div className="border h-16 w-16 p-2 flex justify-center items-center rounded-full">
          <FaHandsHelping className="text-white h-14 w-14" />
        </div>
      </div>
      <div className=" bg-gradient-to-l hover:scale-105 duration-200 from-blue-600 to-blue-400 cursor-pointer rounded-md flex justify-between items-center gap-x-2 p-2 px-4">
        <div>
          <p className="font-medium text-white text-sm">Appointment</p>
          <p className="text-3xl text-white">
            108
          </p>
        </div>
        <div className="border-2  h-16 w-16 p-2 flex justify-center items-center rounded-full">
          <FaRegCalendarAlt className="text-white h-12 w-12" />
        </div>
      </div>
      <div className=" bg-gradient-to-l from-purple-600 cursor-pointer hover:scale-105 duration-200 to-purple-400  rounded-md flex justify-between items-center gap-x-2 p-2 px-4">
        <div>
          <p className="font-medium text-white text-sm">Hospital Earning</p>
          <p className="text-3xl text-white">
            273K
          </p>
        </div>
        <div className="border h-16 w-16 p-2 flex justify-center items-center rounded-full">
          <FaDonate className="text-white h-12 w-12" />
        </div>
      </div>
     
     
    </div>
  );
};

export default Cards;
