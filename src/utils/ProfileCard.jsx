import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

function ProfileCard(props) {
  return (
    <div className="m-3  rounded-xl">
     <div className=" rouned-xl relative">
    <img loading="lazy" className="rounded-xl object-cover aspect-square " src={props.img} alt="Profile" />
    <p className="bg-green-400 border  bottom-1 left-1/2 right-1/2 w-min -translate-x-1/2 translate-y-1/2  absolute   whitespace-nowrap text-xs p-1 px-3 text-white rounded-2xl">{props.rate}</p>
     </div>
     <div>
          <p className="font-bold pt-2 text-center capitalize">{props.name}</p>
          <p className="capitalize text-center text-green-400 font-medium font-serif">{props.role}</p>
          <p className="text-center text-xs font-medium text-gray-600">{props.address}</p>
     </div>
     <div className="grid my-1 gap-2 grid-flow-col-dense">
          <div className="p-2 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer text-emerald-500 bg-green-50"><FaInstagram className="hover:scale-110"/></div>
          <div className="p-2 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer text-emerald-500 bg-green-50"><FaFacebookF className="hover:scale-110 mx-auto"/></div>
          <div className="p-2 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer text-emerald-500 bg-green-50"><FaTwitter className="hover:scale-110 mx-auto"/></div>
     </div>
      
    </div>
  )
}

export default ProfileCard
