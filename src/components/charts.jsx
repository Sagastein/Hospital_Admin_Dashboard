import React from "react";
import Barchahati from "../utils/Barchart";
import HospitalChart from "../utils/HospitalChart";
import { BiChevronDown } from "react-icons/bi";
const charts = () => {
  return (
    <div className="gap-y-2 lg:h-[35rem] h-[70rem] lg:flex w-full overflow-hidden grid  gap-x-2">
      <div className="scrollbar-w-1 scrollbar-thumb-gray-700 scrollbar-track-gray-400  overflow-y-auto py-2 rouned-md bg-white">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold font-Oswald md:mx-12 p-4">Revenue</span>
          <span className="cursor-pointer text-green-500 mx-2 text-xs">2022<BiChevronDown className="inline text-xl font-bold "/></span>
        </div>
        <div className="overflow-x-auto">
        <Barchahati />
        </div>
        
      </div>
      <div className="scrollbar-w-1 scrollbar-thumb-gray-700 scrollbar-track-gray-400  overflow-y-auto flex-1 py-2 rounded-md bg-white">
      <div className="flex justify-between items-center">
          <span className="text-2xl font-Oswald font-bold md:mx-12 px-4">Patient Stastics</span>
          <span className="cursor-pointer mx-2 text-green-500 text-xs">2022<BiChevronDown className="inline text-green-400 text-xl font-bold "/></span>
        </div>
        <div className="overflow-x-auto">
        <HospitalChart />
        </div>
       
      </div>
    </div>
  );
};

export default charts;
