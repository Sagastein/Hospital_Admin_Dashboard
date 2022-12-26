import React,{useState} from "react";
import { BsFillBellFill, BsGift,BsPerson, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BiMessageSquareDetail,BiChevronDown, BiLogOutCircle } from "react-icons/bi";
import Profile from "../assets/images/profile.jpeg";
function Navbar() {
  const [profi, setProfi] = useState(false)
  return (
    <div className=" flex justify-between bg-white p-1 h-min flex-1">
      <div className="grid justify-start items-center">
        <p className="hidden sm:inline font-Oswald text-2xl font-bold uppercase">
          Dashboard
        </p>
      </div>
      <div className="flex items-center gap-x-2 md:gap-x-2">
        <div className="relative scale-75 hover:scale-90 duration-300  cursor-pointer p-2 border  rounded-full">
          <BsFillBellFill title="Notifications" className="tetx-sm"/>
          <span className="absolute text-xs h-4 text-center w-4 -top-1 -right-1 rounded-full outline-2 outline outline-purple-500 bg-white">
            3
          </span>
        </div>
        <div className="relative p-2 scale-75 hover:scale-90 duration-300 cursor-pointer border rounded-full">
          <BiMessageSquareDetail title="Chats"  className="tetx-sm"/>
          <span className="absolute text-xs h-4 text-center w-4 -top-1 -right-1 rounded-full outline-2 outline outline-green-500 bg-white">
            12
          </span>
        </div>
        <div className="relative scale-75 hover:scale-90 duration-300 p-2 border cursor-pointer rounded-full">
          <BsGift  title="Gifts" className="tetx-sm"/>
          <span className="absolute text-xs h-4 text-center w-4 -top-1 -right-1 rounded-full outline-2 outline outline-blue-500 bg-white">
            7
          </span>
        </div>
        <div className="bg-green-50 cursor-pointer border rounded-tl-full rounded-bl-full relative rounded-full flex items-center">
          <img
            className="rounded-full h-12 w-12 border-2 border-slate-700 inline-grid"
            src={Profile}
            loading="lazy"
            alt="img"
          />
          <span className="hidden px-2 md:inline underline underline-offset-2 text-green-500 text-base">
            Hello
          </span>
          <span className="hidden md:inline font-mono text-green-600 font-medium">Sagacode </span>
          <BiChevronDown onClick={()=>setProfi(!profi)}  className={`${profi && "rotate-180 transition-all duration-300"} inline mx-2 scale-150 hover:text-gray-500 text-blue-500`}/>
          <div className={`${ !profi && "hidden"} absolute transition-opacity duration-500 z-10  rounded bg-white  top-12 right-0 md:left-0`}>
            <ul className="w-32 my-2">
              <li className="p-2 cursor-pointer hover:bg-green-50  rounded-md"><BsPerson className="inline mx-1"/>Profile</li>
              <li className="p-2 cursor-pointer hover:bg-gray-300 rounded-md"><BsReverseLayoutTextWindowReverse className="inline mx-1"/>Account</li>
              <li className="p-2 cursor-pointer hover:bg-gray-300 rounded-md"><BiLogOutCircle className="inline mx-1"/>logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
