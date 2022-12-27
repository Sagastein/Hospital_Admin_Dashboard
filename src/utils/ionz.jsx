import React from "react";
import { BiAccessibility,BiPhoneCall} from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const ionz = () => {
  return (
    <div className=" grid w-12 fixed right-0 top-3/4">
      <p className="p-2 absolute cursor-pointer hover:scale-110  rounded-full text-white m-auto bg-green-400"><FaWhatsapp className="text-3xl"/></p>
      <p className="p-2 absolute cursor-pointer hover:scale-110 rounded-full top-20 m-auto bg-blue-500 text-white"><BiPhoneCall className="text-3xl"/></p>
    </div>
  );
};

export default ionz;
