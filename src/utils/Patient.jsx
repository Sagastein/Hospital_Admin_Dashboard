import React from "react";

const Patient = (props) => {
  return (
    <div className="flex py-2 justify-between">
      <div className="flex">
        <div className=" p-0.5  block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
          <img
            loading="lazy"
            className="h-12 w-12
          
             object-fill border-2 rounded-full"
            src={props.img}
            alt="patient"
          />
        </div>
        <div className="ml-2">
          <p className="font-medium font-Roboto">{props.name}</p>
          <span className="text-xs font-mono italic font-bold text-gray-400">
            {props.age + " "}Years
          </span>
        </div>
      </div>
      <p
        className={`${props.style} capitalize  font-serif self-center text-sm cursor-pointer`}
      >
        {props.status}
      </p>
    </div>
  );
};

export default Patient;
