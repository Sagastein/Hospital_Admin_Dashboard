import React from "react";
import { BiAccessibility,BiPhoneCall} from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const ionz = () => {
  return (
    <div className="border border-blue-600 grid w-8 fixed right-0 top-3/4">
      <p className="p-2 absolute bottom-32 rounded-full text-white m-auto bg-green-400"><FaWhatsapp/></p>
      <p className="p-2 absolute rounded-full top-10 m-auto bg-blue-500 text-white"><BiAccessibility/></p>
      <p className="p-2 absolute rounded-full top-20 m-auto bg-blue-500 text-white"><BiPhoneCall/></p>
    </div>
  );
};

export default ionz;
