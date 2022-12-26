import React from "react";
import { BiSearch } from "react-icons/bi";
const Wlc = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 rounded-md md:grid-flow-col justify-between ">
      <div className="grid">
        <p className="font-bold tracking-wide">Welcome to SPI !</p>
        <p className="text-base text-gray-500 font-medium">
          Hospital Admin Dashboard
        </p>
      </div>
      <div className="my-auto">
        <div className="flex mx-1 border-2 items-center justify-between rounded-md  bg-white">
          <input
            className="my-1 capitalize px-2 font-medium focus:outline-none text-gray-700  rounded-lg"
            type="text"
            placeholder="search here ..."
          />
          <p>
            <BiSearch className="h-6 cursor-pointer text-gray-700 w-6 " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wlc;
