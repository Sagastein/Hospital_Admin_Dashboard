import React from "react";
import ProfileCard from "../utils/ProfileCard";
import {data} from "../Data/Profile"
import {patientdata} from "../Data/Patient"
import Patient from "../utils/Patient";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsChevronDoubleRight } from "react-icons/bs";
function Info() {
  return (
    <div className="py-1 gap-3 mb-32 grid md:flex">
      <div className="bg-white rounded-md">
        <div className="flex justify-between items-center">
          <p className="pl-2 font-bold">Top Rated Doctors</p>
          <p className="pl-2 text-xs text-green-500">View More <BsChevronDoubleRight className="inline text-sm px-1"/></p>
        </div>
        <div className="flex aspect-auto flex-wrap">
          <Splide
            options={{
              type: "loop",
              rewind: true,
              autoplay: true,
              perPage: 3,
              snap: true,
              lazyLoad: "nearby",
              drag: true,
              width: 600,
              gap: "1rem",
              breakpoints: {
                640: {
                  perPage: 1,
                  width: 300,
                },
              },
            }}
            aria-label="top related Doctors"
          >
            {
             data.map((item,i)=>(
                <SplideSlide key={i}>
                <ProfileCard 
                img={item.img}
                rate={item.Rate}
                name={item.Name}
                role={item.Role}
                address={item.Address}
                />
              </SplideSlide>
              ))
            }
            
          </Splide>
        </div>
      </div>
      <div className="bg-white  p-4 w-full ">
        <div className="flex pb-4 rounded-md bg-white justify-between items-center">
          <span className="font-bold text-xl">Recent Patients</span>
          <span className="text-green-500 cursor-pointer">View More
          <BsChevronDoubleRight className="inline px-1"/>
          </span>
        </div>
        <div className="grid md:px-6 aspect-auto divide-y-2">
          {
            patientdata.map((item,i)=>(
              <Patient
              key={i}
              name={item.Name}
              img={item.img}
              age={item.Age}
              status={item.status}
              style={item.style}
              />
            ))

          }
          {/* <Patient />
          <Patient />
          <Patient />
          <Patient /> */}
        </div>
      </div>
    </div>
  );
}

export default Info;
